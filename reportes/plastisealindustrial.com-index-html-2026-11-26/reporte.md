# Calificación SEO + AEO: https://www.plastisealindustrial.com/index.html

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-26. Lighthouse móvil 12.8.2: rendimiento 88.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **5** | 20 | 25% |
| AEO | **5** | 20 | 25% |
| **Total** | **10** | 40 | 25% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■□ 1/2 | Script | agente |
| 2 | Descripción y vista al compartir | □□ 0/2 | Script | agente |
| 3 | Estructura de encabezados | □□ 0/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | □□ 0/2 | Agente | agente |
| 5 | Indexable | ■□ 1/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | □□ 0/2 | Script | agente |
| 7 | Imágenes | ■□ 1/2 | Script + Lighthouse | agente |
| 8 | Velocidad | ■□ 1/2 | Lighthouse | agente |
| 9 | Móvil | □□ 0/2 | Lighthouse + captura móvil | agente |
| 10 | Enlaces y URLs | ■□ 1/2 | Script | agente |

## Rúbrica AEO: que los buscadores con IA usen la página como respuesta

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Respuesta directa arriba | □□ 0/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | □□ 0/2 | Agente | agente |
| 3 | Preguntas frecuentes | □□ 0/2 | Agente | agente |
| 4 | Datos estructurados | □□ 0/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■□ 1/2 | Script: compara el HTML crudo con la página ya cargada | agente (ajustó al script) |
| 6 | Acceso para bots de IA | ■■ 2/2 | Script | agente |
| 7 | Formato fácil de extraer | □□ 0/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | □□ 0/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 1/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> que sí dice de qué trata la página (plásticos y hules de ingeniería) e incluye la marca, así que no es genérico. Pero mide 76 caracteres, muy por arriba del rango de 50–60 aprox., y Google lo cortaría en los resultados. Además la marca va pegada al texto, sin separador.

*Evidencia:*
- Título: "PlastisealIndustrial.com Plásticos y hules de ingeniería para mantenimiento."
- 1 etiqueta <title>, 76 caracteres (rango 45–65)
- Incluye marca y tema; termina con punto y sin separador

*Cómo mejorarlo:*
- Acorta el título a 60 caracteres o menos y separa la marca del tema, por ejemplo: «Plastiseal Industrial | Plásticos y hules de ingeniería» (55 caracteres).

#### SEO 2 · Descripción y vista al compartir: 0/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La página no tiene meta description ni etiquetas Open Graph. Lighthouse lo confirma ("Document does not have a meta description") y el bloque de metas extraído está vacío. Al compartir el enlace no habrá resumen ni imagen de vista previa.

*Evidencia:*
- meta description: ausente (0 caracteres)
- og:title, og:description y og:image: ausentes
- twitter:card: null

*Cómo mejorarlo:*
- Agrega una meta description de 140–160 caracteres que invite a entrar, por ejemplo: «Fabricamos y vendemos plásticos y hules de ingeniería: acrílico, nylon, PTFE, empaques de hule y mamparas a la medida. Cotiza hoy con Plastiseal Industrial.»
- Agrega og:title, og:description y og:image en el <head>. La imagen debe ser una URL absoluta, por ejemplo https://www.plastisealindustrial.com/images/mamparas-de-acrilico-para-distanciamiento-social.jpg.
- Agrega también twitter:card con valor summary_large_image para que la vista previa se vea completa en X y otras apps.

#### SEO 3 · Estructura de encabezados: 0/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

La página no tiene ningún encabezado: 0 H1, 0 H2 y 0 H3 en el HTML renderizado. Los títulos visibles ("Plastiseal Industrial S.A. de C.V.", "Algunos de nuestros clientes") son imágenes, así que ni usuarios con lector de pantalla ni buscadores reciben una estructura de contenido.

*Evidencia:*
- Resumen de encabezados: h1=0, h2=0, h3=0, h4=0, h5=0, h6=0
- Lista `encabezados` vacía
- Solo 27 palabras de texto en la página; los títulos visibles son imágenes

*Cómo mejorarlo:*
- Agrega un único H1 en texto real que diga de qué trata la página, por ejemplo: «Plásticos y hules de ingeniería para mantenimiento industrial».
- Convierte en H2 en texto (no en imagen) las secciones "Productos", "Quiénes somos" y "Algunos de nuestros clientes", y usa H3 para cada familia de producto si agregas descripciones.

