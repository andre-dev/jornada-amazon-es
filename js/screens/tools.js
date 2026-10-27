// Oficina: 4 calculadoras reais. A lógica fica em js/tools/*.js (funções puras); aqui só tem tela.
import { h, s, limpar } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { tituloTela, fmtEUR, fmtPct, fmt, estadoVazio } from "../ui/components.js";
import { FEES } from "../content/fees.js";
import { calcularMargem, taxaFba } from "../tools/feeCalc.js";
import { precoMinimo, precoEquilibrio, compararPlanos, simularLote } from "../tools/priceCalc.js";
import { confirmar } from "../ui/modal.js";
import { toast } from "../ui/toast.js";

const FERRAMENTAS = [
  { id: "margem", nome: "Margem FBA x FBM", desc: "Quanto sobra em cada venda, depois de todos os custos." },
  { id: "preco", nome: "Preço mínimo", desc: "Quanto cobrar para chegar à margem que você quer." },
  { id: "plano", nome: "Plano de venda", desc: "Individual ou Profissional: qual custa menos?" },
  { id: "lote", nome: "Lote de compra", desc: "Quantas unidades o capital compra e quando o dinheiro volta." },
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
  if (r.lucro > 0) segs.push({ id: "lucro", rotulo: "Lucro", valor: r.lucro });
  const barra = h("div", { class: "pilha-custos", role: "img", "aria-label": "Divisão da receita sem IVA entre custos e lucro" },
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
    if (!r.valido) { saida.append(h("div", { class: "card tomate" }, h("strong", null, "Não consegui calcular"), h("p", null, r.erro))); return; }
    const bom = r.lucro > 0;
    saida.append(
      h("div", { class: "card " + (bom ? "oliva" : "tomate") + " resultado-calc" },
        h("div", { class: "stat-grande" }, h("div", { class: "r" }, "Lucro por unidade"), h("div", { class: "n" }, fmtEUR(r.lucro))),
        h("div", { class: "grade tres", style: { marginTop: "12px" } },
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, fmtPct(r.margemPct)), h("div", { class: "r" }, "Margem")),
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, r.roi == null ? "—" : fmtPct(r.roi, 0)), h("div", { class: "r" }, "ROI")),
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, fmtEUR(r.ivaAPagar)), h("div", { class: "r" }, "IVA no preço")))),
      h("div", { class: "card" }, h("h3", null, "Para onde vai o dinheiro"), h("p", { class: "muted pequeno" }, `Receita sem IVA: ${fmtEUR(r.receitaLiquida)} (preço ${fmtEUR(r.preco)} com IVA).`), barraCustos(r)),
    );
    if (r.fba) {
      saida.append(h("div", { class: "card plano" }, h("strong", null, `Tamanho FBA: ${r.fba.nome}`), h("p", { class: "muted pequeno", style: { margin: 0 } },
        `Tarifa base ${fmtEUR(r.fba.base)} + 1,5% de combustível${r.fba.baixoPreco ? ", com tarifa de preço baixo" : ""}${r.fba.adicionalPerigoso ? " + adicional de perigoso/bateria" : ""}. Peso cobrado: ${fmt(r.fba.pesoCobradoG)} g.`,
        r.aproximado ? h("span", { class: "selo-aprox" }, "aproximado") : null)));
    }
    if (!bom) saida.append(h("div", { class: "card tomate" }, h("strong", null, "Esse produto perde dinheiro."), h("p", { style: { margin: 0 } }, "Suba o preço, negocie o custo ou escolha outro produto. Use a aba Preço mínimo para achar o preço certo.")));
  }

  const aoMudar = () => { clearTimeout(aoMudar.t); aoMudar.t = setTimeout(desenhar, 120); };
  camposFbm.append(campo("Custo de enviar ao cliente (€)", numero(m, "freteFbm", aoMudar), "O que você paga para entregar cada pedido, sem IVA."));

  const formulario = h("div", { class: "card pilha" },
    h("h2", null, "Seus números"),
    segmento(m, "modelo", [["fba", "FBA (Amazon envia)"], ["fbm", "FBM (você envia)"]], () => { desenharCampos(); aoMudar(); }, "Modelo de envio"),
    h("div", { class: "grade duas" },
      campo("Preço de venda com IVA (€)", numero(m, "precoComIva", aoMudar)),
      campo("IVA (%)", numero(m, "ivaPct", aoMudar), "21% é o geral. 10% e 4% valem para alguns produtos."),
      campo("Categoria", selecao(m, "categoriaId", CATEGORIAS, aoMudar)),
      campo("Custo do produto (€)", numero(m, "custoProduto", aoMudar), "Sem IVA, por unidade."),
      campo("Frete até o armazém (€)", numero(m, "freteUnidade", aoMudar), "Por unidade."),
      campo("Direitos aduaneiros (%)", numero(m, "aduanaPct", aoMudar), "Sobre o custo do produto. 0 se comprar dentro da UE."),
      campo("Devoluções (%)", numero(m, "devolucaoPct", aoMudar)),
      campo("Devolvidos que não dá para revender (%)", numero(m, "perdaPct", aoMudar)),
      campo("Anúncio por unidade vendida (€)", numero(m, "ppc", aoMudar), "Custo médio de anúncios por venda.")),
    h("div", { class: "pilha", id: "area-modelo" }));

  function desenharCampos() {
    const area = formulario.querySelector("#area-modelo");
    limpar(area);
    if (m.modelo === "fba") area.append(h("h3", null, "Tamanho e armazenamento"), montarCamposFba());
    else area.append(camposFbm);
  }
  function montarCamposFba() {
    const box = h("div", { class: "grade duas" });
    box.append(
      campo("Comprimento (cm)", numero(m, "c", aoMudar)), campo("Largura (cm)", numero(m, "l", aoMudar)),
      campo("Altura (cm)", numero(m, "a", aoMudar)), campo("Peso da unidade (g)", numero(m, "pesoG", aoMudar)),
      campo("Meses no armazém", numero(m, "meses", aoMudar, { passo: 0.5 }), "Armazenamento é cobrado por m³ e por mês."),
      campo("Época", segmento(m, "periodo", [["janSet", "Jan a set"], ["outDez", "Out a dez"]], aoMudar, "Época do ano"), "Out a dez é mais caro."));
    const t = h("input", { type: "checkbox", class: "toggle", checked: m.perigoso });
    t.addEventListener("change", () => { m.perigoso = t.checked; aoMudar(); });
    box.append(h("label", { class: "interruptor", style: { gridColumn: "1 / -1" } }, h("span", null, "Perigoso ou com bateria de lítio (+0,10 € por unidade)"), t));
    return box;
  }

  const nome = h("input", { class: "entrada", type: "text", maxlength: "60", placeholder: "Nome do cenário, por exemplo: Garrafa térmica 500 ml" });
  const lista = h("div", { class: "pilha" });
  function desenharCenarios() {
    limpar(lista);
    const cs = store.estado.cenarios.filter((c) => c.tipo === "margem");
    if (!cs.length) { lista.append(h("p", { class: "muted" }, "Nenhum cenário salvo ainda. Salve um para comparar produtos depois.")); return; }
    for (const c of cs) {
      const e = c.entradas || {};
      const r = calcularMargem(paraCalculo({ ...MEM.margem, ...e }));
      lista.append(h("div", { class: "cenario card plano" },
        h("div", { class: "cenario-info" }, h("strong", null, c.nome), h("span", { class: "pequeno muted" }, r.valido ? `Lucro ${fmtEUR(r.lucro)} · margem ${fmtPct(r.margemPct)}` : "Sem resultado")),
        h("div", { class: "linha" },
          h("button", { class: "btn pequeno mar", type: "button", onclick: () => { Object.assign(m, e); ctx.ir("/oficina/margem", { substituir: true }); } }, "Abrir"),
          h("button", { class: "btn pequeno card", type: "button", "aria-label": "Excluir cenário " + c.nome, onclick: async () => { if (await confirmar({ titulo: "Excluir cenário?", texto: `"${c.nome}" será removido.`, ok: "Excluir", perigo: true })) { store.removerCenario(c.id); desenharCenarios(); } } }, "Excluir"))));
    }
  }
  const salvar = h("button", { class: "btn sol", type: "button", onclick: () => {
    const id = store.salvarCenario({ nome: nome.value.trim() || "Meu cenário", tipo: "margem", entradas: { ...m } });
    if (!id) { toast("Limite de 30 cenários. Exclua algum para salvar outro.", "erro"); return; }
    store.contarMargem(); toast("Cenário salvo!", "ok"); nome.value = ""; desenharCenarios();
  } }, icone("disco", 20), "Salvar cenário");

  raiz.append(
    h("div", { class: "grade duas oficina-corpo" }, formulario, h("div", { class: "pilha" }, saida)),
    h("section", { class: "card pilha" }, h("h2", null, "Cenários salvos"), h("div", { class: "linha" }, h("div", { style: { flex: "1 1 220px" } }, nome), salvar), lista),
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
    if (!alvo.valido) { saida.append(h("div", { class: "card tomate" }, h("strong", null, "Sem resultado"), h("p", { style: { margin: 0 } }, alvo.erro))); return; }
    saida.append(
      h("div", { class: "card sol" }, h("div", { class: "stat-grande" }, h("div", { class: "r" }, `Para ${fmt(num(m.margemAlvo), 0)}% de margem, cobre no mínimo`), h("div", { class: "n" }, fmtEUR(alvo.preco)), h("div", { class: "r" }, "preço com IVA")),
        h("p", { class: "centro", style: { margin: "10px 0 0" } }, `Lucro por unidade: ${fmtEUR(alvo.resultado.lucro)}`)),
      eq.valido ? h("div", { class: "card plano" }, h("strong", null, `Preço de equilíbrio: ${fmtEUR(eq.preco)}`), h("p", { class: "muted pequeno", style: { margin: 0 } }, "Abaixo disso você perde dinheiro em cada venda.")) : null,
      h("div", { class: "card" }, h("h3", null, "Como fica nesse preço"), barraCustos(alvo.resultado)),
      alvo.resultado.aproximado ? h("p", { class: "muted pequeno" }, "A tarifa deste tamanho é aproximada.") : null,
    );
  }
  const aoMudar = () => { clearTimeout(aoMudar.t); aoMudar.t = setTimeout(desenhar, 250); };
  const campos = h("div", { class: "pilha" });
  function desenharCampos() {
    limpar(campos).append(
      h("div", { class: "grade duas" },
        campo("Margem desejada (%)", numero(m, "margemAlvo", aoMudar), "Lucro dividido pela receita sem IVA."),
        campo("Categoria", selecao(m, "categoriaId", CATEGORIAS, aoMudar)),
        campo("Custo do produto (€)", numero(m, "custoProduto", aoMudar)),
        campo("Frete até o armazém (€)", numero(m, "freteUnidade", aoMudar)),
        campo("Direitos aduaneiros (%)", numero(m, "aduanaPct", aoMudar)),
        campo("IVA (%)", numero(m, "ivaPct", aoMudar)),
        campo("Devoluções (%)", numero(m, "devolucaoPct", aoMudar)),
        campo("Devolvidos sem revenda (%)", numero(m, "perdaPct", aoMudar)),
        campo("Anúncio por unidade (€)", numero(m, "ppc", aoMudar))),
      segmento(m, "modelo", [["fba", "FBA"], ["fbm", "FBM"]], () => { desenharCampos(); aoMudar(); }, "Modelo de envio"),
      m.modelo === "fba"
        ? h("div", { class: "grade duas" }, campo("Comprimento (cm)", numero(m, "c", aoMudar)), campo("Largura (cm)", numero(m, "l", aoMudar)), campo("Altura (cm)", numero(m, "a", aoMudar)), campo("Peso (g)", numero(m, "pesoG", aoMudar)))
        : campo("Custo de enviar ao cliente (€)", numero(m, "freteFbm", aoMudar)));
  }
  raiz.append(h("div", { class: "grade duas oficina-corpo" }, h("div", { class: "card pilha" }, h("h2", null, "Seus números"), campos), saida));
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
      h("div", { class: "linha" }, h("strong", null, nome), melhor ? h("span", { class: "badge oliva" }, "mais barato") : null, h("span", { class: "espaco" }), h("strong", null, fmtEUR(v) + "/mês")),
      h("div", { class: "barra " + cor }, h("i", { style: { width: (v / max) * 100 + "%" } })));
    saida.append(
      h("div", { class: "card pilha" },
        linha("Individual", r.custoIndividual, "mar", r.maisBarato === "individual"),
        linha("Profissional", r.custoProfissional, "uva", r.maisBarato === "profissional"),
        h("p", { class: "muted pequeno", style: { margin: 0 } }, `Individual: ${fmtEUR(FEES.planos.individual.porItem)} por item vendido. Profissional: ${fmtEUR(FEES.planos.profissional.mensal)} por mês. Valores sem IVA e fora as comissões de venda.`)),
      h("div", { class: "card " + (r.passaDoLimite ? "sol" : "plano") },
        h("strong", null, r.passaDoLimite ? `Com ${r.itens} itens por mês, a Amazon indica o plano Profissional` : "O que isso quer dizer"),
        h("p", { style: { margin: "6px 0 0" } }, r.passaDoLimite
          ? `O plano Individual é para menos de ${r.limite} itens por mês. A partir daí, o Profissional é o caminho.`
          : `Só pelo custo, o Individual sai mais barato até ${r.pontoEquilibrio - 1} itens por mês. Mas a Amazon indica o Individual para menos de ${r.limite} itens: acima disso, o Profissional é o plano certo.`),
        h("p", { class: "muted pequeno", style: { margin: "6px 0 0" } }, "Confira também quais ferramentas cada plano libera para você, na página oficial de planos.")),
    );
  }
  const slider = h("input", { type: "range", min: "0", max: "150", step: "1", value: String(m.itens), "aria-label": "Itens vendidos por mês" });
  const entrada = numero(m, "itens", () => { slider.value = String(m.itens); desenhar(); }, { passo: 1 });
  slider.addEventListener("input", () => { m.itens = num(slider.value); entrada.value = String(m.itens); desenhar(); });
  raiz.append(h("div", { class: "grade duas oficina-corpo" }, h("div", { class: "card pilha" }, h("h2", null, "Quantos itens por mês?"), campo("Itens vendidos por mês", entrada), h("div", { class: "campo" }, h("label", { for: "plano-slider" }, "Ou deslize"), (slider.id = "plano-slider", slider))), saida));
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
  const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, class: "grafico-caixa", role: "img", "aria-label": "Caixa semana a semana" });
  svg.append(
    s("line", { x1: P, x2: W - 10, y1: y(0), y2: y(0), class: "g-zero" }),
    s("polyline", { points: pts, class: "g-linha", fill: "none" }),
    s("text", { x: P, y: 14, class: "g-txt" }, fmtEUR(max, 0)),
    s("text", { x: P, y: H - 8, class: "g-txt" }, "Semana 0"),
    s("text", { x: W - 10, y: H - 8, class: "g-txt", "text-anchor": "end" }, "Semana " + (serie.length - 1)),
    s("text", { x: P, y: y(0) - 4, class: "g-txt" }, "0 €"));
  return svg;
}
function telaLote(ctx, raiz) {
  const m = MEM.lote;
  const saida = h("div", { class: "pilha", "aria-live": "polite" });
  function desenhar() {
    const r = simularLote({ capital: num(m.capital), custoUnidade: num(m.custoUnidade), receitaUnidade: num(m.receitaUnidade), vendasSemana: Math.max(1, num(m.vendasSemana)), semanasAteVender: Math.max(0, Math.round(num(m.semanasAteVender))), semanasPagamento: Math.max(0, Math.round(num(m.semanasPagamento))), semanas: 52 });
    limpar(saida);
    if (!r.unidades) { saida.append(estadoVazio("Capital pequeno demais", "Com esse capital não dá para comprar nem uma unidade. Aumente o capital ou reduza o custo por unidade.")); return; }
    const lucro = r.lucroSeVenderTudo;
    saida.append(
      h("div", { class: "card " + (lucro >= 0 ? "oliva" : "tomate") },
        h("div", { class: "grade tres" },
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, fmt(r.unidades)), h("div", { class: "r" }, "unidades")),
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, r.semanaRetorno == null ? "—" : "Sem. " + r.semanaRetorno), h("div", { class: "r" }, "dinheiro volta")),
          h("div", { class: "stat-grande" }, h("div", { class: "n" }, fmtEUR(lucro, 0)), h("div", { class: "r" }, "lucro se vender tudo")))),
      h("div", { class: "card" }, h("h3", null, "Seu caixa semana a semana"), grafico(r.serie, r.investido),
        h("p", { class: "muted pequeno", style: { margin: 0 } }, `Você investe ${fmtEUR(r.investido)} no começo. O caixa só sobe quando as vendas viram pagamento (a Amazon paga em ciclos, com atraso que você informa).${r.esgotaEm != null ? ` O estoque acaba na semana ${r.esgotaEm}.` : " O estoque não acaba em 52 semanas."}`)),
      lucro < 0 ? h("div", { class: "card tomate" }, h("strong", null, "Esse lote não se paga."), h("p", { style: { margin: 0 } }, "A receita por unidade é menor que o custo. Revise o preço ou o custo na calculadora de margem.")) : null,
    );
  }
  const aoMudar = () => { clearTimeout(aoMudar.t); aoMudar.t = setTimeout(desenhar, 150); };
  raiz.append(h("div", { class: "grade duas oficina-corpo" },
    h("div", { class: "card pilha" }, h("h2", null, "Seu lote"),
      h("div", { class: "grade duas" },
        campo("Capital disponível (€)", numero(m, "capital", aoMudar)),
        campo("Custo por unidade (€)", numero(m, "custoUnidade", aoMudar), "Produto + frete + direitos, até o armazém."),
        campo("Sobra por venda (€)", numero(m, "receitaUnidade", aoMudar), "Depois de comissão, logística e anúncios, sem IVA."),
        campo("Vendas por semana", numero(m, "vendasSemana", aoMudar, { passo: 1 })),
        campo("Semanas até começar a vender", numero(m, "semanasAteVender", aoMudar, { passo: 1 }), "Produção, transporte e entrada no armazém."),
        campo("Atraso do pagamento (semanas)", numero(m, "semanasPagamento", aoMudar, { passo: 1 }), "Tempo entre a venda e o dinheiro na conta."))),
    saida));
  desenhar();
}

