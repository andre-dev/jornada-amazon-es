// Conta e salvamento: aviso no mapa, cartão no Perfil e instruções de como salvar na conta.
import { tr, localAtual } from "../i18n/index.js";
import { h, limpar } from "./dom.js";
import { icone } from "./icons.js";
import { abrirModal, confirmar } from "./modal.js";
import { toast } from "./toast.js";
import { montarBackup, nomeBackup, baixarArquivo } from "../state/persistence.js";
import { infoNivel } from "../engine/xp.js";

export const EVENTO_CONTA = "jornada:conta";

// Com login Google (Firebase), main.js registra aqui como entrar e sair.
let acoes = { entrar: null, sair: null };
export function definirAcoesConta(a) { acoes = { ...acoes, ...a }; }

function botaoEntrar(classe = "btn sol") {
  return h("button", { class: classe, type: "button", onclick: async (e) => {
    const b = e.currentTarget; b.disabled = true;
    try { await acoes.entrar(); } catch (err) { b.disabled = false; if (!(err && /popup-closed|cancelled-popup/.test(err.code || ""))) toast(tr("Não consegui entrar com o Google. Tente de novo."), "erro"); }
  } }, icone("nuvem", 20), tr("Entrar com Google"));
}
function botaoComoSalvar() {
  return acoes.entrar ? botaoEntrar() : h("button", { class: "btn sol", type: "button", onclick: abrirComoSalvar }, icone("nuvem", 20), tr("Como salvar na minha conta"));
}

function textoDoMotivo(motivo) {
  if (motivo === "convidado") return tr("Você está jogando sem conta. Entre com o Google para guardar o progresso e continuar em qualquer aparelho.");
  if (motivo === "sem-permissao") return tr("Você abriu o jogo com acesso só de visualização, então ele não consegue salvar na sua conta.");
  if (motivo === "sem-login") return tr("Você não está conectado a uma conta, então o jogo não consegue salvar seu progresso nela.");
  if (motivo === "fora-do-claude") return tr("Este endereço não tem salvamento em conta.");
  return tr("Não consegui falar com a sua conta agora.");
}

/** Passo a passo para salvar na conta (login com Gmail). */
export function abrirComoSalvar() {
  abrirModal({
    titulo: tr("Salvar o progresso na sua conta"),
    conteudo: h("div", { class: "pilha" },
      h("p", { style: { margin: 0 } }, tr("Com o progresso na sua conta, você pode fechar o jogo, trocar de celular ou ir para o PC e continuar de onde parou.")),
      h("ol", { style: { margin: 0, paddingLeft: "1.2em", display: "grid", gap: "8px" } },
        h("li", null, h("strong", null, tr("Peça o convite: ")), tr("o dono do jogo abre o menu Compartilhar e convida o seu e-mail (pode ser Gmail) com o nível "), h("strong", null, tr("Editor")), "."),
        h("li", null, h("strong", null, tr("Entre com o Gmail: ")), "abra o link do convite e entre no claude.ai com ", h("strong", null, tr("“Continuar com Google”")), tr(", usando esse mesmo e-mail.")),
        h("li", null, h("strong", null, tr("Pronto: ")), tr("o ícone de nuvem no topo fica verde e mostra “Salvo na sua conta”."))),
      h("p", { class: "muted", style: { margin: 0, fontSize: ".92rem" } }, tr("Antes de trocar, baixe um backup do progresso deste navegador e importe depois, no Perfil, para não perder nada."))),
    acoes: [{ texto: tr("Entendi"), classe: "sol", valor: 1 }],
  });
}

async function baixarBackup(store) {
  const r = await baixarArquivo(nomeBackup(), montarBackup(store.estado));
  if (r.ok) toast(tr("Backup pronto!"), "ok"); else if (!r.cancelado) toast(tr("Não consegui gerar o backup."), "erro");
}

