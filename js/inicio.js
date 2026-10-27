// Ponto de entrada: escolhe o idioma ANTES de carregar o jogo,
// para que todos os textos (inclusive os definidos ao carregar cada módulo) já saiam traduzidos.
import { definirIdioma, detectarIdioma, CHAVE_IDIOMA, tr } from "./i18n/index.js";

let id = null;
try { id = localStorage.getItem(CHAVE_IDIOMA); } catch { /* ignora */ }
if (!["pt", "es", "en"].includes(id)) id = detectarIdioma();
try { await definirIdioma(id); } catch (e) { console.warn("idioma:", e); await definirIdioma("pt"); }
const pular = document.querySelector(".pular");
if (pular) pular.textContent = tr("Pular para o conteúdo");
await import("./main.js");
