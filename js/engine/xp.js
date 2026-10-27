// Curva de níveis e títulos. Puro.

/** XP necessário para sair do nível n e ir para o n+1: round(100 * n^1.5). */
export function xpParaNivel(n) {
  return Math.round(100 * Math.pow(Math.max(1, n), 1.5));
}

/** XP acumulado necessário para ENTRAR no nível n (nível 1 = 0). */
export function xpAcumuladoDoNivel(n) {
  let t = 0;
  for (let i = 1; i < n; i++) t += xpParaNivel(i);
  return t;
}

export function infoNivel(xpTotal) {
  const xp = Math.max(0, Math.floor(xpTotal || 0));
  let nivel = 1;
  let resto = xp;
  while (resto >= xpParaNivel(nivel)) {
    resto -= xpParaNivel(nivel);
    nivel++;
    if (nivel > 999) break;
  }
  const precisa = xpParaNivel(nivel);
  return { nivel, xpNoNivel: resto, xpNecessario: precisa, progresso: precisa ? resto / precisa : 0, titulo: tituloDoNivel(nivel) };
}

export const TITULOS = [
  { de: 1, nome: "Novato Curioso" },
  { de: 3, nome: "Aprendiz de Vendedor" },
  { de: 4, nome: "Caçador de Produtos" },
  { de: 5, nome: "Importador" },
  { de: 6, nome: "Estrategista de Margens" },
  { de: 7, nome: "Mestre da Vitrine" },
  { de: 8, nome: "Rei do Lançamento" },
  { de: 9, nome: "Operador de Elite" },
  { de: 10, nome: "Lenda Europeia" },
];

export function tituloDoNivel(n) {
  let t = TITULOS[0].nome;
  for (const x of TITULOS) if (n >= x.de) t = x.nome;
  return t;
}

/** Faixa visual do avatar: 0 mochila, 1 maleta, 2 coroa. */
export function acessorioDeNivel(n) {
  if (n >= 10) return "coroa";
  if (n >= 5) return "maleta";
  return "mochila";
}
