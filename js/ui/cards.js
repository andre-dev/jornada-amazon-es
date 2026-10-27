// Renderizador dos cards de conteúdo da lição (texto, dica, comparação, passos, alerta, delegar, exemplo, cálculo, fluxo).
import { h, md, inlineMd } from "./dom.js";
import { icone } from "./icons.js";
import { dicaCaixote } from "./components.js";
import { personagem, IDS_PERSONAGENS } from "../art/characters.js";
import { cenario, CHAVES_CENARIO } from "../art/scenery.js";
import { termoPorChave } from "../content/glossary.js";

function arteDoCard(chave) {
  if (!chave) return null;
  if (IDS_PERSONAGENS.includes(chave)) return h("div", { class: "card-arte personagem", "aria-hidden": "true" }, personagem(chave));
  if (CHAVES_CENARIO.includes(chave)) return h("div", { class: "card-arte cenario", "aria-hidden": "true" }, cenario(chave));
  return null;
}

function rodapeTermos(card, onTermo) {
  if (!card.termos || !card.termos.length) return null;
  const itens = card.termos.map((k) => termoPorChave(k)).filter(Boolean);
  if (!itens.length) return null;
  return h("div", { class: "card-termos" }, h("span", { class: "pequeno muted" }, "Termos: "), itens.map((t) => h("button", { class: "chip-termo", type: "button", onclick: () => onTermo(t.chave) }, t.termo)));
}

export function renderCard(card, { onTermo }) {
  const o = { onTermo };
  const tipo = card.tipo || "texto";
  const arte = arteDoCard(card.arte);
  const base = (classe, ...filhos) => h("article", { class: `card-aula ${classe}` }, arte, ...filhos, rodapeTermos(card, onTermo));

  switch (tipo) {
    case "dica":
      return h("article", { class: "card-aula tipo-dica" }, dicaCaixote(md(card.corpo, o), { titulo: card.titulo || "Dica do Caixote" }), rodapeTermos(card, onTermo));
    case "alerta":
      return base("tipo-alerta", h("div", { class: "faixa" }, icone("alerta", 24), h("h2", null, card.titulo || "Atenção")), md(card.corpo, o));
    case "delegar":
      return base("tipo-delegar", h("div", { class: "faixa" }, icone("pessoas", 24), h("h2", null, card.titulo || "Quem faz isso por você")), md(card.corpo, o));
    case "exemplo":
      return base("tipo-exemplo", h("div", { class: "faixa" }, icone("lampada", 24), h("h2", null, card.titulo || "Exemplo na prática")), md(card.corpo, o));
    case "comparacao": {
      const cols = card.colunas || [];
      const tabela = h("div", { class: "tabela-wrap" }, h("table", { class: "tabela" },
        h("thead", null, h("tr", null, h("th", { scope: "col" }, card.rotuloLinhas || ""), cols.map((c) => h("th", { scope: "col" }, c)))),
        h("tbody", null, (card.linhas || []).map((l) => h("tr", null, h("th", { scope: "row" }, inlineMd(l[0], o)), l.slice(1).map((c) => h("td", null, inlineMd(c, o))))))));
      return base("tipo-comparacao", card.titulo ? h("h2", null, card.titulo) : null, card.corpo ? md(card.corpo, o) : null, tabela, card.nota ? h("p", { class: "pequeno muted" }, inlineMd(card.nota, o)) : null);
    }
    case "passos":
      return base("tipo-passos", card.titulo ? h("h2", null, card.titulo) : null, card.corpo ? md(card.corpo, o) : null,
        h("ol", { class: "passos" }, (card.itens || []).map((t, i) => h("li", null, h("span", { class: "passo-num", "aria-hidden": "true" }, String(i + 1)), h("span", null, inlineMd(t, o))))));
    case "calculo": {
      const linhas = card.linhas || [];
      return base("tipo-calculo", card.titulo ? h("h2", null, card.titulo) : null, card.corpo ? md(card.corpo, o) : null,
        h("div", { class: "tabela-wrap" }, h("table", { class: "tabela calculo" }, h("tbody", null,
          linhas.map((l) => h("tr", { class: l[2] === "sub" ? "sub" : null }, h("th", { scope: "row" }, inlineMd(l[0], o)), h("td", { class: "num" }, l[1]))),
          card.total ? h("tr", { class: "total" }, h("th", { scope: "row" }, card.total[0]), h("td", { class: "num" }, card.total[1])) : null))),
        card.nota ? h("p", { class: "pequeno muted" }, inlineMd(card.nota, o)) : null);
    }
    case "fluxo":
      return base("tipo-fluxo", card.titulo ? h("h2", null, card.titulo) : null, card.corpo ? md(card.corpo, o) : null,
        h("ol", { class: "fluxo" }, (card.etapas || []).map((e, i, arr) => h("li", { class: "etapa" },
          h("div", { class: "etapa-caixa" }, h("strong", null, e.titulo), e.texto ? h("span", { class: "pequeno" }, inlineMd(e.texto, o)) : null),
          i < arr.length - 1 ? h("span", { class: "etapa-seta", "aria-hidden": "true" }, icone("baixo", 24, { traco: 3 })) : null))));
    default:
      return base("tipo-texto", card.titulo ? h("h2", null, card.titulo) : null, md(card.corpo, o));
  }
}
