// Conquistas (30). `regra` recebe { save } e devolve boolean. raridade: bronze | prata | ouro | epica
import { tr } from "../i18n/index.js";
import { contarLicoesConcluidas, contarMissoes } from "../engine/rewards.js";
import { infoNivel } from "../engine/xp.js";
import { TOTAL_LICOES } from "./index.js";

const boss = (id) => ({ save }) => !!(save.chefes[id] && save.chefes[id].derrotado);
const licoes = (n) => ({ save }) => contarLicoesConcluidas(save) >= n;

export const CONQUISTAS = [
  { id: "primeira-licao", nome: tr("Primeiro passo"), desc: tr("Conclua sua primeira lição."), icone: "estrela", raridade: "bronze", regra: licoes(1) },
  { id: "cinco-licoes", nome: tr("Pegando o ritmo"), desc: tr("Conclua 5 lições."), icone: "estrela", raridade: "bronze", regra: licoes(5) },
  { id: "dez-licoes", nome: tr("Aluno aplicado"), desc: tr("Conclua 10 lições."), icone: "glossario", raridade: "prata", regra: licoes(10) },
  { id: "vinte-e-cinco-licoes", nome: tr("Meio caminho andado"), desc: tr("Conclua 25 lições."), icone: "glossario", raridade: "prata", regra: licoes(25) },
  { id: "todas-licoes", nome: tr("Diploma da jornada"), desc: tr("Conclua todas as lições."), icone: "trofeu", raridade: "epica", regra: ({ save }) => contarLicoesConcluidas(save) >= TOTAL_LICOES },

  { id: "streak-3", nome: tr("Três em linha"), desc: tr("Estude 3 dias seguidos."), icone: "chama", raridade: "bronze", regra: ({ save }) => save.streak.melhor >= 3 },
  { id: "streak-7", nome: tr("Semana de fogo"), desc: tr("Estude 7 dias seguidos."), icone: "chama", raridade: "prata", regra: ({ save }) => save.streak.melhor >= 7 },
  { id: "streak-30", nome: tr("Hábito de ferro"), desc: tr("Estude 30 dias seguidos."), icone: "chama", raridade: "ouro", regra: ({ save }) => save.streak.melhor >= 30 },

  { id: "quiz-perfeito", nome: tr("Sem errar nenhuma"), desc: tr("Acerte um quiz inteiro de primeira."), icone: "check", raridade: "bronze", regra: ({ save }) => save.contadores.perfeitos >= 1 },
  { id: "cinco-perfeitos", nome: tr("Mão de ouro"), desc: tr("5 quizzes perfeitos."), icone: "check", raridade: "prata", regra: ({ save }) => save.contadores.perfeitos >= 5 },
  { id: "quinze-perfeitos", nome: tr("Gênio dos quizzes"), desc: tr("15 quizzes perfeitos."), icone: "check", raridade: "ouro", regra: ({ save }) => save.contadores.perfeitos >= 15 },

  { id: "primeira-margem", nome: tr("Primeira conta"), desc: tr("Calcule sua primeira margem na Oficina."), icone: "oficina", raridade: "bronze", regra: ({ save }) => save.contadores.margens >= 1 },
  { id: "dez-margens", nome: tr("Calculadora humana"), desc: tr("Calcule 10 margens."), icone: "oficina", raridade: "prata", regra: ({ save }) => save.contadores.margens >= 10 },
  { id: "cenario-salvo", nome: tr("Arquivista"), desc: tr("Salve um cenário de cálculo."), icone: "disco", raridade: "bronze", regra: ({ save }) => save.cenarios.length >= 1 },

  { id: "boss-nevoeiro", nome: tr("Dissipou a dúvida"), desc: tr("Derrote o Nevoeiro da Dúvida."), icone: "espada", raridade: "bronze", regra: boss("nevoeiro") },
  { id: "boss-burocratio", nome: tr("Carimbo na testa"), desc: tr("Derrote Burocrátio, o Carimbador."), icone: "espada", raridade: "bronze", regra: boss("burocratio") },
  { id: "boss-hidra", nome: tr("Cortou três cabeças"), desc: tr("Derrote a Hidra das Tendências."), icone: "espada", raridade: "prata", regra: boss("hidra") },
  { id: "boss-capitao-container", nome: tr("Lobo do mar"), desc: tr("Derrote o Capitão Container."), icone: "espada", raridade: "prata", regra: boss("capitao-container") },
  { id: "boss-contador-voraz", nome: tr("Margem protegida"), desc: tr("Derrote o Contador Voraz."), icone: "espada", raridade: "prata", regra: boss("contador-voraz") },
  { id: "boss-esfinge", nome: tr("Decifrou o enigma"), desc: tr("Derrote a Esfinge do Algoritmo."), icone: "espada", raridade: "ouro", regra: boss("esfinge") },
  { id: "boss-drakon", nome: tr("Domador de dragões"), desc: tr("Derrote o Drakón do CPC."), icone: "espada", raridade: "ouro", regra: boss("drakon") },
  { id: "boss-auditor", nome: tr("Conta blindada"), desc: tr("Derrote o Auditor Sombrio."), icone: "espada", raridade: "ouro", regra: boss("auditor") },
  { id: "boss-chefao", nome: tr("Coroa da Europa"), desc: tr("Derrote o CHEFÃO DAS VENDAS."), icone: "trofeu", raridade: "epica", regra: boss("chefao") },

  { id: "missao-1", nome: tr("Mão na massa"), desc: tr("Conclua sua primeira missão da vida real."), icone: "missoes", raridade: "bronze", regra: ({ save }) => contarMissoes(save) >= 1 },
  { id: "missao-10", nome: tr("Empresário em campo"), desc: tr("Conclua 10 missões da vida real."), icone: "missoes", raridade: "prata", regra: ({ save }) => contarMissoes(save) >= 10 },
  { id: "missao-25", nome: tr("Negócio de verdade"), desc: tr("Conclua 25 missões da vida real."), icone: "missoes", raridade: "ouro", regra: ({ save }) => contarMissoes(save) >= 25 },

  { id: "glossario-20", nome: tr("Poliglota de planilha"), desc: tr("Abra 20 termos do glossário."), icone: "glossario", raridade: "bronze", regra: ({ save }) => save.contadores.glossario >= 20 },
  { id: "nivel-5", nome: tr("Importador de respeito"), desc: tr("Chegue ao nível 5."), icone: "estrela", raridade: "prata", regra: ({ save }) => infoNivel(save.xp).nivel >= 5 },
  { id: "nivel-10", nome: tr("Lenda Europeia"), desc: tr("Chegue ao nível 10."), icone: "trofeu", raridade: "ouro", regra: ({ save }) => infoNivel(save.xp).nivel >= 10 },
  { id: "primeira-compra", nome: tr("Cliente do Caixote"), desc: tr("Compre um item na loja."), icone: "loja", raridade: "bronze", regra: ({ save }) => save.jogador.avatar.itensLoja.length >= 1 },
];

export const RARIDADES = { bronze: { nome: tr("Bronze"), cor: "#CD7F32" }, prata: { nome: tr("Prata"), cor: "#B8C2CC" }, ouro: { nome: tr("Ouro"), cor: "#FFC23C" }, epica: { nome: tr("Épica"), cor: "#8B5CF6" } };
export function conquistaPorId(id) { return CONQUISTAS.find((c) => c.id === id); }
