// Service worker: deixa o jogo abrir sem internet e instalável como app.
// Na publicação, o GitHub Actions troca __VERSAO__ pelo commit e __ARQUIVOS__ pela lista de arquivos.
// Sem esses valores (rodando local), ele não guarda nada e só repassa as requisições.
const VERSAO = "__VERSAO__";
const ARQUIVOS = "__ARQUIVOS__";
const ATIVO = !VERSAO.startsWith("__");
const CACHE_APP = "jornada-app-" + VERSAO;
const CACHE_EXTERNO = "jornada-externo-v1";
// Bibliotecas e fontes de fora que o jogo usa (Firebase e Google Fonts).
const EXTERNOS = ["https://www.gstatic.com/firebasejs/", "https://fonts.googleapis.com/", "https://fonts.gstatic.com/"];

self.addEventListener("install", (e) => {
  if (!ATIVO) { self.skipWaiting(); return; }
  e.waitUntil(caches.open(CACHE_APP).then((c) => c.addAll(["./", ...ARQUIVOS.split(",").filter(Boolean)])));
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const nomes = await caches.keys();
    await Promise.all(nomes.filter((n) => n.startsWith("jornada-app-") && n !== CACHE_APP).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

// A página pede para trocar de versão quando a pessoa toca em "Atualizar".
self.addEventListener("message", (e) => { if (e.data === "atualizar") self.skipWaiting(); });

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (!ATIVO || req.method !== "GET") return;
  const url = new URL(req.url);

  // Bibliotecas externas: usa o que tem guardado e atualiza por trás.
  if (EXTERNOS.some((p) => req.url.startsWith(p))) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE_EXTERNO);
      const guardado = await cache.match(req);
      const rede = fetch(req).then((r) => { if (r.ok || r.type === "opaque") cache.put(req, r.clone()); return r; }).catch(() => guardado);
      return guardado || rede;
    })());
    return;
  }
  if (url.origin !== self.location.origin) return; // login, banco de dados etc. vão direto para a rede

  // Página: tenta a rede (pega versão nova) e cai no guardado se estiver sem internet.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(async () => (await caches.match(req, { ignoreSearch: true })) || caches.match("./")));
    return;
  }
  // Arquivos do jogo: versão guardada desta publicação.
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((r) => r || fetch(req)));
});
