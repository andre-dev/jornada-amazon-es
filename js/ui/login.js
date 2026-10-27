// Tela de entrada: "Entrar com Google" (progresso salvo na conta) ou jogar sem conta.
import { h, limpar } from "./dom.js";
import { personagem } from "../art/characters.js";
import { mensagemErroLogin } from "../nuvem/firebase.js";

const CHAVE_CONVIDADO = "jornada-amazon-es:convidado";

export function querJogarSemConta() { try { return localStorage.getItem(CHAVE_CONVIDADO) === "1"; } catch { return false; } }
export function esquecerJogarSemConta() { try { localStorage.removeItem(CHAVE_CONVIDADO); } catch { /* ignora */ } }

/** "G" do Google (botão padrão de login). */
function logoG() {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 48 48"); svg.setAttribute("width", "22"); svg.setAttribute("height", "22"); svg.setAttribute("aria-hidden", "true");
  for (const [d, cor] of [
    ["M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z", "#FFC107"],
    ["M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z", "#FF3D00"],
    ["M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z", "#4CAF50"],
    ["M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z", "#1976D2"],
  ]) { const p = document.createElementNS(ns, "path"); p.setAttribute("d", d); p.setAttribute("fill", cor); svg.append(p); }
  return svg;
}

/**
 * Mostra a tela de entrada dentro de `alvo` e resolve com
 * { usuario } depois do login, ou { convidado: true } se a pessoa preferir jogar sem conta.
 */
export function telaLogin(alvo, fb) {
  return new Promise((resolve) => {
    const erro = h("p", { role: "alert", class: "muted", style: { margin: 0, minHeight: "1.4em", color: "var(--tomate)" } });
    const btn = h("button", { class: "btn btn-google", type: "button", style: { justifyContent: "center", gap: "12px", width: "100%", background: "#fff", color: "#1f1f1f" } }, logoG(), "Entrar com Google");
    btn.addEventListener("click", async () => {
      btn.disabled = true; erro.textContent = "";
      try {
        const u = await fb.entrar();
        esquecerJogarSemConta();
        resolve({ usuario: u });
      } catch (e) {
        erro.textContent = mensagemErroLogin(e);
        btn.disabled = false;
      }
    });
    const convidado = h("button", { class: "btn-link", type: "button", style: { background: "none", border: 0, color: "inherit", textDecoration: "underline", cursor: "pointer", font: "inherit", padding: "8px" } }, "Jogar sem conta");
    convidado.addEventListener("click", () => {
      try { localStorage.setItem(CHAVE_CONVIDADO, "1"); } catch { /* ignora */ }
      resolve({ convidado: true });
    });
    limpar(alvo).append(
      h("div", { class: "card centro pilha", style: { maxWidth: "420px", margin: "32px auto", padding: "28px 22px", gap: "14px" } },
        h("div", { style: { width: "120px", margin: "0 auto" } }, personagem("caixote")),
        h("h1", { style: { margin: 0 } }, "Do Zero ao Chefão"),
        h("p", { style: { margin: 0 } }, "Aprenda a vender na Amazon da Espanha e da Europa, jogando."),
        h("p", { class: "muted", style: { margin: 0, fontSize: ".95rem" } }, "Entre com sua conta Google para salvar o progresso e continuar de onde parou, no celular ou no computador."),
        btn, erro,
        h("div", { style: { display: "grid", gap: "2px", justifyItems: "center" } }, convidado,
          h("span", { class: "muted", style: { fontSize: ".85rem" } }, "Sem conta, o progresso fica só neste navegador e pode se perder."))));
    btn.focus();
  });
}
