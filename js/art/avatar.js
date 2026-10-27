// Avatar montável em SVG (arte original). Todos os valores vêm de tabelas: nada do save é interpolado cru.
import { tr } from "../i18n/index.js";
import { svgDeString, esc } from "../ui/dom.js";
import { AVATAR_OPCOES } from "../state/schema.js";

const INK = "#22223B";
const KW = (w) => `stroke="${INK}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
const K = KW(3);
export const PELES = ["#FDDCC0", "#F3C29B", "#D9A070", "#A86D45", "#6B4328"];
export const COR_CABELO = ["#2B1D14", "#6B3F1D", "#D9A441", "#B8431F", "#A9AEB8"];
export const NOMES = {
  pele: [tr("Clara"), tr("Bege"), tr("Morena"), tr("Parda"), tr("Escura")],
  cabelo: [tr("Raspado"), tr("Penteado"), tr("Longo"), tr("Cacheado"), tr("Coque"), tr("Careca")],
  corCabelo: [tr("Preto"), tr("Castanho"), tr("Loiro"), tr("Ruivo"), tr("Grisalho")],
  barba: [tr("Sem barba"), tr("Barba curta"), tr("Barba cheia")],
  roupa: [tr("Camisa"), tr("Moletom"), tr("Terno casual")],
  acessorio: [tr("Nenhum"), tr("Óculos"), tr("Boné")],
};
let contador = 0;

function fundoSvg(id, uid) {
  const g = (a, b) => `<defs><linearGradient id="${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="120" height="120" fill="url(#${uid})"/>`;
  switch (id) {
    case "fundo-solpoente": return g("#FF8A5B", "#FFD36B") + `<circle cx="88" cy="40" r="16" fill="#FFF3B0"/>`;
    case "fundo-mediterraneo": return g("#7FE0F5", "#2EC4E6") + `<path d="M0 98 Q15 90 30 98 T60 98 T90 98 T120 98 V120 H0Z" fill="#1597B8"/>`;
    case "fundo-noite": return g("#1B1B4B", "#3A2E7A") + `<g fill="#FFF3B0"><circle cx="20" cy="22" r="2"/><circle cx="92" cy="16" r="2.4"/><circle cx="104" cy="52" r="1.6"/><circle cx="14" cy="60" r="1.6"/><circle cx="70" cy="10" r="1.4"/></g>`;
    case "fundo-jardim": return g("#BDEFC4", "#5BBF6A") + `<g><circle cx="16" cy="96" r="5" fill="#FF5A4E"/><circle cx="102" cy="90" r="5" fill="#FFC23C"/><circle cx="30" cy="108" r="4" fill="#8B5CF6"/></g>`;
    case "fundo-confete": return g("#FFE9AE", "#FFC23C") + `<g><rect x="14" y="20" width="8" height="4" fill="#FF5A4E" transform="rotate(30 18 22)"/><rect x="96" y="28" width="8" height="4" fill="#2EC4E6" transform="rotate(-20 100 30)"/><rect x="100" y="80" width="8" height="4" fill="#8B5CF6" transform="rotate(50 104 82)"/><rect x="12" y="76" width="8" height="4" fill="#5BBF6A" transform="rotate(-40 16 78)"/></g>`;
    default: return g("#CDF1F9", "#9BE3F2");
  }
}

function roupaSvg(i, nivelAcess) {
  const mochila = nivelAcess === "mochila" ? `<path d="M30 94 C28 104 28 112 30 120" fill="none" stroke="#C25B3D" stroke-width="7" stroke-linecap="round"/><path d="M90 94 C92 104 92 112 90 120" fill="none" stroke="#C25B3D" stroke-width="7" stroke-linecap="round"/>` : "";
  let corpo;
  if (i === 0) corpo = `<path d="M16 122 C16 100 36 91 60 91 C84 91 104 100 104 122 Z" fill="#2EC4E6" ${K}/><path d="M48 92 L60 106 L72 92" fill="#fff" ${K}/><path d="M60 106 V122" ${K} fill="none"/>`;
  else if (i === 1) corpo = `<path d="M16 122 C16 100 36 91 60 91 C84 91 104 100 104 122 Z" fill="#8B5CF6" ${K}/><path d="M42 93 C46 106 74 106 78 93" fill="#7343D6" ${K}/><path d="M52 104 L50 118 M68 104 L70 118" ${KW(2.5)} fill="none"/><rect x="44" y="110" width="32" height="12" rx="4" fill="#7343D6" stroke="none"/>`;
  else corpo = `<path d="M16 122 C16 100 36 91 60 91 C84 91 104 100 104 122 Z" fill="#3A4468" ${K}/><path d="M50 92 L60 122 L70 92 Z" fill="#fff" ${K}/><path d="M50 92 L40 108 L56 122 L60 108Z M70 92 L80 108 L64 122 L60 108Z" fill="#2B3354" ${K}/><path d="M60 98 L57 108 L60 120 L63 108Z" fill="#FF5A4E" stroke="none"/>`;
  return mochila + corpo;
}

