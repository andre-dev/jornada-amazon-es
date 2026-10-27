// Tabela de taxas da Amazon.es usada pelas calculadoras e pelo Mundo 5.
// TODAS as taxas mudam com o tempo. Cada bloco guarda de onde veio e quando foi conferido.
// Valores de envelope/pacote FBA foram transcritos da rate card oficial em PDF por leitura automática: confira no PDF antes de decidir.
export const FEES = {
  verificadoEm: "2026-10-26",
  fonte: "https://sell.amazon.es/precios",
  moeda: "EUR",
  fontes: {
    precios: "https://sell.amazon.es/precios",
    rateCard: "https://m.media-amazon.com/images/G/02/sell/images/260630-FBA-Rate-Card-ES1.pdf",
    baixoPreco: "https://sell.amazon.es/tarifas-precio-bajo-logistica-de-amazon",
    grandePesado: "https://sell.amazon.es/programas/grande-y-pesado",
    registro: "https://sell.amazon.es/vender-online/guia-de-registro",
  },
  planos: {
    individual: { porItem: 0.99, limiteItensMes: 35, nota: "Menos de 35 itens por mês. Sem IVA. Além das comissões de venda." },
    profissional: { mensal: 39, nota: "Para mais de 35 itens por mês. Sem IVA. Além das comissões de venda." },
  },
  ivaES: { geral: 0.21, reduzido: 0.10, superreduzido: 0.04 },
  recargoEquivalencia: { 0.21: 0.052, 0.10: 0.014, 0.04: 0.005 },
  // modo "produto": a faixa que corresponde ao preço total vale para o item inteiro.
  // modo "parcela": cada taxa vale só para a parte do preço dentro da faixa.
  // "Preço total" = o que o cliente paga, incluindo envio e embalagem para presente. minimo: por item (0 = não procede).
  comissoesPorCategoria: [
    { id: "casa", categoria: "Produtos para o lar", modo: "produto", faixas: [{ ate: 20, pct: 0.08 }, { ate: null, pct: 0.15 }], minimo: 0.30 },
    { id: "cozinha", categoria: "Cozinha", pct: 0.15, minimo: 0.30 },
    { id: "esportes", categoria: "Esportes e ar livre", pct: 0.15, minimo: 0.30 },
    { id: "brinquedos", categoria: "Brinquedos e jogos", pct: 0.15, minimo: 0.30 },
    { id: "bebe", categoria: "Produtos para bebê", modo: "produto", faixas: [{ ate: 10, pct: 0.08 }, { ate: null, pct: 0.15 }], minimo: 0.30 },
    { id: "beleza", categoria: "Beleza, saúde e cuidado pessoal", modo: "produto", faixas: [{ ate: 10, pct: 0.08 }, { ate: null, pct: 0.15 }], minimo: 0.30 },
    { id: "suplementos", categoria: "Vitaminas, minerais e suplementos", modo: "produto", faixas: [{ ate: 10, pct: 0.05 }, { ate: null, pct: 0.15 }], minimo: 0.30 },
    { id: "pets", categoria: "Produtos para animais de estimação", pct: 0.15, minimo: 0.30 },
    { id: "pets-comida", categoria: "Comida e roupa para pets", modo: "produto", faixas: [{ ate: 10, pct: 0.05 }, { ate: null, pct: 0.15 }], minimo: 0.30 },
    { id: "roupa", categoria: "Roupa e acessórios", modo: "produto", faixas: [{ ate: 15, pct: 0.05 }, { ate: 20, pct: 0.10 }, { ate: null, pct: 0.15 }], minimo: 0.30 },
    { id: "calcado", categoria: "Calçados", pct: 0.15, minimo: 0.30 },
    { id: "bolsas", categoria: "Mochilas e bolsas", pct: 0.15, minimo: 0.30 },
    { id: "joias", categoria: "Joias", modo: "parcela", faixas: [{ ate: 250, pct: 0.20 }, { ate: null, pct: 0.05 }], minimo: 0.30 },
    { id: "relogios", categoria: "Relógios", modo: "parcela", faixas: [{ ate: 250, pct: 0.15 }, { ate: null, pct: 0.05 }], minimo: 0.30 },
    { id: "eletronica", categoria: "Eletrônicos", pct: 0.07, minimo: 0.30 },
    { id: "informatica", categoria: "Informática", pct: 0.07, minimo: 0.30 },
    { id: "acess-eletronicos", categoria: "Acessórios eletrônicos e de informática", modo: "parcela", faixas: [{ ate: 100, pct: 0.15 }, { ate: null, pct: 0.08 }], minimo: 0.30 },
    { id: "acess-amazon", categoria: "Acessórios para dispositivos Amazon", pct: 0.45, minimo: 0.30 },
    { id: "eletro-compactos", categoria: "Eletrodomésticos compactos", pct: 0.15, minimo: 0.30 },
    { id: "eletro-normais", categoria: "Eletrodomésticos de tamanho normal", pct: 0.07, minimo: 0.30 },
    { id: "moveis", categoria: "Móveis", modo: "parcela", faixas: [{ ate: 200, pct: 0.15 }, { ate: null, pct: 0.10 }], minimo: 0.30 },
    { id: "jardim", categoria: "Jardim e gramado", pct: 0.15, minimo: 0.30 },
    { id: "bricolagem", categoria: "Bricolagem e ferramentas", pct: 0.13, minimo: 0.30 },
    { id: "automocao", categoria: "Automoção e motor", modo: "parcela", faixas: [{ ate: 50, pct: 0.15 }, { ate: null, pct: 0.09 }], minimo: 0.30 },
    { id: "escritorio", categoria: "Escritório e papelaria", pct: 0.15, minimo: 0.30 },
    { id: "instrumentos", categoria: "Instrumentos musicais e áudio profissional", pct: 0.12, minimo: 0.30 },
    { id: "mercado", categoria: "Supermercado e gourmet", modo: "produto", faixas: [{ ate: 10, pct: 0.05 }, { ate: null, pct: 0.15 }], minimo: 0 },
    { id: "livros", categoria: "Livros", pct: 0.15, minimo: 0 },
    { id: "videogames", categoria: "Videogames e acessórios", pct: 0.15, minimo: 0 },
    { id: "consoles", categoria: "Consoles de videogame", pct: 0.08, minimo: 0 },
    { id: "feito-a-mao", categoria: "Feito à mão (Handmade)", pct: 0.12, minimo: 0.30 },
    { id: "outros", categoria: "Todo o resto", pct: 0.15, minimo: 0.30 },
  ],
  // Cobrança de reembolso administrativo: o menor valor entre 5 € e 20% da comissão de referência.
  reembolsoAdministrativo: { maxEuro: 5, pctDaComissao: 0.20 },
  // Taxa de gestão logística FBA (envio local, ES, rate card vigente desde 2026-07-01). Antes do encargo de combustível.
  // Peso = o maior entre o peso da unidade e o peso dimensional (regra geral da rate card). dimensoes em cm [c, l, a].
  fba: {
    vigenteDesde: "2026-07-01",
    encargoCombustivelPct: 0.015, // sobre a taxa de gestão logística, desde 2026-04-17
    adicionalPerigosoBateria: 0.10, // por unidade (pilhas de lítio ou perigosos)
    avisoConferir: "Valores transcritos da rate card oficial. Confira no PDF antes de decidir.",
    envelopes: [
      { nome: "Envelope leve", dim: [33, 23, 2.5], pesoMaxG: 20, tarifa: 2.77, baixoPreco: 2.15 },
      { nome: "Envelope leve", dim: [33, 23, 2.5], pesoMaxG: 40, tarifa: 2.84, baixoPreco: 2.21 },
      { nome: "Envelope leve", dim: [33, 23, 2.5], pesoMaxG: 60, tarifa: 2.87, baixoPreco: 2.23 },
      { nome: "Envelope leve", dim: [33, 23, 2.5], pesoMaxG: 80, tarifa: 3.21, baixoPreco: 2.55 },
      { nome: "Envelope leve", dim: [33, 23, 2.5], pesoMaxG: 100, tarifa: 3.23, baixoPreco: 2.59 },
      { nome: "Envelope padrão", dim: [33, 23, 2.5], pesoMaxG: 210, tarifa: 3.26, baixoPreco: 2.61 },
      { nome: "Envelope padrão", dim: [33, 23, 2.5], pesoMaxG: 460, tarifa: 3.45, baixoPreco: 2.85 },
      { nome: "Envelope grande", dim: [33, 23, 4], pesoMaxG: 960, tarifa: 3.60, baixoPreco: 3.00 },
      { nome: "Envelope extra grande", dim: [33, 23, 6], pesoMaxG: 960, tarifa: 3.85, baixoPreco: 3.23 },
    ],
    pacotePequeno: { nome: "Pacote pequeno", dim: [35, 25, 12], pesoUnidadeMaxG: 3900, pesoDimMaxG: 2100, faixas: [
      { pesoMaxG: 150, tarifa: 3.52, baixoPreco: 3.23 },
      { pesoMaxG: 400, tarifa: 3.74, baixoPreco: 3.46 },
      { pesoMaxG: 900, tarifa: 3.95 },
      { pesoMaxG: 1400, tarifa: 4.21 },
      { pesoMaxG: 1900, tarifa: 4.27 },
      { pesoMaxG: 3900, tarifa: 5.50 },
    ] },
    pacotePadrao: { nome: "Pacote padrão", dim: [45, 34, 26], pesoUnidadeMaxG: 11900, pesoDimMaxG: 7960, faixas: [
      { pesoMaxG: 150, tarifa: 3.55 },
      { pesoMaxG: 400, tarifa: 3.77 },
      { pesoMaxG: 900, tarifa: 3.99 },
      { pesoMaxG: 1400, tarifa: 4.85 },
      { pesoMaxG: 1900, tarifa: 4.94 },
      { pesoMaxG: 2900, tarifa: 4.98 },
      { pesoMaxG: 3900, tarifa: 5.53 },
      { pesoMaxG: 5900, tarifa: 5.96 },
      { pesoMaxG: 8900, tarifa: 7.24 },
      { pesoMaxG: 11900, tarifa: 7.85 },
    ] },
    // Grandes e volumosos: tarifa base até 760 g e adicional por kg acima disso.
    grandes: [
      { nome: "Grande pequeno", dim: [61, 46, 46], pesoUnidadeMaxG: 1760, baseAteG: 760, tarifa: 5.68, adicionalKg: 0.04 },
      { nome: "Grande padrão leve", dim: [101, 60, 60], pesoUnidadeMaxG: 15000, baseAteG: 760, tarifa: 6.55, adicionalKg: 0.34 },
      { nome: "Grande padrão pesado", dim: [101, 60, 60], pesoUnidadeMaxG: 23000, baseAteG: 15760, tarifa: 11.72, adicionalKg: 0.27 },
      { nome: "Grande padrão grande", dim: [120, 60, 60], pesoUnidadeMaxG: 23000, baseAteG: 760, tarifa: 6.76, adicionalKg: 0.33 },
      { nome: "Volumoso", dim: [999, 999, 999], pesoUnidadeMaxG: 23000, baseAteG: 760, tarifa: 9.95, adicionalKg: 0.43 },
      { nome: "Pesado", dim: [999, 999, 999], pesoUnidadeMaxG: 31500, baseAteG: 31500, tarifa: 14.00, adicionalKg: 0.12 },
    ],
    baixoPreco: {
      precoMaxEuroComIva: 20, // a partir de 2026-01-05, exceto algumas categorias (a página também cita 12 EUR em uma FAQ: confirme)
      dimMaxCm: [35, 25, 12], pesoMaxG: 400,
      categoriasExcluidasIds: ["beleza", "escritorio", "mercado", "livros", "acess-amazon", "cozinha"],
      categoriasExcluidas: ["Beleza, saúde e cuidado pessoal", "Suprimentos empresariais, industriais e científicos", "Escritório", "Supermercado e gourmet", "Livros", "Acessórios para dispositivos Amazon", "Cozinha"],
    },
  },
  // Taxa fixa de EFN (envio da Espanha para a coluna CEP/IT/ES/FR) para referência. Valores da rate card, sem o encargo de 1,5%.
  efn: {
    nota: "Coluna 'CEP (DE/PL/CZ), IT, ES, FR' da rate card. Outras colunas (NL/BE, SE, PL, UK) têm valores diferentes.",
    faixas: [
      { nome: "Envelope leve ≤100 g", tarifa: 5.50 }, { nome: "Envelope padrão ≤460 g", tarifa: 5.53 },
      { nome: "Pacote pequeno ≤400 g", tarifa: 7.05 }, { nome: "Pacote pequeno ≤900 g", tarifa: 8.45 }, { nome: "Pacote pequeno ≤1,9 kg", tarifa: 10.58 },
      { nome: "Pacote padrão ≤400 g", tarifa: 7.73 }, { nome: "Pacote padrão ≤900 g", tarifa: 9.19 }, { nome: "Pacote padrão ≤1,9 kg", tarifa: 11.97 }, { nome: "Pacote padrão ≤3,9 kg", tarifa: 15.80 }, { nome: "Pacote padrão ≤11,9 kg", tarifa: 21.24 },
    ],
  },
  // Armazenamento FBA em EUR por m³ por mês (não perigosos). janSet = jan a set, outDez = out a dez.
  armazenamentoMesM3: {
    padraoGeral: { janSet: 27.54, outDez: 52.20 },
    padraoModa: { janSet: 19.99, outDez: 29.23, nota: "Roupa e acessórios, óculos, calçados, mochilas e bolsas." },
    grande: { janSet: 21.78, outDez: 34.49 },
    padraoPerigoso: { janSet: 30.00, outDez: 50.51 },
    grandePerigoso: { janSet: 27.50, outDez: 43.89 },
    estoqueLongoDias: 241,
    taxaUsoSemanas: 22,
  },
  pagamentos: { primeiroPagamentoDias: 14, ciclosDias: 7, nota: "Primeiro pagamento 14 dias após o registro; depois a cada 7 dias (página inicial da Amazon.es)." },
  incentivos: { nota: "A Amazon divulga incentivos para novos vendedores (créditos de anúncios, de envio e de cupom, e reembolso de 10% das primeiras vendas elegíveis de marca própria). Os valores e condições mudam: confira na página de novos vendedores.", reembolsoPct: 0.10 },
  observacoes: [
    "Preços na Amazon.es incluem IVA. As taxas da Amazon e os planos são informados sem IVA.",
    "A comissão por recomendação é calculada sobre o preço total, incluindo envio e embalagem para presente.",
    "O Prime do vendedor (SFP) custa 39 EUR por mês, com metas de prazo, rastreio e cancelamento.",
    "Roupa e acessórios tem uma regra adicional para preços acima de 45 EUR em seleções específicas: consulte a página de preços.",
    "Taxas de devolução, remoção, descarte, rotulagem e posicionamento de entrada não foram confirmadas aqui: use a calculadora de receitas da Amazon para esses itens.",
  ],
};
export function categoriaPorId(id) { return FEES.comissoesPorCategoria.find((c) => c.id === id) || null; }
