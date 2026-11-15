# Calificación SEO + AEO: https://somosgreenia.com/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 99.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **19** | 20 | 95% |
| AEO | **20** | 20 | 100% |
| **Total** | **39** | 40 | 98% |

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
| 8 | Identidad clara y consistente | ■■ 2/2 | Agente + script | agente |
| 9 | Datos concretos | ■■ 2/2 | Agente | agente |
| 10 | Señales de confianza | ■■ 2/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 59 caracteres que dice de qué trata la página y lleva la marca: «Aprende a usar la IA con criterio, sin jerga · somosgreenia». No es genérico y es coherente con el H1 y el contenido (educación en IA con criterio).

*Evidencia:*
- 1 etiqueta <title>, 59 caracteres
- «Aprende a usar la IA con criterio, sin jerga · somosgreenia»
- Incluye tema (IA con criterio) y marca (somosgreenia)

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 154 caracteres (dentro de 140–160), abre con un verbo de acción y promete beneficio concreto: «mejores resultados, menos riesgos y menos energía y agua. Recursos gratuitos y curso desde Bogotá». Están og:title, og:description y og:image, y la imagen es una URL absoluta; además hay twitter:card summary_large_image.

*Evidencia:*
- meta description: 154 caracteres
- «Aprende a usar la inteligencia artificial con criterio: mejores resultados, menos riesgos…»
- og:image: https://somosgreenia.com/assets/brand/og-image.png (absoluta)
- twitter:card = summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 («¿Listo para usar la IA sin que te use a ti?»), 7 H2 y 11 H3 sin saltos de nivel; los H3 cuelgan de su H2 (dos tarjetas bajo «¿Por dónde empezar?» y las preguntas bajo «Preguntas frecuentes»). El H1 es más un gancho que una descripción literal, pero menciona la IA y el párrafo siguiente aclara el tema. Detalle menor: el último H3 de la lista, «Tu guía para usar la IA con criterio.», no aparece en el contenido visible y parece un eslogan con etiqueta de encabezado.

*Evidencia:*
- Resumen: h1=1, h2=7, h3=11, h4–h6=0; saltos: []
- H1: «¿Listo para usar la IA sin que te use a ti?»
- H3 suelto al final: «Tu guía para usar la IA con criterio.»

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (usar la IA con criterio) es evidente en el título, el H1 y el primer párrafo, y el contenido principal tiene unas 687 palabras útiles sin relleno ni texto repetido. El H1 es una pregunta tipo gancho y no dice "con criterio", pero "usar la IA" coincide con el título y el párrafo que sigue lo aclara de inmediato.

