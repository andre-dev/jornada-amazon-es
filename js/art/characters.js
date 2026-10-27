// Mascote (Caixote) e os 9 chefes — arte 100% original em SVG. Nada de logotipo, sorriso-seta ou identidade de terceiros.
import { svgDeString, esc } from "../ui/dom.js";

const INK = "#22223B";
const K = `stroke="${INK}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`;
const K2 = `stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;
const wrap = (vb, titulo, inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="${esc(titulo)}"><title>${esc(titulo)}</title>${inner}</svg>`;
const sombra = (cx, cy, rx) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="8" fill="#000" opacity=".14"/>`;
const estrela = (cx, cy, r, fill = "#FFC23C", sw = 2) => {
  const pts = [];
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5; const rr = i % 2 ? r * 0.45 : r; pts.push((cx + rr * Math.cos(a)).toFixed(1) + "," + (cy + rr * Math.sin(a)).toFixed(1)); }
  return `<polygon points="${pts.join(" ")}" fill="${fill}" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round"/>`;
};
const moeda = (cx, cy, r) => `<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFC23C" ${K2}/><circle cx="${cx}" cy="${cy}" r="${r * 0.62}" fill="none" stroke="#C98F00" stroke-width="2"/><text x="${cx}" y="${cy + r * 0.34}" font-family="Fredoka, sans-serif" font-weight="700" font-size="${r * 0.95}" text-anchor="middle" fill="#8A5F00">€</text></g>`;

/* ---------------- Caixote, o mascote ---------------- */
function caixote() {
  return wrap("0 0 160 170", "Caixote, o mascote em forma de caixa", `
    ${sombra(80, 160, 46)}
    <path d="M80 54 C78 40 74 34 66 30" fill="none" stroke="#3F9B4D" stroke-width="4" stroke-linecap="round"/>
    <path d="M66 30 C54 22 46 28 48 36 C56 38 62 36 66 30Z" fill="#5BBF6A" ${K2}/>
    <path d="M68 34 C76 22 90 22 92 30 C86 38 76 38 68 34Z" fill="#7ED68A" ${K2}/>
    <path d="M32 62 L16 40 L72 44 L80 62Z" fill="#E09A45" ${K}/>
    <path d="M128 62 L144 40 L88 44 L80 62Z" fill="#E7A957" ${K}/>
    <rect x="32" y="58" width="96" height="86" rx="10" fill="#F2B35E" ${K}/>
    <rect x="32" y="58" width="96" height="14" rx="6" fill="#E09A45" ${K}/>
    <rect x="46" y="76" width="30" height="10" rx="3" fill="#FFF1C9" ${K2} transform="rotate(-14 61 81)"/>
    <rect x="84" y="76" width="30" height="10" rx="3" fill="#FFF1C9" ${K2} transform="rotate(14 99 81)"/>
    <circle cx="58" cy="98" r="9" fill="#fff" ${K2}/><circle cx="102" cy="98" r="9" fill="#fff" ${K2}/>
    <circle cx="60" cy="99" r="4.2" fill="${INK}"/><circle cx="100" cy="99" r="4.2" fill="${INK}"/>
    <circle cx="61.5" cy="97.5" r="1.4" fill="#fff"/><circle cx="101.5" cy="97.5" r="1.4" fill="#fff"/>
    <path d="M66 114 Q80 134 94 114 Z" fill="#7A2E2E" ${K2}/><path d="M72 122 Q80 130 88 122 Q80 118 72 122Z" fill="#FF8A8A"/>
    <circle cx="44" cy="114" r="5" fill="#FF7A6E" opacity=".5"/><circle cx="116" cy="114" r="5" fill="#FF7A6E" opacity=".5"/>
    <g transform="translate(108 128) rotate(12)">${estrela(0, 0, 9, "#8B5CF6", 2)}</g>
    <path d="M32 100 C20 100 16 112 20 120" fill="none" ${K}/><circle cx="20" cy="121" r="5" fill="#F2B35E" ${K2}/>
    <path d="M128 100 C140 96 148 84 144 76" fill="none" ${K}/><circle cx="144" cy="74" r="5" fill="#F2B35E" ${K2}/>
    <rect x="52" y="142" width="16" height="14" rx="5" fill="#E09A45" ${K}/><rect x="92" y="142" width="16" height="14" rx="5" fill="#E09A45" ${K}/>`);
}

