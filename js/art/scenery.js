// Cenários dos 9 mundos (SVG original, 400x240) + decoração do mapa.
import { tr } from "../i18n/index.js";
import { svgDeString, esc } from "../ui/dom.js";

const INK = "#22223B";
const K = `stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const K2 = `stroke="${INK}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
let n = 0;
const wrap = (titulo, inner, fundo) => { const id = "sc" + (++n); return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(titulo)}"><title>${esc(titulo)}</title><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${fundo[0]}"/><stop offset="1" stop-color="${fundo[1]}"/></linearGradient></defs><rect width="400" height="240" fill="url(#${id})"/>${inner}</svg>`; };
const nuvem = (x, y, s = 1, c = "#fff") => `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}" ${K2}><path d="M0 20 C-12 20 -12 2 4 2 C6 -12 28 -12 32 2 C46 -2 52 18 40 20Z"/></g>`;
const sol = (x, y, r = 22) => `<g><circle cx="${x}" cy="${y}" r="${r + 8}" fill="#FFF3B0" opacity=".5"/><circle cx="${x}" cy="${y}" r="${r}" fill="#FFC23C" ${K}/></g>`;
const arvore = (x, y, s = 1, c = "#5BBF6A") => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="-4" width="8" height="26" rx="2" fill="#8A5A2B" ${K2}/><circle cx="0" cy="-16" r="20" fill="${c}" ${K2}/><circle cx="-12" cy="-6" r="12" fill="${c}" ${K2}/><circle cx="12" cy="-6" r="12" fill="${c}" ${K2}/></g>`;
const casa = (x, y, cor = "#FFE9AE", teto = "#FF5A4E", s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-20" y="-24" width="40" height="30" fill="${cor}" ${K2}/><path d="M-26 -22 L0 -44 L26 -22Z" fill="${teto}" ${K2}/><rect x="-5" y="-12" width="10" height="18" fill="#8A5A2B" ${K2}/><rect x="9" y="-18" width="7" height="7" fill="#CDF1F9" ${K2}/></g>`;
const colina = (c, d) => `<path d="${d}" fill="${c}" ${K}/>`;
const caixa = (x, y, s = 1, c = "#F2B35E") => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-10" y="-10" width="20" height="20" rx="2" fill="${c}" ${K2}/><path d="M-10 -3 H10" stroke="${INK}" stroke-width="2"/></g>`;
const moeda = (x, y, r = 8) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="#FFC23C" ${K2}/><circle cx="${x}" cy="${y}" r="${r * 0.6}" fill="none" stroke="#C98F00" stroke-width="1.8"/></g>`;
const estrelaPts = (cx, cy, r) => Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5; const rr = i % 2 ? r * .45 : r; return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`; }).join(" ");
const bandeira = (x, y, tipo) => {
  const mastro = `<path d="M${x} ${y} V${y + 34}" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;
  const f = { de: ["#222", "#DD0000", "#FFCE00"], fr: ["#2B50C8", "#FFFFFF", "#EF4135"], it: ["#009246", "#FFFFFF", "#CE2B37"], es: ["#C60B1E", "#FFC400", "#C60B1E"], nl: ["#AE1C28", "#FFFFFF", "#21468B"], pl: ["#FFFFFF", "#DC143C", "#DC143C"] }[tipo];
  const hor = tipo === "de" || tipo === "nl" || tipo === "pl" || tipo === "es";
  const w = 28, hh = 20;
  let partes;
  if (hor) { const alturas = tipo === "es" ? [5, 10, 5] : [hh / 3, hh / 3, hh / 3]; let yy = y; partes = f.map((c, i) => { const r = `<rect x="${x}" y="${yy}" width="${w}" height="${alturas[i]}" fill="${c}"/>`; yy += alturas[i]; return r; }).join(""); if (tipo === "pl") partes = `<rect x="${x}" y="${y}" width="${w}" height="${hh / 2}" fill="#fff"/><rect x="${x}" y="${y + hh / 2}" width="${w}" height="${hh / 2}" fill="#DC143C"/>`; }
  else partes = f.map((c, i) => `<rect x="${x + (w / 3) * i}" y="${y}" width="${w / 3}" height="${hh}" fill="${c}"/>`).join("");
  return `${mastro}<g>${partes}<rect x="${x}" y="${y}" width="${w}" height="${hh}" fill="none" ${K2}/></g>`;
};

const CENAS = {
  vila: () => wrap(tr("Vila do Zero, uma vila ensolarada"), `
    ${sol(330, 54)}${nuvem(60, 40, 1.1)}${nuvem(190, 70, .8)}
    ${colina("#A5E3AA", "M-10 170 C60 110 140 120 200 160 C260 120 340 110 410 160 V250 H-10Z")}
    ${colina("#5BBF6A", "M-10 200 C80 160 160 170 230 200 C300 170 360 170 410 190 V250 H-10Z")}
    <path d="M200 250 C190 220 220 205 236 190 C250 176 250 168 246 160" fill="none" stroke="#F3D8A0" stroke-width="22" stroke-linecap="round"/>
    ${casa(86, 176)}${casa(138, 168, "#CDF1F9", "#8B5CF6", .85)}${casa(318, 170, "#FFD9D5", "#2EC4E6", .9)}
    ${arvore(40, 196, 1)}${arvore(370, 200, .9, "#3FA354")}
    <g transform="translate(244 150)"><rect x="-3" y="0" width="6" height="40" fill="#8A5A2B" ${K2}/><path d="M-30 4 H12 L24 12 L12 20 H-30Z" fill="#FFC23C" ${K2}/><path d="M3 24 H34 L22 32 L34 40 H3Z" fill="#FF5A4E" ${K2}/></g>`, ["#9BE3F2", "#E8FAFF"]),
  porto: () => wrap(tr("Porto da Papelada, com prédio do governo"), `
    ${nuvem(40, 34, 1)}${nuvem(300, 48, .9)}
    <rect y="170" width="400" height="80" fill="#2EC4E6"/><path d="M0 184 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="#9BE3F2" stroke-width="4"/>
    <rect x="0" y="160" width="400" height="16" fill="#C9A06A" ${K}/>
    <g transform="translate(200 150)"><path d="M-70 -50 L0 -88 L70 -50Z" fill="#F3EAD2" ${K}/><rect x="-70" y="-50" width="140" height="10" fill="#E8DCC0" ${K2}/><g fill="#FFF8E6" ${K2}><rect x="-58" y="-40" width="14" height="40"/><rect x="-30" y="-40" width="14" height="40"/><rect x="16" y="-40" width="14" height="40"/><rect x="44" y="-40" width="14" height="40"/></g><rect x="-76" y="-2" width="152" height="12" fill="#E8DCC0" ${K2}/><circle cx="0" cy="-60" r="9" fill="#FFC23C" ${K2}/><path d="M0 -88 V-108" stroke="${INK}" stroke-width="3"/><path d="M0 -108 H24 L18 -100 L24 -92 H0Z" fill="#FF5A4E" ${K2}/></g>
    <g transform="translate(60 160)"><rect x="-4" y="-70" width="8" height="70" fill="#FF5A4E" ${K2}/><path d="M-4 -70 H50 V-62 H-4Z" fill="#FF5A4E" ${K2}/><path d="M44 -62 V-40" stroke="${INK}" stroke-width="2.5"/><rect x="38" y="-40" width="12" height="10" fill="#FFC23C" ${K2}/></g>
    <g transform="translate(330 168)"><path d="M-34 0 L-26 20 H30 L40 0Z" fill="#8B5CF6" ${K}/><rect x="-14" y="-18" width="26" height="18" fill="#fff" ${K2}/><path d="M-4 -18 V-40 L16 -26Z" fill="#FFC23C" ${K2}/></g>
    ${caixa(120, 154, .9)}${caixa(142, 154, .9, "#E7A957")}`, ["#BFEBF7", "#F2FCFF"]),
  floresta: () => wrap(tr("Floresta da Curadoria, com produtos pendurados como frutas"), `
    <path d="M70 0 L110 240 H20Z" fill="#fff" opacity=".18"/><path d="M300 0 L350 240 H250Z" fill="#fff" opacity=".14"/>
    ${colina("#7ED68A", "M-10 190 C80 150 160 160 220 190 C300 160 360 160 410 180 V250 H-10Z")}
    ${arvore(60, 120, 2.0, "#3FA354")}${arvore(200, 110, 2.4, "#5BBF6A")}${arvore(340, 124, 2.0, "#3FA354")}
    ${colina("#4BAF5B", "M-10 220 C100 190 200 210 410 205 V250 H-10Z")}
    <g ${K2}><circle cx="40" cy="108" r="8" fill="#FF5A4E"/><rect x="72" y="96" width="12" height="18" rx="2" fill="#2EC4E6"/><circle cx="62" cy="136" r="7" fill="#FFC23C"/>
    <path d="M178 90 h18 v14 q-9 8 -18 0z" fill="#8B5CF6"/><rect x="214" y="104" width="16" height="16" rx="2" fill="#F2B35E"/><circle cx="196" cy="128" r="8" fill="#FF5A4E"/><circle cx="224" cy="80" r="6" fill="#2EC4E6"/>
    <rect x="322" y="102" width="10" height="20" rx="3" fill="#FFC23C"/><circle cx="350" cy="112" r="8" fill="#8B5CF6"/><rect x="340" y="136" width="14" height="14" rx="2" fill="#FF5A4E"/></g>
    ${caixa(90, 214, 1.1, "#F2B35E")}${caixa(300, 218, 1.1, "#E7A957")}`, ["#CFF5D2", "#9BE3A8"]),
  mercado: () => wrap(tr("Mercado dos Fornecedores, um bazar com navios ao fundo"), `
    <rect y="96" width="400" height="60" fill="#2EC4E6"/><path d="M0 108 q12 -7 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="#9BE3F2" stroke-width="3"/>
    <g transform="translate(300 98)"><path d="M-50 0 L-40 22 H44 L56 0Z" fill="#2B3354" ${K}/><rect x="-34" y="-18" width="20" height="18" fill="#FF5A4E" ${K2}/><rect x="-12" y="-18" width="20" height="18" fill="#FFC23C" ${K2}/><rect x="10" y="-18" width="20" height="18" fill="#2EC4E6" ${K2}/><rect x="-22" y="-36" width="20" height="18" fill="#8B5CF6" ${K2}/><rect x="0" y="-36" width="20" height="18" fill="#5BBF6A" ${K2}/></g>
    <rect y="150" width="400" height="100" fill="#F3D8A0"/>
    <g transform="translate(70 170)"><rect x="-44" y="0" width="88" height="40" fill="#E8DCC0" ${K2}/><path d="M-52 0 V-24 H52 V0Z" fill="#fff" ${K2}/><g fill="#FF5A4E"><path d="M-52 -24 h17 v24 h-17z"/><path d="M-18 -24 h17 v24 h-17z"/><path d="M16 -24 h17 v24 h-17z"/></g><path d="M-52 -24 H52 V0H-52Z" fill="none" ${K2}/>${caixa(-20, 22, .9)}${caixa(4, 22, .9, "#E7A957")}</g>
    <g transform="translate(200 160)"><rect x="-44" y="0" width="88" height="46" fill="#CDF1F9" ${K2}/><path d="M-52 0 V-24 H52 V0Z" fill="#fff" ${K2}/><g fill="#2EC4E6"><path d="M-52 -24 h17 v24 h-17z"/><path d="M-18 -24 h17 v24 h-17z"/><path d="M16 -24 h17 v24 h-17z"/></g><path d="M-52 -24 H52 V0H-52Z" fill="none" ${K2}/><circle cx="-16" cy="26" r="9" fill="#FF5A4E" ${K2}/><circle cx="6" cy="28" r="8" fill="#FFC23C" ${K2}/><circle cx="24" cy="26" r="9" fill="#5BBF6A" ${K2}/></g>
    <g transform="translate(330 172)"><rect x="-44" y="0" width="88" height="40" fill="#FFD9D5" ${K2}/><path d="M-52 0 V-24 H52 V0Z" fill="#fff" ${K2}/><g fill="#FFC23C"><path d="M-52 -24 h17 v24 h-17z"/><path d="M-18 -24 h17 v24 h-17z"/><path d="M16 -24 h17 v24 h-17z"/></g><path d="M-52 -24 H52 V0H-52Z" fill="none" ${K2}/>${caixa(-14, 24, 1, "#8B5CF6")}${caixa(12, 24, 1, "#2EC4E6")}</g>
    ${nuvem(50, 40, .9)}${nuvem(210, 30, .7)}`, ["#BFEBF7", "#F2FCFF"]),
  cidadela: () => wrap(tr("Cidadela das Taxas, um castelo cercado de moedas"), `
    ${nuvem(40, 36, 1)}${nuvem(320, 50, .9)}
    ${colina("#FFE9AE", "M-10 190 C100 160 300 160 410 190 V250 H-10Z")}
    <g transform="translate(200 170)"><rect x="-70" y="-70" width="140" height="70" fill="#C9CCDA" ${K}/><g fill="#C9CCDA" ${K}><rect x="-90" y="-100" width="36" height="100"/><rect x="54" y="-100" width="36" height="100"/><rect x="-20" y="-120" width="40" height="120"/></g>
    <g fill="#9AA0B5" ${K2}><path d="M-92 -100 h8 v-10 h8 v10 h8 v-10 h8 v10 h4 v-10 h-36z"/><path d="M52 -100 h8 v-10 h8 v10 h8 v-10 h8 v10 h4 v-10 h-36z"/><path d="M-22 -120 h8 v-10 h8 v10 h8 v-10 h8 v10 h4 v-10 h-36z"/></g>
    <path d="M-16 0 V-26 C-16 -42 16 -42 16 -26 V0Z" fill="#8B5CF6" ${K}/><circle cx="0" cy="-86" r="12" fill="#FFC23C" ${K2}/><path d="M-4 -86 h8 M0 -90 v8" stroke="#8A5F00" stroke-width="2"/>
    <path d="M-72 -100 V-134 M72 -100 V-134" stroke="${INK}" stroke-width="3"/><path d="M-72 -134 h18 l-4 6 l4 6 h-18z" fill="#FF5A4E" ${K2}/><path d="M72 -134 h18 l-4 6 l4 6 h-18z" fill="#2EC4E6" ${K2}/></g>
    ${moeda(70, 206, 12)}${moeda(94, 214, 10)}${moeda(56, 222, 10)}${moeda(326, 208, 12)}${moeda(306, 220, 10)}${moeda(344, 224, 10)}${moeda(130, 224, 9)}${moeda(268, 226, 9)}`, ["#9BE3F2", "#E8FAFF"]),
  torre: () => wrap(tr("Torre da Vitrine, com vitrines brilhantes"), `
    <g fill="#fff" opacity=".9"><circle cx="40" cy="30" r="1.8"/><circle cx="120" cy="60" r="1.4"/><circle cx="330" cy="40" r="2"/><circle cx="370" cy="90" r="1.5"/><circle cx="260" cy="24" r="1.4"/><circle cx="80" cy="100" r="1.4"/></g>
    <circle cx="340" cy="44" r="18" fill="#FFF3B0" ${K2}/><circle cx="348" cy="40" r="16" fill="#3A2E7A"/>
    <path d="M200 20 L120 240 H150Z M200 20 L280 240 H250Z" fill="#FFF3B0" opacity=".18"/>
    ${colina("#2B3354", "M-10 210 C100 190 300 190 410 210 V250 H-10Z")}
    <g transform="translate(200 214)"><path d="M-50 0 L-38 -150 H38 L50 0Z" fill="#8B5CF6" ${K}/><path d="M-44 -150 L0 -192 L44 -150Z" fill="#FF5A4E" ${K}/><circle cx="0" cy="-168" r="5" fill="#FFC23C" ${K2}/>
    <g ${K2}><rect x="-30" y="-134" width="60" height="32" fill="#FFF3B0"/><rect x="-32" y="-90" width="64" height="32" fill="#CDF1F9"/><rect x="-34" y="-46" width="68" height="32" fill="#FFD9D5"/></g>
    <g ${K2}><circle cx="-14" cy="-118" r="6" fill="#FF5A4E"/><rect x="2" y="-126" width="12" height="16" rx="2" fill="#2EC4E6"/><rect x="-24" y="-80" width="14" height="14" rx="2" fill="#F2B35E"/><circle cx="8" cy="-72" r="8" fill="#8B5CF6"/><circle cx="18" cy="-76" r="5" fill="#FFC23C"/><rect x="-26" y="-36" width="12" height="16" rx="2" fill="#5BBF6A"/><circle cx="2" cy="-30" r="7" fill="#FF5A4E"/><rect x="14" y="-38" width="12" height="14" rx="2" fill="#FFC23C"/></g>
    <rect x="-8" y="-12" width="16" height="12" fill="#FFC23C" ${K2}/></g>`, ["#2B1F66", "#5B3FA8"]),
  arena: () => wrap(tr("Arena do Lançamento, um coliseu com holofotes"), `
    <path d="M60 240 L170 60 L210 60Z" fill="#FFF3B0" opacity=".35"/><path d="M340 240 L230 60 L190 60Z" fill="#CDF1F9" opacity=".35"/>
    ${colina("#FFD9A0", "M-10 200 C100 180 300 180 410 200 V250 H-10Z")}
    <g transform="translate(200 206)"><path d="M-130 0 V-70 C-130 -110 130 -110 130 -70 V0Z" fill="#F3EAD2" ${K}/><g fill="#E0C898" ${K2}><path d="M-110 0 V-40 C-110 -62 -86 -62 -86 -40 V0Z"/><path d="M-72 0 V-40 C-72 -62 -48 -62 -48 -40 V0Z"/><path d="M-34 0 V-40 C-34 -62 -10 -62 -10 -40 V0Z"/><path d="M10 0 V-40 C10 -62 34 -62 34 -40 V0Z"/><path d="M48 0 V-40 C48 -62 72 -62 72 -40 V0Z"/><path d="M86 0 V-40 C86 -62 110 -62 110 -40 V0Z"/></g>
    <path d="M-130 -70 H130" stroke="${INK}" stroke-width="3"/><path d="M-60 -92 L-60 -128 H60 L60 -92" fill="#FF5A4E" ${K2}/><path d="M-44 -118 H44" stroke="#FFF1C9" stroke-width="5" stroke-linecap="round"/></g>
    <g ${K2}><rect x="46" y="64" width="26" height="14" rx="3" fill="#FFC23C" transform="rotate(-30 59 71)"/><rect x="328" y="64" width="26" height="14" rx="3" fill="#2EC4E6" transform="rotate(30 341 71)"/></g>
    <g><rect x="30" y="30" width="8" height="5" fill="#FF5A4E" transform="rotate(30 34 32)"/><rect x="90" y="44" width="8" height="5" fill="#2EC4E6" transform="rotate(-20 94 46)"/><rect x="300" y="26" width="8" height="5" fill="#8B5CF6" transform="rotate(50 304 28)"/><rect x="360" y="52" width="8" height="5" fill="#5BBF6A" transform="rotate(-40 364 54)"/><polygon points="${estrelaPts(150, 40, 7)}" fill="#FFC23C"/><polygon points="${estrelaPts(260, 52, 7)}" fill="#FF5A4E"/></g>`, ["#FF9F7A", "#FFE0A8"]),
  montanha: () => wrap(tr("Montanha das Operações, com um armazém no topo"), `
    ${sol(60, 50, 18)}${nuvem(250, 36, 1)}${nuvem(110, 90, .7)}
    <path d="M-10 240 L120 100 L170 150 L250 40 L410 240Z" fill="#A9AEC8" ${K}/><path d="M250 40 L210 92 L232 84 L246 104 L262 82 L284 92Z" fill="#fff" ${K2}/><path d="M120 100 L96 130 L114 124 L124 140 L138 122Z" fill="#fff" ${K2}/>
    <path d="M60 240 C100 220 160 220 190 196 C220 170 190 150 230 128 C250 118 262 108 266 98" fill="none" stroke="#F3D8A0" stroke-width="14" stroke-linecap="round" stroke-dasharray="1 0"/>
    <path d="M60 240 C100 220 160 220 190 196 C220 170 190 150 230 128 C250 118 262 108 266 98" fill="none" stroke="#C9A06A" stroke-width="2" stroke-dasharray="6 8" stroke-linecap="round"/>
    <g transform="translate(268 96)"><rect x="-24" y="-26" width="48" height="26" fill="#FFE9AE" ${K2}/><path d="M-28 -26 L0 -44 L28 -26Z" fill="#FF5A4E" ${K2}/><rect x="-8" y="-16" width="16" height="16" fill="#8B5CF6" ${K2}/>${caixa(-34, -6, .7)}${caixa(-40, -18, .7, "#E7A957")}</g>
    ${arvore(40, 214, .9, "#3FA354")}${arvore(360, 220, .9, "#3FA354")}`, ["#CDF1F9", "#F2FCFF"]),
  coroa: () => wrap(tr("Coroa da Europa, uma cidade com bandeiras de vários países e o castelo do Chefão"), `
    <g fill="#fff" opacity=".85"><circle cx="30" cy="30" r="1.8"/><circle cx="110" cy="50" r="1.4"/><circle cx="300" cy="26" r="2"/><circle cx="380" cy="64" r="1.5"/></g>
    ${colina("#3A2E7A", "M-10 190 C100 160 300 160 410 190 V250 H-10Z")}
    <g transform="translate(200 190)"><rect x="-50" y="-96" width="100" height="96" fill="#FFD97A" ${K}/><g fill="#FFD97A" ${K}><rect x="-70" y="-70" width="30" height="70"/><rect x="40" y="-70" width="30" height="70"/></g>
    <path d="M-52 -96 L-52 -120 L-34 -106 L-18 -128 L0 -106 L18 -128 L34 -106 L52 -120 L52 -96Z" fill="#FFC23C" ${K}/><path d="M-72 -70 L-55 -92 L-38 -70Z M38 -70 L55 -92 L72 -70Z" fill="#FF5A4E" ${K2}/>
    <path d="M-14 0 V-30 C-14 -48 14 -48 14 -30 V0Z" fill="#8B5CF6" ${K2}/><circle cx="0" cy="-70" r="10" fill="#fff" ${K2}/>
    ${Array.from({ length: 5 }, (_, i) => `<polygon points="${estrelaPts(-24 + i * 12, -140 + Math.abs(i - 2) * 3, 4.5)}" fill="#FFC23C" stroke="${INK}" stroke-width="1.2"/>`).join("")}</g>
    ${bandeira(34, 120, "es")}${bandeira(74, 100, "de")}${bandeira(114, 130, "fr")}${bandeira(290, 130, "it")}${bandeira(330, 100, "nl")}${bandeira(366, 124, "pl")}
    <g ${K2}><rect x="30" y="170" width="30" height="30" fill="#FFE9AE"/><rect x="70" y="160" width="26" height="40" fill="#CDF1F9"/><rect x="320" y="166" width="30" height="34" fill="#FFD9D5"/><rect x="354" y="176" width="26" height="24" fill="#FFE9AE"/></g>`, ["#2B1F66", "#6E4FD0"]),
};

export const CHAVES_CENARIO = Object.keys(CENAS);
export function cenarioSvgString(chave) { return (CENAS[chave] || CENAS.vila)(); }
export function cenario(chave) { return svgDeString(cenarioSvgString(chave)); }
