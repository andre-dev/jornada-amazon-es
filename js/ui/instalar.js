// Cartão "Instalar o app" do Perfil.
import { h, limpar } from "./dom.js";
import { icone } from "./icons.js";
import { toast } from "./toast.js";
import { t } from "../i18n/index.js";
import { estaInstalado, podeInstalar, instalar, ehIOS, aoMudarInstalacao } from "../pwa.js";

export function cartaoInstalar() {
  const el = h("section", { class: "card pilha" });
  function render() {
    limpar(el).append(h("h2", { style: { margin: 0 } }, t("Instalar o app")));
    if (estaInstalado()) {
      el.append(h("p", { style: { margin: 0 } }, "✅ ", t("Você está usando o app instalado. Ele abre mesmo sem internet, e o progresso sincroniza quando a conexão voltar.")));
      return;
    }
    el.append(h("p", { style: { margin: 0 } }, t("Coloque o jogo na tela inicial do celular ou do computador, como um aplicativo. Ele abre mais rápido e funciona mesmo sem internet.")));
    if (podeInstalar()) {
      el.append(h("button", { class: "btn sol", type: "button", onclick: async () => { if (await instalar()) toast(t("App instalado!"), "ok"); } }, icone("download", 20), t("Instalar o app")));
    } else if (ehIOS()) {
      el.append(h("p", { class: "muted", style: { margin: 0 } }, t("No iPhone ou iPad: abra no Safari, toque em Compartilhar (o quadrado com a seta) e depois em “Adicionar à Tela de Início”.")));
    } else {
      el.append(h("p", { class: "muted", style: { margin: 0 } }, t("No menu do navegador, procure “Instalar app” ou “Adicionar à tela inicial”.")));
    }
  }
  const parar = aoMudarInstalacao(render);
  render();
  el.__destruir = parar;
  return el;
}
