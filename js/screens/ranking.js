// Ranking: os 50 jogadores com mais XP, sua posição e a opção de aparecer ou não.
import { h, limpar } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { tituloTela, fmt, estadoVazio } from "../ui/components.js";
import { avatarSvg } from "../art/avatar.js";
import { acessorioDeNivel } from "../engine/xp.js";
import { normalizarAvatar } from "../state/schema.js";
import { tr } from "../i18n/index.js";

const MEDALHAS = ["🥇", "🥈", "🥉"];

function miniAvatar(av, nivel) {
  const a = normalizarAvatar({ ...av, equipados: { chapeu: av && av.chapeu ? av.chapeu : null } });
  return h("span", { class: "rk-avatar", "aria-hidden": "true" }, avatarSvg(a, { nivelAcessorio: acessorioDeNivel(nivel || 1), titulo: "" }));
}

function linha(j, pos, eu) {
  return h("li", { class: "rk-linha" + (eu ? " rk-eu" : "") },
    h("span", { class: "rk-pos" }, pos <= 3 ? MEDALHAS[pos - 1] : `${pos}º`),
    miniAvatar(j.avatar, j.nivel),
    h("span", { class: "rk-nome" },
      h("strong", null, String(j.nome || tr("Jogador")), eu ? h("span", { class: "badge sol rk-voce" }, tr("você")) : null),
      h("span", { class: "pequeno muted" }, tr("Nível {n} · {l} lições · {c} chefes", { n: j.nivel || 1, l: j.licoes || 0, c: j.chefes || 0 }))),
    h("span", { class: "rk-xp" }, `${fmt(j.xp || 0)} XP`));
}

export default function tela({ store, ranking }) {
  const raiz = h("div", { class: "pilha ranking" }, tituloTela(tr("Ranking"), tr("Quem está mais perto do Chefão das Vendas.")));
  const corpo = h("div", { class: "pilha" });
  raiz.append(corpo);

  if (!ranking || !ranking.api) {
    corpo.append(estadoVazio(tr("Ranking indisponível"), tr("O ranking só funciona no site oficial do jogo, com login do Google.")));
    return raiz;
  }
  if (!ranking.uid) {
    corpo.append(h("section", { class: "card mar pilha" },
      h("h2", { style: { margin: 0 } }, tr("Entre para participar")),
      h("p", { style: { margin: 0 } }, tr("O ranking é só para quem entrou com o Google. Seu progresso também passa a ficar salvo na sua conta.")),
      ranking.entrar ? h("button", { class: "btn sol", type: "button", onclick: () => ranking.entrar() }, icone("nuvem", 20), tr("Entrar com Google")) : null));
    return raiz;
  }

  const s = store.estado;
  // Interruptor: aparecer no ranking
  const chk = h("input", { type: "checkbox", class: "toggle", role: "switch", checked: s.config.ranking });
  const opcao = h("section", { class: "card" },
    h("label", { class: "interruptor" },
      h("span", null, h("strong", null, tr("Aparecer no ranking")),
        h("span", { class: "dica", style: { display: "block", fontSize: ".85rem", color: "var(--tinta-2)" } }, tr("Aparece só o nome do personagem ({nome}), o nível e o XP. Nunca o seu e-mail.", { nome: s.jogador.nome }))),
      chk));
  chk.addEventListener("change", async () => {
    store.configurar({ ranking: chk.checked });
    await ranking.sinc.sincronizarAgora();
    carregar();
  });
  raiz.insertBefore(opcao, corpo);

  async function carregar() {
    limpar(corpo).append(h("p", { class: "muted", role: "status" }, tr("Carregando o ranking…")));
    try {
      await ranking.sinc.sincronizarAgora();
      const [top, meu] = await Promise.all([ranking.api.top(50), ranking.api.meu(ranking.uid)]);
      limpar(corpo);
      if (!top.length) { corpo.append(estadoVazio(tr("Ninguém no ranking ainda"), tr("Complete uma lição para aparecer aqui."))); return; }
      const lista = h("ol", { class: "rk-lista card" });
      top.forEach((j, i) => lista.append(linha(j, i + 1, j.uid === ranking.uid)));
      corpo.append(lista);
      if (meu && !top.some((j) => j.uid === ranking.uid)) {
        const pos = await ranking.api.posicao(meu.xp || 0);
        corpo.append(h("p", { class: "muted", style: { margin: "4px 0 0" } }, tr("Sua posição")), h("ol", { class: "rk-lista card" }, linha(meu, pos, true)));
      } else if (!meu && s.config.ranking && !s.jogador.criado) {
        corpo.append(h("p", { class: "muted" }, tr("Crie seu personagem para aparecer no ranking.")));
      }
    } catch (e) {
      console.warn(e);
      limpar(corpo).append(estadoVazio(tr("Não consegui carregar o ranking"), tr("Verifique a internet e tente de novo."),
        h("button", { class: "btn", type: "button", onclick: carregar }, tr("Tentar de novo"))));
    }
  }
  carregar();
  return raiz;
}
