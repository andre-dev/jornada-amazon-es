// Oficina: 4 calculadoras reais. A lógica fica em js/tools/*.js (funções puras); aqui só tem tela.
import { tr } from "../i18n/index.js";
import { h, s, limpar } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { tituloTela, fmtEUR, fmtPct, fmt, estadoVazio } from "../ui/components.js";
import { FEES } from "../content/fees.js";
import { calcularMargem, taxaFba } from "../tools/feeCalc.js";
import { precoMinimo, precoEquilibrio, compararPlanos, simularLote } from "../tools/priceCalc.js";
import { confirmar } from "../ui/modal.js";
import { toast } from "../ui/toast.js";

const FERRAMENTAS = [
  { id: "margem", nome: tr("Margem FBA x FBM"), desc: tr("Quanto sobra em cada venda, depois de todos os custos.") },
  { id: "preco", nome: tr("Preço mínimo"), desc: tr("Quanto cobrar para chegar à margem que você quer.") },
  { id: "plano", nome: tr("Plano de venda"), desc: tr("Individual ou Profissional: qual custa menos?") },
  { id: "lote", nome: tr("Lote de compra"), desc: tr("Quantas unidades o capital compra e quando o dinheiro volta.") },
];

const num = (v) => { const n = parseFloat(String(v).replace(",", ".")); return Number.isFinite(n) ? n : 0; };
const pct = (v) => Math.max(0, num(v)) / 100;

/* Memória da sessão: os campos continuam preenchidos ao trocar de aba. */
const MEM = {
  margem: { modelo: "fba", precoComIva: 29.9, ivaPct: 21, categoriaId: "casa", c: 30, l: 20, a: 5, pesoG: 300, custoProduto: 5, freteUnidade: 0.6, aduanaPct: 4, freteFbm: 4.5, devolucaoPct: 5, perdaPct: 30, ppc: 1.5, perigoso: false, periodo: "janSet", meses: 1 },
  preco: { margemAlvo: 20, modelo: "fba", ivaPct: 21, categoriaId: "casa", c: 30, l: 20, a: 5, pesoG: 300, custoProduto: 5, freteUnidade: 0.6, aduanaPct: 4, freteFbm: 4.5, devolucaoPct: 5, perdaPct: 30, ppc: 1.5, perigoso: false, periodo: "janSet", meses: 1 },
  plano: { itens: 20 },
  lote: { capital: 3000, custoUnidade: 7, receitaUnidade: 9, vendasSemana: 15, semanasAteVender: 8, semanasPagamento: 2 },
};

/** append que ignora filhos vazios (null/false), em vez de escrever "null" na tela. */
const ap = (el, ...filhos) => el.append(...filhos.flat().filter((x) => x != null && x !== false));

function paraCalculo(m) {
  return {
    precoComIva: num(m.precoComIva), ivaPct: pct(m.ivaPct), custoProduto: num(m.custoProduto), freteUnidade: num(m.freteUnidade),
    aduanaPct: pct(m.aduanaPct), categoriaId: m.categoriaId, dim: [num(m.c), num(m.l), num(m.a)], pesoG: num(m.pesoG),
    modelo: m.modelo, freteFbm: num(m.freteFbm), perigoso: !!m.perigoso, devolucaoPct: pct(m.devolucaoPct), perdaDevolucaoPct: pct(m.perdaPct),
    ppcPorUnidade: num(m.ppc), mesesArmazenados: Math.max(0, num(m.meses)), periodo: m.periodo,
  };
}

