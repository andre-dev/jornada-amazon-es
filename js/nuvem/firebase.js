// Login com Google + salvamento na nuvem (Firebase Auth + Firestore).
// Carregado só quando js/config.js tem FIREBASE_CONFIG. O SDK vem do CDN oficial do Google.
const V = "10.12.2";
const BASE = `https://www.gstatic.com/firebasejs/${V}/`;

/**
 * Inicia o Firebase e devolve uma pequena API:
 *  usuarioAtual()  -> Promise<usuario|null> (espera o Firebase restaurar a sessão)
 *  entrar()        -> Promise<usuario>       (popup do Google; no celular cai para redirect se o popup for bloqueado)
 *  sair()          -> Promise<void>
 *  backend(usuario)-> { ref, refCopia, nome, email } no formato que a persistência espera
 */
export async function iniciarFirebase(config) {
  const [{ initializeApp }, authMod, fsMod] = await Promise.all([
    import(BASE + "firebase-app.js"),
    import(BASE + "firebase-auth.js"),
    import(BASE + "firebase-firestore.js"),
  ]);
  const { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } = authMod;
  const { getFirestore, doc, getDoc, setDoc } = fsMod;

  const app = initializeApp(config);
  const auth = getAuth(app);
  auth.languageCode = "pt";
  try { await setPersistence(auth, browserLocalPersistence); } catch { /* usa o padrão */ }
  const db = getFirestore(app);
  const provedor = new GoogleAuthProvider();
  provedor.setCustomParameters({ prompt: "select_account" });

  // Conclui um login por redirect, se houver (volta do Google no celular).
  try { await getRedirectResult(auth); } catch { /* ignora: o usuário vê o botão de novo */ }

  const usuarioAtual = () => new Promise((resolve) => {
    const parar = onAuthStateChanged(auth, (u) => { parar(); resolve(u); });
  });

  function adaptar(ref) {
    return {
      async get() { const s = await getDoc(ref); return { exists: s.exists(), data: () => s.data() }; },
      async set(d) { await setDoc(ref, d); },
    };
  }

  return {
    usuarioAtual,
    async entrar() {
      try {
        const r = await signInWithPopup(auth, provedor);
        return r.user;
      } catch (e) {
        const code = e && e.code;
        if (code === "auth/popup-blocked" || code === "auth/operation-not-supported-in-this-environment") {
          await signInWithRedirect(auth, provedor);
          return new Promise(() => {}); // a página vai sair para o Google
        }
        throw e;
      }
    },
    sair: () => signOut(auth),
    backend(u) {
      return {
        ref: adaptar(doc(db, "jogadores", u.uid)),
        refCopia: adaptar(doc(db, "jogadores", u.uid, "extra", "copia")),
        nome: u.displayName || "",
        email: u.email || "",
      };
    },
  };
}

/** Mensagem amigável para os erros de login mais comuns. */
export function mensagemErroLogin(e) {
  const code = (e && e.code) || "";
  if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return "";
  if (code === "auth/unauthorized-domain") return "Este endereço ainda não foi autorizado no Firebase (Domínios autorizados).";
  if (code === "auth/network-request-failed") return "Sem conexão. Verifique a internet e tente de novo.";
  return "Não consegui entrar com o Google. Tente de novo.";
}
