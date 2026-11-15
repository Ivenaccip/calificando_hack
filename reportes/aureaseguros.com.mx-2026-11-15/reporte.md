# Calificación SEO + AEO: https://aureaseguros.com.mx/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 95.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **16** | 20 | 80% |
| AEO | **15** | 20 | 75% |
| **Total** | **31** | 40 | 78% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente (ajustó al script) |
| 2 | Descripción y vista al compartir | ■■ 2/2 | Script | agente |
| 3 | Estructura de encabezados | ■□ 1/2 | Script | agente (ajustó al script) |
| 4 | Tema claro y contenido suficiente | ■□ 1/2 | Agente | agente |
| 5 | Indexable | ■■ 2/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | ■■ 2/2 | Script | agente |
| 7 | Imágenes | ■□ 1/2 | Script + Lighthouse | agente |
| 8 | Velocidad | ■■ 2/2 | Lighthouse | agente |
| 9 | Móvil | ■□ 1/2 | Lighthouse + captura móvil | agente |
| 10 | Enlaces y URLs | ■■ 2/2 | Script | agente |

## Rúbrica AEO: que los buscadores con IA usen la página como respuesta

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Respuesta directa arriba | ■■ 2/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | ■■ 2/2 | Agente | agente |
| 3 | Preguntas frecuentes | ■■ 2/2 | Agente | agente |
| 4 | Datos estructurados | ■■ 2/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■■ 2/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | □□ 0/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | ■□ 1/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title>, de 52 caracteres, que incluye la marca y el giro: «Áurea Seguros | Una herencia de confianza desde 1939». No es genérico y es específico de esta página (la portada de la agencia).

*El script dio 1/2; el agente lo ajustó a 2/2. El script dio 1 porque el check «incluyeTemaOMarca» falló al comparar la marca escrita sin espacios ni acento («aureaseguros») contra el título («Áurea Seguros»). Es un falso negativo: la marca sí está al inicio del título y el criterio pide tema o marca.*

*Evidencia:*
- 1 etiqueta <title>: «Áurea Seguros | Una herencia de confianza desde 1939»
- 52 caracteres (dentro del rango 45–65)
- Incluye la marca «Áurea Seguros», que además nombra el tema (seguros)

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 156 caracteres (dentro de 140–160), explica qué ofrece y a quién, e invita a actuar («Conoce Áurea Seguros y solicita orientación cercana»). Están og:title, og:description y og:image, y la imagen es una URL absoluta https; además hay twitter:card summary_large_image.

*Evidencia:*
- meta description de 156 caracteres: «Asesoría en seguros para empresas, personas y familias en México. Conoce Áurea Seguros y solicita orientación cercana…»
- og:image absoluta: https://images.hostinger.com/4aa0f350-…/94798c1c-….png
- og:title coincide con el <title>; og:description coincide con la meta description
- twitter:card = summary_large_image

#### SEO 3 · Estructura de encabezados: 1/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 y no hay saltos de nivel (1 H1, 12 H2, 2 H3), pero el H1 es un eslogan que no dice de qué trata la página: «La tranquilidad de estar bien acompañado.» No menciona seguros ni asesoría; eso solo aparece en el párrafo siguiente. Además, las 9 preguntas del FAQ son H2 al mismo nivel que su título de sección «Resolvemos tus dudas.».

*El script dio 2/2; el agente lo ajustó a 1/2. El script dio 2 al validar solo la mecánica (un H1, sin saltos). Bajo a 1 porque el H1 es un eslogan sin el tema de la página y el FAQ queda plano en H2, lo que el criterio de «H1 claro» y orden lógico no cubre del todo.*

*Evidencia:*
- H1: «La tranquilidadde estar bienacompañado.» (sin espacios en el HTML por un <br>; en pantalla se ve bien)
- Resumen de encabezados: h1=1, h2=12, h3=2, sin saltos
- H2 «Resolvemos tus dudas.» seguido de 9 H2 con las preguntas (¿Cuánto cuesta un seguro?, ¿Dónde atienden?…)
- El tema («asesoría en seguros») solo aparece en el párrafo bajo el H1 y en los H2 del FAQ