/* ---------- peças de formulário ---------- */
let seq = 0;
function campo(rotulo, el, dica) {
  const id = "cp-" + ++seq;
  el.id = id;
  return h("div", { class: "campo" }, h("label", { for: id }, rotulo), el, dica ? h("span", { class: "dica" }, dica) : null);
}
function numero(mem, chave, aoMudar, { passo = "any", min = 0, sufixo } = {}) {
  const el = h("input", { class: "entrada", type: "number", inputmode: "decimal", step: String(passo), min: String(min), value: String(mem[chave]) });
  el.addEventListener("input", () => { mem[chave] = el.value === "" ? 0 : num(el.value); aoMudar(); });
  return el;
}
function selecao(mem, chave, opcoes, aoMudar) {
  const el = h("select", { class: "entrada" }, opcoes.map(([v, t]) => h("option", { value: v, selected: mem[chave] === v }, t)));
  el.addEventListener("change", () => { mem[chave] = el.value; aoMudar(); });
  return el;
}
function segmento(mem, chave, opcoes, aoMudar, rotulo) {
  const g = h("div", { class: "segmento", role: "group", "aria-label": rotulo });
  const btns = opcoes.map(([v, t]) => h("button", { type: "button", "aria-pressed": String(mem[chave] === v), onclick: () => {
    mem[chave] = v; btns.forEach((b, i) => b.setAttribute("aria-pressed", String(opcoes[i][0] === v))); aoMudar();
  } }, t));
  g.append(...btns);
  return g;
}
const CATEGORIAS = FEES.comissoesPorCategoria.map((c) => [c.id, c.categoria]);

/* ---------- gráfico de barra empilhada (HTML/CSS) ---------- */
function barraCustos(r) {
  const total = Math.max(r.receitaLiquida, r.totalCustos, 0.01);
  const segs = [...r.custos.filter((c) => c.valor > 0).map((c) => ({ id: c.id, rotulo: c.rotulo, valor: c.valor }))];
  if (r.lucro > 0) segs.push({ id: "lucro", rotulo: tr("Lucro"), valor: r.lucro });
  const barra = h("div", { class: "pilha-custos", role: "img", "aria-label": tr("Divisão da receita sem IVA entre custos e lucro") },
    segs.map((g) => h("i", { class: "seg seg-" + g.id, style: { width: (g.valor / total) * 100 + "%" }, title: `${g.rotulo}: ${fmtEUR(g.valor)}` })));
  const legenda = h("ul", { class: "legenda-custos" }, segs.map((g) => h("li", null, h("i", { class: "seg seg-" + g.id, "aria-hidden": "true" }), h("span", null, g.rotulo), h("strong", null, fmtEUR(g.valor)))));
  return h("div", null, barra, legenda);
}

