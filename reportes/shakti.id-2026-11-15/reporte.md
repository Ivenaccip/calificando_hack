# Calificación SEO + AEO: https://shakti.id/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 87.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **15** | 20 | 75% |
| AEO | **10** | 20 | 50% |
| **Total** | **25** | 40 | 63% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■□ 1/2 | Script | agente |
| 2 | Descripción y vista al compartir | ■■ 2/2 | Script | agente |
| 3 | Estructura de encabezados | ■■ 2/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | ■□ 1/2 | Agente | agente |
| 5 | Indexable | ■■ 2/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | ■■ 2/2 | Script | agente |
| 7 | Imágenes | ■□ 1/2 | Script + Lighthouse | agente |
| 8 | Velocidad | ■□ 1/2 | Lighthouse | agente |
| 9 | Móvil | ■□ 1/2 | Lighthouse + captura móvil | agente |
| 10 | Enlaces y URLs | ■■ 2/2 | Script | agente |

## Rúbrica AEO: que los buscadores con IA usen la página como respuesta

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Respuesta directa arriba | ■□ 1/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | □□ 0/2 | Agente | agente |
| 3 | Preguntas frecuentes | ■□ 1/2 | Agente | agente |
| 4 | Datos estructurados | ■□ 1/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■■ 2/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | □□ 0/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | ■□ 1/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 1/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> y sí describe la página: marca más tema ("SHAKTI | Fisioterapia y rehabilitación"), nada genérico. Pero mide 38 caracteres, por debajo del rango de 50–60, y no aprovecha el espacio para la ciudad, que es la búsqueda local más probable.

*Evidencia:*
- <title>: "SHAKTI | Fisioterapia y rehabilitación"
- 1 etiqueta <title>, 38 caracteres (rango esperado 45–65)
- La ciudad (Ciudad de México) aparece en la meta description pero no en el título

*Cómo mejorarlo:*
- Alarga el título a 50–60 caracteres e incluye la ciudad, por ejemplo: «SHAKTI | Fisioterapia y rehabilitación en Ciudad de México» (58 caracteres). Actualiza también og:title para que coincida.

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 154 caracteres (dentro de 140–160), nombra los servicios y la ciudad y abre con un beneficio claro ("Recupera tu movimiento, recupera tu vida"). Están og:title, og:description y og:image, y la imagen es una URL absoluta https (.png). Además hay twitter:card summary_large_image.

*Evidencia:*
- meta description: 154 caracteres, "Recupera tu movimiento, recupera tu vida. Fisioterapia, ejercicio terapéutico, rehabilitación y masajes con un enfoque humano en Ciudad de México, México."
- og:image: https://images.hostinger.com/17b71658-ac1f-4bde-97b8-1edd5fd0a2fc/2d4e19cc-baed-4289-b25c-d41b4d11f806.png
- og:title y og:description presentes (idénticos al título y a la description)

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 y la jerarquía es lógica: 4 H2 y 6 H3, sin saltos de nivel (H1 → H2 → H3) y los encabezados organizan secciones reales, no son estilo de menú o pie. El H1 es un lema ("Recupera tu movimiento, recupera tu vida.") que no nombra el servicio, pero el párrafo inmediato dice "Fisioterapia y rehabilitación", así que el tema queda claro. En el texto extraído los H1/H2 salen con palabras pegadas ("tumovimiento,recupera", "cercade"), probablemente por saltos de línea en el marcado; en pantalla se ven bien.

*Evidencia:*
- H1: "Recupera tumovimiento,recupera tu vida." (1 solo)
- Resumen: h1=1, h2=4, h3=6, h4–h6=0; saltos: ninguno
- H2: "Un paso más cercade sentirte mejor.", "Elige tu servicio y tu ciudad.", "Tu historia importa.Tu movimiento también.", "Volver a moverteempieza aquí."

