# Calificación SEO + AEO: https://ynomix.com/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 92.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **18** | 20 | 90% |
| AEO | **16** | 20 | 80% |
| **Total** | **34** | 40 | 85% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente |
| 2 | Descripción y vista al compartir | ■■ 2/2 | Script | agente |
| 3 | Estructura de encabezados | ■■ 2/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | ■■ 2/2 | Agente | agente |
| 5 | Indexable | ■■ 2/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | ■■ 2/2 | Script | agente |
| 7 | Imágenes | ■■ 2/2 | Script + Lighthouse | agente |
| 8 | Velocidad | ■□ 1/2 | Lighthouse | agente |
| 9 | Móvil | ■□ 1/2 | Lighthouse + captura móvil | agente |
| 10 | Enlaces y URLs | ■■ 2/2 | Script | agente |

## Rúbrica AEO: que los buscadores con IA usen la página como respuesta

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Respuesta directa arriba | ■□ 1/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | ■■ 2/2 | Agente | agente |
| 3 | Preguntas frecuentes | ■■ 2/2 | Agente | agente |
| 4 | Datos estructurados | ■■ 2/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■■ 2/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | □□ 0/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■■ 2/2 | Agente + script | agente |
| 9 | Datos concretos | ■■ 2/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 53 caracteres que dice de qué trata la página y lleva la marca al inicio: «YnomiX: herramientas digitales para manejar tu dinero». No es genérico y es coherente con el H1.

