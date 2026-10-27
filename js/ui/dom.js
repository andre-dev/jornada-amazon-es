// Helpers de DOM. Regra: nunca usar innerHTML com dados do save/importação.
// h() cria nós e usa textContent / createTextNode para qualquer string.

const SVG_NS = "http://www.w3.org/2000/svg";

export function h(tag, attrs, ...filhos) {
  const el = document.createElement(tag);
  aplicarAttrs(el, attrs);
  anexar(el, filhos);
  return el;
}

export function s(tag, attrs, ...filhos) {
  const el = document.createElementNS(SVG_NS, tag);
  aplicarAttrs(el, attrs, true);
  anexar(el, filhos);
  return el;
}

function aplicarAttrs(el, attrs, svg = false) {
  if (!attrs) return;
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v === null || v === undefined) continue;
    if (k === "class") el.setAttribute("class", v);
    else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
    else if (k === "dataset") for (const [dk, dv] of Object.entries(v)) el.dataset[dk] = dv;
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === "text") el.textContent = v;
    else if (!svg && k in el && typeof v !== "object" && k !== "list" && k !== "form" && k !== "type" && k !== "href" && !k.startsWith("aria") && k !== "role") {
      try { el[k] = v; } catch { el.setAttribute(k, v); }
    } else el.setAttribute(k, v === true ? "" : String(v));
  }
}

function anexar(el, filhos) {
  for (const f of filhos.flat(Infinity)) {
    if (f === null || f === undefined || f === false) continue;
    el.append(f instanceof Node ? f : document.createTextNode(String(f)));
  }
}

export function limpar(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }
export function montar(el, ...filhos) { limpar(el); anexar(el, filhos); return el; }

/** Converte uma string SVG (estática/confiável, valores sempre vindos de tabelas) em nó, via DOMParser. */
export function svgDeString(str) {
  const doc = new DOMParser().parseFromString(str, "image/svg+xml");
  const raiz = doc.documentElement;
  if (raiz.nodeName === "parsererror" || doc.querySelector("parsererror")) {
    return document.createElementNS(SVG_NS, "svg");
  }
  return document.importNode(raiz, true);
}

/** Escapa texto para uso dentro de strings SVG (ex.: <title>). */
export function esc(t) {
  return String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- Markdown simples → DOM ---------- */
/* Suporta: **negrito**, *itálico*, listas "- ", parágrafos, [[termo]] -> chip. */

let resolverTermo = null;
/** Permite que [[chave]] mostre o nome bonito do termo (registrado no boot pelo glossário). */
export function definirResolverTermo(fn) { resolverTermo = fn; }

export function inlineMd(texto, { onTermo } = {}) {
  const frag = document.createDocumentFragment();
  const re = /(\*\*[^*]+\*\*|\*[^*\n]+\*|\[\[[^\]]+\]\])/g;
  let ultimo = 0;
  let m;
  const str = String(texto ?? "");
  while ((m = re.exec(str))) {
    if (m.index > ultimo) frag.append(str.slice(ultimo, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) frag.append(h("strong", null, tok.slice(2, -2)));
    else if (tok.startsWith("[[")) {
      const nome = tok.slice(2, -2);
      const [chave, rotulo] = nome.split("|");
      frag.append(h("button", { class: "chip-termo", type: "button", title: "Ver no glossário", onclick: (e) => { e.stopPropagation(); onTermo && onTermo(chave.trim()); } }, (rotulo || (resolverTermo && resolverTermo(chave.trim())) || chave).trim()));
    } else frag.append(h("em", null, tok.slice(1, -1)));
    ultimo = m.index + tok.length;
  }
  if (ultimo < str.length) frag.append(str.slice(ultimo));
  return frag;
}

export function md(texto, opts = {}) {
  const raiz = h("div", { class: "md" });
  const blocos = String(texto ?? "").split(/\n{2,}/);
  for (const bloco of blocos) {
    const linhas = bloco.split("\n").filter((l) => l.trim() !== "");
    if (!linhas.length) continue;
    if (linhas.every((l) => /^\s*[-•]\s+/.test(l))) {
      raiz.append(h("ul", null, linhas.map((l) => h("li", null, inlineMd(l.replace(/^\s*[-•]\s+/, ""), opts)))));
    } else if (linhas.every((l) => /^\s*\d+[.)]\s+/.test(l))) {
      raiz.append(h("ol", null, linhas.map((l) => h("li", null, inlineMd(l.replace(/^\s*\d+[.)]\s+/, ""), opts)))));
    } else {
      raiz.append(h("p", null, inlineMd(linhas.join(" "), opts)));
    }
  }
  return raiz;
}

export function embaralhar(arr, rnd = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
