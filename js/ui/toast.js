import { h } from "./dom.js";
import { icone } from "./icons.js";

let caixa = null;
function garantirCaixa() {
  if (caixa && document.body.contains(caixa)) return caixa;
  caixa = h("div", { class: "toasts", role: "status", "aria-live": "polite", "aria-atomic": "false" });
  document.body.append(caixa);
  return caixa;
}

/** tipo: "" | "xp" | "moeda" | "conquista" | "erro" | "ok" */
export function toast(texto, tipo = "", { ms = 2600, icon = null } = {}) {
  const c = garantirCaixa();
  while (c.children.length >= 3) c.firstChild.remove();
  const ic = icon || { xp: "estrela", moeda: "moeda", conquista: "trofeu", erro: "alerta", ok: "check" }[tipo];
  const el = h("div", { class: "toast " + tipo }, ic ? icone(ic, 20) : null, h("span", null, texto));
  c.append(el);
  setTimeout(() => { el.classList.add("saindo"); setTimeout(() => el.remove(), 320); }, ms);
  return el;
}