*Cómo mejorarlo:*
- Reescribe el H1 para que diga el tema, por ejemplo: «Asesoría en seguros para empresas y familias: la tranquilidad de estar bien acompañado», y deja el eslogan actual como línea secundaria.
- Baja las 9 preguntas del FAQ a H3 para que cuelguen del H2 «Resolvemos tus dudas.».
- En los encabezados con salto de línea (H1 y varios H2) deja un espacio antes del <br> o usa un <span> con display:block, para que los rastreadores no lean «tranquilidadde» ni «bienacompañado».

#### SEO 4 · Tema claro y contenido suficiente: 1/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (asesoría en seguros) está en el título y en el primer párrafo real, pero el H1 es solo un eslogan y no menciona seguros ni asesoría. Hay unas 582 palabras en el contenido principal, pero la frase «Sujeto a las condiciones de la póliza» se repite 6 veces (una de ellas duplicada en la misma respuesta), lo que cuenta como relleno.

*Evidencia:*
- Título: «Áurea Seguros | Una herencia de confianza desde 1939»
- H1: «La tranquilidad de estar bien acompañado.» (sin las palabras seguros ni asesoría)
- Primer párrafo: «Áurea Seguros es una asesoría en seguros que acompaña a empresas, personas y familias en México…»
- 582 palabras en el contenido principal (umbral 300)
- «Sujeto a las condiciones de la póliza» aparece 6 veces; en la última respuesta de la FAQ aparece dos veces seguidas

*Cómo mejorarlo:*
- Incluye el tema en el H1 sin perder el tono de marca, por ejemplo: «Asesoría en seguros para empresas, personas y familias: la tranquilidad de estar bien acompañado.»
- Quita el descargo repetido de cada respuesta de la FAQ y deja una sola nota al final de la sección: «Todas las coberturas están sujetas a las condiciones de la póliza.» Elimina además el duplicado de la respuesta «¿Quién respalda a la agencia?».

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 sin redirecciones, no tiene noindex (ni en meta ni en X-Robots-Tag), el canonical apunta a sí misma, usa HTTPS y declara lang="es-MX", que coincide con el contenido en español.

*Evidencia:*
- HTTP 200 en https://aureaseguros.com.mx/, sin cadena de redirecciones
- metaRobots: null; X-Robots-Tag: null
- canonical: https://aureaseguros.com.mx/
- <html lang="es-MX"> y contenido en español

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt y sitemap.xml (declarado en el robots.txt). El robots.txt permite todo a los buscadores (User-agent: * con Allow: /) y solo bloquea con Disallow: / a bots de entrenamiento de IA (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot, Bytespider), lo que no afecta el indexado en buscadores. El sitemap lista 5 URL reales del mismo dominio y protocolo.

