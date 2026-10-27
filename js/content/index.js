// Manifesto dos mundos (leve, carregado no boot) + carregamento sob demanda do conteúdo completo.
// Os testes garantem que ids e títulos aqui batem com js/content/worldN.js.
import { tr, idiomaAtual } from "../i18n/index.js";

export const MUNDOS = [
  { id: 1, slug: "vila-do-zero", titulo: tr("Vila do Zero"), subtitulo: tr("O que é vender na Amazon"), cor: "sol", cenario: "vila", emoji: "🏘️",
    chefe: { id: "nevoeiro", nome: tr("O Nevoeiro da Dúvida") },
    licoes: [
      { id: "1-1", titulo: tr("Como o marketplace funciona por dentro"), minutos: 6 },
      { id: "1-2", titulo: tr("Amazon.es e os mercados europeus"), minutos: 5 },
      { id: "1-3", titulo: tr("Marca própria e revenda: os dois caminhos principais"), minutos: 7 },
      { id: "1-4", titulo: tr("Arbitragem, dropshipping e outros caminhos"), minutos: 6 },
      { id: "1-5", titulo: tr("FBA, FBM e Prime: quem leva a caixa até o cliente"), minutos: 6 },
      { id: "1-6", titulo: tr("O time do dono: o que delegar"), minutos: 5 },
    ] },
  { id: 2, slug: "porto-da-papelada", titulo: tr("Porto da Papelada"), subtitulo: tr("Empresa, impostos e conta"), cor: "mar", cenario: "porto", emoji: "⚓",
    chefe: { id: "burocratio", nome: tr("Burocrátio, o Carimbador") },
    licoes: [
      { id: "2-1", titulo: tr("NIE, TIE e NIF: existir para a Hacienda"), minutos: 6 },
      { id: "2-2", titulo: tr("Autónomo ou SL?"), minutos: 7 },
      { id: "2-3", titulo: tr("Vender a partir de uma empresa de fora"), minutos: 6 },
      { id: "2-4", titulo: tr("IVA na Espanha: tipos, declarações e recargo"), minutos: 8 },
      { id: "2-5", titulo: tr("Vendendo para a UE: OSS e o limite de 10 mil"), minutos: 6 },
      { id: "2-6", titulo: tr("EORI, verificação e abertura da conta"), minutos: 7 },
      { id: "2-7", titulo: tr("Regras do produto: CE, GPSR e EPR"), minutos: 8 },
    ] },
  { id: 3, slug: "floresta-da-curadoria", titulo: tr("Floresta da Curadoria"), subtitulo: tr("Escolhendo produtos vencedores"), cor: "oliva", cenario: "floresta", emoji: "🌳",
    chefe: { id: "hidra", nome: tr("A Hidra das Tendências") },
    licoes: [
      { id: "3-1", titulo: tr("Os critérios de um bom produto inicial"), minutos: 7 },
      { id: "3-2", titulo: tr("Lendo os sinais de demanda"), minutos: 7 },
      { id: "3-3", titulo: tr("Restrições, proibidos e produtos perigosos"), minutos: 6 },
      { id: "3-4", titulo: tr("Palavras-chave em espanhol da Espanha"), minutos: 5 },
      { id: "3-5", titulo: tr("Diferenciar: reviews negativas e kits"), minutos: 5 },
      { id: "3-6", titulo: tr("Minigame: escolha o vencedor"), minutos: 5 },
    ] },
  { id: 4, slug: "mercado-dos-fornecedores", titulo: tr("Mercado dos Fornecedores"), subtitulo: tr("Fabricar, importar e chegar ao armazém"), cor: "tomate", cenario: "mercado", emoji: "🚢",
    chefe: { id: "capitao-container", nome: tr("Capitão Container") },
    licoes: [
      { id: "4-1", titulo: tr("Onde encontrar fornecedores"), minutos: 6 },
      { id: "4-2", titulo: tr("Amostras, MOQ, contrato e inspeção"), minutos: 7 },
      { id: "4-3", titulo: tr("Frete e Incoterms"), minutos: 7 },
      { id: "4-4", titulo: tr("Aduana da UE: TARIC, DUA e IVA de importação"), minutos: 8 },
      { id: "4-5", titulo: tr("Preparar e enviar ao armazém"), minutos: 7 },
    ] },
  { id: 5, slug: "cidadela-das-taxas", titulo: tr("Cidadela das Taxas"), subtitulo: tr("Quanto sobra no bolso"), cor: "sol", cenario: "cidadela", emoji: "🏰",
    chefe: { id: "contador-voraz", nome: tr("O Contador Voraz") },
    licoes: [
      { id: "5-1", titulo: tr("O mapa de todas as taxas"), minutos: 8 },
      { id: "5-2", titulo: tr("Estoque só na Espanha, EFN ou Pan-EU"), minutos: 6 },
      { id: "5-3", titulo: tr("Os custos que ficam fora da Amazon"), minutos: 5 },
      { id: "5-4", titulo: tr("Fazendo a conta completa, passo a passo"), minutos: 8 },
      { id: "5-5", titulo: tr("Fluxo de caixa: quando o dinheiro volta"), minutos: 6 },
    ] },
  { id: 6, slug: "torre-da-vitrine", titulo: tr("Torre da Vitrine"), subtitulo: tr("Listagem que vende"), cor: "uva", cenario: "torre", emoji: "🗼",
    chefe: { id: "esfinge", nome: tr("Esfinge do Algoritmo") },
    licoes: [
      { id: "6-1", titulo: tr("Anatomia de uma página de produto"), minutos: 7 },
      { id: "6-2", titulo: tr("Imagens que vendem e passam na regra"), minutos: 6 },
      { id: "6-3", titulo: tr("Copy em espanhol da Espanha"), minutos: 6 },
      { id: "6-4", titulo: tr("Marca registrada e Brand Registry"), minutos: 8 },
      { id: "6-5", titulo: tr("GTIN, EAN e GS1"), minutos: 5 },
    ] },
  { id: 7, slug: "arena-do-lancamento", titulo: tr("Arena do Lançamento"), subtitulo: tr("Primeiras vendas e anúncios"), cor: "tomate", cenario: "arena", emoji: "🏟️",
    chefe: { id: "drakon", nome: tr("Drakón do CPC") },
    licoes: [
      { id: "7-1", titulo: tr("Estratégia de lançamento"), minutos: 6 },
      { id: "7-2", titulo: tr("Avaliações: o que pode e o que não pode"), minutos: 6 },
      { id: "7-3", titulo: tr("Amazon Ads: os três tipos de anúncio"), minutos: 7 },
      { id: "7-4", titulo: tr("ACoS, TACoS e companhia: a matemática dos anúncios"), minutos: 7 },
      { id: "7-5", titulo: tr("Tráfego externo e como contratar um gestor de PPC"), minutos: 6 },
    ] },
  { id: 8, slug: "montanha-das-operacoes", titulo: tr("Montanha das Operações"), subtitulo: tr("Manter a conta saudável e escalar"), cor: "mar", cenario: "montanha", emoji: "⛰️",
    chefe: { id: "auditor", nome: tr("O Auditor Sombrio") },
    licoes: [
      { id: "8-1", titulo: tr("Saúde da conta: os números que importam"), minutos: 7 },
      { id: "8-2", titulo: tr("Suspensões, plano de ação e apelação"), minutos: 7 },
      { id: "8-3", titulo: tr("Gestão de estoque e picos do ano"), minutos: 7 },
      { id: "8-4", titulo: tr("Atendimento e devoluções"), minutos: 6 },
      { id: "8-5", titulo: tr("A rotina semanal de 30 minutos do dono"), minutos: 6 },
    ] },
  { id: 9, slug: "coroa-da-europa", titulo: tr("Coroa da Europa"), subtitulo: tr("Expansão e o Chefão"), cor: "uva", cenario: "coroa", emoji: "👑",
    chefe: { id: "chefao", nome: tr("O CHEFÃO DAS VENDAS"), final: true },
    licoes: [
      { id: "9-1", titulo: tr("Quando é a hora de expandir"), minutos: 5 },
      { id: "9-2", titulo: tr("Construir listagens internacionais"), minutos: 6 },
      { id: "9-3", titulo: tr("Logística e IVA por país"), minutos: 8 },
      { id: "9-4", titulo: tr("Os mercados europeus, um a um"), minutos: 7 },
      { id: "9-5", titulo: tr("Escalar e, quem sabe, vender o negócio"), minutos: 6 },
    ] },
];

