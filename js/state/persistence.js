// Persistência: localStorage (cache/offline) + db do Artifact (sincroniza celular/PC) + exportar/importar.
// Tudo é defensivo: sem localStorage, sem window.claude, sem rede, o jogo continua funcionando.
import { CHAVE_LOCAL, migrar, validarImportacao, hojeISO } from "./schema.js";

const DEBOUNCE_MS = 1200;
const TIMEOUT_USE_MS = 8000;

export const STATUS = { LOCAL: "local", SALVANDO: "salvando", OK: "ok" };

export function lerLocal(storage, chave = CHAVE_LOCAL) {
  try {
    const bruto = storage.getItem(chave);
    if (!bruto) return null;
    return JSON.parse(bruto);
  } catch { return null; }
}
export function gravarLocal(storage, save, chave = CHAVE_LOCAL) {
  try { storage.setItem(chave, JSON.stringify(save)); return true; } catch { return false; }
}

function storageSeguro(win) {
  try { const s = win.localStorage; s.getItem("__t"); return s; } catch { return { getItem() { return null; }, setItem() { throw new Error("sem storage"); }, removeItem() {} }; }
}

function comTimeout(promessa, ms) {
  return Promise.race([promessa, new Promise((res) => setTimeout(() => res(null), ms))]);
}

/** Um save "vazio": personagem não criado e nenhum progresso. */
export function saveVazio(s) {
  return !s || (!(s.jogador && s.jogador.criado) && !(s.xp > 0));
}

/**
 * Decide qual cópia vale: "local", "remoto" ou "igual".
 * Regra: progresso nunca é trocado por menos progresso sem querer.
 * 1) cópia vazia perde; 2) quem recomeçou a jornada por último vence (recomeço é intencional);
 * 3) na mesma jornada, mais XP vence; 4) empate de XP: a alteração mais recente vence.
 */
export function escolherSave(local, remoto) {
  if (!remoto) return "local";
  if (saveVazio(local) && !saveVazio(remoto)) return "remoto";
  if (saveVazio(remoto) && !saveVazio(local)) return "local";
  const gl = local.reiniciadoEm || "", gr = remoto.reiniciadoEm || "";
  if (gl !== gr) return gl > gr ? "local" : "remoto";
  const xl = local.xp || 0, xr = remoto.xp || 0;
  if (xl !== xr) return xl > xr ? "local" : "remoto";
  const al = local.atualizadoEm || "", ar = remoto.atualizadoEm || "";
  if (al === ar) return "igual";
  return al > ar ? "local" : "remoto";
}

/**
 * Cria o gerenciador. `amb` = { claude, storage, doc } (injetável nos testes).
 * onStatus(status, detalhe) atualiza o indicador do HUD.
 * onAviso(texto) mostra um toast discreto (no máximo 1 vez por tipo).
 * onConta(conta) avisa quando o estado da conta muda: { verificado, nuvem, nome, motivo }.
 */
