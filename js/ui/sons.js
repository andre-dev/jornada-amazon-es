// Sons curtinhos via WebAudio (sem arquivos). Desligados por padrão; liga no Perfil.
let ctx = null;
let ligado = false;
export function ligarSom(v) { ligado = !!v; }
function audio() {
  if (!ligado) return null;
  try {
    if (!ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; ctx = new AC(); }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  } catch { return null; }
}
function nota(freq, ini, dur, tipo = "triangle", vol = 0.12) {
  const a = audio(); if (!a) return;
  const o = a.createOscillator(), g = a.createGain();
  o.type = tipo; o.frequency.value = freq;
  const t = a.currentTime + ini;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t); o.stop(t + dur + 0.05);
}
export const som = {
  acerto() { nota(660, 0, .12); nota(880, .09, .18); },
  erro() { nota(220, 0, .18, "sawtooth", .08); nota(165, .12, .25, "sawtooth", .08); },
  nivel() { [523, 659, 784, 1047].forEach((f, i) => nota(f, i * .1, .2)); },
  golpe() { nota(120, 0, .15, "square", .1); nota(90, .05, .2, "square", .08); },
  moeda() { nota(988, 0, .08, "square", .06); nota(1319, .07, .2, "square", .06); },
  clique() { nota(440, 0, .05, "triangle", .05); },
};
