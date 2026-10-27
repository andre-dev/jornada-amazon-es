// Perfil: avatar, estatísticas, conquistas, loja, cenários, configurações, backup e recomeço.
import { h, limpar } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { tituloTela, barra, badge, fmt, fmtPct } from "../ui/components.js";
import { abrirModal, confirmar } from "../ui/modal.js";
import { toast } from "../ui/toast.js";
import { avatarSvg } from "../art/avatar.js";
import { criarEditorAvatar } from "../ui/avatarEditor.js";
import { infoNivel, acessorioDeNivel } from "../engine/xp.js";
import { contarLicoesConcluidas, contarChefesDerrotados, contarMissoes } from "../engine/rewards.js";
import { CONQUISTAS, RARIDADES } from "../content/achievements.js";
import { LOJA, SLOTS } from "../content/loja.js";
import { TOTAL_LICOES } from "../content/index.js";
import { MISSOES } from "../content/checklist.js";
import { montarBackup, nomeBackup, baixarArquivo, lerArquivoTexto, validarImportacao } from "../state/persistence.js";
import { som } from "../ui/sons.js";
import { cartaoConta } from "../ui/conta.js";

function interruptor(rotulo, dica, valor, aoMudar) {
  const t = h("input", { type: "checkbox", class: "toggle", checked: valor, role: "switch" });
  t.addEventListener("change", () => aoMudar(t.checked));
  return h("label", { class: "interruptor" }, h("span", null, h("strong", null, rotulo), dica ? h("span", { class: "dica", style: { display: "block", fontSize: ".85rem", color: "var(--tinta-2)" } }, dica) : null), t);
}
function tempoBR(seg) {
  const m = Math.round(seg / 60);
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)} h ${m % 60} min`;
}

export default function tela({ store, persist, ir }) {
  const raiz = h("div", { class: "pilha" });

  function desenhar() {
    const s = store.estado;
    const info = infoNivel(s.xp);
    const total = s.stats.acertos + s.stats.erros;
    limpar(raiz);

    const editar = () => {
      let av = { ...s.jogador.avatar };
      const nomeEl = h("input", { class: "entrada", type: "text", maxlength: "30", value: s.jogador.nome, "aria-label": "Seu nome" });
      const ed = criarEditorAvatar(av, (o) => { av = o; }, { nivelAcessorio: acessorioDeNivel(info.nivel), extra: { equipados: s.jogador.avatar.equipados } });
      abrirModal({ titulo: "Seu personagem", classe: "modal-largo", conteudo: [h("div", { class: "campo" }, h("label", null, "Nome"), nomeEl), ed.el],
        acoes: [{ texto: "Cancelar", classe: "card", valor: 0 }, { texto: "Salvar", classe: "oliva", onclick: (f) => { store.atualizarAvatar(av, nomeEl.value); f(); desenhar(); } }] });
    };

    raiz.append(
      tituloTela("Perfil", "Você, suas conquistas e as configurações."),
      h("section", { class: "card sol perfil-topo" },
        h("div", { class: "perfil-avatar" }, avatarSvg(s.jogador.avatar, { nivelAcessorio: acessorioDeNivel(info.nivel), titulo: "Avatar de " + s.jogador.nome })),
        h("div", { class: "perfil-info" },
          h("h2", { style: { margin: 0 } }, s.jogador.nome),
          h("p", { style: { margin: "0 0 6px" } }, `Nível ${info.nivel} · ${info.titulo}`),
          barra(info.progresso, { cor: "oliva", rotulo: "XP até o próximo nível" }),
          h("p", { class: "pequeno", style: { margin: "4px 0 10px" } }, `${fmt(info.xpNoNivel)} de ${fmt(info.xpNecessario)} XP para o próximo nível`),
          h("button", { class: "btn pequeno card", type: "button", onclick: editar }, "Editar personagem"))),
    );

    const stat = (n, r) => h("div", { class: "card stat-grande" }, h("div", { class: "n" }, n), h("div", { class: "r" }, r));
    raiz.append(h("section", null, h("h2", null, "Estatísticas"), h("div", { class: "grade stats" },
      stat(`${contarLicoesConcluidas(s)}/${TOTAL_LICOES}`, "lições"),
      stat(`${contarChefesDerrotados(s)}/9`, "chefes derrotados"),
      stat(total ? fmtPct(s.stats.acertos / total, 0) : "—", "acertos"),
      stat(tempoBR(s.stats.segundosEstudo), "de estudo"),
      stat(`${s.streak.atual} (${s.streak.melhor})`, "dias seguidos (melhor)"),
      stat(`${contarMissoes(s)}/${MISSOES.length}`, "missões reais"))));

    const ganhas = CONQUISTAS.filter((c) => s.conquistas[c.id]).length;
    raiz.append(h("section", { class: "pilha" }, h("h2", { style: { margin: 0 } }, `Conquistas (${ganhas}/${CONQUISTAS.length})`),
      h("ul", { class: "conquistas" }, CONQUISTAS.map((c) => {
        const ok = !!s.conquistas[c.id];
        const rar = RARIDADES[c.raridade] || { nome: "", cor: "#999" };
        return h("li", { class: "conquista" + (ok ? " ganha" : ""), style: { "--cor-rar": rar.cor } },
          h("div", { class: "conquista-ic" }, icone(ok ? c.icone : "cadeado", 26)),
          h("div", null, h("strong", null, c.nome), h("div", { class: "pequeno muted" }, c.desc), h("span", { class: "pequeno" }, ok ? "Raridade: " + rar.nome : "Bloqueada · " + rar.nome)));
      }))));

    // Loja
    const lojaEl = h("div", { class: "pilha" });
    for (const [slot, rotulo] of Object.entries(SLOTS)) {
      lojaEl.append(h("h3", { style: { margin: 0 } }, rotulo), h("div", { class: "grade lojinha" }, LOJA.filter((i) => i.tipo === slot).map((i) => {
        const tenho = s.jogador.avatar.itensLoja.includes(i.id);
        const eq = s.jogador.avatar.equipados[slot] === i.id;
        const acao = tenho
          ? h("button", { class: "btn pequeno " + (eq ? "oliva" : "card"), type: "button", "aria-pressed": String(eq), onclick: () => { store.equipar(slot, eq ? null : i.id); desenhar(); } }, eq ? "Equipado" : "Equipar")
          : h("button", { class: "btn pequeno sol", type: "button", disabled: s.moedas < i.preco, onclick: () => { const r = store.comprar(i.id); if (!r.ok) toast(r.erro, "erro"); else { som.moeda(); toast(`Comprou: ${i.nome}`, "ok"); } desenhar(); } }, icone("moeda", 16), String(i.preco));
        return h("div", { class: "card item-loja" }, h("div", { class: "item-emoji", "aria-hidden": "true" }, i.emoji), h("strong", null, i.nome), acao);
      })));
    }
    raiz.append(h("section", { class: "card pilha" }, h("div", { class: "linha" }, h("h2", { style: { margin: 0, flex: 1 } }, "Loja do Caixote"), h("span", { class: "hud-stat moedas" }, icone("moeda", 18), fmt(s.moedas))), h("p", { class: "muted pequeno", style: { margin: 0 } }, "Itens divertidos que você compra com moedas ganhas no jogo. Dinheiro de verdade nunca entra aqui."), lojaEl));

    // Cenários
    const cen = s.cenarios;
    raiz.append(h("section", { class: "card" }, h("h2", null, "Cenários salvos"), h("p", { style: { margin: "0 0 10px" } }, cen.length ? `Você tem ${cen.length} cenário(s) salvo(s) na Oficina.` : "Você ainda não salvou nenhum cenário."), h("a", { class: "btn mar pequeno", href: "#/oficina/margem" }, "Abrir a Oficina")));

    // Configurações
    raiz.append(h("section", { class: "card" }, h("h2", null, "Configurações"),
      h("div", { class: "interruptor" }, h("span", null, h("strong", null, "Tema")), (() => {
        const g = h("div", { class: "segmento", role: "group", "aria-label": "Tema" });
        const op = [["auto", "Automático"], ["light", "Claro"], ["dark", "Escuro"]];
        const bs = op.map(([v, t]) => h("button", { type: "button", "aria-pressed": String(s.config.tema === v), onclick: () => { store.configurar({ tema: v }); bs.forEach((b, i) => b.setAttribute("aria-pressed", String(op[i][0] === v))); } }, t));
        g.append(...bs); return g;
      })()),
      interruptor("Modo livre", "Abre todos os mundos e lições, sem precisar vencer os chefes. Bom para revisar.", s.config.modoLivre, (v) => store.configurar({ modoLivre: v })),
      interruptor("Sons", "Efeitos curtos de acerto, erro e moedas.", s.config.som, (v) => { store.configurar({ som: v }); if (v) som.moeda(); }),
      interruptor("Reduzir animações", "Menos movimento na tela.", s.config.reduzirAnimacoes, (v) => store.configurar({ reduzirAnimacoes: v }))));

    // Sincronização + backup
    const arq = h("input", { type: "file", accept: "application/json,.json", class: "sr-only", id: "arq-backup", "aria-label": "Escolher arquivo de backup" });
    arq.addEventListener("change", async () => {
      const f = arq.files && arq.files[0]; arq.value = "";
      if (!f) return;
      try {
        const r = validarImportacao(await lerArquivoTexto(f));
        if (!r.ok) { toast(r.erro, "erro", { ms: 5000 }); return; }
        const i2 = infoNivel(r.save.xp);
        if (await confirmar({ titulo: "Trocar seu progresso pelo backup?", texto: `O backup tem ${r.save.jogador.nome}, nível ${i2.nivel}. Seu progresso atual será substituído.`, ok: "Importar", perigo: true })) { store.importar(r.save); toast("Backup importado!", "ok"); }
      } catch (e) { toast(e.message || "Não consegui importar.", "erro", { ms: 5000 }); }
    });
    if (raiz.__destruir) raiz.__destruir();
    const conta = cartaoConta({ store, persist });
    raiz.__destruir = () => conta.__destruir();
    raiz.append(conta, h("section", { class: "card pilha" }, h("h2", { style: { margin: 0 } }, "Backup em arquivo"),
      h("p", { style: { margin: 0 } }, "Uma cópia extra do seu progresso num arquivo. Serve para guardar com você ou levar para outro navegador."),
      h("div", { class: "linha" },
        h("button", { class: "btn mar", type: "button", onclick: async () => { const r = await baixarArquivo(nomeBackup(), montarBackup(store.estado)); if (r.ok) toast("Backup pronto!", "ok"); else if (!r.cancelado) toast("Não consegui gerar o backup.", "erro"); } }, icone("download", 20), "Exportar backup"),
        h("label", { class: "btn card", for: "arq-backup", tabindex: "0", role: "button", onkeydown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); arq.click(); } } }, icone("upload", 20), "Importar backup")),
      arq));

    // Fontes, certificado, recomeçar
    const venceu = !!(s.chefes.chefao && s.chefes.chefao.derrotado);
    raiz.append(h("section", { class: "card pilha" },
      venceu ? h("a", { class: "btn sol", href: "#/certificado" }, icone("trofeu", 20), "Ver meu certificado") : null,
      h("a", { class: "btn card", href: "#/fontes" }, icone("link", 20), "Fontes e datas de verificação"),
      h("button", { class: "btn tomate", type: "button", onclick: async () => {
        if (!(await confirmar({ titulo: "Recomeçar a jornada?", texto: "Todo o seu progresso (XP, lições, missões, cenários e conquistas) será apagado deste aparelho.", ok: "Continuar", perigo: true }))) return;
        if (!(await confirmar({ titulo: "Tem certeza mesmo?", texto: "Isso não pode ser desfeito. Se tiver dúvida, exporte um backup antes.", ok: "Apagar tudo e recomeçar", perigo: true }))) return;
        store.reiniciar(); toast("Jornada reiniciada.", "ok");
      } }, "Recomeçar jornada")));
  }
  desenhar();
  return raiz;
}
