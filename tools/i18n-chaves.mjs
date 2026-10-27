// Lista os textos passados a tr("...") no código e confere os dicionários.
// Uso: node tools/i18n-chaves.mjs            -> resumo de faltantes por idioma
//      node tools/i18n-chaves.mjs --listar   -> imprime as chaves em JSON
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
const raiz = new URL("../js/", import.meta.url).pathname;
function arquivos(d) { return readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? (/(^|\/)(es|en)$/.test(p) ? [] : arquivos(p)) : p.endsWith(".js") ? [p] : []; }); }
const chaves = new Set();
const re = /(?<![\w.$])tr\(\s*"((?:[^"\\]|\\.)*)"/g;
for (const f of arquivos(raiz)) {
  if (f.includes("/i18n/")) continue;
  const s = readFileSync(f, "utf8");
  for (const m of s.matchAll(re)) chaves.add(JSON.parse(`"${m[1]}"`));
}
const lista = [...chaves].sort();
if (process.argv.includes("--listar")) { console.log(JSON.stringify(lista, null, 1)); process.exit(0); }
let erros = 0;
for (const id of ["es", "en"]) {
  let dic = {};
  try { dic = (await import(`../js/i18n/${id}.js`)).default; } catch { console.log(`${id}: sem dicionário`); erros++; continue; }
  const faltam = lista.filter((k) => !(k in dic));
  const sobram = Object.keys(dic).filter((k) => !chaves.has(k));
  const varsErradas = lista.filter((k) => k in dic && JSON.stringify((k.match(/\{\w+\}/g) || []).sort()) !== JSON.stringify((dic[k].match(/\{\w+\}/g) || []).sort()));
  console.log(`${id}: ${lista.length} chaves, ${faltam.length} faltando, ${sobram.length} sobrando, ${varsErradas.length} com variáveis diferentes`);
  for (const k of faltam.slice(0, 15)) console.log("  falta:", k.slice(0, 90));
  for (const k of varsErradas.slice(0, 15)) console.log("  variáveis:", k.slice(0, 90));
  erros += faltam.length + varsErradas.length;
}
process.exit(erros ? 1 : 0);
