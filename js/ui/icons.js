// Ícones SVG originais (traço grosso, estilo adesivo). Sem marcas de terceiros.
import { svgDeString } from "./dom.js";

const P = {
  mapa: '<path d="M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2z"/><path d="M9 4v14M15 6v14"/>',
  oficina: '<path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z"/>',
  missoes: '<path d="M6 21V4"/><path d="M6 5h11l-2 4 2 4H6"/>',
  glossario: '<path d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M8 8h6M8 12h5"/>',
  perfil: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  moeda: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.6-1-1.7-1.5-3-1.5-1.8 0-3 1.2-3 4s1.2 4 3 4c1.3 0 2.4-.5 3-1.5M8 11h5M8 13h5"/>',
  chama: '<path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z"/>',
  coracao: '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
  estrela: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  cadeado: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  seta: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  voltar: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  nuvem: '<path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1A4.5 4.5 0 0 1 17 18z"/>',
  disco: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>',
  relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  lampada: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.6 1 1.3 1 2.1h5c0-.8.3-1.5 1-2.1A6 6 0 0 0 12 3z"/>',
  alerta: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
  pessoas: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.7-3.5 3-5 6.5-5s5.8 1.5 6.5 5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14.5c2.5 0 4 1.3 4.5 4"/>',
  lupa: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
  loja: '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9"/><path d="M5 12v8h14v-8"/>',
  trofeu: '<path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H4c0 3 1.5 4.5 4 4.5M16 6h4c0 3-1.5 4.5-4 4.5M12 14v4M8 21h8M9.5 18h5"/>',
  espada: '<path d="M14 4l6-1-1 6-9 9-3-3zM7 14l-3 3 3 3 3-3M5.5 18.5L3 21"/>',
  sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  lua: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/>',
  som: '<path d="M4 9v6h4l5 4V5L8 9zM16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>',
  mudo: '<path d="M4 9v6h4l5 4V5L8 9zM17 9l5 6M22 9l-5 6"/>',
  mais: '<path d="M12 5v14M5 12h14"/>',
  baixo: '<path d="M6 9l6 6 6-6"/>',
  cima: '<path d="M6 15l6-6 6 6"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  upload: '<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  casa: '<path d="M4 11l8-7 8 7M6 10v10h12V10"/>',
  caixa: '<path d="M3 8l9-5 9 5v9l-9 5-9-5zM3 8l9 5 9-5M12 13v9"/>',
};

export function icone(nome, tam = 24, extra = {}) {
  const corpo = P[nome] || P.estrela;
  const preencher = extra.preencher ? ` fill="${extra.preencher}"` : ' fill="none"';
  const svg = svgDeString(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${tam}" height="${tam}"${preencher} stroke="currentColor" stroke-width="${extra.traco || 2.2}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" class="icone">${corpo}</svg>`);
  return svg;
}
export const ICONES = Object.keys(P);
