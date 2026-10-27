// Recompensas: valores de XP/moedas e avaliação de conquistas. Puro.

export const XP = { card: 5, licao: 50, acerto: 10, perfeito: 20, chefe: 200, chefao: 500, missao: 100 };
export const MOEDAS = { licao: 10, perfeito: 10, chefe: 50, chefao: 200, missao: 20 };

/**
 * Recompensa ao concluir uma lição.
 * Só a PRIMEIRA conclusão paga XP/moedas de lição e de quiz (evita "farmar" refazendo);
 * cards novos pagam XP uma única vez cada.
 */
export function recompensaLicao({ primeiraConclusao, cardsNovos = 0, acertos = 0, total = 0 }) {
  let xp = cardsNovos * XP.card;
  let moedas = 0;
  const perfeito = total > 0 && acertos === total;
  if (primeiraConclusao) {
    xp += XP.licao + acertos * XP.acerto + (perfeito ? XP.perfeito : 0);
    moedas += MOEDAS.licao + (perfeito ? MOEDAS.perfeito : 0);
  }
  return { xp, moedas, perfeito };
}

export function recompensaChefe({ primeiraVitoria, final = false }) {
  if (!primeiraVitoria) return { xp: 0, moedas: 0 };
  return { xp: final ? XP.chefao : XP.chefe, moedas: final ? MOEDAS.chefao : MOEDAS.chefe };
}

export function recompensaMissao() { return { xp: XP.missao, moedas: MOEDAS.missao }; }

/** Retorna os ids de conquistas recém-desbloqueadas. `catalogo`: [{id, regra(ctx)}]. */
export function avaliarConquistas(save, catalogo, extra = {}) {
  const novas = [];
  const ctx = { save, ...extra };
  for (const c of catalogo) {
    if (save.conquistas[c.id]) continue;
    let ok = false;
    try { ok = !!c.regra(ctx); } catch { ok = false; }
    if (ok) novas.push(c.id);
  }
  return novas;
}

export function contarLicoesConcluidas(save) {
  return Object.values(save.licoes).filter((l) => l.concluida).length;
}
export function contarChefesDerrotados(save) {
  return Object.values(save.chefes).filter((c) => c.derrotado).length;
}
export function contarMissoes(save) {
  return Object.values(save.checklist).filter((c) => c.feito).length;
}
