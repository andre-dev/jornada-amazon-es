import { tr } from "../i18n/index.js";
import { h } from "../ui/dom.js";
import { bannerConta } from "../ui/conta.js";
import { icone } from "../ui/icons.js";
import { botao, dicaCaixote, barra, fmt } from "../ui/components.js";
import { cenario } from "../art/scenery.js";
import { personagem } from "../art/characters.js";
import { avatarSvg } from "../art/avatar.js";
import { infoNivel, acessorioDeNivel } from "../engine/xp.js";
import { MUNDOS, TOTAL_LICOES, mundoLiberado, progressoMundo, proximoPasso } from "../content/index.js";
import { contarLicoesConcluidas } from "../engine/rewards.js";
import { toast } from "../ui/toast.js";

const DICAS = [
  tr("Antes de se apaixonar por um produto, faça a conta de ponta a ponta. Quem calcula primeiro dorme melhor."),
  tr("Dono de empresa não precisa operar: precisa entender o suficiente para escolher bem quem opera."),
  tr("Cada lição é curta de propósito. Uma por dia vale mais do que cinco no sábado."),
  tr("Regras e taxas mudam. As lições mostram a data em que cada informação foi conferida."),
  tr("Na dúvida sobre imposto, pergunte a uma gestoría. Barato perto do custo de um erro."),
  tr("Termos sublinhados são clicáveis: eles abrem o glossário sem tirar você da lição."),
  tr("Amostra primeiro, pedido grande depois. Sempre."),
];

