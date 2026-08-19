#!/usr/bin/env bash
# ============================================================
#  PUBLICAR curyoficial.com  ->  github.com/jorn4da/Empreendimentos
#
#  Este site é o hub Cury (Empreendimentos). O formulário do
#  index já envia cada cadastro para o e-mail E para a planilha
#  do Google (aba "Leads"), igual à Nova Leopoldina.
#
#  Basta dar DOIS CLIQUES neste arquivo.
# ============================================================
set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

echo "=================================================="
echo "  PUBLICAR: curyoficial.com  ->  jorn4da/Empreendimentos"
echo "  Pasta: $DIR"
echo "=================================================="
read -r -p "Enter para publicar (ou feche a janela para cancelar)... " _

# destrava eventuais locks do git
rm -f .git/*.lock 2>/dev/null || true

git add -A
if git diff --cached --quiet; then
  echo "→ Nada novo para publicar."
else
  git commit -m "Adiciona envio dos leads para a planilha Google — $(date '+%d/%m/%Y %H:%M')"
fi

echo "→ Enviando para o GitHub..."
git push origin main

echo ""
echo "✅ Publicado em: https://github.com/jorn4da/Empreendimentos"
echo "   O site curyoficial.com será atualizado em instantes."
echo ""
read -r -p "Pode fechar esta janela. (Enter) " _
