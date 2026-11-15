# Calificación SEO + AEO: https://yaku-etp.store/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 100.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **18** | 20 | 90% |
| AEO | **19** | 20 | 95% |
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
| 6 | Acceso para bots de IA | ■■ 2/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | ■■ 2/2 | Agente | agente |
| 10 | Señales de confianza | ■■ 2/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 56 caracteres: «Yaku ETP | Evapotranspiración para riego en Cusco y Perú». Incluye la marca y el tema real de la página, y coincide con el H1, así que no es genérico.

*Evidencia:*
- 1 etiqueta <title>, 56 caracteres
- Título: «Yaku ETP | Evapotranspiración para riego en Cusco y Perú»
- H1: «Evapotranspiración para estudios de riego en Cusco y Perú»

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 150 caracteres (dentro de 140–160) y invita a entrar: «Calcula gratis la ET₀ con NASA POWER y FAO 56, reproduce el caso de K’ayra en Cusco o solicita un análisis climático…». Tiene beneficio claro (gratis) y llamadas a la acción. Están og:title, og:description y og:image, y esta última es una URL absoluta; además hay twitter:card summary_large_image.

*Evidencia:*
- meta description: 150 caracteres
- Empieza con «Calcula gratis la ET₀ con NASA POWER y FAO 56…»
- og:image: https://yaku-etp.store/recursos/valle-sagrado-social.jpg (absoluta, https)
- twitter:card: summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay exactamente un H1 que dice de qué trata la página («Evapotranspiración para estudios de riego en Cusco y Perú»), 9 H2 y 17 H3 sin saltos de nivel (0 H4–H6). Los H3 son preguntas de las FAQ y tarjetas de servicio, es decir, subtemas reales de su H2 y no encabezados usados solo por estilo.

*Evidencia:*
- Resumen: H1=1, H2=9, H3=17, H4–H6=0; saltos: []
- H2 «Preguntas frecuentes» con 9 H3 en forma de pregunta
- H2 «Servicios para tu estudio de riego» con H3 «Cálculo de evapotranspiración de referencia» y «Análisis climático para estudios de riego»

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (evapotranspiración para riego en Cusco y Perú) está en el título, en el H1 y en el primer párrafo de texto real: "Yaku ETP es una calculadora gratuita de evapotranspiración de referencia para ingenieros de riego... en Cusco y otras zonas del Perú". El contenido principal tiene unas 1,223 palabras útiles (casos, pasos, FAQ), muy por encima de 300, sin relleno ni texto de plantilla.

