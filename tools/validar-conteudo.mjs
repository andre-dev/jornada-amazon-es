import { MUNDOS } from "../js/content/index.js";
import { validarPergunta } from "../js/engine/quiz.js";
import { termoPorChave } from "../js/content/glossary.js";
import { fontePorId } from "../js/content/fontes.js";
let erros = 0; const err = (...a) => { erros++; console.log("ERRO", ...a); };
const resumo = [];
for (const m of MUNDOS) {
  let w; try { w = (await import(`../js/content/world${m.id}.js`)).default; } catch (e) { console.log(`mundo ${m.id}: sem arquivo`); continue; }
  if (w.chefe.id !== m.chefe.id) err(m.id, "chefe id", w.chefe.id, m.chefe.id);
  if (w.licoes.length !== m.licoes.length) err(m.id, "n licoes", w.licoes.length, m.licoes.length);
  let nq = 0, nc = 0;
  for (const [i, l] of w.licoes.entries()) {
    const ml = m.licoes[i];
    if (!ml || ml.id !== l.id || ml.titulo !== l.titulo) err(m.id, "licao manifest", l.id, l.titulo);
    if (!l.cards || l.cards.length < 4 || l.cards.length > 10) err(l.id, "cards", l.cards && l.cards.length);
    if (!l.quiz || l.quiz.length < 3 || l.quiz.length > 6) err(l.id, "quiz n", l.quiz && l.quiz.length);
    nc += l.cards.length;
    for (const q of l.quiz) { nq++; validarPergunta(q).forEach((e) => err(q.id, e)); }
    const txt = JSON.stringify(l.cards);
    for (const mm of txt.matchAll(/\[\[([a-z0-9-]+)\]\]/g)) if (!termoPorChave(mm[1])) err(l.id, "chip", mm[1]);
    for (const c of l.cards) for (const t of c.termos || []) if (!termoPorChave(t)) err(l.id, "termo", t);
    for (const f of l.fontes || []) if (!fontePorId(f)) err(l.id, "fonte", f);
    if (!(l.fontes || []).length) err(l.id, "sem fontes");
  }
  const ps = w.chefe.fases ? w.chefe.fases.flatMap((f) => f.perguntas) : w.chefe.perguntas;
  ps.forEach((q) => validarPergunta(q).forEach((e) => err(q.id, e)));
  if (ps.length < 8) err(m.id, "boss poucas perguntas", ps.length);
  const ids = new Set(); [...w.licoes.flatMap((l) => l.quiz), ...ps].forEach((q) => { if (ids.has(q.id)) err("id duplicado", q.id); ids.add(q.id); });
  resumo.push(`mundo ${m.id}: ${w.licoes.length} licoes, ${nc} cards, ${nq} perguntas de licao, ${ps.length} do chefe`);
}
console.log(resumo.join("\n")); console.log(erros ? `${erros} erros` : "OK");
process.exit(erros ? 1 : 0);
