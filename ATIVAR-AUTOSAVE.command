#!/bin/bash
# Dê dois cliques neste arquivo para ativar o salvamento automático de: Curyoficial (curyoficial.com)
# Ele roda a cada 1 minuto, mesmo com o VS Code fechado, e sobrevive ao reiniciar o Mac.

DIR="$(cd "$(dirname "$0")" && pwd)"
NOME="com.aritan.curyoficial.autosync"
PLIST="$HOME/Library/LaunchAgents/$NOME.plist"

chmod +x "$DIR/scripts/autosync.sh"
mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST" <<PL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>$NOME</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>$DIR/scripts/autosync.sh</string>
  </array>
  <key>StartInterval</key><integer>60</integer>
  <key>RunAtLoad</key><true/>
  <key>StandardOutPath</key><string>/tmp/curyoficial-autosync.out</string>
  <key>StandardErrorPath</key><string>/tmp/curyoficial-autosync.err</string>
</dict>
</plist>
PL

launchctl bootout "gui/$(id -u)" "$PLIST" 2>/dev/null
if launchctl bootstrap "gui/$(id -u)" "$PLIST"; then
  echo ""
  echo "Salvamento automático ATIVADO: Curyoficial (curyoficial.com)"
  echo "$DIR"
  echo "Toda alteração vai para o GitHub (e o Netlify publica) em até 1 minuto,"
  echo "e fica registrada no Obsidian em 01-Projetos/Projeto - Curyoficial."
else
  echo "Não foi possível ativar Curyoficial. Tire um print desta janela e envie ao Claude."
fi
[ -z "$AUTOSAVE_SEM_PAUSA" ] && { echo ""; read -n 1 -s -r -p "Pressione qualquer tecla para fechar"; }
exit 0
