// Boot: carrega save local, monta shell (HUD + navegação), router e eventos de jogo.
import { h, montar, definirResolverTermo } from "./ui/dom.js";
import { termoPorChave } from "./content/glossary.js";
import { icone } from "./ui/icons.js";
import { store } from "./state/store.js";
import { criarPersistencia } from "./state/persistence.js";
import { criarRouter } from "./router.js";
import { criarHud } from "./ui/hud.js";
import { toast } from "./ui/toast.js";
import { abrirModal } from "./ui/modal.js";
import { confete } from "./ui/confetti.js";
import { ligarSom, som } from "./ui/sons.js";
import { abrirTermo } from "./ui/termo.js";
import { avatarSvg } from "./art/avatar.js";
import { infoNivel, acessorioDeNivel } from "./engine/xp.js";
import { conquistaPorId } from "./content/achievements.js";
import { personagem } from "./art/characters.js";
import { EVENTO_CONTA, definirAcoesConta } from "./ui/conta.js";
import { FIREBASE_CONFIG } from "./config.js";
import { CHAVE_LOCAL } from "./state/schema.js";

const app = document.getElementById("app");

/* ---------- tema, animações, som ---------- */
function aplicarConfig(s) {
  const raiz = document.documentElement;
  if (s.config.tema === "auto") raiz.removeAttribute("data-theme"); else raiz.setAttribute("data-theme", s.config.tema);
  if (s.config.reduzirAnimacoes) raiz.setAttribute("data-anim", "off"); else raiz.removeAttribute("data-anim");
  try { localStorage.setItem("jornada-amazon-es:tema", JSON.stringify({ tema: s.config.tema, reduzir: !!s.config.reduzirAnimacoes })); } catch { /* ignora */ }
  ligarSom(s.config.som);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const escuro = s.config.tema === "dark" || (s.config.tema === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
    meta.setAttribute("content", escuro ? "#151526" : "#FFF6E5");
  }
}

/* ---------- navegação ---------- */
const ABAS = [
  { id: "mapa", rotulo: "Mapa", icone: "mapa", href: "#/mapa" },
  { id: "oficina", rotulo: "Oficina", icone: "oficina", href: "#/oficina" },
  { id: "missoes", rotulo: "Missões", icone: "missoes", href: "#/missoes" },
  { id: "glossario", rotulo: "Glossário", icone: "glossario", href: "#/glossario" },
  { id: "perfil", rotulo: "Perfil", icone: "perfil", href: "#/perfil" },
];

const ROTAS = [
  { padrao: "/onboarding", aba: null, imersivo: true, sem_hud: true, tela: () => import("./screens/onboarding.js") },
  { padrao: "/mapa", aba: "mapa", tela: () => import("./screens/map.js"), largo: true },
  { padrao: "/mundo/:id", aba: "mapa", tela: () => import("./screens/world.js") },
  { padrao: "/licao/:id", aba: "mapa", imersivo: true, tela: () => import("./screens/lesson.js") },
  { padrao: "/chefe/:id", aba: "mapa", imersivo: true, tela: () => import("./screens/boss.js") },
  { padrao: "/certificado", aba: "mapa", imersivo: true, tela: () => import("./screens/certificate.js") },
  { padrao: "/oficina", aba: "oficina", tela: () => import("./screens/tools.js"), largo: true },
  { padrao: "/oficina/:ferramenta", aba: "oficina", tela: () => import("./screens/tools.js"), largo: true },
  { padrao: "/missoes", aba: "missoes", tela: () => import("./screens/checklist.js") },
  { padrao: "/glossario", aba: "glossario", tela: () => import("./screens/glossary.js") },
  { padrao: "/perfil", aba: "perfil", tela: () => import("./screens/profile.js") },
  { padrao: "/fontes", aba: "perfil", tela: () => import("./screens/sources.js") },
];

let hud, shell, nav, main, rodape, router, persist;
let tokenRota = 0;
let telaAtual = null;

function montarShell() {
  hud = criarHud(store);
  nav = h("nav", { class: "nav", "aria-label": "Navegação principal" },
    h("div", { class: "marca", "aria-hidden": "true" }, h("span", { style: { width: "40px", display: "block" } }, personagem("caixote")), h("span", null, "Jornada", h("br"), "Amazon ES")),
    ABAS.map((a) => h("a", { href: a.href, dataset: { aba: a.id } }, icone(a.icone, 24), h("span", null, a.rotulo))));
  main = h("main", { id: "conteudo-principal", class: "conteudo", tabindex: "-1" });
  rodape = h("footer", { class: "rodape" },
    h("p", null, "Projeto educativo independente, sem vínculo com a Amazon. Regras e taxas mudam — confira sempre no Seller Central e com um assessor fiscal."),
    h("p", null, h("a", { href: "#/fontes" }, "Fontes e datas de verificação")));
  shell = h("div", { class: "shell" }, nav, h("div", { class: "shell-corpo" }, hud.el, main, rodape));
  montar(app, shell);
}

