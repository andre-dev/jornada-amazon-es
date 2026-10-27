import { tr } from "../i18n/index.js";
import { h, limpar } from "./dom.js";
import { icone } from "./icons.js";
import { infoNivel, acessorioDeNivel } from "../engine/xp.js";
import { streakViva } from "../engine/streak.js";
import { hojeISO } from "../state/schema.js";
import { avatarSvg } from "../art/avatar.js";
import { barra, atualizarBarra, fmt } from "./components.js";

const ROTULOS_SYNC = { ok: ["nuvem", tr("Sincronizado")], salvando: ["relogio", tr("Salvando…")], local: ["disco", tr("Só neste aparelho")] };

export function criarHud(store) {
  const btnAvatar = h("a", { class: "hud-avatar", href: "#/perfil", "aria-label": tr("Abrir perfil") });
  const nome = h("span", { class: "hud-titulo" });
  const nivelTxt = h("span", { class: "hud-xp" });
  const xpBarra = barra(0, { cor: "sol", fina: true, rotulo: tr("XP até o próximo nível") });
  const moedasTxt = h("span", null, "0");
  const chamaTxt = h("span", null, "0");
  const chama = h("span", { class: "hud-stat chama", title: tr("Dias seguidos estudando") }, icone("chama", 18, { preencher: "currentColor" }), chamaTxt);
  const moedas = h("span", { class: "hud-stat moedas", title: tr("Moedas do jogo") }, icone("moeda", 18), moedasTxt);
  const sync = h("button", { class: "hud-sync local", type: "button", "aria-label": tr("Estado da sincronização: só neste aparelho"), title: tr("Só neste aparelho") }, icone("disco", 20));
  const el = h("header", { class: "hud", role: "banner" },
    btnAvatar,
    h("div", { class: "hud-nivel" }, h("div", { class: "t" }, nome, nivelTxt), xpBarra),
    chama, moedas, sync);

  let chaveAvatar = "";
  function atualizar(s) {
    const info = infoNivel(s.xp);
    const chave = JSON.stringify(s.jogador.avatar) + info.nivel;
    if (chave !== chaveAvatar) {
      chaveAvatar = chave;
      limpar(btnAvatar).append(avatarSvg(s.jogador.avatar, { nivelAcessorio: acessorioDeNivel(info.nivel), titulo: tr("Avatar de {nome}", { nome: s.jogador.nome }) }));
    }
    limpar(nome).append(tr("Nv {n}", { n: info.nivel }), h("span", { class: "hud-tit-longo" }, ` · ${info.titulo}`));
    nivelTxt.textContent = `${fmt(info.xpNoNivel)}/${fmt(info.xpNecessario)}`;
    nivelTxt.setAttribute("aria-label", tr("{a} de {b} XP", { a: info.xpNoNivel, b: info.xpNecessario }));
    atualizarBarra(xpBarra, info.progresso);
    moedasTxt.textContent = fmt(s.moedas);
    chamaTxt.textContent = String(s.streak.atual);
    chama.classList.toggle("apagada", !streakViva(s.streak, hojeISO()));
    chama.setAttribute("aria-label", tr("{n} dias seguidos", { n: s.streak.atual }));
    moedas.setAttribute("aria-label", tr("{n} moedas", { n: s.moedas }));
  }
  atualizar(store.estado);
  store.assinar((s) => atualizar(s));

  function definirSync(status, detalhe) {
    const [ic, txt] = ROTULOS_SYNC[status] || ROTULOS_SYNC.local;
    sync.className = "hud-sync " + status;
    limpar(sync).append(icone(ic, 20));
    const rot = detalhe || txt;
    sync.title = rot;
    sync.setAttribute("aria-label", tr("Estado da sincronização: {s}", { s: rot }));
  }
  sync.addEventListener("click", () => { location.hash = "#/perfil"; });
  return { el, definirSync, atualizar };
}
