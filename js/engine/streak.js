// Sequência de dias com "escudo" (perdoa 1 dia perdido por semana). Puro.

function paraUTC(iso) {
  const [a, m, d] = iso.split("-").map(Number);
  return Date.UTC(a, m - 1, d);
}
export function diasEntre(a, b) {
  return Math.round((paraUTC(b) - paraUTC(a)) / 86400000);
}
/** Identificador da semana ISO (segunda a domingo) no formato AAAA-Www. */
export function semanaISO(iso) {
  const dt = new Date(paraUTC(iso));
  const dia = (dt.getUTCDay() + 6) % 7; // 0 = segunda
  dt.setUTCDate(dt.getUTCDate() - dia + 3); // quinta da semana
  const ano = dt.getUTCFullYear();
  const jan4 = new Date(Date.UTC(ano, 0, 4));
  const sem = 1 + Math.round(((dt - jan4) / 86400000 - 3 + ((jan4.getUTCDay() + 6) % 7)) / 7);
  return `${ano}-W${String(sem).padStart(2, "0")}`;
}

/**
 * Registra atividade em `hoje`. Retorna { streak, evento }.
 * eventos: "primeiro" | "mantido" (já jogou hoje) | "incrementou" | "escudo" | "quebrou"
 */
export function registrarDia(streak, hoje) {
  const s = { atual: 0, melhor: 0, ultimoDia: "", escudos: 1, escudoSemana: "", ...streak };
  const sem = semanaISO(hoje);
  if (s.escudoSemana !== sem) { s.escudos = 1; s.escudoSemana = sem; }
  let evento;
  if (!s.ultimoDia) { s.atual = 1; evento = "primeiro"; }
  else {
    const gap = diasEntre(s.ultimoDia, hoje);
    if (gap <= 0) evento = "mantido";
    else if (gap === 1) { s.atual += 1; evento = "incrementou"; }
    else if (gap === 2 && s.escudos > 0) { s.escudos -= 1; s.atual += 1; evento = "escudo"; }
    else { s.atual = 1; evento = "quebrou"; }
  }
  if (evento !== "mantido") s.ultimoDia = hoje;
  if (s.atual > s.melhor) s.melhor = s.atual;
  return { streak: s, evento };
}

/** A sequência está "viva" hoje? (para o HUD: chama apagada se já perdeu). */
export function streakViva(streak, hoje) {
  if (!streak || !streak.ultimoDia) return false;
  const gap = diasEntre(streak.ultimoDia, hoje);
  return gap <= 1 || (gap === 2 && streak.escudos > 0);
}
