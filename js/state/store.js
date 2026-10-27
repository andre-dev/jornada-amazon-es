// Estado em memória + pub/sub + ações do jogo. Sem DOM: testável em Node.
import { saveNovo, migrar, hojeISO, MAX_CENARIOS, AVATAR_OPCOES } from "./schema.js";
import { infoNivel } from "../engine/xp.js";
import { registrarDia } from "../engine/streak.js";
import { recompensaLicao, recompensaChefe, recompensaMissao, avaliarConquistas } from "../engine/rewards.js";
import { CONQUISTAS } from "../content/achievements.js";
import { itemPorId } from "../content/loja.js";

export function criarStore(inicial, { hoje = () => hojeISO(), agora = () => new Date() } = {}) {
  let estado = inicial ? migrar(inicial) : saveNovo(agora());
  const ouvintes = new Set();
  const ouvintesEvento = new Set();
  let sujo = 0; // contador de alterações locais (para a persistência saber o que mudou)

  function emitir(evento) { for (const f of [...ouvintesEvento]) { try { f(evento); } catch (e) { console.error(e); } } }
  function notificar(motivo) { for (const f of [...ouvintes]) { try { f(estado, motivo); } catch (e) { console.error(e); } } }

  function checarConquistas() {
    const novas = avaliarConquistas(estado, CONQUISTAS);
    for (const id of novas) {
      estado.conquistas[id] = agora().toISOString();
      emitir({ tipo: "conquista", id });
    }
    return novas;
  }

  /** Executa uma mudança, atualiza carimbo, avalia conquistas e notifica. */
  function mut(fn, motivo = "mudanca") {
    const r = fn(estado);
    checarConquistas();
    estado.atualizadoEm = agora().toISOString();
    sujo++;
    notificar(motivo);
    return r;
  }

  function darXP(n, moedas = 0, silencioso = false) {
    if (!n && !moedas) return;
    const antes = infoNivel(estado.xp).nivel;
    estado.xp += n;
    estado.moedas += moedas;
    const depois = infoNivel(estado.xp).nivel;
    if (n && !silencioso) emitir({ tipo: "xp", valor: n });
    if (moedas) emitir({ tipo: "moedas", valor: moedas });
    if (depois > antes) emitir({ tipo: "nivel", de: antes, para: depois, titulo: infoNivel(estado.xp).titulo });
  }

  function tocarStreak() {
    const { streak, evento } = registrarDia(estado.streak, hoje());
    estado.streak = streak;
    if (evento === "incrementou" || evento === "escudo" || evento === "primeiro") emitir({ tipo: "streak", evento, atual: streak.atual });
  }

  const api = {
    get estado() { return estado; },
    get versaoLocal() { return sujo; },
    assinar(fn) { ouvintes.add(fn); return () => ouvintes.delete(fn); },
    aoEvento(fn) { ouvintesEvento.add(fn); return () => ouvintesEvento.delete(fn); },

    /** Substitui o estado inteiro (carga do servidor/importação). Não marca como alteração local. */
    substituir(save, motivo = "carga") { estado = migrar(save); notificar(motivo); },

    /** Importação de backup: vira alteração local mais recente que qualquer cópia do servidor. */
    importar(save) { estado = migrar(save); estado.atualizadoEm = agora().toISOString(); sujo++; notificar("importar"); },

    criarJogador({ nome, avatar }) {
      mut((s) => {
        s.jogador.nome = (String(nome || "").trim() || "André").slice(0, 30);
        const a = s.jogador.avatar;
        for (const k of Object.keys(AVATAR_OPCOES)) if (avatar && Number.isInteger(avatar[k]) && avatar[k] >= 0 && avatar[k] < AVATAR_OPCOES[k]) a[k] = avatar[k];
        s.jogador.criado = true;
      });
    },
    atualizarAvatar(avatar, nome) {
      mut((s) => {
        if (nome !== undefined) s.jogador.nome = (String(nome).trim() || "André").slice(0, 30);
        for (const k of Object.keys(AVATAR_OPCOES)) if (avatar && Number.isInteger(avatar[k]) && avatar[k] >= 0 && avatar[k] < AVATAR_OPCOES[k]) s.jogador.avatar[k] = avatar[k];
      });
    },

    /** Marca o card visto. Retorna XP concedido. */
    verCard(licaoId, indice) {
      return mut((s) => {
        const l = s.licoes[licaoId] || (s.licoes[licaoId] = { cardsVistos: 0, concluida: false, melhorAcerto: 0, concluidaEm: "", tentativas: 0 });
        s.ultimo = { licao: licaoId, card: indice };
        tocarStreak();
        const novos = Math.max(0, indice + 1 - l.cardsVistos);
        if (novos > 0) { l.cardsVistos = indice + 1; darXP(novos * 5, 0, true); }
        return novos * 5;
      }, "card");
    },

    registrarResposta(correto) {
      mut((s) => { if (correto) s.stats.acertos++; else s.stats.erros++; }, "resposta");
    },

    /** Conclui a lição com o resultado do quiz. */
    concluirLicao(licaoId, { acertos, total, totalCards = 0 }) {
      return mut((s) => {
        const l = s.licoes[licaoId] || (s.licoes[licaoId] = { cardsVistos: 0, concluida: false, melhorAcerto: 0, concluidaEm: "", tentativas: 0 });
        const primeira = !l.concluida;
        const cardsNovos = Math.max(0, totalCards - l.cardsVistos);
        if (totalCards > l.cardsVistos) l.cardsVistos = totalCards;
        const acc = total ? acertos / total : 1;
        const r = recompensaLicao({ primeiraConclusao: primeira, cardsNovos, acertos, total });
        l.concluida = true;
        l.tentativas = (l.tentativas || 0) + 1;
        if (r.perfeito && l.melhorAcerto < 0.999) s.contadores.perfeitos++;
        if (acc > l.melhorAcerto) l.melhorAcerto = acc;
        if (primeira) l.concluidaEm = agora().toISOString();
        s.ultimo = { licao: "", card: 0 };
        tocarStreak();
        darXP(r.xp, r.moedas);
        return { ...r, primeira };
      }, "licao");
    },

    iniciarChefe(chefeId) {
      mut((s) => {
        const c = s.chefes[chefeId] || (s.chefes[chefeId] = { derrotado: false, tentativas: 0, derrotadoEm: "" });
        c.tentativas++;
        tocarStreak();
      }, "chefe-inicio");
    },
    finalizarChefe(chefeId, { venceu, final = false, acertos = 0 }) {
      return mut((s) => {
        const c = s.chefes[chefeId] || (s.chefes[chefeId] = { derrotado: false, tentativas: 1, derrotadoEm: "" });
        const primeira = venceu && !c.derrotado;
        if (venceu) { c.derrotado = true; if (!c.derrotadoEm) c.derrotadoEm = agora().toISOString(); }
        s.stats.acertos += 0; // acertos individuais já contados em registrarResposta
        const r = recompensaChefe({ primeiraVitoria: primeira, final });
        darXP(r.xp, r.moedas);
        return { ...r, primeira };
      }, "chefe-fim");
    },

    alternarMissao(id, feito) {
      return mut((s) => {
        const m = s.checklist[id] || (s.checklist[id] = { feito: false, nota: "", em: "", pago: false });
        const antes = m.feito;
        m.feito = !!feito;
        m.em = feito ? agora().toISOString() : "";
        let rec = { xp: 0, moedas: 0 };
        if (feito && !antes) tocarStreak();
        if (feito && !antes && !m.pago) { // XP só na primeira vez que a missão é marcada
          m.pago = true;
          rec = recompensaMissao();
          darXP(rec.xp, rec.moedas);
        }
        return rec;
      }, "missao");
    },
    salvarNota(id, nota) {
      mut((s) => {
        const m = s.checklist[id] || (s.checklist[id] = { feito: false, nota: "", em: "", pago: false });
        m.nota = String(nota).slice(0, 2000);
      }, "nota");
    },

    salvarCenario({ nome, tipo = "margem", entradas }) {
      return mut((s) => {
        if (s.cenarios.length >= MAX_CENARIOS) return false;
        const id = "c" + agora().getTime().toString(36) + Math.floor(Math.random() * 1296).toString(36);
        s.cenarios.unshift({ id, nome: String(nome || "Cenário").slice(0, 60), tipo, entradas: { ...entradas }, criadoEm: agora().toISOString() });
        return id;
      }, "cenario");
    },
    removerCenario(id) { mut((s) => { s.cenarios = s.cenarios.filter((c) => c.id !== id); }, "cenario"); },
    contarMargem() { mut((s) => { s.contadores.margens++; tocarStreak(); }, "margem"); },
    abrirTermo(chave) {
      mut((s) => { s.contadores.glossario++; s.contadores.termosVistos[chave] = true; }, "glossario");
    },

    comprar(itemId) {
      return mut((s) => {
        const item = itemPorId(itemId);
        if (!item) return { ok: false, erro: "Item não existe." };
        if (s.jogador.avatar.itensLoja.includes(itemId)) return { ok: false, erro: "Você já tem esse item." };
        if (s.moedas < item.preco) return { ok: false, erro: "Moedas insuficientes." };
        s.moedas -= item.preco;
        s.jogador.avatar.itensLoja.push(itemId);
        s.jogador.avatar.equipados[item.tipo] = itemId;
        return { ok: true };
      }, "loja");
    },
    equipar(slot, itemId) {
      mut((s) => {
        if (!["chapeu", "fundo", "confete"].includes(slot)) return;
        if (itemId === null) { s.jogador.avatar.equipados[slot] = null; return; }
        const item = itemPorId(itemId);
        if (item && item.tipo === slot && s.jogador.avatar.itensLoja.includes(itemId)) s.jogador.avatar.equipados[slot] = itemId;
      }, "loja");
    },

    configurar(parcial) {
      mut((s) => {
        if (parcial.tema && ["auto", "light", "dark"].includes(parcial.tema)) s.config.tema = parcial.tema;
        for (const k of ["modoLivre", "som", "reduzirAnimacoes", "ranking"]) if (typeof parcial[k] === "boolean") s.config[k] = parcial[k];
      }, "config");
    },
    somarEstudo(seg) { if (seg > 0) mut((s) => { s.stats.segundosEstudo += Math.round(seg); }, "tempo"); },
    reiniciar() { estado = saveNovo(agora()); estado.reiniciadoEm = estado.criadoEm; sujo++; notificar("reiniciar"); },
    resetarUltimo() { mut((s) => { s.ultimo = { licao: "", card: 0 }; }, "ultimo"); },
  };
  return api;
}

export const store = criarStore();