export default function mapa({ store, ir, persist }) {
  const s = store.estado;
  const info = infoNivel(s.xp);
  const passo = proximoPasso(s);
  const feitas = contarLicoesConcluidas(s);
  const dica = DICAS[(new Date().getDate() + feitas) % DICAS.length];

  const rotuloContinuar = passo.tipo === "licao" ? (passo.retomar ? tr("Continuar a lição") : feitas === 0 ? tr("Começar a primeira lição") : tr("Próxima lição"))
    : passo.tipo === "chefe" ? tr("Enfrentar o chefe") : tr("Ver meu certificado");
  const destino = passo.tipo === "licao" ? `/licao/${passo.id}` : passo.tipo === "chefe" ? `/chefe/${passo.id}` : "/certificado";

  const hero = h("section", { class: "mapa-hero card sol" },
    h("div", { class: "hero-texto" },
      h("h1", null, tr("Olá, {nome}!", { nome: s.jogador.nome })),
      h("p", { class: "hero-sub" }, passo.tipo === "fim" ? tr("Você chegou à Coroa da Europa. Que jornada!") : tr("{f} de {t} lições feitas. Próximo passo: {passo}.", { f: feitas, t: TOTAL_LICOES, passo: passo.titulo })),
      h("div", { class: "linha" },
        botao(rotuloContinuar, { classe: "oliva grande", icon: "seta", onclick: () => ir(destino) }),
        h("span", { class: "badge" }, tr("Nível {n}", { n: info.nivel })),
        h("a", { class: "badge rk-atalho", href: "#/ranking" }, tr("🏆 Ranking")))),
    h("div", { class: "hero-caixote", "aria-hidden": "true" }, personagem("caixote")));

  const trilha = h("div", { class: "trilha" });
  const svgFundo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgFundo.setAttribute("class", "trilha-fundo");
  svgFundo.setAttribute("aria-hidden", "true");
  trilha.append(svgFundo);

  const inicio = h("div", { class: "no-inicio", "data-no": "0" },
    h("span", { class: "no-inicio-ic" }, icone("casa", 22)),
    h("div", null, h("strong", null, tr("Partida")), h("div", { class: "pequeno" }, tr("Brasil → Espanha → Europa"))));
  trilha.append(inicio);

  const atual = passo.mundo.id;
  let ultimoLiberado = 0;
  for (const m of MUNDOS) {
    const lib = mundoLiberado(s, m);
    if (lib) ultimoLiberado = m.id;
    const p = progressoMundo(s, m);
    const estado = p.derrotado ? "concluido" : !lib ? "bloqueado" : m.id === atual ? "atual" : "aberto";
    const conteudo = [
      h("div", { class: "no-cena", "aria-hidden": "true" }, cenario(m.cenario)),
      h("span", { class: "no-num" }, String(m.id)),
      estado === "bloqueado" ? h("span", { class: "no-cadeado" }, icone("cadeado", 28)) : null,
      p.derrotado ? h("span", { class: "no-selo", title: tr("Chefe derrotado") }, icone("estrela", 22, { preencher: "currentColor" })) : null,
      h("div", { class: "no-info" },
        h("h2", null, m.titulo),
        h("p", { class: "pequeno" }, m.subtitulo),
        h("div", { class: "no-prog" }, barra(p.fracao, { cor: estado === "concluido" ? "oliva" : "mar", fina: true, rotulo: tr("Progresso do mundo {n}", { n: m.id }) }), h("span", { class: "pequeno" }, (p.derrotado ? tr("{f}/{t} lições + chefe", { f: p.feitas, t: p.total }) : tr("{f}/{t} lições", { f: p.feitas, t: p.total }))))),
      estado === "atual" ? h("div", { class: "no-marcador", "aria-hidden": "true" }, avatarSvg(s.jogador.avatar, { nivelAcessorio: acessorioDeNivel(info.nivel) })) : null,
    ];
    const rotulo = tr("Mundo {n}: {titulo}.", { n: m.id, titulo: m.titulo }) + " " + (estado === "bloqueado" ? tr("Bloqueado.") : estado === "concluido" ? tr("Concluído.") : tr("{f} de {t} lições feitas.", { f: p.feitas, t: p.total }));
    let no;
    if (estado === "bloqueado") {
      no = h("button", { class: `no ${estado}`, type: "button", "data-no": String(m.id), "aria-label": rotulo, onclick: () => toast(tr("Derrote {chefe} para abrir este mundo.", { chefe: MUNDOS[m.id - 2].chefe.nome }), "", { icon: "cadeado" }) }, conteudo);
    } else {
      no = h("a", { class: `no ${estado}`, href: `#/mundo/${m.id}`, "data-no": String(m.id), "aria-label": rotulo, style: { "--cor-mundo": `var(--${m.cor})` } }, conteudo);
    }
    trilha.append(no);
  }

  const dicaEl = dicaCaixote(h("p", null, dica));

  const aviso = bannerConta({ store, persist });
  const raiz = h("div", { class: "mapa pilha" }, aviso, hero, trilha, dicaEl);

  /* Desenha o caminho ligando os centros dos nós (recalcula ao redimensionar). */
  function desenharCaminho() {
    const caixa = trilha.getBoundingClientRect();
    if (!caixa.width) return;
    const nos = [inicio, ...trilha.querySelectorAll(".no")];
    const pts = nos.map((el) => { const r = el.getBoundingClientRect(); const cena = el.querySelector(".no-cena"); const rr = cena ? cena.getBoundingClientRect() : r; return [rr.left - caixa.left + rr.width / 2, rr.top - caixa.top + rr.height / 2]; });
    const NS = "http://www.w3.org/2000/svg";
    svgFundo.setAttribute("viewBox", `0 0 ${caixa.width} ${caixa.height}`);
    svgFundo.setAttribute("width", caixa.width); svgFundo.setAttribute("height", caixa.height);
    while (svgFundo.firstChild) svgFundo.removeChild(svgFundo.firstChild);
    const curva = (p) => {
      let d = `M${p[0][0]},${p[0][1]}`;
      for (let i = 1; i < p.length; i++) {
        const [x0, y0] = p[i - 1], [x1, y1] = p[i];
        const vertical = Math.abs(y1 - y0) > Math.abs(x1 - x0) * 0.6;
        if (vertical) d += ` C${x0},${y0 + (y1 - y0) * 0.55} ${x1},${y1 - (y1 - y0) * 0.55} ${x1},${y1}`;
        else d += ` C${x0 + (x1 - x0) * 0.5},${y0} ${x0 + (x1 - x0) * 0.5},${y1} ${x1},${y1}`;
      }
      return d;
    };
    const base = document.createElementNS(NS, "path");
    base.setAttribute("d", curva(pts)); base.setAttribute("class", "trilha-base");
    svgFundo.append(base);
    const feito = pts.slice(0, ultimoLiberado + 1);
    if (feito.length > 1) { const p2 = document.createElementNS(NS, "path"); p2.setAttribute("d", curva(feito)); p2.setAttribute("class", "trilha-feita"); svgFundo.append(p2); }
  }
  const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => desenharCaminho()) : null;
  setTimeout(() => { desenharCaminho(); if (ro) ro.observe(trilha); }, 0);
  window.addEventListener("resize", desenharCaminho);
  raiz.__destruir = () => { aviso.__destruir(); window.removeEventListener("resize", desenharCaminho); if (ro) ro.disconnect(); };

  /* rola até o mundo atual no celular */
  setTimeout(() => { const el = trilha.querySelector(".no.atual"); if (el && passo.mundo.id > 2 && innerWidth < 900) el.scrollIntoView({ block: "center", behavior: "auto" }); }, 60);
  return raiz;
}