*Evidencia:*
- robots.txt 200: «User-agent: * … Allow: /» y «Sitemap: https://aureaseguros.com.mx/sitemap.xml»
- Disallow: / solo para GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot y Bytespider
- sitemap.xml 200 y válido, con 5 URL: /, /nosotros, /contacto, /terminos, /privacidad (todas https://aureaseguros.com.mx)

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

La página solo tiene una imagen con contenido, el logo (aparece 2 veces, misma URL), con alt «Áurea Seguros», que es correcto para un logo (100% con alt válido, sin alt vacío en imágenes grandes). El detalle está en el peso: el PNG del logo pesa 44 KB y Lighthouse (`uses-responsive-images`, 0.5) estima que se pueden ahorrar 42 KiB, es decir, se descarga unas 20 veces más de lo necesario; además `unsized-images` marca que no tiene width/height explícitos. El peso total de imágenes es bajo (43 KB, ninguna > 300 KB), así que el impacto real es pequeño.

*Evidencia:*
- 2 imágenes, ambas con la misma URL y alt «Áurea Seguros»
- Lighthouse uses-responsive-images: ahorro estimado de 42 KiB sobre 44,444 bytes
- Lighthouse unsized-images: las 2 instancias del logo sin width/height
- uses-optimized-images, modern-image-formats y offscreen-images sin hallazgos

*Cómo mejorarlo:*
- Reemplaza el PNG del logo por un SVG, o exporta una versión WebP/PNG al tamaño real de uso (aprox. 2x del ancho mostrado en el encabezado), para recuperar los ~42 KiB que marca Lighthouse.
- Agrega atributos width y height al <img> del logo para reservar su espacio y evitar saltos de diseño.

#### SEO 8 · Velocidad: 2/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: Lighthouse móvil da rendimiento 95 (≥ 80), LCP 2.40 s (< 2.5 s) y CLS 0.000 (< 0.1); TBT 0 ms y respuesta del servidor de 40 ms. Es una sola medición y varía entre corridas y equipos; el LCP queda a solo ~0.1 s del límite, así que una corrida más lenta podría pasarlo de 2.5 s.

*Evidencia:*
- Rendimiento 95, SEO 92 (Lighthouse 12.8.2, una sola corrida)
- LCP 2,397 ms (FCP y Speed Index con el mismo valor), CLS 0, TBT 0 ms
- Lighthouse sugiere: recursos que bloquean el render (ahorro 410 ms: Google Fonts y index-DKvdvJBC.css) y JS sin usar (21 KiB en entry.client)
- Peso total de la página: 299 KiB

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

En la captura móvil el diseño se ve limpio: tiene meta viewport correcta, no hay scroll horizontal, el menú hamburguesa está visible arriba a la derecha y el texto principal es grande y legible sin zoom. El aviso de cookies es una tarjeta inferior que ocupa cerca de una quinta parte de la pantalla y deja ver el título y el párrafo, pero tapa lo que sigue del hero; sus tres botones se ven de tamaño cómodo. Lo que queda a medias son las métricas: 12% del texto mide menos de 12 px (etiquetas en mayúsculas pequeñas como «UNA HERENCIA DE CONFIANZA · DESDE 1939» y «01 / NUESTRA ASESORÍA») y 10 de 33 enlaces/botones miden menos de 24 px de alto (enlaces de texto de 16 a 20 px).

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desbordeHorizontalPx = 0
- Captura arriba: hamburguesa visible, titular y párrafo legibles, banner de cookies abajo sin cubrir el contenido principal
- 474 de 4,018 caracteres (12%) con fuente < 12 px
- Objetivos táctiles pequeños: «Conoce nuestra asesoría» 343x18, «SIGUE CONOCIÉNDONOS» 113x16, «Nuestra asesoría» y «Sobre nosotros» 156x20
- La captura completa solo cubre los primeros 3000 px de la página

*Cómo mejorarlo:*
- Sube las etiquetas pequeñas en mayúsculas («UNA HERENCIA DE CONFIANZA · DESDE 1939», «01 / NUESTRA ASESORÍA», pie de página) a 12 px o más.
- Agrega padding vertical a los enlaces de texto («Conoce nuestra asesoría», «SIGUE CONOCIÉNDONOS», enlaces del pie) para que su zona táctil mida al menos 44 px de alto, o 24 px como mínimo absoluto.
- Reduce la altura del aviso de cookies en móvil (texto más corto o botones en una sola fila compacta) para que cubra menos del hero.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 5 enlaces internos funcionales (inicio, Nuestra asesoría, Nuestra historia, Sobre nosotros, Hablemos), no hay enlaces rotos ni sin verificar, ninguna ancla es genérica y las URLs son cortas y legibles (/nosotros, /contacto, /terminos, /privacidad). El script revisó los 4 enlaces internos únicos con ruta propia; los de ancla (#servicios, #nosotros, #contacto) son saltos dentro de la misma página y no se verifican por HTTP.

*Evidencia:*
- 0 rotos de 4 enlaces internos revisados; sinVerificar: []
- 0 enlaces genéricos tipo «clic aquí» o «leer más»; 0 sin texto; Lighthouse «Links have descriptive text» = 1
- Anclas descriptivas, p. ej. «Conoce la presentación de la agencia ↗» y «Página de contacto ↗»
- URLs internas: /nosotros, /contacto, /terminos, /privacidad (0 de 5 poco legibles)

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Tras el H1, el primer párrafo mide 43 palabras y en sus dos frases dice qué es («una asesoría en seguros»), para quién («empresas, personas y familias en México») y qué ofrece («orientación profesional y cercana… encontrar la protección adecuada»). La etiqueta «UNA HERENCIA DE CONFIANZA · DESDE 1939» que el script tomó como primer párrafo es solo un rótulo decorativo. Un detalle menor es que no nombra los ramos (daños, personas, microseguros, arte), que solo aparecen más abajo.

*Evidencia:*
- «Áurea Seguros es una asesoría en seguros que acompaña a empresas, personas y familias en México a tomar decisiones informadas.»
- «Con una herencia familiar desde 1939, ofrecemos orientación profesional y cercana para entender tus necesidades y encontrar la protección adecuada para cada historia.»
- Longitud: 43 palabras, dentro del rango esperado

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

9 de los 12 H2 son preguntas reales de un usuario y casi todas se responden en la primera frase justo debajo. «¿Dónde atienden?» se contesta con «Atendemos desde la Ciudad de México y en todo México.» y «¿Qué horario tienen?» con «Atendemos de lunes a viernes, de 9:00 a 19:00.». La respuesta de «¿Cuánto cuesta un seguro?» empieza con «El costo depende del tipo de seguro» y no da un precio, pero sí explica de qué depende, así que no es evasiva.

*Evidencia:*
- H2: «¿Cuánto cuesta un seguro?», «¿Dónde atienden?», «¿Qué horario tienen?», «¿Cómo los contacto?», «¿Cómo contrato un seguro?», «¿Cómo reporto un siniestro?», «¿Quién respalda a la agencia?»
- H2: «¿Cada historia merece una orientación propia?» → «Sí. Primero escuchamos…»
- 9 H2 en forma de pregunta de 12 en total

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección visible etiquetada «03 / PREGUNTAS FRECUENTES» con el título «Resolvemos tus dudas.» y 8 preguntas con su respuesta en texto. Casi todas las respuestas son completas y de 1 a 3 frases. La excepción es «¿Cuánto cuesta un seguro?», que es más larga, pero esto no pesa frente a las otras. El script no detectó la sección porque la etiqueta es un rótulo decorativo y no un encabezado, así que el valor nulo en «encabezadoFaq» no refleja lo que ve el usuario. El FAQPage del schema no es la base de esta calificación.

*Evidencia:*
- «03 / PREGUNTAS FRECUENTES» y «Lo que más nos preguntan antes de iniciar una conversación.»
- 8 preguntas numeradas del 01 al 08 con respuesta debajo, por ejemplo: «Atendemos de lunes a viernes, de 9:00 a 19:00.»
- «¿Cómo reporto un siniestro?» → «En daños, se reporta a la aseguradora; en gastos médicos, se contacta a tu agente. Sujeto a las condiciones de la póliza.»
- No hay marcas de acordeón colapsado (▸) en texto.md; el texto de las respuestas está visible

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 4 bloques JSON-LD válidos de schema.org en el HTML inicial (WebSite, Organization, InsuranceAgency y FAQPage). El tipo es adecuado para una agencia de seguros (InsuranceAgency es un subtipo de LocalBusiness) y los datos coinciden con lo visible: teléfonos 55 5575 2900 y 55 5575 2201, correo esquinoman@yahoo.com.mx, dirección Av. Revolución 1875 (C.P. 01000) y las 8 preguntas del FAQ que aparecen en la página. Detalles menores: el nodo InsuranceAgency no repite dirección ni url, no declara horario (la página dice lunes a viernes, 9:00 a 19:00) y sameAs está vacío en todos los nodos; son huecos, no contradicciones.

*Evidencia:*
- Tipos: WebSite, Organization, InsuranceAgency, FAQPage (4 bloques, 0 inválidos, todos con @context https://schema.org)
- Teléfonos del schema +525555752900 y +525555752201 = «55 5575 2900 · 55 5575 2201» en texto.md
- Dirección del schema «Av. Revolución 1875, Tizapán, San Ángel, Álvaro Obregón… 01000» = dirección visible en la página
- FAQPage con 8 preguntas; en texto.md hay 8 preguntas de FAQ visibles
- Nodo InsuranceAgency sin address, url, openingHours ni logo; sameAs: [] en los 4 nodos

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae 582 de 582 palabras (100%) del texto renderizado, incluido el H1 «La tranquilidad de estar bien acompañado.», los H2/H3 de las secciones y las 8 respuestas del FAQ. El contenido que importa (qué hace la agencia, para quién, horario, contacto) está disponible sin ejecutar JavaScript. Es una página corta (582 palabras), pero todo lo que existe es legible para bots que no ejecutan JS.

*Evidencia:*
- palabrasHtmlCrudo 582 / palabrasRenderizado 582 (proporción 1)
- Encabezados en el HTML crudo: H1 + 4 H2 + 2 H3, entre ellos «¿Cada historia merece una orientación propia?» y «¿Cuánto cuesta un seguro?»
- Primeras palabras del HTML crudo: «UNA HERENCIA DE CONFIANZA · DESDE 1939» y «Áurea Seguros es una asesoría en seguros que acompaña a empresas, personas y familias en México…»

#### AEO 6 · Acceso para bots de IA: 0/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt bloquea con «Disallow: /» a GPTBot, ClaudeBot y Google-Extended; solo PerplexityBot queda permitido (3 de los 4 bots de la rúbrica bloqueados). Aunque el bloqueo parezca intencional, cuenta como bloqueado y no se sube el puntaje. El archivo parece administrado por una plataforma: usa líneas «Content-Signal: search=yes, ai-input=yes, ai-train=no» en cada bloque (formato de señales de contenido típico de Cloudflare), aunque no hay comentarios que confirmen quién lo genera. Bonus informativo: existe /llms.txt, que no cambia el puntaje.

*Evidencia:*
- User-agent: GPTBot → Disallow: /
- User-agent: ClaudeBot → Disallow: /
- User-agent: Google-Extended → Disallow: /
- User-agent: PerplexityBot → Allow: / (permitido)
- También bloqueados fuera de la rúbrica: Applebot-Extended, meta-externalagent, Amazonbot, Bytespider
- Permitidos explícitamente: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, Perplexity-User, DuckAssistBot

*Cómo mejorarlo:*
- Cambia «Disallow: /» por «Allow: /» (o elimina los bloques) para GPTBot, ClaudeBot y Google-Extended en el robots.txt, o desactiva en la plataforma la opción que los bloquea, para que los asistentes de IA puedan acceder al sitio.
- Si la preocupación es el entrenamiento de modelos, mantén «ai-train=no» en Content-Signal como preferencia declarada, sin bloquear con Disallow a los bots que la rúbrica evalúa.
- Conserva el llms.txt y verifica que sus enlaces apunten a páginas que los bots sí puedan rastrear.

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Predominan los párrafos cortos: 28 párrafos con promedio de 17 palabras y ninguno largo. Cada sección trata un solo tema (asesoría, historia, preguntas, contacto) y cada pregunta de la FAQ es un bloque independiente que un buscador puede citar. No hay listas ni tablas, pero casi no hacen falta; el único bloque que lo pediría es la respuesta de costos, de unas 75 palabras.

*Evidencia:*
- 28 párrafos, promedio de 17 palabras, 0 párrafos largos
- 14 secciones de unas 42 palabras cada una, con H1/H2/H3 ordenados
- 0 listas y 0 tablas; la respuesta de «¿Cuánto cuesta un seguro?» agrupa tres tipos de seguro en un solo párrafo

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «Áurea Seguros» es el mismo en el title, el pie (© 2026 Áurea Seguros) y los tres nodos del schema, y la descripción es la misma en meta y og. Teléfonos, correo y dirección coinciden entre la página y el schema (55 5575 2900 / 55 5575 2201 equivalen a +525555752900 / +525555752201; la dirección solo difiere en el orden del C.P.). Falta lo importante para verificar la entidad: no hay ningún enlace a redes oficiales y todos los sameAs están vacíos.

*Evidencia:*
- Nombre: title «Áurea Seguros | Una herencia de confianza desde 1939»; schema name «Áurea Seguros» (x3); pie «© 2026 Áurea Seguros · México». No hay og:site_name.
- Dirección en página: «Av. Revolución 1875, Tizapán, San Ángel, Álvaro Obregón, C.P. 01000, Ciudad de México, México»; en schema: misma dirección con «01000» después de la ciudad.
- Teléfonos y correo (esquinoman@yahoo.com.mx) iguales en página, mailto/tel y schema.
- redes.enPagina = {} y sameAs = [] en WebSite, Organization, InsuranceAgency y FAQPage; los 16 enlaces de la página son internos.
- El nodo InsuranceAgency no trae url ni address; solo Organization los tiene.
- El correo es de Yahoo (no del dominio aureaseguros.com.mx) y no hay mapa incrustado (mapas: 0).

*Cómo mejorarlo:*
- Enlaza en el pie los perfiles oficiales reales de la agencia (por ejemplo Facebook, LinkedIn, Instagram o ficha de Google Business Profile) con la URL completa del perfil, no la página principal de la red.
- Agrega esos mismos perfiles al arreglo sameAs del nodo Organization (y, si aplica, el del InsuranceAgency) para que los buscadores y asistentes de IA los reafirmen.
- Completa el nodo InsuranceAgency con url, address y @id apuntando al Organization (o unifícalos en uno solo), y agrega la meta og:site_name con el valor «Áurea Seguros».

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Los datos concretos son sobre todo de contacto y de origen: 1939, horario de lunes a viernes de 9:00 a 19:00, dos teléfonos, dirección con código postal y la supervisión de la CNSF. Las promesas de valor, en cambio, son genéricas («orientación profesional y cercana», «trato humano», «tomar decisiones informadas»). No hay precios ni rangos, cifras de experiencia o clientes, nombres de aseguradoras ni ejemplos de casos.

*Evidencia:*
- Datos verificables: «desde 1939», «de lunes a viernes, de 9:00 a 19:00», «55 5575 2900 y 55 5575 2201», «Av. Revolución 1875, Tizapán, San Ángel… C.P. 01000», «supervisadas por la CNSF»
- Frases genéricas: «orientación profesional y cercana», «con experiencia, atención y un trato humano», «la protección adecuada para cada historia»
- «El costo depende del tipo de seguro» no da ninguna cifra; el script contó 0 precios y 0 porcentajes

*Cómo mejorarlo:*
- En «¿Cuánto cuesta un seguro?» añade una cifra real, por ejemplo: «Los microseguros tienen un precio fijo desde MXN [monto real] al mes.», con el monto verdadero en lugar del corchete.
- Sustituye una frase genérica de la sección «Sobre Áurea» por un dato comprobable, por ejemplo: «Desde 1939 hemos acompañado a [número] familias y empresas en [número] generaciones.», con las cifras reales.
- Añade un ejemplo concreto en «¿Cómo reporto un siniestro?» o en «Para empresas», como un caso de daños con el tipo de negocio, el riesgo cubierto y el tiempo de atención, siempre que se pueda publicar.

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Solo hay dos de las cuatro señales: una sección «acerca de» (bloque «02 / SOBRE ÁUREA», ancla #nosotros y página /nosotros) y una fecha visible («Última actualización: 15 de noviembre de 2026.», igual a la fecha de la auditoría, así que podría ser dinámica). No se ve quién está detrás: no hay nombres de agentes, fundadores ni equipo, y tampoco hay testimonios, reseñas ni fuentes citadas con enlace.

*Evidencia:*
- Autor/equipo: autor.meta, relAuthor y jsonld en null; mencionaEquipo = false; ninguna persona con nombre en el texto.
- Fecha: «Última actualización: 15 de noviembre de 2026.» en el pie; sin <time> ni dateModified en el schema.
- Acerca de: sección «Una herencia familiar. Un compromiso cercano.» y enlaces «Sobre nosotros» (/nosotros) y «Nuestra historia» (#nosotros); el texto solo dice «herencia familiar que se remonta a 1939», sin fundadores ni nombres.
- Testimonios: citas = 0, schemaReview = false, sin encabezado de testimonios o reseñas.
- Fuentes: fuentesExternas = 0. La FAQ dice «aseguradoras autorizadas y supervisadas por la CNSF», pero sin enlace ni número de registro verificable.
- Sí hay enlaces legales (Términos de uso y Aviso de privacidad), que dan algo de formalidad pero no cuentan como una de las cuatro señales.

*Cómo mejorarlo:*
- Muestra quién está detrás: agrega una sección con nombre, cargo y foto del agente o del equipo (por ejemplo «Fundadora/Director, agente de seguros»), y añade su número de cédula o autorización ante la CNSF si aplica.
- Incluye 2 o 3 testimonios con nombre, empresa o ciudad (y foto si es posible), o reseñas de Google con calificación y enlace al perfil. Evita testimonios anónimos.
- Cita con enlace a la fuente oficial (por ejemplo la CNSF o el registro de la agencia) en la respuesta de «¿Quién respalda a la agencia?», y marca la fecha con <time datetime> y dateModified en el schema, de modo que refleje la última edición real del contenido.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 6 · Acceso para bots de IA** (0/2): Cambia «Disallow: /» por «Allow: /» (o elimina los bloques) para GPTBot, ClaudeBot y Google-Extended en el robots.txt, o desactiva en la plataforma la opción que los bloquea, para que los asistentes de IA puedan acceder al sitio.
2. **SEO 3 · Estructura de encabezados** (1/2): Reescribe el H1 para que diga el tema, por ejemplo: «Asesoría en seguros para empresas y familias: la tranquilidad de estar bien acompañado», y deja el eslogan actual como línea secundaria.
3. **SEO 4 · Tema claro y contenido suficiente** (1/2): Incluye el tema en el H1 sin perder el tono de marca, por ejemplo: «Asesoría en seguros para empresas, personas y familias: la tranquilidad de estar bien acompañado.»
4. **SEO 7 · Imágenes** (1/2): Reemplaza el PNG del logo por un SVG, o exporta una versión WebP/PNG al tamaño real de uso (aprox. 2x del ancho mostrado en el encabezado), para recuperar los ~42 KiB que marca Lighthouse.
5. **SEO 9 · Móvil** (1/2): Sube las etiquetas pequeñas en mayúsculas («UNA HERENCIA DE CONFIANZA · DESDE 1939», «01 / NUESTRA ASESORÍA», pie de página) a 12 px o más.
6. **AEO 8 · Identidad clara y consistente** (1/2): Enlaza en el pie los perfiles oficiales reales de la agencia (por ejemplo Facebook, LinkedIn, Instagram o ficha de Google Business Profile) con la URL completa del perfil, no la página principal de la red.
7. **AEO 9 · Datos concretos** (1/2): En «¿Cuánto cuesta un seguro?» añade una cifra real, por ejemplo: «Los microseguros tienen un precio fijo desde MXN [monto real] al mes.», con el monto verdadero en lugar del corchete.
8. **AEO 10 · Señales de confianza** (1/2): Muestra quién está detrás: agrega una sección con nombre, cargo y foto del agente o del equipo (por ejemplo «Fundadora/Director, agente de seguros»), y añade su número de cédula o autorización ante la CNSF si aplica.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