/* ---------------- Chefes ---------------- */
function nevoeiro() {
  return wrap("0 0 200 200", "O Nevoeiro da Dúvida, uma nuvem cinza preocupada", `
    ${sombra(100, 182, 62)}
    <path d="M46 150 C20 150 16 114 44 108 C42 78 80 62 98 82 C110 56 154 66 152 98 C182 100 186 150 154 150Z" fill="#C9CCDA" ${K}/>
    <path d="M40 160 q10 8 20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#E3E5EE" stroke-width="7" stroke-linecap="round"/>
    <path d="M52 172 q10 8 20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#E3E5EE" stroke-width="6" stroke-linecap="round"/>
    <circle cx="80" cy="112" r="14" fill="#fff" ${K2}/><circle cx="124" cy="112" r="14" fill="#fff" ${K2}/>
    <circle cx="82" cy="118" r="5.5" fill="${INK}"/><circle cx="122" cy="118" r="5.5" fill="${INK}"/>
    <path d="M65 108 Q80 96 95 108Z" fill="#AEB2C6" ${K2}/><path d="M109 108 Q124 96 139 108Z" fill="#AEB2C6" ${K2}/>
    <path d="M66 92 L90 100 M138 92 L114 100" ${K} fill="none"/>
    <path d="M84 140 q6 -8 12 0 t12 0 t12 0" fill="none" ${K}/>
    <g font-family="Fredoka, sans-serif" font-weight="700" fill="#8B5CF6" stroke="${INK}" stroke-width="1.5"><text x="26" y="62" font-size="38" transform="rotate(-16 26 62)">?</text><text x="158" y="54" font-size="46" transform="rotate(14 158 54)">?</text><text x="108" y="44" font-size="26">?</text></g>`);
}

function burocratio() {
  return wrap("0 0 200 200", "Burocrátio, o Carimbador, um monstro de formulários", `
    ${sombra(100, 188, 54)}
    <rect x="56" y="40" width="88" height="124" rx="6" fill="#F3EAD2" ${K} transform="rotate(-6 100 100)"/>
    <rect x="58" y="38" width="88" height="124" rx="6" fill="#FFF8E6" ${K} transform="rotate(4 100 100)"/>
    <rect x="62" y="34" width="82" height="128" rx="6" fill="#FFFFFF" ${K}/>
    <path d="M74 112 H132 M74 122 H132 M74 132 H116 M74 142 H128" stroke="#B9BCCB" stroke-width="3" stroke-linecap="round"/>
    <circle cx="112" cy="136" r="16" fill="none" stroke="#FF5A4E" stroke-width="4" opacity=".8"/><path d="M104 136 H120 M112 128 V144" stroke="#FF5A4E" stroke-width="3" opacity=".8"/>
    <circle cx="86" cy="68" r="11" fill="#fff" ${K2}/><circle cx="118" cy="68" r="11" fill="#fff" ${K2}/>
    <circle cx="88" cy="70" r="4.5" fill="${INK}"/><circle cx="116" cy="70" r="4.5" fill="${INK}"/>
    <path d="M72 52 L96 60 M132 52 L108 60" ${K} fill="none"/>
    <circle cx="118" cy="68" r="15" fill="#2EC4E6" fill-opacity=".18" ${K2}/><path d="M130 80 Q138 96 132 108" fill="none" stroke="#C98F00" stroke-width="2.5"/>
    <path d="M84 94 H120 V104 H84Z" fill="#7A2E2E" ${K2}/><path d="M88 94 v5 M96 94 v5 M104 94 v5 M112 94 v5" stroke="#fff" stroke-width="3"/>
    <path d="M62 100 L34 70" ${K} fill="none"/><rect x="18" y="38" width="28" height="12" rx="4" fill="#FF5A4E" ${K2} transform="rotate(-30 32 44)"/><rect x="24" y="48" width="6" height="20" fill="#B8431F" ${K2} transform="rotate(-30 27 58)"/>
    <path d="M144 108 L172 138" ${K} fill="none"/><rect x="160" y="146" width="34" height="12" rx="4" fill="#FF5A4E" ${K2}/><rect x="174" y="132" width="6" height="16" fill="#B8431F" ${K2}/>
    <path d="M84 164 V184 M120 164 V184" ${K} fill="none"/><ellipse cx="82" cy="186" rx="12" ry="5" fill="#4A4A68" ${K2}/><ellipse cx="122" cy="186" rx="12" ry="5" fill="#4A4A68" ${K2}/>`);
}

