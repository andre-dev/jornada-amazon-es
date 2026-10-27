// Glossário PT/ES com busca. ?q= preenche a busca.
import { tr, localAtual } from "../i18n/index.js";
import { h, limpar } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { tituloTela, estadoVazio } from "../ui/components.js";
import { GLOSSARIO, termoPorChave } from "../content/glossary.js";

const semAcento = (t) => String(t || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function tela({ store, query }) {
  let busca = query && query.q ? String(query.q).slice(0, 60) : "";
  let cat = tr("Todas");
  const categorias = [tr("Todas"), ...new Set(GLOSSARIO.map((t) => t.categoria).filter(Boolean))];
  const entrada = h("input", { class: "entrada", type: "search", placeholder: tr("Buscar termo: FBA, IVA, EORI…"), "aria-label": tr("Buscar no glossário"), value: busca });
  const lista = h("div", { class: "pilha", "aria-live": "polite" });
  const contagem = h("p", { class: "muted pequeno", style: { margin: 0 } });
  const abas = h("div", { class: "abas", role: "group", "aria-label": tr("Categorias") });

  function termoCard(t) {
    const rel = (t.relacionados || []).map((c) => termoPorChave(c)).filter(Boolean);
    const d = h("details", { class: "termo card", id: "termo-" + t.chave, open: busca && semAcento(t.termo) === semAcento(busca) });
    d.addEventListener("toggle", () => { if (d.open) store.abrirTermo(t.chave); });
    d.append(
      h("summary", null, h("span", { class: "termo-nome" }, t.termo), t.categoria ? h("span", { class: "badge mar" }, t.categoria) : null),
      h("div", { class: "pilha termo-corpo" },
        t.es ? h("p", { class: "es" }, t.es) : null,
        h("p", null, t.definicao),
        t.exemplo ? h("p", { class: "muted pequeno" }, tr("Exemplo: ") + t.exemplo) : null,
        rel.length ? h("p", { class: "pequeno" }, tr("Veja também: "), rel.map((r, i) => [i ? ", " : "", h("button", { class: "chip-termo", type: "button", onclick: () => { busca = r.termo; entrada.value = busca; cat = tr("Todas"); desenharAbas(); desenhar(); } }, r.termo)])) : null));
    return d;
  }
  function desenhar() {
    const q = semAcento(busca.trim());
    const itens = GLOSSARIO.filter((t) => (cat === tr("Todas") || t.categoria === cat) && (!q || semAcento(t.termo).includes(q) || semAcento(t.es).includes(q) || semAcento(t.definicao).includes(q)))
      .sort((a, b) => a.termo.localeCompare(b.termo, localAtual()));
    limpar(lista);
    contagem.textContent = (itens.length === 1 ? tr("{n} termo", { n: 1 }) : tr("{n} termos", { n: itens.length }));
    if (!itens.length) { lista.append(estadoVazio(tr("Nenhum termo encontrado"), tr("Tente outra palavra ou limpe a busca."), h("button", { class: "btn card", type: "button", onclick: () => { busca = ""; entrada.value = ""; cat = tr("Todas"); desenharAbas(); desenhar(); } }, tr("Limpar busca")))); return; }
    lista.append(...itens.map(termoCard));
  }
  function desenharAbas() {
    limpar(abas).append(...categorias.map((c) => h("button", { class: "aba", type: "button", "aria-pressed": String(c === cat), "aria-selected": String(c === cat), onclick: () => { cat = c; desenharAbas(); desenhar(); } }, c)));
  }
  entrada.addEventListener("input", () => { busca = entrada.value; desenhar(); });
  desenharAbas(); desenhar();
  return h("div", { class: "pilha" }, tituloTela(tr("Glossário"), tr("Termos em português, com o nome em espanhol.")), entrada, abas, contagem, lista);
}
