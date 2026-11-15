# Calificación SEO + AEO: https://github.com/delta007x-b2b/reto-ser-visible-con-las-ias

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 44.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **12** | 20 | 60% |
| AEO | **5** | 16 (de 20) | 31% |
| **Total** | **17** | 36 (de 40) | 47% |

⚠ **Calificación incompleta:** faltan aeo-5, aeo-6. Los totales solo suman lo evaluado.

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente |
| 2 | Descripción y vista al compartir | ■□ 1/2 | Script | agente |
| 3 | Estructura de encabezados | ■□ 1/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | ■□ 1/2 | Agente | agente |
| 5 | Indexable | ■□ 1/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | □□ 0/2 | Script | agente |
| 7 | Imágenes | ■■ 2/2 | Script + Lighthouse | agente (ajustó al script) |
| 8 | Velocidad | ■□ 1/2 | Lighthouse | agente |
| 9 | Móvil | ■□ 1/2 | Lighthouse + captura móvil | agente |
| 10 | Enlaces y URLs | ■■ 2/2 | Script | agente |

## Rúbrica AEO: que los buscadores con IA usen la página como respuesta

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Respuesta directa arriba | ■□ 1/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | □□ 0/2 | Agente | agente |
| 3 | Preguntas frecuentes | □□ 0/2 | Agente | agente |
| 4 | Datos estructurados | □□ 0/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | n/e | Script: compara el HTML crudo con la página ya cargada | omitido por el agente |
| 6 | Acceso para bots de IA | n/e | Script | omitido por el agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | □□ 0/2 | Agente + script | agente |
| 9 | Datos concretos | ■□ 1/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 60 caracteres: «GitHub - delta007x-b2b/reto-ser-visible-con-las-ias · GitHub». Nombra el repositorio y su tema (reto, ser visible con las IAs), así que no es genérico. Es la plantilla fija de GitHub (repite «GitHub» al inicio y al final), no un título escrito para el proyecto; el tema solo aparece por el nombre del repositorio.

*Evidencia:*
- 1 etiqueta <title>, 60 caracteres
- «GitHub - delta007x-b2b/reto-ser-visible-con-las-ias · GitHub»
- H1 de la página: «B2BusinessTeam · Reto "Ser visible con las IAs"»

#### SEO 2 · Descripción y vista al compartir: 1/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