export const TODOS_CHEFES = MUNDOS.map((m) => m.chefe.id);
export function mundoPorId(id) { return MUNDOS.find((m) => m.id === Number(id)) || null; }
export function mundoDaLicao(licaoId) { return MUNDOS.find((m) => m.licoes.some((l) => l.id === licaoId)) || null; }
export function licaoMeta(licaoId) {
  for (const m of MUNDOS) { const l = m.licoes.find((x) => x.id === licaoId); if (l) return { mundo: m, licao: l }; }
  return null;
}
export const TOTAL_LICOES = MUNDOS.reduce((a, m) => a + m.licoes.length, 0);

const cache = new Map();
/** Carrega o conteúdo completo do mundo (cards, quizzes, chefe). */
export function carregarMundo(id) {
  const n = Number(id);
  if (!cache.has(n)) {
    const lang = idiomaAtual();
    const carregar = lang === "pt" ? import(`./world${n}.js`) : import(`./${lang}/world${n}.js`).catch(() => import(`./world${n}.js`));
    cache.set(n, carregar.then((m) => m.default).catch((e) => { cache.delete(n); throw e; }));
  }
  return cache.get(n);
}

/* ---- progresso (puro, sobre o save) ---- */
export function mundoConcluidoLicoes(save, mundo) {
  return mundo.licoes.every((l) => save.licoes[l.id] && save.licoes[l.id].concluida);
}
export function mundoDerrotado(save, mundo) {
  return !!(save.chefes[mundo.chefe.id] && save.chefes[mundo.chefe.id].derrotado);
}
/** Mundo liberado = primeiro, ou chefe do anterior derrotado (ou modo livre). */
export function mundoLiberado(save, mundo) {
  if (save.config.modoLivre) return true;
  if (mundo.id === 1) return true;
  const anterior = MUNDOS[mundo.id - 2];
  return mundoDerrotado(save, anterior);
}
export function licaoLiberada(save, mundo, licaoId) {
  if (!mundoLiberado(save, mundo)) return false;
  if (save.config.modoLivre) return true;
  const i = mundo.licoes.findIndex((l) => l.id === licaoId);
  if (i <= 0) return i === 0;
  const anterior = mundo.licoes[i - 1];
  return !!(save.licoes[anterior.id] && save.licoes[anterior.id].concluida);
}
export function chefeLiberado(save, mundo) {
  if (!mundoLiberado(save, mundo)) return false;
  if (save.config.modoLivre) return true;
  return mundoConcluidoLicoes(save, mundo);
}
export function progressoMundo(save, mundo) {
  const feitas = mundo.licoes.filter((l) => save.licoes[l.id] && save.licoes[l.id].concluida).length;
  return { feitas, total: mundo.licoes.length, derrotado: mundoDerrotado(save, mundo), fracao: (feitas + (mundoDerrotado(save, mundo) ? 1 : 0)) / (mundo.licoes.length + 1) };
}

/** Próxima ação recomendada para o jogador (puro). */
export function proximoPasso(save) {
  const ult = save.ultimo && save.ultimo.licao;
  if (ult) {
    const meta = licaoMeta(ult);
    if (meta && !(save.licoes[ult] && save.licoes[ult].concluida) && licaoLiberada(save, meta.mundo, ult)) {
      return { tipo: "licao", id: ult, mundo: meta.mundo, titulo: meta.licao.titulo, retomar: true };
    }
  }
  for (const m of MUNDOS) {
    if (!mundoLiberado(save, m)) break;
    for (const l of m.licoes) {
      if (!(save.licoes[l.id] && save.licoes[l.id].concluida)) return { tipo: "licao", id: l.id, mundo: m, titulo: l.titulo };
    }
    if (!mundoDerrotado(save, m)) return { tipo: "chefe", id: m.chefe.id, mundo: m, titulo: m.chefe.nome };
  }
  return { tipo: "fim", id: "", mundo: MUNDOS[MUNDOS.length - 1], titulo: tr("Jornada completa") };
}
export function chefePorId(id) {
  const m = MUNDOS.find((x) => x.chefe.id === id);
  return m ? { mundo: m, chefe: m.chefe } : null;
}