*Evidencia:*
- title: «YnomiX: herramientas digitales para manejar tu dinero» (53 caracteres, 1 etiqueta)
- H1: «YnomiX: herramientas para entender y manejar tu dinero»

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 155 caracteres (dentro de 140–160) e invita a entrar: nombra los tres productos, ofrece «Prueba Qadrax 15 días gratis» y menciona los precios. Existen og:title, og:description y og:image, esta última con URL absoluta (https://images.hostinger.com/...png), y hay twitter:card summary_large_image.

*Evidencia:*
- description de 155 caracteres: «Conoce Qadrax, AddiX e InfoX… Prueba Qadrax 15 días gratis y consulta los precios en USD.»
- og:title, og:description y og:image presentes; og:image absoluta
- twitter:card = summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un único H1 descriptivo («YnomiX: herramientas para entender y manejar tu dinero»), 9 H2 y 13 H3 sin saltos de nivel. Los H3 son estructura real (los 5 productos bajo «Una herramienta para cada parte de tu dinero» y las 8 preguntas del FAQ), no estilo de menú o pie. Detalle menor: el texto extraído de dos H2 sale pegado («paracada», «herramienta.Conoce»), probablemente por un salto de línea sin espacio.

*Evidencia:*
- Resumen: H1=1, H2=9, H3=13, H4–H6=0; sin saltos
- H2 «Una herramienta paracada parte de tu dinero.» con H3 Qadrax, AddiX, InfoX, ConvertiX, DigiMoneY
- H2 «Las dudas, sobre la mesa.» con 8 H3 en forma de pregunta

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (herramientas para manejar el dinero) coincide en el título, el H1 y el párrafo bajo el H1. El contenido principal tiene unas 977 palabras, muy por encima de 300, y casi todas aportan información (precios, funciones, preguntas). Hay cierta repetición entre tarjetas, tabla y preguntas (por ejemplo, el calendario de InfoX), pero cada bloque cumple un propósito distinto y no es relleno.

*Evidencia:*
- Título: "YnomiX: herramientas digitales para manejar tu dinero"
- H1: "YnomiX: herramientas para entender y manejar tu dinero"
- Primer párrafo: "Tu dinero, con perspectiva. Qadrax registra cómo lo usas; AddiX monitorea tus ahorros e inversiones; InfoX resume las noticias financieras."
- palabrasContenido: 977 (umbral 300)

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 sin redirecciones, no tiene meta robots ni X-Robots-Tag (sin noindex), el canonical apunta a sí misma (https://ynomix.com/), usa HTTPS y declara lang="es", que coincide con el contenido en español.

*Evidencia:*
- statusHttp 200, cadena de redirecciones: solo https://ynomix.com/
- metaRobots: null; xRobotsTag: null
- canonical: https://ynomix.com/
- html lang="es"

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml (200, válido, 10 URL, mismo dominio y HTTPS que incluye la home y /qadrax, /addix, /infox, /convertix). El robots.txt permite todo a User-agent: * (Allow: /) y declara el sitemap; solo bloquea con Disallow: / a bots de entrenamiento de IA (GPTBot, ClaudeBot, Google-Extended, etc.), no a buscadores. Lighthouse marca «robots.txt is not valid, 13 errors», que corresponde a las 13 líneas Content-Signal (directiva nueva que Lighthouse no reconoce); no afecta el rastreo, por eso no baja el puntaje.

*Evidencia:*
- robots.txt 200: «User-agent: * … Allow: /» y «Sitemap: https://ynomix.com/sitemap.xml»
- sitemap.xml 200, 10 URL, incluyeLaPagina: true
- Lighthouse robots-txt: 13 errores (líneas Content-Signal), sin bloqueo real

#### SEO 7 · Imágenes: 2/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

La página no tiene imágenes con contenido: pagina.json trae "imagenes": [], Lighthouse marca image-alt como no aplicable y el peso de imágenes es 0 KB. En las capturas móviles solo se ven íconos, tipografía y tarjetas hechas con CSS, así que no hay fotos ni ilustraciones informativas que necesiten alt ni que pesen de más. No se castiga por no aplicar.

*Evidencia:*
- totalImagenes: 0; pesoTotalImagenesKB: 0
- Lighthouse image-alt: notApplicable; uses-responsive-images, offscreen-images y modern-image-formats con score 1
- Total de la página: 174 KiB (total-byte-weight aprobado)

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: rendimiento 92 (≥ 80) y CLS 0.000 (< 0.1) cumplen, pero el LCP es de 2.73 s y supera el límite de 2.5 s, así que cumple dos de tres umbrales y queda en 1. Es una sola medición de Lighthouse y puede variar entre corridas y equipos; el LCP está cerca del umbral, por lo que una segunda corrida podría quedar por debajo o por encima. FCP, LCP y Speed Index coinciden en 2,730 ms, lo que apunta a que el primer pintado espera a recursos que bloquean el render, no al servidor (respuesta de 110 ms).

*Evidencia:*
- Rendimiento 92 · LCP 2,730 ms · CLS 0 · TBT 0 ms
- render-blocking-resources: ahorro estimado de 740 ms (Google Fonts CSS y /assets/index-CCKhlJz9.css)
- unused-javascript: ahorro estimado de 26 KiB en entry.client-C_LB9vgy.js (55 KB)
- server-response-time: el documento raíz tardó 110 ms (no es la causa)

*Cómo mejorarlo:*
- Quita el bloqueo del render: incrusta en el HTML el CSS crítico de la parte superior de la página y carga el resto de index-CCKhlJz9.css de forma diferida; así se recuperan hasta ~740 ms y el LCP baja de 2.5 s.
- Evita que la hoja de Google Fonts (Public Sans 400/700) bloquee el pintado: agrega <link rel="preconnect"> a fonts.googleapis.com y fonts.gstatic.com, o mejor aloja la fuente en tu propio dominio con font-display: swap y precarga el archivo del peso 700 que usa el título.
- Reduce el JavaScript sin usar (~26 KiB de entry.client): divide el código por ruta o carga de forma diferida los componentes que no se ven al abrir la página.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Se confirma el 1 del script. Hay meta viewport correcto (width=device-width, initial-scale=1), sin scroll horizontal (0 px de desborde), y en movil-arriba.png el diseño se ve limpio: sin contenido cortado ni encimado, sin banner de cookies ni pop-up, y el menú son cinco enlaces visibles que caben en dos líneas, así que no necesita hamburguesa. Lo que lo deja a medias es la legibilidad y el tamaño táctil: 13% del texto (786 de 6,182 caracteres) mide menos de 12 px y dos enlaces son demasiado bajos. En la captura se aprecian chicos la línea «Herramientas independientes. Un propósito en común.», las etiquetas de las cifras y las etiquetas de las tarjetas («Gratis», «Desde USD 15»). La captura completa solo muestra los primeros 3,000 px, así que el pie de página no se alcanzó a ver.

*Evidencia:*
- 13% del texto < 12 px (786 de 6,182 caracteres)
- Objetivos táctiles chicos: «Volver arriba ↑» (63×15 px) y «Hablemos de lo que necesitas» (187×22 px); 2 de 33 por debajo de 24 px
- Captura móvil: sin banner de cookies, sin elementos encimados; menú en línea con 5 enlaces visibles
- movil-completa.png mide 390×3000 px: solo se revisó el tramo superior

*Cómo mejorarlo:*
- Sube a 12 px o más (idealmente 13–14 px) el texto secundario: la línea «Herramientas independientes. Un propósito en común.», las etiquetas bajo las cifras («Para probar Qadrax gratis», «Herramientas para tu dinero») y las insignias de las tarjetas («Gratis», «Prueba 15 días»).
- Dale más área táctil a «Volver arriba ↑» (hoy 15 px de alto) y al enlace «Hablemos de lo que necesitas» (22 px): agrega padding vertical para llegar al menos a 44×44 px, o 24 px como mínimo.
- Separa un poco más los enlaces del menú superior («Blog», «Acerca de y contacto») para evitar toques accidentales entre vecinos.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 7 enlaces internos (Productos, Precios, Preguntas frecuentes, Blog, Acerca de y contacto, Lista de espera). Se revisaron los 8 enlaces internos únicos y ninguno está roto ni quedó sin verificar. No hay anclas genéricas ni enlaces sin texto: los botones dicen cosas como «Anotarme en la lista de Qadrax» o «Consultar los reportes de InfoX». Las URLs son legibles (/qadrax, /addix, /blog, /acerca-de).

*Evidencia:*
- 8 enlaces internos revisados, 0 rotos, sinVerificar vacío
- 0 enlaces genéricos y 0 sin texto; Lighthouse link-text score 1
- 0 de 9 URLs internas poco legibles

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

El H1 dice qué es ("herramientas para entender y manejar tu dinero") y el párrafo siguiente enumera lo que ofrece (Qadrax, AddiX, InfoX, dos gratuitas), en 25 palabras. Pero abre con un eslogan ("Tu dinero, con perspectiva.") y el público solo aparece como etiqueta suelta sobre el H1 ("Para ti. Para tu grupo. Para tu familia."). La frase completa que dice qué es y para quién ("plataforma... de personas, grupos y familias") está mucho más abajo, en el H2 "¿Qué es YnomiX?".

*Evidencia:*
- Eyebrow: "FINANZAS CON MÁS CLARIDAD. Para ti. Para tu grupo. Para tu familia."
- Párrafo bajo el H1: "Tu dinero, con perspectiva. Qadrax registra cómo lo usas; AddiX monitorea tus ahorros e inversiones; InfoX resume las noticias financieras."
- Respuesta completa de quién y qué, hasta el H2: "YnomiX es una plataforma de productos digitales para entender y manejar el dinero de personas, grupos y familias."

*Cómo mejorarlo:*
- Reemplaza el párrafo bajo el H1 por una definición de dos frases, por ejemplo: «YnomiX es una plataforma de herramientas digitales para personas, grupos y familias que quieren entender y manejar su dinero. Incluye Qadrax (registro del uso del dinero, con prueba de 15 días), AddiX (seguimiento de ahorros e inversiones) e InfoX (resumen de noticias financieras los martes y viernes); ConvertiX y DigiMoneY son gratis.»
- Quita "Tu dinero, con perspectiva." de la primera línea del párrafo o pásala al eyebrow, para que la primera frase ya diga qué es y para quién.

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Hay 4 H2 y 8 H3 en forma de pregunta real, y cada uno se responde de inmediato en el párrafo siguiente, con datos directos. Por ejemplo, "¿Cuánto cuesta Qadrax?" se contesta en la primera frase con los dos precios.

*Evidencia:*
- H2: "¿Cuánto cuesta Qadrax?" -> "Qadrax cuesta USD 25 por 6 meses o USD 39 al año."
- H2: "¿Qué es YnomiX?" -> "YnomiX es una plataforma de productos digitales para entender y manejar el dinero de personas, grupos y familias."
- H3: "¿Necesito Qadrax para utilizar AddiX?" -> "No. AddiX es independiente de Qadrax..."
- H2: "¿Cuándo llegan los reportes de InfoX?" (responde en la segunda frase: "los martes y los viernes")

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

La FAQ es visible en la página (bajo el H2 "Las dudas, sobre la mesa.", enlazada como "Preguntas frecuentes" en el menú) con 8 preguntas. Casi todas las respuestas son completas y de 1 a 3 frases, con datos concretos. El script no la detectó porque no usa un encabezado con la palabra FAQ ni acordeón, pero es contenido visible, no solo schema. Detalle menor: el subtítulo dice "Seis respuestas" y hay ocho.

*Evidencia:*
- H2: "Las dudas, sobre la mesa." / "Seis respuestas para elegir con más confianza."
- H3: "¿Necesito Qadrax para utilizar AddiX?" -> "No. AddiX es independiente de Qadrax y tiene sus propios precios: USD 15 por 6 meses o USD 25 al año."
- H3: "¿Cómo solicito el acceso o la prueba de 15 días?" -> "...Respondemos en un máximo de 48 horas..."
- Script: schemaFaq true, preguntasEnEncabezados 12

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 3 bloques JSON-LD válidos con @context schema.org, en el HTML inicial: WebSite, Organization y FAQPage. Organization es el tipo adecuado para una plataforma de productos digitales, y los datos coinciden con lo visible: nombre «YnomiX», correo soporte@ynomix.com y ciudad Bogotá (aparecen en el pie y en la sección «Quién está detrás»). El FAQPage declara 8 preguntas y la página muestra 8 preguntas numeradas 01–08 en su sección de dudas. Quedan pendientes mejoras opcionales: la dirección es solo texto («Bogotá, CO»), no hay logo y los precios de Qadrax y AddiX (USD 25/39 y USD 15/25) no están marcados como Product/Offer, pero nada del schema contradice la página.

*Evidencia:*
- 3 bloques JSON-LD, 0 inválidos; @context https://schema.org en los tres
- Tipos: WebSite, Organization (email soporte@ynomix.com, address «Bogotá, CO», sameAs YouTube y X), FAQPage (8 preguntas)
- texto.md: pie con «soporte@ynomix.com» y «Bogotá, Colombia»; preguntas 01–08 visibles en la sección de FAQ
- El JSON-LD está en el HTML inicial (check estaEnHtmlCrudo ok)

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML crudo trae el 100% del texto renderizado (977 de 977 palabras). El H1 «YnomiX: herramientas para entender y manejar tu dinero», los H2/H3 de las cinco herramientas y el H2 de precios ya vienen en el HTML inicial, así que un bot sin JavaScript ve la oferta, los precios y las preguntas frecuentes. Confirmo el puntaje del script.

*Evidencia:*
- 977 palabras en HTML crudo vs 977 renderizadas (proporción 1)
- H1 en HTML crudo: «YnomiX: herramientas para entender y manejar tu dinero»
- Encabezados crudos: H3 Qadrax, AddiX, InfoX, ConvertiX, DigiMoneY y H2 «Elige tu herramienta. Conoce su precio.»
- Contenido sustancial (977 palabras), no es una página casi vacía

#### AEO 6 · Acceso para bots de IA: 0/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt tiene «Disallow: /» para GPTBot, ClaudeBot y Google-Extended, tres de los cuatro bots de la rúbrica; solo PerplexityBot está permitido. Según la regla de la rúbrica, basta con que uno de ellos esté bloqueado para que no cumpla, aunque el bloqueo parezca intencional y solo busque frenar el entrenamiento (cada bloque permitido lleva «Content-Signal: ... ai-train=no»). El archivo parece administrado por una plataforma (formato de Cloudflare con Content-Signal): permite a los bots de búsqueda y de usuario (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User), pero eso no sube el puntaje. Existe un llms.txt en https://ynomix.com/llms.txt, mencionado solo como bonus informativo sin efecto en el puntaje.

*Evidencia:*
- robots.txt: «User-agent: GPTBot / Disallow: /»
- robots.txt: «User-agent: ClaudeBot / Disallow: /»
- robots.txt: «User-agent: Google-Extended / Disallow: /»
- PerplexityBot con «Allow: /» y «Content-Signal: search=yes, ai-input=yes, ai-train=no»
- También bloqueados: Applebot-Extended, meta-externalagent, Amazonbot, Bytespider
- llms.txt existe (bonus informativo)

*Cómo mejorarlo:*
- Elimina los bloques «Disallow: /» de GPTBot, ClaudeBot y Google-Extended, o cámbialos por «Allow: /», para que los cuatro bots de la rúbrica queden permitidos.
- Como el robots.txt parece generado por Cloudflare (Content-Signal), cambia la configuración de bloqueo de rastreadores de IA / «robots.txt administrado» en el panel de Cloudflare en lugar de editar el archivo a mano, porque la plataforma puede volver a sobrescribirlo.
- Si quieres seguir expresando que no autorizas el entrenamiento, deja la señal «ai-train=no» en el bloque de «User-agent: *» y no uses «Disallow: /» contra estos bots.

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Predominan los párrafos cortos (33 párrafos, promedio de 20 palabras, ninguno largo) y cada sección trata un solo tema. Los precios están en una tabla y las herramientas en tarjetas con su propio H3. Observación menor: en el texto lineal, la etiqueta de precio de cada tarjeta ("Desde USD 15", "Incluido en Qadrax") queda después del CTA de la tarjeta anterior, aunque visualmente se ve bien en la captura.

*Evidencia:*
- parrafos: 33, promedioPalabrasPorParrafo: 20, parrafosLargos: 0
- Tabla de precios: 6 filas (Herramienta | 6 meses | 1 año | Lo que debes saber)
- 22 secciones con encabezado, unas 44 palabras por sección

#### AEO 8 · Identidad clara y consistente: 2/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «YnomiX» coincide en el título, el H1, el pie de página y el name de los dos nodos del schema (WebSite y Organization). La descripción es idéntica en meta, og y schema; el correo soporte@ynomix.com y la ubicación (pie: «Bogotá, Colombia»; schema: «Bogotá, CO») coinciden. Hay enlaces a YouTube (@ynomix) y X (YnomiX) en el pie, y ambos se repiten en el sameAs de Organization.

*Evidencia:*
- Nombre: title «YnomiX: herramientas digitales...», H1 «YnomiX: herramientas para entender...», pie «YnomiX · Carlos Mijangos», schema name «YnomiX» (x2)
- Descripción: meta, og:description y schema Organization/WebSite son el mismo texto
- Contacto: soporte@ynomix.com en el cuerpo, el pie, mailto y el schema; sin teléfono en ninguno de los dos lados (negocio digital, no se penaliza)
- Ubicación: «Bogotá, Colombia» en el pie y address «Bogotá, CO» en el schema (misma ciudad, solo cambia el formato del país)
- Redes: https://www.youtube.com/@ynomix y https://x.com/YnomiX en el pie y en sameAs; son perfiles específicos, no dominios a secas
- Detalles menores: no hay og:site_name ni símbolo © con año en el pie; el nodo WebSite tiene sameAs vacío

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Las afirmaciones importantes vienen con datos verificables: 4 precios en USD por plazo, prueba de 15 días, 2 reportes semanales (martes y viernes), respuesta en máximo 48 horas, detalle de dónde se guardan los datos. Los eslóganes ("Tu dinero, con perspectiva") son pocos. Los puntos débiles son ConvertiX y DigiMoneY, que se describen sin una sola función concreta, y que no hay ejemplos de uso ni un reporte de muestra.

*Evidencia:*
- "USD 25 por 6 meses o USD 39 al año" (Qadrax); "USD 15 por 6 meses o USD 25 al año" (AddiX)
- "Respondemos en un máximo de 48 horas"
- "tus registros se guardan en el Google Drive de tu propia cuenta. YnomiX no conserva copia de tus datos financieros"
- Vago: "Una herramienta gratuita del ecosistema YnomiX. Consulta con soporte su alcance..."

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Se cumplen 2 de las 4 señales: se ve quién está detrás (sección «Quién está detrás» con «Carlos Mijangos, Bogotá, Colombia») y hay una sección «Acerca de» (enlace «Acerca de y contacto» a /acerca-de en el menú y el pie). Faltan la fecha de actualización (sin time, dateModified ni © con año) y los testimonios o fuentes verificables (0 citas, 0 reseñas, 0 enlaces externos de respaldo). El script marcó autor y equipo como ausentes, pero el texto sí nombra a la persona.

*Evidencia:*
- Quién: «YnomiX es una iniciativa de Carlos Mijangos, con experiencia en análisis financiero y gestión comercial» y pie «YnomiX · Carlos Mijangos»; sin foto, sin enlace a perfil profesional y sin Person en el schema
- Acerca de: enlace «Acerca de y contacto» → https://ynomix.com/acerca-de en nav y footer; además hay enlace a /privacidad
- Fecha: autor/fecha en pagina.json todo null (time, meta, jsonld y texto); el pie no trae © ni año
- Testimonios y fuentes: testimonios.citas = 0, schemaReview = false, fuentesExternas = 0

*Cómo mejorarlo:*
- Añade una fecha visible de actualización en la página (por ejemplo «Actualizado: noviembre de 2026» cerca del pie) y agrega dateModified al schema de WebSite; también puedes escribir «© 2026 YnomiX · Carlos Mijangos» en el pie.
- Refuerza la señal de autor: agrega una foto de Carlos Mijangos, un enlace a su perfil profesional (por ejemplo LinkedIn) y un nodo Person en el JSON-LD con name, jobTitle y sameAs, conectado a Organization como founder.
- Suma pruebas verificables: testimonios de usuarios de la prueba o lista de espera con nombre (o iniciales y ciudad) y herramienta usada, o enlaces a fuentes externas que respalden las afirmaciones, como la política de datos de Google Drive que se menciona en la FAQ.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 6 · Acceso para bots de IA** (0/2): Elimina los bloques «Disallow: /» de GPTBot, ClaudeBot y Google-Extended, o cámbialos por «Allow: /», para que los cuatro bots de la rúbrica queden permitidos.
2. **SEO 8 · Velocidad** (1/2): Quita el bloqueo del render: incrusta en el HTML el CSS crítico de la parte superior de la página y carga el resto de index-CCKhlJz9.css de forma diferida; así se recuperan hasta ~740 ms y el LCP baja de 2.5 s.
3. **SEO 9 · Móvil** (1/2): Sube a 12 px o más (idealmente 13–14 px) el texto secundario: la línea «Herramientas independientes. Un propósito en común.», las etiquetas bajo las cifras («Para probar Qadrax gratis», «Herramientas para tu dinero») y las insignias de las tarjetas («Gratis», «Prueba 15 días»).
4. **AEO 1 · Respuesta directa arriba** (1/2): Reemplaza el párrafo bajo el H1 por una definición de dos frases, por ejemplo: «YnomiX es una plataforma de herramientas digitales para personas, grupos y familias que quieren entender y manejar su dinero. Incluye Qadrax (registro del uso del dinero, con prueba de 15 días), AddiX (seguimiento de ahorros e inversiones) e InfoX (resumen de noticias financieras los martes y viernes); ConvertiX y DigiMoneY son gratis.»
5. **AEO 10 · Señales de confianza** (1/2): Añade una fecha visible de actualización en la página (por ejemplo «Actualizado: noviembre de 2026» cerca del pie) y agrega dateModified al schema de WebSite; también puedes escribir «© 2026 YnomiX · Carlos Mijangos» en el pie.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
