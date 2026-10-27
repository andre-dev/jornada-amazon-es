// Missões da Vida Real: tarefas concretas, com notas, data e XP na primeira conclusão.
import { h, limpar } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { tituloTela, barra, atualizarBarra, badge } from "../ui/components.js";
import { MISSOES } from "../content/checklist.js";
import { MUNDOS } from "../content/index.js";
import { fontePorId } from "../content/fontes.js";
import { XP } from "../engine/rewards.js";

function dataBR(iso) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function tela({ store }) {
  let filtro = "todas";
  const raiz = h("div", { class: "pilha" });
  const progresso = barra(0, { cor: "oliva", rotulo: "Missões concluídas" });
  const resumo = h("p", { class: "muted", style: { margin: 0 } });
  const lista = h("div", { class: "pilha" });

  const feitas = () => MISSOES.filter((m) => store.estado.checklist[m.id]?.feito).length;
  function atualizarResumo() {
    resumo.textContent = `${feitas()} de ${MISSOES.length} missões concluídas. Cada missão paga ${XP.missao} XP na primeira vez.`;
    atualizarBarra(progresso, feitas() / MISSOES.length);
  }

  function item(m) {
    const reg = () => store.estado.checklist[m.id] || { feito: false, nota: "", em: "" };
    const caixa = h("li", { class: "missao" });
    const botao = h("button", { class: "missao-check", type: "button" });
    const titulo = h("strong", null, m.titulo);
    const data = h("span", { class: "pequeno muted" });
    const detalhes = h("details", { class: "missao-detalhes" });
    function marcar() {
      const r = reg();
      botao.setAttribute("aria-pressed", String(r.feito));
      botao.setAttribute("aria-label", (r.feito ? "Desmarcar: " : "Marcar como feita: ") + m.titulo);
      limpar(botao).append(r.feito ? icone("check", 24, { traco: 3.5 }) : "");
      caixa.classList.toggle("feita", r.feito);
      data.textContent = r.feito && r.em ? "Feita em " + dataBR(r.em) : "";
    }
    botao.addEventListener("click", () => { store.alternarMissao(m.id, !reg().feito); marcar(); atualizarResumo(); if (filtro !== "todas") setTimeout(desenhar, 350); });
    const fonte = m.fonte ? fontePorId(m.fonte) : null;
    const nota = h("textarea", { class: "entrada", rows: "3", maxlength: "2000", placeholder: "Suas anotações: nomes, telefones, datas, valores…", "aria-label": "Anotações da missão " + m.titulo });
    nota.value = reg().nota || "";
    let t;
    nota.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => store.salvarNota(m.id, nota.value), 500); });
    nota.addEventListener("blur", () => { clearTimeout(t); if (nota.value !== (reg().nota || "")) store.salvarNota(m.id, nota.value); });
    detalhes.append(
      h("summary", null, "Ver detalhes"),
      h("div", { class: "pilha missao-corpo" },
        h("p", null, m.descricao),
        h("p", null, h("strong", null, "Por que importa: "), m.porque),
        h("p", null, icone("pessoas", 18), " ", h("strong", null, "Quem pode fazer por você: "), m.quem),
        fonte ? h("p", { class: "pequeno" }, icone("link", 16), " ", h("a", { href: fonte.url, target: "_blank", rel: "noopener noreferrer" }, fonte.titulo)) : null,
        h("div", { class: "campo" }, h("span", { class: "rotulo" }, "Anotações"), nota)));
    caixa.append(botao, h("div", { class: "missao-info" }, titulo, data, detalhes));
    marcar();
    return caixa;
  }

  function desenhar() {
    limpar(lista);
    let total = 0;
    for (const w of MUNDOS) {
      const ms = MISSOES.filter((m) => m.mundo === w.id).filter((m) => {
        const f = !!store.estado.checklist[m.id]?.feito;
        return filtro === "todas" || (filtro === "feitas" ? f : !f);
      });
      if (!ms.length) continue;
      total += ms.length;
      const feitasMundo = MISSOES.filter((m) => m.mundo === w.id && store.estado.checklist[m.id]?.feito).length;
      const totalMundo = MISSOES.filter((m) => m.mundo === w.id).length;
      lista.append(h("section", { class: "card missoes-mundo" },
        h("div", { class: "linha" }, h("h2", { style: { margin: 0, flex: 1 } }, `${w.emoji} ${w.titulo}`), badge(`${feitasMundo}/${totalMundo}`, feitasMundo === totalMundo ? "oliva" : "sol")),
        h("ul", { class: "missoes" }, ms.map(item))));
    }
    if (!total) lista.append(h("div", { class: "card plano centro" }, h("p", { style: { margin: 0 } }, filtro === "feitas" ? "Nenhuma missão feita ainda. Escolha uma e comece!" : "Nada pendente. Você zerou a lista!")));
  }

  const seg = h("div", { class: "segmento", role: "group", "aria-label": "Filtrar missões" });
  const opcoes = [["todas", "Todas"], ["pendentes", "Pendentes"], ["feitas", "Feitas"]];
  const botoes = opcoes.map(([v, t]) => h("button", { type: "button", "aria-pressed": String(v === filtro), onclick: () => { filtro = v; botoes.forEach((b, i) => b.setAttribute("aria-pressed", String(opcoes[i][0] === v))); desenhar(); } }, t));
  seg.append(...botoes);

  raiz.append(
    tituloTela("Missões da vida real", "O que você faz de verdade para montar o negócio."),
    h("div", { class: "card" }, resumo, progresso),
    h("div", { class: "card sol pequeno" }, h("strong", null, "Isto não é aconselhamento jurídico ou fiscal."), " Use as missões como roteiro e confirme os detalhes com a gestoría, o advogado e as páginas oficiais."),
    seg, lista);
  atualizarResumo(); desenhar();
  return raiz;
}