function hidra() {
  const cabeca = (x, y, cor, olhoDir = 1) => `
    <ellipse cx="${x}" cy="${y}" rx="26" ry="20" fill="${cor}" ${K}/>
    <path d="M${x - 22} ${y + 6} Q${x} ${y + 24} ${x + 22} ${y + 6}" fill="#7A2E2E" ${K2}/><path d="M${x - 12} ${y + 10} l4 6 l4 -4 l4 6 l4 -6 l4 4 l4 -6" fill="none" stroke="#fff" stroke-width="2.5"/>
    <circle cx="${x - 9}" cy="${y - 5}" r="6" fill="#fff" ${K2}/><circle cx="${x + 9}" cy="${y - 5}" r="6" fill="#fff" ${K2}/>
    <circle cx="${x - 9 + olhoDir}" cy="${y - 4}" r="2.6" fill="${INK}"/><circle cx="${x + 9 + olhoDir}" cy="${y - 4}" r="2.6" fill="${INK}"/>
    <path d="M${x - 16} ${y - 14} L${x - 4} ${y - 10} M${x + 16} ${y - 14} L${x + 4} ${y - 10}" ${K2} fill="none"/>`;
  return wrap("0 0 200 200", "A Hidra das Tendências, com três cabeças", `
    ${sombra(100, 190, 62)}
    <path d="M76 150 C60 120 50 100 50 84" fill="none" stroke="#5BBF6A" stroke-width="16" stroke-linecap="round"/><path d="M76 150 C60 120 50 100 50 84" fill="none" stroke="${INK}" stroke-width="22" stroke-linecap="round" opacity=".0"/>
    <path d="M100 150 C100 120 100 96 100 66" fill="none" stroke="#5BBF6A" stroke-width="16" stroke-linecap="round"/>
    <path d="M124 150 C140 120 150 100 150 84" fill="none" stroke="#5BBF6A" stroke-width="16" stroke-linecap="round"/>
    <ellipse cx="100" cy="164" rx="56" ry="30" fill="#5BBF6A" ${K}/>
    <ellipse cx="100" cy="174" rx="34" ry="16" fill="#BDEFC4" ${K2}/>
    ${cabeca(50, 72, "#7ED68A", 1)}${cabeca(100, 50, "#5BBF6A", 0)}${cabeca(150, 72, "#3FA354", -1)}
    <g transform="translate(6 8) scale(.8)"><path d="M6 0 H34 M6 46 H34 M10 0 C10 20 30 20 30 0 M10 46 C10 26 30 26 30 46 M20 20 V30" fill="#FFE9AE" ${K2}/><path d="M14 44 H26 L20 32Z" fill="#FFC23C"/></g>
    <g transform="translate(130 4) scale(.62)"><rect x="0" y="22" width="22" height="20" fill="#E09A45" ${K2}/><rect x="24" y="22" width="22" height="20" fill="#F2B35E" ${K2}/><rect x="12" y="2" width="22" height="20" fill="#E7A957" ${K2}/></g>
    <g transform="translate(158 30)"><circle cx="14" cy="14" r="13" fill="#fff" ${K2}/><circle cx="14" cy="14" r="13" fill="none" stroke="#FF5A4E" stroke-width="4"/><path d="M5 23 L23 5" stroke="#FF5A4E" stroke-width="4"/></g>`);
}

