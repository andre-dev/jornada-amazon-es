import test from "node:test";
import assert from "node:assert/strict";
import { saveNovo, migrar, validarImportacao, VERSAO_SAVE, normalizar } from "../js/state/schema.js";
import { criarStore } from "../js/state/store.js";
import { criarPersistencia, montarBackup } from "../js/state/persistence.js";
import { MUNDOS, proximoPasso, mundoLiberado, licaoLiberada, chefeLiberado } from "../js/content/index.js";

test("migrar: v0 (lista de lições) vira v2 com padrões", () => {
  const s = migrar({ nome: "Ana", xp: 120, licoes: ["1-1", "1-2"] });
  assert.equal(s.versao, VERSAO_SAVE);
  assert.equal(s.jogador.nome, "Ana");
  assert.equal(s.licoes["1-1"].concluida, true);
  assert.equal(s.jogador.criado, true);
  assert.deepEqual(s.contadores.termosVistos, {});
  assert.equal(s.config.tema, "auto");
});
test("migrar: v1 ganha contadores/ultimo/criado e não perde dados", () => {
  const v1 = { versao: 1, xp: 50, moedas: 7, jogador: { nome: "João", avatar: { pele: 2 } }, cenarios: [{ id: "a1", nome: "X", entradas: { preco: 10 } }] };
  const s = migrar(v1);
  assert.equal(s.xp, 50); assert.equal(s.moedas, 7); assert.equal(s.jogador.avatar.pele, 2);
  assert.equal(s.contadores.margens, 1); assert.equal(s.cenarios.length, 1); assert.equal(s.jogador.criado, true);
  assert.deepEqual(s.ultimo, { licao: "", card: 0 });
});
test("migrar: lixo, nulos e versões futuras não quebram", () => {
  for (const x of [null, undefined, 5, "texto", [], {}]) assert.equal(migrar(x).versao, VERSAO_SAVE);
  const f = migrar({ versao: 99, xp: 10 });
  assert.equal(f.xp, 10); assert.equal(f.versao, VERSAO_SAVE);
});
test("normalizar: limita valores, filtra chaves perigosas e tipos errados", () => {
  const s = normalizar({ xp: -5, moedas: "nada", jogador: { nome: "x".repeat(100), avatar: { pele: 99, cabelo: -1, itensLoja: ["__proto__", "ok-item", 3] } }, licoes: { "__proto__": { concluida: true }, "1-1": { concluida: true, melhorAcerto: 7 } }, config: { tema: "roxo" }, cenarios: Array.from({ length: 50 }, (_, i) => ({ id: "c" + i, nome: "n", entradas: { a: 1, "b b": 2 } })) });
  assert.equal(s.xp, 0); assert.equal(s.moedas, 0); assert.equal(s.jogador.nome.length, 30);
  assert.equal(s.jogador.avatar.pele, 4); assert.equal(s.jogador.avatar.cabelo, 0);
  assert.deepEqual(s.jogador.avatar.itensLoja, ["ok-item"]);
  assert.equal(Object.keys(s.licoes).join(), "1-1"); assert.equal(s.licoes["1-1"].melhorAcerto, 1);
  assert.equal(s.config.tema, "auto"); assert.equal(s.cenarios.length, 30);
  assert.deepEqual(Object.keys(s.cenarios[0].entradas), ["a"]);
});
test("validarImportacao", () => {
  assert.equal(validarImportacao("não é json").ok, false);
  assert.equal(validarImportacao("[1,2]").ok, false);
  assert.equal(validarImportacao('{"foo":1}').ok, false);
  const bom = validarImportacao(JSON.stringify({ app: "x", save: { versao: 2, xp: 300, jogador: { nome: "Z" } } }));
  assert.equal(bom.ok, true); assert.equal(bom.save.xp, 300);
  assert.equal(validarImportacao(JSON.stringify({ xp: 12 })).save.xp, 12);
});
test("backup exporta e reimporta igual", () => {
  const s = saveNovo(); s.xp = 777; s.jogador.nome = "Teste";
  const r = validarImportacao(montarBackup(s));
  assert.equal(r.ok, true); assert.equal(r.save.xp, 777); assert.equal(r.save.jogador.nome, "Teste");
});

