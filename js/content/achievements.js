// Conquistas (30). `regra` recebe { save } e devolve boolean. raridade: bronze | prata | ouro | epica
import { contarLicoesConcluidas, contarMissoes } from "../engine/rewards.js";
import { infoNivel } from "../engine/xp.js";
import { TOTAL_LICOES } from "./index.js";

const boss = (id) => ({ save }) => !!(save.chefes[id] && save.chefes[id].derrotado);
const licoes = (n) => ({ save }) => contarLicoesConcluidas(save) >= n;

export const CONQUISTAS = [
  { id: "primeira-licao", nome: "Primeiro passo", desc: "Conclua sua primeira lição.", icone: "estrela", raridade: "bronze", regra: licoes(1) },
  { id: "cinco-licoes", nome: "Pegando o ritmo", desc: "Conclua 5 lições.", icone: "estrela", raridade: "bronze", regra: licoes(5) },
  { id: "dez-licoes", nome: "Aluno aplicado", desc: "Conclua 10 lições.", icone: "glossario", raridade: "prata", regra: licoes(10) },
  { id: "vinte-e-cinco-licoes", nome: "Meio caminho andado", desc: "Conclua 25 lições.", icone: "glossario", raridade: "prata", regra: licoes(25) },
  { id: "todas-licoes", nome: "Diploma da jornada", desc: "Conclua todas as lições.", icone: "trofeu", raridade: "epica", regra: ({ save }) => contarLicoesConcluidas(save) >= TOTAL_LICOES },

  { id: "streak-3", nome: "Três em linha", desc: "Estude 3 dias seguidos.", icone: "chama", raridade: "bronze", regra: ({ save }) => save.streak.melhor >= 3 },
  { id: "streak-7", nome: "Semana de fogo", desc: "Estude 7 dias seguidos.", icone: "chama", raridade: "prata", regra: ({ save }) => save.streak.melhor >= 7 },
  { id: "streak-30", nome: "Hábito de ferro", desc: "Estude 30 dias seguidos.", icone: "chama", raridade: "ouro", regra: ({ save }) => save.streak.melhor >= 30 },

  { id: "quiz-perfeito", nome: "Sem errar nenhuma", desc: "Acerte um quiz inteiro de primeira.", icone: "check", raridade: "bronze", regra: ({ save }) => save.contadores.perfeitos >= 1 },
  { id: "cinco-perfeitos", nome: "Mão de ouro", desc: "5 quizzes perfeitos.", icone: "check", raridade: "prata", regra: ({ save }) => save.contadores.perfeitos >= 5 },
  { id: "quinze-perfeitos", nome: "Gênio dos quizzes", desc: "15 quizzes perfeitos.", icone: "check", raridade: "ouro", regra: ({ save }) => save.contadores.perfeitos >= 15 },

  { id: "primeira-margem", nome: "Primeira conta", desc: "Calcule sua primeira margem na Oficina.", icone: "oficina", raridade: "bronze", regra: ({ save }) => save.contadores.margens >= 1 },
  { id: "dez-margens", nome: "Calculadora humana", desc: "Calcule 10 margens.", icone: "oficina", raridade: "prata", regra: ({ save }) => save.contadores.margens >= 10 },
  { id: "cenario-salvo", nome: "Arquivista", desc: "Salve um cenário de cálculo.", icone: "disco", raridade: "bronze", regra: ({ save }) => save.cenarios.length >= 1 },

  { id: "boss-nevoeiro", nome: "Dissipou a dúvida", desc: "Derrote o Nevoeiro da Dúvida.", icone: "espada", raridade: "bronze", regra: boss("nevoeiro") },
  { id: "boss-burocratio", nome: "Carimbo na testa", desc: "Derrote Burocrátio, o Carimbador.", icone: "espada", raridade: "bronze", regra: boss("burocratio") },
  { id: "boss-hidra", nome: "Cortou três cabeças", desc: "Derrote a Hidra das Tendências.", icone: "espada", raridade: "prata", regra: boss("hidra") },
  { id: "boss-capitao-container", nome: "Lobo do mar", desc: "Derrote o Capitão Container.", icone: "espada", raridade: "prata", regra: boss("capitao-container") },
  { id: "boss-contador-voraz", nome: "Margem protegida", desc: "Derrote o Contador Voraz.", icone: "espada", raridade: "prata", regra: boss("contador-voraz") },
  { id: "boss-esfinge", nome: "Decifrou o enigma", desc: "Derrote a Esfinge do Algoritmo.", icone: "espada", raridade: "ouro", regra: boss("esfinge") },
  { id: "boss-drakon", nome: "Domador de dragões", desc: "Derrote o Drakón do CPC.", icone: "espada", raridade: "ouro", regra: boss("drakon") },
  { id: "boss-auditor", nome: "Conta blindada", desc: "Derrote o Auditor Sombrio.", icone: "espada", raridade: "ouro", regra: boss("auditor") },
  { id: "boss-chefao", nome: "Coroa da Europa", desc: "Derrote o CHEFÃO DAS VENDAS.", icone: "trofeu", raridade: "epica", regra: boss("chefao") },

  { id: "missao-1", nome: "Mão na massa", desc: "Conclua sua primeira missão da vida real.", icone: "missoes", raridade: "bronze", regra: ({ save }) => contarMissoes(save) >= 1 },
  { id: "missao-10", nome: "Empresário em campo", desc: "Conclua 10 missões da vida real.", icone: "missoes", raridade: "prata", regra: ({ save }) => contarMissoes(save) >= 10 },
  { id: "missao-25", nome: "Negócio de verdade", desc: "Conclua 25 missões da vida real.", icone: "missoes", raridade: "ouro", regra: ({ save }) => contarMissoes(save) >= 25 },

  { id: "glossario-20", nome: "Poliglota de planilha", desc: "Abra 20 termos do glossário.", icone: "glossario", raridade: "bronze", regra: ({ save }) => save.contadores.glossario >= 20 },
  { id: "nivel-5", nome: "Importador de respeito", desc: "Chegue ao nível 5.", icone: "estrela", raridade: "prata", regra: ({ save }) => infoNivel(save.xp).nivel >= 5 },
  { id: "nivel-10", nome: "Lenda Europeia", desc: "Chegue ao nível 10.", icone: "trofeu", raridade: "ouro", regra: ({ save }) => infoNivel(save.xp).nivel >= 10 },
  { id: "primeira-compra", nome: "Cliente do Caixote", desc: "Compre um item na loja.", icone: "loja", raridade: "bronze", regra: ({ save }) => save.jogador.avatar.itensLoja.length >= 1 },
];

export const RARIDADES = { bronze: { nome: "Bronze", cor: "#CD7F32" }, prata: { nome: "Prata", cor: "#B8C2CC" }, ouro: { nome: "Ouro", cor: "#FFC23C" }, epica: { nome: "Épica", cor: "#8B5CF6" } };
export function conquistaPorId(id) { return CONQUISTAS.find((c) => c.id === id); }
