import { tr } from "../i18n/index.js";
import { h, limpar } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { botao, barra, atualizarBarra, estrelas, estadoVazio } from "../ui/components.js";
import { renderCard } from "../ui/cards.js";
import { perguntaView } from "../ui/quizView.js";
import { criarQuiz } from "../engine/quiz.js";
import { carregarMundo, licaoMeta, licaoLiberada, mundoPorId, MUNDOS } from "../content/index.js";
import { FONTES, fontePorId } from "../content/fontes.js";
import { confete } from "../ui/confetti.js";
import { som } from "../ui/sons.js";
import { abrirTermo } from "../ui/termo.js";
import { abrirModal } from "../ui/modal.js";
import { cenario } from "../art/scenery.js";

export default async function licao({ store, ir, params }) {
  const meta = licaoMeta(params.id);
  if (!meta) return estadoVazio(tr("Lição não encontrada"), tr("Esse caminho não existe."), h("a", { class: "btn", href: "#/mapa" }, tr("Voltar ao mapa")));
  const { mundo, licao: lm } = meta;
  const s0 = store.estado;
  if (!licaoLiberada(s0, mundo, lm.id)) {
    return estadoVazio(tr("Lição bloqueada"), tr("Conclua a lição anterior para abrir esta."), h("a", { class: "btn", href: `#/mundo/${mundo.id}` }, tr("Voltar ao mundo")));
  }
  let conteudo;
  try { conteudo = await carregarMundo(mundo.id); } catch { conteudo = null; }
  const L = conteudo && conteudo.licoes.find((x) => x.id === lm.id);
  if (!L) return estadoVazio(tr("Lição em construção"), tr("O conteúdo desta lição ainda não está disponível."), h("a", { class: "btn", href: `#/mundo/${mundo.id}` }, tr("Voltar ao mundo")));

  const cards = L.cards;
  const perguntas = (L.quiz || []).map((q) => ({ ...q, licaoRef: q.licaoRef || L.id }));
  const totalPassos = cards.length + perguntas.length;
  const jaFeita = !!(s0.licoes[L.id] && s0.licoes[L.id].concluida);
  let indice = jaFeita ? 0 : Math.min(s0.ultimo.licao === L.id ? s0.ultimo.card : 0, cards.length - 1);
  let fase = "cards";
  let quiz = null;
  let viewAtual = null;
  let xpLeitura = 0;

  const raiz = h("div", { class: "licao" });
  const progresso = barra(0, { cor: "mar", rotulo: tr("Progresso da lição") });
  const contador = h("span", { class: "licao-contador pequeno" }, "");
  const sair = h("button", { class: "btn card btn-icone", type: "button", "aria-label": tr("Sair da lição (o ponto fica salvo)"), onclick: () => ir(`/mundo/${mundo.id}`) }, icone("x", 22));
  const topo = h("header", { class: "licao-topo" }, sair, h("div", { class: "licao-prog" }, h("div", { class: "licao-titulo" }, L.titulo), progresso), contador);
  const palco = h("div", { class: "licao-palco", "aria-live": "off" });
  const rodape = h("footer", { class: "licao-rodape" });
  raiz.append(topo, palco, rodape);

  function limparView() { if (viewAtual && viewAtual.__destruir) viewAtual.__destruir(); viewAtual = null; }

  /* ---------- cards ---------- */
  function mostrarCard() {
    limparView();
    const card = cards[indice];
    xpLeitura += store.verCard(L.id, indice) || 0;
    atualizarBarra(progresso, (indice + 1) / (totalPassos + 1));
    contador.textContent = `${indice + 1}/${cards.length}`;
    const el = renderCard(card, { onTermo: abrirTermo });
    el.classList.add("entra");
    limpar(palco).append(el);
    palco.scrollTop = 0; window.scrollTo(0, 0);
    limpar(rodape).append(
      botao(tr("Voltar"), { classe: "card", disabled: indice === 0, onclick: anterior }),
      h("span", { class: "espaco" }),
      botao(indice === cards.length - 1 ? tr("Ir para o quiz") : tr("Continuar"), { classe: "oliva grande", icon: "seta", onclick: proximo }));
  }
  function proximo() {
    if (indice < cards.length - 1) { indice++; mostrarCard(); } else iniciarQuiz();
  }
  function anterior() { if (indice > 0) { indice--; mostrarCard(); } }

  /* ---------- quiz ---------- */
  function iniciarQuiz() {
    fase = "quiz";
    quiz = criarQuiz(perguntas);
    if (!perguntas.length) return concluir();
    mostrarPergunta(true);
  }
  function mostrarPergunta(primeira = false) {
    limparView();
    if (quiz.terminou) return concluir();
    const v = quiz.atual();
    const respondidas = quiz.indice;
    atualizarBarra(progresso, (cards.length + Math.min(respondidas, perguntas.length)) / (totalPassos + 1));
    contador.textContent = quiz.emRevisao ? tr("Revisão") : tr("Quiz {n}/{t}", { n: Math.min(respondidas + 1, perguntas.length), t: perguntas.length });
    const view = perguntaView(v, {
      selo: quiz.emRevisao ? tr("Revisão: tente de novo") : null,
      responder: (r) => {
        const res = quiz.responder(r);
        if (res && !res.revisao) store.registrarResposta(res.correto);
        return res;
      },
      aoResponder: (res) => { res.correto ? som.acerto() : som.erro(); },
      aoContinuar: () => { quiz.proxima(); mostrarPergunta(); },
      rotuloContinuar: quiz.restantes <= 1 ? tr("Ver resultado") : tr("Continuar"),
      onTermo: abrirTermo,
    });
    view.classList.add("entra");
    viewAtual = view;
    limpar(palco).append(view);
    window.scrollTo(0, 0);
    limpar(rodape).append(h("span", { class: "pequeno muted" }, primeira ? tr("Responda e leia a explicação: ela vale tanto quanto a resposta.") : tr("Errou? A pergunta volta no fim da rodada.")));
  }

  /* ---------- resultado ---------- */
  function concluir() {
    limparView();
    fase = "resultado";
    const r = quiz ? quiz.resultado() : { total: 0, acertos: 0, acuracia: 1, estrelas: 3, perfeito: true, errosIds: [] };
    const antes = store.estado.licoes[L.id] && store.estado.licoes[L.id].concluida;
    const rec = store.concluirLicao(L.id, { acertos: r.acertos, total: r.total, totalCards: cards.length });
    atualizarBarra(progresso, 1);
    contador.textContent = tr("Concluída");
    const eqConf = store.estado.jogador.avatar.equipados.confete;
    if (r.estrelas >= 2) confete({ estilo: eqConf ? eqConf.replace("confete-", "") : "padrao", reduzir: store.estado.config.reduzirAnimacoes });
    som.nivel();

    const idx = mundo.licoes.findIndex((x) => x.id === L.id);
    const prox = mundo.licoes[idx + 1];
    const acoes = [];
    if (prox) acoes.push(botao(tr("Próxima: {titulo}", { titulo: prox.titulo }), { classe: "oliva grande bloco", icon: "seta", onclick: () => ir(`/licao/${prox.id}`) }));
    else acoes.push(botao(tr("Ir ao chefe do mundo"), { classe: "tomate grande bloco", icon: "espada", onclick: () => ir(`/mundo/${mundo.id}`) }));
    acoes.push(botao(tr("Voltar ao mundo"), { classe: "card bloco", onclick: () => ir(`/mundo/${mundo.id}`) }));
    if (r.total) acoes.push(botao(tr("Refazer o quiz"), { classe: "fantasma bloco", onclick: () => { fase = "quiz"; quiz = criarQuiz(perguntas); mostrarPergunta(true); } }));

    const fontes = (L.fontes || []).map(fontePorId).filter(Boolean);
    limpar(palco).append(h("section", { class: "resultado card entra" },
      h("div", { class: "resultado-cena", "aria-hidden": "true" }, cenario(mundo.cenario)),
      h("h1", null, r.perfeito ? tr("Perfeito!") : r.estrelas >= 2 ? tr("Muito bem!") : tr("Lição concluída!")),
      h("div", { class: "resultado-estrelas" }, estrelas(r.estrelas, 3, 44)),
      r.total ? h("p", { class: "resultado-acertos" }, tr("{a} de {t} certas de primeira ({p}%)", { a: r.acertos, t: r.total, p: Math.round(r.acuracia * 100) })) : null,
      h("div", { class: "resultado-ganhos" },
        rec.xp ? h("span", { class: "badge sol grande" }, `+${rec.xp} XP`) : null,
        xpLeitura ? h("span", { class: "badge grande" }, `+${xpLeitura} XP de leitura`) : null,
        rec.moedas ? h("span", { class: "badge grande" }, icone("moeda", 16), `+${rec.moedas} moedas`) : null),
      rec.primeira ? null : h("p", { class: "pequeno muted" }, tr("Você já tinha concluído esta lição, então só os cards novos renderam XP. Sua melhor nota fica registrada.")),
      fontes.length ? h("details", { class: "fontes-licao" }, h("summary", null, tr("Fontes desta lição ({n})", { n: fontes.length })), h("ul", null, fontes.map((f) => h("li", null, h("a", { href: f.url, target: "_blank", rel: "noopener noreferrer" }, f.titulo), h("span", { class: "pequeno muted" }, tr(" · conferido em {data}", { data: f.verificadoEm })))))) : null,
      h("div", { class: "pilha" }, acoes)));
    limpar(rodape);
    window.scrollTo(0, 0);
  }

  /* ---------- gestos e teclado ---------- */
  let x0 = null;
  palco.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  palco.addEventListener("touchend", (e) => {
    if (x0 === null || fase !== "cards") return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 70) { if (dx < 0) proximo(); else anterior(); }
  }, { passive: true });
  function tecla(e) {
    if (fase !== "cards" || e.target.closest("input, textarea, select") || document.querySelector(".modal-fundo")) return;
    if (e.key === "ArrowRight") proximo(); else if (e.key === "ArrowLeft") anterior();
  }
  document.addEventListener("keydown", tecla);
  raiz.__destruir = () => { document.removeEventListener("keydown", tecla); limparView(); };

  mostrarCard();
  return raiz;
}
