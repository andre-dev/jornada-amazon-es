// Confete em canvas, sem dependências. Respeita "reduzir animações".
const CORES = ["#FFC23C", "#FF5A4E", "#2EC4E6", "#5BBF6A", "#8B5CF6", "#FFFFFF"];

export function confete({ estilo = "padrao", quantidade = 120, reduzir = false } = {}) {
  if (reduzir || (typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
  if (document.documentElement.getAttribute("data-anim") === "off") return;
  const c = document.createElement("canvas");
  c.className = "confete-canvas";
  c.setAttribute("aria-hidden", "true");
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  c.width = innerWidth * dpr; c.height = innerHeight * dpr;
  c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
  document.body.append(c);
  const ctx = c.getContext("2d");
  ctx.scale(dpr, dpr);
  const simbolo = { moedas: "€", estrelas: "★", europa: "★" }[estilo] || null;
  const cores = estilo === "europa" ? ["#2457D6", "#FFC23C", "#FFC23C", "#FFFFFF"] : estilo === "moedas" ? ["#FFC23C", "#FFD97A", "#E0A100"] : CORES;
  const ps = Array.from({ length: quantidade }, () => ({
    x: innerWidth / 2 + (Math.random() - .5) * 80, y: innerHeight * 0.45,
    vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4,
    r: Math.random() * 6 + 4, rot: Math.random() * 6, vr: (Math.random() - .5) * .4,
    cor: cores[Math.floor(Math.random() * cores.length)],
  }));
  let t0 = performance.now();
  function quadro(t) {
    const dt = Math.min(2, (t - t0) / 16.67); t0 = t;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    let vivo = 0;
    for (const p of ps) {
      p.vy += 0.38 * dt; p.vx *= 0.995; p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt;
      if (p.y < innerHeight + 20) vivo++;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.cor;
      if (simbolo) { ctx.font = `bold ${p.r * 3}px sans-serif`; ctx.textAlign = "center"; ctx.fillText(simbolo, 0, 0); }
      else ctx.fillRect(-p.r / 2, -p.r / 3, p.r, p.r * .66);
      ctx.restore();
    }
    if (vivo > 0) requestAnimationFrame(quadro); else c.remove();
  }
  requestAnimationFrame(quadro);
  setTimeout(() => c.remove(), 6000);
}
