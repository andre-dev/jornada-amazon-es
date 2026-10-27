// Ranking entre jogadores: publica um resumo público do progresso (nome do personagem, nível, XP).
// Nunca publica e-mail nem o save completo. Quem desliga "Aparecer no ranking" sai da lista.
import { infoNivel } from "../engine/xp.js";
import { contarLicoesConcluidas, contarChefesDerrotados } from "../engine/rewards.js";

const DEBOUNCE_MS = 4000;
const CHAVES_AVATAR = ["pele", "cabelo", "corCabelo", "barba", "roupa", "acessorio"];

/** O que vai para o ranking (precisa bater com as regras do Firestore). */
export function dadosRanking(save) {
  const a = save.jogador.avatar || {};
  const avatar = {};
  for (const k of CHAVES_AVATAR) avatar[k] = Number.isInteger(a[k]) ? a[k] : 0;
  avatar.chapeu = (a.equipados && typeof a.equipados.chapeu === "string") ? a.equipados.chapeu.slice(0, 60) : "";
  return {
    nome: (String(save.jogador.nome || "").trim() || "Jogador").slice(0, 30),
    xp: Math.max(0, Math.min(100000, Math.round(save.xp || 0))),
    nivel: infoNivel(save.xp || 0).nivel,
    licoes: contarLicoesConcluidas(save),
    chefes: contarChefesDerrotados(save),
    avatar,
  };
}

/**
 * Mantém ranking/{uid} em dia com o progresso. `api` = fb.ranking.
 * Só publica quem já criou o personagem e deixou "Aparecer no ranking" ligado.
 */
export function criarSincRanking(store, api, uid, pronto = Promise.resolve()) {
  let timer = null;
  let ultimo = "";
  let ocupado = false;
  let removido = false;

  async function sincronizar() {
    await pronto;
    if (ocupado) { agendar(); return; }
    const s = store.estado;
    ocupado = true;
    try {
      if (!s.config.ranking) {
        if (!removido) { await api.remover(uid); removido = true; ultimo = ""; }
      } else if (s.jogador.criado) {
        const dados = dadosRanking(s);
        const corpo = JSON.stringify(dados);
        if (corpo !== ultimo) { await api.publicar(uid, dados); ultimo = corpo; removido = false; }
      }
    } catch (e) {
      console.warn("ranking:", e && e.code);
    } finally { ocupado = false; }
  }
  function agendar() { clearTimeout(timer); timer = setTimeout(sincronizar, DEBOUNCE_MS); }

  store.assinar((estado, motivo) => { if (motivo !== "carga") agendar(); });
  agendar();
  return { sincronizarAgora: () => { clearTimeout(timer); return sincronizar(); } };
}
