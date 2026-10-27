// Certificado do Chefão: avatar coroado, confete, impressão e download em SVG.
import { tr, localAtual } from "../i18n/index.js";
import { h } from "../ui/dom.js";
import { icone } from "../ui/icons.js";
import { estadoVazio } from "../ui/components.js";
import { esc } from "../ui/dom.js";
import { avatarSvg, avatarSvgString } from "../art/avatar.js";
import { infoNivel } from "../engine/xp.js";
import { contarLicoesConcluidas, contarMissoes } from "../engine/rewards.js";
import { TOTAL_LICOES } from "../content/index.js";
import { baixarArquivo } from "../state/persistence.js";
import { confete } from "../ui/confetti.js";
import { toast } from "../ui/toast.js";

function dataExtensa(iso) {
  const d = iso ? new Date(iso) : new Date();
  return (Number.isNaN(d.getTime()) ? new Date() : d).toLocaleDateString(localAtual(), { day: "numeric", month: "long", year: "numeric" });
}

function certificadoSvg(s, nivel, data) {
  const av = avatarSvgString(s.jogador.avatar, { nivelAcessorio: "coroa", titulo: tr("Avatar de {nome}", { nome: s.jogador.nome }) }).replace("<svg ", '<svg x="450" y="170" width="300" height="300" ');
  const linhas = [tr("{f} de {t} lições", { f: contarLicoesConcluidas(s), t: TOTAL_LICOES }), tr("Nível {n}", { n: nivel }), tr("{n} missões da vida real", { n: contarMissoes(s) })];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850" font-family="Trebuchet MS, Arial, sans-serif">
<rect width="1200" height="850" fill="#FFF6E5"/><rect x="24" y="24" width="1152" height="802" rx="36" fill="#FFFFFF" stroke="#22223B" stroke-width="8"/>
<rect x="48" y="48" width="1104" height="754" rx="26" fill="none" stroke="#FFC23C" stroke-width="6" stroke-dasharray="4 14" stroke-linecap="round"/>
<text x="600" y="130" text-anchor="middle" font-size="48" font-weight="700" fill="#22223B">Certificado de Conclusão</text>
<text x="600" y="168" text-anchor="middle" font-size="24" fill="#4A4A68">Jornada Amazon Espanha</text>
${av}
<text x="600" y="530" text-anchor="middle" font-size="26" fill="#4A4A68">Este certificado reconhece que</text>
<text x="600" y="600" text-anchor="middle" font-size="72" font-weight="700" fill="#FF5A4E">${esc(s.jogador.nome)}</text>
<text x="600" y="652" text-anchor="middle" font-size="26" fill="#22223B">derrotou o Chefão das Vendas e concluiu a jornada de vendedor na Amazon Espanha.</text>
<text x="600" y="712" text-anchor="middle" font-size="22" fill="#4A4A68">${esc(linhas.join("  ·  "))}</text>
<text x="600" y="770" text-anchor="middle" font-size="22" fill="#4A4A68">${esc(data)}</text>
<text x="600" y="800" text-anchor="middle" font-size="14" fill="#7A7A94">Projeto educativo independente, sem vínculo com a Amazon.</text>
</svg>`;
}

export default function tela({ store }) {
  const s = store.estado;
  const reg = s.chefes.chefao;
  if (!(reg && reg.derrotado)) {
    return h("div", { class: "pilha" }, estadoVazio(tr("Certificado trancado"), tr("Derrote o Chefão das Vendas no mundo 9 para receber o seu certificado."), h("a", { class: "btn oliva", href: "#/mapa" }, tr("Voltar ao mapa"))));
  }
  const info = infoNivel(s.xp);
  const data = dataExtensa(reg.derrotadoEm);
  setTimeout(() => confete({ estilo: "padrao", quantidade: 160, reduzir: s.config.reduzirAnimacoes }), 300);

  const cert = h("article", { class: "certificado", "aria-label": tr("Certificado de conclusão") },
    h("p", { class: "cert-topo" }, tr("Jornada Amazon Espanha")),
    h("h1", null, tr("Certificado de Conclusão")),
    h("div", { class: "cert-avatar" }, avatarSvg(s.jogador.avatar, { nivelAcessorio: "coroa", titulo: tr("Avatar de {nome}", { nome: s.jogador.nome }) })),
    h("p", { class: "cert-pequeno" }, tr("Este certificado reconhece que")),
    h("p", { class: "cert-nome" }, s.jogador.nome),
    h("p", null, tr("derrotou o Chefão das Vendas e concluiu a jornada de vendedor na Amazon Espanha.")),
    h("ul", { class: "cert-stats" },
      h("li", null, tr("{f} de {t} lições", { f: contarLicoesConcluidas(s), t: TOTAL_LICOES })), h("li", null, tr("Nível {n} · {titulo}", { n: info.nivel, titulo: info.titulo })), h("li", null, tr("{n} missões da vida real", { n: contarMissoes(s) }))),
    h("p", { class: "cert-pequeno" }, data),
    h("p", { class: "cert-rodape" }, tr("Projeto educativo independente, sem vínculo com a Amazon.")));

  return h("div", { class: "pilha cert-tela" },
    h("div", { class: "linha cert-acoes" },
      h("a", { class: "btn card", href: "#/perfil" }, icone("voltar", 20), tr("Perfil")),
      h("span", { class: "espaco" }),
      h("button", { class: "btn mar", type: "button", onclick: async () => { const r = await baixarArquivo("certificado-jornada-amazon-es.svg", certificadoSvg(s, info.nivel, data), "image/svg+xml"); if (r.ok) toast(tr("Certificado salvo!"), "ok"); else if (!r.cancelado) toast(tr("Não consegui salvar o arquivo."), "erro"); } }, icone("download", 20), tr("Baixar (SVG)")),
      h("button", { class: "btn sol", type: "button", onclick: () => { try { window.print(); } catch { toast(tr("Seu navegador bloqueou a impressão. Use o botão Baixar."), "erro"); } } }, tr("Imprimir"))),
    cert);
}
