// Calculadora de margem FBA/FBM. Funções puras: leem content/fees.js e não tocam no DOM.
// Todos os valores em euros. Taxas da Amazon sem IVA; preço de venda COM IVA (como na loja).
import { FEES, categoriaPorId } from "../content/fees.js";

const arred = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
const DIVISOR_DIM = 5; // peso dimensional (g) = volume (cm³) / 5. Confere com os limites da rate card (35x25x12 -> 2.100 g).

export function pesoDimensionalG(dim) {
  const [c, l, a] = dim;
  return Math.ceil((c * l * a) / DIVISOR_DIM);
}

/** As três dimensões cabem no limite, em qualquer orientação? */
export function cabe(dim, limite) {
  const a = [...dim].sort((x, y) => y - x);
  const b = [...limite].sort((x, y) => y - x);
  return a.every((v, i) => v <= b[i] + 1e-9);
}

/** Comissão de venda (referral) sobre o preço total com IVA. Respeita faixas e mínimo por item. */
export function comissao(categoriaId, preco) {
  const cat = categoriaPorId(categoriaId);
  if (!cat || !(preco > 0)) return 0;
  let valor;
  if (cat.faixas) {
    if (cat.modo === "parcela") {
      valor = 0; let de = 0;
      for (const f of cat.faixas) {
        const ate = f.ate == null ? Infinity : f.ate;
        if (preco > de) valor += (Math.min(preco, ate) - de) * f.pct;
        de = ate;
        if (preco <= ate) break;
      }
    } else {
      const f = cat.faixas.find((x) => x.ate == null || preco <= x.ate);
      valor = preco * f.pct;
    }
  } else valor = preco * cat.pct;
  return arred(Math.max(valor, cat.minimo || 0));
}

/** Escolhe o tamanho FBA e devolve a tarifa base (antes do encargo de combustível). */
export function classificarFba({ dim, pesoG, baixoPreco = false }) {
  const f = FEES.fba;
  const pesoDim = pesoDimensionalG(dim);
  for (const e of f.envelopes) {
    if (cabe(dim, e.dim) && pesoG <= e.pesoMaxG) {
      return { nome: e.nome, base: baixoPreco && e.baixoPreco != null ? e.baixoPreco : e.tarifa, baixoPrecoAplicado: baixoPreco && e.baixoPreco != null, pesoCobradoG: pesoG, aproximado: false };
    }
  }
  const pacotes = [f.pacotePequeno, f.pacotePadrao];
  for (const p of pacotes) {
    if (cabe(dim, p.dim) && pesoG <= p.pesoUnidadeMaxG && pesoDim <= p.pesoDimMaxG) {
      const cobrado = Math.max(pesoG, pesoDim);
      const faixa = p.faixas.find((x) => cobrado <= x.pesoMaxG);
      if (!faixa) continue;
      const usaBaixo = baixoPreco && faixa.baixoPreco != null;
      return { nome: p.nome, base: usaBaixo ? faixa.baixoPreco : faixa.tarifa, baixoPrecoAplicado: usaBaixo, pesoCobradoG: cobrado, aproximado: false };
    }
  }
  for (const g of f.grandes) {
    if (cabe(dim, g.dim) && pesoG <= g.pesoUnidadeMaxG) {
      const extraKg = Math.max(0, pesoG - g.baseAteG) / 1000;
      return { nome: g.nome, base: arred(g.tarifa + extraKg * g.adicionalKg), baixoPrecoAplicado: false, pesoCobradoG: pesoG, aproximado: true };
    }
  }
  return null;
}

/** Elegível às tarifas de preço baixo? (preço com IVA, tamanho e peso do pacote pequeno, categoria não excluída). */
export function elegivelBaixoPreco({ precoComIva, dim, pesoG, categoriaId }) {
  const b = FEES.fba.baixoPreco;
  return precoComIva <= b.precoMaxEuroComIva && cabe(dim, b.dimMaxCm) && pesoG <= b.pesoMaxG && !b.categoriasExcluidasIds.includes(categoriaId);
}

export function taxaFba({ dim, pesoG, precoComIva, categoriaId, perigoso = false }) {
  const baixo = elegivelBaixoPreco({ precoComIva, dim, pesoG, categoriaId });
  const t = classificarFba({ dim, pesoG, baixoPreco: baixo });
  if (!t) return null;
  const combustivel = arred(t.base * FEES.fba.encargoCombustivelPct);
  const adicional = perigoso ? FEES.fba.adicionalPerigosoBateria : 0;
  return { ...t, combustivel, adicionalPerigoso: adicional, total: arred(t.base + combustivel + adicional), baixoPreco: baixo };
}