*Evidencia:*
- Título: "Aprende a usar la IA con criterio, sin jerga · somosgreenia"
- H1: "¿Listo para usar la IA sin que te use a ti?"
- Primer párrafo: "somosgreenia es una marca educativa de Bogotá que te enseña a usar la inteligencia artificial con criterio"
- 687 palabras en main/cuerpo (umbral 300)

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 sin redirecciones, sin noindex en meta ni en X-Robots-Tag, con canonical a sí misma (https://somosgreenia.com/), HTTPS y lang="es", que coincide con el idioma real del contenido (español). Lighthouse marca superado «Page isn't blocked from indexing» y «canonical».

*Evidencia:*
- metaRobots: null, xRobotsTag: null
- canonical: https://somosgreenia.com/
- lang="es", HTTPS, status 200 sin redirecciones

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml (200, válido, 15 URL del mismo dominio y protocolo, incluida la home) y el robots.txt lo declara. No bloquea el sitio: permite «/» y solo excluye /estandar, /api/ y /reenviar-codigo, que son rutas técnicas. Lighthouse reporta «1 error» en robots.txt, casi seguro por la directiva «Content-Signal», que su analizador no reconoce; los rastreadores la ignoran sin afectar el resto de las reglas.

*Evidencia:*
- robots.txt: Allow: / y Disallow: /estandar, /api/, /reenviar-codigo
- Sitemap: https://somosgreenia.com/sitemap.xml (15 URL)
- Ejemplos: /, /recursos-gratuitos, /certificate-con-nosotros, /sobre-nosotros, /test
- Lighthouse robots-txt: 1 error (probable Content-Signal)

#### SEO 7 · Imágenes: 2/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

La página no tiene imágenes con contenido (pagina.json trae 'imagenes': [] y las hojas/gota de la sección verde en la captura son gráficos decorativos), por lo que no hay alt que evaluar ni fotos que pesen de más. El peso total de imágenes es de 91 KB, ninguna supera 300 KB y Lighthouse no marca problemas de formato, tamaño responsivo ni carga diferida.

*Evidencia:*
- totalImagenes: 0 · conContenido: 0 · altVacioEnImagenesGrandes: []
- pesoTotalImagenesKB: 91 · imagenesPesadas: []
- Lighthouse: uses-optimized-images, modern-image-formats, uses-responsive-images y offscreen-images con score 1

#### SEO 8 · Velocidad: 2/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: en Lighthouse móvil el rendimiento es 99 (mínimo 80), el LCP es 1.83 s (máximo 2.5 s) y el CLS es 0.000 (máximo 0.1), así que cumple las tres métricas. Es una sola medición de Lighthouse y puede variar entre corridas y equipos, pero el margen en las tres es amplio.

*Evidencia:*
- Rendimiento 99 · LCP 1,830 ms · CLS 0
- FCP 791 ms · TBT 67 ms · Speed Index 1,421 ms
- Respuesta del servidor: 80 ms en el documento raíz
- Peso total de la página: 1,875 KiB (Lighthouse lo marca como aprobado)

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport (width=device-width, initial-scale=1), no hay scroll horizontal y 0% del texto es menor a 12px. En las capturas el diseño se ve ordenado, sin contenido cortado ni encimado y sin banner o pop-up que tape la pantalla; el menú no usa hamburguesa sino que muestra los cinco enlaces en dos filas. Lo que queda a medias son los objetivos táctiles: 15 de 32 enlaces miden menos de 24 px de alto (los del menú miden 17 px, como «Inicio», «Blog» o «Sobre Nosotros») y en la captura están separados por poco espacio vertical.

*Evidencia:*
- viewport: width=device-width, initial-scale=1 · desborde horizontal 0 px
- 15 de 32 botones/enlaces con menos de 24 px; ejemplos: «Inicio» 36×17, «Blog» 30×17, «Instagram (@somos.greenia)» 342×17
- movil-arriba.png: menú en dos filas de enlaces de texto chico; botón «Recursos Gratuitos» y «Descúbrelo» sí tienen tamaño cómodo
- movil-arriba.png: el titular blanco y dorado («sin que te use a ti») sobre la foto clara del héroe tiene contraste bajo en la parte superior

*Cómo mejorarlo:*
- Agrega padding vertical a los enlaces del menú («Inicio», «Recursos Gratuitos», «Blog», «Certifícate con Nosotros», «Sobre Nosotros») y al enlace de Instagram para que midan al menos 24 px de alto, idealmente 44 px, con separación entre filas.
- Aumenta el contraste del titular del héroe sobre la foto (por ejemplo, una capa oscura semitransparente detrás del texto o un tono dorado más oscuro) para que «¿Listo para usar la IA sin que te use a ti?» se lea sin esfuerzo.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 5 enlaces internos descriptivos (Recursos Gratuitos, Blog, Certifícate con Nosotros, Sobre Nosotros), se repite en el pie y el script revisó los 12 enlaces internos únicos sin hallar rotos ni pendientes de verificar. No hay anclas genéricas («clic aquí», «leer más») ni enlaces sin texto, y las 13 URLs internas son legibles (p. ej. /recursos-gratuitos, /sobre-nosotros). Lighthouse aprueba «link-text» y «crawlable-anchors».

*Evidencia:*
- 0 rotos de 12 enlaces internos revisados; sinVerificar: []
- 0 enlaces genéricos, 0 sin texto
- 0 de 13 URLs poco legibles
- Lighthouse link-text y crawlable-anchors: score 1

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

El primer párrafo, justo debajo del H1, responde las tres cosas en 48 palabras: qué es ("marca educativa de Bogotá"), para quién ("personas y equipos sin formación técnica") y qué ofrece (enseña a usar la IA con criterio, cuatro herramientas gratis y el curso). Las dos primeras frases (36 palabras) ya dicen qué es y para quién, y la tercera concreta la oferta.

*Evidencia:*
- "somosgreenia es una marca educativa de Bogotá que te enseña a usar la inteligencia artificial con criterio"
- "Es para personas y equipos sin formación técnica."
- "Empieza gratis con cuatro herramientas o toma el curso «IA con criterio»."

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Hay 2 H2 y 8 H3 en forma de pregunta real, y casi todos se responden en la primera frase justo debajo. Por ejemplo, el H2 "¿Cuánta energía y agua gasta una consulta a la IA?" empieza con "Poco por consulta, mucho en la suma" y da las cifras. Solo "¿Por dónde empezar?" responde con dos tarjetas (Gratis / Curso) y no con una frase, pero no baja el conjunto.

*Evidencia:*
- H2: "¿Cuánta energía y agua gasta una consulta a la IA?" → "0,24 a 0,34 Wh de energía y de 0,26 a 0,32 mL de agua por consulta típica de texto"
- H3: "¿Cuánto cuesta el curso «IA con criterio»?" → "$49.900 COP en un pago único."
- H3: "¿Para quién es?" → "Para personas, emprendedores y equipos de trabajo…"
- H2: "¿Por dónde empezar?" → "Gratis" / "Curso" (tarjetas)

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección visible "Preguntas frecuentes" con 8 preguntas, todas con respuestas completas de 1–3 frases (sin acordeón colapsado: no hay marcas ▸ ni details/summary). Las respuestas son específicas (precio, dispositivos, certificado, independencia) y ninguna se limita a "contáctanos". Además existe FAQPage en el schema, pero la calificación se basa en la sección visible.

*Evidencia:*
- H2 "Preguntas frecuentes" con 8 H3 en forma de pregunta
- "¿El curso entrega un certificado?" → "No. El curso es una guía educativa y no emite certificados."
- "¿Las cifras de energía y agua son exactas?" → "No. Son estimaciones educativas basadas en estudios públicos…"

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 2 bloques JSON-LD válidos con @context schema.org y 5 tipos (Organization, WebSite, WebPage, Course, FAQPage), todos presentes en el HTML inicial. Los tipos son adecuados para una marca educativa con un curso de pago y una sección de preguntas frecuentes, y los datos coinciden con lo visible: teléfono +57 319 532 9245, correo hola@somosgreenia.com, Bogotá, precio del curso 49900 (en la página «$49.900 COP · pago único») y 8 preguntas en el FAQPage frente a 8 preguntas visibles bajo «Preguntas frecuentes».

*Evidencia:*
- Tipos: Organization, WebSite, WebPage, Course, FAQPage; sin JSON-LD inválido
- Course «IA con criterio» con precio 49900; texto.md: «$49.900 COP · pago único»
- Organization: telephone +57 319 532 9245 y email hola@somosgreenia.com, iguales a los del pie de página
- FAQPage con 8 preguntas; texto.md muestra 8 H3 en «Preguntas frecuentes»
- crudo.jsonld = 5 nodos: el schema no depende de JavaScript
- Organization.address aparece como «Bogotá, CO» y el pie dice «Bogotá, Colombia» (consistente)

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML crudo trae 687 de 687 palabras (100%) del texto renderizado, incluido el H1 «¿Listo para usar la IA sin que te use a ti?», la descripción de la marca y el precio del curso. Los 19 encabezados del HTML crudo coinciden con los de la página renderizada y el JSON-LD (5 nodos) también está en el HTML inicial, así que un bot sin JavaScript ve todo lo que importa.

*Evidencia:*
- palabrasHtmlCrudo 687 / palabrasRenderizado 687 (proporción 1)
- crudo.encabezados = 19, igual que los 19 encabezados de la página renderizada
- primerasPalabrasCrudo: «somosgreenia es una marca educativa de Bogotá que te enseña a usar la inteligencia artificial con criterio…»
- El precio «$49.900 COP · pago único» y el FAQ están en el contenido que existe sin JS

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended: solo hay un grupo «User-agent: *» con «Allow: /» y tres Disallow (/estandar, /api/, /reenviar-codigo), que no tocan el contenido público ni la página del curso (/curso-estandar-ia no empieza con /estandar). Incluye la línea «Content-Signal: search=yes, ai-input=yes, ai-train=no», que usa la sintaxis de señales de contenido (la promueve Cloudflare): es una preferencia declarada de no usar el contenido para entrenamiento, no una regla Disallow, así que no cuenta como bloqueo de acceso. No hay marcas de un bloque administrado por una plataforma (sin comentarios tipo «BEGIN Cloudflare Managed content» ni Disallow por bot), por lo que el archivo parece escrito por el propio sitio. Además existe /llms.txt (bonus informativo, no sube el puntaje).

*Evidencia:*
- robots.txt: «User-agent: * / Allow: / / Disallow: /estandar / Disallow: /api/ / Disallow: /reenviar-codigo»
- robots.txt: «Content-Signal: search=yes, ai-input=yes, ai-train=no» (señal, no bloqueo)
- Script: GPTBot, ClaudeBot, PerplexityBot y Google-Extended permitidos; también OAI-SearchBot, ChatGPT-User, anthropic-ai, CCBot, Applebot-Extended y Bytespider
- llms.txt existe en https://somosgreenia.com/llms.txt (bonus)
- Sitemap declarado: https://somosgreenia.com/sitemap.xml

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Predominan párrafos cortos (18 párrafos, promedio 25 palabras, ninguno largo), hay listas donde corresponde (cifras de la huella, recursos gratuitos) y cada sección trata un solo tema, con encabezados claros. Los detalles menores son fragmentos decorativos como "01", "Gratis" o "Descúbrelo ↓", y que las tarjetas de cifras se leen pegadas ("0,24–0,34 WhEnergía de…"). No hay tablas, pero las cifras caben bien en una lista.

*Evidencia:*
- 18 párrafos, promedio 25 palabras, 0 largos
- 7 ítems de lista: "Test de hábitos: 10 preguntas de sí o no.", "Kit IA con criterio: un método de 6 pasos y 5 plantillas."
- Secciones de ~40 palabras con un tema cada una

#### AEO 8 · Identidad clara y consistente: 2/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «somosgreenia» es el mismo en <title>, og:site_name, pie (© 2026 somosgreenia) y en el name de Organization y WebSite. El contacto coincide entre página y schema (hola@somosgreenia.com y +57 319 532 9245, la versión +573195329245 es solo el formato del enlace tel:), y la ubicación «Bogotá, Colombia» del pie corresponde a «Bogotá, CO» del schema. Las redes (Instagram @somos.greenia, LinkedIn, Substack) están enlazadas en el pie y repetidas en sameAs. Al ser un negocio en línea, no se exige dirección física.

*Evidencia:*
- Nombre: title «… · somosgreenia», og:site_name «somosgreenia», schema Organization/WebSite name «somosgreenia», pie «© 2026 somosgreenia»
- Pie: «Contacto hola@somosgreenia.com +57 319 532 9245 Bogotá, Colombia»; schema Organization: telephone «+57 319 532 9245», email «hola@somosgreenia.com», address «Bogotá, CO»
- Descripción del pie igual a la del schema Organization: «La marca que te enseña a usar la IA con responsabilidad y eficiencia, sin tecnicismos.»; la meta description la amplía sin contradecirla
- Enlaces en pie: instagram.com/somos.greenia, linkedin.com/in/oscar-hurtado-greenia, odhs.substack.com; los tres aparecen en sameAs de Organization
- Matices menores: el LinkedIn es un perfil personal (/in/), no una página de empresa; el handle de Substack («odhs») no lleva la marca; address del schema es texto simple, no PostalAddress

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Las afirmaciones importantes vienen con datos verificables: precio, rangos de energía y agua con equivalencias, número de recursos, fuentes con año y fecha de actualización. Las únicas frases genéricas son los lemas cortos de las tarjetas ("Claridad, no jerga", "Responsabilidad sin freno"), que son una parte mínima del contenido.

*Evidencia:*
- "$49.900 COP · pago único" y "hasta 3 dispositivos"
- "0,24–0,34 Wh… un bombillo LED de 10 W encendido cerca de 2 minutos"
- "944 Wh Un video de 5 segundos generado con IA: lo mismo que unas 3.000 consultas de texto"
- "Fuentes: Google (Elsworth et al.), 2025; OpenAI, 2025; MIT Technology Review, 2025"
- "10 mitos revisados con 14 fuentes"; "Actualizado el 15 de noviembre de 2026"

#### AEO 10 · Señales de confianza: 2/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Hay tres señales claras: se nombra a quien opera el sitio («somosgreenia la opera Oscar Daniel Hurtado Suárez desde Bogotá»), se ve la fecha de actualización («Actualizado el 15 de noviembre de 2026», con <time> y dateModified 2026-11-15) y existe «Sobre Nosotros» en el menú y el pie, además de las FAQ «¿Qué es somosgreenia?» y «¿Quién está detrás…?». La cuarta señal es parcial: se citan fuentes por nombre y año (Google, OpenAI, MIT Technology Review) pero sin enlace, y no hay testimonios ni reseñas. Para llegar a una señal sólida en fuentes, conviene enlazarlas y añadir testimonios con nombre; la fecha coincide con el día de la auditoría, así que no se pudo confirmar que sea una fecha editorial real y no una generada automáticamente.

*Evidencia:*
- Texto FAQ: «somosgreenia la opera Oscar Daniel Hurtado Suárez desde Bogotá, Colombia»; sin byline, sin meta author ni Person en el schema, mencionaEquipo=false
- Pie: «Actualizado el 15 de noviembre de 2026»; <time> 2026-11-15; WebPage.dateModified 2026-11-15
- Enlace «Sobre Nosotros» (/sobre-nosotros) en nav y pie; no se revisó el contenido de esa página porque la evidencia solo cubre la home
- Fuentes: «Fuentes: Google (Elsworth et al.), 2025; OpenAI, 2025; MIT Technology Review, 2025», sin enlaces externos (fuentesExternas=0)
- Testimonios: citas=0, schemaReview=false, sin encabezado de reseñas

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 9 · Móvil** (1/2): Agrega padding vertical a los enlaces del menú («Inicio», «Recursos Gratuitos», «Blog», «Certifícate con Nosotros», «Sobre Nosotros») y al enlace de Instagram para que midan al menos 24 px de alto, idealmente 44 px, con separación entre filas.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