function capitao() {
  return wrap("0 0 200 200", "Capitão Container, um pirata com um contêiner", `
    ${sombra(100, 190, 80)}
    <rect x="16" y="112" width="168" height="72" rx="4" fill="#FF5A4E" ${K}/>
    <g stroke="#B8341F" stroke-width="4"><path d="M36 116 V180 M56 116 V180 M76 116 V180 M96 116 V180 M116 116 V180 M136 116 V180 M156 116 V180 M176 116 V180"/></g>
    <rect x="16" y="112" width="168" height="10" fill="#E03F34" ${K}/><rect x="100" y="138" width="38" height="16" rx="3" fill="#FFF1C9" ${K2}/><path d="M106 146 H132" stroke="${INK}" stroke-width="3"/>
    <path d="M76 112 V84 C76 74 124 74 124 84 V112Z" fill="#fff" ${K}/>
    <path d="M78 90 H122 M78 104 H122" stroke="#2EC4E6" stroke-width="7"/>
    <path d="M124 92 C140 90 146 84 142 74 C150 74 152 92 132 104" fill="none" ${K}/><path d="M142 70 q4 -8 -2 -10" fill="none" stroke="#9AA0B5" stroke-width="5" stroke-linecap="round"/>
    <circle cx="100" cy="56" r="22" fill="#F3C29B" ${K}/>
    <path d="M78 58 C76 86 124 86 122 58 C118 74 82 74 78 58Z" fill="#2B1D14" ${K2}/>
    <circle cx="90" cy="52" r="3.4" fill="${INK}"/><path d="M104 46 H120" stroke="${INK}" stroke-width="3"/><rect x="104" y="46" width="14" height="12" rx="6" fill="${INK}"/><path d="M96 52 L104 48" stroke="${INK}" stroke-width="2"/>
    <path d="M90 66 Q100 72 110 66" fill="#fff" ${K2}/>
    <path d="M70 44 C74 14 126 14 130 44 C118 36 82 36 70 44Z" fill="#2B3354" ${K}/><path d="M64 44 C86 52 114 52 136 44 C126 38 74 38 64 44Z" fill="#2B3354" ${K}/>
    <circle cx="100" cy="30" r="7" fill="#fff" ${K2}/><circle cx="97" cy="29" r="1.6" fill="${INK}"/><circle cx="103" cy="29" r="1.6" fill="${INK}"/>
    <path d="M24 112 V40 M24 40 q-10 -4 -10 8" fill="none" stroke="#9AA0B5" stroke-width="5" stroke-linecap="round"/>`);
}

function contador() {
  return wrap("0 0 200 200", "O Contador Voraz, uma calculadora com dentes", `
    ${sombra(100, 188, 56)}
    <g transform="rotate(-5 100 100)">
    <rect x="44" y="22" width="112" height="156" rx="16" fill="#4A4A68" ${K}/>
    <rect x="54" y="32" width="92" height="52" rx="8" fill="#CFF5D2" ${K2}/>
    <circle cx="82" cy="54" r="12" fill="#fff" ${K2}/><circle cx="118" cy="54" r="12" fill="#fff" ${K2}/>
    <circle cx="85" cy="56" r="5" fill="${INK}"/><circle cx="115" cy="56" r="5" fill="${INK}"/>
    <path d="M66 38 L94 46 M134 38 L106 46" ${K} fill="none"/>
    <text x="140" y="80" font-family="Fredoka, sans-serif" font-weight="700" font-size="13" text-anchor="end" fill="#2E7D3A">€ 0,00</text>
    <path d="M54 100 C54 92 146 92 146 100 V150 C146 170 54 170 54 150Z" fill="#7A2E2E" ${K}/>
    <path d="M58 98 l8 18 l8 -18 l8 18 l8 -18 l8 18 l8 -18 l8 18 l8 -18 l8 18 l6 -16" fill="#fff" ${K2}/>
    <path d="M62 158 l8 -16 l8 16 l8 -16 l8 16 l8 -16 l8 16 l8 -16 l8 16 l8 -16 l4 12" fill="#fff" ${K2}/>
    <path d="M80 138 Q100 124 120 138 Q100 152 80 138Z" fill="#FF8A8A" ${K2}/>
    </g>
    ${moeda(26, 148, 11)}${moeda(176, 126, 9)}<g opacity=".7">${moeda(168, 170, 7)}</g>
    <path d="M44 120 C26 124 22 140 30 148" fill="none" ${K}/><path d="M156 112 C176 104 184 120 176 134" fill="none" ${K}/>`);
}