/* ---------- 1. margem ---------- */
function telaMargem(ctx, raiz) {
  const m = MEM.margem;
  const { store } = ctx;
  const saida = h("div", { class: "pilha", "aria-live": "polite" });
  const avisos = h("div");
  const camposFbm = h("div", { class: "grade duas" });

  function desenhar() {
    const e = paraCalculo(m);
    const r = calcularMargem(e);
    limpar(saida);
    if (!r.valido) { ap(saida, h("div", { class: "card tomate" }, h("strong", null, tr("Não consegui calcular")), h("p", null, r.erro))); return; }
    const bom = r.lucro > 0;
    ap(saida, 
      h("div", { class: "card " + (bom ? "oliva" : "tomate") + " resultado-calc" },
        h("div", { class: "stat-grande" }, h("div", { class: "r" }, tr("Lucro por unidade")), h("div", { class: "n" }, fmtEUR(r.lucro))),
        h("div", { class: "grade tres", style: { marginTop: "12px" } },
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, fmtPct(r.margemPct)), h("div", { class: "r" }, tr("Margem"))),
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, r.roi == null ? "—" : fmtPct(r.roi, 0)), h("div", { class: "r" }, "ROI")),
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, fmtEUR(r.ivaAPagar)), h("div", { class: "r" }, tr("IVA no preço"))))),
      h("div", { class: "card" }, h("h3", null, tr("Para onde vai o dinheiro")), h("p", { class: "muted pequeno" }, tr("Receita sem IVA: {r} (preço {p} com IVA).", { r: fmtEUR(r.receitaLiquida), p: fmtEUR(r.preco) })), barraCustos(r)),
    );
    if (r.fba) {
      ap(saida, h("div", { class: "card plano" }, h("strong", null, tr("Tamanho FBA: {nome}", { nome: r.fba.nome })), h("p", { class: "muted pequeno", style: { margin: 0 } },
        tr("Tarifa base {b} + 1,5% de combustível", { b: fmtEUR(r.fba.base) }) + (r.fba.baixoPreco ? tr(", com tarifa de preço baixo") : "") + (r.fba.adicionalPerigoso ? tr(" + adicional de perigoso/bateria") : "") + tr(". Peso cobrado: {g} g.", { g: fmt(r.fba.pesoCobradoG) }),
        r.aproximado ? h("span", { class: "selo-aprox" }, tr("aproximado")) : null)));
    }
    if (!bom) ap(saida, h("div", { class: "card tomate" }, h("strong", null, tr("Esse produto perde dinheiro.")), h("p", { style: { margin: 0 } }, tr("Suba o preço, negocie o custo ou escolha outro produto. Use a aba Preço mínimo para achar o preço certo."))));
  }

  const aoMudar = () => { clearTimeout(aoMudar.t); aoMudar.t = setTimeout(desenhar, 120); };
  camposFbm.append(campo(tr("Custo de enviar ao cliente (€)"), numero(m, "freteFbm", aoMudar), tr("O que você paga para entregar cada pedido, sem IVA.")));

  const formulario = h("div", { class: "card pilha" },
    h("h2", null, tr("Seus números")),
    segmento(m, "modelo", [["fba", tr("FBA (Amazon envia)")], ["fbm", tr("FBM (você envia)")]], () => { desenharCampos(); aoMudar(); }, tr("Modelo de envio")),
    h("div", { class: "grade duas" },
      campo(tr("Preço de venda com IVA (€)"), numero(m, "precoComIva", aoMudar)),
      campo(tr("IVA (%)"), numero(m, "ivaPct", aoMudar), tr("21% é o geral. 10% e 4% valem para alguns produtos.")),
      campo(tr("Categoria"), selecao(m, "categoriaId", CATEGORIAS, aoMudar)),
      campo(tr("Custo do produto (€)"), numero(m, "custoProduto", aoMudar), tr("Sem IVA, por unidade.")),
      campo(tr("Frete até o armazém (€)"), numero(m, "freteUnidade", aoMudar), tr("Por unidade.")),
      campo(tr("Direitos aduaneiros (%)"), numero(m, "aduanaPct", aoMudar), tr("Sobre o custo do produto. 0 se comprar dentro da UE.")),
      campo(tr("Devoluções (%)"), numero(m, "devolucaoPct", aoMudar)),
      campo(tr("Devolvidos que não dá para revender (%)"), numero(m, "perdaPct", aoMudar)),
      campo(tr("Anúncio por unidade vendida (€)"), numero(m, "ppc", aoMudar), tr("Custo médio de anúncios por venda."))),
    h("div", { class: "pilha", id: "area-modelo" }));

  function desenharCampos() {
    const area = formulario.querySelector("#area-modelo");
    limpar(area);
    if (m.modelo === "fba") area.append(h("h3", null, tr("Tamanho e armazenamento")), montarCamposFba());
    else area.append(camposFbm);
  }
  function montarCamposFba() {
    const box = h("div", { class: "grade duas" });
    box.append(
      campo(tr("Comprimento (cm)"), numero(m, "c", aoMudar)), campo(tr("Largura (cm)"), numero(m, "l", aoMudar)),
      campo(tr("Altura (cm)"), numero(m, "a", aoMudar)), campo(tr("Peso da unidade (g)"), numero(m, "pesoG", aoMudar)),
      campo(tr("Meses no armazém"), numero(m, "meses", aoMudar, { passo: 0.5 }), tr("Armazenamento é cobrado por m³ e por mês.")),
      campo(tr("Época"), segmento(m, "periodo", [["janSet", tr("Jan a set")], ["outDez", tr("Out a dez")]], aoMudar, tr("Época do ano")), tr("Out a dez é mais caro.")));
    const t = h("input", { type: "checkbox", class: "toggle", checked: m.perigoso });
    t.addEventListener("change", () => { m.perigoso = t.checked; aoMudar(); });
    box.append(h("label", { class: "interruptor", style: { gridColumn: "1 / -1" } }, h("span", null, tr("Perigoso ou com bateria de lítio (+0,10 € por unidade)")), t));
    return box;
  }

  const nome = h("input", { class: "entrada", type: "text", maxlength: "60", placeholder: tr("Nome do cenário, por exemplo: Garrafa térmica 500 ml") });
  const lista = h("div", { class: "pilha" });
  function desenharCenarios() {
    limpar(lista);
    const cs = store.estado.cenarios.filter((c) => c.tipo === "margem");
    if (!cs.length) { lista.append(h("p", { class: "muted" }, tr("Nenhum cenário salvo ainda. Salve um para comparar produtos depois."))); return; }
    for (const c of cs) {
      const e = c.entradas || {};
      const r = calcularMargem(paraCalculo({ ...MEM.margem, ...e }));
      lista.append(h("div", { class: "cenario card plano" },
        h("div", { class: "cenario-info" }, h("strong", null, c.nome), h("span", { class: "pequeno muted" }, r.valido ? tr("Lucro {l} · margem {m}", { l: fmtEUR(r.lucro), m: fmtPct(r.margemPct) }) : tr("Sem resultado"))),
        h("div", { class: "linha" },
          h("button", { class: "btn pequeno mar", type: "button", onclick: () => { Object.assign(m, e); ctx.ir("/oficina/margem", { substituir: true }); } }, tr("Abrir")),
          h("button", { class: "btn pequeno card", type: "button", "aria-label": tr("Excluir cenário {nome}", { nome: c.nome }), onclick: async () => { if (await confirmar({ titulo: tr("Excluir cenário?"), texto: tr("\"{nome}\" será removido.", { nome: c.nome }), ok: tr("Excluir"), perigo: true })) { store.removerCenario(c.id); desenharCenarios(); } } }, tr("Excluir")))));
    }
  }
  const salvar = h("button", { class: "btn sol", type: "button", onclick: () => {
    const id = store.salvarCenario({ nome: nome.value.trim() || tr("Meu cenário"), tipo: "margem", entradas: { ...m } });
    if (!id) { toast(tr("Limite de 30 cenários. Exclua algum para salvar outro."), "erro"); return; }
    store.contarMargem(); toast(tr("Cenário salvo!"), "ok"); nome.value = ""; desenharCenarios();
  } }, icone("disco", 20), tr("Salvar cenário"));

  raiz.append(
    h("div", { class: "grade duas oficina-corpo" }, formulario, h("div", { class: "pilha" }, saida)),
    h("section", { class: "card pilha" }, h("h2", null, tr("Cenários salvos")), h("div", { class: "linha" }, h("div", { style: { flex: "1 1 220px" } }, nome), salvar), lista),
  );
  desenharCampos(); desenhar(); desenharCenarios();
}

