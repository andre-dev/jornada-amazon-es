import { tr } from "../i18n/index.js";
import { h } from "./dom.js";

const FOCAVEIS = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Abre um modal acessível (foco preso, ESC fecha, devolve o foco).
 * opcoes: { titulo, conteudo: Node|Node[], acoes: [{texto, classe, onclick(fechar)}], fechavel=true, classe }
 */
export function abrirModal({ titulo, conteudo, acoes = [], fechavel = true, classe = "", aoFechar } = {}) {
  const anterior = document.activeElement;
  const idTitulo = "modal-t-" + Math.random().toString(36).slice(2, 7);
  let fechado = false;

  const fechar = (valor) => {
    if (fechado) return;
    fechado = true;
    document.removeEventListener("keydown", tecla, true);
    fundo.remove();
    document.body.style.overflow = "";
    if (anterior && anterior.focus) { try { anterior.focus(); } catch { /* ignora */ } }
    if (aoFechar) aoFechar(valor);
  };

  const botoes = acoes.map((a) => h("button", { class: "btn " + (a.classe || ""), type: "button", onclick: () => (a.onclick ? a.onclick(fechar) : fechar(a.valor)) }, a.texto));
  const caixa = h("div", { class: "modal " + classe, role: "dialog", "aria-modal": "true", "aria-labelledby": titulo ? idTitulo : null, tabindex: "-1" },
    titulo ? h("h2", { id: idTitulo }, titulo) : null,
    h("div", { class: "modal-corpo" }, conteudo),
    botoes.length ? h("div", { class: "acoes" }, botoes) : null);
  const fundo = h("div", { class: "modal-fundo", onclick: (e) => { if (e.target === fundo && fechavel) fechar(); } }, caixa);

  function tecla(e) {
    if (e.key === "Escape" && fechavel) { e.stopPropagation(); fechar(); return; }
    if (e.key === "Tab") {
      const f = [...caixa.querySelectorAll(FOCAVEIS)].filter((x) => x.offsetParent !== null);
      if (!f.length) { e.preventDefault(); caixa.focus(); return; }
      const primeiro = f[0], ultimo = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === primeiro || document.activeElement === caixa)) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    }
  }
  document.addEventListener("keydown", tecla, true);
  document.body.append(fundo);
  document.body.style.overflow = "hidden";
  const alvo = caixa.querySelector("[autofocus]") || botoes[botoes.length - 1] || caixa;
  setTimeout(() => alvo.focus(), 30);
  return { fechar, el: caixa };
}

export function confirmar({ titulo, texto, ok = tr("Confirmar"), cancelar = tr("Cancelar"), perigo = false }) {
  return new Promise((resolve) => {
    abrirModal({
      titulo, conteudo: h("p", null, texto),
      acoes: [
        { texto: cancelar, classe: "card", onclick: (f) => { f(); resolve(false); } },
        { texto: ok, classe: perigo ? "tomate" : "oliva", onclick: (f) => { f(); resolve(true); } },
      ],
      aoFechar: () => resolve(false),
    });
  });
}