/* ---------- store ---------- */
const relogio = (iso) => ({ hoje: () => iso.slice(0, 10), agora: () => new Date(iso) });
test("store: ver cards rende XP só uma vez; concluir lição paga e libera próxima", () => {
  const st = criarStore(null, relogio("2026-10-26T10:00:00Z"));
  const eventos = []; st.aoEvento((e) => eventos.push(e));
  st.verCard("1-1", 0); st.verCard("1-1", 1); st.verCard("1-1", 1);
  assert.equal(st.estado.xp, 10); assert.equal(st.estado.licoes["1-1"].cardsVistos, 2);
  const r = st.concluirLicao("1-1", { acertos: 4, total: 4, totalCards: 3 });
  assert.equal(r.primeira, true);
  assert.equal(st.estado.xp, 10 + 5 + 50 + 40 + 20); // 3o card + lição + acertos + perfeito
  assert.equal(st.estado.contadores.perfeitos, 1);
  const r2 = st.concluirLicao("1-1", { acertos: 4, total: 4, totalCards: 3 });
  assert.equal(r2.xp, 0); assert.equal(st.estado.contadores.perfeitos, 1);
  assert.ok(st.estado.conquistas["primeira-licao"]); assert.ok(st.estado.conquistas["quiz-perfeito"]);
  assert.ok(eventos.some((e) => e.tipo === "conquista" && e.id === "primeira-licao"));
  const m1 = MUNDOS[0];
  assert.equal(licaoLiberada(st.estado, m1, "1-2"), true); assert.equal(licaoLiberada(st.estado, m1, "1-3"), false);
});
test("store: subir de nível dispara evento", () => {
  const st = criarStore(null, relogio("2026-10-26T10:00:00Z"));
  const ev = []; st.aoEvento((e) => ev.push(e));
  st.concluirLicao("1-1", { acertos: 4, total: 4, totalCards: 8 });
  assert.ok(ev.some((e) => e.tipo === "nivel" && e.para === 2));
});
test("store: chefe só paga na primeira vitória e libera o mundo seguinte", () => {
  const st = criarStore(null, relogio("2026-10-26T10:00:00Z"));
  const m1 = MUNDOS[0], m2 = MUNDOS[1];
  assert.equal(mundoLiberado(st.estado, m2), false); assert.equal(chefeLiberado(st.estado, m1), false);
  for (const l of m1.licoes) st.concluirLicao(l.id, { acertos: 3, total: 3, totalCards: 5 });
  assert.equal(chefeLiberado(st.estado, m1), true);
  st.iniciarChefe("nevoeiro");
  const antes = st.estado.xp;
  const r = st.finalizarChefe("nevoeiro", { venceu: true });
  assert.equal(r.primeira, true); assert.equal(st.estado.xp, antes + 200);
  assert.equal(mundoLiberado(st.estado, m2), true);
  const r2 = st.finalizarChefe("nevoeiro", { venceu: true }); assert.equal(r2.xp, 0);
  assert.ok(st.estado.conquistas["boss-nevoeiro"]);
  st.finalizarChefe("burocratio", { venceu: false });
  assert.equal(st.estado.chefes.burocratio.derrotado, false);
});
test("store: modo livre abre tudo", () => {
  const st = criarStore(null);
  st.configurar({ modoLivre: true });
  assert.equal(mundoLiberado(st.estado, MUNDOS[8]), true); assert.equal(licaoLiberada(st.estado, MUNDOS[8], "9-3"), true); assert.equal(chefeLiberado(st.estado, MUNDOS[8]), true);
});
test("store: missões pagam XP uma vez só", () => {
  const st = criarStore(null, relogio("2026-10-26T10:00:00Z"));
  st.alternarMissao("abrir-conta", true); assert.equal(st.estado.xp, 100); assert.equal(st.estado.moedas, 20);
  st.alternarMissao("abrir-conta", false); st.alternarMissao("abrir-conta", true);
  assert.equal(st.estado.xp, 100);
  st.salvarNota("abrir-conta", "olá"); assert.equal(st.estado.checklist["abrir-conta"].nota, "olá");
});
test("store: loja — compra, saldo insuficiente, equipar", () => {
  const st = criarStore(null);
  assert.equal(st.comprar("chapeu-viseira").ok, false);
  st.estado.moedas = 100;
  assert.equal(st.comprar("chapeu-viseira").ok, true); assert.equal(st.estado.moedas, 60);
  assert.equal(st.estado.jogador.avatar.equipados.chapeu, "chapeu-viseira");
  assert.equal(st.comprar("chapeu-viseira").ok, false);
  st.equipar("chapeu", null); assert.equal(st.estado.jogador.avatar.equipados.chapeu, null);
  st.equipar("fundo", "chapeu-viseira"); assert.equal(st.estado.jogador.avatar.equipados.fundo, null);
  assert.ok(st.estado.conquistas["primeira-compra"]);
});
test("store: cenários limitados a 30 e removíveis", () => {
  const st = criarStore(null);
  for (let i = 0; i < 35; i++) st.salvarCenario({ nome: "c" + i, entradas: { a: i } });
  assert.equal(st.estado.cenarios.length, 30);
  st.removerCenario(st.estado.cenarios[0].id); assert.equal(st.estado.cenarios.length, 29);
});
test("proximoPasso: começa na 1-1, retoma a lição em andamento, cai no chefe depois das lições", () => {
  const st = criarStore(null, relogio("2026-10-26T10:00:00Z"));
  assert.equal(proximoPasso(st.estado).id, "1-1");
  st.concluirLicao("1-1", { acertos: 1, total: 1, totalCards: 1 });
  assert.equal(proximoPasso(st.estado).id, "1-2");
  st.verCard("1-2", 1);
  const p = proximoPasso(st.estado); assert.equal(p.id, "1-2"); assert.equal(p.retomar, true);
  for (const l of MUNDOS[0].licoes) st.concluirLicao(l.id, { acertos: 1, total: 1, totalCards: 1 });
  assert.equal(proximoPasso(st.estado).tipo, "chefe");
});