#### SEO 4 · Tema claro y contenido suficiente: 0/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El contenido principal extraído tiene solo 27 palabras y todas son código JavaScript repetido tres veces ("jQuery(document).ready(function() { jQuery('#mycarousel').jcarousel(..."). No hay H1 ni primer párrafo en texto; el título sí dice el tema ("Plásticos y hules de ingeniería para mantenimiento"), pero no se respalda en la página. La captura muestra un párrafo corto sobre la empresa, pero aun contándolo quedaría muy por debajo de 120 palabras útiles, y todo apunta a que está dentro de imágenes (sin alt), así que un buscador no lo lee.

*Evidencia:*
- palabrasContenido: 27 (todas de código jQuery)
- H1: vacío; sin párrafos en el contenido extraído
- Título: "PlastisealIndustrial.com Plásticos y hules de ingeniería para mantenimiento."
- Términos más frecuentes: "jquery", "document", "function", "mycarousel" (ninguno es del tema)

*Cómo mejorarlo:*
- Agrega un H1 en texto real, por ejemplo: «Plásticos y hules de ingeniería para mantenimiento industrial», que repita el tema del título.
- Escribe en HTML (no en imagen) al menos 300 palabras útiles: un párrafo inicial sobre la empresa y una sección breve por producto (acrílico, policarbonato, polietileno UHMW, nylon, acetal, PVC, polipropileno, resina PTFE, empaques de hule, mamparas de acrílico) con usos y características.
- Saca los bloques <script> de jCarousel de las celdas de tabla y muévelos a un archivo .js o al final del <body>, para que el código no se lea como contenido de la página.

#### SEO 5 · Indexable: 1/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página es indexable: responde 200 por HTTPS, sin redirecciones y sin noindex en meta ni en X-Robots-Tag (Lighthouse: "Page isn't blocked from indexing"). Pero no declara canonical y el <html> no tiene atributo lang, así que dos de los cuatro puntos del criterio están incompletos.

*Evidencia:*
- HTTP 200 en https://www.plastisealindustrial.com/index.html, sin redirecciones
- metaRobots: null; xRobotsTag: null
- canonicales: [] (no hay canonical)
- lang: null (falta lang en <html>)

*Cómo mejorarlo:*
- Agrega <link rel="canonical" href="https://www.plastisealindustrial.com/"> (o la versión con index.html, la que elijas como oficial) y usa esa misma URL en los enlaces internos al inicio.
- Agrega lang="es-MX" (o lang="es") al elemento <html>, porque el contenido está en español.

#### SEO 6 · robots.txt y sitemap.xml: 0/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

El sitio no tiene robots.txt ni sitemap.xml: ambos responden 404, y tampoco hay sitemap en las rutas comunes. La ausencia de robots.txt no bloquea el rastreo, pero el criterio pide que existan los dos.

*Evidencia:*
- https://www.plastisealindustrial.com/robots.txt: 404
- sitemap.xml, sitemap_index.xml, sitemap-index.xml y wp-sitemap.xml: 404
- 0 URL listadas; sitemapsDeclarados: []

