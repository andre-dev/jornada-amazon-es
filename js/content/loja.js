// Loja do Caixote: itens cosméticos (nada pago). tipo = slot de equipamento.
export const LOJA = [
  { id: "chapeu-viseira", tipo: "chapeu", nome: "Viseira de planilhas", preco: 40, emoji: "🧢" },
  { id: "chapeu-boina", tipo: "chapeu", nome: "Boina madrilenha", preco: 60, emoji: "🎩" },
  { id: "chapeu-capitao", tipo: "chapeu", nome: "Chapéu de capitão", preco: 90, emoji: "⚓" },
  { id: "chapeu-cartola", tipo: "chapeu", nome: "Cartola dourada", preco: 140, emoji: "🎩" },
  { id: "chapeu-coroa", tipo: "chapeu", nome: "Coroa de papelão", preco: 200, emoji: "👑" },
  { id: "fundo-solpoente", tipo: "fundo", nome: "Pôr do sol em Madrid", preco: 50, emoji: "🌇" },
  { id: "fundo-mediterraneo", tipo: "fundo", nome: "Mediterrâneo", preco: 50, emoji: "🌊" },
  { id: "fundo-noite", tipo: "fundo", nome: "Noite estrelada", preco: 80, emoji: "🌌" },
  { id: "fundo-jardim", tipo: "fundo", nome: "Jardim do Retiro", preco: 60, emoji: "🌿" },
  { id: "fundo-confete", tipo: "fundo", nome: "Dia de festa", preco: 110, emoji: "🎊" },
  { id: "confete-moedas", tipo: "confete", nome: "Chuva de moedas", preco: 100, emoji: "🪙" },
  { id: "confete-estrelas", tipo: "confete", nome: "Chuva de estrelas", preco: 100, emoji: "⭐" },
  { id: "confete-europa", tipo: "confete", nome: "Confete europeu", preco: 150, emoji: "🇪🇺" },
];
export const SLOTS = { chapeu: "Chapéus", fundo: "Fundos do perfil", confete: "Efeitos de confete" };
export function itemPorId(id) { return LOJA.find((i) => i.id === id) || null; }
