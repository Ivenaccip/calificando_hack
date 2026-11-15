# Calificación SEO + AEO: https://rutashuttle.com/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 96.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **19** | 20 | 95% |
| AEO | **18** | 20 | 90% |
| **Total** | **37** | 40 | 93% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente |
| 2 | Descripción y vista al compartir | ■■ 2/2 | Script | agente |
| 3 | Estructura de encabezados | ■■ 2/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | ■■ 2/2 | Agente | agente |
| 5 | Indexable | ■■ 2/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | ■■ 2/2 | Script | agente |
| 7 | Imágenes | ■□ 1/2 | Script + Lighthouse | agente |
| 8 | Velocidad | ■■ 2/2 | Lighthouse | agente |
| 9 | Móvil | ■■ 2/2 | Lighthouse + captura móvil | agente |
| 10 | Enlaces y URLs | ■■ 2/2 | Script | agente |

## Rúbrica AEO: que los buscadores con IA usen la página como respuesta

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Respuesta directa arriba | ■□ 1/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | ■■ 2/2 | Agente | agente |
| 3 | Preguntas frecuentes | ■■ 2/2 | Agente | agente |
| 4 | Datos estructurados | ■■ 2/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■■ 2/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | ■■ 2/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■■ 2/2 | Agente + script | agente |
| 9 | Datos concretos | ■■ 2/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 57 caracteres: «Ecuador Transportation & Private Transfers | Ruta Shuttle». Dice de qué trata la página (transporte privado en Ecuador), incluye la marca y coincide con el H1 («Ecuador Transportation, Door to Door»). No es genérico.