const TELAS = { margem: telaMargem, preco: telaPreco, plano: telaPlano, lote: telaLote };

export default function tela(ctx) {
  const id = TELAS[ctx.params.ferramenta] ? ctx.params.ferramenta : "margem";
  const raiz = h("div", { class: "pilha" });
  const abas = h("div", { class: "abas quebra", role: "tablist", "aria-label": "Ferramentas da Oficina" },
    FERRAMENTAS.map((f) => h("button", { class: "aba", type: "button", role: "tab", "aria-selected": String(f.id === id), onclick: () => ctx.ir("/oficina/" + f.id) }, f.nome)));
  const atual = FERRAMENTAS.find((f) => f.id === id);
  raiz.append(
    tituloTela("Oficina", "Calculadoras de verdade para decidir com números."),
    abas,
    h("p", { class: "muted", style: { margin: 0 } }, atual.desc),
    h("div", { class: "card sol aviso-valores" }, h("strong", null, "Valores aproximados."), ` Taxas conferidas em ${FEES.verificadoEm.split("-").reverse().join("/")}. Confira na `, h("a", { href: "https://sell.amazon.es/precios", target: "_blank", rel: "noopener noreferrer" }, "página oficial de tarifas"), " e na calculadora de receitas da Amazon antes de comprar um lote."),
  );
  const corpo = h("div", { class: "pilha" });
  raiz.append(corpo);
  TELAS[id](ctx, corpo);
  return raiz;
}
