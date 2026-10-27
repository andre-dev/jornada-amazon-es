// Interface de uma pergunta (múltipla, V/F, lacuna, produto, ordenar). Usada por lições e chefes.
import { tr } from "../i18n/index.js";
import { h, md, inlineMd, limpar } from "./dom.js";
import { icone } from "./icons.js";

const CERTO = [tr("Isso aí!"), tr("Mandou bem!"), tr("Exato!"), tr("Na mosca!"), tr("Certo!")];
const ERRADO = [tr("Quase!"), tr("Não foi dessa vez."), tr("Boa tentativa."), tr("Ainda não.")];
const LETRAS = ["A", "B", "C", "D", "E", "F"];
let rot = 0;

/**
 * visao: { q, ordem }. opts:
 *  responder(resposta) -> resultado { correto, explicacao, textoCorreto, posicaoCorreta, ... }  (síncrono)
 *  aoResponder(resultado)  — chamado logo após responder (animações, sons)
 *  aoContinuar()           — botão "Continuar"
 *  rotuloContinuar         — texto do botão
 *  onTermo(chave)
 *  selo                    — texto opcional (ex.: "Revisão")
 */
export function perguntaView(visao, opts) {
  const { q, ordem } = visao;
  const raiz = h("section", { class: "pergunta", "aria-label": tr("Pergunta") });
  const feedback = h("div", { class: "feedback", "aria-live": "polite", role: "status" });
  const cabeca = h("div", { class: "pergunta-cabeca" },
    opts.selo ? h("span", { class: "badge tomate" }, opts.selo) : null,
    h("h2", { class: "enunciado" }, enunciadoNodes(q, opts)));
  raiz.append(cabeca);
  let respondida = false;
  let botoes = [];

  function mostrarFeedback(res, escolhidas) {
    const ok = res.correto;
    limpar(feedback);
    feedback.className = "feedback " + (ok ? "certo" : "errado");
    const titulo = ok ? CERTO[rot++ % CERTO.length] : ERRADO[rot++ % ERRADO.length];
    const partes = [
      h("div", { class: "feedback-titulo" }, icone(ok ? "check" : "x", 24, { traco: 3.2 }), h("strong", null, titulo)),
      !ok ? h("p", { class: "feedback-correta" }, h("strong", null, tr("Resposta certa: ")), res.textoCorreto) : null,
      res.explicacao ? md(res.explicacao, { onTermo: opts.onTermo }) : null,
      res.extra || null,
      h("button", { class: "btn grande bloco " + (ok ? "oliva" : "sol"), type: "button", onclick: () => opts.aoContinuar && opts.aoContinuar() }, opts.rotuloContinuar || tr("Continuar"), icone("seta", 20))];
    feedback.append(...partes.filter(Boolean));
    const btn = feedback.querySelector("button.btn");
    setTimeout(() => { try { btn.focus({ preventScroll: false }); btn.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch { /* ignora */ } }, 60);
  }

  function finalizar(resposta, marcar) {
    if (respondida) return;
    respondida = true;
    const res = opts.responder(resposta);
    if (!res) { respondida = false; return; }
    botoes.forEach((b) => { b.disabled = true; });
    marcar(res);
    if (opts.aoResponder) opts.aoResponder(res);
    mostrarFeedback(res);
  }

  if (q.tipo === "ordenar") {
    let seq = ordem.map((_, i) => i); // posições exibidas, na ordem atual do jogador
    const lista = h("ol", { class: "ordenar", "aria-label": tr("Itens para ordenar") });
    const confirmar = h("button", { class: "btn oliva bloco", type: "button" }, tr("Confirmar ordem"));
    let arrastando = null;
    const rotulo = (pos) => q.opcoes[ordem[pos]];
    function desenhar(res) {
      limpar(lista);
      seq.forEach((pos, i) => {
        const certo = res ? res.ordemCerta[i] === ordem[pos] : null;
        const li = h("li", { class: "ord-item" + (res ? (certo ? " certo" : " errado") : ""), draggable: res ? null : "true", dataset: { i } },
          h("span", { class: "ord-num" }, String(i + 1)),
          h("span", { class: "ord-txt" }, inlineMd(rotulo(pos), { onTermo: opts.onTermo })),
          res ? null : h("span", { class: "ord-btns" },
            h("button", { class: "btn card btn-icone pequeno", type: "button", "aria-label": `Subir "${rotulo(pos)}"`, disabled: i === 0, onclick: () => mover(i, -1) }, icone("cima", 20)),
            h("button", { class: "btn card btn-icone pequeno", type: "button", "aria-label": `Descer "${rotulo(pos)}"`, disabled: i === seq.length - 1, onclick: () => mover(i, 1) }, icone("baixo", 20))));
        if (!res) {
          li.addEventListener("dragstart", (e) => { arrastando = i; li.classList.add("arrastando"); try { e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", String(i)); } catch { /* ignora */ } });
          li.addEventListener("dragend", () => { arrastando = null; li.classList.remove("arrastando"); });
          li.addEventListener("dragover", (e) => { e.preventDefault(); });
          li.addEventListener("drop", (e) => { e.preventDefault(); if (arrastando === null || arrastando === i) return; const [x] = seq.splice(arrastando, 1); seq.splice(i, 0, x); arrastando = null; desenhar(); });
        }
        lista.append(li);
      });
      botoes = [...lista.querySelectorAll("button"), confirmar];
    }
    function mover(i, d) {
      const j = i + d; if (j < 0 || j >= seq.length) return;
      [seq[i], seq[j]] = [seq[j], seq[i]];
      desenhar();
      const alvo = lista.children[j] && lista.children[j].querySelectorAll("button")[d < 0 ? 0 : 1];
      if (alvo && !alvo.disabled) alvo.focus(); else { const o = lista.children[j] && lista.children[j].querySelector("button:not([disabled])"); if (o) o.focus(); }
    }
    confirmar.addEventListener("click", () => finalizar(seq.slice(), (res) => { res.ordemCerta = q.correta.slice(); confirmar.hidden = true; desenhar(res); }));
    desenhar();
    raiz.append(h("p", { class: "pequeno muted" }, tr("Arraste os itens (no computador) ou use as setas para colocar na ordem certa.")), lista, confirmar);
  } else if (q.tipo === "vf") {
    const bV = h("button", { class: "btn grande oliva vf", type: "button", onclick: () => finalizar(0, (res) => marcarUnico(0, res)) }, icone("check", 24, { traco: 3 }), tr("Verdadeiro"));
    const bF = h("button", { class: "btn grande tomate vf", type: "button", onclick: () => finalizar(1, (res) => marcarUnico(1, res)) }, icone("x", 24, { traco: 3 }), tr("Falso"));
    botoes = [bV, bF];
    function marcarUnico(pos, res) { botoes.forEach((b, i) => { b.classList.toggle("escolhida", i === pos); if (i === res.posicaoCorreta) b.classList.add("era-certa"); else if (i === pos && !res.correto) b.classList.add("errada"); }); }
    raiz.append(h("div", { class: "vf-par" }, bV, bF));
  } else {
    const lista = h("div", { class: q.tipo === "produto" ? "produtos" : "opcoes-quiz", role: "group", "aria-label": tr("Alternativas") });
    function marcar(pos, res) { botoes.forEach((b, i) => { if (i === res.posicaoCorreta) b.classList.add("era-certa"); else if (i === pos && !res.correto) b.classList.add("errada"); if (i === pos) b.classList.add("escolhida"); }); }
    botoes = ordem.map((orig, pos) => {
      const conteudo = q.tipo === "produto" ? cartaProduto(q.produtos[orig], pos, opts) : [h("span", { class: "letra" }, LETRAS[pos]), h("span", { class: "alt-txt" }, inlineMd(q.opcoes[orig], { onTermo: null }))];
      return h("button", { class: q.tipo === "produto" ? "carta-produto" : "alternativa", type: "button", onclick: () => finalizar(pos, (res) => marcar(pos, res)) }, conteudo);
    });
    botoes.forEach((b) => lista.append(b));
    raiz.append(lista);
  }
  raiz.append(feedback);

  /* atalhos 1..n */
  function tecla(e) {
    if (respondida || e.target.closest("input, textarea")) return;
    const n = Number(e.key);
    if (q.tipo === "vf") { if (e.key.toLowerCase() === "v") botoes[0].click(); if (e.key.toLowerCase() === "f") botoes[1].click(); return; }
    if (q.tipo !== "ordenar" && n >= 1 && n <= botoes.length) botoes[n - 1].click();
  }
  document.addEventListener("keydown", tecla);
  raiz.__destruir = () => document.removeEventListener("keydown", tecla);
  return raiz;
}

function enunciadoNodes(q, opts) {
  const texto = String(q.enunciado);
  if (q.tipo === "lacuna" && texto.includes("___")) {
    const partes = texto.split("___");
    const frag = [];
    partes.forEach((p, i) => { frag.push(inlineMd(p, { onTermo: opts.onTermo })); if (i < partes.length - 1) frag.push(h("span", { class: "lacuna", "aria-label": tr("lacuna") }, "      ")); });
    return frag;
  }
  return inlineMd(texto, { onTermo: opts.onTermo });
}

function cartaProduto(p, pos, opts) {
  return [
    h("div", { class: "carta-topo" }, h("span", { class: "letra" }, LETRAS[pos]), h("strong", null, (p.emoji ? p.emoji + " " : "") + p.nome)),
    p.descricao ? h("p", { class: "pequeno", style: { margin: "0 0 6px" } }, p.descricao) : null,
    h("dl", { class: "carta-dados" }, (p.dados || []).map(([k, v]) => [h("dt", null, k), h("dd", null, v)])),
  ];
}
