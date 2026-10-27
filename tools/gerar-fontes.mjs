import { FONTES } from "../js/content/fontes.js";
let o = "# Fontes consultadas\n\nGerado de js/content/fontes.js por tools/gerar-fontes.mjs. Texto reescrito com palavras próprias; números só quando confirmados em página oficial.\n\n| Id | Tema | Título | URL | Verificado em | Observação |\n|---|---|---|---|---|---|\n";
for (const f of FONTES) o += `| ${f.id} | ${f.tema} | ${f.titulo} | ${f.url} | ${f.verificadoEm} | ${(f.nota||"").replace(/\|/g,"/")} |\n`;
(await import("node:fs")).writeFileSync(new URL("../FONTES.md", import.meta.url), o);
console.log(FONTES.length, "fontes");