export function criarPersistencia(store, amb = {}, { onStatus = () => {}, onAviso = () => {}, onConta = () => {} } = {}) {
  const win = typeof window !== "undefined" ? window : {};
  const storage = amb.storage || storageSeguro(win);
  const claudeObj = "claude" in amb ? amb.claude : win.claude;
  const doc = amb.document || (typeof document !== "undefined" ? document : null);
  // Uma chave local por conta: duas pessoas no mesmo navegador nunca misturam progresso.
  const chave = amb.chaveLocal || CHAVE_LOCAL;
  // backend opcional (ex.: Firebase): { ref, refCopia, nome, email }. Sem backend, usa o db do claude.ai.
  const backend = amb.backend || null;

  let ref = null;            // doc do save na nuvem
  let refCopia = null;       // doc da cópia de segurança automática
  let nuvemOk = false;
  let desligadoNuvem = false;
  let timer = null;
  let gravando = false;
  let pendente = false;
  let ultimoEnviado = "";
  const avisou = new Set();
  const conta = { verificado: false, nuvem: false, nome: "", email: "", motivo: "" };

  const avisarUmaVez = (chave, texto) => { if (!avisou.has(chave)) { avisou.add(chave); onAviso(texto); } };
  const pausa = (ms) => new Promise((r) => setTimeout(r, ms));
  const mudarConta = (patch) => { Object.assign(conta, patch); try { onConta({ ...conta }); } catch { /* ignora */ } };

  function status() {
    if (!nuvemOk) return onStatus(STATUS.LOCAL, "Salvo só neste navegador");
    onStatus(gravando || pendente ? STATUS.SALVANDO : STATUS.OK, gravando || pendente ? "Salvando na sua conta…" : "Salvo na sua conta");
  }

  function desligar(motivo) {
    desligadoNuvem = true; nuvemOk = false;
    mudarConta({ verificado: true, nuvem: false, motivo });
  }

  /** Guarda uma cópia na nuvem antes de qualquer troca que descarte progresso. */
  async function guardarCopia(save, origem) {
    if (!refCopia || saveVazio(save)) return;
    try { await refCopia.set({ guardadoEm: new Date().toISOString(), origem, save: JSON.parse(JSON.stringify(save)) }); } catch { /* best-effort */ }
  }

  async function enviarNuvem(tentarDeNovo = true) {
    if (!ref || desligadoNuvem) return;
    if (gravando) { pendente = true; return; }
    const corpo = JSON.stringify(store.estado);
    if (corpo === ultimoEnviado) { pendente = false; status(); return; }
    gravando = true; pendente = false; status();
    try {
      await ref.set(JSON.parse(corpo));
      ultimoEnviado = corpo;
    } catch (e) {
      const code = e && e.code;
      if ((code === "unavailable" || code === "deadline-exceeded") && tentarDeNovo) {
        gravando = false;
        await pausa(1000 + Math.random() * 2000);
        return enviarNuvem(false);
      }
      if (["quota_exceeded", "invalid_argument", "not_granted", "revoked", "capability_disabled", "capability_removed", "permission-denied", "unauthenticated", "resource-exhausted"].includes(code)) {
        desligar(["invalid_argument", "not_granted", "permission-denied", "unauthenticated"].includes(code) ? "sem-permissao" : "erro");
        avisarUmaVez("nuvem", "Não consegui salvar na sua conta: o progresso fica só neste navegador. Veja como resolver no Perfil.");
      }
    } finally {
      gravando = false;
      status();
    }
    if (pendente && !desligadoNuvem) { pendente = false; agendar(); }
  }

  function agendar() {
    if (!ref || desligadoNuvem) return;
    pendente = true; status();
    clearTimeout(timer);
    timer = setTimeout(() => { pendente = false; enviarNuvem(); }, DEBOUNCE_MS);
  }

  /** Compara com a nuvem e fica com a cópia certa (ver escolherSave). */
  async function puxar() {
    if (!ref || desligadoNuvem) return;
    try {
      const snap = await ref.get();
      const local = store.estado;
      const remoto = snap.exists ? migrar(snap.data()) : null;
      const quem = escolherSave(local, remoto);
      if (quem === "remoto") {
        if (!saveVazio(local)) await guardarCopia(local, "aparelho");
        store.substituir(remoto, "servidor");
        gravarLocal(storage, store.estado, chave);
        ultimoEnviado = JSON.stringify(store.estado);
      } else if (quem === "local") {
        if (remoto && !saveVazio(remoto)) await guardarCopia(remoto, "nuvem");
        await enviarNuvem();
      } else ultimoEnviado = JSON.stringify(local);
    } catch (e) {
      if (e && ["not_granted", "revoked", "capability_disabled", "permission-denied", "unauthenticated"].includes(e.code)) desligar("erro");
    }
    status();
  }

  async function conectar() {
    if (backend) {
      ref = backend.ref; refCopia = backend.refCopia || null;
      nuvemOk = true; status();
      await puxar();
      if (!desligadoNuvem) mudarConta({ verificado: true, nuvem: true, nome: backend.nome || "", email: backend.email || "", motivo: "" });
      return nuvemOk;
    }
    if (amb.convidado) { mudarConta({ verificado: true, nuvem: false, motivo: "convidado" }); status(); return false; }
    if (!claudeObj || typeof claudeObj.use !== "function") { mudarConta({ verificado: true, nuvem: false, motivo: "fora-do-claude" }); status(); return false; }
    try {
      const [user, db] = await Promise.all([comTimeout(claudeObj.use("user"), TIMEOUT_USE_MS), comTimeout(claudeObj.use("db"), TIMEOUT_USE_MS)]);
      if (!user || !db) { mudarConta({ verificado: true, nuvem: false, motivo: "sem-login" }); status(); return false; }
      const uid = await user.id();
      if (!uid) { mudarConta({ verificado: true, nuvem: false, motivo: "sem-login" }); status(); return false; }
      let nome = "";
      try { const me = await user.me(); nome = (me && me.name) || ""; } catch { /* ignora */ }
      let podeGravar = null;
      try { podeGravar = await user.can("data.write"); } catch { /* null = não informado */ }
      if (podeGravar === false) { mudarConta({ nome }); desligar("sem-permissao"); status(); return false; }
      ref = db.doc("data/users/" + uid + "/save");
      refCopia = db.doc("data/users/" + uid + "/copia");
      nuvemOk = true;
      status();
      await puxar();
      if (!desligadoNuvem) mudarConta({ verificado: true, nuvem: true, nome, motivo: "" });
      return nuvemOk;
    } catch { nuvemOk = false; mudarConta({ verificado: true, nuvem: false, motivo: "erro" }); status(); return false; }
  }

  /** Grava já (sem esperar o debounce): usado ao sair/esconder a página. */
  function descarregar() {
    gravarLocal(storage, store.estado, chave);
    if (ref && !desligadoNuvem && JSON.stringify(store.estado) !== ultimoEnviado) { clearTimeout(timer); pendente = false; enviarNuvem(); }
  }

  function aoMudarVisibilidade() {
    if (!doc) return;
    if (doc.visibilityState === "hidden") descarregar();
    else if (doc.visibilityState === "visible") puxar();
  }

  return {
    /** 1) lê o local e aplica já (primeira pintura). Retorna true se havia save. */
    carregarLocal() {
      const bruto = lerLocal(storage, chave);
      if (bruto) { store.substituir(migrar(bruto), "carga"); return true; }
      return false;
    },
    /** 2) liga gravação automática e conecta à conta (resolve quando a primeira sincronização termina). */
    iniciar() {
      store.assinar((estado, motivo) => {
        if (motivo === "carga" || motivo === "servidor") return;
        gravarLocal(storage, estado, chave);
        agendar();
      });
      if (doc) doc.addEventListener("visibilitychange", aoMudarVisibilidade);
      if (win.addEventListener) win.addEventListener("pagehide", descarregar);
      try { if (win.navigator && win.navigator.storage && win.navigator.storage.persist) win.navigator.storage.persist().catch(() => {}); } catch { /* ignora */ }
      status();
      return conectar();
    },
    gravarAgora() { gravarLocal(storage, store.estado, chave); clearTimeout(timer); return enviarNuvem(); },
    puxar,
    get nuvemAtiva() { return nuvemOk; },
    get conta() { return { ...conta }; },
    /** Cópia de segurança automática guardada na nuvem (ou null). */
    async lerCopia() {
      if (!refCopia) return null;
      try { const s = await refCopia.get(); if (!s.exists) return null; const d = s.data(); return d && d.save ? { guardadoEm: d.guardadoEm, origem: d.origem, save: migrar(d.save) } : null; } catch { return null; }
    },
    async restaurarCopia() {
      const c = await this.lerCopia();
      if (!c) return false;
      await guardarCopia(store.estado, "antes-de-restaurar");
      store.importar(c.save);
      return true;
    },
    limparLocal() { try { storage.removeItem(chave); } catch {} },
  };
}

