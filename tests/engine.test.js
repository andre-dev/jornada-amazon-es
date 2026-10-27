import test from "node:test";
import assert from "node:assert/strict";
import { xpParaNivel, xpAcumuladoDoNivel, infoNivel, tituloDoNivel, acessorioDeNivel } from "../js/engine/xp.js";
import { registrarDia, semanaISO, diasEntre, streakViva } from "../js/engine/streak.js";
import { criarQuiz, avaliar, prepararVisao, validarPergunta, estrelasPorAcerto } from "../js/engine/quiz.js";
import { criarBatalha } from "../js/engine/boss.js";
import { recompensaLicao, recompensaChefe, XP } from "../js/engine/rewards.js";

/* ---------- XP ---------- */
test("curva de XP: round(100 * n^1.5)", () => {
  assert.equal(xpParaNivel(1), 100);
  assert.equal(xpParaNivel(2), 283);
  assert.equal(xpParaNivel(4), 800);
  assert.equal(xpParaNivel(9), 2700);
});
test("infoNivel acumula corretamente", () => {
  assert.equal(infoNivel(0).nivel, 1);
  assert.equal(infoNivel(99).nivel, 1);
  assert.equal(infoNivel(100).nivel, 2);
  assert.equal(infoNivel(100).xpNoNivel, 0);
  assert.equal(infoNivel(383).nivel, 3);
  assert.equal(infoNivel(xpAcumuladoDoNivel(10)).nivel, 10);
  assert.equal(infoNivel(xpAcumuladoDoNivel(10) - 1).nivel, 9);
  const i = infoNivel(150);
  assert.equal(i.xpNoNivel, 50); assert.equal(i.xpNecessario, 283);
});
test("títulos por nível", () => {
  assert.equal(tituloDoNivel(1), "Novato Curioso");
  assert.equal(tituloDoNivel(3), "Aprendiz de Vendedor");
  assert.equal(tituloDoNivel(9), "Operador de Elite");
  assert.equal(tituloDoNivel(10), "Lenda Europeia");
  assert.equal(tituloDoNivel(30), "Lenda Europeia");
  assert.equal(acessorioDeNivel(1), "mochila"); assert.equal(acessorioDeNivel(5), "maleta"); assert.equal(acessorioDeNivel(10), "coroa");
});

/* ---------- streak ---------- */
test("semana ISO e diferença de dias", () => {
  assert.equal(diasEntre("2026-10-26", "2026-10-28"), 2);
  assert.equal(semanaISO("2026-10-26"), "2026-W44"); // segunda
  assert.equal(semanaISO("2026-11-01"), "2026-W44"); // domingo
  assert.equal(semanaISO("2026-11-02"), "2026-W45");
  assert.equal(semanaISO("2026-01-01"), "2026-W01");
});
test("streak: primeiro dia, mesmo dia, dia seguinte", () => {
  let r = registrarDia({}, "2026-10-26");
  assert.equal(r.evento, "primeiro"); assert.equal(r.streak.atual, 1);
  r = registrarDia(r.streak, "2026-10-26"); assert.equal(r.evento, "mantido"); assert.equal(r.streak.atual, 1);
  r = registrarDia(r.streak, "2026-10-27"); assert.equal(r.evento, "incrementou"); assert.equal(r.streak.atual, 2);
  assert.equal(r.streak.melhor, 2);
});
test("streak: escudo perdoa 1 dia perdido por semana; segundo buraco quebra", () => {
  let s = registrarDia({}, "2026-10-26").streak;           // seg
  s = registrarDia(s, "2026-10-27").streak;                // ter
  let r = registrarDia(s, "2026-10-29");                   // pulou quarta -> escudo
  assert.equal(r.evento, "escudo"); assert.equal(r.streak.atual, 3); assert.equal(r.streak.escudos, 0);
  r = registrarDia(r.streak, "2026-10-31");                // pulou sexta, mesma semana, sem escudo -> quebra
  assert.equal(r.evento, "quebrou"); assert.equal(r.streak.atual, 1); assert.equal(r.streak.melhor, 3);
});
test("streak: escudo renova na semana nova", () => {
  let s = { atual: 5, melhor: 5, ultimoDia: "2026-10-30", escudos: 0, escudoSemana: "2026-W44" };
  const r = registrarDia(s, "2026-11-01"); // pulou sábado, mas é domingo ainda semana 44 -> sem escudo
  assert.equal(r.evento, "quebrou");
  const r2 = registrarDia({ ...s, ultimoDia: "2026-11-01" }, "2026-11-03"); // semana 45 renova escudo, pulou segunda
  assert.equal(r2.evento, "escudo"); assert.equal(r2.streak.atual, 6);
});
test("streakViva", () => {
  const s = { atual: 3, ultimoDia: "2026-10-26", escudos: 1 };
  assert.equal(streakViva(s, "2026-10-27"), true);
  assert.equal(streakViva(s, "2026-10-28"), true);
  assert.equal(streakViva({ ...s, escudos: 0 }, "2026-10-28"), false);
  assert.equal(streakViva(s, "2026-10-30"), false);
});