function esfinge() {
  return wrap("0 0 200 200", "Esfinge do Algoritmo, que faz enigmas sobre listagem", `
    ${sombra(100, 190, 76)}
    <path d="M24 176 C20 140 44 120 72 118 H128 C156 120 180 140 176 176Z" fill="#E8B873" ${K}/>
    <path d="M50 176 V156 M150 176 V156" stroke="#C99A55" stroke-width="3"/>
    <rect x="34" y="162" width="46" height="18" rx="9" fill="#F0C98A" ${K}/><rect x="120" y="162" width="46" height="18" rx="9" fill="#F0C98A" ${K}/>
    <path d="M46 114 L50 44 C60 20 140 20 150 44 L154 114 C140 132 60 132 46 114Z" fill="#2EC4E6" ${K}/>
    <g stroke="#FFC23C" stroke-width="7"><path d="M52 60 L148 60 M50 74 L150 74 M50 88 L150 88 M49 102 L151 102"/></g>
    <path d="M46 114 L50 44 C60 20 140 20 150 44 L154 114" fill="none" ${K}/>
    <ellipse cx="100" cy="84" rx="34" ry="40" fill="#F0C98A" ${K}/>
    <path d="M70 66 Q82 58 94 66 M106 66 Q118 58 130 66" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="82" cy="76" rx="9" ry="6" fill="#fff" ${K2}/><ellipse cx="118" cy="76" rx="9" ry="6" fill="#fff" ${K2}/>
    <circle cx="82" cy="76" r="3.4" fill="${INK}"/><circle cx="118" cy="76" r="3.4" fill="${INK}"/>
    <path d="M72 76 H62 M128 76 H138" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
    <path d="M100 80 L94 98 H106Z" fill="#E1AE68" ${K2}/>
    <path d="M86 108 Q100 116 114 108" fill="none" ${K2}/>
    <path d="M94 122 H106 V138 L100 144 L94 138Z" fill="#FFC23C" ${K2}/>
    <g font-family="Fredoka, sans-serif" font-weight="700" stroke="${INK}" stroke-width="1.5"><text x="12" y="46" font-size="34" fill="#8B5CF6" transform="rotate(-14 12 46)">?</text><text x="160" y="40" font-size="26" fill="#FF5A4E" transform="rotate(12 160 40)">A+</text><text x="158" y="104" font-size="22" fill="#5BBF6A">#</text></g>`);
}

function drakon() {
  return wrap("0 0 200 200", "Drakón do CPC, um dragão que cospe moedas", `
    ${sombra(100, 190, 58)}
    <path d="M60 110 C20 90 8 60 14 34 C36 52 54 56 76 66Z" fill="#8B5CF6" ${K}/><path d="M140 110 C180 90 192 60 186 34 C164 52 146 56 124 66Z" fill="#8B5CF6" ${K}/>
    <path d="M40 66 L24 44 M30 80 L16 60 M160 66 L176 44 M170 80 L184 60" stroke="${INK}" stroke-width="3" fill="none"/>
    <path d="M132 160 C170 166 184 150 176 132 C170 150 150 150 134 146Z" fill="#FF5A4E" ${K}/><path d="M174 134 l10 -8 l-2 12Z" fill="#FFC23C" ${K2}/>
    <ellipse cx="100" cy="144" rx="42" ry="40" fill="#FF5A4E" ${K}/>
    <ellipse cx="100" cy="152" rx="24" ry="30" fill="#FFD9A0" ${K2}/>
    <path d="M84 134 H116 M82 148 H118 M84 162 H116" stroke="#E0A56A" stroke-width="3"/>
    <rect x="58" y="164" width="22" height="20" rx="8" fill="#FF5A4E" ${K}/><rect x="120" y="164" width="22" height="20" rx="8" fill="#FF5A4E" ${K}/>
    <ellipse cx="100" cy="76" rx="38" ry="32" fill="#FF5A4E" ${K}/>
    <path d="M70 52 L60 22 L84 44Z M130 52 L140 22 L116 44Z" fill="#FFC23C" ${K}/>
    <circle cx="84" cy="68" r="9" fill="#FFF3B0" ${K2}/><circle cx="116" cy="68" r="9" fill="#FFF3B0" ${K2}/>
    <path d="M84 62 V74 M116 62 V74" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
    <path d="M70 54 L92 62 M130 54 L108 62" ${K} fill="none"/>
    <ellipse cx="100" cy="92" rx="22" ry="14" fill="#FF8A7A" ${K2}/><circle cx="92" cy="88" r="2.5" fill="${INK}"/><circle cx="108" cy="88" r="2.5" fill="${INK}"/>
    <path d="M86 98 Q100 118 114 98Z" fill="#7A2E2E" ${K2}/>
    <g>${moeda(96, 128, 8)}${moeda(60, 112, 10)}${moeda(32, 134, 12)}${moeda(22, 168, 13)}</g>`);
}