*Evidencia:*
- Título: "Yaku ETP | Evapotranspiración para riego en Cusco y Perú"
- H1: "Evapotranspiración para estudios de riego en Cusco y Perú"
- Primer párrafo: "calculadora gratuita de evapotranspiración de referencia para ingenieros de riego, consultores e investigadores"
- palabrasContenido: 1223 (umbral 300)

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 en https, sin redirecciones, sin noindex en meta robots ni en X-Robots-Tag. El canonical apunta a sí misma (https://yaku-etp.store/) y <html lang="es"> coincide con el contenido, que está en español.

*Evidencia:*
- Status 200, cadena de redirecciones de 1 paso
- metaRobots: null; xRobotsTag: null
- canonical: https://yaku-etp.store/
- lang="es"

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt y sitemap.xml (ambos con 200). El robots.txt permite todo (Allow: /) y solo bloquea /api/ y /solicitud (ruta del formulario, sin valor para buscadores), y declara el sitemap. El sitemap lista 12 URLs reales, todas en https://yaku-etp.store (mismo dominio y protocolo), incluida la portada.

*Evidencia:*
- robots.txt: «User-Agent: * / Allow: / / Disallow: /api/ / Disallow: /solicitud»
- Sitemap: https://yaku-etp.store/sitemap.xml (válido, 12 URLs)
- Ejemplos: /, /servicios/calculo-evapotranspiracion, /calculadora, /calculadora/kayra

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 4 imágenes con contenido tienen alt descriptivo y de calidad (por ejemplo, «Río y campos de cultivo entre las laderas del Valle Sagrado de Cusco»), todas están en WebP y el peso total es de 225 KB, sin ninguna mayor a 300 KB. Lo único fuera de rango es que Lighthouse marca uses-responsive-images en vista-kayra.webp (41.7 KB, ahorro estimado de 19 KiB) porque se sirve más grande de lo que se muestra en el teléfono. Es una falla menor, pero el parámetro «no pesan de más» queda a medias.

*Evidencia:*
- 4 de 4 imágenes con contenido con alt válido; sin alt vacío en imágenes grandes
- Peso total de imágenes: 225 KB; ninguna > 300 KB; formatos modernos y optimización con score 1
- uses-responsive-images (score 0.5): vista-kayra.webp, 41,746 bytes, ahorro 19,379 bytes
- Las imágenes bajo el primer pantallazo usan loading="lazy" (offscreen-images score 1)

*Cómo mejorarlo:*
- Sirve «recursos/vista-kayra.webp» con un tamaño acorde al que se muestra en móvil (por ejemplo, una variante de unos 390–780 px de ancho) y declara varias versiones con srcset y sizes; con eso se recuperan unos 19 KiB.
- Aplica el mismo srcset/sizes a las imágenes «ingenieria-540», «agricultura-540» e «investigacion-540» para que ninguna se descargue más grande de lo necesario en pantallas pequeñas.

#### SEO 8 · Velocidad: 2/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: Lighthouse móvil da rendimiento 100 (mínimo 80), LCP de 1.50 s (máximo 2.5 s) y CLS de 0.000 (máximo 0.1). Es una sola medición, así que puede variar unos puntos entre corridas y entre equipos, pero el margen es amplio en las tres métricas. Lighthouse no marcó causas pendientes: respuesta del servidor de 160 ms, sin recursos que bloqueen el render, sin JavaScript sin usar y 172 KiB de carga total.

*Evidencia:*
- Rendimiento 100; LCP 1,498 ms; CLS 0; FCP 1,454 ms; TBT 18.5 ms
- server-response-time: el documento raíz tardó 160 ms
- total-byte-weight: 172 KiB; render-blocking-resources y unused-javascript con score 1

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto (width=device-width, initial-scale=1), no hay scroll horizontal y casi todo el texto es legible (solo 1% bajo 12 px). En las capturas móviles el diseño se ve limpio: sin contenido cortado ni encimado, sin banner de cookies ni pop-up, y el menú es de tres enlaces visibles (Guía, Servicios, Estudio de K’ayra), así que no necesita hamburguesa. Lo que queda a medias son los objetivos táctiles: 16 de 65 enlaces miden menos de 24 px de alto, y en la captura se ve que son los enlaces de texto del menú superior y los enlaces secundarios, que quedan chicos y juntos frente a los botones grandes de «Calculadora» y «Abrir la calculadora».

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desborde horizontal 0 px
- Texto pequeño: 49 de 7,539 caracteres (0.65%)
- 16 de 65 objetivos táctiles < 24 px: «Guía» 28×20, «Servicios» 58×20, «Estudio de K’ayra» 108×20, «Ver el caso de K’ayra» 165×22, «Ver datos diarios» 95×19, «Abrir reproductor ligero» 144×20
- Captura movil-arriba.png: hero, botón «Abrir la calculadora» y encabezados se ven bien; sin banner ni pop-up. La captura movil-completa.png llega hasta unos 3000 px de alto (hasta el botón «Abrir el caso en la calculadora»), así que lo que haya debajo solo se evaluó con las métricas del script.

*Cómo mejorarlo:*
- Dale a los enlaces del menú superior («Guía», «Servicios», «Estudio de K’ayra») un área táctil de al menos 44 px de alto con padding vertical, y separa un poco más cada enlace.
- Aumenta el área táctil de los enlaces secundarios «Ver el caso de K’ayra», «Ver datos diarios», «Abrir reproductor ligero» y «Descargar video en HD» a un mínimo de 24 px (idealmente 44 px) con padding o min-height, sin cambiar su tamaño de letra.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 15 enlaces internos distintos y los 12 enlaces internos únicos revisados respondieron bien (0 rotos, 0 sin verificar). Las anclas son descriptivas (p. ej. «Cálculo de ET₀ · Valles interandinos de Cusco») y las URLs se leen bien (/evapotranspiracion/valles-cusco, /informes-climaticos/peru). Único detalle menor: seis botones dicen «Explorar», pero están en una tabla Servicio/Ubicación y Lighthouse no marcó ningún enlace sin texto descriptivo.

*Evidencia:*
- 0 rotos de 12 enlaces internos revisados; sinVerificar: []
- 0 enlaces genéricos tipo «clic aquí» o «leer más»; 0 sin texto
- 0 de 13 URLs internas poco legibles
- Lighthouse «Links have descriptive text»: score 1
- 6 enlaces con texto «Explorar» (cada uno con URL distinta)

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Las dos primeras frases tras el H1 dicen qué es (calculadora gratuita de ET₀), para quién (ingenieros de riego, consultores e investigadores en Cusco y Perú) y qué ofrece (calcular la ET₀ diaria con NASA POWER y FAO 56, revisar cobertura y descargar resultados). Son 50 palabras, dentro del rango ideal.

*Evidencia:*
- "Yaku ETP es una calculadora gratuita de evapotranspiración de referencia para ingenieros de riego, consultores e investigadores que trabajan en Cusco y otras zonas del Perú."
- "Elige un punto y un periodo para calcular la ET₀ diaria con NASA POWER y FAO 56, revisar la cobertura y descargar los resultados."
- Párrafo de 50 palabras

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Dos H2 son preguntas reales con respuesta inmediata: "¿Cómo varió la ET₀ en K'ayra?" ("En los 31 días con datos... 3,11 mm/día en promedio") y "¿Cómo se calcula la ET₀?" (pasos numerados que empiezan con "Selecciona el lugar"). Además hay muchos H3 en forma de pregunta ("¿Cuánta agua necesita el cultivo?", "¿Qué periodo exige más agua?") cuya primera frase responde.

*Evidencia:*
- H2: "¿Cómo varió la ET₀ en K’ayra?" -> "la demanda atmosférica de referencia fue de 3,11 mm/día en promedio"
- H2: "¿Cómo se calcula la ET₀?" -> lista de 3 pasos numerados
- H3: "¿Cuánta agua necesita el cultivo?" -> "Usa la ET₀ como punto de partida. Multiplícala por el coeficiente de la etapa del cultivo..."
- 2 de 9 H2 y 14 H3 en forma de pregunta

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección "Preguntas frecuentes" con 10 preguntas en H3, y cada respuesta es completa y corta (1–3 frases), por ejemplo: "La ET₀ estima el agua que perdería una superficie de pasto de referencia bien regada, expresada en milímetros por día." Las respuestas están en el texto renderizado de la página (no solo en el schema FAQPage). No pude confirmar visualmente si los elementos están colapsados, porque la captura completa llega solo a ~3000 px y no alcanza la FAQ; aun colapsada sería una FAQ visible para el usuario.

*Evidencia:*
- H2: "Preguntas frecuentes" con 10 H3 de pregunta
- "La validación con registros de la estación de K’ayra está pendiente. El motor de cálculo se comprobó con el ejemplo diario 18 de FAO 56."
- "En enero de 2024, la ET₀ estimada en el punto de K’ayra sumó 96,37 mm, con una media de 3,11 mm/día y 31 días válidos."
- detailsSummary: 11 (10 de la FAQ + 1 de "Ver las seis consultas")

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay un bloque JSON-LD válido con @context schema.org, presente en el HTML inicial, con tipos adecuados para un sitio que es una calculadora web con un servicio de análisis a cargo de una persona: Person, WebApplication, Service, VideoObject y FAQPage. Lo que declara coincide con lo visible: el FAQPage trae 10 preguntas y la página muestra 10 preguntas en H3; el video «Tu primera consulta en K’ayra» y el servicio «Análisis climático para estudios de riego» aparecen en el texto; dateModified 2026-11-15 coincide con «Actualizado el 15 de noviembre de 2026». No hay precios, teléfono ni dirección ni en el schema ni en la página (el servicio es digital), así que no hay contradicciones. Matiz menor: no se ve un nodo Organization/WebSite, pero el Person como responsable es razonable para un proyecto individual.

*Evidencia:*
- Tipos: Person, WebApplication, Service, VideoObject, FAQPage; 1 bloque, sin JSON inválido
- FAQPage con 10 preguntas = 10 H3 de preguntas visibles en «Preguntas frecuentes»
- WebApplication «Yaku ETP» (url /calculadora, author → #responsable) coincide con «Freddy Lezama desarrolla Yaku ETP»
- dateModified 2026-11-15 = «Actualizado el 15 de noviembre de 2026.»
- crudo.jsonld = 5 nodos: está en el HTML inicial, no depende de JavaScript
- telefonosSchema, correosSchema y enSchema (ubicación) vacíos, igual que en la página

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML crudo trae 1223 de 1223 palabras (100%) del contenido renderizado, incluido el H1 «Evapotranspiración para estudios de riego en Cusco y Perú», los H2 de cada sección y las 10 preguntas frecuentes con sus respuestas. Lo importante (descripción de la herramienta, pasos del caso K’ayra, cifras como 3,11 mm/día y 96,37 mm, FAQ) está en el texto inicial. La cantidad de texto (1223 palabras) es suficiente, así que el 100% es significativo.

*Evidencia:*
- palabrasHtmlCrudo 1223 / palabrasRenderizado 1223 (proporción 1)
- H1 en crudo: «Evapotranspiración para estudios de riego en Cusco y Perú»
- Encabezados en crudo: H2 «¿Cómo varió la ET₀ en K’ayra?», «¿Cómo se calcula la ET₀?», «Preguntas frecuentes», H3 con las preguntas
- primerasPalabrasCrudo: «Ir al contenido», imagen con alt, H1

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt solo tiene un grupo «User-Agent: *» con «Allow: /» y dos Disallow (/api/ y /solicitud); no menciona a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended, por lo que los cuatro bots de la rúbrica quedan permitidos, igual que OAI-SearchBot, ChatGPT-User, CCBot y los demás que revisó el script. Los dos Disallow cubren una API y el formulario de solicitud, no secciones de contenido, y el robots.txt no parece administrado por una plataforma (no hay bloque de Cloudflare ni directivas Content-Signal), sino escrito a mano e incluye el Sitemap. Además existe /llms.txt (bonus informativo, no cambia el puntaje).

*Evidencia:*
- robots.txt: «User-Agent: *», «Allow: /», «Disallow: /api/», «Disallow: /solicitud»
- GPTBot, ClaudeBot, PerplexityBot y Google-Extended: permitidos
- Sin directivas Content-Signal ni secciones de Cloudflare
- llms.txt existe en https://yaku-etp.store/llms.txt (bonus)

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Los párrafos son cortos (40 párrafos, promedio de 21 palabras, ninguno largo) y el contenido usa 4 listas numeradas de pasos ("Prueba el caso paso a paso", "¿Cómo se calcula la ET₀?"). Cada sección trata un solo tema (caso K'ayra, tutorial, método, formulario, FAQ, servicios, ubicación). No hay tablas en el texto, pero los datos diarios están enlazados aparte y no hacen falta aquí.

*Evidencia:*
- 40 párrafos, promedio 21 palabras, 0 párrafos largos
- 4 listas numeradas y 14 ítems de lista
- Secciones separadas por H2/H3: "Tu primera consulta en K’ayra", "¿Cómo se calcula la ET₀?", "Preguntas frecuentes"

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «Yaku ETP» es consistente en title, og:site_name, encabezado, pie y el schema WebApplication; la descripción de meta, og y schema también coincide, y «Freddy Lezama» aparece igual en el texto, el pie y el nodo Person. Pero no hay ningún dato de contacto directo (0 teléfonos, 0 correos, solo un formulario), el schema no declara ubicación ni contacto (Cusco, Perú solo está en el texto), y la única red es el perfil personal de GitHub (https://github.com/flezama-hue), sin perfiles de la marca.

*Evidencia:*
- Nombre: title «Yaku ETP | Evapotranspiración…», og:site_name «Yaku ETP», header «Yaku ETP», pie «Yaku ETP», schema WebApplication name «Yaku ETP»
- Responsable: «Freddy Lezama desarrolla Yaku ETP en Cusco, Perú. La consulta es digital.» y pie «Freddy Lezama en GitHub · Cusco, Perú»; schema Person name «Freddy Lezama»
- Contacto: tel y mailto vacíos en pagina.json; telefonosSchema y correosSchema vacíos; solo el enlace «Contacto y solicitudes» a #solicitud (formulario)
- Ubicación en schema: ninguna (sin address, areaServed ni contactPoint); en página solo «Cusco, Perú» en texto y pie
- Redes: una sola, github.com/flezama-hue (rel=me), repetida en sameAs del Person; el WebApplication, Service y VideoObject tienen sameAs vacío
- El negocio es digital («La consulta es digital»), por lo que no se castiga la falta de dirección física; sin ©, el campo copyright es null

*Cómo mejorarlo:*
- Publica un correo de contacto (por ejemplo contacto@yaku-etp.store) en el pie y en la sección «Ubicación y responsable del proyecto», y decláralo en el schema con un ContactPoint (email) que coincida exacto con el visible.
- Agrega un nodo Organization (o WebSite) con name «Yaku ETP», url, founder apuntando a https://yaku-etp.store/#responsable, address con addressLocality «Cusco» y addressCountry «PE» (o areaServed «PE»), para que la ubicación del texto también esté en el schema.
- Crea y enlaza al menos un perfil oficial de la marca (por ejemplo LinkedIn o el canal de video donde publiques el tutorial de K’ayra) desde el pie, y añádelo a sameAs junto al GitHub.

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Las afirmaciones clave vienen con cifras y fechas verificables: media de 3,11 mm/día, acumulado de 96,37 mm, 31 de 31 días válidos, periodo de enero de 2024, límite de 366 días por consulta y fecha de actualización. No hay frases genéricas tipo "somos los mejores"; incluso aclara limitaciones ("La validación... está pendiente"). No hay precios, pero el servicio se presenta como gratuito.

*Evidencia:*
- "3,11 mm/día en promedio" y "96,37 mm acumulados"
- "Días válidos 31 de 31"
- "un periodo de hasta 366 días por consulta"
- "Actualizado el 15 de noviembre de 2026."
- 36 números y 8 fechas detectados; 0 frases genéricas

#### AEO 10 · Señales de confianza: 2/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Cumple tres de las cuatro señales de forma visible y verificable. Quién está detrás: Freddy Lezama aparece con nombre, perfil de GitHub enlazado y nodo Person en el schema. Actualización: «Actualizado el 15 de noviembre de 2026.» con <time> y dateModified 2026-11-15. Fuentes: 7 enlaces externos reales (NASA POWER, FAO 56, OpenStreetMap, historias de OpenET) y el estudio de K’ayra publica coordenadas y serie de 31 días. La sección «Ubicación y responsable del proyecto» hace de «acerca de», aunque sin página propia. No hay testimonios ni reseñas.

*Evidencia:*
- Autor/responsable: «Freddy Lezama desarrolla Yaku ETP en Cusco, Perú»; enlace «Perfil de Freddy Lezama en GitHub»; WebApplication.author = https://yaku-etp.store/#responsable (Person)
- Fecha: «Actualizado el 15 de noviembre de 2026.»; time = 2026-11-15; WebApplication.dateModified = 2026-11-15
- Acerca de: H2 «Ubicación y responsable del proyecto» (quién, dónde y cómo se revisa el cálculo); enlacesAcerca vacío, sin página «Acerca de» dedicada
- Fuentes: fuentesExternas = 7; enlaces a power.larc.nasa.gov, fao.org (FAO 56), openstreetmap.org/copyright, etdata.org (2 historias de OpenET); «el estudio de K’ayra publica las coordenadas, la serie de 31 días y su fuente»
- Transparencia: «La validación con registros de la estación de K’ayra está pendiente» y «Estimación referencial. No sustituye un estudio hidrológico validado.»
- Testimonios: citas = 0, schemaReview = false; mencionaEquipo = false (proyecto individual)

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 7 · Imágenes** (1/2): Sirve «recursos/vista-kayra.webp» con un tamaño acorde al que se muestra en móvil (por ejemplo, una variante de unos 390–780 px de ancho) y declara varias versiones con srcset y sizes; con eso se recuperan unos 19 KiB.
2. **SEO 9 · Móvil** (1/2): Dale a los enlaces del menú superior («Guía», «Servicios», «Estudio de K’ayra») un área táctil de al menos 44 px de alto con padding vertical, y separa un poco más cada enlace.
3. **AEO 8 · Identidad clara y consistente** (1/2): Publica un correo de contacto (por ejemplo contacto@yaku-etp.store) en el pie y en la sección «Ubicación y responsable del proyecto», y decláralo en el schema con un ContactPoint (email) que coincida exacto con el visible.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
