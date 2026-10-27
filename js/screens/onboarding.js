import { tr } from "../i18n/index.js";
import { h, md } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { botao, dicaCaixote } from "../ui/components.js";
import { criarEditorAvatar } from "../ui/avatarEditor.js";
import { personagem } from "../art/characters.js";
import { cenario } from "../art/scenery.js";
import { montar } from "../ui/dom.js";
import { seletorIdioma } from "../ui/idioma.js";

export default function onboarding({ store, ir }) {
  const raiz = h("div", { class: "onboarding" });
  let passo = 0;
  let nome = store.estado.jogador.nome || tr("André");
  let avatarOp = { ...store.estado.jogador.avatar };

  function passo0() {
    return h("section", { class: "ob-passo ob-capa" },
      h("div", { class: "ob-cena", "aria-hidden": "true" }, cenario("vila")),
      h("div", { class: "ob-caixote", "aria-hidden": "true" }, personagem("caixote")),
      h("h1", { class: "ob-titulo" }, tr("Do Zero ao Chefão")),
      h("p", { class: "ob-sub" }, tr("Aprenda a vender na Amazon da Espanha e depois na Europa inteira, jogando.")),
      h("div", { class: "centro" }, seletorIdioma({ compacto: true })),
      dicaCaixote(md(tr("Oi! Eu sou o **Caixote**. Vou te guiar por 9 mundos, 9 chefes e um monte de contas bem feitas. Sem decoreba: cada lição dura poucos minutos.")), { titulo: tr("Prazer!") }),
      botao(tr("Começar"), { classe: "grande bloco oliva", onclick: () => { passo = 1; desenhar(); } }));
  }

  function passo1() {
    const entrada = h("input", { class: "entrada", id: "ob-nome", value: nome, maxlength: "30", autocomplete: "given-name", oninput: (e) => { nome = e.target.value; } });
    const ed = criarEditorAvatar(avatarOp, (o) => { avatarOp = o; });
    return h("section", { class: "ob-passo" },
      h("h1", null, tr("Monte seu personagem")),
      h("p", { class: "muted" }, tr("É ele quem vai atravessar o mapa. Dá para mudar depois no Perfil.")),
      h("div", { class: "campo" }, h("label", { for: "ob-nome" }, tr("Como devo te chamar?")), entrada),
      ed.el,
      h("div", { class: "linha ob-acoes" },
        botao(tr("Voltar"), { classe: "card", onclick: () => { passo = 0; desenhar(); } }),
        h("span", { class: "espaco" }),
        botao(tr("Continuar"), { classe: "oliva", onclick: () => { passo = 2; desenhar(); } })));
  }

  function passo2() {
    const regras = [
      ["estrela", tr("XP e níveis"), tr("Cada card lido, lição feita e quiz acertado rende XP. Seu título sobe de Novato Curioso até Lenda Europeia.")],
      ["espada", tr("Chefes"), tr("No fim de cada mundo há um chefe com perguntas difíceis. Errou, perde um coração; acertou, causa dano.")],
      ["moeda", tr("Moedas"), tr("Troque moedas por chapéus, fundos e confetes na Loja do Caixote. Nada é pago.")],
      ["missoes", tr("Missões da vida real"), tr("Uma lista de tarefas de verdade para você montar o negócio enquanto aprende.")],
    ];
    return h("section", { class: "ob-passo" },
      h("h1", null, tr("Pronto, {nome}!", { nome: nome.trim() || tr("André") })),
      h("p", { class: "muted" }, tr("Como o jogo funciona, em 20 segundos:")),
      h("ul", { class: "ob-regras" }, regras.map(([ic, t, d]) => h("li", { class: "card" }, h("span", { class: "ob-ic" }, icone(ic, 26)), h("div", null, h("strong", null, t), h("p", { style: { margin: 0 } }, d))))),
      h("div", { class: "linha ob-acoes" },
        botao(tr("Voltar"), { classe: "card", onclick: () => { passo = 1; desenhar(); } }),
        h("span", { class: "espaco" }),
        botao(tr("Entrar no mapa"), { classe: "oliva grande", icon: "mapa", onclick: () => { store.criarJogador({ nome, avatar: avatarOp }); ir("/mapa"); } })));
  }

  function desenhar() {
    montar(raiz, [passo0, passo1, passo2][passo]());
    window.scrollTo(0, 0);
    const alvo = raiz.querySelector("h1");
    if (alvo) { alvo.setAttribute("tabindex", "-1"); alvo.focus({ preventScroll: true }); }
  }
  desenhar();
  return raiz;
}