/* ---------- persistência (com db falso) ---------- */
function memStorage() { const m = {}; return { getItem: (k) => (k in m ? m[k] : null), setItem: (k, v) => { m[k] = v; }, removeItem: (k) => { delete m[k]; }, _m: m }; }
function dbFalso({ docInicial = null, falhar = null } = {}) {
  const dados = { doc: docInicial, sets: 0 };
  const ref = { async get() { return { exists: dados.doc !== null, data: () => dados.doc }; }, async set(d) { if (falhar) throw { code: falhar }; dados.doc = JSON.parse(JSON.stringify(d)); dados.sets++; } };
  return { dados, claude: { use: async (n) => (n === "user" ? { id: async () => "u1" } : n === "db" ? { doc: (p) => { if (p.endsWith("/save")) dados.path = p; return ref; } } : null) } };
}
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

test("persistência: sem claude funciona só local", async () => {
  const storage = memStorage(); const st = criarStore();
  const status = [];
  const p = criarPersistencia(st, { storage, claude: undefined, document: null }, { onStatus: (s) => status.push(s) });
  assert.equal(p.carregarLocal(), false);
  await p.iniciar();
  st.verCard("1-1", 0);
  assert.ok(storage._m["jornada-amazon-es:save"]);
  assert.equal(JSON.parse(storage._m["jornada-amazon-es:save"]).xp, 5);
  assert.equal(status.at(-1), "local");
  // recarrega
  const st2 = criarStore(); const p2 = criarPersistencia(st2, { storage, claude: undefined, document: null });
  assert.equal(p2.carregarLocal(), true); assert.equal(st2.estado.xp, 5);
});
test("persistência: localStorage quebrado não derruba", async () => {
  const quebrado = { getItem() { throw new Error("x"); }, setItem() { throw new Error("x"); } };
  const st = criarStore(); const p = criarPersistencia(st, { storage: quebrado, claude: undefined, document: null });
  assert.equal(p.carregarLocal(), false); await p.iniciar(); st.verCard("1-1", 0); assert.equal(st.estado.xp, 5);
});
test("persistência: db vazio recebe o save local (debounce, uma escrita)", async () => {
  const { dados, claude } = dbFalso(); const storage = memStorage(); const st = criarStore();
  const p = criarPersistencia(st, { storage, claude, document: null });
  p.carregarLocal(); await p.iniciar();
  assert.equal(dados.path, "data/users/u1/save");
  assert.equal(dados.sets, 1); // envio inicial (doc não existia)
  st.verCard("1-1", 0); st.verCard("1-1", 1); st.verCard("1-1", 2);
  await esperar(100); assert.equal(dados.sets, 1);
  await esperar(2200); assert.equal(dados.sets, 2); assert.equal(dados.doc.xp, 15);
});
test("persistência: servidor mais novo vence o local; local mais novo é enviado", async () => {
  const velho = { ...saveNovo(new Date("2026-01-01")), xp: 10 };
  const novo = { ...saveNovo(new Date("2026-06-01")), xp: 999 }; novo.atualizadoEm = "2026-06-01T00:00:00.000Z";
  velho.atualizadoEm = "2026-01-01T00:00:00.000Z";
  // servidor novo
  { const { claude } = dbFalso({ docInicial: novo }); const storage = memStorage(); storage.setItem("jornada-amazon-es:save", JSON.stringify(velho));
    const st = criarStore(); const p = criarPersistencia(st, { storage, claude, document: null }); p.carregarLocal(); assert.equal(st.estado.xp, 10); await p.iniciar(); assert.equal(st.estado.xp, 999); }
  // local novo
  { const { dados, claude } = dbFalso({ docInicial: velho }); const storage = memStorage(); storage.setItem("jornada-amazon-es:save", JSON.stringify(novo));
    const st = criarStore(); const p = criarPersistencia(st, { storage, claude, document: null }); p.carregarLocal(); await p.iniciar(); assert.equal(st.estado.xp, 999); assert.equal(dados.doc.xp, 999); }
});
test("persistência: erro quota/invalid_argument desliga a nuvem e avisa uma vez; segue local", async () => {
  const { claude } = dbFalso({ falhar: "quota_exceeded" }); const storage = memStorage(); const st = criarStore();
  const avisos = []; const status = [];
  const p = criarPersistencia(st, { storage, claude, document: null }, { onAviso: (t) => avisos.push(t), onStatus: (s) => status.push(s) });
  p.carregarLocal(); await p.iniciar();
  st.verCard("1-1", 0); await esperar(2200);
  st.verCard("1-1", 1); await esperar(2200);
  assert.equal(avisos.length, 1); assert.equal(status.at(-1), "local");
  assert.equal(JSON.parse(storage._m["jornada-amazon-es:save"]).xp, 10);
});
test("persistência: user.id nulo mantém só local", async () => {
  const claude = { use: async (n) => (n === "user" ? { id: async () => null } : { doc: () => { throw new Error("não deveria"); } }) };
  const st = criarStore(); const p = criarPersistencia(st, { storage: memStorage(), claude, document: null });
  assert.equal(await p.iniciar(), false);
});

