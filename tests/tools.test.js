import test from "node:test";
import assert from "node:assert/strict";
import { comissao, pesoDimensionalG, classificarFba, taxaFba, calcularMargem, cabe } from "../js/tools/feeCalc.js";
import { precoMinimo, compararPlanos, simularLote } from "../js/tools/priceCalc.js";

test("comissão: percentual simples, faixa por produto, parcela e mínimo", () => {
  assert.equal(comissao("eletronica", 100), 7);            // 7%
  assert.equal(comissao("casa", 15), 1.2);                 // 8% (<=20)
  assert.equal(comissao("casa", 30), 4.5);                 // 15%
  assert.equal(comissao("roupa", 12), 0.6);                // 5%
  assert.equal(comissao("roupa", 18), 1.8);                // 10%
  assert.equal(comissao("roupa", 40), 6);                  // 15%
  assert.equal(comissao("joias", 300), 52.5);              // 250*20% + 50*5%
  assert.equal(comissao("eletronica", 2), 0.3);            // mínimo 0,30
  assert.equal(comissao("livros", 2), 0.3);                // 15% de 2 = 0,30 (sem mínimo)
});

test("peso dimensional confere com os limites da rate card", () => {
  assert.equal(pesoDimensionalG([35, 25, 12]), 2100);
  assert.equal(pesoDimensionalG([45, 34, 26]), 7956);
  assert.ok(cabe([12, 35, 25], [35, 25, 12]));
  assert.ok(!cabe([36, 20, 5], [35, 25, 12]));
});

test("classificação FBA: envelope, pacote pequeno e padrão", () => {
  const a = classificarFba({ dim: [30, 20, 2], pesoG: 150 });
  assert.equal(a.nome, "Envelope padrão"); assert.equal(a.base, 3.26);
  const b = classificarFba({ dim: [30, 20, 10], pesoG: 500 });   // dim 6000/5=1200 g -> cobra 1200 g -> faixa até 1400
  assert.equal(b.nome, "Pacote pequeno"); assert.equal(b.base, 4.21);
  const c = classificarFba({ dim: [40, 30, 20], pesoG: 1000 });   // 24000/5=4800 g -> padrão, faixa até 5900
  assert.equal(c.nome, "Pacote padrão"); assert.equal(c.base, 5.96);
  assert.equal(classificarFba({ dim: [300, 300, 300], pesoG: 99999 }), null);
});

test("taxa FBA inclui encargo de 1,5% e preço baixo", () => {
  const t = taxaFba({ dim: [30, 20, 2], pesoG: 150, precoComIva: 30, categoriaId: "casa" });
  assert.equal(t.base, 3.26); assert.equal(t.combustivel, 0.05); assert.equal(t.total, 3.31);
  const baixo = taxaFba({ dim: [30, 20, 2], pesoG: 150, precoComIva: 15, categoriaId: "casa" });
  assert.equal(baixo.baixoPreco, true); assert.equal(baixo.base, 2.61);
  const excl = taxaFba({ dim: [30, 20, 2], pesoG: 150, precoComIva: 15, categoriaId: "livros" });
  assert.equal(excl.baixoPreco, false);
});

test("margem FBA calculada à mão", () => {
  // preço 24,20 com IVA 21% -> receita 20,00. Casa: 8% (<=20)? preço 24,20 > 20 -> 15% = 3,63
  // Envelope padrão 150 g: 3,26 + 0,05 = 3,31. Armazenamento: 30*20*2 cm = 0,0012 m3 * 27,54 = 0,03
  // Produto 5,00 + frete 0,50 + aduana 0 + PPC 1,00 => custos = 5 + .5 + 3.63 + 3.31 + .03 + 1 = 13,47 -> lucro 6,53
  const r = calcularMargem({ precoComIva: 24.2, custoProduto: 5, freteUnidade: 0.5, categoriaId: "casa", dim: [30, 20, 2], pesoG: 150, modelo: "fba", ppcPorUnidade: 1 });
  assert.equal(r.receitaLiquida, 20);
  assert.equal(r.ivaAPagar, 4.2);
  assert.equal(r.totalCustos, 13.47);
  assert.equal(r.lucro, 6.53);
  assert.ok(Math.abs(r.margemPct - 0.3265) < 1e-9);
  assert.ok(Math.abs(r.roi - 6.53 / 5.5) < 1e-9);
});

test("margem FBM usa o frete informado e aduana sobre o custo", () => {
  const r = calcularMargem({ precoComIva: 121, custoProduto: 40, freteUnidade: 5, aduanaPct: 0.05, categoriaId: "eletronica", modelo: "fbm", freteFbm: 6, dim: [10, 10, 10], pesoG: 200 });
  // receita 100; comissão 7% de 121 = 8,47; aduana 2; custos 40+5+2+8,47+6 = 61,47; lucro 38,53
  assert.equal(r.totalCustos, 61.47); assert.equal(r.lucro, 38.53);
});

test("devoluções reduzem o lucro", () => {
  const base = { precoComIva: 121, custoProduto: 40, categoriaId: "eletronica", modelo: "fbm", freteFbm: 6, dim: [10, 10, 10], pesoG: 200 };
  const sem = calcularMargem(base), com = calcularMargem({ ...base, devolucaoPct: 0.1, perdaDevolucaoPct: 0.5 });
  // custo de devolução = 10% * (6 + min(5, 20%*8,47=1,69)+ 0,5*40) = 0,1*(6+1,694+20)=2,77
  assert.equal(com.totalCustos - sem.totalCustos > 2.7 && com.totalCustos - sem.totalCustos < 2.8, true);
});

test("preço mínimo: acha o menor preço que dá a margem", () => {
  const e = { custoProduto: 5, freteUnidade: 0.5, categoriaId: "eletronica", dim: [10, 10, 2], pesoG: 100, modelo: "fba" };
  const r = precoMinimo(e, 0.2);
  assert.ok(r.valido);
  assert.ok(r.resultado.margemPct >= 0.2);
  const abaixo = calcularMargem({ ...e, precoComIva: r.preco - 0.01 });
  assert.ok(abaixo.margemPct < 0.2);
});

test("comparador de planos", () => {
  const a = compararPlanos(10); assert.equal(a.custoIndividual, 9.9); assert.equal(a.maisBarato, "individual");
  assert.equal(a.pontoEquilibrio, 40); // 39 / 0,99 = 39,39 -> 40
  const b = compararPlanos(50); assert.equal(b.custoIndividual, 49.5); assert.equal(b.maisBarato, "profissional"); assert.equal(b.passaDoLimite, true);
});

test("simulador de lote: caixa semana a semana", () => {
  // capital 1000, custo 10/un -> 100 un. Vende 10/semana a partir da semana 3 (semanasAteVender=2). Recebe 20/un com 2 semanas de atraso.
  const r = simularLote({ capital: 1000, custoUnidade: 10, receitaUnidade: 20, vendasSemana: 10, semanasAteVender: 2, semanasPagamento: 2, semanas: 20 });
  assert.equal(r.unidades, 100); assert.equal(r.investido, 1000);
  assert.equal(r.serie[0].caixa, 0);
  assert.equal(r.serie[3].vendidas, 10);
  assert.equal(r.serie[5].caixa, 200);        // vendas da semana 3 pagas na 5
  // recebido >= 1000 quando 50 unidades pagas: vendas sem 3..7 pagas 5..9 -> semana 9
  assert.equal(r.semanaRetorno, 9);
  assert.equal(r.lucroSeVenderTudo, 1000);
  assert.equal(r.esgotaEm, 12);
});
