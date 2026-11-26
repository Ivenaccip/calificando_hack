#!/usr/bin/env bash
# Corre los cinco especialistas en paralelo con Claude Code sin interfaz (claude -p), igual que el agente
# principal en una sesión, pero sin orquestador: cada uno lee la evidencia y escribe su archivo en puntajes/.
#
# Uso: scripts/ci/especialistas.sh <url> <carpeta-del-reporte>
# Requiere: el CLI de Claude Code (npm i -g @anthropic-ai/claude-code) y ANTHROPIC_API_KEY
# (o una sesión de Claude Code ya iniciada). Opcional: MODELO_CLAUDE para forzar un modelo.
#
# Seguridad: el contenido del sitio no es confiable (puede traer instrucciones escondidas). Por eso cada
# especialista solo tiene Read, Write, Glob y Grep (sin terminal ni red), no puede leer archivos del sistema
# ni de los temporales del servidor y no puede escribir fuera de la carpeta del reporte.
set -uo pipefail

URL="${1:?Falta la liga}"
CARPETA="${2:?Falta la carpeta del reporte}"
RAIZ="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$RAIZ"

[ -d "$CARPETA/evidencia" ] || { echo "No existe $CARPETA/evidencia: corre primero scripts/auditar.mjs" >&2; exit 1; }
command -v claude >/dev/null || { echo "Falta el CLI de Claude Code (npm i -g @anthropic-ai/claude-code)" >&2; exit 1; }
if [ -n "${GITHUB_ACTIONS:-}" ] && [ -z "${ANTHROPIC_API_KEY:-}" ]; then
  echo "::error::Falta el secreto ANTHROPIC_API_KEY (Settings → Secrets and variables → Actions)." >&2
  exit 1
fi

AGENTES=(auditor-seo-tecnico auditor-rendimiento-movil auditor-contenido auditor-aeo-tecnico auditor-confianza)
mkdir -p "$CARPETA/puntajes"
BITACORAS="${RUNNER_TEMP:-$(mktemp -d)}/especialistas"
mkdir -p "$BITACORAS"

# Reglas de permisos para cada especialista. Las rutas absolutas llevan doble diagonal (//ruta).
CARPETA_ABS="$RAIZ/$CARPETA"
AJUSTES=$(node -e '
  const [raiz, carpeta, temp] = process.argv.slice(1);
  const abs = (p) => "/" + p.replace(/\/+$/, "");
  const leerNo = ["/proc", "/sys", "/etc", "/root", "/run", "/var", "/dev", "/opt", "/usr", "/home/runner/work/_temp",
    "/home/runner/work/_actions", "/home/runner/.config", "/home/runner/.ssh", "/home/runner/.npm", temp]
    .filter(Boolean).map((p) => `Read(${abs(p)}/**)`);
  const escribirNo = ["scripts", "node_modules", ".claude", ".github", "rubrica", "artefacto"]
    .map((p) => `Edit(${abs(raiz + "/" + p)}/**)`)
    .concat([`Edit(${abs(raiz)}/package.json)`, `Edit(${abs(raiz)}/package-lock.json)`, `Edit(${abs(raiz)}/calificaciones.csv)`, `Edit(${abs(raiz)}/README.md)`, `Edit(${abs(raiz)}/reportes/lote.json)`,
      `Edit(${abs(carpeta)}/evidencia/**)`, `Edit(${abs(carpeta)}/reporte.*)`]);
  process.stdout.write(JSON.stringify({ permissions: { deny: [...leerNo, ...escribirNo] } }));
' "$RAIZ" "$CARPETA_ABS" "${RUNNER_TEMP:-}")

correr() {
  local agente="$1" intento="$2"
  local args=(-p --agent "$agente" --tools "Read,Write,Glob,Grep" --permission-mode acceptEdits
    --permission-prompts none --strict-mcp-config --no-session-persistence --settings "$AJUSTES")
  [ -n "${MODELO_CLAUDE:-}" ] && args+=(--model "$MODELO_CLAUDE")
  local mensaje="URL: $URL · Carpeta del reporte: $CARPETA. Califica tus criterios siguiendo tus instrucciones y \`rubrica/guia-auditores.md\`, y escribe tu archivo en \`$CARPETA/puntajes/\`."
  [ "$intento" -gt 1 ] && mensaje="$mensaje Tu intento anterior no dejó un archivo JSON válido en esa carpeta: escríbelo completo esta vez."
  local t0=$SECONDS
  timeout 900 claude "${args[@]}" "$mensaje" < /dev/null > "$BITACORAS/$agente-$intento.log" 2>&1
  local codigo=$?
  echo "  $agente (intento $intento): código $codigo, $((SECONDS - t0)) s · $(tail -c 300 "$BITACORAS/$agente-$intento.log" | tr '\n' ' ' | cut -c1-160)"
}

valido() { node -e 'JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))' "$CARPETA/puntajes/$1.json" 2>/dev/null; }

echo "Especialistas en paralelo para $URL"
for a in "${AGENTES[@]}"; do correr "$a" 1 & done
wait

FALTAN=()
for a in "${AGENTES[@]}"; do valido "$a" || FALTAN+=("$a"); done
if [ "${#FALTAN[@]}" -gt 0 ]; then
  echo "Reintento (una vez) para: ${FALTAN[*]}"
  for a in "${FALTAN[@]}"; do rm -f "$CARPETA/puntajes/$a.json"; correr "$a" 2 & done
  wait
fi

LISTOS=0
for a in "${AGENTES[@]}"; do
  if valido "$a"; then LISTOS=$((LISTOS + 1)); else echo "::warning::$a no entregó su archivo: sus criterios quedan sin evaluar."; fi
done
echo "Especialistas listos: $LISTOS de ${#AGENTES[@]}"
[ "$LISTOS" -gt 0 ]
