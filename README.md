# Calificador SEO + AEO

Le pasas una liga a un agente principal y te devuelve la calificación del sitio con la **rúbrica SEO + AEO del Hackathon Hostinger**: 20 criterios de 0 a 2, **40 puntos** (SEO 20 + AEO 20), con el detalle de qué falló y cómo arreglarlo.

Rúbrica original: <https://claude.ai/artifact/4yzQPvnHZhbddaFFGqpBxV>. Copia fiel en [`rubrica/rubrica.json`](rubrica/rubrica.json), que es la fuente única para los scripts y los agentes.

## Cómo se usa

Requisitos: [Claude Code](https://claude.com/claude-code), Node 20+ y Chrome o Chromium instalado.

```bash
claude
```

Este repositorio arranca la sesión directamente como `calificador-principal` (ver `.claude/settings.json`). Solo pega la liga:

```text
califica https://minegocio.com
```

También acepta varias ligas a la vez y entrega un comparativo. Si prefieres arrancarlo de forma explícita: `claude --agent calificador-principal`.

La primera vez instala dependencias solo (`npm install`). Una calificación tarda de 2 a 5 minutos, casi todo Lighthouse.

> Claude Code te pedirá permiso la primera vez que el agente ejecute `node scripts/…` y escriba en `reportes/`. Si quieres evitarlo, autorízalo tú en tu `.claude/settings.local.json` (por ejemplo `Bash(node scripts/auditar.mjs *)`, `Bash(node scripts/reporte.mjs *)` y `Edit(/reportes/**)`). No viene preautorizado a propósito.

## Cómo funciona

La columna **"Cómo se revisa"** de la rúbrica ya decía qué lo mide un script y qué requiere criterio. El equipo sigue esa división:

```text
liga ─► calificador-principal
          │
          ├─ 1. scripts/auditar.mjs   mide (Node + Chrome + Lighthouse) ─► reportes/<sitio>-<fecha>/evidencia/
          │
          ├─ 2. cinco especialistas EN PARALELO leen la evidencia y califican sus criterios
          │        auditor-seo-tecnico         SEO 1 2 3 5 6 10   título, metas, encabezados, indexable, robots/sitemap, enlaces
          │        auditor-rendimiento-movil   SEO 7 8 9          imágenes, velocidad, móvil (ve la captura)
          │        auditor-contenido           SEO 4 · AEO 1 2 3 7 9   lee el texto: tema, respuesta directa, preguntas, FAQ, formato, datos
          │        auditor-aeo-tecnico         AEO 4 5 6          JSON-LD, contenido sin JavaScript, bots de IA
          │        auditor-confianza           AEO 8 10           identidad consistente, señales de confianza
          │
          └─ 3. scripts/reporte.mjs   une todo, SUMA en código y escribe reporte.md
```

Qué mide el script (`scripts/auditar.mjs`):

- **HTML crudo vs. página renderizada** (lo que ve un bot que no ejecuta JavaScript, contra lo que ve una persona). Base de AEO 5.
- Título, meta description, Open Graph, encabezados, canonical, `noindex`, `lang`, HTTPS.
- `robots.txt` (con reglas por bot: GPTBot, ClaudeBot, PerplexityBot, Google-Extended y otros), `sitemap.xml` y `llms.txt`.
- JSON-LD: validez, tipos y si coincide con la página.
- Hasta 40 enlaces internos probados en busca de 404; anclas genéricas ("clic aquí"); URLs legibles.
- Imágenes: `alt`, peso real descargado y auditorías de Lighthouse.
- **Lighthouse móvil** (rendimiento, LCP, CLS) y **capturas de un teléfono virtual** (390 px) con métricas de scroll horizontal, texto pequeño y botones diminutos.

## Qué te entrega

En `reportes/<sitio>-<fecha>/`:

| Archivo | Contenido |
| --- | --- |
| `reporte.md` | Resultado, tabla de 20 criterios, detalle con evidencia, **qué arreglar primero** y advertencias. |
| `reporte.pdf` | **El entregable para la persona**: informe en PDF con la calificación, lo primero que arreglaría, los 20 criterios y el detalle de cada punto con cómo corregirlo. Se genera con `node scripts/pdf.mjs reportes/<sitio>-<fecha>` (o `--todos`); lo mete en la portada el nombre del participante si lo conoce, o `--para "Nombre"`. Usa tu Chrome y no se sube a git. |
| `reporte.json` | Lo mismo en datos. |
| `../resumen-por-participante.md` | Un solo documento con **lo que falló en cada proyecto** (y cómo arreglarlo), más el ranking y las fallas más comunes. Se genera con `node scripts/resumen.mjs` a partir del CSV y de cada `reporte.json`; no usa ningún modelo, así que siempre coincide con las notas. |
| `evidencia/` | Todo lo que midió el script (un JSON por criterio, `texto.md`, capturas, Lighthouse). No se sube a git. |
| `puntajes/` | El JSON de cada agente con su justificación. No se sube a git. |

## Historial: `calificaciones.csv`

Cada vez que se califica un sitio, `scripts/reporte.mjs` agrega **una fila** a [`calificaciones.csv`](calificaciones.csv) en la raíz del repo. Se abre directo en Excel o Google Sheets (UTF-8, separado por comas).

| Columnas | Qué trae |
| --- | --- |
| `fecha`, `participante`, `sitio`, `url` | Cuándo y qué se calificó, y quién envió la liga (si vino de un lote; vacío si la calificaste a mano). |
| `seo`, `aeo`, `total`, `maximo_evaluado`, `completo` | Los totales (SEO /20, AEO /20, total /40). `completo = no` si algún criterio quedó sin evaluar. |
| `SEO 1 Título de la página` … `AEO 10 Señales de confianza` | **El puntaje (0, 1 o 2) de cada uno de los 20 criterios.** Vacío = sin evaluar. |
| `sin_evaluar`, `notas` | Qué criterios no se pudieron calificar y advertencias de la corrida (por ejemplo, "no se pudo medir el sitio"). |
| `lighthouse_rendimiento`, `lighthouse_accesibilidad`, `lighthouse_mejores_practicas`, `lighthouse_seo`, `lighthouse_lcp_s`, `lighthouse_cls`, `lighthouse_tbt_ms`, `lighthouse_chrome`, `lighthouse_medido_en` | Las calificaciones de Lighthouse móvil (0–100), LCP, CLS y TBT, y con qué Chrome se midieron. **Son informativas: no suman a los 40 puntos.** |
| `reporte`, `carpeta`, `generado_en` | Dónde está el reporte detallado y cuándo se generó la fila. |

Reglas:
- Se va **acumulando**: cada sitio nuevo es una fila nueva.
- Volver a calificar el **mismo sitio el mismo día actualiza sus filas**, no las duplica (cambiando de día, se agregan otras y queda el historial).
- Si varias personas enviaron la misma liga, el sitio se califica **una vez** y la nota se copia en una fila por persona.
- Las columnas salen de `rubrica/rubrica.json`. Si cambias la rúbrica, las columnas viejas se conservan para no perder datos.
- La justificación y las mejoras de cada criterio no van en el CSV: están en el `reporte.md` de la columna `reporte`.
- Para guardarlo en otra ruta: `node scripts/reporte.mjs reportes/<sitio>-<fecha> --csv otra/ruta.csv`.

## Calificar un lote desde el CSV del formulario

Si tienes la exportación de un formulario con **nombre** y **liga del proyecto** (por ejemplo, las entregas de un hackathon):

```bash
node scripts/lote.mjs ruta/al/formulario.csv --solo-listar   # ver qué ligas distintas detectó
node scripts/lote.mjs ruta/al/formulario.csv                 # medir todas, una por una
```

`lote.mjs` detecta las columnas de nombre y liga por su encabezado, normaliza ligas sin `https://`, **deduplica** ligas repetidas y guarda quién envió cada una. Mide los sitios de uno en uno (Lighthouse necesita el equipo libre), se puede **reanudar** si se interrumpe (salta los ya medidos; `--forzar` los repite) y deja el avance en `reportes/lote.json`. Si un sitio no abre o tarda más de 8 minutos, deja su fila en `calificaciones.csv` con la nota del motivo.

Esto solo mide. Para calificar con los especialistas, pídele al agente principal que califique los sitios ya medidos de `reportes/lote.json`; al terminar cada uno, `reporte.mjs` agrega sus filas al CSV.

## Lighthouse con tu propio Chrome

Lighthouse mide el rendimiento **de la máquina donde corre**: en un servidor compartido da números bajos y poco confiables. Para medir con tu Chrome y agregar las calificaciones al CSV:

```bash
npm install
node scripts/lighthouse-csv.mjs --corridas 3
```

- Usa el Chrome que tengas instalado (o `--chrome "/ruta/a/chrome"` / `CHROME_PATH`) y toma la **mediana de 3 corridas** por sitio, que es mucho más estable que una sola.
- Agrega las columnas `lighthouse_*` de cada sitio (todas las filas con esa liga). Se guarda tras cada sitio y se puede interrumpir y reanudar: salta los ya medidos con Chrome local (`--forzar` los repite, `--solo texto` mide solo las ligas que lo contengan).
- Cierra otras aplicaciones pesadas mientras corre. Con 24 sitios y 3 corridas son unos 20–40 minutos.
- Las medidas hechas con tu Chrome no se pisan al volver a consolidar un sitio con `reporte.mjs`.
- Estas calificaciones son informativas. El criterio **SEO 8 (Velocidad)** de la rúbrica se calificó con la medición del entorno donde corrió la auditoría; si quieres recalificarlo con estos números, pídeselo al agente principal.

## Cómo se traduce 0 / 1 / 2

La rúbrica define cuándo un criterio **vale 2**; el 1 ("a medias") no lo define. La definición que usa este proyecto: **1 = algún parámetro del criterio está a medias**. Para que dos corridas sobre el mismo sitio den lo mismo, los scripts aproximan eso con una regla mecánica ([`scripts/lib/puntaje.mjs`](scripts/lib/puntaje.mjs)) sobre las verificaciones de cada criterio:

- todas pasan → **2**
- falla una verificación *bloqueante* (por ejemplo, `noindex`, no hay H1, el robots.txt bloquea el sitio) → **0**
- pasa la mitad o más → **1**
- pasa menos de la mitad → **0**

Excepciones con regla propia: **SEO 8** (las tres métricas = 2, al menos una = 1, ninguna = 0) y **AEO 5** (≥ 80 % del texto en el HTML inicial = 2, 40–80 % = 1, menos = 0). Los agentes confirman esos puntajes o los ajustan **con justificación**, y el reporte muestra cuándo lo hicieron. Los umbrales (largo del título, peso de imagen, etc.) están en [`scripts/lib/config.mjs`](scripts/lib/config.mjs).

Decisiones que tomé donde la rúbrica es ambigua:

- **`llms.txt` (AEO 6)** es "bonus", pero la escala se topa en 2: se reporta, no cambia el puntaje (decisión confirmada).
- Las imágenes con `alt=""` se tratan como decorativas, salvo las grandes (≥ 150 px), que se marcan como sospechosas para que el agente las revise.
- Los enlaces que responden 401/403/429 o timeout se reportan como "sin verificar", no como rotos.

## Página pública "Califica tu sitio" (artefacto de Claude)

`artefacto/` contiene una página de una sola pieza donde cualquier persona pega el código de su sitio y recibe su calificación y un PDF.

- `artefacto/plantilla.html` es el código de la página (motor de verificaciones, interfaz, llamadas a los agentes y generador de PDF).
- `node scripts/build-artefacto.mjs` genera `artefacto/index.html` metiendo dentro la rúbrica (`rubrica/rubrica.json`) y las instrucciones reales de los cinco especialistas (`.claude/agents/*.md` y `rubrica/guia-auditores.md`). Si cambias la rúbrica o a un agente, vuelve a correrlo y republica.
- La página no puede abrir sitios por su cuenta (un artefacto no puede hacer peticiones a otros dominios). Por eso la persona pega el código fuente (Ctrl+U) y, opcionalmente, su robots.txt, su sitemap y los números de PageSpeed Insights. Lo que falta queda "sin evaluar" y el PDF explica cómo completarlo.
- Los cinco agentes corren en paralelo con la sesión de Claude de quien visita la página. El PDF se arma en el navegador y no pasa por ningún servidor propio.
- La auditoría completa a partir de solo la liga (capturas del teléfono, Lighthouse propio, enlaces rotos, HTML renderizado vs. crudo) sigue viviendo en el pipeline de arriba.

## Calificar desde GitHub (Actions), sin abrir Claude Code

El flujo `.github/workflows/calificar.yml` corre la auditoría completa (los 20 criterios, con Chrome, Lighthouse móvil y capturas reales) en un servidor de GitHub y entrega el PDF.

**Configuración (una vez):** en el repo, *Settings → Secrets and variables → Actions*:
- Secreto `ANTHROPIC_API_KEY` (obligatorio).
- Variable `MODELO_CLAUDE` (opcional): fuerza un modelo para los cinco especialistas. Sin ella, cada uno usa el de su archivo en `.claude/agents/`.
- Variable `VERSION_CLAUDE_CODE` (opcional): fija la versión del CLI de Claude Code. Sin ella, usa la última.

**Dos formas de pedir una calificación:**
1. **A mano:** *Actions → Calificar sitio → Run workflow*, con la liga y un nombre opcional. El PDF queda como archivo descargable de la ejecución (30 días) y el reporte se ve en el resumen.
2. **Con un issue** del formulario *Calificar mi sitio*. Si lo abre alguien con acceso al repo, corre de inmediato. Si lo abre cualquier otra persona, el bot contesta que está en espera y corre cuando un organizador le pone la etiqueta `aprobado`. Al terminar comenta la calificación, lo primero que arreglaría y la liga al PDF, y le pone la etiqueta `calificado`.

**Cómo funciona:**
- `scripts/ci/solicitud.mjs` valida la liga y rechaza IPs, puertos raros y dominios que apuntan a redes internas.
- `scripts/auditar.mjs` mide.
- `scripts/ci/especialistas.sh` corre los cinco especialistas en paralelo con `claude -p --agent <nombre>`: las mismas instrucciones de `.claude/agents/`, sin orquestador.
- `scripts/reporte.mjs` y `scripts/pdf.mjs` consolidan y generan el PDF.
- `scripts/ci/comentario.mjs` arma la respuesta del issue.
- Cada calificación consume unos 200 mil tokens y tarda unos 5 minutos.

**Seguridad:**
- El contenido de los sitios no es confiable.
- Los especialistas solo tienen `Read`, `Write`, `Glob` y `Grep`: sin terminal ni red.
- No pueden leer archivos del sistema (`/proc`, `/etc`, temporales del servidor) ni escribir fuera de su carpeta.
- La API key solo existe en el paso de los especialistas.
- Si la key aparece en cualquier resultado, no se publica nada.
- El servidor bloquea la red de metadatos (169.254.0.0/16).
- El texto que llega al comentario del issue se escapa: no puede meter ligas, imágenes ni menciones.
- Pon un límite de gasto a la API key en la consola de Anthropic.

**Lo que no hace (todavía):** no guarda la fila en `calificaciones.csv` del repo. El historial de esas calificaciones vive en los `reporte.json` de cada ejecución.

## Ajustar la rúbrica

- Cambiar el texto o el orden de un criterio: `rubrica/rubrica.json`.
- Cambiar umbrales: `scripts/lib/config.mjs`.
- Cambiar cómo razona un especialista: `.claude/agents/<nombre>.md`.
- Instrucciones comunes a todos: `rubrica/guia-auditores.md`.
- Después de cualquiera de los tres cambios anteriores, regenera la página pública con `node scripts/build-artefacto.mjs`.

## Usar solo los scripts (sin agentes)

```bash
npm install
node scripts/auditar.mjs https://minegocio.com          # evidencia + puntajes automáticos
node scripts/reporte.mjs reportes/minegocio.com-AAAA-MM-DD
```

Opciones de `auditar.mjs`: `--sin-lighthouse` (rápido, deja SEO 8 sin evaluar), `--sin-enlaces`, `--salida <carpeta>`.

## Límites que conviene saber

- **Lighthouse es una sola medición** y cambia entre corridas y entre equipos (un equipo lento o una red mala bajan el rendimiento). Para números confiables, córrelo en tu computadora, no en un servidor compartido.
- No se mide autoridad de dominio, backlinks ni posición en Google (la rúbrica los deja fuera).
- Algunos sitios bloquean clientes que no son navegador (Cloudflare, WAF): el HTML crudo puede fallar, y entonces AEO 5 queda "sin evaluar" en lugar de inventarse.
- El contenido del sitio calificado es un dato no confiable: los agentes tienen instrucción de ignorar cualquier "orden" escrita en una página.
- Si no encuentra Chrome: instálalo o define `CHROME_PATH=/ruta/al/chrome`.