*Evidencia:*
- <title>: Ecuador Transportation & Private Transfers | Ruta Shuttle (57 caracteres, 1 etiqueta)
- H1: Ecuador Transportation, Door to Door

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description invita a entrar: nombra el servicio y las ciudades (Quito, Cuenca, Guayaquil) y cierra con una llamada a la acción («See prices and book online.»). Mide 137 caracteres, 3 menos que el rango 140–160 de la rúbrica, una diferencia que no afecta cómo se muestra en buscadores y que cae dentro de la tolerancia del script. Están og:title, og:description y og:image, esta última con URL absoluta (https://rutashuttle.com/assets/og-image.jpg), más twitter:card summary_large_image.

*Evidencia:*
- meta description (137 caracteres): Private transportation in Ecuador: airport transfers and door-to-door rides from Quito, Cuenca and Guayaquil. See prices and book online.
- og:image: https://rutashuttle.com/assets/og-image.jpg (absoluta)
- og:title y og:description presentes; twitter:card = summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 claro («Ecuador Transportation, Door to Door»), 14 H2 y 30 H3, sin saltos de nivel ni H4–H6. Los encabezados son estructura real de contenido: H2 de secciones («Where does your trip start?», «A vehicle for every group size», «Good to know before you ride»), H3 de ciudades, pasos, rutas, vehículos y preguntas del FAQ. No se usan para menú ni pie.

*Evidencia:*
- Resumen: h1=1, h2=14, h3=30, h4–h6=0; saltos: []
- H2 «Good to know before you ride» con 11 H3 en forma de pregunta (FAQ)
- H2 «A vehicle for every group size» con H3 Sedan, SUV, Van, Large van, Minibus or bus

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (transporte privado en Ecuador) es evidente y coincide en el título, el H1 y el párrafo que sigue al H1. El contenido principal tiene ~1,184 palabras útiles (rutas, precios, vehículos, FAQ), muy por encima de 300, sin relleno ni texto repetido.

*Evidencia:*
- Título: "Ecuador Transportation & Private Transfers | Ruta Shuttle"
- H1: "Ecuador Transportation, Door to Door"
- Primer párrafo real: "Private rides between airports, cities and beaches with local drivers who know every curve of the road."
- ~1,184 palabras en el contenido principal

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

Sin noindex: la meta robots dice «index, follow, max-image-preview:large, max-snippet:-1» y no hay X-Robots-Tag. El canonical apunta a la misma URL final (https://rutashuttle.com/). El sitio responde por HTTPS con 200 y la versión www hace un solo 301 a la versión sin www, coherente con el canonical. El <html lang="en"> coincide con el idioma del contenido, que está en inglés.

*Evidencia:*
- metaRobots: index, follow, max-image-preview:large, max-snippet:-1; xRobotsTag: null
- canonical: https://rutashuttle.com/ (= URL final)
- https://www.rutashuttle.com/ → 301 → https://rutashuttle.com/ → 200
- lang="en" y contenido en inglés

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml (válido, 72 URL). El robots.txt usa «Allow: /» para todos los agentes, incluidos los bots de IA y buscadores, no bloquea ninguna ruta y declara el sitemap. El sitemap lista páginas reales del mismo dominio y protocolo (https://rutashuttle.com/, /es/, /cuenca/, /es/cuenca/, /guayaquil/) e incluye la página auditada.

*Evidencia:*
- robots.txt: User-agent: * / Allow: / ; Sitemap: https://rutashuttle.com/sitemap.xml
- sitemap.xml: 72 URL, incluye https://rutashuttle.com/ y versiones /es/
- bloqueaTodoElSitio: false

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 6 imágenes con contenido tienen alt descriptivo y específico (p. ej. «Blue-tiled domes of the New Cathedral in Cuenca»), el peso total es de solo 90 KB y no hay imágenes pesadas ni con alt vacío. Lo que queda a medias es el tamaño: Lighthouse marca uses-responsive-images (score 0.5) con un ahorro estimado de 105 KiB, porque las fotos de ciudad se sirven a 960 px de ancho para un espacio de unos 360 px en el teléfono.

*Evidencia:*
- 6 de 6 imágenes con contenido con alt válido; sinAlt y altVacioEnImagenesGrandes vacíos
- Alt de la portada: «Ruta Shuttle fleet and drivers in front of a snow-capped volcano in the Ecuadorian Andes»
- uses-responsive-images: ahorro estimado de 105 KiB (guayaquil-960.avif 45.5 KB, cuenca-960.avif 31.9 KB, quito-960.avif 30.2 KB)
- Formatos modernos (AVIF), offscreen-images y uses-optimized-images en score 1

*Cómo mejorarlo:*
- Agrega srcset y sizes a las fotos de /assets/cities/ (guayaquil, cuenca, quito) con versiones AVIF de 480 y 640 px de ancho, y deja la de 960 px solo para pantallas grandes, para recuperar los ~105 KiB que marca Lighthouse.
- Aplica el mismo srcset a la imagen de portada (fleet-1672.jpg) para que en el teléfono no se descargue la versión de 1672 px.

#### SEO 8 · Velocidad: 2/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Confirmo el 2 del script: Lighthouse móvil da rendimiento 96 (mínimo 80), LCP 1.73 s (máximo 2.5 s) y CLS 0.000 (máximo 0.1), así que cumple las tres métricas. Es una sola medición de Lighthouse; el resultado puede variar unos puntos entre corridas y equipos.

*Evidencia:*
- Rendimiento 96; LCP 1,725 ms; CLS 0
- FCP 1.27 s, Speed Index 1.49 s, TBT 200 ms
- Respuesta del servidor: el documento raíz tardó 60 ms
- Peso total de la página: 370 KiB; render-blocking-resources y unused-javascript sin hallazgos (score 1)

#### SEO 9 · Móvil: 2/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Confirmo el 2 del script. Tiene meta viewport correcto, no hay scroll horizontal y solo 2% del texto mide menos de 12 px. En las capturas el texto se lee sin zoom, las tarjetas de destino no se cortan ni se encimen, el encabezado muestra el menú hamburguesa y no hay banner de cookies ni pop-up que tape la pantalla. Solo 2 de 91 enlaces tocables miden menos de 24 px de alto (los teléfonos del pie, 22 px), un detalle menor.

*Evidencia:*
- viewport="width=device-width, initial-scale=1, viewport-fit=cover"; desbordeHorizontalPx = 0
- Captura completa: encabezado con logo, selector de idioma y botón de menú (hamburguesa) visibles; titulares y botón «See prices» grandes y legibles
- Captura: el botón flotante de WhatsApp (abajo a la derecha) solo roza el borde de la tarjeta de Cuenca y no tapa texto importante
- Enlaces de teléfono +593 98 084 0114 y +593 98 779 6896 miden 138×22 px (2 de 91 por debajo de 24 px)
- Limitación de las capturas: movil-arriba.png empieza a media página (en «Only your group in the vehicle») y en movil-completa.png el encabezado fijo aparece a media altura sobre el campo «To» del formulario; lo interpreto como efecto de la captura, no como un defecto real. La captura completa está recortada a 3000 px de alto.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 8 enlaces internos funcionales (Quito, Cuenca, Guayaquil, Vehicles, About us, Contact, ESP). El script revisó los 23 enlaces internos únicos de la página (cobertura completa) y no encontró rotos ni enlaces sin verificar. No hay anclas genéricas («clic aquí», «leer más») ni enlaces sin texto, y Lighthouse confirma «Links have descriptive text» con score 1. Las URLs son legibles (/quito/, /cuenca/, /about/, /contact/, /es/).

*Evidencia:*
- 0 rotos de 23 enlaces internos revisados; sinVerificar: []
- 0 enlaces genéricos, 0 sin texto; 0 de 24 URLs poco legibles
- Menú: Quito → /quito/, Cuenca → /cuenca/, Guayaquil → /guayaquil/, About us → /about/, Contact → /contact/

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Las dos primeras frases (29 palabras, dentro del rango aceptable) dicen qué se ofrece (viajes privados entre aeropuertos, ciudades y playas, con choferes locales, precio visible y reserva en minutos), y "Ecuador" aparece en el H1. Pero no dicen quién es Ruta Shuttle ni para quién es (viajeros, familias, grupos); esa identidad solo se aclara mucho más abajo, en "About us".

*Evidencia:*
- "Private rides between airports, cities and beaches with local drivers who know every curve of the road. Choose your route, see the price and book in a few minutes."
- El "para quién" y "qué es" ("Ecuadorian tourist transport company") aparecen hasta la sección About us

*Cómo mejorarlo:*
- Reescribe el párrafo bajo el H1 para nombrar al sitio, al público y la oferta en dos frases: "Ruta Shuttle is a private transportation company for travelers, families and groups in Ecuador, with airport transfers and door-to-door rides from Quito, Cuenca and Guayaquil from $20 per vehicle. Choose your route, see the price and book online in a few minutes."
- Mantén "local drivers" y el precio por vehículo en la primera frase; quita la imagen de ejemplo de curvas del camino, que no ayuda a una respuesta citable.

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

La sección "Good to know before you ride" tiene 11 H3 que son preguntas reales de usuario, y cada una se responde en la primera frase justo debajo (por ejemplo "Always private.", "No, the price is per vehicle."). Los H2 propios ("Where does your trip start?") son más de navegación, pero los H3 bastan para cumplir el criterio.

*Evidencia:*
- H3: "Is the price per person?" → "No, the price is per vehicle."
- H3: "How much does a private transfer cost?" → "Prices are per vehicle in US dollars and start at $20 for the Cuenca airport transfer..."
- H3: "What is the cancellation policy?" → "Cancel for free up to 24 hours before pickup."
- 13 encabezados en forma de pregunta en total

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección de FAQ con etiqueta "FAQ", H2 "Good to know before you ride" y 11 preguntas con su respuesta en el texto de la página (acordeón details/summary). Todas las respuestas son completas y de 1 a 3 frases. El FAQPage del schema coincide con lo visible, así que no es un schema sin contenido. El script no la detectó porque el H2 no dice "FAQ".

*Evidencia:*
- Etiqueta "FAQ" y H2 "Good to know before you ride"
- 11 preguntas (details/summary), por ejemplo "How do I pay?" y "What if my flight is late?"
- "Send us your flight number and we follow it. Your driver adjusts the pickup time, no extra charge for normal delays."
- Ninguna respuesta se limita a "contáctanos"

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

El HTML inicial trae un bloque JSON-LD válido con @context schema.org y tres nodos: LocalBusiness, WebSite y FAQPage. El tipo es adecuado para una empresa de transporte turístico con oficina física, y los datos coinciden con lo visible: teléfono +593980840114 (la página muestra +593 98 084 0114), correo info@rutashuttle.com y dirección «González Suárez y San Alejo, Puerto López» (igual que el pie de página). El FAQPage declara 11 preguntas y la página muestra 11 preguntas de acordeón en la sección «Good to know before you ride».

*Evidencia:*
- 1 bloque JSON-LD, sin bloques inválidos; presente en el HTML crudo (crudo.jsonld = 3 nodos)
- Tipos: LocalBusiness, WebSite, FAQPage
- Schema name «Ruta Shuttle» = nombre en el encabezado y og:site_name
- telephone +593980840114 coincide con «Phone +593 98 084 0114» del pie y la sección Contact
- address del schema coincide con «Registered office: González Suárez y San Alejo, Puerto López, Manabí, Ecuador»
- preguntasFaq: 11 en el schema y 11 elementos details/summary visibles

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML crudo trae el 100% del texto visible (1184 de 1184 palabras). El H1 «Ecuador Transportation, Door to Door», los H2 y H3 de rutas y vehículos, la descripción de la oferta y los precios («From$20», «From$125», «From$210») ya están en el HTML inicial, y las 11 respuestas del FAQ también.

*Evidencia:*
- palabrasHtmlCrudo 1184 = palabrasRenderizado 1184 (proporción 1)
- encabezadosCrudo: «H1: Ecuador Transportation, Door to Door», «H2: Find your ride», «H3: Cuenca»…
- crudo.encabezados = 45 y crudo.jsonld = 3, igual que lo renderizado
- primerasPalabrasCrudo: «Skip to content», alt de la imagen principal, «Private transfers across Ecuador»

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt permite expresamente a GPTBot, ClaudeBot, PerplexityBot y Google-Extended con «Allow: /», y también a OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, Perplexity-User y Applebot-Extended. No hay ningún Disallow que afecte a secciones clave. La línea «Content-Signal: search=yes, ai-input=yes, ai-train=yes» no la entiende el parser, pero es permisiva y no bloquea nada. Bonus informativo: existe /llms.txt con descripción del negocio, que no cambia el puntaje.

*Evidencia:*
- robots.txt: «User-agent: GPTBot / Allow: /», lo mismo para ClaudeBot, PerplexityBot y Google-Extended
- User-agent: * con «Allow: /» y sin ningún Disallow
- Sitemap declarado: https://rutashuttle.com/sitemap.xml
- llms.txt existe en https://rutashuttle.com/llms.txt (bonus, sin efecto en el puntaje)

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Los párrafos son cortos (promedio de 22 palabras, ninguno largo), hay 18 elementos de lista (rutas por ciudad, "Every ride includes"), los pasos de reserva van en tres bloques cortos con H3 y cada sección trata un solo tema (destinos, cómo funciona, rutas, vehículos, FAQ). No hay tablas ni listas numeradas, pero el contenido no las exige.

*Evidencia:*
- 34 párrafos, 22 palabras en promedio, 0 párrafos largos
- Lista "Private, insured vehicle / Pickup and drop-off at your door / Help with your luggage..."
- "How it works": Choose your route / Pick a date and vehicle / Meet your driver
- Vehículos con capacidad por tipo: "Van — 4 to 6 passengers"

#### AEO 8 · Identidad clara y consistente: 2/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «Ruta Shuttle» coincide en <title>, og:site_name, logo, pie y en el schema (LocalBusiness y WebSite); la razón social «Ruta del Spondylus Rutsponsa S.A.» aparece en el © y la propia página explica que Ruta Shuttle es su nombre comercial. La descripción es idéntica en meta, og y schema. El teléfono (+593 98 084 0114), el correo (info@rutashuttle.com) y la dirección del pie (González Suárez y San Alejo, Puerto López, Manabí) coinciden con el schema. Hay enlaces a Instagram, Tripadvisor y WhatsApp, y el sameAs reafirma Instagram, Tripadvisor y Google Maps.

*Evidencia:*
- Nombre: title «… | Ruta Shuttle», og:site_name «Ruta Shuttle», schema name «Ruta Shuttle», alt del logo «Ruta Shuttle»
- Pie: «© 2026 Ruta del Spondylus Rutsponsa S.A., RUC 1391854234001»; texto Acerca de: «Ruta Shuttle is the trade name of Ruta del Spondylus Rutsponsa S.A.»
- Descripción idéntica en meta description, og:description y schema
- Teléfono: pie «+593 98 084 0114» = schema «+593980840114»; WhatsApp distinto y etiquetado aparte («+593 98 779 6896»)
- Correo: info@rutashuttle.com en página y en schema («emailinfo@…» del script es la etiqueta «Email» pegada al correo, no una discrepancia)
- Dirección: pie «Registered office: González Suárez y San Alejo, Puerto López, Manabí, Ecuador» = schema «…Puerto López, Manabí, EC» (el script la marcó vacía en la página, pero sí está en el pie)

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Casi todas las afirmaciones traen datos verificables: precios desde $20, $25, $35, $125, $210; duraciones ("3.5 to 4 h", "45 to 60 min"); capacidades por vehículo; cancelación gratis hasta 24 h antes; fundación en 2017; nombres de aeropuertos; teléfonos y RUC. Hay muy pocas frases genéricas.

*Evidencia:*
- "15 routes from $20", "6 routes from $25", "7 routes from $35"
- "Cuenca to Baños — From $210 — 6 to 6.5 h"
- "A sedan or SUV carries 1 to 3 passengers, a van 4 to 6, a large van 7 to 10, and a minibus or bus 11 to 40."
- "founded in 2017 in Puerto López"

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Solo hay dos señales claras: una sección «Acerca de» (enlace /about/ en menú y pie, más el bloque «Local drivers, from the Andes to the coast» con fundación en 2017) y un © 2026 actual. La identidad de quién opera es débil: aparece la razón social y el RUC, pero ninguna persona ni equipo con nombre. No hay testimonios, calificaciones ni fuentes con enlace en la página; solo un enlace a Tripadvisor en el pie, sin mostrar reseñas.

*Evidencia:*
- Acerca de: enlaces «About us» → https://rutashuttle.com/about/ (menú y pie) y bloque en la home: «an Ecuadorian tourist transport company founded in 2017 in Puerto López»
- Quién está detrás: solo entidad legal («Ruta del Spondylus Rutsponsa S.A.», RUC 1391854234001); autor null, mencionaEquipo false, sin nombres ni fotos de personas
- Actualización: sin <time>, sin dateModified, sin «last updated»; solo «© 2026» (año actual) en el pie
- Testimonios: citas 0, schemaReview false, sin encabezado de reseñas; fuentesExternas 0
- Tripadvisor aparece solo como enlace del pie (texto «Tripadvisor»), sin calificación ni extractos visibles

*Cómo mejorarlo:*
- Agrega a la home (por ejemplo, tras «Local drivers, from the Andes to the coast») 3 a 5 testimonios reales con nombre, país y ruta contratada, o una calificación con fuente, como «4.9/5 en Tripadvisor (N reseñas)» enlazada a la ficha; marca solo reseñas genuinas con Review/AggregateRating en el schema.
- Presenta al equipo con nombres y fotos (fundador o gerente y algunos conductores) en el bloque «Acerca de» o en /about/, y refléjalo en el schema Organization con founder o employee.
- Muestra una fecha visible de actualización de precios y rutas (por ejemplo, «Prices updated: noviembre 2026») y agrega dateModified en un nodo WebPage del JSON-LD.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 7 · Imágenes** (1/2): Agrega srcset y sizes a las fotos de /assets/cities/ (guayaquil, cuenca, quito) con versiones AVIF de 480 y 640 px de ancho, y deja la de 960 px solo para pantallas grandes, para recuperar los ~105 KiB que marca Lighthouse.
2. **AEO 1 · Respuesta directa arriba** (1/2): Reescribe el párrafo bajo el H1 para nombrar al sitio, al público y la oferta en dos frases: "Ruta Shuttle is a private transportation company for travelers, families and groups in Ecuador, with airport transfers and door-to-door rides from Quito, Cuenca and Guayaquil from $20 per vehicle. Choose your route, see the price and book online in a few minutes."
3. **AEO 10 · Señales de confianza** (1/2): Agrega a la home (por ejemplo, tras «Local drivers, from the Andes to the coast») 3 a 5 testimonios reales con nombre, país y ruta contratada, o una calificación con fuente, como «4.9/5 en Tripadvisor (N reseñas)» enlazada a la ficha; marca solo reseñas genuinas con Review/AggregateRating en el schema.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