*Cómo mejorarlo:*
- Crea /sitemap.xml con las páginas reales del sitio: index.html, qs.html, contacto.html, videos-plastiseal.html, mamparas-de-acrilico.html, empaques-hule.html y las páginas de cada material. Usa el mismo dominio y protocolo (https://www.plastisealindustrial.com).
- Crea /robots.txt con "User-agent: *", "Allow: /" y la línea "Sitemap: https://www.plastisealindustrial.com/sitemap.xml".

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las imágenes de producto del menú sí tienen alt descriptivo (por ejemplo «Mamparas de acrílico para distanciamiento social a la medida», «Resina antiadherente PTFE»), pero solo 19 de 33 imágenes con contenido (58 %) tienen alt, por debajo del 90 % esperado. Faltan alts en la galería de fotos (foto01 a foto11, plastiseal-industrial-mamparas-de-acrilico.jpg) y en imágenes como prod-1.png, prod-2.jpg y prod-3.png. Ninguna imagen pesa más de 300 KB (total 1,001 KB), pero Lighthouse marca modern-image-formats (ahorro estimado de 583 KiB) y uses-optimized-images (191 KiB).

*Evidencia:*
- 19 de 33 imágenes con contenido con alt válido (58 %; mínimo esperado 90 %)
- Sin alt: foto01.jpg, foto02.jpg, foto03.jpg, foto04.jpg, foto06.jpg, foto07.jpg, prod-2.jpg, plastiseal-industrial-mamparas-de-acrilico.jpg (y más en pagina.json)
- altVacioEnImagenesGrandes: [] e imagenesPesadas: [] (ninguna > 300 KB)
- Lighthouse: modern-image-formats ahorro de 583 KiB; uses-optimized-images ahorro de 191 KiB (fotos del carrusel #mycarousel, ~77-85 KB cada una)
- uses-responsive-images y offscreen-images sin problemas

*Cómo mejorarlo:*
- Agrega un alt descriptivo a las fotos del carrusel (foto01.jpg a foto11.jpg), por ejemplo «Mampara de acrílico instalada en un mostrador de oficina», y a prod-1.png, prod-2.jpg y prod-3.png (si son logos de clientes, usa el nombre de la marca, por ejemplo «Cemex»).
- Convierte las fotos del carrusel a WebP o AVIF para ahorrar cerca de 583 KiB, según Lighthouse.
- Recomprime los JPG de foto02, foto06, foto08, foto09 y plastiseal-industrial-mamparas-de-acrilico.jpg para recuperar unos 191 KiB.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Confirmo el puntaje del script. Lighthouse móvil da rendimiento 88 (cumple ≥ 80) y CLS 0.000 (cumple < 0.1), pero el LCP es de 3.83 s y no cumple el máximo de 2.5 s; con dos de tres métricas en rango, corresponde 1. Es una sola medición de Lighthouse y puede variar entre corridas y equipos.

*Evidencia:*
- Rendimiento 88 (mínimo 80)
- LCP 3.83 s (máximo 2.5 s) frente a FCP 0.82 s
- CLS 0.000 (máximo 0.1); TBT 0 ms
- Servidor rápido: documento raíz en 40 ms; render-blocking-resources y unused-javascript sin hallazgos
- Peso total de 1,041 KiB, de los cuales unos 1,001 KB son imágenes

*Cómo mejorarlo:*
- Reduce el LCP identificando el elemento más grande de la pantalla inicial (el banner de mamparas o la primera foto del carrusel) y sírvelo en WebP/AVIF, con ancho adecuado al teléfono.
- Si el elemento LCP es una imagen, no la cargues con retraso desde JavaScript del carrusel; ponla directamente en el HTML y agrégale fetchpriority="high".
- Aligera el peso de las fotos del carrusel (ahorro estimado de 583 KiB en formatos modernos) para acortar la descarga en conexiones móviles.

#### SEO 9 · Móvil: 0/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Confirmo el 0 del script. La página no tiene meta viewport (el script y Lighthouse lo marcan, y es un check bloqueante), y las capturas lo reflejan: en movil-arriba.png el diseño de escritorio se ve encogido y el texto del cuerpo queda diminuto e ilegible sin zoom, mientras que en movil-completa.png el contenido principal queda cortado por la derecha (solo se ven el menú lateral y parte de la barra «INICIO / ¿QUI…»). El script no vio el problema de legibilidad porque midió 0 caracteres de texto, ya que casi todo el contenido está en imágenes (27 palabras en total).

*Evidencia:*
- evidencia.viewport vacío; check metaViewport: «Falta meta viewport»
- Lighthouse: viewport score 0 y font-size score 0
- movil-arriba.png: diseño de escritorio reducido; el párrafo «Contamos con 19 años de experiencia…» y los menús apenas se leen
- movil-completa.png: contenido principal cortado en el borde derecho y mucho espacio gris vacío debajo
- Texto medido por el script: 0 caracteres, así que el check textoLegible (0 % pequeño) no es confiable

*Cómo mejorarlo:*
- Agrega en el <head> la etiqueta <meta name="viewport" content="width=device-width, initial-scale=1">.
- Reemplaza el diseño de ancho fijo por uno adaptable (columnas fluidas y media queries) para que el menú lateral y el contenido principal quepan en 390 px sin quedar cortados.
- Pasa los textos que hoy son imagen (banners de menú y títulos) a texto HTML de al menos 16 px, y da a los enlaces de la barra superior un área táctil de al menos 44 px.

#### SEO 10 · Enlaces y URLs: 1/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

Los enlaces internos están sanos: 0 rotos de 14 revisados, 0 anclas genéricas tipo "clic aquí" y URLs legibles (qs.html, mamparas-de-acrilico.html, polietileno-uhmw.html). Quedó a medias porque el menú son imágenes sin <nav> ni <header> (el script detectó 0 enlaces de menú), y un enlace a empaques-hule.html no tiene texto ni alt.

*Evidencia:*
- rotos: [] y sinVerificar: [] (14 internos únicos revisados, todos)
- enlacesGenericos: []
- enlacesSinTexto: https://www.plastisealindustrial.com/empaques-hule.html
- menu: [] (0 enlaces dentro de nav/header); el menú visible usa imágenes con alt ("¿Quiénes somos?", "Contacto Plastiseal Industrial")
- Lighthouse link-text: score 1

*Cómo mejorarlo:*
- Marca el menú con <nav> y, si es posible, reemplaza las imágenes de los botones por texto real con enlaces (Inicio, ¿Quiénes somos?, Contacto, Videos).
- Agrega alt descriptivo a la imagen que enlaza a empaques-hule.html, por ejemplo alt="Empaques de hule", para que ese enlace tenga texto.

### AEO

#### AEO 1 · Respuesta directa arriba: 0/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Lo primero que se lee en el contenido es código: tres filas con "jQuery(document).ready(function() ...". No hay ninguna frase en texto que diga qué es el sitio, para quién es o qué ofrece. La captura muestra un párrafo ("Contamos con 19 años de experiencia en el mercado..."), pero parece estar en una imagen y, aun como texto, mezclaría la oferta con frases genéricas ("la más alta calidad").

*Evidencia:*
- primerasDosFrasesDelPrimerParrafo: "" (0 palabras)
- Primer bloque del contenido: "jQuery(document).ready(function() { jQuery('#mycarousel').jcarousel({ wrap: 'circular' }); });"
- Sin meta description ni H1 que compensen

*Cómo mejorarlo:*
- Abre el contenido, en texto real, con una respuesta directa como: «Plastiseal Industrial S.A. de C.V. vende plásticos de ingeniería (acrílico, policarbonato, nylon, polietileno UHMW, PTFE) y empaques de hule para el mantenimiento industrial, con 19 años de experiencia, y fabrica mamparas de acrílico a la medida.»
- Agrega una meta description con la misma idea (unas 25 a 40 palabras) para que los buscadores y las IA tengan un resumen citable.

#### AEO 2 · Encabezados en forma de pregunta: 0/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

La página no tiene ningún encabezado en el contenido (totalH2: 0, encabezados: 0), así que no hay H2 ni H3 en forma de pregunta ni respuestas debajo.

*Evidencia:*
- totalH2: 0
- h2ComoPregunta: 0
- encabezados: []

*Cómo mejorarlo:*
- Crea H2 con preguntas reales y responde en la primera frase, por ejemplo: «¿Qué plásticos de ingeniería vende Plastiseal Industrial?» → «Vendemos acrílico, policarbonato, polietileno UHMW y de alta densidad, acetal, PVC, nylon, polipropileno y resina antiadherente PTFE.»
- Agrega «¿Fabrican mamparas de acrílico a la medida?» con la respuesta directa debajo y un enlace a mamparas-de-acrilico.html.
- Agrega «¿Cómo pido una cotización?» con la respuesta inmediata: llamar al (55) 5361-3780 o (55) 5397-8642, o escribir a plastiseal@prodigy.net.mx.

#### AEO 3 · Preguntas frecuentes: 0/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

No hay sección de preguntas frecuentes visible: sin encabezado FAQ, sin acordeones (detailsSummary: 0, ariaExpanded: 0) y sin schema FAQPage.

*Evidencia:*
- encabezadoFaq: null; seccionFaq: null
- detailsSummary: 0; ariaExpanded: 0; schemaFaq: false

*Cómo mejorarlo:*
- Añade una sección visible «Preguntas frecuentes» con al menos 4 preguntas de 1 a 3 frases cada una, por ejemplo: «¿Qué diferencia hay entre acrílico y policarbonato?», «¿Cortan el material a la medida?», «¿Hacen empaques de hule sobre diseño?», «¿Cómo solicito una cotización?».
- Después de publicar la sección visible, marca esas mismas preguntas con schema FAQPage; el schema solo no cuenta.

#### AEO 4 · Datos estructurados: 0/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

La página no tiene ningún bloque JSON-LD (0 bloques en pagina.json, tanto en el HTML crudo como en el renderizado). Para una empresa que vende plásticos y hules de ingeniería, los bots de IA no reciben ningún dato estructurado sobre el nombre, el contacto ni la ubicación del negocio.

*Evidencia:*
- jsonld.cantidadBloques = 0 y nodos = [] en pagina.json
- crudo.jsonld = 0 (tampoco existe en el HTML inicial)
- El contacto visible en la captura (correo plastiseal@prodigy.net.mx, teléfonos (55) 5361-3780 y (55) 5397-8642) no está respaldado por ningún schema
- Hay un enlace a Facebook (facebook.com/PlastisealIndustrial) que podría ir en sameAs

*Cómo mejorarlo:*
- Agrega en el <head> de index.html un bloque JSON-LD con @context "https://schema.org" y @type "Organization" (o "LocalBusiness" si atienden en un domicilio físico) con name "Plastiseal Industrial S.A. de C.V.", url "https://www.plastisealindustrial.com/", logo "https://www.plastisealindustrial.com/images/top.png", description, email, telephone y address (PostalAddress con la ciudad y el estado del pie de página).
- Incluye sameAs con "https://www.facebook.com/PlastisealIndustrial/" y verifica que los teléfonos y el correo del schema coincidan exactamente con los que se muestran en la página.
- Cuando la página tenga texto real de productos, añade Product (o ItemList de productos) para acrílico, policarbonato, nylon, PVC, etc., y valida el resultado con la prueba de resultados enriquecidos de Google.

#### AEO 5 · Contenido legible sin JavaScript: 1/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El script dio 2 porque el HTML crudo y el renderizado coinciden (27 de 27 palabras), pero esas 27 palabras son solo código jQuery del carrusel ("jQuery(document).ready(function() { jQuery('#mycarousel').jcarousel(..."), no contenido. La página no depende de JavaScript para mostrarse, pero el contenido importante (el titular de mamparas, el párrafo "Contamos con 19 años de experiencia...", los clientes y los datos de contacto) se ve en la captura y no existe como texto en el HTML: no hay H1, ni encabezados, ni párrafos, y 17 de 36 imágenes no tienen alt. Un bot sin JavaScript (y uno con JavaScript) solo lee el título, los nombres del menú de productos y poco más.

*El script dio 2/2; el agente lo ajustó a 1/2. El script dio 2/2 al comparar crudo contra renderizado, pero las únicas 27 palabras comparadas son código JavaScript del carrusel, no contenido. El resultado de 100% no demuestra que el texto principal sea legible, porque el texto principal no está en el HTML. Bajé a 1: la página no necesita JS para mostrarse (parte que sí cumple), pero casi no hay texto legible para un bot.*

*Evidencia:*
- palabrasHtmlCrudo 27 = palabrasRenderizado 27, y primerasPalabrasCrudo contiene solo la línea de jQuery repetida tres veces
- encabezadosCrudo = [] y pagina.json: encabezados = [], parrafos = 0, filasDeTabla = 3 (las filas del script)
- En movil-arriba.png se ve un párrafo de presentación y el logotipo de clientes que no aparecen en texto.md; 17 de 36 imágenes no tienen alt (foto01.jpg, top3.jpg, etc.)
- pagina.json: contacto.tel = [] y correos = [] aunque teléfono y correo se ven en la captura, lo que indica que están dentro de imágenes

*Cómo mejorarlo:*
- Escribe como texto HTML (no como imagen) el titular, la descripción de la empresa y de cada línea de productos, y los datos de contacto: por ejemplo un <h1> como «Plásticos y hules de ingeniería para mantenimiento» y un <p> con los años de experiencia y los productos que fabrican.
- Pon el teléfono y el correo como texto con enlaces tel: y mailto:, y añade alt descriptivo a las imágenes de contenido (mamparas, clientes, fotos de productos) para que los bots lean algo de ellas.
- Mantén ese texto en el HTML inicial (como ya ocurre con el resto de la página) y deja el JavaScript solo para el carrusel.

*Nota:* Regla: ≥ 80% = 2, 40–80% = 1, < 40% = 0.

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El sitio no tiene robots.txt (la evidencia dice "no existe robots.txt"), así que no hay ninguna regla que bloquee a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended: los cuatro están permitidos, igual que OAI-SearchBot, ChatGPT-User y los demás bots de IA revisados. Tampoco hay llms.txt, lo que no cambia el puntaje porque es solo un bonus informativo.

*Evidencia:*
- robotsTxtExiste = false; robots.txt: "(no existe robots.txt)"
- botsDeLaRubrica: GPTBot, ClaudeBot, PerplexityBot y Google-Extended = permitido
- llmsTxt.existe = false (https://www.plastisealindustrial.com/llms.txt)

#### AEO 7 · Formato fácil de extraer: 0/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

El contenido extraído no tiene estructura legible: 0 párrafos, 0 encabezados, 0 listas y solo 3 filas de tabla que contienen código JavaScript. La lista de productos y los textos de la página parecen estar en imágenes, así que no hay nada que un bot pueda extraer como párrafo, lista o paso.

*Evidencia:*
- parrafos: 0; encabezados: 0; itemsDeLista: 0
- filasDeTabla: 3 (todas "jQuery(document).ready(function() ...")

*Cómo mejorarlo:*
- Convierte el menú de productos (hoy imágenes con alt) en una lista <ul> de texto con un enlace por producto y una frase descriptiva corta cada uno.
- Organiza la página en secciones con H2 (Productos, Mamparas de acrílico, Clientes, Contacto), cada una con párrafos de menos de 80 palabras y un solo tema.
- Presenta una tabla comparativa de materiales (material, usos típicos, característica principal) en HTML, no como imagen.

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre es coherente entre el título («PlastisealIndustrial.com Plásticos y hules de ingeniería…»), el logotipo y el encabezado en imagen («Plastiseal Industrial S.A. de C.V.»), y hay un enlace real a la página de Facebook de la marca. Pero no hay schema JSON-LD, ni og:site_name, ni meta description, ni H1, ni © en texto, y el correo, los teléfonos y la ubicación solo aparecen dentro de imágenes, así que un bot no puede leerlos ni compararlos.

*Evidencia:*
- pagina.json: jsonld.cantidadBloques = 0, meta = {}, encabezados = [] (sin H1), identidad.nombres.copyright = null
- identidad.contacto: telefonosPagina = [], correosPagina = [], contacto.tel = [], contacto.mailto = [] (ningún dato de contacto en texto)
- movil-arriba.png: el pie muestra visualmente «plastiseal@prodigy.net.mx», «(55) 5361-3780», «(55) 5397-8642» y una línea que parece decir «Tlalnepantla, Estado de México», pero texto.md no los contiene (están en imágenes)
- Redes: solo https://www.facebook.com/PlastisealIndustrial/?ref=bookmarks (perfil real, con parámetro ?ref=bookmarks); enSchemaSameAs = []
- Texto visible «Plastiseal Industrial S.A. de C.V.» no coincide en forma exacta con el título (variación de formato, no contradicción)

*Cómo mejorarlo:*
- Agrega un bloque JSON-LD tipo Organization/LocalBusiness con name «Plastiseal Industrial S.A. de C.V.», telephone (+52 55 5361 3780), email, address (Tlalnepantla, Estado de México) y sameAs con el perfil de Facebook.
- Escribe el correo, los teléfonos y la dirección como texto real en el pie (con enlaces tel: y mailto:) en lugar de imágenes, y usa exactamente los mismos datos que en el schema.
- Añade un H1 con el nombre del negocio, una meta description y og:site_name «Plastiseal Industrial» para que el nombre y la descripción coincidan en título, encabezado y metadatos; limpia el enlace de Facebook a https://www.facebook.com/PlastisealIndustrial/ y suma otras redes oficiales si existen (LinkedIn, YouTube).

#### AEO 9 · Datos concretos: 0/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

En el texto extraído no hay ninguna cifra, precio, fecha ni ejemplo (numeros: 0, precios: 0, fechas: 0). Los únicos datos concretos que muestra la captura ("19 años de experiencia", teléfonos, logotipos de clientes como Cemex, Coca-Cola, Colgate, Merck y Alpura) están en imágenes o fuera del contenido, por lo que un buscador no los puede citar.

*Evidencia:*
- numeros: 0; precios: 0; porcentajes: 0; fechas: 0; horarios: 0
- ejemplosDeNumeros: []
- En la captura: "Contamos con 19 años de experiencia en el mercado" (no aparece en el texto extraído)

*Cómo mejorarlo:*
- Pasa a texto los datos que ya tienes: «19 años de experiencia», teléfonos (55) 5361-3780 y (55) 5397-8642, correo y la lista de clientes (Cemex, Coca-Cola, Colgate, Merck, Alpura) como texto, no solo logotipos.
- Agrega datos verificables por producto: medidas y espesores de lámina disponibles, temperatura máxima de trabajo de cada plástico, tiempos de entrega y un ejemplo de proyecto (por ejemplo, dimensiones de una mampara fabricada a la medida).
- Indica un horario de atención y la ciudad o zona de entrega para que la información de contacto sea concreta.

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

La página tiene un enlace «¿Quiénes somos?» (qs.html) y muestra logotipos de clientes reales (Cemex, Coca-Cola, Colgate, Merck, Alpura, Altana, Moctezuma), pero no nombra a ninguna persona o equipo, no tiene ninguna fecha de actualización ni © en texto, y los clientes son solo logos sin testimonio, enlace ni cita. Solo se cubre débilmente una o dos de las cuatro señales.

*Evidencia:*
- confianza.autor: meta, relAuthor, jsonld y textoPor = null; mencionaEquipo = false
- confianza.fechaActualizacion: time, meta, jsonld y texto = null; sin © con año en texto
- confianza.enlacesAcerca: «¿Quiénes somos?» → https://www.plastisealindustrial.com/qs.html (solo el enlace; no se auditó el contenido de esa página)
- movil-arriba.png: «Algunos de nuestros clientes:» con logos de Cemex, Coca-Cola, Merck, Colgate, Alpura, Altana, Moctezuma; texto «Contamos con 19 años de experiencia…» (en imagen)
- testimonios.schemaReview = false; fuentesExternas = 0; enlacesLegales = [] (aunque el pie muestra «Aviso de privacidad» como imagen)

*Cómo mejorarlo:*
- Agrega a la página (o a qs.html, enlazada desde el inicio) el nombre del director o del equipo con cargo y, si es posible, foto, para que se vea quién está detrás de Plastiseal Industrial.
- Publica una fecha visible de actualización (por ejemplo «© 2026 Plastiseal Industrial S.A. de C.V.» en el pie y dateModified en el schema).
- Convierte los logos de clientes en testimonios o casos con nombre, empresa y cita (por ejemplo «Ing. …, Compras, Alpura») y pon texto alt a cada logo; enlaza «Aviso de privacidad» como texto en el pie.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 2 · Descripción y vista al compartir** (0/2): Agrega una meta description de 140–160 caracteres que invite a entrar, por ejemplo: «Fabricamos y vendemos plásticos y hules de ingeniería: acrílico, nylon, PTFE, empaques de hule y mamparas a la medida. Cotiza hoy con Plastiseal Industrial.»
2. **SEO 3 · Estructura de encabezados** (0/2): Agrega un único H1 en texto real que diga de qué trata la página, por ejemplo: «Plásticos y hules de ingeniería para mantenimiento industrial».
3. **SEO 4 · Tema claro y contenido suficiente** (0/2): Agrega un H1 en texto real, por ejemplo: «Plásticos y hules de ingeniería para mantenimiento industrial», que repita el tema del título.
4. **SEO 6 · robots.txt y sitemap.xml** (0/2): Crea /sitemap.xml con las páginas reales del sitio: index.html, qs.html, contacto.html, videos-plastiseal.html, mamparas-de-acrilico.html, empaques-hule.html y las páginas de cada material. Usa el mismo dominio y protocolo (https://www.plastisealindustrial.com).
5. **SEO 9 · Móvil** (0/2): Agrega en el <head> la etiqueta <meta name="viewport" content="width=device-width, initial-scale=1">.
6. **AEO 1 · Respuesta directa arriba** (0/2): Abre el contenido, en texto real, con una respuesta directa como: «Plastiseal Industrial S.A. de C.V. vende plásticos de ingeniería (acrílico, policarbonato, nylon, polietileno UHMW, PTFE) y empaques de hule para el mantenimiento industrial, con 19 años de experiencia, y fabrica mamparas de acrílico a la medida.»
7. **AEO 2 · Encabezados en forma de pregunta** (0/2): Crea H2 con preguntas reales y responde en la primera frase, por ejemplo: «¿Qué plásticos de ingeniería vende Plastiseal Industrial?» → «Vendemos acrílico, policarbonato, polietileno UHMW y de alta densidad, acetal, PVC, nylon, polipropileno y resina antiadherente PTFE.»
8. **AEO 3 · Preguntas frecuentes** (0/2): Añade una sección visible «Preguntas frecuentes» con al menos 4 preguntas de 1 a 3 frases cada una, por ejemplo: «¿Qué diferencia hay entre acrílico y policarbonato?», «¿Cortan el material a la medida?», «¿Hacen empaques de hule sobre diseño?», «¿Cómo solicito una cotización?».
9. **AEO 4 · Datos estructurados** (0/2): Agrega en el <head> de index.html un bloque JSON-LD con @context "https://schema.org" y @type "Organization" (o "LocalBusiness" si atienden en un domicilio físico) con name "Plastiseal Industrial S.A. de C.V.", url "https://www.plastisealindustrial.com/", logo "https://www.plastisealindustrial.com/images/top.png", description, email, telephone y address (PostalAddress con la ciudad y el estado del pie de página).
10. **AEO 7 · Formato fácil de extraer** (0/2): Convierte el menú de productos (hoy imágenes con alt) en una lista <ul> de texto con un enlace por producto y una frase descriptiva corta cada uno.
11. **AEO 9 · Datos concretos** (0/2): Pasa a texto los datos que ya tienes: «19 años de experiencia», teléfonos (55) 5361-3780 y (55) 5397-8642, correo y la lista de clientes (Cemex, Coca-Cola, Colgate, Merck, Alpura) como texto, no solo logotipos.
12. **SEO 1 · Título de la página** (1/2): Acorta el título a 60 caracteres o menos y separa la marca del tema, por ejemplo: «Plastiseal Industrial | Plásticos y hules de ingeniería» (55 caracteres).
13. **SEO 5 · Indexable** (1/2): Agrega <link rel="canonical" href="https://www.plastisealindustrial.com/"> (o la versión con index.html, la que elijas como oficial) y usa esa misma URL en los enlaces internos al inicio.
14. **SEO 7 · Imágenes** (1/2): Agrega un alt descriptivo a las fotos del carrusel (foto01.jpg a foto11.jpg), por ejemplo «Mampara de acrílico instalada en un mostrador de oficina», y a prod-1.png, prod-2.jpg y prod-3.png (si son logos de clientes, usa el nombre de la marca, por ejemplo «Cemex»).
15. **SEO 8 · Velocidad** (1/2): Reduce el LCP identificando el elemento más grande de la pantalla inicial (el banner de mamparas o la primera foto del carrusel) y sírvelo en WebP/AVIF, con ancho adecuado al teléfono.
16. **SEO 10 · Enlaces y URLs** (1/2): Marca el menú con <nav> y, si es posible, reemplaza las imágenes de los botones por texto real con enlaces (Inicio, ¿Quiénes somos?, Contacto, Videos).
17. **AEO 5 · Contenido legible sin JavaScript** (1/2): Escribe como texto HTML (no como imagen) el titular, la descripción de la empresa y de cada línea de productos, y los datos de contacto: por ejemplo un <h1> como «Plásticos y hules de ingeniería para mantenimiento» y un <p> con los años de experiencia y los productos que fabrican.
18. **AEO 8 · Identidad clara y consistente** (1/2): Agrega un bloque JSON-LD tipo Organization/LocalBusiness con name «Plastiseal Industrial S.A. de C.V.», telephone (+52 55 5361 3780), email, address (Tlalnepantla, Estado de México) y sameAs con el perfil de Facebook.
19. **AEO 10 · Señales de confianza** (1/2): Agrega a la página (o a qs.html, enlazada desde el inicio) el nombre del director o del equipo con cargo y, si es posible, foto, para que se vea quién está detrás de Plastiseal Industrial.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
