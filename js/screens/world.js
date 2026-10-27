import { tr } from "../i18n/index.js";
import { h } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { botao, barra, estrelas, tituloTela, badge } from "../ui/components.js";
import { cenario } from "../art/scenery.js";
import { personagem } from "../art/characters.js";
import { MUNDOS, mundoPorId, mundoLiberado, licaoLiberada, chefeLiberado, progressoMundo } from "../content/index.js";
import { estrelasPorAcerto } from "../engine/quiz.js";
import { toast } from "../ui/toast.js";

export default function mundo({ store, ir, params }) {
  const m = mundoPorId(params.id);
  if (!m) return h("div", { class: "card" }, h("h1", null, tr("Mundo não encontrado")), h("a", { class: "btn", href: "#/mapa" }, tr("Voltar ao mapa")));
  const s = store.estado;
  if (!mundoLiberado(s, m)) {
    const ant = MUNDOS[m.id - 2];
    return h("div", { class: "card pilha" }, tituloTela(m.titulo, tr("Mundo bloqueado"), { voltar: "#/mapa" }),
      h("p", null, tr("Derrote {chefe} no mundo {n} para abrir este caminho.", { chefe: ant.chefe.nome, n: ant.id })),
      botao(tr("Ir para o mundo {n}", { n: ant.id }), { classe: "oliva", onclick: () => ir("/mundo/" + ant.id) }));
  }
  const p = progressoMundo(s, m);
  const banner = h("div", { class: "mundo-banner", style: { "--cor-mundo": `var(--${m.cor})` } },
    h("div", { class: "mundo-cena", "aria-hidden": "true" }, cenario(m.cenario)),
    h("div", { class: "mundo-banner-info" },
      h("span", { class: "badge sol" }, tr("Mundo {n} de {t}", { n: m.id, t: MUNDOS.length })),
      h("h1", null, m.titulo),
      h("p", null, m.subtitulo)));

  const lista = h("ol", { class: "fases" });
  m.licoes.forEach((l, i) => {
    const reg = s.licoes[l.id];
    const feita = !!(reg && reg.concluida);
    const lib = licaoLiberada(s, m, l.id);
    const estado = feita ? "feita" : lib ? "aberta" : "bloqueada";
    const corpo = [
      h("span", { class: "fase-bolha" }, feita ? icone("check", 22, { traco: 3 }) : lib ? String(i + 1) : icone("cadeado", 20)),
      h("span", { class: "fase-info" },
        h("strong", null, l.titulo),
        h("span", { class: "pequeno muted" }, `${l.minutos} min`, reg && reg.cardsVistos && !feita ? tr(" · {n} cards vistos", { n: reg.cardsVistos }) : "")),
      feita ? estrelas(estrelasPorAcerto(reg.melhorAcerto), 3, 20) : (lib ? icone("seta", 22) : null),
    ];
    const li = h("li", { class: "fase-item" });
    if (lib) li.append(h("a", { class: `fase ${estado}`, href: `#/licao/${l.id}`, "aria-label": (feita ? tr("Lição {n}: {titulo}, concluída", { n: i + 1, titulo: l.titulo }) : tr("Lição {n}: {titulo}", { n: i + 1, titulo: l.titulo })) }, corpo));
    else li.append(h("button", { class: "fase bloqueada", type: "button", onclick: () => toast(tr("Conclua a lição anterior para abrir esta."), "", { icon: "cadeado" }) }, corpo));
    lista.append(li);
  });

  const chefeAberto = chefeLiberado(s, m);
  const derrotado = p.derrotado;
  const reg = s.chefes[m.chefe.id];
  const porta = h("section", { class: `porta-chefe card ${derrotado ? "oliva" : chefeAberto ? "tomate" : "plano"}` },
    h("div", { class: "porta-arte" + (chefeAberto || derrotado ? "" : " silhueta"), "aria-hidden": "true" }, personagem(m.chefe.id)),
    h("div", { class: "porta-info" },
      h("h2", null, m.chefe.nome),
      h("p", null, derrotado ? tr("Derrotado! Você pode voltar para treinar quando quiser.") : chefeAberto ? tr("Ele está esperando. Mostre o que aprendeu neste mundo.") : tr("A porta abre quando você concluir todas as lições.")),
      reg && reg.tentativas ? h("p", { class: "pequeno muted" }, tr("Tentativas: {n}", { n: reg.tentativas })) : null,
      botao(derrotado ? tr("Lutar de novo") : tr("Enfrentar o chefe"), { classe: chefeAberto ? "tomate" : "card", icon: chefeAberto ? "espada" : "cadeado", disabled: !chefeAberto, onclick: () => ir("/chefe/" + m.chefe.id) })));

  const prox = MUNDOS[m.id];
  return h("div", { class: "pilha" },
    h("a", { class: "btn card pequeno", href: "#/mapa" }, icone("voltar", 18), tr("Mapa")),
    banner,
    h("div", { class: "linha" }, h("div", { class: "espaco" }, barra(p.fracao, { cor: "mar", rotulo: tr("Progresso no mundo") })), h("span", { class: "pequeno", style: { fontWeight: 800 } }, (derrotado ? tr("{f}/{t} lições + chefe", { f: p.feitas, t: p.total }) : tr("{f}/{t} lições", { f: p.feitas, t: p.total })))),
    h("h2", null, tr("Fases")), lista, porta,
    derrotado && prox ? botao(tr("Seguir para {titulo}", { titulo: prox.titulo }), { classe: "oliva bloco grande", icon: "seta", onclick: () => ir("/mundo/" + prox.id) }) : null);
}