function cabeloTras(i, cor) {
  if (i === 2) return `<path d="M36 52 C30 78 32 98 40 100 L80 100 C88 98 90 78 84 52 Z" fill="${cor}" ${K}/>`;
  return "";
}
function cabeloFrente(i, cor) {
  switch (i) {
    case 0: return `<path d="M38 50 C36 28 84 28 82 50 C76 40 44 40 38 50Z" fill="${cor}" ${K}/>`;
    case 1: return `<path d="M37 52 C32 24 78 18 84 44 C86 48 84 52 83 52 C80 42 64 38 50 40 C44 41 40 46 37 52Z" fill="${cor}" ${K}/><path d="M50 40 C58 32 72 32 80 40" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>`;
    case 2: return `<path d="M37 54 C32 22 88 22 83 54 C80 40 66 34 60 34 C52 34 40 40 37 54Z" fill="${cor}" ${K}/>`;
    case 3: return `<g fill="${cor}" ${K}><circle cx="42" cy="38" r="12"/><circle cx="56" cy="30" r="13"/><circle cx="72" cy="32" r="13"/><circle cx="80" cy="44" r="10"/><circle cx="38" cy="50" r="8"/></g><path d="M40 52 C44 44 76 44 80 52 L80 48 C74 40 46 40 40 48Z" fill="${cor}" stroke="none"/>`;
    case 4: return `<circle cx="60" cy="18" r="10" fill="${cor}" ${K}/><path d="M38 50 C36 28 84 28 82 50 C76 40 44 40 38 50Z" fill="${cor}" ${K}/>`;
    default: return `<path d="M46 34 C52 31 58 31 62 32" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/>`;
  }
}
function barbaSvg(i, cor) {
  if (i === 1) return `<path d="M39 58 C40 76 80 76 81 58 C77 66 70 64 60 64 C50 64 43 66 39 58Z" fill="${cor}" ${K}/>`;
  if (i === 2) return `<path d="M38 56 C36 88 84 88 82 56 C78 70 70 68 60 68 C50 68 42 70 38 56Z" fill="${cor}" ${K}/>`;
  return "";
}
function rosto(barba) {
  const boca = barba ? `<path d="M53 66 Q60 72 67 66" fill="#fff" ${KW(2.5)}/>` : `<path d="M52 64 Q60 72 68 64" fill="#fff" ${KW(2.5)}/>`;
  return `<circle cx="51" cy="54" r="2.8" fill="${INK}"/><circle cx="69" cy="54" r="2.8" fill="${INK}"/><circle cx="52" cy="53" r=".9" fill="#fff"/><circle cx="70" cy="53" r=".9" fill="#fff"/><path d="M45 47 Q51 44 56 47 M64 47 Q69 44 75 47" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/><circle cx="44" cy="62" r="3.5" fill="#FF8A8A" opacity=".35"/><circle cx="76" cy="62" r="3.5" fill="#FF8A8A" opacity=".35"/>${boca}`;
}
function acessorioSvg(i) {
  if (i === 1) return `<g fill="#fff" fill-opacity=".25" ${KW(2.5)}><circle cx="51" cy="54" r="8.5"/><circle cx="69" cy="54" r="8.5"/><path d="M59.5 54 H60.5" /></g><path d="M42.5 53 L38 51 M77.5 53 L82 51" ${KW(2.5)} fill="none"/>`;
  if (i === 2) return `<path d="M37 48 C36 24 84 24 83 48 C76 42 44 42 37 48Z" fill="#FF5A4E" ${K}/><path d="M60 42 C74 44 94 46 98 52 C92 54 76 50 60 48Z" fill="#E03F34" ${K}/>`;
  return "";
}
function chapeuSvg(id) {
  switch (id) {
    case "chapeu-viseira": return `<path d="M38 42 C42 32 78 32 82 42Z" fill="#FFC23C" ${K}/><path d="M36 42 H84 C92 42 94 48 90 49 H36Z" fill="#FFD97A" ${K}/>`;
    case "chapeu-boina": return `<ellipse cx="58" cy="32" rx="28" ry="12" fill="#B8431F" ${K} transform="rotate(-8 58 32)"/><circle cx="70" cy="19" r="3" fill="#B8431F" ${K}/>`;
    case "chapeu-capitao": return `<path d="M30 40 C34 14 86 14 90 40 C80 34 40 34 30 40Z" fill="#2B3354" ${K}/><rect x="36" y="32" width="48" height="8" fill="#fff" ${KW(2.5)}/><circle cx="60" cy="26" r="4.5" fill="#FFC23C" ${KW(2)}/>`;
    case "chapeu-cartola": return `<rect x="42" y="6" width="36" height="30" rx="3" fill="#22223B" ${K}/><rect x="42" y="26" width="36" height="7" fill="#FFC23C" ${KW(2.5)}/><ellipse cx="60" cy="37" rx="30" ry="6" fill="#22223B" ${K}/>`;
    case "chapeu-coroa": return `<path d="M38 40 L38 16 L49 28 L60 10 L71 28 L82 16 L82 40Z" fill="#D9A55F" ${K}/><g fill="#FF5A4E" stroke="${INK}" stroke-width="2"><circle cx="38" cy="16" r="3"/><circle cx="60" cy="10" r="3"/><circle cx="82" cy="16" r="3"/></g>`;
    default: return "";
  }
}
function coroaNivel() {
  return `<path d="M44 30 L44 12 L52 20 L60 6 L68 20 L76 12 L76 30Z" fill="#FFC23C" ${KW(2.5)}/><circle cx="60" cy="6" r="2.6" fill="#FF5A4E" stroke="${INK}" stroke-width="1.5"/>`;
}
function maletaSvg() {
  return `<g><path d="M90 104 V100 C90 97 100 97 100 100 V104" fill="none" ${KW(2.5)}/><rect x="82" y="104" width="26" height="18" rx="4" fill="#B5703B" ${K}/><rect x="93" y="110" width="4" height="5" fill="#FFC23C" stroke="${INK}" stroke-width="1.5"/></g>`;
}

