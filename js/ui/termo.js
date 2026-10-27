// Abre um termo do glossário em modal (usado pelos chips das lições).
import { tr } from "../i18n/index.js";
import { h } from "./dom.js";
import { abrirModal } from "./modal.js";
import { store } from "../state/store.js";
import { GLOSSARIO, termoPorChave } from "../content/glossary.js";

export function abrirTermo(chave) {
  const t = termoPorChave(chave);
  if (!t) {
    abrirModal({ titulo: chave, conteudo: h("p", null, tr("Este termo ainda não está no glossário.")), acoes: [{ texto: tr("Fechar"), classe: "card", valor: 1 }] });
    return;
  }
  store.abrirTermo(t.chave);
  const rel = (t.relacionados || []).map((c) => termoPorChave(c)).filter(Boolean);
  const m = abrirModal({
    titulo: t.termo,
    conteudo: [
      t.es ? h("p", { class: "es" }, t.es) : null,
      h("p", null, t.definicao),
      t.exemplo ? h("p", { class: "muted pequeno" }, tr("Exemplo: ") + t.exemplo) : null,
      rel.length ? h("p", { class: "pequeno" }, tr("Veja também: "), rel.map((r, i) => [i ? ", " : "", h("button", { class: "chip-termo", type: "button", onclick: () => { m.fechar(); abrirTermo(r.chave); } }, r.termo)])) : null,
    ],
    acoes: [{ texto: tr("Entendi"), classe: "oliva", valor: 1 }, { texto: tr("Abrir glossário"), classe: "card", onclick: (f) => { f(); location.hash = "#/glossario?q=" + encodeURIComponent(t.termo); } }],
  });
}
export { GLOSSARIO };
