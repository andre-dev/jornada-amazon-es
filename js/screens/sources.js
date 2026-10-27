// Fontes oficiais consultadas, por tema, com a data de verificação.
import { tr, localAtual } from "../i18n/index.js";
import { h } from "../ui/dom.js";
import { tituloTela } from "../ui/components.js";
import { FONTES, TEMAS_FONTES } from "../content/fontes.js";
import { FEES } from "../content/fees.js";

const dataBR = (iso) => { const d = new Date(iso + "T12:00:00"); return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString(localAtual(), { day: "2-digit", month: "long", year: "numeric" }); };

export default function tela() {
  const porTema = new Map();
  for (const f of FONTES) { if (!porTema.has(f.tema)) porTema.set(f.tema, []); porTema.get(f.tema).push(f); }
  const temas = [...TEMAS_FONTES.filter((t) => porTema.has(t)), ...[...porTema.keys()].filter((t) => !TEMAS_FONTES.includes(t))];
  return h("div", { class: "pilha" },
    tituloTela(tr("Fontes"), tr("{n} páginas consultadas. Conteúdo conferido em {data}.", { n: FONTES.length, data: dataBR(FEES.verificadoEm) }), { voltar: "#/perfil" }),
    h("div", { class: "card sol" }, h("p", { style: { margin: 0 } }, tr("Regras, taxas e prazos mudam. Todo número do curso vem de uma destas páginas ou está marcado como aproximado. Antes de decidir algo caro, abra a fonte e confirme com um assessor."))),
    temas.map((t) => h("section", { class: "card pilha" }, h("h2", { style: { margin: 0 } }, t),
      h("ul", { class: "fontes-lista" }, porTema.get(t).map((f) => h("li", null,
        h("a", { href: f.url, target: "_blank", rel: "noopener noreferrer" }, f.titulo),
        h("span", { class: "pequeno muted" }, tr(" · conferido em ") + dataBR(f.verificadoEm)),
        f.nota ? h("div", { class: "pequeno muted" }, f.nota) : null))))));
}
