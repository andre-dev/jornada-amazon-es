// Formato do save, versão, padrões, migração e validação. Módulo puro (sem DOM).

export const VERSAO_SAVE = 2;
export const CHAVE_LOCAL = "jornada-amazon-es:save";
export const MAX_CENARIOS = 30;

export const AVATAR_OPCOES = {
  pele: 5, cabelo: 6, corCabelo: 5, barba: 3, roupa: 3, acessorio: 3,
};
export const AVATAR_PADRAO = { pele: 1, cabelo: 1, corCabelo: 0, barba: 1, roupa: 1, acessorio: 0, itensLoja: [], equipados: { chapeu: null, fundo: null, confete: null } };

export function saveNovo(agora = new Date()) {
  const iso = agora.toISOString();
  return {
    versao: VERSAO_SAVE,
    criadoEm: iso,
    atualizadoEm: iso,
    reiniciadoEm: "",
    jogador: { nome: "André", criado: false, avatar: JSON.parse(JSON.stringify(AVATAR_PADRAO)) },
    xp: 0,
    moedas: 0,
    streak: { atual: 0, melhor: 0, ultimoDia: "", escudos: 1, escudoSemana: "" },
    licoes: {},
    chefes: {},
    conquistas: {},
    checklist: {},
    cenarios: [],
    config: { tema: "auto", modoLivre: false, som: false, reduzirAnimacoes: false, ranking: true, idioma: "" },
    stats: { acertos: 0, erros: 0, segundosEstudo: 0 },
    contadores: { margens: 0, glossario: 0, perfeitos: 0, termosVistos: {} },
    ultimo: { licao: "", card: 0 },
  };
}

/* ---------- utilitários de sanitização ---------- */
const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);
const num = (v, def = 0, min = 0, max = 1e9) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : def);
const int = (v, def = 0, min = 0, max = 1e9) => Math.round(num(v, def, min, max));
const str = (v, def = "", max = 200) => (typeof v === "string" ? v.slice(0, max) : def);
const bool = (v, def = false) => (typeof v === "boolean" ? v : def);
const iso = (v, def = "") => (typeof v === "string" && /^\d{4}-\d{2}-\d{2}/.test(v) ? v.slice(0, 40) : def);
const chaveOk = (k) => typeof k === "string" && /^[A-Za-z0-9_.\-]{1,60}$/.test(k) && k !== "__proto__" && k !== "constructor" && k !== "prototype";

/* ---------- migrações: cada função leva a versão N para N+1 ---------- */
const MIGRACOES = {
  // v0 -> v1: formato antigo guardava `licoes` como lista de ids concluídos e nome solto.
  0(s) {
    const out = { ...s, versao: 1 };
    if (Array.isArray(s.licoes)) {
      out.licoes = {};
      for (const id of s.licoes) if (chaveOk(id)) out.licoes[id] = { cardsVistos: 0, concluida: true, melhorAcerto: 0 };
    }
    if (typeof s.nome === "string") out.jogador = { ...(isObj(s.jogador) ? s.jogador : {}), nome: s.nome };
    return out;
  },
  // v1 -> v2: adicionou contadores, ultimo, jogador.criado e equipados na loja.
  1(s) {
    const out = { ...s, versao: 2 };
    out.contadores = isObj(s.contadores) ? s.contadores : { margens: Array.isArray(s.cenarios) ? s.cenarios.length : 0, glossario: 0, perfeitos: 0, termosVistos: {} };
    out.ultimo = isObj(s.ultimo) ? s.ultimo : { licao: "", card: 0 };
    const j = isObj(s.jogador) ? s.jogador : {};
    out.jogador = { ...j, criado: typeof j.criado === "boolean" ? j.criado : Object.keys(isObj(s.licoes) ? s.licoes : {}).length > 0 || (typeof s.xp === "number" && s.xp > 0) };
    return out;
  },
};

/** Converte qualquer objeto em um save válido da versão atual (campos faltando recebem padrão). */
export function migrar(entrada) {
  if (!isObj(entrada)) return saveNovo();
  let s = { ...entrada };
  let v = Number.isInteger(s.versao) && s.versao >= 0 ? s.versao : 0;
  if (v > VERSAO_SAVE) v = VERSAO_SAVE; // save de versão futura: tenta ler o que for compatível
  while (v < VERSAO_SAVE) {
    s = MIGRACOES[v] ? MIGRACOES[v](s) : { ...s, versao: v + 1 };
    v = s.versao;
  }
  return normalizar(s);
}

export function normalizarAvatar(a) {
  a = isObj(a) ? a : {};
  const base = AVATAR_PADRAO;
  const out = {};
  for (const [k, n] of Object.entries(AVATAR_OPCOES)) out[k] = int(a[k], base[k], 0, n - 1);
  out.itensLoja = Array.isArray(a.itensLoja) ? [...new Set(a.itensLoja.filter(chaveOk))].slice(0, 100) : [];
  const eq = isObj(a.equipados) ? a.equipados : {};
  out.equipados = { chapeu: chaveOk(eq.chapeu) ? eq.chapeu : null, fundo: chaveOk(eq.fundo) ? eq.fundo : null, confete: chaveOk(eq.confete) ? eq.confete : null };
  return out;
}

