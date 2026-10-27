// Tradução do conteúdo dos mundos sem tocar na estrutura.
//   node tools/i18n-mundos.mjs extrair 3 > textos.json        -> lista de textos traduzíveis, na ordem
//   node tools/i18n-mundos.mjs montar 3 es traducao.json       -> grava js/content/es/world3.js
//   node tools/i18n-mundos.mjs conferir                        -> confere estrutura de todos os idiomas
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
const PULAR = new Set(["arte", "emoji", "id", "slug", "tipo", "cor", "cenario", "licaoRef", "fontes", "termos", "es", "icone", "chave"]);
const [cmd, a, b, c] = process.argv.slice(2);

function percorrer(obj, fn, chave = "") {
  if (typeof obj === "string") return fn(obj);
  if (Array.isArray(obj)) return obj.map((x) => percorrer(x, fn, chave));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = PULAR.has(k) ? v : percorrer(v, fn, k);
    return out;
  }
  return obj;
}
const carregar = async (n, lang) => (await import(lang ? `../js/content/${lang}/world${n}.js` : `../js/content/world${n}.js`)).default;
const termosDe = (s) => (s.match(/\[\[[^\]]+\]\]/g) || []).map((t) => t.split("|")[0]).sort().join(",");

if (cmd === "extrair") {
  const w = await carregar(a);
  const lista = [];
  percorrer(w, (s) => { if (/[A-Za-zÀ-ÿ]/.test(s)) lista.push(s); return s; });
  console.log(JSON.stringify(lista, null, 1));
} else if (cmd === "montar") {
  const w = await carregar(a);
  const trad = JSON.parse(readFileSync(c, "utf8"));
  const dic = (await import(`../js/i18n/${b}.js`)).default; // títulos iguais aos do mapa
  let i = 0; const erros = [];
  const novo = percorrer(w, (s) => {
    if (!/[A-Za-zÀ-ÿ]/.test(s)) return s;
    const t = trad[i++];
    if (typeof t !== "string") { erros.push(`falta tradução #${i - 1}`); return s; }
    if (termosDe(s) !== termosDe(t)) erros.push(`#${i - 1} termos [[...]] diferentes: ${s.slice(0, 50)}`);
    if ((s.match(/___/g) || []).length !== (t.match(/___/g) || []).length) erros.push(`#${i - 1} lacuna ___ diferente`);
    return dic[s] || t;
  });
  if (i !== trad.length) erros.push(`quantidade: original ${i}, tradução ${trad.length}`);
  if (erros.length) { console.error(erros.join("\n")); process.exit(1); }
  mkdirSync(new URL(`../js/content/${b}/`, import.meta.url), { recursive: true });
  writeFileSync(new URL(`../js/content/${b}/world${a}.js`, import.meta.url),
    `// Mundo ${a} (${b}). Gerado por tools/i18n-mundos.mjs a partir de js/content/world${a}.js.\nexport default ${JSON.stringify(novo, null, 1)};\n`);
  console.log(`ok: js/content/${b}/world${a}.js (${i} textos)`);
} else if (cmd === "conferir") {
  let erros = 0;
  for (const lang of ["es", "en"]) for (let n = 1; n <= 9; n++) {
    const arq = new URL(`../js/content/${lang}/world${n}.js`, import.meta.url);
    if (!existsSync(arq)) { console.log(`${lang} mundo ${n}: falta`); erros++; continue; }
    const o = await carregar(n), t = await carregar(n, lang);
    const esqueleto = (x) => JSON.stringify(percorrer(x, (s) => (/[A-Za-zÀ-ÿ]/.test(s) ? "·" : s)));
    if (esqueleto(o) !== esqueleto(t)) { console.log(`${lang} mundo ${n}: estrutura diferente do original`); erros++; }
  }
  console.log(erros ? `${erros} problema(s)` : "Estrutura idêntica em todos os idiomas.");
  process.exit(erros ? 1 : 0);
}