/* ---------- 2. preço mínimo ---------- */
function telaPreco(ctx, raiz) {
  const m = MEM.preco;
  const saida = h("div", { class: "pilha", "aria-live": "polite" });
  function desenhar() {
    const e = paraCalculo({ ...m, precoComIva: 10 });
    limpar(saida);
    const eq = precoEquilibrio(e);
    const alvo = precoMinimo(e, pct(m.margemAlvo));
    if (!alvo.valido) { ap(saida, h("div", { class: "card tomate" }, h("strong", null, tr("Sem resultado")), h("p", { style: { margin: 0 } }, alvo.erro))); return; }
    ap(saida, 
      h("div", { class: "card sol" }, h("div", { class: "stat-grande" }, h("div", { class: "r" }, tr("Para {m}% de margem, cobre no mínimo", { m: fmt(num(m.margemAlvo), 0) })), h("div", { class: "n" }, fmtEUR(alvo.preco)), h("div", { class: "r" }, tr("preço com IVA"))),
        h("p", { class: "centro", style: { margin: "10px 0 0" } }, tr("Lucro por unidade: {l}", { l: fmtEUR(alvo.resultado.lucro) }))),
      eq.valido ? h("div", { class: "card plano" }, h("strong", null, tr("Preço de equilíbrio: {p}", { p: fmtEUR(eq.preco) })), h("p", { class: "muted pequeno", style: { margin: 0 } }, tr("Abaixo disso você perde dinheiro em cada venda."))) : null,
      h("div", { class: "card" }, h("h3", null, tr("Como fica nesse preço")), barraCustos(alvo.resultado)),
      alvo.resultado.aproximado ? h("p", { class: "muted pequeno" }, tr("A tarifa deste tamanho é aproximada.")) : null,
    );
  }
  const aoMudar = () => { clearTimeout(aoMudar.t); aoMudar.t = setTimeout(desenhar, 250); };
  const campos = h("div", { class: "pilha" });
  function desenharCampos() {
    limpar(campos).append(
      h("div", { class: "grade duas" },
        campo(tr("Margem desejada (%)"), numero(m, "margemAlvo", aoMudar), tr("Lucro dividido pela receita sem IVA.")),
        campo(tr("Categoria"), selecao(m, "categoriaId", CATEGORIAS, aoMudar)),
        campo(tr("Custo do produto (€)"), numero(m, "custoProduto", aoMudar)),
        campo(tr("Frete até o armazém (€)"), numero(m, "freteUnidade", aoMudar)),
        campo(tr("Direitos aduaneiros (%)"), numero(m, "aduanaPct", aoMudar)),
        campo(tr("IVA (%)"), numero(m, "ivaPct", aoMudar)),
        campo(tr("Devoluções (%)"), numero(m, "devolucaoPct", aoMudar)),
        campo(tr("Devolvidos sem revenda (%)"), numero(m, "perdaPct", aoMudar)),
        campo(tr("Anúncio por unidade (€)"), numero(m, "ppc", aoMudar))),
      segmento(m, "modelo", [["fba", "FBA"], ["fbm", "FBM"]], () => { desenharCampos(); aoMudar(); }, tr("Modelo de envio")),
      m.modelo === "fba"
        ? h("div", { class: "grade duas" }, campo(tr("Comprimento (cm)"), numero(m, "c", aoMudar)), campo(tr("Largura (cm)"), numero(m, "l", aoMudar)), campo(tr("Altura (cm)"), numero(m, "a", aoMudar)), campo(tr("Peso (g)"), numero(m, "pesoG", aoMudar)))
        : campo(tr("Custo de enviar ao cliente (€)"), numero(m, "freteFbm", aoMudar)));
  }
  raiz.append(h("div", { class: "grade duas oficina-corpo" }, h("div", { class: "card pilha" }, h("h2", null, tr("Seus números")), campos), saida));
  desenharCampos(); desenhar();
}