/* ---------- quiz ---------- */
const seq = (valores) => { let i = 0; return () => valores[i++ % valores.length]; };
const P = {
  m: { id: "m", tipo: "multipla", enunciado: "?", opcoes: ["a", "b", "c"], correta: 1, explicacao: "e" },
  vf: { id: "vf", tipo: "vf", enunciado: "?", correta: false, explicacao: "e" },
  o: { id: "o", tipo: "ordenar", enunciado: "?", opcoes: ["1", "2", "3"], explicacao: "e" },
  l: { id: "l", tipo: "lacuna", enunciado: "x ___ y", opcoes: ["a", "b"], correta: 0, explicacao: "e" },
  p: { id: "p", tipo: "produto", enunciado: "?", produtos: [{ nome: "A", dados: [] }, { nome: "B", dados: [] }], correta: 1, explicacao: "e" },
};
test("avaliar: múltipla respeita embaralhamento", () => {
  const v = prepararVisao(P.m, seq([0.1, 0.5, 0.9]));
  const posCerta = v.ordem.indexOf(1);
  assert.equal(avaliar(v, posCerta), true);
  assert.equal(avaliar(v, (posCerta + 1) % 3), false);
});
test("avaliar: V/F", () => {
  const v = prepararVisao(P.vf);
  assert.equal(avaliar(v, 1), true);  // Falso é a resposta
  assert.equal(avaliar(v, 0), false);
});
test("avaliar: ordenar", () => {
  const v = prepararVisao(P.o, seq([0.9, 0.1, 0.5]));
  const certa = [0, 1, 2].map((orig) => v.ordem.indexOf(orig));
  assert.equal(avaliar(v, certa), true);
  assert.equal(avaliar(v, certa.slice().reverse()), false);
  assert.equal(avaliar(v, [0]), false);
});
test("ordenar nunca começa já ordenado", () => {
  for (let i = 0; i < 50; i++) { const v = prepararVisao(P.o); assert.notDeepEqual(v.ordem, [0, 1, 2]); }
});
test("quiz: erro volta no fim (revisão) e acurácia conta só a 1ª tentativa", () => {
  const q = criarQuiz([P.m, P.vf], { embaralharPerguntas: false });
  let v = q.atual();
  let r = q.responder(v.ordem.indexOf(1)); assert.equal(r.correto, true); q.proxima();
  v = q.atual();
  r = q.responder(0); assert.equal(r.correto, false); // vf: Verdadeiro errado
  q.proxima();
  assert.equal(q.terminou, false); assert.equal(q.emRevisao, true);
  v = q.atual(); r = q.responder(1); assert.equal(r.correto, true); assert.equal(r.revisao, true); q.proxima();
  assert.equal(q.terminou, true);
  const res = q.resultado();
  assert.equal(res.acertos, 1); assert.equal(res.erros, 1); assert.equal(res.acuracia, 0.5);
  assert.deepEqual(res.errosIds, ["vf"]); assert.equal(res.perfeito, false); assert.equal(res.estrelas, 1);
});
test("quiz perfeito dá 3 estrelas; limites de estrelas", () => {
  const q = criarQuiz([P.m], { embaralharPerguntas: false });
  const v = q.atual(); q.responder(v.ordem.indexOf(1)); q.proxima();
  assert.equal(q.resultado().perfeito, true); assert.equal(q.resultado().estrelas, 3);
  assert.equal(estrelasPorAcerto(0.8), 2); assert.equal(estrelasPorAcerto(0.79), 1); assert.equal(estrelasPorAcerto(1), 3);
});
test("quiz não aceita responder duas vezes", () => {
  const q = criarQuiz([P.m]);
  const v = q.atual(); assert.ok(q.responder(0)); assert.equal(q.responder(1), null);
});
test("validarPergunta pega erros comuns", () => {
  assert.deepEqual(validarPergunta(P.m), []); assert.deepEqual(validarPergunta(P.p), []); assert.deepEqual(validarPergunta(P.l), []);
  assert.ok(validarPergunta({ ...P.m, correta: 9 }).length);
  assert.ok(validarPergunta({ ...P.l, enunciado: "sem lacuna" }).length);
  assert.ok(validarPergunta({ ...P.m, explicacao: "" }).length);
  assert.ok(validarPergunta({ ...P.vf, correta: 1 }).length);
});

