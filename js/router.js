// Hash router mínimo: "#/mundo/2", "#/licao/2-3"... Funciona dentro do Artifact e com o botão voltar do celular.

export function criarRouter(rotas, { aoMudar, naoEncontrada } = {}) {
  const compiladas = rotas.map((r) => {
    const nomes = [];
    const re = new RegExp("^" + r.padrao.replace(/\/:([a-zA-Z]+)/g, (_, n) => { nomes.push(n); return "/([^/]+)"; }) + "/?$");
    return { ...r, re, nomes };
  });

  function lerHash() {
    let h = (typeof location !== "undefined" ? location.hash : "") || "";
    h = h.replace(/^#/, "");
    if (!h.startsWith("/")) h = "/" + h;
    const [caminho, consulta = ""] = h.split("?");
    const query = {};
    for (const par of consulta.split("&").filter(Boolean)) { const [k, v = ""] = par.split("="); try { query[decodeURIComponent(k)] = decodeURIComponent(v); } catch { /* ignora */ } }
    return { caminho: caminho === "/" ? "/mapa" : caminho, query };
  }

  function resolver() {
    const { caminho, query } = lerHash();
    for (const r of compiladas) {
      const m = r.re.exec(caminho);
      if (m) {
        const params = {};
        r.nomes.forEach((n, i) => { try { params[n] = decodeURIComponent(m[i + 1]); } catch { params[n] = m[i + 1]; } });
        return { rota: r, params, query, caminho };
      }
    }
    return { rota: naoEncontrada || null, params: {}, query, caminho };
  }

  const api = {
    iniciar() {
      window.addEventListener("hashchange", () => aoMudar(resolver()));
      aoMudar(resolver());
    },
    ir(caminho, { substituir = false } = {}) {
      const alvo = "#" + caminho;
      if (substituir) { history.replaceState(null, "", alvo); aoMudar(resolver()); }
      else if (location.hash === alvo) aoMudar(resolver());
      else location.hash = alvo;
    },
    voltar(padrao = "/mapa") {
      if (history.length > 1) history.back(); else api.ir(padrao);
    },
    atual: resolver,
  };
  return api;
}