async function aoMudarRota({ rota, params, query, caminho }) {
  const meu = ++tokenRota;
  const s = store.estado;
  if (!s.jogador.criado && caminho !== "/onboarding") { router.ir("/onboarding", { substituir: true }); return; }
  if (s.jogador.criado && caminho === "/onboarding") { router.ir("/mapa", { substituir: true }); return; }
  if (telaAtual && telaAtual.__destruir) { try { telaAtual.__destruir(); } catch (e) { console.error(e); } }
  telaAtual = null;
  if (!rota) { montar(main, h("div", { class: "card" }, h("h1", null, "Página não encontrada"), h("p", null, "Esse caminho não existe."), h("a", { class: "btn", href: "#/mapa" }, "Voltar ao mapa"))); return; }

  shell.classList.toggle("imersivo", !!rota.imersivo);
  shell.classList.toggle("sem-hud", !!rota.sem_hud);
  main.classList.toggle("largo", !!rota.largo);
  document.body.dataset.rota = rota.padrao.split("/")[1] || "mapa";
  for (const a of nav.querySelectorAll("a[data-aba]")) {
    if (a.dataset.aba === rota.aba) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  }
  main.setAttribute("aria-busy", "true");
  try {
    const mod = await rota.tela();
    const ctx = { store, router, ir: (c, o) => router.ir(c, o), params, query, toast, abrirTermo, persist, hud };
    const no = await mod.default(ctx);
    if (meu !== tokenRota) { if (no && no.__destruir) no.__destruir(); return; }
    telaAtual = no;
    montar(main, no);
    main.removeAttribute("aria-busy");
    window.scrollTo(0, 0);
    const alvo = main.querySelector("h1") || main;
    if (alvo !== main) alvo.setAttribute("tabindex", "-1");
    try { alvo.focus({ preventScroll: true }); } catch { /* ignora */ }
  } catch (e) {
    console.error(e);
    if (meu !== tokenRota) return;
    main.removeAttribute("aria-busy");
    montar(main, h("div", { class: "card tomate" }, h("h1", null, "Algo não carregou"), h("p", null, "Não consegui abrir esta tela. Tente de novo; se continuar, volte ao mapa."), h("div", { class: "linha" }, h("button", { class: "btn", type: "button", onclick: () => router.ir(caminho) }, "Tentar de novo"), h("a", { class: "btn card", href: "#/mapa" }, "Voltar ao mapa"))));
  }
}

/* ---------- eventos do jogo: toasts, nível, conquistas ---------- */
let acumulado = { xp: 0, moedas: 0, t: null };
function liberarAcumulado() {
  const { xp, moedas } = acumulado;
  acumulado = { xp: 0, moedas: 0, t: null };
  if (xp) toast(`+${xp} XP`, "xp", { ms: 1800 });
  if (moedas) { toast(`+${moedas} moedas`, "moeda", { ms: 1800 }); som.moeda(); }
}
function modalNivel(e) {
  const s = store.estado;
  const info = infoNivel(s.xp);
  som.nivel();
  const eq = s.jogador.avatar.equipados.confete;
  confete({ estilo: eq ? eq.replace("confete-", "") : "padrao", reduzir: s.config.reduzirAnimacoes });
  abrirModal({
    titulo: `Nível ${e.para}!`, classe: "modal-nivel",
    conteudo: h("div", { class: "centro" },
      h("div", { class: "modal-avatar" }, avatarSvg(s.jogador.avatar, { nivelAcessorio: acessorioDeNivel(info.nivel) })),
      h("p", { style: { fontFamily: "var(--fonte-titulo)", fontSize: "1.3rem", margin: "8px 0 4px" } }, e.titulo),
      h("p", { class: "muted" }, "Seu personagem evoluiu. Continue assim!")),
    acoes: [{ texto: "Bora!", classe: "sol", valor: 1 }],
  });
}
function configurarEventos() {
  store.aoEvento((e) => {
    if (e.tipo === "xp") { acumulado.xp += e.valor; clearTimeout(acumulado.t); acumulado.t = setTimeout(liberarAcumulado, 450); }
    else if (e.tipo === "moedas") { acumulado.moedas += e.valor; clearTimeout(acumulado.t); acumulado.t = setTimeout(liberarAcumulado, 450); }
    else if (e.tipo === "nivel") setTimeout(() => modalNivel(e), 700);
    else if (e.tipo === "conquista") {
      const c = conquistaPorId(e.id);
      if (c) setTimeout(() => { toast(`Conquista: ${c.nome}`, "conquista", { ms: 3200, icon: c.icone }); som.nivel(); }, 900);
    } else if (e.tipo === "streak") {
      if (e.evento === "escudo") toast(`Escudo usado! Sequência mantida: ${e.atual} dias`, "ok", { icon: "chama" });
      else if (e.atual > 1) toast(`${e.atual} dias seguidos!`, "ok", { icon: "chama" });
    }
  });
}

