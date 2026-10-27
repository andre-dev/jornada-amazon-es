// Motor de quiz. Puro (sem DOM). Tipos: multipla, vf, ordenar, lacuna, produto.
import { tr } from "../i18n/index.js";

export const TIPOS = ["multipla", "vf", "ordenar", "lacuna", "produto"];

export function normalizarPergunta(p) {
  const tipo = TIPOS.includes(p.tipo) ? p.tipo : "multipla";
  const q = { id: p.id, tipo, enunciado: p.enunciado, explicacao: p.explicacao || "", licaoRef: p.licaoRef || "", dica: p.dica || "" };
  if (tipo === "vf") {
    q.opcoes = [tr("Verdadeiro"), tr("Falso")];
    q.correta = typeof p.correta === "boolean" ? p.correta : p.correta === 0;
  } else if (tipo === "ordenar") {
    q.opcoes = p.opcoes.slice();
    q.correta = Array.isArray(p.correta) ? p.correta.slice() : q.opcoes.map((_, i) => i); // ordem correta como índices de opcoes
  } else if (tipo === "produto") {
    q.produtos = p.produtos.slice();
    q.opcoes = p.produtos.map((x) => x.nome);
    q.correta = p.correta;
  } else {
    q.opcoes = p.opcoes.slice();
    q.correta = p.correta;
  }
  return q;
}

export function validarPergunta(p) {
  const erros = [];
  if (!p || typeof p !== "object") return ["pergunta vazia"];
  if (!p.id) erros.push("sem id");
  if (!p.enunciado) erros.push("sem enunciado");
  if (!p.explicacao) erros.push(tr("sem explicação"));
  if (!TIPOS.includes(p.tipo)) erros.push(tr("tipo inválido: ") + p.tipo);
  if (p.tipo === "vf") { if (typeof p.correta !== "boolean") erros.push("vf precisa de correta booleana"); }
  else if (p.tipo === "ordenar") { if (!Array.isArray(p.opcoes) || p.opcoes.length < 3) erros.push(tr("ordenar precisa de 3+ itens")); }
  else if (p.tipo === "produto") {
    if (!Array.isArray(p.produtos) || p.produtos.length < 2) erros.push(tr("produto precisa de 2+ produtos"));
    else if (!Number.isInteger(p.correta) || p.correta < 0 || p.correta >= p.produtos.length) erros.push("correta fora do intervalo");
  } else {
    if (!Array.isArray(p.opcoes) || p.opcoes.length < 2) erros.push(tr("precisa de 2+ opções"));
    else if (!Number.isInteger(p.correta) || p.correta < 0 || p.correta >= p.opcoes.length) erros.push("correta fora do intervalo");
    if (p.tipo === "lacuna" && !String(p.enunciado).includes("___")) erros.push("lacuna sem ___");
  }
  return erros;
}

function embaralhaIdx(n, rnd) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/** Cria a "visão" de uma pergunta: ordem de exibição das opções. */
export function prepararVisao(p, rnd = Math.random) {
  const q = normalizarPergunta(p);
  let ordem;
  if (q.tipo === "vf") ordem = [0, 1];
  else if (q.tipo === "ordenar") {
    ordem = embaralhaIdx(q.opcoes.length, rnd);
    // evita já vir na ordem certa
    let t = 0;
    while (ordem.every((v, i) => v === q.correta[i]) && t++ < 10) ordem = embaralhaIdx(q.opcoes.length, rnd);
  } else ordem = embaralhaIdx(q.opcoes.length, rnd);
  return { q, ordem };
}

/**
 * Avalia a resposta.
 * - multipla/lacuna/produto: resposta = posição exibida escolhida.
 * - vf: 0 = Verdadeiro, 1 = Falso.
 * - ordenar: array de posições exibidas, na ordem escolhida pelo jogador.
 */
export function avaliar(visao, resposta) {
  const { q, ordem } = visao;
  if (q.tipo === "vf") return (resposta === 0) === q.correta;
  if (q.tipo === "ordenar") {
    if (!Array.isArray(resposta) || resposta.length !== q.correta.length) return false;
    const originais = resposta.map((pos) => ordem[pos]);
    return originais.every((v, i) => v === q.correta[i]);
  }
  return ordem[resposta] === q.correta;
}

/** Posição exibida da resposta correta (para destacar). */
export function posicaoCorreta(visao) {
  const { q, ordem } = visao;
  if (q.tipo === "vf") return q.correta ? 0 : 1;
  if (q.tipo === "ordenar") return q.correta.map((orig) => ordem.indexOf(orig));
  return ordem.indexOf(q.correta);
}

/** Texto da resposta correta, para exibir na explicação. */
export function textoCorreto(visao) {
  const { q } = visao;
  if (q.tipo === "vf") return q.correta ? tr("Verdadeiro") : tr("Falso");
  if (q.tipo === "ordenar") return q.correta.map((i) => q.opcoes[i]).join(" → ");
  return q.opcoes[q.correta];
}

/* ---------- Rodada de quiz com revisão ---------- */
export function criarQuiz(perguntas, { rnd = Math.random, embaralharPerguntas = true } = {}) {
  let ordem = perguntas.slice();
  if (embaralharPerguntas) {
    for (let i = ordem.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ordem[i], ordem[j]] = [ordem[j], ordem[i]]; }
  }
  const fila = ordem.map((p) => ({ p, revisao: false }));
  const primeira = {}; // id -> acertou na primeira tentativa
  const total = perguntas.length;
  let idx = 0;
  let visaoAtual = null;
  let respondida = false;

  const api = {
    total,
    get indice() { return idx; },
    get terminou() { return idx >= fila.length; },
    get emRevisao() { return !!(fila[idx] && fila[idx].revisao); },
    get restantes() { return fila.length - idx; },
    atual() {
      if (idx >= fila.length) return null;
      if (!visaoAtual) { visaoAtual = prepararVisao(fila[idx].p, rnd); respondida = false; }
      return visaoAtual;
    },
    responder(resposta) {
      const v = api.atual();
      if (!v || respondida) return null;
      respondida = true;
      const correto = avaliar(v, resposta);
      const item = fila[idx];
      if (!(v.q.id in primeira)) primeira[v.q.id] = correto;
      if (!correto) fila.push({ p: item.p, revisao: true }); // volta no fim da rodada
      return { correto, explicacao: v.q.explicacao, textoCorreto: textoCorreto(v), posicaoCorreta: posicaoCorreta(v), revisao: item.revisao };
    },
    proxima() {
      if (!respondida) return false;
      idx++; visaoAtual = null; respondida = false;
      return true;
    },
    resultado() {
      const ids = Object.keys(primeira);
      const acertos = ids.filter((i) => primeira[i]).length;
      return {
        total,
        acertos,
        erros: total - acertos,
        acuracia: total ? acertos / total : 0,
        perfeito: total > 0 && acertos === total,
        errosIds: ids.filter((i) => !primeira[i]),
        estrelas: estrelasPorAcerto(total ? acertos / total : 0),
      };
    },
  };
  return api;
}

export function estrelasPorAcerto(acc) {
  if (acc >= 0.999) return 3;
  if (acc >= 0.8) return 2;
  return 1;
}