export function normalizar(s) {
  const d = saveNovo();
  const agora = new Date().toISOString();
  const out = {
    versao: VERSAO_SAVE,
    criadoEm: iso(s.criadoEm, agora),
    atualizadoEm: iso(s.atualizadoEm, agora),
    reiniciadoEm: iso(s.reiniciadoEm, ""),
    jogador: {
      nome: str(isObj(s.jogador) ? s.jogador.nome : "", d.jogador.nome, 30).trim() || d.jogador.nome,
      criado: bool(isObj(s.jogador) ? s.jogador.criado : false),
      avatar: normalizarAvatar(isObj(s.jogador) ? s.jogador.avatar : null),
    },
    xp: int(s.xp, 0, 0, 10_000_000),
    moedas: int(s.moedas, 0, 0, 10_000_000),
    streak: (() => {
      const t = isObj(s.streak) ? s.streak : {};
      return { atual: int(t.atual, 0, 0, 100000), melhor: int(t.melhor, 0, 0, 100000), ultimoDia: /^\d{4}-\d{2}-\d{2}$/.test(t.ultimoDia) ? t.ultimoDia : "", escudos: int(t.escudos, 1, 0, 3), escudoSemana: str(t.escudoSemana, "", 10) };
    })(),
    licoes: {}, chefes: {}, conquistas: {}, checklist: {}, cenarios: [],
    config: (() => {
      const c = isObj(s.config) ? s.config : {};
      return { tema: ["auto", "light", "dark"].includes(c.tema) ? c.tema : "auto", modoLivre: bool(c.modoLivre), som: bool(c.som), reduzirAnimacoes: bool(c.reduzirAnimacoes), ranking: bool(c.ranking, true), idioma: ["pt", "es", "en"].includes(c.idioma) ? c.idioma : "" };
    })(),
    stats: (() => {
      const t = isObj(s.stats) ? s.stats : {};
      return { acertos: int(t.acertos), erros: int(t.erros), segundosEstudo: int(t.segundosEstudo, 0, 0, 1e9) };
    })(),
    contadores: (() => {
      const c = isObj(s.contadores) ? s.contadores : {};
      const tv = {};
      if (isObj(c.termosVistos)) for (const k of Object.keys(c.termosVistos).slice(0, 500)) if (chaveOk(k)) tv[k] = true;
      return { margens: int(c.margens), glossario: int(c.glossario), perfeitos: int(c.perfeitos), termosVistos: tv };
    })(),
    ultimo: (() => {
      const u = isObj(s.ultimo) ? s.ultimo : {};
      return { licao: chaveOk(u.licao) ? u.licao : "", card: int(u.card, 0, 0, 100) };
    })(),
  };
  if (isObj(s.licoes)) for (const [k, v] of Object.entries(s.licoes)) {
    if (!chaveOk(k) || !isObj(v)) continue;
    out.licoes[k] = { cardsVistos: int(v.cardsVistos, 0, 0, 100), concluida: bool(v.concluida), melhorAcerto: num(v.melhorAcerto, 0, 0, 1), concluidaEm: iso(v.concluidaEm, ""), tentativas: int(v.tentativas, 0, 0, 10000) };
  }
  if (isObj(s.chefes)) for (const [k, v] of Object.entries(s.chefes)) {
    if (!chaveOk(k) || !isObj(v)) continue;
    out.chefes[k] = { derrotado: bool(v.derrotado), tentativas: int(v.tentativas, 0, 0, 10000), derrotadoEm: iso(v.derrotadoEm, "") };
  }
  if (isObj(s.conquistas)) for (const [k, v] of Object.entries(s.conquistas)) if (chaveOk(k)) out.conquistas[k] = iso(v, agora);
  if (isObj(s.checklist)) for (const [k, v] of Object.entries(s.checklist)) {
    if (!chaveOk(k) || !isObj(v)) continue;
    out.checklist[k] = { feito: bool(v.feito), nota: str(v.nota, "", 2000), em: iso(v.em, ""), pago: bool(v.pago) };
  }
  if (Array.isArray(s.cenarios)) {
    for (const c of s.cenarios.slice(0, MAX_CENARIOS)) {
      if (!isObj(c) || !chaveOk(c.id)) continue;
      const entradas = {};
      if (isObj(c.entradas)) for (const [k, v] of Object.entries(c.entradas).slice(0, 40)) {
        if (!chaveOk(k)) continue;
        if (typeof v === "number" && Number.isFinite(v)) entradas[k] = v;
        else if (typeof v === "string") entradas[k] = v.slice(0, 80);
        else if (typeof v === "boolean") entradas[k] = v;
      }
      out.cenarios.push({ id: c.id, nome: str(c.nome, "Cenário", 60), tipo: str(c.tipo, "margem", 20), entradas, criadoEm: iso(c.criadoEm, agora) });
    }
  }
  return out;
}

/** Valida um JSON importado. Retorna { ok, erro?, save? }. */
export function validarImportacao(texto) {
  let obj;
  try { obj = JSON.parse(texto); } catch { return { ok: false, erro: "O arquivo não é um JSON válido." }; }
  if (!isObj(obj)) return { ok: false, erro: "O arquivo não parece um backup da jornada." };
  const bruto = isObj(obj.save) ? obj.save : obj; // aceita {app, save} ou o save direto
  if (!("jogador" in bruto) && !("xp" in bruto) && !("licoes" in bruto)) return { ok: false, erro: "Não encontrei dados de jogo nesse arquivo." };
  return { ok: true, save: migrar(bruto) };
}

export function hojeISO(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
