# Calificación SEO + AEO: https://hago.click/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 83.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **17** | 20 | 85% |
| AEO | **16** | 20 | 80% |
| **Total** | **33** | 40 | 83% |

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
| 8 | Velocidad | ■□ 1/2 | Lighthouse | agente |
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
| 10 | Señales de confianza | ■■ 2/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 54 caracteres: «hago.click — Comunidad para colaborar en Latinoamérica». Incluye la marca y dice de qué trata el sitio (comunidad de colaboración en LatAm), y es coherente con el H1.

*Evidencia:*
- title: «hago.click — Comunidad para colaborar en Latinoamérica»
- 1 etiqueta <title>, 54 caracteres
- No es genérico y coincide con el tema del H1 («Las ideas hacen click. Colabora para hacerlas realidad.»)

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 151 caracteres (dentro de 140–160), explica qué es el sitio y cierra con una frase de invitación («Juntos las hacemos realidad.»). Están og:title, og:description y og:image (URL absoluta https) y además twitter:card summary_large_image.

*Evidencia:*
- description (151 car.): «Comunidad latinoamericana para colaborar en proyectos: conecta ideas, conocimientos, habilidades, herramientas y recursos. Juntos las hacemos realidad.»
- og:image: https://images.hostinger.com/bba8bde2-1477-49df-aa06-3f71ce33c6ea/bba88a90-5130-4b10-a1db-0fe04f50a804.png
- twitter:card = summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 claro («Las ideas hacen click. Colabora para hacerlas realidad.»), 11 H2 y 38 H3 sin saltos de nivel (no hay H4–H6). Los H3 son títulos reales de tarjetas, pasos y preguntas del FAQ bajo su H2; el menú y el pie no usan encabezados solo por estilo.

*Evidencia:*
- Resumen: H1=1, H2=11, H3=38, H4–H6=0; sin saltos
- Estructura temática: H2 «Ideas que podrían hacerse realidad» → H3 de cada ejemplo; H2 «¿Qué necesito para empezar?» → H3 de preguntas frecuentes
- Sin encabezados en la región nav ni en el menú

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (una comunidad latinoamericana para colaborar) aparece en los tres lugares: el título dice «Comunidad para colaborar en Latinoamérica», el H1 «Colabora para hacerlas realidad» y el primer párrafo «hago.click es una comunidad latinoamericana para crecer y generar ingresos colaborando». Hay unas 2,400 palabras en el contenido principal, con secciones distintas y sin relleno tipo lorem ipsum; solo se repiten los avisos de «ejemplo ilustrativo».