const MODA = ["roupa", "calcado", "bolsas"];
/** Armazenamento mensal por unidade (€). periodo: "janSet" | "outDez". */
export function armazenamentoUnidade({ dim, categoriaId, periodo = "janSet", perigoso = false, meses = 1 }) {
  const a = FEES.armazenamentoMesM3;
  const m3 = (dim[0] * dim[1] * dim[2]) / 1e6;
  const grande = !cabe(dim, FEES.fba.pacotePadrao.dim);
  let tabela = grande ? (perigoso ? a.grandePerigoso : a.grande) : perigoso ? a.padraoPerigoso : MODA.includes(categoriaId) ? a.padraoModa : a.padraoGeral;
  return arred(m3 * tabela[periodo] * meses);
}

/**
 * entrada: { precoComIva, ivaPct=0.21, custoProduto (sem IVA), freteUnidade, aduanaPct (sobre o custo do produto),
 *            categoriaId, dim:[c,l,a], pesoG, modelo: "fba"|"fbm", freteFbm (envio ao cliente, FBM), perigoso,
 *            devolucaoPct, perdaDevolucaoPct, ppcPorUnidade, mesesArmazenados, periodo }
 * Devolução: perde a taxa logística e o reembolso administrativo, e uma parte dos itens volta inutilizável.
 */
export function calcularMargem(e) {
  const iva = e.ivaPct ?? FEES.ivaES.geral;
  const preco = e.precoComIva;
  if (!(preco > 0)) return { valido: false, erro: "Informe o preço de venda." };
  const modelo = e.modelo || "fba";
  const receitaLiquida = arred(preco / (1 + iva));
  const ivaAPagar = arred(preco - receitaLiquida);
  const com = comissao(e.categoriaId, preco);
  let logistica = 0, fba = null, armazenamento = 0;
  if (modelo === "fba") {
    fba = taxaFba({ dim: e.dim, pesoG: e.pesoG, precoComIva: preco, categoriaId: e.categoriaId, perigoso: e.perigoso });
    if (!fba) return { valido: false, erro: "O produto passa dos limites de tamanho/peso tabelados. Confira a calculadora oficial." };
    logistica = fba.total;
    armazenamento = armazenamentoUnidade({ dim: e.dim, categoriaId: e.categoriaId, periodo: e.periodo, perigoso: e.perigoso, meses: e.mesesArmazenados ?? 1 });
  } else logistica = e.freteFbm || 0;
  const custoProduto = e.custoProduto || 0;
  const frete = e.freteUnidade || 0;
  const aduana = arred(custoProduto * (e.aduanaPct || 0));
  const ppc = e.ppcPorUnidade || 0;
  const cat = categoriaPorId(e.categoriaId);
  const admin = Math.min(FEES.reembolsoAdministrativo.maxEuro, FEES.reembolsoAdministrativo.pctDaComissao * com);
  const dev = e.devolucaoPct || 0;
  const custoDevolucao = arred(dev * (logistica + admin + (e.perdaDevolucaoPct ?? 0) * (custoProduto + frete + aduana)));
  const custoUnidade = arred(custoProduto + frete + aduana);
  const custos = [
    { id: "produto", rotulo: "Produto", valor: custoProduto },
    { id: "frete", rotulo: "Frete até o armazém", valor: frete },
    { id: "aduana", rotulo: "Direitos aduaneiros", valor: aduana },
    { id: "comissao", rotulo: "Comissão da Amazon", valor: com },
    { id: "logistica", rotulo: modelo === "fba" ? "Logística FBA" : "Envio ao cliente", valor: logistica },
    { id: "armazenamento", rotulo: "Armazenamento", valor: armazenamento },
    { id: "ppc", rotulo: "Anúncios", valor: ppc },
    { id: "devolucoes", rotulo: "Devoluções", valor: custoDevolucao },
  ];
  const totalCustos = arred(custos.reduce((a, c) => a + c.valor, 0));
  const lucro = arred(receitaLiquida - totalCustos);
  return {
    valido: true, modelo, categoria: cat ? cat.categoria : "", preco, receitaLiquida, ivaAPagar, custos, totalCustos, lucro,
    margemPct: receitaLiquida > 0 ? lucro / receitaLiquida : 0,
    roi: custoUnidade > 0 ? lucro / custoUnidade : null,
    fba, aproximado: !!(fba && fba.aproximado),
  };
}
