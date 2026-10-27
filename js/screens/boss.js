import { tr } from "../i18n/index.js";
import { h, limpar } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { botao, estadoVazio, barra, atualizarBarra } from "../ui/components.js";
import { perguntaView } from "../ui/quizView.js";
import { criarBatalha } from "../engine/boss.js";
import { carregarMundo, chefePorId, chefeLiberado, mundoLiberado, MUNDOS, licaoMeta } from "../content/index.js";
import { personagem } from "../art/characters.js";
import { cenario } from "../art/scenery.js";
import { confete } from "../ui/confetti.js";
import { som } from "../ui/sons.js";
import { abrirTermo } from "../ui/termo.js";

function coracoes(vidas, max) {
  const el = h("div", { class: "coracoes", role: "img", "aria-label": tr("{v} de {m} corações", { v: vidas, m: max }) });
  for (let i = 0; i < max; i++) el.append(h("span", { class: "coracao " + (i < vidas ? "cheio" : "vazio") }, icone("coracao", 28, { preencher: i < vidas ? "currentColor" : "none", traco: 2.6 })));
  return el;
}

export default async function chefe({ store, ir, params }) {
  const ref = chefePorId(params.id);
  if (!ref) return estadoVazio(tr("Chefe não encontrado"), tr("Esse chefe não existe."), h("a", { class: "btn", href: "#/mapa" }, tr("Voltar ao mapa")));
  const { mundo, chefe: cm } = ref;
  const s0 = store.estado;
  if (!chefeLiberado(s0, mundo)) {
    return estadoVazio(tr("A porta do chefe está fechada"), tr("Conclua todas as lições do mundo para enfrentar este chefe."), h("a", { class: "btn", href: `#/mundo/${mundo.id}` }, tr("Voltar ao mundo")));
  }
  let conteudo;
  try { conteudo = await carregarMundo(mundo.id); } catch { conteudo = null; }
  const C = conteudo && conteudo.chefe;
  if (!C || !(C.perguntas || C.fases)) return estadoVazio(tr("Chefe em construção"), tr("As perguntas deste chefe ainda não estão disponíveis."), h("a", { class: "btn", href: `#/mundo/${mundo.id}` }, tr("Voltar ao mundo")));

  const final = !!cm.final;
  const raiz = h("div", { class: "arena" });
  let batalha = null;
  let viewAtual = null;
  function limparView() { if (viewAtual && viewAtual.__destruir) viewAtual.__destruir(); viewAtual = null; }
  raiz.__destruir = limparView;

  /* ------------ introdução ------------ */
  function intro() {
    limparView();
    const reg = store.estado.chefes[cm.id];
    const nPerg = C.fases ? C.fases.reduce((a, f) => a + f.perguntas.length, 0) : C.perguntas.length;
    limpar(raiz).append(h("section", { class: "arena-intro card" },
      h("div", { class: "arena-cena", "aria-hidden": "true" }, cenario(mundo.cenario)),
      h("div", { class: "arena-intro-boss", "aria-hidden": "true" }, personagem(cm.id)),
      h("h1", null, cm.nome),
      C.fala ? h("p", { class: "arena-fala" }, `“${C.fala}”`) : null,
      h("ul", { class: "arena-regras" },
        h("li", null, icone("coracao", 20, { preencher: "currentColor" }), final ? tr(" 5 corações (você recupera 1 a cada fase)") : tr(" 3 corações: cada erro custa um")),
        h("li", null, icone("espada", 20), " " + (C.fases ? tr("{n} perguntas em {f} fases: cada acerto causa dano", { n: nPerg, f: C.fases.length }) : tr("{n} perguntas: cada acerto causa dano", { n: nPerg }))),
        h("li", null, icone("estrela", 20), tr(" 3 acertos seguidos = golpe crítico (dano em dobro)"))),
      reg && reg.tentativas ? h("p", { class: "pequeno muted" }, tr("Tentativas até agora: {n}", { n: reg.tentativas })) : null,
      h("div", { class: "pilha" },
        botao(final ? tr("Enfrentar o Chefão!") : tr("Lutar!"), { classe: "tomate grande bloco", icon: "espada", onclick: iniciar }),
        botao(tr("Voltar ao mundo"), { classe: "card bloco", onclick: () => ir(`/mundo/${mundo.id}`) }))));
  }

  /* ------------ batalha ------------ */
  let ui = {};
  function iniciar() {
    store.iniciarChefe(cm.id);
    batalha = criarBatalha(C.fases ? { fases: C.fases.map((f) => ({ nome: f.nome, perguntas: f.perguntas.map((q) => ({ ...q, licaoRef: q.licaoRef || "" })) })), hp: C.hp || 100, vidas: C.vidas || 5, curaPorFase: 1 }
      : { perguntas: C.perguntas, hp: C.hp || 100, vidas: C.vidas || 3 });
    const hpBarra = barra(1, { cor: "tomate", rotulo: tr("Vida do chefe") });
    const hpTxt = h("span", { class: "hp-txt" }, "");
    const bossArte = h("div", { class: "boss-arte", "aria-hidden": "true" }, personagem(cm.id));
    const flutuadores = h("div", { class: "flutuadores", "aria-hidden": "true" });
    const combo = h("div", { class: "combo", "aria-live": "polite" });
    const vidasEl = h("div", { class: "vidas" });
    const faseEl = h("div", { class: "fase-tag" });
    const palco = h("div", { class: "arena-palco" });
    ui = { hpBarra, hpTxt, bossArte, flutuadores, combo, vidasEl, faseEl, palco };
    const sair = h("button", { class: "btn card btn-icone", type: "button", "aria-label": tr("Fugir da batalha"), onclick: () => ir(`/mundo/${mundo.id}`) }, icone("x", 22));
    limpar(raiz).append(
      h("header", { class: "arena-topo" }, sair, h("div", { class: "arena-nome" }, h("strong", null, cm.nome), faseEl), vidasEl),
      h("div", { class: "arena-boss" }, h("div", { class: "arena-cena", "aria-hidden": "true" }, cenario(mundo.cenario)), bossArte, flutuadores),
      h("div", { class: "hp-linha" }, h("span", { class: "hp-rotulo" }, icone("coracao", 18, { preencher: "currentColor" }), " " + tr("Chefe")), hpBarra, hpTxt),
      combo, palco);
    atualizarPainel();
    proximaPergunta();
  }
  function atualizarPainel() {
    const fr = batalha.hp / batalha.hpMax;
    atualizarBarra(ui.hpBarra, fr);
    ui.hpTxt.textContent = `${batalha.hp}/${batalha.hpMax}`;
    limpar(ui.vidasEl).append(coracoes(batalha.vidas, batalha.vidasMax));
    ui.faseEl.textContent = batalha.totalFases > 1 ? tr("Fase {f}/{t}: {nome}", { f: batalha.fase + 1, t: batalha.totalFases, nome: batalha.nomeFase }) : tr("Pergunta {n}/{t}", { n: batalha.numeroPergunta, t: batalha.totalNaFase });
    ui.combo.textContent = batalha.combo > 0 ? (batalha.combo === 2 ? tr("Combo {n}/3 — o próximo acerto é crítico!", { n: batalha.combo }) : tr("Combo {n}/3", { n: batalha.combo })) : "";
    ui.combo.classList.toggle("quente", batalha.combo === 2);
  }
  function flutuar(texto, classe) {
    const f = h("span", { class: "flutuador " + classe }, texto);
    ui.flutuadores.append(f);
    setTimeout(() => f.remove(), 1400);
  }
  function animar(classe) {
    ui.bossArte.classList.remove("golpe", "critico", "riso");
    void ui.bossArte.offsetWidth;
    ui.bossArte.classList.add(classe);
  }
  function proximaPergunta() {
    limparView();
    const v = batalha.atual();
    if (!v) return;
    atualizarPainel();
    const view = perguntaView(v, {
      responder: (r) => batalha.responder(r),
      aoResponder: (res) => {
        store.registrarResposta(res.correto);
        if (res.correto) {
          animar(res.critico ? "critico" : "golpe");
          flutuar(res.critico ? tr("CRÍTICO! -{n}", { n: res.danoCausado }) : `-${res.danoCausado}`, res.critico ? "critico" : "dano");
          som.golpe(); som.acerto();
        } else {
          animar("riso"); flutuar(tr("-1 coração"), "perda"); som.erro();
        }
        atualizarPainel();
      },
      aoContinuar: avancar,
      rotuloContinuar: tr("Continuar"),
      onTermo: abrirTermo,
    });
    view.classList.add("entra");
    viewAtual = view;
    limpar(ui.palco).append(view);
    const topo = raiz.querySelector(".arena-topo"); if (topo) topo.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  function avancar() {
    const r = batalha.proxima();
    if (!r) return;
    if (r.evento === "pergunta") return proximaPergunta();
    if (r.evento === "fase") return faseNova();
    if (r.evento === "vitoria") return vitoria();
    return derrota();
  }
  function faseNova() {
    limparView();
    atualizarPainel();
    limpar(ui.palco).append(h("section", { class: "card sol entra centro pilha" },
      h("h2", null, tr("Fase {f}: {nome}", { f: batalha.fase + 1, nome: batalha.nomeFase })),
      h("p", null, tr("O Chefão se transforma! Barra de vida cheia de novo, mas você recuperou um coração.")),
      botao(tr("Seguir em frente"), { classe: "tomate grande", icon: "espada", onclick: proximaPergunta })));
  }

  /* ------------ fim ------------ */
  function vitoria() {
    limparView();
    const rec = store.finalizarChefe(cm.id, { venceu: true, final, acertos: batalha.acertos });
    const eqConf = store.estado.jogador.avatar.equipados.confete;
    confete({ estilo: eqConf ? eqConf.replace("confete-", "") : "padrao", quantidade: 220, reduzir: store.estado.config.reduzirAnimacoes });
    som.nivel();
    const prox = MUNDOS[mundo.id];
    limpar(raiz).append(h("section", { class: "card oliva centro pilha vitoria entra" },
      h("div", { class: "arena-intro-boss derrotado", "aria-hidden": "true" }, personagem(cm.id)),
      h("h1", null, final ? tr("VOCÊ VENCEU O CHEFÃO!") : tr("{nome} foi derrotado!", { nome: cm.nome })),
      C.derrota ? h("p", { class: "arena-fala" }, `“${C.derrota}”`) : null,
      h("p", null, tr("{a} acertos, melhor combo {c}, {v} coração(ões) sobrando.", { a: batalha.acertos, c: batalha.melhorCombo, v: batalha.vidas })),
      h("div", { class: "resultado-ganhos" }, rec.xp ? h("span", { class: "badge sol grande" }, `+${rec.xp} XP`) : null, rec.moedas ? h("span", { class: "badge grande" }, icone("moeda", 16), tr("+{n} moedas", { n: rec.moedas })) : null),
      !rec.primeira ? h("p", { class: "pequeno muted" }, tr("Vitória de treino: o XP do chefe só vale na primeira vez.")) : null,
      h("div", { class: "pilha" },
        final ? botao(tr("Ver meu certificado"), { classe: "sol grande bloco", icon: "trofeu", onclick: () => ir("/certificado") })
          : (prox ? botao(tr("Abrir o mundo {n}: {titulo}", { n: prox.id, titulo: prox.titulo }), { classe: "oliva grande bloco", icon: "seta", onclick: () => ir(`/mundo/${prox.id}`) }) : null),
        botao(tr("Voltar ao mapa"), { classe: "card bloco", onclick: () => ir("/mapa") }))));
    window.scrollTo(0, 0);
  }
  function derrota() {
    limparView();
    store.finalizarChefe(cm.id, { venceu: false, final });
    const revisar = batalha.licoesParaRevisar().map((id) => licaoMeta(id)).filter(Boolean);
    limpar(raiz).append(h("section", { class: "card tomate pilha derrota entra" },
      h("div", { class: "arena-intro-boss", "aria-hidden": "true" }, personagem(cm.id)),
      h("h1", null, tr("O chefe recuou para a toca")),
      h("p", null, tr("Você caiu desta vez, mas nada se perde: tudo o que você aprendeu continua valendo. Revise estes pontos e volte mais forte.")),
      revisar.length ? h("ul", { class: "revisar" }, revisar.map((m) => h("li", null, h("a", { class: "btn card pequeno bloco", href: `#/licao/${m.licao.id}` }, icone("glossario", 18), `Revisar: ${m.licao.titulo}`)))) : h("p", { class: "muted" }, tr("Releia as explicações das perguntas e tente de novo.")),
      h("div", { class: "pilha" },
        botao(tr("Tentar de novo"), { classe: "tomate grande bloco", icon: "espada", onclick: intro }),
        botao(tr("Voltar ao mundo"), { classe: "card bloco", onclick: () => ir(`/mundo/${mundo.id}`) }))));
    window.scrollTo(0, 0);
  }

  intro();
  return raiz;
}
