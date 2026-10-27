// Configuração do Firebase (login com Google + salvamento na nuvem).
// A apiKey NÃO fica no repositório: o GitHub Actions troca o marcador abaixo
// pelo segredo FIREBASE_API_KEY na hora de publicar (ver .github/workflows/pages.yml).
// A segurança dos dados vem das regras do Firestore (cada pessoa só acessa jogadores/{uid}).
const API_KEY = "__FIREBASE_API_KEY__";

export const FIREBASE_CONFIG = API_KEY.startsWith("__") ? null : {
  apiKey: API_KEY,
  authDomain: "jornada--es.firebaseapp.com",
  projectId: "jornada--es",
  storageBucket: "jornada--es.firebasestorage.app",
  messagingSenderId: "4233063495",
  appId: "1:4233063495:web:d4abf0b7bfb2a0232a1562",
};
