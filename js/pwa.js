// App instalável + offline: registra o service worker, avisa quando há versão nova
// e guarda o convite de instalação do navegador para o botão "Instalar o app".
import { h } from "./ui/dom.js";
import { tr } from "./i18n/index.js";

let convite = null; // evento beforeinstallprompt (Chrome/Edge/Android)
const ouvintes = new Set();
const avisar = () => ouvintes.forEach((fn) => { try { fn(); } catch { /* ignora */ } });

export function aoMudarInstalacao(fn) { ouvintes.add(fn); return () => ouvintes.delete(fn); }
export function estaInstalado() {
  return (typeof matchMedia !== "undefined" && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
}
export function ehIOS() { return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); }
export function podeInstalar() { return !!convite; }
export async function instalar() {
  if (!convite) return false;
  convite.prompt();
  const r = await convite.userChoice.catch(() => null);
  convite = null; avisar();
  return !!r && r.outcome === "accepted";
}

function faixaAtualizar(sw) {
  if (document.querySelector(".faixa-atualizar")) return;
  const faixa = h("div", { class: "faixa-atualizar", role: "status" },
    h("span", null, tr("Nova versão do jogo disponível.")),
    h("button", { class: "btn sol", type: "button", onclick: () => { faixa.querySelector("button").disabled = true; sw.postMessage("atualizar"); } }, tr("Atualizar")));
  document.body.append(faixa);
}

export function iniciarPWA() {
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); convite = e; avisar(); });
  window.addEventListener("appinstalled", () => { convite = null; avisar(); });
  if (!("serviceWorker" in navigator)) return;
  let recarregando = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => { if (!recarregando) { recarregando = true; location.reload(); } });
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("sw.js");
      const verificar = (sw) => { if (sw && sw.state === "installed" && navigator.serviceWorker.controller) faixaAtualizar(sw); };
      verificar(reg.waiting);
      reg.addEventListener("updatefound", () => {
        const novo = reg.installing;
        if (novo) novo.addEventListener("statechange", () => verificar(novo));
      });
      // procura versão nova quando o app volta para a frente
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") reg.update().catch(() => {}); });
    } catch (e) { console.warn("service worker:", e); }
  });
}
