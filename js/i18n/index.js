// Idiomas da interface. Estilo "gettext": a chave é o próprio texto em português,
// então português não precisa de dicionário e qualquer texto sem tradução cai no original.
// Variáveis: t("Olá, {nome}!", { nome: "Ana" }).

export const IDIOMAS = [
  { id: "pt", nome: "Português", curto: "PT", html: "pt-BR", local: "pt-BR" },
  { id: "es", nome: "Español", curto: "ES", html: "es-ES", local: "es-ES" },
  { id: "en", nome: "English", curto: "EN", html: "en", local: "en-GB" },
];

let atual = "pt";
let dic = {};

/** Idioma sugerido pelo navegador (pt, es ou en; outros caem em pt). */
export function detectarIdioma() {
  const langs = (typeof navigator !== "undefined" && (navigator.languages || [navigator.language])) || [];
  for (const l of langs) {
    const base = String(l || "").slice(0, 2).toLowerCase();
    if (IDIOMAS.some((i) => i.id === base)) return base;
  }
  return "pt";
}

/** Carrega o dicionário do idioma (pt não tem dicionário). */
export async function definirIdioma(id) {
  const info = IDIOMAS.find((i) => i.id === id) || IDIOMAS[0];
  atual = info.id;
  dic = atual === "pt" ? {} : (await import(`./${atual}.js`)).default;
  if (typeof document !== "undefined") document.documentElement.lang = info.html;
  return atual;
}

/** Só para testes: injeta um dicionário diretamente. */
export function _definirDicionario(id, d) { atual = id; dic = d || {}; }

export function idiomaAtual() { return atual; }
export function localAtual() { return (IDIOMAS.find((i) => i.id === atual) || IDIOMAS[0]).local; }

export function t(texto, vars) {
  let s = (atual !== "pt" && dic[texto]) || texto;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
  return s;
}

/** Escolhe a forma singular/plural: tn("{n} lição", "{n} lições", n). */
export function tn(singular, plural, n, vars = {}) {
  return t(n === 1 ? singular : plural, { n, ...vars });
}