/* ---------- Exportar / importar ---------- */
export function montarBackup(save) {
  const corpo = { app: "jornada-amazon-es", exportadoEm: new Date().toISOString(), save };
  return JSON.stringify(corpo, null, 2);
}
export function nomeBackup(d = new Date()) { return `jornada-backup-${hojeISO(d)}.json`; }

/** Oferece o arquivo: usa a capacidade `downloads` quando existe; senão Blob + <a download>. */
export async function baixarArquivo(nome, texto, mime = "application/json") {
  const c = typeof window !== "undefined" ? window.claude : null;
  if (c && typeof c.use === "function") {
    try {
      const dl = await comTimeout(c.use("downloads"), 3000);
      if (dl) { await dl.save({ filename: nome, data: texto }); return { ok: true, via: "downloads" }; }
    } catch (e) {
      if (e && e.code === "declined") return { ok: false, cancelado: true };
    }
  }
  try {
    const blob = new Blob([texto], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = nome; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    return { ok: true, via: "blob" };
  } catch { return { ok: false }; }
}

export function lerArquivoTexto(arquivo) {
  return new Promise((resolve, reject) => {
    if (!arquivo) return reject(new Error("sem arquivo"));
    if (arquivo.size > 2_000_000) return reject(new Error("O arquivo é grande demais para ser um backup."));
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(new Error("Não consegui ler o arquivo."));
    r.readAsText(arquivo);
  });
}
export { validarImportacao };