/* ---------- 3. plano ---------- */
function telaPlano(ctx, raiz) {
  const m = MEM.plano;
  const saida = h("div", { class: "pilha", "aria-live": "polite" });
  function desenhar() {
    const r = compararPlanos(m.itens);
    limpar(saida);
    const max = Math.max(r.custoIndividual, r.custoProfissional, 1);
    const linha = (nome, v, cor, melhor) => h("div", { class: "plano-linha" },
      h("div", { class: "linha" }, h("strong", null, nome), melhor ? h("span", { class: "badge oliva" }, tr("mais barato")) : null, h("span", { class: "espaco" }), h("strong", null, tr("{v}/mês", { v: fmtEUR(v) }))),
      h("div", { class: "barra " + cor }, h("i", { style: { width: (v / max) * 100 + "%" } })));
    ap(saida, 
      h("div", { class: "card pilha" },
        linha(tr("Individual"), r.custoIndividual, "mar", r.maisBarato === "individual"),
        linha(tr("Profissional"), r.custoProfissional, "uva", r.maisBarato === "profissional"),
        h("p", { class: "muted pequeno", style: { margin: 0 } }, tr("Individual: {i} por item vendido. Profissional: {p} por mês. Valores sem IVA e fora as comissões de venda.", { i: fmtEUR(FEES.planos.individual.porItem), p: fmtEUR(FEES.planos.profissional.mensal) }))),
      h("div", { class: "card " + (r.passaDoLimite ? "sol" : "plano") },
        h("strong", null, r.passaDoLimite ? tr("Com {n} itens por mês, a Amazon indica o plano Profissional", { n: r.itens }) : tr("O que isso quer dizer")),
        h("p", { style: { margin: "6px 0 0" } }, r.passaDoLimite
          ? tr("O plano Individual é para menos de {n} itens por mês. A partir daí, o Profissional é o caminho.", { n: r.limite })
          : tr("Só pelo custo, o Individual sai mais barato até {e} itens por mês. Mas a Amazon indica o Individual para menos de {n} itens: acima disso, o Profissional é o plano certo.", { e: r.pontoEquilibrio - 1, n: r.limite })),
        h("p", { class: "muted pequeno", style: { margin: "6px 0 0" } }, tr("Confira também quais ferramentas cada plano libera para você, na página oficial de planos."))),
    );
  }
  const slider = h("input", { type: "range", min: "0", max: "150", step: "1", value: String(m.itens), "aria-label": tr("Itens vendidos por mês") });
  const entrada = numero(m, "itens", () => { slider.value = String(m.itens); desenhar(); }, { passo: 1 });
  slider.addEventListener("input", () => { m.itens = num(slider.value); entrada.value = String(m.itens); desenhar(); });
  raiz.append(h("div", { class: "grade duas oficina-corpo" }, h("div", { class: "card pilha" }, h("h2", null, tr("Quantos itens por mês?")), campo(tr("Itens vendidos por mês"), entrada), h("div", { class: "campo" }, h("label", { for: "plano-slider" }, tr("Ou deslize")), (slider.id = "plano-slider", slider))), saida));
  desenhar();
}

