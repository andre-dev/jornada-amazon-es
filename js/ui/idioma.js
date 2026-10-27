// Seletor de idioma (PT / ES / EN). Trocar recarrega o jogo; o progresso continua igual.
import { h } from "./dom.js";
import { IDIOMAS, idiomaAtual, trocarIdioma, tr } from "../i18n/index.js";

export function seletorIdioma({ compacto = false } = {}) {
  const atual = idiomaAtual();
  return h("div", { class: "seletor-idioma" + (compacto ? " compacto" : ""), role: "group", "aria-label": tr("Idioma") },
    IDIOMAS.map((i) => h("button", {
      type: "button", lang: i.html, "aria-pressed": String(i.id === atual), title: i.nome,
      onclick: () => { if (i.id !== atual) trocarIdioma(i.id); },
    }, compacto ? i.curto : i.nome)));
}
