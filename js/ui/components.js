import { tr, localAtual } from "../i18n/index.js";
import { h } from "./dom.js";
import { icone } from "./icons.js";
import { personagem } from "../art/characters.js";

export function botao(texto, { classe = "", onclick, icon, tipo = "button", ...rest } = {}) {
  return h("button", { class: "btn " + classe, type: tipo, onclick, ...rest }, icon ? icone(icon, 20) : null, texto);
}
export function link(texto, href, { classe = "", icon, ...rest } = {}) {
  return h("a", { class: "btn " + classe, href, ...rest }, icon ? icone(icon, 20) : null, texto);
}
export function barra(fracao, { cor = "", fina = false, rotulo } = {}) {
  const f = Math.max(0, Math.min(1, fracao || 0));
  const el = h("div", { class: `barra ${cor} ${fina ? "fina" : ""}`, role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(Math.round(f * 100)), "aria-label": rotulo || tr("Progresso") }, h("i", { style: { width: Math.round(f * 100) + "%" } }));
  return el;
}
export function atualizarBarra(el, fracao) {
  const f = Math.max(0, Math.min(1, fracao || 0));
  el.setAttribute("aria-valuenow", String(Math.round(f * 100)));
  el.firstChild.style.width = Math.round(f * 100) + "%";
}
export function badge(texto, cor = "") { return h("span", { class: "badge " + cor }, texto); }

/** Balão com o Caixote dando uma dica. */
export function dicaCaixote(conteudo, { titulo = tr("Dica do Caixote") } = {}) {
  const av = h("div", { class: "caixote-avatar", "aria-hidden": "true" }, personagem("caixote"));
  return h("div", { class: "balao-caixote" }, av, h("div", { class: "balao" }, h("strong", { class: "balao-titulo" }, titulo), conteudo));
}

export function tituloTela(titulo, subtitulo, { voltar } = {}) {
  return h("header", { class: "tela-titulo" },
    voltar ? h("a", { class: "btn card btn-icone voltar", href: voltar, "aria-label": tr("Voltar") }, icone("voltar", 22)) : null,
    h("div", null, h("h1", null, titulo), subtitulo ? h("p", { class: "muted", style: { margin: 0 } }, subtitulo) : null));
}

export function estrelas(n, total = 3, tam = 22) {
  const el = h("span", { class: "estrelas", role: "img", "aria-label": `${n} de ${total} estrelas` });
  for (let i = 0; i < total; i++) el.append(h("span", { class: i < n ? "est cheia" : "est" }, icone("estrela", tam, { preencher: i < n ? "currentColor" : "none" })));
  return el;
}

export function estadoVazio(titulo, texto, acao) {
  return h("div", { class: "vazio" }, h("div", { class: "vazio-arte", "aria-hidden": "true" }, personagem("caixote")), h("h3", null, titulo), h("p", { class: "muted" }, texto), acao || null);
}

/** Formata número no estilo do idioma atual. */
export function fmt(n, casas = 0) {
  return Number(n).toLocaleString(localAtual(), { minimumFractionDigits: casas, maximumFractionDigits: casas });
}
export function fmtEUR(n, casas = 2) {
  if (!Number.isFinite(n)) return "—";
  return Number(n).toLocaleString(localAtual(), { style: "currency", currency: "EUR", minimumFractionDigits: casas, maximumFractionDigits: casas });
}
export function fmtPct(n, casas = 1) {
  if (!Number.isFinite(n)) return "—";
  return (n * 100).toLocaleString(localAtual(), { minimumFractionDigits: casas, maximumFractionDigits: casas }) + "%";
}