/** opcoes: objeto de avatar do save. extra: { nivelAcessorio: "mochila"|"maleta"|"coroa", titulo } */
export function avatarSvgString(opcoes = {}, { nivelAcessorio = "mochila", titulo = tr("Seu personagem") } = {}) {
  const o = {};
  for (const [k, n] of Object.entries(AVATAR_OPCOES)) { const v = opcoes[k]; o[k] = Number.isInteger(v) && v >= 0 && v < n ? v : 0; }
  const eq = (opcoes.equipados && typeof opcoes.equipados === "object") ? opcoes.equipados : {};
  const pele = PELES[o.pele], cor = COR_CABELO[o.corCabelo];
  const uid = "av" + (++contador);
  const chapeu = typeof eq.chapeu === "string" ? chapeuSvg(eq.chapeu) : "";
  const temChapeu = !!chapeu;
  const sombra = `<path d="M52 82 H68 V92 C64 96 56 96 52 92Z" fill="#000" opacity=".12"/>`;
  const topo = temChapeu ? chapeu : (o.acessorio === 2 ? "" : (nivelAcessorio === "coroa" ? coroaNivel() : ""));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="${esc(titulo)}"><title>${esc(titulo)}</title>`
    + fundoSvg(typeof eq.fundo === "string" ? eq.fundo : "", uid + "f")
    + cabeloTras(o.cabelo, cor)
    + `<rect x="52" y="72" width="16" height="24" rx="6" fill="${pele}" ${K}/>` + sombra
    + roupaSvg(o.roupa, nivelAcessorio)
    + (nivelAcessorio === "maleta" || nivelAcessorio === "coroa" ? maletaSvg() : "")
    + `<ellipse cx="38.5" cy="56" rx="4.5" ry="5.5" fill="${pele}" ${KW(2.5)}/><ellipse cx="81.5" cy="56" rx="4.5" ry="5.5" fill="${pele}" ${KW(2.5)}/>`
    + `<ellipse cx="60" cy="54" rx="22" ry="25" fill="${pele}" ${K}/>`
    + cabeloFrente(o.cabelo, cor)
    + barbaSvg(o.barba, cor)
    + rosto(o.barba)
    + acessorioSvg(temChapeu && o.acessorio === 2 ? 0 : o.acessorio)
    + topo
    + (nivelAcessorio === "coroa" && temChapeu ? `<path d="M96 100 l3 6 6 1-4.500 4 1 6-5.500-3-5.500 3 1-6-4.500-4 6-1z" fill="#FFC23C" ${KW(2)}/>` : "")
    + `</svg>`;
  return svg;
}

export function avatarSvg(opcoes, extra) { return svgDeString(avatarSvgString(opcoes, extra)); }
