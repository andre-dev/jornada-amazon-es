import { h, limpar } from "./dom.js";
import { avatarSvg, PELES, COR_CABELO, NOMES } from "../art/avatar.js";
import { AVATAR_OPCOES } from "../state/schema.js";

/** Editor de avatar com prévia ao vivo. `inicial`: opções do avatar; `onChange(opcoes)` a cada mudança. */
export function criarEditorAvatar(inicial, onChange, { nivelAcessorio = "mochila", extra = {} } = {}) {
  const op = { ...inicial };
  const previa = h("div", { class: "editor-previa" });
  const grupos = h("div", { class: "editor-grupos" });

  function desenhar() {
    limpar(previa).append(avatarSvg({ ...extra, ...op }, { nivelAcessorio }));
  }
  function grupo(chave, titulo, cores) {
    const lista = h("div", { class: "opcoes " + (cores ? "cores" : ""), role: "group", "aria-label": titulo });
    for (let i = 0; i < AVATAR_OPCOES[chave]; i++) {
      const b = h("button", {
        type: "button", class: cores ? "amostra" : "opcao", "aria-pressed": String(op[chave] === i), "aria-label": NOMES[chave][i], title: NOMES[chave][i],
        style: cores ? { background: cores[i] } : null,
        onclick: () => {
          op[chave] = i;
          for (const [j, x] of [...lista.children].entries()) x.setAttribute("aria-pressed", String(j === i));
          desenhar();
          onChange({ ...op });
        },
      }, cores ? null : NOMES[chave][i]);
      lista.append(b);
    }
    return h("div", { class: "editor-grupo" }, h("div", { class: "rotulo" }, titulo), lista);
  }
  grupos.append(
    grupo("pele", "Tom de pele", PELES),
    grupo("cabelo", "Cabelo", null),
    grupo("corCabelo", "Cor do cabelo", COR_CABELO),
    grupo("barba", "Barba", null),
    grupo("roupa", "Roupa", null),
    grupo("acessorio", "Acessório", null),
  );
  desenhar();
  const el = h("div", { class: "editor-avatar" }, previa, grupos);
  return { el, opcoes: () => ({ ...op }), redesenhar: desenhar };
}
