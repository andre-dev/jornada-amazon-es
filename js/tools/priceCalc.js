// Preço mínimo, comparador de planos e simulador de lote. Funções puras.
import { FEES } from "../content/fees.js";
import { calcularMargem } from "./feeCalc.js";

const arred = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

/** Busca o menor preço (em centavos) que satisfaz `ok`. Passo grosso de 0,50 € e depois refino de 1 centavo. */
function buscarPreco(entrada, ok, tetoCent = 200000) {
  let anterior = 99;
  for (let c = 100; c <= tetoCent; c += 50) {
    const r = calcularMargem({ ...entrada, precoComIva: c / 100 });
    if (!r.valido) return { valido: false, erro: r.erro };
    if (ok(r)) {
      for (let f = anterior + 1; f <= c; f++) {
        const rf = calcularMargem({ ...entrada, precoComIva: f / 100 });
        if (ok(rf)) return { valido: true, preco: f / 100, resultado: rf };
      }
    }
    anterior = c;
  }
  return { valido: false, erro: "Nenhum preço até 2.000 € atinge esse resultado com estes custos." };
}

/** Menor preço (com IVA) que atinge a margem desejada sobre a receita sem IVA. */
export function precoMinimo(entrada, margemAlvo) {
  return buscarPreco(entrada, (r) => r.lucro > 0 && r.margemPct >= margemAlvo - 1e-9);
}

/** Preço de equilíbrio: menor preço com lucro >= 0. */
export function precoEquilibrio(entrada) {
  return buscarPreco(entrada, (r) => r.lucro >= 0);
}

/** Plano individual (por item vendido) x profissional (mensal fixo). */
export function compararPlanos(itensPorMes) {
  const ind = FEES.planos.individual, pro = FEES.planos.profissional;
  const n = Math.max(0, Math.floor(itensPorMes || 0));
  const custoIndividual = arred(n * ind.porItem);
  const custoProfissional = pro.mensal;
  return {
    itens: n, custoIndividual, custoProfissional,
    maisBarato: custoIndividual < custoProfissional ? "individual" : custoIndividual > custoProfissional ? "profissional" : "empate",
    pontoEquilibrio: Math.ceil(pro.mensal / ind.porItem), // a partir deste nº de itens, o individual sai mais caro
    passaDoLimite: n >= ind.limiteItensMes,
    limite: ind.limiteItensMes,
  };
}

/**
 * Simula o caixa de um lote, semana a semana.
 * { capital, custoUnidade (produto+frete+aduana), receitaUnidade (o que sobra por venda depois das taxas da Amazon, sem IVA),
 *   vendasSemana, semanasAteVender (produção + transporte + entrada no armazém), semanasPagamento=2, semanas=26 }
 */
export function simularLote(e) {
  const unidades = e.custoUnidade > 0 ? Math.floor(e.capital / e.custoUnidade) : 0;
  const investido = arred(unidades * e.custoUnidade);
  const atraso = e.semanasPagamento ?? 2;
  const total = e.semanas ?? 26;
  const serie = [];
  let restante = unidades, recebido = 0, vendidasAcum = 0, semanaRetorno = null;
  const vendidasPorSemana = [];
  for (let s = 0; s <= total; s++) {
    let v = 0;
    if (s > e.semanasAteVender && restante > 0) { v = Math.min(restante, e.vendasSemana); restante -= v; }
    vendidasPorSemana[s] = v; vendidasAcum += v;
    const pagas = s - atraso >= 0 ? vendidasPorSemana[s - atraso] : 0;
    recebido += pagas * e.receitaUnidade;
    const caixa = arred(e.capital - investido + recebido);
    serie.push({ semana: s, caixa, vendidas: vendidasAcum, estoque: restante });
    if (semanaRetorno === null && recebido >= investido && investido > 0) semanaRetorno = s;
  }
  const lucroTotal = arred(unidades * e.receitaUnidade - investido);
  return { unidades, investido, serie, semanaRetorno, esgotaEm: serie.find((p) => p.estoque === 0 && p.vendidas > 0)?.semana ?? null, lucroSeVenderTudo: lucroTotal };
}