/* ---------- 4. lote ---------- */
function grafico(serie, investido) {
  const W = 560, H = 220, P = 34;
  const ys = serie.map((p) => p.caixa);
  const min = Math.min(0, ...ys), max = Math.max(1, ...ys);
  const x = (i) => P + (i / (serie.length - 1)) * (W - P - 10);
  const y = (v) => H - P - ((v - min) / (max - min)) * (H - P - 14);
  const pts = serie.map((p, i) => `${x(i).toFixed(1)},${y(p.caixa).toFixed(1)}`).join(" ");
  const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, class: "grafico-caixa", role: "img", "aria-label": tr("Caixa semana a semana") });
  svg.append(
    s("line", { x1: P, x2: W - 10, y1: y(0), y2: y(0), class: "g-zero" }),
    s("polyline", { points: pts, class: "g-linha", fill: "none" }),
    s("text", { x: P, y: 14, class: "g-txt" }, fmtEUR(max, 0)),
    s("text", { x: P, y: H - 8, class: "g-txt" }, tr("Semana 0")),
    s("text", { x: W - 10, y: H - 8, class: "g-txt", "text-anchor": "end" }, tr("Semana ") + (serie.length - 1)),
    s("text", { x: P, y: y(0) - 4, class: "g-txt" }, "0 €"));
  return svg;
}
function telaLote(ctx, raiz) {
  const m = MEM.lote;
  const saida = h("div", { class: "pilha", "aria-live": "polite" });
  function desenhar() {
    const r = simularLote({ capital: num(m.capital), custoUnidade: num(m.custoUnidade), receitaUnidade: num(m.receitaUnidade), vendasSemana: Math.max(1, num(m.vendasSemana)), semanasAteVender: Math.max(0, Math.round(num(m.semanasAteVender))), semanasPagamento: Math.max(0, Math.round(num(m.semanasPagamento))), semanas: 52 });
    limpar(saida);
    if (!r.unidades) { ap(saida, estadoVazio(tr("Capital pequeno demais"), tr("Com esse capital não dá para comprar nem uma unidade. Aumente o capital ou reduza o custo por unidade."))); return; }
    const lucro = r.lucroSeVenderTudo;
    ap(saida, 
      h("div", { class: "card " + (lucro >= 0 ? "oliva" : "tomate") },
        h("div", { class: "grade tres" },
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, fmt(r.unidades)), h("div", { class: "r" }, tr("unidades"))),
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, r.semanaRetorno == null ? "—" : tr("Sem. {n}", { n: r.semanaRetorno })), h("div", { class: "r" }, tr("dinheiro volta"))),
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, fmtEUR(lucro, 0)), h("div", { class: "r" }, tr("lucro se vender tudo"))))),
      h("div", { class: "card" }, h("h3", null, tr("Seu caixa semana a semana")), grafico(r.serie, r.investido),
        h("p", { class: "muted pequeno", style: { margin: 0 } }, tr("Você investe {v} no começo. O caixa só sobe quando as vendas viram pagamento (a Amazon paga em ciclos, com atraso que você informa).", { v: fmtEUR(r.investido) }) + " " + (r.esgotaEm != null ? tr("O estoque acaba na semana {n}.", { n: r.esgotaEm }) : tr("O estoque não acaba em 52 semanas.")))),
      lucro < 0 ? h("div", { class: "card tomate" }, h("strong", null, tr("Esse lote não se paga.")), h("p", { style: { margin: 0 } }, tr("A receita por unidade é menor que o custo. Revise o preço ou o custo na calculadora de margem."))) : null,
    );
  }
  const aoMudar = () => { clearTimeout(aoMudar.t); aoMudar.t = setTimeout(desenhar, 150); };
  raiz.append(h("div", { class: "grade duas oficina-corpo" },
    h("div", { class: "card pilha" }, h("h2", null, tr("Seu lote")),
      h("div", { class: "grade duas" },
        campo(tr("Capital disponível (€)"), numero(m, "capital", aoMudar)),
        campo(tr("Custo por unidade (€)"), numero(m, "custoUnidade", aoMudar), tr("Produto + frete + direitos, até o armazém.")),
        campo(tr("Sobra por venda (€)"), numero(m, "receitaUnidade", aoMudar), tr("Depois de comissão, logística e anúncios, sem IVA.")),
        campo(tr("Vendas por semana"), numero(m, "vendasSemana", aoMudar, { passo: 1 })),
        campo(tr("Semanas até começar a vender"), numero(m, "semanasAteVender", aoMudar, { passo: 1 }), tr("Produção, transporte e entrada no armazém.")),
        campo(tr("Atraso do pagamento (semanas)"), numero(m, "semanasPagamento", aoMudar, { passo: 1 }), tr("Tempo entre a venda e o dinheiro na conta.")))),
    saida));
  desenhar();
}