Existen meta description, og:title, og:description y og:image, y la imagen es una URL absoluta (https://opengraph.githubassets.com/…). Pero la descripción mide 102 caracteres (fuera de 140–160) y es el texto automático de GitHub: «Contribute to delta007x-b2b/reto-ser-visible-con-las-ias development by creating an account on GitHub.». No dice de qué trata el proyecto ni invita a verlo, porque el campo About del repositorio está vacío («No description, website, or topics provided.»). Esto refleja a GitHub en parte, pero el dueño sí puede cambiarlo.

*Evidencia:*
- meta description: 102 caracteres, texto genérico de GitHub
- og:title: «GitHub - delta007x-b2b/reto-ser-visible-con-las-ias»
- og:image absoluta en opengraph.githubassets.com; twitter:card summary_large_image
- About del repositorio: «No description, website, or topics provided.»

*Cómo mejorarlo:*
- Llena el campo About (Description) del repositorio con una frase de 100–140 caracteres que diga qué hace el proyecto, por ejemplo: «Reto Hostinger: cómo hacer que un sitio sea visible para buscadores y asistentes de IA (SEO + AEO)». GitHub usa ese texto en la meta description y en og:description.
- Agrega el sitio publicado en el campo Website y 3–5 topics (seo, aeo, hackathon) para que la vista al compartir y la descripción tengan contexto real.

#### SEO 3 · Estructura de encabezados: 1/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 claro («B2BusinessTeam · Reto "Ser visible con las IAs"») y el README sigue un orden lógico: H1 → H2 «Qué se trabajó para SEO y AEO» → H2 «Estructura», sin saltos a H4. Sin embargo, de 24 encabezados, 22 son de la interfaz de GitHub y se usan como etiquetas, no como estructura: «Navigation Menu», «Repository navigation», «Latest commit», «History», «Footer», y H3 como «Stars», «Watchers», «Forks» (repetidos dos veces); aparecen 13 antes del H1 y uno está mal formado («Contributors1 (1)»). Ese ruido viene de GitHub; el contenido propio tiene solo 2 H2 y ningún H3.

*Evidencia:*
- Resumen: 1 H1, 14 H2, 9 H3, 0 H4–H6
- El script marca «inicio → H2 (Navigation Menu)»: hay H2 antes del H1
- Encabezados de interfaz: «Navigation Menu», «Folders and files», «Footer», «Stars», «Watchers», «Forks»
- README propio: solo «Qué se trabajó para SEO y AEO» y «Estructura»

*Cómo mejorarlo:*
- Amplía el README con más secciones H2 y subsecciones H3 que describan el contenido, por ejemplo «Cómo se aplicó el SEO técnico» y «Cómo se aplicó el AEO» con H3 por criterio.
- Evita usar encabezados dentro del README solo para dar formato (negritas o listas sirven mejor). Los H2/H3 del menú, la barra lateral y el pie no se pueden cambiar mientras el sitio sea una página de GitHub.

#### SEO 4 · Tema claro y contenido suficiente: 1/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema se entiende en el H1 y en el README (B2BusinessTeam, SEO y AEO), pero el título es "GitHub - delta007x-b2b/reto-ser-visible-con-las-ias · GitHub" y no nombra a B2BusinessTeam, y el primer párrafo del contenido es el texto automático de GitHub "No description, website, or topics provided.". El script cuenta 484 palabras, pero incluye la tabla de archivos de GitHub y el mensaje de commit repetido unas 12 veces; el README propio aporta unas 200 palabras útiles, por debajo de 300. Parte de esto es resultado de GitHub (título y primer bloque los genera la plataforma), pero el repositorio sí controla su descripción y su nombre.

*Evidencia:*
- Título: "GitHub - delta007x-b2b/reto-ser-visible-con-las-ias · GitHub"
- H1: "B2BusinessTeam · Reto \"Ser visible con las IAs\""
- Primer párrafo de main: "No description, website, or topics provided."
- "Sitio B2BusinessTeam optimizado para SEO y AEO" se repite en cada fila de la tabla de archivos
- README propio: ≈200 palabras (un párrafo corto, 6 viñetas y una tabla de 8 filas)

*Cómo mejorarlo:*
- Llena la descripción del repositorio (campo About) con el tema, por ejemplo: «Sitio web de B2BusinessTeam, agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA». GitHub la usa en el título, la meta description y el primer bloque del contenido.
- Renombra el repositorio para que incluya el tema, por ejemplo «b2businessteam-sitio-web», así el título de la página queda «GitHub - delta007x-b2b/b2businessteam-sitio-web: Sitio web de B2BusinessTeam…».
- Amplía el README a 300 palabras útiles o más con una sección sobre qué ofrece B2BusinessTeam (servicios, proceso, a quién atiende) además de la parte técnica de SEO y AEO.

#### SEO 5 · Indexable: 1/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

No hay noindex (ni en meta robots ni en X-Robots-Tag) y la página es HTTPS, así que es indexable. Pero no se detectó ningún <link rel="canonical"> y el <html> declara lang="en" mientras el README y el H1 están en español (la interfaz de GitHub sí está en inglés). Con canonical ausente y el idioma declarado distinto al del contenido propio, el criterio queda a medias. El script recibió 403 en su primera petición simple; la versión renderizada sí respondió 200. Ni el canonical ni el lang los controla el dueño del repositorio.

*Evidencia:*
- metaRobots: null; xRobotsTag: null
- canonicales: [] (no hay canonical)
- lang="en"; README en español
- urlFinal con https; statusHttp 200 (renderizado)

*Cómo mejorarlo:*
- Para controlar canonical y lang, publica el contenido en un sitio propio (por ejemplo con GitHub Pages) con <link rel="canonical" href="https://tu-dominio/"> y <html lang="es">.
- Mientras tanto, usa la URL del repositorio como la única que compartes, para no diluir señales entre variantes de URL.

#### SEO 6 · robots.txt y sitemap.xml: 0/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

El script no encontró robots.txt ni sitemap: https://github.com/robots.txt y las cuatro rutas de sitemap probadas respondieron 403, y el archivo guardado dice «(no existe robots.txt)». No bloquea el sitio, pero con 0 sitemaps declarados y 0 URL listadas el criterio no se cumple. Este resultado refleja a GitHub: un repositorio no puede tener su propio robots.txt ni sitemap.xml, y el 403 pudo ser un bloqueo al cliente automatizado, no una ausencia real, por eso la confianza es baja.

*Evidencia:*
- robots.txt: status 403 en https://github.com/robots.txt
- sitemap.xml, sitemap_index.xml, sitemap-index.xml y wp-sitemap.xml: 403
- sitemapsDeclarados: []; 0 URL en muestra
- evidencia/robots.txt: «(no existe robots.txt)»

*Cómo mejorarlo:*
- Publica el proyecto en un dominio propio (por ejemplo con GitHub Pages) y agrega en la raíz un robots.txt con «User-agent: *», «Allow: /» y la línea «Sitemap: https://tu-dominio/sitemap.xml».
- Genera un sitemap.xml con las páginas reales del sitio, en el mismo dominio y protocolo, y envíalo a Google Search Console.

#### SEO 7 · Imágenes: 2/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

La página solo tiene 1 imagen con contenido (el avatar del autor, alt «delta007x-b2b») y su alt es válido (100%); ninguna imagen pesa más de 300 KB (total 264 KB). Los avisos de Lighthouse (modern-image-formats, uses-responsive-images) vienen de 5 miniaturas PNG de 26–63 KB con alt="" que son promociones del menú de GitHub, no del proyecto, y no son imágenes con contenido. Este resultado refleja a GitHub y no al repositorio.

*El script dio 1/2; el agente lo ajustó a 2/2. El script dio 1 porque el check lighthouseImagenes falló. Lo subo a 2 porque las imágenes que marca Lighthouse son miniaturas decorativas de la interfaz de GitHub (alt vacío, ≤ 63 KB), no imágenes con contenido del proyecto, y la única imagen con contenido cumple alt y peso. El criterio solo exige alt descriptivo y peso razonable en imágenes con contenido.*

*Evidencia:*
- totalImagenes: 11; conContenido: 1; conAltValido: 1; sinAlt: []
- altVacioEnImagenesGrandes: []; imagenesPesadas: []; pesoTotalImagenesKB: 264
- Imágenes marcadas por Lighthouse: github.githubassets.com/assets/changelog-*.png, copilot-*.png, universe-*.png, platform-*.png (alt vacío, decorativas, de GitHub)
- Las ilustraciones WebP del proyecto (carpeta img/) solo se mencionan en el README; no se renderizan en esta página

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Confirmo el puntaje del script: de las tres métricas solo CLS cumple (0.0002 < 0.1); el rendimiento es 44 (mínimo 80) y el LCP es 11.47 s (máximo 2.5 s). Es una sola medición de Lighthouse móvil y varía entre corridas y equipos, pero la distancia a los umbrales es grande. Este resultado refleja la carga del CSS/JS de GitHub, no del proyecto; el servidor respondió rápido (290 ms).

*Evidencia:*
- Rendimiento 44; LCP 11,470 ms; FCP 9,485 ms; TBT 481 ms; CLS 0.0002
- render-blocking-resources: ahorro estimado de 1,140 ms (CSS de github.githubassets.com)
- unused-javascript: ahorro estimado de 608 KiB
- server-response-time: documento raíz en 290 ms (sin problema)

*Cómo mejorarlo:*
- Mide el sitio publicado en Hostinger (la URL del dominio, no el repositorio): el README dice que sirve HTML ya renderizado y fuentes propias, y ahí sí puedes llevar el rendimiento a 80 o más.
- En el sitio publicado, reduce el JavaScript sin usar (React/ReactDOM en vendor/) cargándolo solo tras la primera interacción, como ya describe el README, y confirma que no bloquee el render.
- En el sitio publicado, precarga la imagen o fuente que sea el elemento LCP y sírvela en WebP con tamaños responsivos para mantener el LCP por debajo de 2.5 s.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport (width=device-width), no hay scroll horizontal y 0% del texto mide menos de 12 px. En las capturas la página se ve bien: sin contenido cortado ni encimado, menú de hamburguesa visible arriba a la derecha, sin banner de cookies ni pop-up, y el README se lee sin zoom. Queda en 1 porque 13 de 58 enlaces miden menos de 24 px de alto (por ejemplo «Readme» 78×17, «Activity» 74×17, «Report repository» 115×17); el enlace «Skip to content» de 1×1 es un enlace oculto de accesibilidad y no cuenta como falla. Este resultado refleja la interfaz de GitHub, no al proyecto.

*Evidencia:*
- viewport="width=device-width"; desbordeHorizontalPx: 0
- textoLegible: 0% del texto menor a 12px (2,111 caracteres)
- objetivosTactiles: 13 de 58 menores a 24 px; ejemplos: Readme 78×17, Activity 74×17, 0 forks 71×21
- movil-arriba.png: sin elementos encimados, menú hamburguesa visible, sin overlays
- movil-completa.png (tomada hasta 3000 px de alto): README legible, tabla de estructura sin cortes; no se revisó el pie de página

*Cómo mejorarlo:*
- Evalúa el sitio publicado en Hostinger en lugar del repositorio, porque ahí controlas el tamaño de los botones y enlaces.
- En el sitio publicado, asegura que enlaces y botones midan al menos 24×24 px (idealmente 44×44 px) o tengan separación suficiente entre sí, sobre todo los de navegación y los de llamada a la acción.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú está presente (51 enlaces internos distintos), 0 enlaces rotos en los 40 revisados, 0 anclas genéricas tipo «clic aquí» o «leer más» y Lighthouse aprueba «Links have descriptive text». Las URLs son legibles en su mayoría (7 de 74 poco legibles, 9%, casi todas de login/signup con parámetros y hashes de commit de GitHub). Salvedades: el script probó solo 40 de 73 enlaces internos únicos, y 5 enlaces del menú (login, platform, copilot, actions, code-quality) dieron 403 y quedan sin verificar, no rotos. Además, el menú y la mayoría de los enlaces son de GitHub, no del proyecto.

*Evidencia:*
- 0 rotos de 40 revisados (límite de 40 de 73 enlaces internos)
- sinVerificar: 5 enlaces con 403 (login, /platform, /features/copilot, /features/actions, /features/code-quality)
- Enlaces genéricos: 0; 1 enlace sin texto (la URL del propio repositorio)
- URLs poco legibles: 7 de 74 (login, signup, report-content, hashes de commit)

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

El primer texto del contenido es el vacío de GitHub ("No description, website, or topics provided."), y la respuesta real llega hasta el README. Ahí la primera frase dice qué es y qué ofrece ("agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA"), pero no dice para quién, y la segunda frase habla de la tecnología del sitio, no del servicio. Parte del retraso se debe al diseño de GitHub, que pone su interfaz antes del README.

*Evidencia:*
- "Sitio de B2BusinessTeam, agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA."
- "Es un sitio estático: no necesita compilación. Hostinger publica el contenido de este repositorio tal cual en public_html."
- Bloque About: "No description, website, or topics provided."

*Cómo mejorarlo:*
- Abre el README con una respuesta de 40 a 60 palabras, por ejemplo: «B2BusinessTeam es una agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA para empresas B2B. Este repositorio contiene su sitio web estático, optimizado para SEO y AEO, para que buscadores y asistentes de IA lo encuentren y lo citen.» Ajusta el público a tu cliente real.
- Copia esa misma frase en el campo About del repositorio, para que también sea lo primero que se lea en la página.

#### AEO 2 · Encabezados en forma de pregunta: 0/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Ningún encabezado es una pregunta real que haría un usuario. El único que el script marcó, "Qué se trabajó para SEO y AEO", es una frase informativa sin signos de pregunta, no algo que alguien teclearía. Los demás H2 son etiquetas de la interfaz de GitHub (About, History, Releases, Languages). El README dice que las preguntas frecuentes viven como H2 en index.html, pero eso no aparece en esta página de GitHub.

*Evidencia:*
- H2 del README: "Qué se trabajó para SEO y AEO" y "Estructura"
- H2 de GitHub: "Navigation Menu", "About", "Latest commit", "History", "Releases", "Languages"
- README: "Preguntas frecuentes como encabezados H2, con la respuesta justo debajo" (describe index.html, no esta página)

*Cómo mejorarlo:*
- Convierte los H2 del README en preguntas con la respuesta en la primera frase, por ejemplo: «## ¿Qué hace B2BusinessTeam?» seguido de «Construye sistemas de adquisición de clientes con IA desde Quito, Ecuador.»
- Cambia «Qué se trabajó para SEO y AEO» por «## ¿Qué se hizo para que el sitio sea visible para buscadores y asistentes de IA?» y empieza la respuesta con «Se agregó título, meta description, canonical, Open Graph, JSON-LD, robots.txt, sitemap.xml y llms.txt.»
- Agrega «## ¿Cómo se publica este sitio?» con la respuesta «Es un sitio estático: Hostinger publica el contenido del repositorio tal cual en public_html, sin compilar.»

#### AEO 3 · Preguntas frecuentes: 0/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

No hay una sección de preguntas frecuentes visible en esta página. Los 14 aria-expanded y el único details/summary que detectó el script son menús de la interfaz de GitHub. El README menciona FAQPage y "preguntas visibles", pero solo habla de ellas y no las muestra. El FAQ de index.html, si existe, no está en el contenido que ve quien abre este repositorio.

*Evidencia:*
- El script no encontró encabezado ni sección de FAQ (encabezadoFaq: null, seccionFaq: null)
- README: "Datos estructurados JSON-LD: Organization, WebSite, Service y FAQPage, que coincide con las preguntas visibles" (solo lo menciona)
- Ninguna pregunta con su respuesta aparece en el texto de la página

*Cómo mejorarlo:*
- Agrega al README una sección «## Preguntas frecuentes» con 3 a 5 preguntas y respuestas de 1 a 3 frases, por ejemplo: «¿Qué es B2BusinessTeam? Es una agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA.»
- Incluye «¿Este sitio necesita compilación? No. Es un sitio estático y Hostinger publica el contenido del repositorio tal cual en public_html.» y «¿Permite que los bots de IA lo lean? Sí, el robots.txt los permite y hay un llms.txt.»
- Añade las preguntas que de verdad hacen tus clientes (qué incluye el servicio, cuánto tarda, cómo contactar) y mantén las mismas en el FAQPage de index.html.

#### AEO 4 · Datos estructurados: 0/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

La página renderizada de github.com/delta007x-b2b/reto-ser-visible-con-las-ias no trae ningún bloque JSON-LD (cantidadBloques: 0, sin nodos, sin tipos de schema.org). Es una página de repositorio de GitHub, así que el HTML lo controla GitHub y el autor no puede añadir schema aquí. El README del repo afirma que el sitio publicado en Hostinger (index.html) tiene Organization, WebSite, Service y FAQPage, pero eso no está en esta URL y no se pudo comprobar con esta evidencia.

*Evidencia:*
- pagina.json: jsonld.cantidadBloques = 0, nodos = [], invalidos = []
- criterio aeo-4: hayJsonLd falló ("0 bloque(s) JSON-LD"); tipos = []
- README del repo (dato de un tercero, no verificado): "Datos estructurados JSON-LD: Organization, WebSite, Service y FAQPage" en el sitio de Hostinger

*Cómo mejorarlo:*
- Evalúa la URL del sitio ya publicado en Hostinger (donde vive index.html) y no la página del repositorio en GitHub, porque el schema de esta URL no se puede modificar.
- Agrega la URL del sitio publicado en el campo Website de «About» del repositorio y en la primera línea del README, para que buscadores y asistentes lleguen a la página que sí trae el JSON-LD de Organization/FAQPage.
- Valida el JSON-LD de index.html en validator.schema.org y confirma que name, url, logo, teléfono/dirección y las preguntas del FAQPage coincidan con el texto visible del sitio.

#### AEO 5 · Contenido legible sin JavaScript: sin evaluar
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

- ❌ El HTML inicial trae 12% del texto que ve el usuario (59 de 484 palabras)
- ❌ El H1 aparece solo después de ejecutar JavaScript
- ❌ 59 palabras de contenido sin JavaScript

*Nota:* Regla: ≥ 80% = 2, 40–80% = 1, < 40% = 0.

*No se pudo calificar.*

#### AEO 6 · Acceso para bots de IA: sin evaluar
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

- ✅ GPTBot permitido
- ✅ ClaudeBot permitido
- ✅ PerplexityBot permitido
- ✅ Google-Extended permitido

*Nota:* El llms.txt se reporta como bonus informativo: no cambia el puntaje (la escala está topada en 2).

*No se pudo calificar.*

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

El README está bien armado para extraerse: párrafos de una o dos frases (promedio de 12 palabras, ninguno largo), una lista de 6 viñetas con frases completas y una tabla de 8 filas "Ruta | Contenido". Cada sección trata un solo tema (qué se trabajó, estructura). El ruido fragmentado alrededor ("0 stars", "Watchers", menús) es de la interfaz de GitHub y no refleja cómo está escrito el proyecto.

*Evidencia:*
- 4 párrafos, promedio de 12 palabras, 0 párrafos largos
- Lista de viñetas: "Título, meta description, canonical, lang y etiquetas Open Graph."
- Tabla: "index.html | Página completa ya renderizada, con SEO y datos estructurados"
- Secciones separadas: "Qué se trabajó para SEO y AEO" y "Estructura"

#### AEO 8 · Identidad clara y consistente: 0/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

La identidad que ven los bots en esta URL es la de GitHub, no la del proyecto. El <title> y el nombre del sitio (og:site_name) dicen «GitHub», el pie dice «© 2026 GitHub, Inc.», y solo el H1 del README dice «B2BusinessTeam». No hay JSON-LD, ni teléfono, ni correo, ni dirección en la página, y las únicas redes enlazadas son de GitHub. La descripción meta es la genérica de GitHub («Contribute to … by creating an account on GitHub») y el cuadro About del repo dice «No description, website, or topics provided», lo que contradice al README. Parte del resultado refleja a GitHub (plantilla de título, og:site_name, pie, ausencia de schema), pero el proyecto sí pudo llenar el cuadro About y el sitio web del repo.

*Evidencia:*
- title: «GitHub - delta007x-b2b/reto-ser-visible-con-las-ias · GitHub»; og:site_name: «GitHub»
- H1 del README: «B2BusinessTeam · Reto "Ser visible con las IAs"»; pie: «© 2026 GitHub, Inc.»
- Schema JSON-LD: 0 bloques; sameAs: vacío
- Teléfonos, correos y dirección en la página: ninguno (tel: [], mailto: [])
- meta description: «Contribute to delta007x-b2b/reto-ser-visible-con-las-ias development by creating an account on GitHub.»
- Cuadro About del repo: «No description, website, or topics provided.»

*Cómo mejorarlo:*
- Llena el cuadro About del repositorio con una descripción y el sitio web oficial, por ejemplo: «B2BusinessTeam, agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA», y agrega los topics.
- Agrega al README el correo o teléfono de contacto, la ciudad y los enlaces a los perfiles oficiales de la marca (LinkedIn, Instagram, X u otros), con el mismo nombre «B2BusinessTeam» que el sitio publicado.
- Enlaza desde el README la URL del sitio publicado en Hostinger, donde el JSON-LD de Organization con sameAs sí puede reafirmar nombre, contacto y redes, y usa ese dominio como entidad principal en lugar del repositorio.

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Hay algunos datos concretos y verificables (Quito, Ecuador; formato WebP; los tipos de JSON-LD; los nombres de archivos), y no hay frases vacías tipo "somos los mejores". Pero casi todos los números que contó el script son de GitHub (0 estrellas, 2 commits, fechas de commit, 71.5 % HTML y 28.5 % JavaScript), y los 2 "precios" son falsos positivos. Del servicio de B2BusinessTeam no hay una sola cifra, caso ni ejemplo.

*Evidencia:*
- "agencia de Quito, Ecuador"
- "Datos estructurados JSON-LD: Organization, WebSite, Service y FAQPage"
- "Imágenes en WebP y fuentes servidas desde el propio sitio"
- Cifras de GitHub: "HTML71.5%", "JavaScript28.5%", "2 Commits", "Nov 15, 2026"
- "sistemas de adquisición de clientes con IA" sin ningún número, precio o caso

*Cómo mejorarlo:*
- Agrega al README datos verificables del servicio, con este formato: «Atendemos a N empresas B2B desde AAAA. Caso: [cliente] pasó de X a Y prospectos al mes en Z meses.» Usa tus cifras reales.
- Incluye resultados medibles del sitio, por ejemplo la puntuación de Lighthouse móvil, el número de preguntas del FAQ o el número de páginas del sitemap.xml.
- Si hay planes o precios, publícalos con montos y plazos, por ejemplo «Diagnóstico inicial: USD X, entrega en N días».

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Hay señales, pero débiles. Quién está detrás: solo el usuario «delta007x-b2b» (1 contribuidor, con avatar), sin nombre real; el README menciona a B2BusinessTeam pero no presenta personas. Fecha: el último commit aparece como «Nov 15, 2026», visible y reciente, aunque es una fecha del repositorio y no un dateModified del contenido. «Acerca de»: el cuadro About está vacío y el único enlace «About» del menú es el de GitHub, no del proyecto; el README da solo una línea de descripción. No hay testimonios, reseñas ni fuentes citadas con enlace. Parte del resultado refleja a GitHub, que no deja agregar estas secciones fuera del README.

*Evidencia:*
- Autor: sin meta author, rel=author ni JSON-LD; solo «Contributors 1 (1) delta007x-b2b» y «Latest commit … delta007x-b2b»
- Fecha: «Add files via upload · Nov 15, 2026»; sin <time> propio, dateModified ni «actualizado»
- About del repo: «No description, website, or topics provided.»; el enlace «About» de la nav (github.com/about) es de GitHub
- README: «Sitio de B2BusinessTeam, agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA» (una línea, sin equipo ni nombres)
- Testimonios: citas 0, schemaReview false; ninguna sección de reseñas o clientes
- Fuentes externas con enlace en el contenido del proyecto: ninguna (el 1 que contó el script es un enlace de la interfaz de GitHub)

*Cómo mejorarlo:*
- Agrega al README una sección «Quiénes somos» con los nombres y roles del equipo de B2BusinessTeam y un enlace a su perfil profesional (LinkedIn u otro).
- Incluye en el README o en el sitio publicado 2 o 3 testimonios de clientes con nombre, empresa y, si es posible, enlace verificable, además de casos o resultados con fuente.
- Muestra una fecha de «Última actualización» en el README y declara dateModified en el JSON-LD del sitio publicado, y llena el cuadro About del repo con una descripción y el sitio web.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 6 · robots.txt y sitemap.xml** (0/2): Publica el proyecto en un dominio propio (por ejemplo con GitHub Pages) y agrega en la raíz un robots.txt con «User-agent: *», «Allow: /» y la línea «Sitemap: https://tu-dominio/sitemap.xml».
2. **AEO 2 · Encabezados en forma de pregunta** (0/2): Convierte los H2 del README en preguntas con la respuesta en la primera frase, por ejemplo: «## ¿Qué hace B2BusinessTeam?» seguido de «Construye sistemas de adquisición de clientes con IA desde Quito, Ecuador.»
3. **AEO 3 · Preguntas frecuentes** (0/2): Agrega al README una sección «## Preguntas frecuentes» con 3 a 5 preguntas y respuestas de 1 a 3 frases, por ejemplo: «¿Qué es B2BusinessTeam? Es una agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA.»
4. **AEO 4 · Datos estructurados** (0/2): Evalúa la URL del sitio ya publicado en Hostinger (donde vive index.html) y no la página del repositorio en GitHub, porque el schema de esta URL no se puede modificar.
5. **AEO 8 · Identidad clara y consistente** (0/2): Llena el cuadro About del repositorio con una descripción y el sitio web oficial, por ejemplo: «B2BusinessTeam, agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA», y agrega los topics.
6. **SEO 2 · Descripción y vista al compartir** (1/2): Llena el campo About (Description) del repositorio con una frase de 100–140 caracteres que diga qué hace el proyecto, por ejemplo: «Reto Hostinger: cómo hacer que un sitio sea visible para buscadores y asistentes de IA (SEO + AEO)». GitHub usa ese texto en la meta description y en og:description.
7. **SEO 3 · Estructura de encabezados** (1/2): Amplía el README con más secciones H2 y subsecciones H3 que describan el contenido, por ejemplo «Cómo se aplicó el SEO técnico» y «Cómo se aplicó el AEO» con H3 por criterio.
8. **SEO 4 · Tema claro y contenido suficiente** (1/2): Llena la descripción del repositorio (campo About) con el tema, por ejemplo: «Sitio web de B2BusinessTeam, agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA». GitHub la usa en el título, la meta description y el primer bloque del contenido.
9. **SEO 5 · Indexable** (1/2): Para controlar canonical y lang, publica el contenido en un sitio propio (por ejemplo con GitHub Pages) con <link rel="canonical" href="https://tu-dominio/"> y <html lang="es">.
10. **SEO 8 · Velocidad** (1/2): Mide el sitio publicado en Hostinger (la URL del dominio, no el repositorio): el README dice que sirve HTML ya renderizado y fuentes propias, y ahí sí puedes llevar el rendimiento a 80 o más.
11. **SEO 9 · Móvil** (1/2): Evalúa el sitio publicado en Hostinger en lugar del repositorio, porque ahí controlas el tamaño de los botones y enlaces.
12. **AEO 1 · Respuesta directa arriba** (1/2): Abre el README con una respuesta de 40 a 60 palabras, por ejemplo: «B2BusinessTeam es una agencia de Quito, Ecuador, que construye sistemas de adquisición de clientes con IA para empresas B2B. Este repositorio contiene su sitio web estático, optimizado para SEO y AEO, para que buscadores y asistentes de IA lo encuentren y lo citen.» Ajusta el público a tu cliente real.
13. **AEO 9 · Datos concretos** (1/2): Agrega al README datos verificables del servicio, con este formato: «Atendemos a N empresas B2B desde AAAA. Caso: [cliente] pasó de X a Y prospectos al mes en Z meses.» Usa tus cifras reales.
14. **AEO 10 · Señales de confianza** (1/2): Agrega al README una sección «Quiénes somos» con los nombres y roles del equipo de B2BusinessTeam y un enlace a su perfil profesional (LinkedIn u otro).

## Advertencias
- El servidor respondió 403 al cliente simple.
- aeo-5 sin calificar (auditor-aeo-tecnico lo dejó sin evaluar: la evidencia no permitía calificarlo (el puntaje automático del script, 0, no se usa))
- aeo-6 sin calificar (auditor-aeo-tecnico lo dejó sin evaluar: la evidencia no permitía calificarlo (el puntaje automático del script, 2, no se usa))

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
