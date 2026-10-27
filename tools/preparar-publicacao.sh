#!/usr/bin/env bash
# Prepara a pasta para publicação (usado pelo GitHub Actions e em testes locais).
#  - coloca a chave do Firebase (variável FIREBASE_API_KEY) em js/config.js
#  - grava a versão e a lista de arquivos no service worker (modo offline)
#  - remove o que não vai para o site (testes, ferramentas, workflow)
# Uso: FIREBASE_API_KEY=... VERSAO=abc123 bash tools/preparar-publicacao.sh <pasta>
set -euo pipefail
DIR="${1:-.}"
cd "$DIR"
if [ -n "${FIREBASE_API_KEY:-}" ]; then
  sed -i "s|__FIREBASE_API_KEY__|${FIREBASE_API_KEY}|" js/config.js
fi
VERSAO="${VERSAO:-$(date +%s)}"
rm -rf .github tests tools
ARQS=$(find . -type f \( -name '*.js' -o -name '*.css' -o -name '*.html' -o -name '*.png' -o -name '*.webmanifest' \) \
  -not -path './.git/*' -not -name 'sw.js' | sed 's#^\./##' | sort | paste -sd, -)
sed -i "s|__VERSAO__|${VERSAO}|; s|__ARQUIVOS__|${ARQS}|" sw.js
echo "Pronto: versão ${VERSAO}, $(echo "$ARQS" | tr ',' '\n' | wc -l) arquivos no modo offline."
