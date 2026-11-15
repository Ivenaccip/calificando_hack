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
| `reporte.json` | Lo mismo en datos. |
| `evidencia/` | Todo lo que midió el script (un JSON por criterio, `texto.md`, capturas, Lighthouse). No se sube a git. |
| `puntajes/` | El JSON de cada agente con su justificación. No se sube a git. |

## Cómo se traduce 0 / 1 / 2

La rúbrica define cuándo un criterio **vale 2**; el 1 ("a medias") no lo define. Para que dos corridas sobre el mismo sitio den lo mismo, los scripts aplican una regla mecánica ([`scripts/lib/puntaje.mjs`](scripts/lib/puntaje.mjs)) sobre las verificaciones de cada criterio:

- todas pasan → **2**
- falla una verificación *bloqueante* (por ejemplo, `noindex`, no hay H1, el robots.txt bloquea el sitio) → **0**
- pasa la mitad o más → **1**
- pasa menos de la mitad → **0**

Excepciones con regla propia: **SEO 8** (las tres métricas = 2, al menos una = 1, ninguna = 0) y **AEO 5** (≥ 80 % del texto en el HTML inicial = 2, 40–80 % = 1, menos = 0). Los agentes confirman esos puntajes o los ajustan **con justificación**, y el reporte muestra cuándo lo hicieron. Los umbrales (largo del título, peso de imagen, etc.) están en [`scripts/lib/config.mjs`](scripts/lib/config.mjs).

Decisiones que tomé donde la rúbrica es ambigua:

- **`llms.txt` (AEO 6)** es "bonus", pero la escala se topa en 2: se reporta, no cambia el puntaje.
- Las imágenes con `alt=""` se tratan como decorativas, salvo las grandes (≥ 150 px), que se marcan como sospechosas para que el agente las revise.
- Los enlaces que responden 401/403/429 o timeout se reportan como "sin verificar", no como rotos.

## Ajustar la rúbrica

- Cambiar el texto o el orden de un criterio: `rubrica/rubrica.json`.
- Cambiar umbrales: `scripts/lib/config.mjs`.
- Cambiar cómo razona un especialista: `.claude/agents/<nombre>.md`.
- Instrucciones comunes a todos: `rubrica/guia-auditores.md`.

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