const TELAS = { margem: telaMargem, preco: telaPreco, plano: telaPlano, lote: telaLote };

export default function tela(ctx) {
  const id = TELAS[ctx.params.ferramenta] ? ctx.params.ferramenta : "margem";
  const raiz = h("div", { class: "pilha" });
  const abas = h("div", { class: "abas quebra", role: "tablist", "aria-label": tr("Ferramentas da Oficina") },
    FERRAMENTAS.map((f) => h("button", { class: "aba", type: "button", role: "tab", "aria-selected": String(f.id === id), onclick: () => ctx.ir("/oficina/" + f.id) }, f.nome)));
  const atual = FERRAMENTAS.find((f) => f.id === id);
  raiz.append(
    tituloTela(tr("Oficina"), tr("Calculadoras de verdade para decidir com números.")),
    abas,
    h("p", { class: "muted", style: { margin: 0 } }, atual.desc),
    h("div", { class: "card sol aviso-valores" }, h("strong", null, tr("Valores aproximados.")), tr(" Taxas conferidas em {data}. Confira na ", { data: FEES.verificadoEm.split("-").reverse().join("/") }), h("a", { href: "https://sell.amazon.es/precios", target: "_blank", rel: "noopener noreferrer" }, tr("página oficial de tarifas")), tr(" e na calculadora de receitas da Amazon antes de comprar um lote.")),
  );
  const corpo = h("div", { class: "pilha" });
  raiz.append(corpo);
  TELAS[id](ctx, corpo);
  return raiz;
}