*Evidencia:*
- Título: «hago.click — Comunidad para colaborar en Latinoamérica»
- H1: «Las ideas hacen click. Colabora para hacerlas realidad.»
- Primer párrafo: «hago.click es una comunidad latinoamericana para crecer y generar ingresos colaborando»
- ≈2,415 palabras en main/cuerpo (umbral 300)

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 por HTTPS sin redirecciones, no tiene noindex (ni meta robots ni X-Robots-Tag) y el canonical apunta a sí misma (https://hago.click/). El <html> declara lang="es", que coincide con el contenido en español.

*Evidencia:*
- metaRobots: null; X-Robots-Tag: null
- canonical: https://hago.click/ (URL final idéntica)
- lang="es"; contenido en español

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml (200, válido, 15 URL) y el sitemap está declarado en el robots.txt. Los ejemplos son del mismo dominio y protocolo (https://hago.click/, /tengo-una-idea, /quiero-aportar, /piloto, /tema/...). El robots.txt permite todo a los rastreadores de búsqueda y solo bloquea bots de entrenamiento de IA (GPTBot, ClaudeBot, Google-Extended, etc.), no Googlebot ni rutas del sitio. Nota menor: Lighthouse marca «13 errors» en robots.txt porque no reconoce la directiva Content-Signal; no afecta al rastreo.

*Evidencia:*
- robots.txt: «User-agent: * ... Allow: /» y «Sitemap: https://hago.click/sitemap.xml»
- Disallow: / solo para GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot, Bytespider
- sitemap.xml: 15 URL, incluye la página de inicio, mismo dominio https

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 17 imágenes tienen alt descriptivo y de buena calidad (por ejemplo: «Taburete fabricado con plástico reciclado y madera reutilizada, sobre un fondo cálido de estudio.»), sin alt vacíos ni imágenes pesadas (peso total 57 KB, ninguna > 300 KB). Lo único que falla es que Lighthouse marca uses-responsive-images con un ahorro estimado de 48 KiB en tres imágenes servidas a 768 px de ancho; es un detalle menor y queda cerca de 2.

*Evidencia:*
- 17 de 17 imágenes con contenido tienen alt válido (100%); altVacioEnImagenesGrandes: []
- imagenesPesadas: []; pesoTotalImagenesKB: 57
- Lighthouse uses-responsive-images: score 0, ahorro estimado 48 KiB (imágenes de ~46–49 KB y ~33 KB con width=768)
- uses-optimized-images, modern-image-formats y offscreen-images: score 1 (usa AVIF en la imagen principal)

*Cómo mejorarlo:*
- Sirve las tres imágenes marcadas por Lighthouse (hero, «Emprendedora creativa…» y «Prototipo de sensor…») con un ancho cercano al que se muestra en móvil (por ejemplo ?width=600) o agrega srcset/sizes con variantes de 400, 600 y 768 px.
- Haz que el hero use una variante AVIF de ~600 px para móvil en lugar de hero-night-team-v1-768.avif, para recuperar los ~15 KB que Lighthouse estima como ahorro.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Es una sola medición de Lighthouse móvil, que varía entre corridas y equipos. El rendimiento es 83 (cumple ≥ 80) y el CLS es 0.000 (cumple < 0.1), pero el LCP es 3.80 s y no llega a < 2.5 s, así que se cumplen dos de las tres condiciones y el puntaje es 1. El servidor responde rápido (100 ms), por lo que el retraso viene del lado del cliente.

*Evidencia:*
- Rendimiento 83, SEO 92 (Lighthouse 12.8.2, una sola corrida)
- LCP 3,800 ms (máximo 2.5 s); FCP 2,253 ms; TBT 205 ms; Speed Index 2,593 ms
- CLS 0.000
- server-response-time: el documento raíz tardó 100 ms (score 1)
- lcp-discovery-insight con score 0 (el recurso del LCP se descubre tarde); unused-javascript: ahorro de 22 KiB en jsx-runtime-98TrhzpB.js
- Peso total de la página 429 KiB (score 1)

*Cómo mejorarlo:*
- Adelanta la descubierta de la imagen LCP (el hero): agrega <link rel="preload" as="image" fetchpriority="high"> en el HTML inicial y asegúrate de que la imagen no tenga loading="lazy" ni dependa de que arranque el JavaScript para pedirse.
- Sirve el hero desde el mismo dominio (hoy se pide a darkorchid-donkey-829051.hostingersite.com), para evitar una conexión DNS/TLS extra antes del LCP.
- Reduce el JavaScript que bloquea el primer pintado: divide o difiere el bundle jsx-runtime-98TrhzpB.js (22 KiB sin usar) y carga bajo demanda lo que no se ve al inicio, por ejemplo la animación del fondo.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto (width=device-width, initial-scale=1), no hay scroll horizontal y en las capturas el diseño se ve limpio: el menú hamburguesa está visible, no hay banner de cookies ni pop-up que tape la pantalla y los botones principales («Tengo una idea», «Quiero aportar») son grandes. Lo que queda a medias es la legibilidad: 16% del texto mide menos de 12 px (etiquetas en monoespaciada como «ESCENA ILUSTRATIVA CREADA CON IA», «Dos formas de empezar. Un mismo propósito.» y «Explora lo que podríamos crear juntos» se ven muy pequeñas en la captura) y hay enlaces de 15–16 px de alto. Solo vi los primeros ~3,000 px de la captura completa (el resto está recortado).

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desbordeHorizontalPx: 0
- Texto pequeño: 2,343 de 14,771 caracteres (16%) menores a 12 px
- Objetivos táctiles pequeños: «Explora lo que podríamos crear juntos» (181×16 px) y «Volver arriba ↑» (66×15 px); 2 de 66
- Captura movil-arriba.png: botón flotante de pausa (≈40 px) encimado en la esquina inferior izquierda junto al enlace «Explora lo que podríamos crear juntos»
- Captura movil-completa.png: hamburguesa visible en el encabezado, enlace «Saltar al contenido» visible y pegado al logo en la parte superior; sin cortes de contenido ni texto encimado en lo que alcancé a ver

*Cómo mejorarlo:*
- Sube a 12–13 px como mínimo las etiquetas pequeñas en monoespaciada («ESCENA ILUSTRATIVA CREADA CON IA», «EJEMPLOS · NO PROYECTOS REALES», «Dos formas de empezar…») y el texto de apoyo del hero.
- Dale al menos 24 px de alto (idealmente 44 px) a los enlaces «Explora lo que podríamos crear juntos» y «Volver arriba ↑» con padding vertical, y separa el botón flotante de pausa de ese enlace para que no se encimen.
- Revisa que el enlace «Saltar al contenido» solo se muestre al recibir foco con el teclado y no se encime con el logo en la parte superior.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 11 enlaces internos distintos (Tengo una idea, Quiero aportar, Temas, Precios, Acerca de, Contacto, etc.), se revisaron los 14 enlaces internos únicos y ninguno está roto ni quedó sin verificar. No hay anclas genéricas ni enlaces sin texto, Lighthouse aprueba «Links have descriptive text» y las 15 URLs son legibles (/tengo-una-idea, /quiero-aportar, /precios).

*Evidencia:*
- 0 rotos de 14 enlaces internos revisados; sinVerificar: []
- 0 enlaces genéricos y 0 sin texto; Lighthouse link-text: score 1
- URLs legibles: 0 de 15 poco legibles

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Justo después del H1, las dos primeras frases dicen qué es («una comunidad latinoamericana para crecer y generar ingresos colaborando»), para quién («Personas, emprendedores y negocios») y qué ofrece («comparten conocimientos, habilidades y recursos para desarrollar proyectos y ofrecer servicios a quienes van empezando»). Son 31 palabras en dos frases (45 en el párrafo completo), dentro del rango aceptable, y cierra con el dato de que el acceso inicial es sin costo.

*Evidencia:*
- «hago.click es una comunidad latinoamericana para crecer y generar ingresos colaborando.»
- «Personas, emprendedores y negocios comparten conocimientos, habilidades y recursos…»
- «El acceso inicial es sin costo; cada integrante acuerda las condiciones de sus aportaciones.»

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Hay preguntas reales con respuesta en la primera frase: el H2 «¿Cómo se convierte una idea en un primer paso?» se responde con «Compartiendo qué quieres lograr, conectando conocimientos y recursos…», y en la sección de preguntas hay cinco H3 como «¿Cuánto cuesta participar o recibir apoyo?» (responde «El acceso inicial a la plataforma y al piloto es sin costo») y «¿Qué es hago.click y cómo puedo empezar?». El H2 «¿Dónde puede crecer lo que tienes en mente?» es más retórico y no se responde directo, pero no resta frente al resto. El script contó «Quién está detrás de hago.click» como pregunta, pero no lo es.

*Evidencia:*
- H2: «¿Cómo se convierte una idea en un primer paso?» → «Compartiendo qué quieres lograr…»
- H3: «¿Cuánto cuesta participar o recibir apoyo?» → «El acceso inicial… es sin costo»
- H3: «¿Qué es hago.click y cómo puedo empezar?» → «hago.click es una comunidad latinoamericana…»
- H2 retórico sin respuesta directa: «¿Dónde puede crecer lo que tienes en mente?»

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección visible de preguntas («5 respuestas para dar el primer paso», bajo el H2 «¿Qué necesito para empezar?») con cinco preguntas reales y su respuesta completa debajo, sin acordeón colapsado ni dependencia del schema. Cada respuesta mide unas 55–70 palabras; tres tienen 3 frases y dos (costos e ideas/inconformidades) llegan a 4 frases cortas, un exceso menor que no las vuelve largas ni incompletas. Ninguna se limita a «contáctanos».

*Evidencia:*
- «5 RESPUESTAS PARA DAR EL PRIMER PASO» / «¿Qué necesito para empezar?»
- Cinco H3 numerados (01–05), entre ellos «¿Cuánto cuesta participar o recibir apoyo?» y «¿Dónde funciona y qué puedo usar hoy?»
- Respuesta a costos: «El acceso inicial a la plataforma y al piloto es sin costo. Algunas asesorías y servicios pueden ser cobrados…»
- El schema FAQPage existe, pero la sección visible es la que se califica

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 3 bloques JSON-LD válidos de schema.org en el HTML inicial: WebSite, Organization y FAQPage (5 preguntas). Los tipos son adecuados para una comunidad en línea sin local físico, y los datos coinciden con la página: nombre «hago.click», correo contacto@hago.click, descripción igual a la visible, y las 5 preguntas del FAQPage corresponden a las 5 preguntas del acordeón visible. No hay precios, teléfono ni dirección en el schema que puedan contradecir el texto.

*Evidencia:*
- Tipos: WebSite, Organization, FAQPage; @context https://schema.org en los 3 bloques; sin bloques inválidos
- Organization: name «hago.click», url https://hago.click/, email contacto@hago.click, sameAs a github.com/hago-click/sitioweb; coincide con el pie («Contacto: contacto@hago.click»)
- FAQPage con 5 preguntas; texto.md muestra 5 preguntas visibles (01 a 05) en la sección «¿Qué necesito para empezar?»
- Está en el HTML crudo (estaEnHtmlCrudo ok), por lo que los bots sin JavaScript lo ven

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae el 100% del texto que ve el usuario (2415 de 2415 palabras) y el H1 ya está en el HTML crudo. Los encabezados H1, H2 y H3 del HTML crudo coinciden con los de la página renderizada, así que título, secciones y respuestas del FAQ son legibles sin ejecutar JavaScript.

*Evidencia:*
- palabrasHtmlCrudo 2415 / palabrasRenderizado 2415 (proporción 1)
- H1 en el crudo: «Las ideas hacen click.Colabora para hacerlas realidad.»
- Primeras palabras del crudo: «Saltar al contenido», «IDEAS LOCALES. POSIBILIDADES COMPARTIDAS.»

#### AEO 6 · Acceso para bots de IA: 0/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt tiene `Disallow: /` explícito para GPTBot, ClaudeBot y Google-Extended, es decir, 3 de los 4 bots de la rúbrica; solo PerplexityBot está permitido. Es una decisión deliberada (el archivo declara `ai-train=no` y bloquea otros rastreadores de entrenamiento) y sí permite bots de búsqueda y de usuario como OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User y Perplexity-User, pero la rúbrica pide no bloquear los tres bots señalados. Bonus informativo: existe https://hago.click/llms.txt; no cambia el puntaje.

*Evidencia:*
- User-agent: GPTBot → Disallow: /
- User-agent: ClaudeBot → Disallow: /
- User-agent: Google-Extended → Disallow: /
- User-agent: PerplexityBot → Allow: / (permitido)
- Permitidos: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, Perplexity-User; también bloqueados Applebot-Extended, meta-externalagent, Amazonbot y Bytespider
- llms.txt existe en https://hago.click/llms.txt

*Cómo mejorarlo:*
- Cambia los bloques `User-agent: GPTBot`, `User-agent: ClaudeBot` y `User-agent: Google-Extended` de `Disallow: /` a `Allow: /`, para que la rúbrica los considere accesibles.
- Si quieres seguir limitando el entrenamiento de modelos, mantén la línea `Content-Signal: search=yes, ai-input=yes, ai-train=no` en cada bloque en lugar de usar `Disallow`, ya que esa señal expresa la preferencia sin cerrar el acceso.
- Conserva los permisos actuales de OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User y PerplexityBot, y deja el llms.txt como está.

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Los párrafos son cortos (promedio 18 palabras y ninguno largo), hay 96 elementos de lista, 12 listas numeradas y pasos (01, 02, 03) donde corresponde, y cada tarjeta o sección trata un solo tema (un ejemplo, una forma de aportar, un tema). Un detalle menor es que varios encabezados salen pegados al extraerse el texto («ideaen», «quehacerlo», «podríanhacerse»), pero no afecta la estructura.

*Evidencia:*
- 59 párrafos, promedio de 18 palabras, 0 párrafos largos
- 96 ítems de lista y 12 listas numeradas, por ejemplo «Los tres pasos para colaborar bien» (01 Ponle palabras · 02 Encuentra el click · 03 Hazlo en equipo)
- Secciones de un solo tema: «Compartir conocimientos», «Prestar herramientas o equipos», «Tecnología y software»

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «hago.click» y la descripción son idénticos en title, og:title, encabezado, pie (© 2026 hago.click) y en los nodos WebSite y Organization del schema, y el correo contacto@hago.click coincide entre la página y el schema. Falta lo de las redes: la página no enlaza ningún perfil social y el único sameAs es un repositorio de GitHub (hago-click/sitioweb), que no es un perfil oficial de la marca y ni siquiera aparece enlazado en la página.

*Evidencia:*
- Nombre: title «hago.click — Comunidad para colaborar en Latinoamérica»; schema name «hago.click» (WebSite y Organization); pie «© 2026 hago.click» (el script lo recortó a «© 2026 hago», pero texto.md muestra el nombre completo)
- Descripción: meta description, og:description y description del schema son el mismo texto
- Contacto: correo contacto@hago.click en la página y en Organization.email; sin teléfono en ningún lado
- Ubicación: no hay dirección ni mapa; es una comunidad en línea para Latinoamérica, por lo que no se penaliza
- Redes: redes.enPagina vacío; sameAs de Organization = ["https://github.com/hago-click/sitioweb"] y sameAs de WebSite vacío
- og:site_name ausente

*Cómo mejorarlo:*
- Crea o enlaza los perfiles oficiales de la marca (por ejemplo LinkedIn, Instagram o X de hago.click) en el pie de página, con rel="me" o aria-label claros, para que se vean en la página.
- Agrega esos mismos perfiles al arreglo sameAs del nodo Organization (y WebSite) y sustituye o complementa el repositorio de GitHub por el perfil de la organización «github.com/hago-click» solo si es una presencia oficial.
- Añade <meta property="og:site_name" content="hago.click"> y completa el schema Organization con logo y contactPoint (email contacto@hago.click, availableLanguage es) para reforzar la identidad.

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Hay algunos datos concretos (acceso inicial «sin costo», solicitud en /piloto con nombre, correo y rol, correo de contacto, responsable con nombre, «Información actualizada el 15 de noviembre de 2026») y ejemplos específicos (brownies, taburete de plástico reciclado, sensor de calidad del aire). Pero no hay cifras, precios, plazos ni fechas de lanzamiento, y gran parte del texto es aspiracional («El valor está en conectar», «Lo que aportas puede cambiar lo que sigue»). Además, los ejemplos son explícitamente hipotéticos, así que no sirven como casos verificables.

*Evidencia:*
- «El acceso inicial a la plataforma y al piloto es sin costo.»
- «Información actualizada el 15 de noviembre de 2026.»
- Precios, porcentajes y horarios detectados: 0; los números del texto son solo índices (01, 02, TEMA 05)
- «no tienen una fecha de lanzamiento anunciada» y «EJEMPLO HIPOTÉTICO» en los casos

*Cómo mejorarlo:*
- Añade cifras reales del piloto en el primer bloque o en las preguntas frecuentes, por ejemplo: «El piloto inicia con X participantes en [países/ciudades] y la solicitud se responde en X días hábiles», usando solo datos que ya estén definidos.
- En «¿Cuánto cuesta participar o recibir apoyo?» incluye un ejemplo numérico de una asesoría real, por ejemplo: «Una asesoría de costos para un emprendimiento puede acordarse en un rango de MXN X a MXN Y por sesión de X minutos», o aclara que hoy no hay tarifas de referencia.
- Sustituye al menos un ejemplo hipotético por un caso real con resultado medible (qué se hizo, cuánto tiempo tomó, qué se logró), o añade una fecha estimada del siguiente hito del piloto.

#### AEO 10 · Señales de confianza: 2/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Tres de las cuatro señales están visibles: el pie tiene la sección «Quién está detrás de hago.click» con «Responsable: Luis Carlos Olivares Trinidad», la leyenda «Información actualizada el 15 de noviembre de 2026» y © 2026, y hay enlace «Acerca de» (/acerca-de) en nav y pie junto con Contacto, Privacidad y Términos. La señal que falta es la de testimonios o fuentes: no hay testimonios con nombre ni reseñas, y la propia página aclara que los casos son ficticios («no son testimonios ni resultados reales»). No pude abrir /acerca-de para revisar su contenido; el puntaje se basa en la página principal.

*Evidencia:*
- Quién: «Quién está detrás de hago.click · Responsable: Luis Carlos Olivares Trinidad. Contacto: contacto@hago.click» (sin autor en meta, rel=author ni JSON-LD)
- Actualización: «Información actualizada el 15 de noviembre de 2026.» y «© 2026 hago.click»; sin <time> ni dateModified en el schema
- Acerca de: enlace «Acerca de» → https://hago.click/acerca-de en nav y pie
- Testimonios: citas = 0, schemaReview = false; «Escenarios ficticios: no son testimonios ni resultados reales de hago.click»
- Fuentes externas: el conteo de 1 corresponde a un enlace a un video alojado en hostingersite.com, no a una fuente citada

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 6 · Acceso para bots de IA** (0/2): Cambia los bloques `User-agent: GPTBot`, `User-agent: ClaudeBot` y `User-agent: Google-Extended` de `Disallow: /` a `Allow: /`, para que la rúbrica los considere accesibles.
2. **SEO 7 · Imágenes** (1/2): Sirve las tres imágenes marcadas por Lighthouse (hero, «Emprendedora creativa…» y «Prototipo de sensor…») con un ancho cercano al que se muestra en móvil (por ejemplo ?width=600) o agrega srcset/sizes con variantes de 400, 600 y 768 px.
3. **SEO 8 · Velocidad** (1/2): Adelanta la descubierta de la imagen LCP (el hero): agrega <link rel="preload" as="image" fetchpriority="high"> en el HTML inicial y asegúrate de que la imagen no tenga loading="lazy" ni dependa de que arranque el JavaScript para pedirse.
4. **SEO 9 · Móvil** (1/2): Sube a 12–13 px como mínimo las etiquetas pequeñas en monoespaciada («ESCENA ILUSTRATIVA CREADA CON IA», «EJEMPLOS · NO PROYECTOS REALES», «Dos formas de empezar…») y el texto de apoyo del hero.
5. **AEO 8 · Identidad clara y consistente** (1/2): Crea o enlaza los perfiles oficiales de la marca (por ejemplo LinkedIn, Instagram o X de hago.click) en el pie de página, con rel="me" o aria-label claros, para que se vean en la página.
6. **AEO 9 · Datos concretos** (1/2): Añade cifras reales del piloto en el primer bloque o en las preguntas frecuentes, por ejemplo: «El piloto inicia con X participantes en [países/ciudades] y la solicitud se responde en X días hábiles», usando solo datos que ya estén definidos.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