/* ---------- regra de qual cópia vence (proteção contra perda de progresso) ---------- */
import { escolherSave as _escolher, criarPersistencia as _criarP } from "../js/state/persistence.js";
import { saveNovo as _novo } from "../js/state/schema.js";
import { criarStore as _criarStore } from "../js/state/store.js";

function _save(xp, atualizadoEm, extra = {}) { const s = _novo(new Date("2026-10-01T10:00:00Z")); s.jogador.criado = true; s.xp = xp; s.atualizadoEm = atualizadoEm; return Object.assign(s, extra); }

test("personagem recém-criado (mais novo) NÃO apaga progresso da nuvem", () => {
  const nuvem = _save(1200, "2026-10-26T10:00:00Z");
  const novoNoAparelho = _save(0, "2026-10-27T09:00:00Z");
  assert.equal(_escolher(novoNoAparelho, nuvem), "remoto");
});
test("save vazio local perde para a nuvem; nuvem vazia perde para o local", () => {
  assert.equal(_escolher(_novo(), _save(50, "2026-10-01T00:00:00Z")), "remoto");
  assert.equal(_escolher(_save(50, "2026-10-01T00:00:00Z"), _novo()), "local");
});
test("mesma jornada: mais XP vence; empate de XP: mais recente vence", () => {
  assert.equal(_escolher(_save(300, "2026-10-01T00:00:00Z"), _save(200, "2026-10-02T00:00:00Z")), "local");
  assert.equal(_escolher(_save(300, "2026-10-01T00:00:00Z"), _save(300, "2026-10-02T00:00:00Z")), "remoto");
  assert.equal(_escolher(_save(300, "2026-10-02T00:00:00Z"), _save(300, "2026-10-02T00:00:00Z")), "igual");
});
test("recomeçar a jornada de propósito vence mesmo com menos XP", () => {
  const reiniciado = _save(10, "2026-10-27T00:00:00Z", { reiniciadoEm: "2026-10-27T00:00:00Z" });
  assert.equal(_escolher(reiniciado, _save(5000, "2026-10-26T00:00:00Z")), "local");
});