/** Faixa de aviso no topo do mapa. Fica escondida quando o progresso está salvo na conta. */
export function bannerConta({ store, persist }) {
  const el = h("section", { class: "card tomate pilha", role: "status", "aria-live": "polite", hidden: true, style: { gap: "8px" } });
  function render(conta) {
    if (!conta || !conta.verificado || conta.nuvem) { el.hidden = true; return; }
    el.hidden = false;
    limpar(el).append(
      h("p", { style: { margin: 0, fontWeight: 800 } }, tr("⚠️ Seu progresso está salvo só neste navegador")),
      h("p", { style: { margin: 0 } }, textoDoMotivo(conta.motivo), tr(" Se o navegador limpar os dados, você perde tudo.")),
      h("div", { class: "linha", style: { flexWrap: "wrap", gap: "8px" } },
        botaoComoSalvar(),
        h("button", { class: "btn card", type: "button", onclick: () => baixarBackup(store) }, icone("download", 20), tr("Baixar backup agora"))));
  }
  const ouvir = (e) => render(e.detail);
  window.addEventListener(EVENTO_CONTA, ouvir);
  render(persist && persist.conta);
  el.__destruir = () => window.removeEventListener(EVENTO_CONTA, ouvir);
  return el;
}

/** Cartão "Sua conta e salvamento" do Perfil. */
export function cartaoConta({ store, persist }) {
  const el = h("section", { class: "card pilha" });
  async function render(conta) {
    const c = conta || (persist && persist.conta) || {};
    const linhas = [];
    if (!c.verificado) linhas.push(h("p", { style: { margin: 0 } }, tr("Verificando sua conta…")));
    else if (c.nuvem) {
      linhas.push(h("p", { style: { margin: 0 } }, "✅ ", h("strong", null, tr("Progresso salvo na sua conta")), (c.email || c.nome) ? [" (", h("span", null, c.email || c.nome), ")"] : null, tr(". Pode fechar e abrir de qualquer aparelho, que você continua de onde parou.")));
      if (acoes.sair) linhas.push(h("button", { class: "btn card", type: "button", onclick: async () => {
        if (await confirmar({ titulo: tr("Sair da conta?"), texto: tr("Seu progresso continua salvo na conta. Para voltar, é só entrar com o Google de novo."), ok: tr("Sair") })) acoes.sair();
      } }, tr("Sair da conta")));
    }
    else linhas.push(
      h("p", { style: { margin: 0 } }, "⚠️ ", h("strong", null, tr("Salvo só neste navegador. ")), textoDoMotivo(c.motivo)),
      botaoComoSalvar());
    limpar(el).append(h("h2", { style: { margin: 0 } }, tr("Sua conta e salvamento")), ...linhas);
    if (c.nuvem && persist) {
      const copia = await persist.lerCopia();
      if (copia) {
        const i = infoNivel(copia.save.xp);
        const data = new Date(copia.guardadoEm).toLocaleString(localAtual(), { dateStyle: "short", timeStyle: "short" });
        el.append(h("p", { class: "muted", style: { margin: 0, fontSize: ".92rem" } }, tr("Cópia de segurança automática: {nome}, nível {n}, guardada em {data}.", { nome: copia.save.jogador.nome, n: i.nivel, data })),
          h("button", { class: "btn card", type: "button", onclick: async () => {
            if (!(await confirmar({ titulo: tr("Restaurar a cópia de segurança?"), texto: tr("Seu progresso atual vira a nova cópia de segurança, e você volta para nível {n}.", { n: i.nivel }), ok: tr("Restaurar") }))) return;
            if (await persist.restaurarCopia()) toast(tr("Cópia restaurada!"), "ok");
          } }, icone("upload", 20), tr("Restaurar cópia de segurança")));
      }
    }
  }
  const ouvir = (e) => render(e.detail);
  window.addEventListener(EVENTO_CONTA, ouvir);
  render();
  el.__destruir = () => window.removeEventListener(EVENTO_CONTA, ouvir);
  return el;
}
