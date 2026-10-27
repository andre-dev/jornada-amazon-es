// Motor de batalha contra chefe. Puro.
import { prepararVisao, avaliar, textoCorreto, posicaoCorreta } from "./quiz.js";

/**
 * config: { perguntas, hp=100, vidas=3 }  (chefe comum)
 *         { fases: [{ nome, perguntas }], hp=100, vidas=5, curaPorFase=1 }  (Chefão: uma barra de HP por fase)
 * Dano por acerto = ceil(hp / (nPerguntasDaFase - (vidas-1))) -> acertar tudo menos (vidas-1) erros sempre derrota a fase.
 * Combo: a cada 3 acertos seguidos o golpe é crítico (dano x2) e o combo zera.
 */
export function criarBatalha(config, { rnd = Math.random } = {}) {
  const hpMax = config.hp ?? 100;
  const vidasMax = config.vidas ?? 3;
  const cura = config.curaPorFase ?? 0;
  const fasesCfg = config.fases && config.fases.length ? config.fases : [{ nome: "", perguntas: config.perguntas }];
  const fases = fasesCfg.map((f) => ({ nome: f.nome || "", perguntas: embaralhar(f.perguntas, rnd) }));

  let fase = 0, idx = 0, vidas = vidasMax, combo = 0, melhorCombo = 0;
  let hp = hpMax;
  let visao = null, respondida = false;
  let fim = null; // "vitoria" | "derrota"
  const erros = []; // { id, licaoRef }
  let acertos = 0;

  const dano = (f) => Math.max(1, Math.ceil(hpMax / Math.max(1, f.perguntas.length - (vidasMax - 1))));

  const api = {
    get fase() { return fase; },
    get totalFases() { return fases.length; },
    get nomeFase() { return fases[fase] ? fases[fase].nome : ""; },
    get hp() { return hp; },
    get hpMax() { return hpMax; },
    get vidas() { return vidas; },
    get vidasMax() { return vidasMax; },
    get combo() { return combo; },
    get fim() { return fim; },
    get numeroPergunta() { return idx + 1; },
    get totalNaFase() { return fases[fase] ? fases[fase].perguntas.length : 0; },
    get erros() { return erros.slice(); },
    get acertos() { return acertos; },
    get melhorCombo() { return melhorCombo; },
    get totalPerguntas() { return fases.reduce((a, f) => a + f.perguntas.length, 0); },
    atual() {
      if (fim) return null;
      if (!visao) { visao = prepararVisao(fases[fase].perguntas[idx], rnd); respondida = false; }
      return visao;
    },
    responder(resposta) {
      const v = api.atual();
      if (!v || respondida) return null;
      respondida = true;
      const correto = avaliar(v, resposta);
      let danoCausado = 0, critico = false;
      if (correto) {
        acertos++;
        combo++;
        if (combo > melhorCombo) melhorCombo = combo;
        danoCausado = dano(fases[fase]);
        if (combo >= 3) { critico = true; danoCausado *= 2; combo = 0; }
        hp = Math.max(0, hp - danoCausado);
      } else {
        combo = 0;
        vidas = Math.max(0, vidas - 1);
        erros.push({ id: v.q.id, licaoRef: v.q.licaoRef });
        if (vidas === 0) fim = "derrota";
      }
      return { correto, danoCausado, critico, vidas, hp, combo, explicacao: v.q.explicacao, textoCorreto: textoCorreto(v), posicaoCorreta: posicaoCorreta(v), derrota: fim === "derrota" };
    },
    /** Avança. Retorna { evento: "pergunta"|"fase"|"vitoria"|"derrota" }. */
    proxima() {
      if (!respondida) return null;
      visao = null; respondida = false;
      if (fim === "derrota") return { evento: "derrota" };
      const f = fases[fase];
      idx++;
      if (hp <= 0 || idx >= f.perguntas.length) {
        if (fase + 1 >= fases.length) { fim = "vitoria"; return { evento: "vitoria" }; }
        fase++; idx = 0; hp = hpMax; combo = 0; vidas = Math.min(vidasMax, vidas + cura);
        return { evento: "fase", fase };
      }
      return { evento: "pergunta" };
    },
    /** Lições para revisar, sem repetição, em ordem de aparição. */
    licoesParaRevisar() {
      const vistas = [];
      for (const e of erros) if (e.licaoRef && !vistas.includes(e.licaoRef)) vistas.push(e.licaoRef);
      return vistas;
    },
  };
  return api;
}

function embaralhar(arr, rnd) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