function _dbFalso(inicial = {}) {
  const docs = { ...inicial };
  return { docs, db: { doc: (p) => ({ get: async () => ({ exists: p in docs, data: () => docs[p] }), set: async (d) => { docs[p] = JSON.parse(JSON.stringify(d)); } }) } };
}
test("ao abrir num navegador vazio, puxa o progresso da conta e guarda cópia de segurança quando descarta algo", async () => {
  const nuvem = _save(900, "2026-10-26T10:00:00Z");
  const { docs, db } = _dbFalso({ "data/users/u1/save": nuvem });
  const claude = { use: async (n) => (n === "db" ? db : { id: async () => "u1", me: async () => ({ name: "Ana" }), can: async () => true }) };
  const mem = {}; const storage = { getItem: (k) => mem[k] ?? null, setItem: (k, v) => { mem[k] = v; }, removeItem: (k) => { delete mem[k]; } };
  const st = _criarStore();
  const contas = [];
  const p = _criarP(st, { claude, storage, document: null }, { onConta: (c) => contas.push(c) });
  p.carregarLocal();
  const ok = await p.iniciar();
  assert.equal(ok, true);
  assert.equal(st.estado.xp, 900);
  assert.equal(contas.at(-1).nuvem, true);
  assert.equal(contas.at(-1).nome, "Ana");
  // depois, um save com menos XP no servidor não sobrescreve o local, e o do servidor vira cópia
  docs["data/users/u1/save"] = _save(100, "2026-10-28T00:00:00Z");
  await p.puxar();
  assert.equal(st.estado.xp, 900);
  assert.equal(docs["data/users/u1/copia"].save.xp, 100);
});
test("sem permissão de escrita: avisa que salva só no navegador", async () => {
  const { db } = _dbFalso();
  const claude = { use: async (n) => (n === "db" ? db : { id: async () => "u2", me: async () => ({ name: "" }), can: async () => false }) };
  const st = _criarStore();
  const contas = [];
  const p = _criarP(st, { claude, storage: { getItem: () => null, setItem() {}, removeItem() {} }, document: null }, { onConta: (c) => contas.push(c) });
  assert.equal(await p.iniciar(), false);
  assert.equal(contas.at(-1).nuvem, false);
  assert.equal(contas.at(-1).motivo, "sem-permissao");
});
