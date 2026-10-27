// Loja do Caixote: itens cosméticos (nada pago). tipo = slot de equipamento.
import { tr } from "../i18n/index.js";
export const LOJA = [
  { id: "chapeu-viseira", tipo: "chapeu", nome: tr("Viseira de planilhas"), preco: 40, emoji: "🧢" },
  { id: "chapeu-boina", tipo: "chapeu", nome: tr("Boina madrilenha"), preco: 60, emoji: "🎩" },
  { id: "chapeu-capitao", tipo: "chapeu", nome: tr("Chapéu de capitão"), preco: 90, emoji: "⚓" },
  { id: "chapeu-cartola", tipo: "chapeu", nome: tr("Cartola dourada"), preco: 140, emoji: "🎩" },
  { id: "chapeu-coroa", tipo: "chapeu", nome: tr("Coroa de papelão"), preco: 200, emoji: "👑" },
  { id: "fundo-solpoente", tipo: "fundo", nome: tr("Pôr do sol em Madrid"), preco: 50, emoji: "🌇" },
  { id: "fundo-mediterraneo", tipo: "fundo", nome: tr("Mediterrâneo"), preco: 50, emoji: "🌊" },
  { id: "fundo-noite", tipo: "fundo", nome: tr("Noite estrelada"), preco: 80, emoji: "🌌" },
  { id: "fundo-jardim", tipo: "fundo", nome: tr("Jardim do Retiro"), preco: 60, emoji: "🌿" },
  { id: "fundo-confete", tipo: "fundo", nome: tr("Dia de festa"), preco: 110, emoji: "🎊" },
  { id: "confete-moedas", tipo: "confete", nome: tr("Chuva de moedas"), preco: 100, emoji: "🪙" },
  { id: "confete-estrelas", tipo: "confete", nome: tr("Chuva de estrelas"), preco: 100, emoji: "⭐" },
  { id: "confete-europa", tipo: "confete", nome: tr("Confete europeu"), preco: 150, emoji: "🇪🇺" },
];
export const SLOTS = { chapeu: tr("Chapéus"), fundo: tr("Fundos do perfil"), confete: tr("Efeitos de confete") };
export function itemPorId(id) { return LOJA.find((i) => i.id === id) || null; }
