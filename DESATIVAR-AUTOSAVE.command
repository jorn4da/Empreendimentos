#!/bin/bash
# Dê dois cliques para pausar o salvamento automático de: Curyoficial
PLIST="$HOME/Library/LaunchAgents/com.aritan.curyoficial.autosync.plist"
launchctl bootout "gui/$(id -u)" "$PLIST" 2>/dev/null
rm -f "$PLIST"
echo "Salvamento automático DESATIVADO: Curyoficial. Para religar, use ATIVAR-AUTOSAVE.command."
[ -z "$AUTOSAVE_SEM_PAUSA" ] && read -n 1 -s -r -p "Pressione qualquer tecla para fechar"
exit 0