/* ---------- boss ---------- */
function perguntasSimples(n) { return Array.from({ length: n }, (_, i) => ({ id: "q" + i, tipo: "vf", enunciado: "?", correta: true, explicacao: "e", licaoRef: i % 2 ? "1-1" : "1-2" })); }
const noShuffle = () => 0.999999;
test("boss: dano por acerto = ceil(hp/(n-(vidas-1))) e acertar tudo vence", () => {
  const b = criarBatalha({ perguntas: perguntasSimples(10), hp: 100, vidas: 3 }, { rnd: noShuffle });
  const acertar = () => { b.atual(); const r = b.responder(0); return r; };
  let r = acertar(); assert.equal(r.danoCausado, 13); assert.equal(b.hp, 87); b.proxima();
  acertar(); b.proxima();
  r = acertar(); assert.equal(r.critico, true); assert.equal(r.danoCausado, 26); // combo 3 => dobro
  assert.equal(b.combo, 0); b.proxima();
  let fim; while (!b.fim) { acertar(); fim = b.proxima(); }
  assert.equal(b.fim, "vitoria");
});
test("boss: 2 erros ainda permitem vencer; 3 erros = derrota", () => {
  const b = criarBatalha({ perguntas: perguntasSimples(10), hp: 100, vidas: 3 }, { rnd: noShuffle });
  let i = 0;
  while (!b.fim) { b.atual(); b.responder(i < 2 ? 1 : 0); b.proxima(); i++; }
  assert.equal(b.fim, "vitoria"); assert.equal(b.vidas, 1);
  const c = criarBatalha({ perguntas: perguntasSimples(10), hp: 100, vidas: 3 }, { rnd: noShuffle });
  let r;
  for (let k = 0; k < 3; k++) { c.atual(); r = c.responder(1); const p = c.proxima(); if (k < 2) assert.equal(p.evento, "pergunta"); else assert.equal(p.evento, "derrota"); }
  assert.equal(r.derrota, true); assert.equal(c.fim, "derrota");
  assert.deepEqual(c.licoesParaRevisar().sort(), ["1-1", "1-2"]);
});
test("boss: erro zera o combo", () => {
  const b = criarBatalha({ perguntas: perguntasSimples(10) }, { rnd: noShuffle });
  b.atual(); b.responder(0); b.proxima(); b.atual(); b.responder(0); b.proxima();
  assert.equal(b.combo, 2);
  b.atual(); b.responder(1); assert.equal(b.combo, 0);
});
test("boss: com 8 e 12 perguntas ainda vence tolerando (vidas-1) erros", () => {
  for (const n of [8, 9, 10, 11, 12]) {
    const b = criarBatalha({ perguntas: perguntasSimples(n), hp: 100, vidas: 3 }, { rnd: noShuffle });
    let i = 0; while (!b.fim) { b.atual(); b.responder(i === 0 || i === 4 ? 1 : 0); b.proxima(); i++; }
    assert.equal(b.fim, "vitoria", "n=" + n);
  }
});
test("chefão em fases: HP reinicia, cura 1 coração, vitória só após a última fase", () => {
  const b = criarBatalha({ fases: [{ nome: "A", perguntas: perguntasSimples(7) }, { nome: "B", perguntas: perguntasSimples(7) }, { nome: "C", perguntas: perguntasSimples(6) }], hp: 100, vidas: 5, curaPorFase: 1 }, { rnd: noShuffle });
  assert.equal(b.totalFases, 3); assert.equal(b.totalPerguntas, 20);
  b.atual(); b.responder(1); b.proxima(); // perde 1 coração
  assert.equal(b.vidas, 4);
  let eventos = [];
  while (!b.fim) { b.atual(); b.responder(0); const p = b.proxima(); eventos.push(p.evento); }
  assert.ok(eventos.includes("fase")); assert.equal(b.fim, "vitoria");
  assert.equal(b.fase, 2);
  assert.equal(b.vidas, 5); // 4 + cura 1 + cura 1 limitado ao máximo
});

/* ---------- recompensas ---------- */
test("recompensas: só a primeira conclusão paga lição e quiz", () => {
  const a = recompensaLicao({ primeiraConclusao: true, cardsNovos: 8, acertos: 4, total: 4 });
  assert.equal(a.xp, 8 * XP.card + XP.licao + 4 * XP.acerto + XP.perfeito); assert.equal(a.perfeito, true);
  const b = recompensaLicao({ primeiraConclusao: false, cardsNovos: 0, acertos: 4, total: 4 });
  assert.equal(b.xp, 0); assert.equal(b.moedas, 0);
  assert.equal(recompensaChefe({ primeiraVitoria: true }).xp, 200);
  assert.equal(recompensaChefe({ primeiraVitoria: true, final: true }).xp, 500);
  assert.equal(recompensaChefe({ primeiraVitoria: false }).xp, 0);
});