#### SEO 4 · Tema claro y contenido suficiente: 1/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El título dice "SHAKTI | Fisioterapia y rehabilitación" y el primer párrafo real ("Fisioterapia y rehabilitación con un enfoque humano") confirma el tema, pero el H1 es un eslogan ("Recupera tu movimiento, recupera tu vida.") que no nombra el servicio. El script cuenta 391 palabras, pero incluye etiquetas, botones y textos de adorno; la prosa útil ronda 250 y buena parte es tono genérico ("a tu ritmo", "Un camino a tu medida").

*Evidencia:*
- Título: "SHAKTI | Fisioterapia y rehabilitación"
- H1: "Recupera tu movimiento, recupera tu vida." (sin la palabra fisioterapia)
- Primer párrafo: "Te acompañamos a moverte con confianza. Fisioterapia y rehabilitación con un enfoque humano..."
- El script tomó como primer párrafo el texto alternativo de la imagen (13 palabras), no el párrafo real
- Gran parte del texto son etiquetas y botones: "Conocer el servicio", "Ver servicio", "NUESTRO ENFOQUE"

*Cómo mejorarlo:*
- Haz que el H1 nombre el servicio y el lugar, por ejemplo: «Fisioterapia y rehabilitación en Ciudad de México», y deja «Recupera tu movimiento, recupera tu vida.» como subtítulo.
- Añade unas 100 palabras de contenido útil que expliquen qué se trata y cómo es el proceso (por ejemplo, qué incluye la valoración individual y qué tipos de masaje ofreces), en lugar de más frases de tono.
- Reduce las etiquetas decorativas repetidas ("MOVIMIENTO CON PROPÓSITO", "CUIDADO QUE TE PONE EN MOVIMIENTO") o conviértelas en frases que informen.

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 sin redirecciones, sin noindex ni en meta robots ni en X-Robots-Tag, y el canonical apunta a sí misma (https://shakti.id/). Usa HTTPS y declara lang="es-MX", que coincide con el contenido en español.

*Evidencia:*
- HTTP 200, cadena de redirecciones: solo https://shakti.id/
- metaRobots: null, xRobotsTag: null
- canonical: https://shakti.id/
- <html lang="es-MX">; Lighthouse: is-crawlable y canonical en verde

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml válido (200, 10 URL del mismo dominio y protocolo, incluida la home y páginas reales como /masajes y /fisioterapia-y-rehabilitacion/ciudad-de-mexico). El robots.txt permite todo a los buscadores (User-agent: * con Allow: /) y declara el sitemap; solo bloquea bots de entrenamiento de IA (GPTBot, ClaudeBot, Google-Extended, etc.), lo que no afecta la indexación. Lighthouse marca "13 errores" en robots.txt, pero cuadran con las 13 líneas Content-Signal, una directiva que Lighthouse no reconoce; no es un bloqueo real.

*Evidencia:*
- robots.txt: "User-agent: *" + "Allow: /"; "Sitemap: https://shakti.id/sitemap.xml"
- Disallow: / solo para GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot, Bytespider
- sitemap.xml: 200, 10 URL; ejemplos https://shakti.id/masajes y https://shakti.id/fisioterapia-y-rehabilitacion/estado-de-mexico

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 4 imágenes (2 únicas: el logo, repetido, y 2 fotos) tienen alt y el peso total es bajo (60 KB, ninguna > 300 KB). Los alt de las fotos son descriptivos («Fisioterapeuta acompañando a una paciente en un ejercicio de movilidad de hombro») y el del logo («SHAKTI») es razonable para una marca. Lo único que falla es que Lighthouse marca uses-responsive-images: el logo PNG pesa ~21 KB y se podrían ahorrar ~20 KB. Es un problema menor, pero impide el 2.

*Evidencia:*
- 4 de 4 imágenes con alt válido; altVacioEnImagenesGrandes: []
- pesoTotalImagenesKB: 60; imagenesPesadas: []
- Lighthouse uses-responsive-images (score 0.5): logo 21,362 bytes, ahorro estimado 20,675 bytes
- uses-optimized-images, modern-image-formats y offscreen-images: sin hallazgos (score 1)

*Cómo mejorarlo:*
- Sirve el logo (2f64a7a4…png) a su tamaño real de despliegue (por ejemplo 2× el ancho mostrado en el encabezado) o cámbialo a SVG/WebP para ahorrar ~20 KB.
- Añade srcset/sizes a las dos fotos del hero y de la sección de enfoque para que el teléfono descargue la versión de ~768 px de ancho y no una mayor.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Es una sola medición de Lighthouse móvil, que puede variar entre corridas y equipos. Rendimiento 87 (cumple ≥ 80) y CLS 0.000 (cumple < 0.1), pero el LCP es 3.59 s (no cumple < 2.5 s), así que se cumplen 2 de 3 y corresponde 1. Lighthouse señala como causas recursos que bloquean el render (ahorro ~610 ms) y JavaScript sin usar (~22 KiB); el FCP ya es de 2.37 s, así que el LCP arranca tarde.

*Evidencia:*
- Rendimiento 87, LCP 3,594 ms, CLS 0, FCP 2,371 ms, TBT 0 ms
- render-blocking-resources: ahorro de 610 ms (CSS de Google Fonts e index-oqpUlhRQ.css de 17 KB)
- unused-javascript: ahorro de 22 KiB en jsx-runtime-98TrhzpB.js
- server-response-time: 110 ms (no es el problema); peso total 248 KiB

*Cómo mejorarlo:*
- Quita el bloqueo del render: autoaloja las fuentes Manrope y Libre Caslon Display (o cárgalas con preload y media="print" onload) y separa el CSS crítico del hero para que el primer pintado no espere a index-oqpUlhRQ.css.
- Acelera el LCP: confirma cuál es el elemento LCP (el reporte no trae el nodo); si es la foto del hero, precárgala con fetchpriority="high" y no la cargues de forma diferida. Considera pre-renderizar el hero en el HTML en lugar de depender de entry.client.js.
- Divide o reduce el bundle jsx-runtime-98TrhzpB.js (~22 KiB sin usar) con code-splitting y carga diferida de lo que no se ve al inicio.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto, sin scroll horizontal, menú hamburguesa visible, botón «Agendar consulta» claro y CTAs grandes; no hay banner de cookies ni pop-up que tape la pantalla. Aun así, el 41% del texto mide menos de 12 px y en la captura se ve: etiquetas en mayúsculas («EL BIENESTAR EMPIEZA CON MOVIMIENTO», «MOVIMIENTO CON PROPÓSITO»), «Ciudad de México, México» y «Conoce nuestros servicios» son diminutas. Además, en el borde izquierdo de la foto del hero aparece texto turquesa cortado («o», «py»), un defecto visual. En la captura completa las secciones inferiores salen difuminadas (animación de aparición que no se activó), por eso no pude verificar su legibilidad.

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desbordeHorizontalPx: 0
- textoLegible falla: 1,039 de 2,515 caracteres (41%) < 12 px
- Captura móvil: texto turquesa cortado «o» / «py» en el borde izquierdo de la foto del hero
- 1 de 21 objetivos táctiles < 24 px: enlace «Inicio» de 22×44 px

*Cómo mejorarlo:*
- Sube a 12–14 px como mínimo las etiquetas en mayúsculas, la ubicación «Ciudad de México, México», «Conoce nuestros servicios» y «MOVIMIENTO CON PROPÓSITO» en el breakpoint móvil.
- Corrige el texto cortado en el borde izquierdo de la foto del hero (ajusta object-position/recorte de la imagen o elimina el texto incrustado) para que no parezca contenido roto.
- Ensancha el enlace «Inicio» del menú (22 px de ancho) a al menos 44×44 px con padding.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 5 enlaces claros (Inicio, Fisioterapia y rehabilitación, Masajes, Preguntas frecuentes, Contacto) y se repite en el pie. Los 3 enlaces internos únicos distintos de la home y de las anclas se revisaron completos: 0 rotos y 0 sin verificar. Ningún texto es genérico (las tarjetas de servicio incluyen el título dentro del enlace; Lighthouse link-text pasa) y las URLs son cortas y legibles. Observación menor: las páginas por ciudad del sitemap solo se alcanzan desde el selector de la home, no con enlaces visibles.

*Evidencia:*
- 0 rotos de 3 enlaces internos revisados; sinVerificar: []
- Menú: /fisioterapia-y-rehabilitacion, /masajes, /preguntas-frecuentes, /#contacto
- 0 enlaces genéricos, 0 sin texto, 0 de 4 URLs poco legibles
- Lighthouse: link-text y crawlable-anchors en verde

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Las dos primeras frases ("Te acompañamos a moverte con confianza. Fisioterapia y rehabilitación con un enfoque humano, a tu ritmo y para tu bienestar.") dicen qué se ofrece, pero la primera es un eslogan, no se dice para quién es ("para tu bienestar" es genérico), no se presenta SHAKTI como centro o clínica y la ciudad aparece aparte, en una línea suelta. Son 20 palabras, por debajo del rango útil.

*Evidencia:*
- "Te acompañamos a moverte con confianza."
- "Fisioterapia y rehabilitación con un enfoque humano, a tu ritmo y para tu bienestar."
- "Ciudad de México, México" aparece como línea separada, no dentro de la respuesta

*Cómo mejorarlo:*
- Abre con una definición directa, por ejemplo: «SHAKTI es un servicio de fisioterapia, rehabilitación y masajes en Ciudad de México para personas que quieren recuperar su movimiento y aliviar molestias. Empieza con una valoración individual e incluye ejercicio terapéutico y masaje relajante, descontracturante y deportivo.»
- Deja el eslogan «Te acompañamos a moverte con confianza» después de esa definición, no antes.

#### AEO 2 · Encabezados en forma de pregunta: 0/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Ninguno de los 4 H2 ni de los H3 es una pregunta ("Un paso más cerca de sentirte mejor.", "Elige tu servicio y tu ciudad."). Existe una pregunta en un acordeón, pero no es un encabezado y se califica en aeo-3.

*Evidencia:*
- H2: "Un paso más cerca de sentirte mejor."
- H2: "Elige tu servicio y tu ciudad."
- H2: "Tu historia importa. Tu movimiento también."
- H2: "Volver a moverte empieza aquí."
- H2 como pregunta: 0 de 4

*Cómo mejorarlo:*
- Cambia «Elige tu servicio y tu ciudad.» por «¿Qué servicios ofrece SHAKTI?» y responde justo debajo: «Fisioterapia y rehabilitación, y masajes relajante, descontracturante y deportivo.»
- Cambia «Tu historia importa. Tu movimiento también.» por «¿Cómo es la primera consulta?» y responde en la primera frase: «Empieza con una valoración individual en la que cuentas qué movimiento quieres recuperar y qué molestias tienes.»
- Cambia «Hablemos de tu bienestar» por «¿Cómo agendo una consulta?» y responde: «Agenda con al menos 3 días de anticipación y cotiza por WhatsApp.»

#### AEO 3 · Preguntas frecuentes: 1/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay un acordeón visible con una sola pregunta ("¿Qué compartir al solicitar una consulta?") cuya respuesta es completa y corta, pero no hay sección con encabezado de FAQ ni al menos 3 preguntas en la página. El menú enlaza a /preguntas-frecuentes, y no hay FAQPage en el schema.

*Evidencia:*
- ▸ "¿Qué compartir al solicitar una consulta?"
- Respuesta: "Cuéntanos qué movimiento o actividad te gustaría recuperar, qué molestias tienes y cuáles son tus dudas..."
- Sin encabezado de FAQ; detailsSummary: 1; schemaFaq: false
- El menú tiene "Preguntas frecuentes" (https://shakti.id/preguntas-frecuentes), pero esta página no muestra esas preguntas

*Cómo mejorarlo:*
- Agrega un H2 «Preguntas frecuentes» antes del acordeón actual y suma al menos 2 preguntas más con respuestas de 1–3 frases, por ejemplo «¿Con cuánta anticipación debo agendar?» → «Con al menos 3 días de anticipación, por WhatsApp.»
- Trae a esta página 3–5 preguntas de /preguntas-frecuentes (precio de la valoración, duración de la sesión, dónde están: Apicultura 29, Venustiano Carranza) con respuestas completas, no «contáctanos».
- Cuando la sección visible esté lista, añade el JSON-LD FAQPage con las mismas preguntas.

#### AEO 4 · Datos estructurados: 1/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 2 bloques JSON-LD válidos, con contexto schema.org y presentes en el HTML inicial: un WebSite y un MedicalClinic. El tipo MedicalClinic sí es adecuado para una clínica de fisioterapia (es un subtipo de LocalBusiness; el check tipoRelevante del script lo marcó como fallido solo porque no está en su lista), y la dirección (Apicultura 29, 15300 CDMX) y el nombre SHAKTI coinciden con la página. El puntaje se queda en 1 porque el schema es escaso: no trae logo ni image, sameAs va vacío, el WebSite no tiene url y no hay horarios; además el teléfono del schema (+52 5520472633) no aparece como texto visible, solo dentro del enlace de WhatsApp (mismo número, sin contradicción).

*Evidencia:*
- Tipos detectados: WebSite y MedicalClinic; JSON-LD en el HTML crudo (crudo.jsonld: 2)
- MedicalClinic: name "SHAKTI", url "https://shakti.id", telephone "+52 5520472633", address "Apicultura 29, 20 de Noviembre, Venustiano Carranza, Ciudad de México, CDMX, 15300, MX"
- Texto visible: "Apicultura 29, 20 de Noviembre, Venustiano Carranza, 15300 Ciudad de México, CDMX, México" (coincide con el schema)
- sameAs: [] en ambos nodos; sin logo, image ni openingHours en el schema; el nodo WebSite no incluye url
- pagina.json no registra teléfonos visibles (telefonosPagina: []); el número solo está en el enlace wa.me/525520472633

*Cómo mejorarlo:*
- Completa el nodo MedicalClinic con "logo" e "image" (por ejemplo, la imagen del logotipo que ya usa el encabezado y la foto principal) y con "sameAs" apuntando a los perfiles reales del negocio (Google Business Profile, Instagram o Facebook, si existen).
- Asegúrate de que "address" sea un objeto PostalAddress con streetAddress "Apicultura 29", addressLocality "Venustiano Carranza", addressRegion "CDMX", postalCode "15300" y addressCountry "MX", y agrega "url": "https://shakti.id/" al nodo WebSite.
- Si publican horarios de atención, muéstralos en la página y añade "openingHoursSpecification" en el schema; muestra también el teléfono como texto visible para que coincida con el "telephone" del schema.

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML crudo trae el 100% del texto que ve el usuario (391 de 391 palabras) y el H1 y todos los encabezados ya vienen en el HTML inicial. Un bot que no ejecuta JavaScript ve el título, los servicios, la dirección y el mensaje de contacto.

*Evidencia:*
- palabrasHtmlCrudo 391 / palabrasRenderizado 391 (proporción 1)
- H1 en el HTML crudo: "Recupera tumovimiento,recupera tu vida."; 11 encabezados en el crudo (H2 "Un paso más cercade sentirte mejor.", H3 "Fisioterapia y rehabilitación", H3 "Masajes para tu bienestar"…)
- primerasPalabrasCrudo: "Saltar al contenido", descripción de la imagen principal y "EL BIENESTAR EMPIEZA CON MOVIMIENTO"

#### AEO 6 · Acceso para bots de IA: 0/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt bloquea con "Disallow: /" a tres de los cuatro bots de la rúbrica: GPTBot, ClaudeBot y Google-Extended. Solo PerplexityBot está permitido. Por regla, cualquier bloqueo cuenta como bloqueado aunque parezca intencional, así que se confirma el 0 del script. El archivo parece administrado por una plataforma: cada bot permitido lleva la línea "Content-Signal: search=yes, ai-input=yes, ai-train=no" (patrón de los robots.txt gestionados, tipo Cloudflare) y los bloqueados son rastreadores de entrenamiento, aunque no se puede confirmar qué servicio lo genera. Los bots de búsqueda y de consulta del usuario sí están permitidos (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot). No existe llms.txt, así que no hay bonus informativo.

*Evidencia:*
- robots.txt: "User-agent: GPTBot / Disallow: /"
- robots.txt: "User-agent: ClaudeBot / Disallow: /"
- robots.txt: "User-agent: Google-Extended / Disallow: /"
- robots.txt: "User-agent: PerplexityBot" con "Allow: /" (permitido)
- También bloqueados (fuera de la rúbrica): Applebot-Extended, meta-externalagent, Amazonbot, Bytespider
- Líneas "Content-Signal: search=yes, ai-input=yes, ai-train=no" en cada bot permitido; Sitemap declarado: https://shakti.id/sitemap.xml

*Cómo mejorarlo:*
- Si quieren que GPTBot, ClaudeBot y Google-Extended puedan acceder, cambia "Disallow: /" por "Allow: /" en esos tres bloques, o elimina esos bloques para que apliquen las reglas de "User-agent: *".
- Si el robots.txt lo genera la plataforma o el CDN (por la presencia de Content-Signal), desactiva en su panel la opción de bloquear rastreadores de IA o de entrenamiento, porque un cambio manual puede sobrescribirse.
- Si el bloqueo de entrenamiento es una decisión de negocio, déjalo así sabiendo que la rúbrica lo cuenta como bloqueado; mantén permitidos los bots de búsqueda y de consulta como ya está.

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Todo el texto está en párrafos muy cortos (19 párrafos, promedio de 15 palabras, ninguno largo) y cada sección trata un solo tema bajo su encabezado: servicios, enfoque, contacto. El proceso aparece como pasos numerados (01 Primero, escucharte; 02 Un camino a tu medida; 03 Avanzar contigo) y los servicios como tarjetas separadas. No hay listas ni tablas con viñetas, pero el contenido no las requiere y no hay bloques densos.

*Evidencia:*
- 19 párrafos, promedio 15 palabras, 0 párrafos largos
- Pasos "01 Primero, escucharte", "02 Un camino a tu medida", "03 Avanzar contigo"
- Servicios en tarjetas con H3: "Fisioterapia y rehabilitación" y "Masajes para tu bienestar"
- Hay algunos fragmentos sueltos ("Atención centrada en ti", "Un proceso a tu ritmo"), pero son pocos

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre es consistente: «SHAKTI» aparece en el <title>, el logo (alt), el © del pie y el `name` de los dos nodos de schema (WebSite y MedicalClinic). La dirección visible en la sección de contacto («Apicultura 29, 20 de Noviembre, Venustiano Carranza, 15300 Ciudad de México») coincide con la del schema, y el teléfono del enlace de WhatsApp (525520472633) coincide con `telephone` (+52 5520472633). Falta lo que lo haría completo: no hay ninguna red social oficial (solo WhatsApp), `sameAs` está vacío en el schema, no hay correo ni teléfono visible como texto o enlace tel:, y no hay `og:site_name`.

*Evidencia:*
- Nombre: title «SHAKTI | Fisioterapia y rehabilitación»; schema name «SHAKTI» (x2); pie «© 2026 SHAKTI»; og:site_name ausente
- Descripción: meta/og «Recupera tu movimiento, recupera tu vida. Fisioterapia… en Ciudad de México» y schema «Clínica de fisioterapia… en 20 de Noviembre, Ciudad de México» (coherentes)
- Dirección en página (texto.md, región main) = dirección en schema MedicalClinic (CP 15300, Venustiano Carranza); el script reportó `enPagina` vacío, pero sí aparece como texto
- Teléfono solo en el enlace wa.me/525520472633, igual al schema tras normalizar; sin tel: ni mailto: ni número visible; correos: ninguno en página ni en schema
- Redes: solo WhatsApp; sin Facebook, Instagram, Google Business ni otro perfil; `sameAs` vacío en WebSite y MedicalClinic; mapas incrustados: 0

*Cómo mejorarlo:*
- Agrega `sameAs` al nodo MedicalClinic con los perfiles oficiales de SHAKTI (Instagram, Facebook y la ficha de Google Business Profile) y enlaza esos mismos perfiles con íconos en el pie de página.
- Muestra el teléfono (+52 55 2047 2633) como texto con enlace `tel:` y publica un correo de contacto (con `mailto:`) en la sección de contacto y en el pie; añade `email` al schema para que coincida.
- Añade `<meta property="og:site_name" content="SHAKTI">`, repite la dirección completa en el pie y suma `openingHours` y `geo` o un mapa de Google incrustado al schema/página.

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Solo hay datos de contacto y un dato operativo: la dirección completa ("Apicultura 29, 20 de Noviembre, Venustiano Carranza, 15300 Ciudad de México") y "Agenda con al menos 3 días de anticipación", además de los tipos de masaje. No hay precios, horarios, duración de sesiones, cifras ni casos, y el resto es genérico ("enfoque humano", "a tu ritmo", "Un camino a tu medida").

*Evidencia:*
- "Apicultura 29, 20 de Noviembre, Venustiano Carranza, 15300 Ciudad de México, CDMX, México"
- "Agenda con al menos 3 días de anticipación y cotiza tu servicio por WhatsApp."
- "Masaje relajante, descontracturante y deportivo"
- Precios: 0, horarios: 0, porcentajes: 0 (según el script)
- Frases genéricas: "con un enfoque humano, a tu ritmo", "Un camino a tu medida", "Cada persona y cada proceso son diferentes"

*Cómo mejorarlo:*
- Añade el precio o rango de la valoración y de cada tipo de masaje, con tus valores reales (formato sugerido: «Valoración inicial: MXN ___ · Masaje relajante de 60 min: MXN ___»).
- Indica el horario de atención (por ejemplo «Lunes a sábado, de __:__ a __:__») y la duración típica de una sesión.
- Sustituye una frase genérica por un ejemplo concreto, como «Ejemplo: una paciente con dolor de hombro trabaja X sesiones de ejercicio terapéutico para volver a levantar los brazos sin molestia» (con un caso real y sin datos médicos identificables).

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

De las cuatro señales solo hay una débil: el pie dice «© 2026 SHAKTI», un año reciente, pero no hay fecha de actualización visible ni `dateModified`. No se ve quién está detrás (ningún nombre de fisioterapeuta, equipo, cédula o credencial), no existe enlace ni sección «Acerca de» (solo Inicio, Servicios, Preguntas frecuentes y Contacto) y no hay testimonios, reseñas ni fuentes citadas. Para una clínica de salud, la ausencia de profesionales identificables es la brecha de confianza más importante.

*Evidencia:*
- Autor/equipo: `mencionaEquipo` false; el «por WhatsApp» detectado como autor es un falso positivo (texto del botón), no hay nombres de personas
- Fecha: sin <time>, sin meta, sin `dateModified`; solo «© 2026 SHAKTI. Todos los derechos reservados.»
- Acerca de: `enlacesAcerca` vacío; menú: Inicio, Fisioterapia y rehabilitación, Masajes, Preguntas frecuentes, Contacto
- Testimonios: 0 citas, sin encabezado de testimonios, `schemaReview` false; `fuentesExternas` 0; sin enlaces legales (aviso de privacidad)

*Cómo mejorarlo:*
- Crea una sección o página «Quiénes somos» con el nombre, foto, formación y cédula profesional de cada fisioterapeuta, y enlázala en el menú y el pie; agrega schema `Person` o `employee` en el nodo MedicalClinic.
- Publica testimonios reales con nombre (o iniciales), fecha y, si es posible, foto o enlace a la reseña de Google, y añade la calificación agregada con schema `aggregateRating` basada en reseñas verificables.
- Muestra una fecha de última actualización visible (por ejemplo «Actualizado: noviembre 2026») y agrega `dateModified` en el schema; incluye además un aviso de privacidad en el pie.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 2 · Encabezados en forma de pregunta** (0/2): Cambia «Elige tu servicio y tu ciudad.» por «¿Qué servicios ofrece SHAKTI?» y responde justo debajo: «Fisioterapia y rehabilitación, y masajes relajante, descontracturante y deportivo.»
2. **AEO 6 · Acceso para bots de IA** (0/2): Si quieren que GPTBot, ClaudeBot y Google-Extended puedan acceder, cambia "Disallow: /" por "Allow: /" en esos tres bloques, o elimina esos bloques para que apliquen las reglas de "User-agent: *".
3. **SEO 1 · Título de la página** (1/2): Alarga el título a 50–60 caracteres e incluye la ciudad, por ejemplo: «SHAKTI | Fisioterapia y rehabilitación en Ciudad de México» (58 caracteres). Actualiza también og:title para que coincida.
4. **SEO 4 · Tema claro y contenido suficiente** (1/2): Haz que el H1 nombre el servicio y el lugar, por ejemplo: «Fisioterapia y rehabilitación en Ciudad de México», y deja «Recupera tu movimiento, recupera tu vida.» como subtítulo.
5. **SEO 7 · Imágenes** (1/2): Sirve el logo (2f64a7a4…png) a su tamaño real de despliegue (por ejemplo 2× el ancho mostrado en el encabezado) o cámbialo a SVG/WebP para ahorrar ~20 KB.
6. **SEO 8 · Velocidad** (1/2): Quita el bloqueo del render: autoaloja las fuentes Manrope y Libre Caslon Display (o cárgalas con preload y media="print" onload) y separa el CSS crítico del hero para que el primer pintado no espere a index-oqpUlhRQ.css.
7. **SEO 9 · Móvil** (1/2): Sube a 12–14 px como mínimo las etiquetas en mayúsculas, la ubicación «Ciudad de México, México», «Conoce nuestros servicios» y «MOVIMIENTO CON PROPÓSITO» en el breakpoint móvil.
8. **AEO 1 · Respuesta directa arriba** (1/2): Abre con una definición directa, por ejemplo: «SHAKTI es un servicio de fisioterapia, rehabilitación y masajes en Ciudad de México para personas que quieren recuperar su movimiento y aliviar molestias. Empieza con una valoración individual e incluye ejercicio terapéutico y masaje relajante, descontracturante y deportivo.»
9. **AEO 3 · Preguntas frecuentes** (1/2): Agrega un H2 «Preguntas frecuentes» antes del acordeón actual y suma al menos 2 preguntas más con respuestas de 1–3 frases, por ejemplo «¿Con cuánta anticipación debo agendar?» → «Con al menos 3 días de anticipación, por WhatsApp.»
10. **AEO 4 · Datos estructurados** (1/2): Completa el nodo MedicalClinic con "logo" e "image" (por ejemplo, la imagen del logotipo que ya usa el encabezado y la foto principal) y con "sameAs" apuntando a los perfiles reales del negocio (Google Business Profile, Instagram o Facebook, si existen).
11. **AEO 8 · Identidad clara y consistente** (1/2): Agrega `sameAs` al nodo MedicalClinic con los perfiles oficiales de SHAKTI (Instagram, Facebook y la ficha de Google Business Profile) y enlaza esos mismos perfiles con íconos en el pie de página.
12. **AEO 9 · Datos concretos** (1/2): Añade el precio o rango de la valoración y de cada tipo de masaje, con tus valores reales (formato sugerido: «Valoración inicial: MXN ___ · Masaje relajante de 60 min: MXN ___»).
13. **AEO 10 · Señales de confianza** (1/2): Crea una sección o página «Quiénes somos» con el nombre, foto, formación y cédula profesional de cada fisioterapeuta, y enlázala en el menú y el pie; agrega schema `Person` o `employee` en el nodo MedicalClinic.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