/* ---------- tempo de estudo ---------- */
function monitorarTempo() {
  let seg = 0;
  setInterval(() => { if (document.visibilityState === "visible" && document.hasFocus()) seg += 5; }, 5000);
  const soltar = () => { if (seg > 0) { const n = seg; seg = 0; store.somarEstudo(n); } };
  setInterval(soltar, 60000);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") soltar(); });
}

/* ---------- boot ---------- */
function telaCarregando(titulo = "Procurando seu progresso…", texto = "O Caixote está buscando na sua conta onde você parou.") {
  return h("div", { class: "card centro pilha", style: { maxWidth: "420px", margin: "48px auto", padding: "28px" }, role: "status", "aria-live": "polite" },
    h("div", { style: { width: "96px", margin: "0 auto" } }, personagem("caixote")),
    h("h1", { style: { margin: 0, fontSize: "1.4rem" } }, titulo),
    h("p", { class: "muted", style: { margin: 0 } }, texto));
}

let routerIniciado = false;
async function boot() {
  definirResolverTermo((k) => { const t = termoPorChave(k); return t ? t.termo : null; });
  montarShell();
  router = criarRouter(ROTAS, { aoMudar: aoMudarRota });

  // 1) Conta: com Firebase configurado, a pessoa entra com Google (ou escolhe jogar sem conta).
  let fb = null, usuario = null, convidado = false;
  if (FIREBASE_CONFIG) {
    shell.classList.add("sem-hud", "imersivo");
    montar(main, telaCarregando("Abrindo o jogo…", "Só um instante."));
    try {
      const { iniciarFirebase } = await import("./nuvem/firebase.js");
      fb = await iniciarFirebase(FIREBASE_CONFIG);
      usuario = await fb.usuarioAtual();
      if (!usuario) {
        const { telaLogin, querJogarSemConta } = await import("./ui/login.js");
        if (querJogarSemConta()) convidado = true;
        else { const r = await telaLogin(main, fb); usuario = r.usuario || null; convidado = !!r.convidado; }
      }
    } catch (e) { console.error(e); fb = null; convidado = true; }
    definirAcoesConta({
      entrar: fb ? async () => { const { esquecerJogarSemConta } = await import("./ui/login.js"); esquecerJogarSemConta(); await fb.entrar(); location.reload(); } : null,
      sair: fb && usuario ? async () => { await fb.sair(); location.reload(); } : null,
    });
  }

  // 2) Progresso: uma chave local por conta, para duas pessoas no mesmo navegador não misturarem.
  const chaveLocal = usuario ? CHAVE_LOCAL + ":" + usuario.uid : CHAVE_LOCAL;
  if (usuario) {
    try { // quem jogou sem conta e depois entrou leva o progresso junto
      if (!localStorage.getItem(chaveLocal)) { const v = localStorage.getItem(CHAVE_LOCAL); if (v) { localStorage.setItem(chaveLocal, v); localStorage.removeItem(CHAVE_LOCAL); } }
    } catch { /* ignora */ }
  }
  const amb = { chaveLocal };
  if (FIREBASE_CONFIG) { amb.claude = null; if (usuario) amb.backend = fb.backend(usuario); else amb.convidado = true; }
  persist = criarPersistencia(store, amb, {
    onStatus: (st, detalhe) => hud && hud.definirSync(st, detalhe),
    onAviso: (t) => toast(t, "erro", { ms: 5000 }),
    onConta: (conta) => window.dispatchEvent(new CustomEvent(EVENTO_CONTA, { detail: conta })),
  });
  persist.carregarLocal();
  const temProgressoLocal = store.estado.jogador.criado;
  aplicarConfig(store.estado);
  store.assinar((s, motivo) => {
    aplicarConfig(s);
    if (routerIniciado && ["servidor", "importar", "reiniciar"].includes(motivo)) router.ir(router.atual().caminho);
  });
  configurarEventos();
  const sincronizacao = persist.iniciar();
  // Sem progresso neste navegador: espera a conta responder antes de decidir entre "continuar" e "criar personagem".
  const temConta = !!usuario || (!FIREBASE_CONFIG && typeof window.claude?.use === "function");
  if (!temProgressoLocal && temConta) {
    shell.classList.add("sem-hud", "imersivo");
    montar(main, telaCarregando());
    await Promise.race([sincronizacao, new Promise((r) => setTimeout(r, 12000))]);
  }
  // Nome sugerido no onboarding: o primeiro nome da conta Google.
  if (!store.estado.jogador.criado && usuario && usuario.displayName) store.estado.jogador.nome = usuario.displayName.split(" ")[0].slice(0, 30);
  routerIniciado = true;
  router.iniciar();
  monitorarTempo();
  window.__jornada = { store, router, persist }; // útil para depuração e testes
}

function falhaBoot(e) {
  console.error(e);
  montar(app, h("div", { style: { padding: "24px", fontFamily: "system-ui", maxWidth: "520px", margin: "0 auto" } }, h("h1", null, "Ops, o jogo não abriu"), h("p", null, "Recarregue a página. Se o problema continuar, seu progresso continua salvo neste aparelho e no Backup do Perfil.")));
}
boot().catch(falhaBoot);