function auditor() {
  return wrap("0 0 200 200", "O Auditor Sombrio, uma sombra encapuzada com prancheta", `
    ${sombra(100, 190, 56)}
    <path d="M100 14 C66 20 54 54 56 86 C40 110 34 160 38 186 H162 C166 160 160 110 144 86 C146 54 134 20 100 14Z" fill="#3B2F63" ${K}/>
    <path d="M100 30 C78 34 72 56 74 80 C74 96 126 96 126 80 C128 56 122 34 100 30Z" fill="#151526" ${K2}/>
    <ellipse cx="88" cy="68" rx="8" ry="11" fill="#FFF3B0"/><ellipse cx="112" cy="68" rx="8" ry="11" fill="#FFF3B0"/>
    <ellipse cx="88" cy="70" rx="3" ry="6" fill="${INK}"/><ellipse cx="112" cy="70" rx="3" ry="6" fill="${INK}"/>
    <path d="M76 52 L96 60 M124 52 L104 60" stroke="#FFF3B0" stroke-width="3" stroke-linecap="round"/>
    <path d="M92 90 H108" stroke="#FFF3B0" stroke-width="3" stroke-linecap="round" opacity=".6"/>
    <g transform="rotate(-8 56 140)"><rect x="30" y="104" width="54" height="72" rx="6" fill="#B5703B" ${K}/><rect x="36" y="114" width="42" height="56" rx="3" fill="#fff" ${K2}/><rect x="46" y="100" width="22" height="10" rx="3" fill="#9AA0B5" ${K2}/>
    <path d="M42 126 l5 5 l9 -9 M42 142 l5 5 l9 -9" fill="none" stroke="#5BBF6A" stroke-width="3.5" stroke-linecap="round"/><path d="M42 158 l10 10 M52 158 l-10 10" stroke="#FF5A4E" stroke-width="3.5" stroke-linecap="round"/><path d="M62 128 H74 M62 144 H74 M62 160 H74" stroke="#B9BCCB" stroke-width="3" stroke-linecap="round"/></g>
    <circle cx="146" cy="124" r="16" fill="#CDF1F9" fill-opacity=".45" ${K}/><path d="M158 136 L176 156" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><path d="M158 136 L176 156" stroke="#B5703B" stroke-width="3" stroke-linecap="round"/>`);
}

function chefao() {
  const estrelas = Array.from({ length: 9 }, (_, i) => {
    const a = (-165 + i * (150 / 8)) * Math.PI / 180;
    return estrela(100 + 54 * Math.cos(a), 52 + 46 * Math.sin(a), 7, "#FFC23C", 1.8);
  }).join("");
  return wrap("0 0 200 200", "O CHEFÃO DAS VENDAS, um gigante dourado com coroa de estrelas", `
    ${sombra(100, 192, 74)}
    <path d="M40 80 C20 120 22 170 30 190 H170 C178 170 180 120 160 80Z" fill="#8B5CF6" ${K}/>
    <path d="M44 100 C60 120 140 120 156 100 L150 190 H50Z" fill="#7343D6" opacity=".55"/>
    <path d="M52 112 C52 90 148 90 148 112 L154 176 H46Z" fill="#FFC23C" ${K}/>
    <path d="M100 100 V170 M70 124 Q100 138 130 124" stroke="#C98F00" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <circle cx="100" cy="156" r="22" fill="#FFD97A" ${K2}/><text x="100" y="164" font-family="Fredoka, sans-serif" font-weight="700" font-size="24" text-anchor="middle" fill="#8A5F00">€</text>
    <path d="M52 112 C26 112 22 140 36 156" fill="none" ${K}/><circle cx="38" cy="158" r="10" fill="#FFC23C" ${K}/>
    <path d="M148 112 C174 112 178 140 164 156" fill="none" ${K}/><circle cx="162" cy="158" r="10" fill="#FFC23C" ${K}/>
    <circle cx="100" cy="76" r="30" fill="#FFD97A" ${K}/>
    <path d="M74 80 C76 108 124 108 126 80 C120 92 80 92 74 80Z" fill="#C98F00" ${K2}/>
    <circle cx="88" cy="70" r="6" fill="#fff" ${K2}/><circle cx="112" cy="70" r="6" fill="#fff" ${K2}/>
    <circle cx="89" cy="71" r="2.8" fill="${INK}"/><circle cx="111" cy="71" r="2.8" fill="${INK}"/>
    <path d="M76 58 L96 64 M124 58 L104 64" ${K} fill="none"/>
    <path d="M92 86 H108" ${K2} fill="none"/>
    <path d="M70 50 L70 36 L84 44 L100 26 L116 44 L130 36 L130 50Z" fill="#FF5A4E" ${K}/>
    ${estrelas}`);
}

const MAPA = { caixote, nevoeiro, burocratio, hidra, "capitao-container": capitao, "contador-voraz": contador, esfinge, drakon, auditor, chefao };
export const IDS_PERSONAGENS = Object.keys(MAPA);
export function personagemSvgString(id) { return (MAPA[id] || caixote)(); }
export function personagem(id) { return svgDeString(personagemSvgString(id)); }
export const caixoteSvg = () => personagem("caixote");
