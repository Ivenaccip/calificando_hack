# Calificación SEO + AEO: https://github.com/1924/hackaton-irremplazables

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 47.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **9** | 20 | 45% |
| AEO | **7** | 18 (de 20) | 39% |
| **Total** | **16** | 38 (de 40) | 42% |

⚠ **Calificación incompleta:** faltan aeo-5. Los totales solo suman lo evaluado.

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■□ 1/2 | Script | agente |
| 2 | Descripción y vista al compartir | ■□ 1/2 | Script | agente (ajustó al script) |
| 3 | Estructura de encabezados | □□ 0/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | □□ 0/2 | Agente | agente |
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
| 6 | Acceso para bots de IA | ■■ 2/2 | Script | agente |
| 7 | Formato fácil de extraer | ■□ 1/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | ■□ 1/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 1/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> y sí describe la página y su tema («sitio web para venta de invitaciones digitales»), pero mide 94 caracteres frente a los 50–60 esperados y Google lo cortaría. El formato «GitHub - usuario/repo: descripción · GitHub» lo genera GitHub, así que el largo y la repetición de la marca reflejan a la plataforma y no una decisión del proyecto.

*Evidencia:*
- <title>: GitHub - 1924/hackaton-irremplazables: sitio web para venta de invitaciones digitales · GitHub
- 94 caracteres, 1 etiqueta <title>
- La marca «GitHub» aparece dos veces y el tema queda al final

*Cómo mejorarlo:*
- Publica el sitio en su propio dominio y define en index.html un <title> de 50–60 caracteres que abra con el tema, por ejemplo «Invitaciones digitales de boda: compra y personaliza en línea».
- Mientras siga viéndose en github.com, acorta el campo About del repositorio (hoy 46 caracteres): cada carácter que pongas ahí se suma al título y hoy el total es 94.

#### SEO 2 · Descripción y vista al compartir: 1/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

Existen meta description, og:title, og:description y og:image (URL absoluta), pero la descripción mide 136 caracteres (menos de 140), mezcla español con texto genérico en inglés de GitHub («Contribute to … by creating an account on GitHub») e invita a contribuir al código, no a conocer o comprar las invitaciones. La og:image es la tarjeta automática de GitHub, no una imagen de la marca. Este texto lo arma GitHub a partir del About del repositorio.

*El script dio 2/2; el agente lo ajustó a 1/2. El script dio 2 porque aceptó 136 caracteres (su rango es 130–165) y que existan las etiquetas og:*. Lo bajo a 1: la descripción queda fuera de 140–160, es en parte texto genérico en inglés y no invita a entrar al sitio.*

*Evidencia:*
- meta description (136 caracteres): sitio web para venta de invitaciones digitales. Contribute to 1924/hackaton-irremplazables development by creating an account on GitHub.
- og:image: https://opengraph.githubassets.com/e9a7c783…/1924/hackaton-irremplazables (URL absoluta, imagen autogenerada)
- twitter:card: summary_large_image

*Cómo mejorarlo:*
- En Settings > Social preview del repositorio sube una imagen propia de 1280×640 con el nombre y una vista del producto, en lugar de la tarjeta automática.
- Reescribe el About en español con un beneficio y de 50–70 caracteres, por ejemplo «Invitaciones digitales de boda con música y enlace propio» (≈57); con el texto fijo de GitHub (≈90) la descripción total queda en 140–160.
- Al publicar el sitio en su dominio, escribe una meta description propia de 140–160 caracteres con llamada a la acción y sus propias etiquetas og:*.

#### SEO 3 · Estructura de encabezados: 0/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

No hay ningún H1 y los 12 H2 y 7 H3 son la interfaz de GitHub («Navigation Menu», «Repository navigation», «Latest commit», «History», «Footer»), no la estructura del contenido del proyecto; About, Stars, Watchers y Forks aparecen duplicados. El listado de archivos no tiene README, por eso GitHub muestra el texto de la licencia en lugar de contenido con encabezados propios.

*Evidencia:*
- Resumen del script: 0 H1, 12 H2, 7 H3
- Primer encabezado: H2 «Navigation Menu» (salto inicio → H2)
- Sin README.md en la lista de archivos; bajo «Repository files navigation» solo está el texto de Apache License 2.0

*Cómo mejorarlo:*
- Agrega un README.md en la raíz con un solo H1 que diga de qué trata el proyecto (por ejemplo «# Invitaciones digitales de boda») y H2 en orden: «## Qué es», «## Cómo usarlo», «## Demo»; GitHub lo muestra como contenido principal de la página.
- En index.html del sitio publicado usa un único H1 descriptivo y H2/H3 sin saltos, y no uses encabezados solo para dar estilo.

#### SEO 4 · Tema claro y contenido suficiente: 0/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema se entiende en el título ("sitio web para venta de invitaciones digitales") y en la primera línea del contenido, pero no hay H1 (la página lo deja vacío) y casi no hay texto propio del proyecto. Las ~1,896 palabras del contenido principal son en su gran mayoría el texto de la licencia Apache-2.0 (el repositorio no tiene README, así que GitHub muestra la licencia); lo que sí habla del proyecto son 7 palabras de la descripción, nombres de archivos y mensajes de commit, muy por debajo de ~120 palabras útiles. Es un resultado que refleja tanto a GitHub (estructura fija, sin H1) como al proyecto (sin README).

*Evidencia:*
- Título: "GitHub - 1924/hackaton-irremplazables: sitio web para venta de invitaciones digitales · GitHub"
- H1: vacío
- Primer párrafo: "sitio web para venta de invitaciones digitales" (7 palabras)
- Términos más frecuentes: "license" (39), "work" (34), "derivative" (18): son de la licencia, no del tema
- "Repository files navigation" muestra "Apache License Version 2.0, January 2004..." en vez de un README

*Cómo mejorarlo:*
- Agrega un README.md que empiece con un H1 como "# Invitaciones digitales para bodas" y un primer párrafo que repita el tema: "Sitio web para vender invitaciones digitales de boda, con links personalizados para cada invitado y música de fondo a elección." (ajusta los datos a lo que el proyecto realmente hace).
- Desarrolla en el README al menos ~300 palabras útiles con secciones: qué incluye una invitación, cómo se personaliza (música de fondo, link propio), cómo se despliega (Docker, Supabase) y un ejemplo con la invitación "Valentina & Sebastián".
- Sustituye la descripción de About por una frase completa, por ejemplo: "Sitio web para vender invitaciones digitales de boda con link personalizado y música de fondo", y añade topics (invitaciones-digitales, bodas, supabase).

#### SEO 5 · Indexable: 1/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

No hay noindex (ni meta ni X-Robots-Tag) y la página es HTTPS con lang declarado, pero no tiene <link rel="canonical"> (Lighthouse marca el chequeo como no aplicable). Además lang="en" refleja la interfaz de GitHub, mientras que la descripción del proyecto está en español. Canonical e idioma los controla GitHub, no el proyecto.

*Evidencia:*
- metaRobots: null, xRobotsTag: null
- canonicales: []
- HTTPS, estado final 200, lang="en" (descripción del proyecto en español)
- Lighthouse is-crawlable: aprobado; canonical: no aplicable

*Cómo mejorarlo:*
- Publica el sitio en un dominio propio con <html lang="es"> y <link rel="canonical" href="https://tu-dominio/"> apuntando a cada página.
- Escribe la URL del sitio publicado en el campo Website del repositorio y en el README, para que los buscadores relacionen el repositorio con la versión que debe indexarse.

#### SEO 6 · robots.txt y sitemap.xml: 0/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

El script no obtuvo robots.txt ni sitemap.xml en github.com: todas las rutas respondieron 403 y no se listó ninguna URL. El 403 es un bloqueo al cliente automatizado y no confirma por sí solo que no existan, pero de todos modos el robots.txt y el sitemap de github.com son de la plataforma y no del proyecto. El repositorio sí tiene robots.txt, sitemap.xml y llms.txt en su raíz, pero en github.com solo se ven como /blob/main/robots.txt y no se sirven en la raíz del sitio.

*Evidencia:*
- https://github.com/robots.txt → 403; evidencia/robots.txt vacío
- sitemap.xml, sitemap_index.xml, sitemap-index.xml y wp-sitemap.xml → 403; 0 URLs
- Archivos del repo: robots.txt, sitemap.xml, llms.txt en la raíz (enlaces /blob/main/…)

*Cómo mejorarlo:*
- Despliega el sitio en su propio dominio para que robots.txt y sitemap.xml queden en https://tu-dominio/robots.txt y https://tu-dominio/sitemap.xml; los archivos que ya tienes en el repositorio sirven de base.
- Declara en robots.txt la línea «Sitemap: https://tu-dominio/sitemap.xml» y asegúrate de que el sitemap liste las páginas reales con el mismo dominio y HTTPS, y de que no haya un Disallow: / para todos.
- Envía el sitemap en Google Search Console y vuelve a auditar la URL del dominio propio.

#### SEO 7 · Imágenes: 2/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

La única imagen con contenido es el avatar del autor, y tiene alt ("1924", el nombre de usuario; describe lo que se ve de forma razonable para un avatar). No hay imágenes pesadas (ninguna > 300 KB; total 258 KB) ni imágenes grandes con alt vacío. Lo que marca Lighthouse (modern-image-formats, uses-responsive-images) son miniaturas PNG de GitHub (changelog, copilot, universe, platform) con alt="", decorativas y ajenas al proyecto: refleja a GitHub, no al repositorio, que no tiene imágenes propias en esta página.

*El script dio 1/2; el agente lo ajustó a 2/2. El script dio 1 solo porque Lighthouse marcó formatos y tamaños de miniaturas de GitHub, que son decorativas (alt vacío), no son del proyecto y el autor no puede optimizarlas. Como la página casi no tiene imágenes con contenido propias, no corresponde castigarla.*

*Evidencia:*
- 11 imágenes en total, 1 con contenido (avatar) con alt válido: 100%
- pesoTotalImagenesKB: 258; imagenesPesadas: []; altVacioEnImagenesGrandes: []
- Lighthouse marca 5 PNG de github.githubassets.com (changelog, copilot, universe, platform), todas con alt=""
- En la captura móvil solo se ve el avatar; el resto de las imágenes no aparece en pantalla

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: cumple solo CLS (0.000), pero el rendimiento es 47 (mínimo 80) y el LCP es 11.57 s (máximo 2.5 s). Es una sola medición de Lighthouse móvil y puede variar entre corridas y equipos. La causa que identifica Lighthouse es el peso y el bloqueo de render del código de GitHub (608 KiB de JavaScript sin usar, 1,200 ms de recursos que bloquean el render), no el contenido del proyecto; el servidor responde rápido (350 ms).

*Evidencia:*
- Rendimiento 47; LCP 11,570 ms; FCP 9,600 ms; TBT 366 ms; CLS 0.0002
- render-blocking-resources: ahorro estimado de 1,200 ms
- unused-javascript: ahorro estimado de 608 KiB
- server-response-time: el documento raíz tardó 350 ms
- Peso total de la página: 2,169 KiB

*Cómo mejorarlo:*
- Publica el sitio de invitaciones digitales en un dominio propio (por ejemplo en Hostinger) y mide ese sitio, no la página del repositorio: el LCP y el JavaScript de esta URL los controla GitHub.
- En el sitio publicado, carga solo el JavaScript necesario y marca con defer/async los scripts y CSS que bloquean el render, que es lo que Lighthouse señaló aquí (1,200 ms de bloqueo, 608 KiB sin usar).
- Sirve la imagen principal de cada invitación en WebP/AVIF con tamaños responsivos para mantener el LCP por debajo de 2.5 s.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport (width=device-width), no hay scroll horizontal y 0% del texto es menor a 12 px. En la captura móvil el diseño se ve limpio: sin contenido cortado ni encimado, el menú hamburguesa es visible arriba a la derecha y no hay banner de cookies ni pop-up. Queda a medias porque 16 de 56 enlaces/botones miden menos de 24 px de alto; es la interfaz de GitHub, no del proyecto.

*Evidencia:*
- viewport="width=device-width"; desbordeHorizontalPx: 0; caracteresPequenos: 0 de 12,139
- Objetivos táctiles pequeños: 16 de 56, por ejemplo "Apache-2.0 license" (152×17), "Activity" (74×17), "Report repository" (115×17), "0 forks" (71×21)
- "Skip to content" (1×1) es un enlace de accesibilidad oculto: falso positivo del script, así que los enlaces realmente pequeños son unos 15
- Captura movil-arriba.png: menú hamburguesa visible, sin overlays ni banners, texto legible sin zoom
- Captura movil-completa.png (390×3000): la licencia se ajusta al ancho sin recortes ni desbordes

*Cómo mejorarlo:*
- En el sitio propio de invitaciones, haz que los enlaces y botones (menú, pie, enlaces de texto) midan al menos 24 px de alto, e idealmente 44×44 px, o sepáralos lo suficiente entre sí.
- Si la página del repositorio es la que se evalúa, el autor no puede cambiar esos enlaces de GitHub; conviene presentar el proyecto desde un sitio propio con controles táctiles amplios.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

De los 40 enlaces internos probados (de 83 únicos) ninguno está roto, los enlaces del menú no son genéricos y la mayoría de las URLs se leen bien; el menú (51 enlaces) es el de GitHub, no uno del proyecto. Algunos enlaces respondieron 403 y no cuentan como rotos. Hay 12 de 84 URLs poco legibles (14%), casi todas de sistema de GitHub (login, signup, hashes de commit), más el archivo «Valentina & Sebastián · Nos casamos.html», cuya URL queda con %20 y %C3%A1.

*Evidencia:*
- 0 rotos de 40 enlaces revisados (límite del script: 40 de 83)
- Enlaces en sinVerificar: 403 (por ejemplo /platform, /features/copilot), no son rotos confirmados
- 0 anclas genéricas tipo «clic aquí»; 1 enlace sin texto (el que apunta al propio repositorio)
- 12 de 84 URLs poco legibles; Lighthouse link-text y crawlable-anchors: aprobados

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

La única frase que describe el proyecto es la descripción de About: "sitio web para venta de invitaciones digitales". Dice qué es (un sitio de venta de invitaciones digitales) y de forma implícita qué ofrece, pero no dice para quién (¿parejas, organizadores de eventos, empresas?) y mide solo 7 palabras, lejos del rango de ~25–80. Antes de esa frase la página solo trae navegación de GitHub ("Skip to content", "Repository navigation"). No hay eslogan vacío, pero tampoco hay README que amplíe.

*Evidencia:*
- "sitio web para venta de invitaciones digitales" (7 palabras)
- Bloques previos: "Skip to content", "Repository navigation", "Public", "Fork (0)"
- No hay README ni segunda frase que indique público objetivo

*Cómo mejorarlo:*
- Abre el README con una respuesta directa de 40–60 palabras, por ejemplo: "Invitaciones digitales es un sitio web para comprar y personalizar invitaciones de boda en línea. Está pensado para parejas que quieren enviar a sus invitados un link propio con su nombre, fecha y música de fondo, sin imprimir nada." (ajusta a la oferta real).
- Reescribe la descripción de About con qué, para quién y qué ofrece: "Sitio web para que parejas compren invitaciones de boda digitales con link personalizado y música de fondo".

#### AEO 2 · Encabezados en forma de pregunta: 0/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Ninguno de los 12 H2 ni de los H3 es una pregunta: son secciones de la interfaz de GitHub ("About", "Latest commit", "History", "Folders and files", "Releases", "Languages"). El proyecto tampoco aporta contenido propio con encabezados de ese tipo, porque no tiene README.

*Evidencia:*
- H2: "Navigation Menu", "About", "Latest commit", "History", "Folders and files", "Releases", "Languages", "Footer"
- h2ComoPregunta: 0; todosLosEncabezadosComoPregunta: []

*Cómo mejorarlo:*
- En el README agrega H2 con preguntas reales y respuesta en la primera frase, por ejemplo: "## ¿Qué es una invitación digital?", "## ¿Cómo se personaliza el link de cada invitado?" y "## ¿Cómo se despliega el proyecto?".
- Responde cada pregunta de inmediato debajo, en una o dos frases, antes de entrar en detalle (por ejemplo: "El link personalizado lleva el nombre del invitado y se genera desde Supabase", si es el caso).

#### AEO 3 · Preguntas frecuentes: 0/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

No hay sección de preguntas frecuentes visible. Los 13 elementos con aria-expanded y el único details/summary que detectó el script son menús y controles de la interfaz de GitHub, no preguntas con respuesta; tampoco hay FAQPage en el schema. Que no exista FAQ refleja al proyecto (sin README), no a GitHub.

*Evidencia:*
- encabezadoFaq: null; seccionFaq: null; schemaFaq: false
- ariaExpanded: 13 y detailsSummary: 1 corresponden al menú de navegación de GitHub
- El texto no contiene ninguna pregunta con su respuesta

*Cómo mejorarlo:*
- Agrega al README una sección "## Preguntas frecuentes" con al menos 3 preguntas y respuestas de 1–3 frases, por ejemplo: "¿Cuánto cuesta una invitación?", "¿Cómo comparto el link con mis invitados?" y "¿Puedo cambiar la música de fondo?".
- Escribe respuestas completas con datos reales del proyecto (precio, plazo de entrega, formas de pago) en lugar de "contáctanos".

#### AEO 4 · Datos estructurados: 0/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

La página renderizada no trae ningún bloque JSON-LD (0 bloques, sin @context ni tipos), así que no hay schema.org que validar ni que comparar con el contenido. Esto refleja a GitHub y no al proyecto: la página del repositorio la genera GitHub y el autor no puede añadirle JSON-LD; el schema que sí le toca al autor viviría en el sitio publicado de las invitaciones, que esta evidencia no cubre.

*Evidencia:*
- pagina.json: jsonld.cantidadBloques = 0, nodos = [], contextos = []
- aeo-4: hayJsonLd falló con "0 bloque(s) JSON-LD"
- Descripción del repo: "sitio web para venta de invitaciones digitales"

*Cómo mejorarlo:*
- Agrega en el <head> del index.html del sitio publicado un bloque <script type="application/ld+json"> con @context https://schema.org y tipo Organization (name, url, logo, contactPoint) para identificar al negocio de invitaciones digitales.
- Si el sitio muestra paquetes con precio, añade también Product con Offer (name, description, price, priceCurrency, availability) y asegúrate de que los precios coincidan con los visibles en la página.
- Califica la URL del sitio desplegado (no la del repositorio en GitHub) para que este criterio mida el schema que sí controlas.

#### AEO 5 · Contenido legible sin JavaScript: sin evaluar
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

- ❌ El HTML inicial trae 3% del texto que ve el usuario (59 de 1896 palabras)
- ❌ La página no tiene H1
- ❌ 59 palabras de contenido sin JavaScript

*Nota:* Regla: ≥ 80% = 2, 40–80% = 1, < 40% = 0.

*No se pudo calificar.*

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El script no encontró bloqueo para GPTBot, ClaudeBot, PerplexityBot ni Google-Extended, pero con una salvedad importante: el robots.txt de github.com respondió 403 al cliente de la auditoría y no se pudo leer (el archivo de evidencia dice "no existe robots.txt"). Un 403 se trata como "sin restricciones", por eso el 2 significa "no se comprobó ningún bloqueo" y no "se verificó que esté permitido". En cualquier caso, ese robots.txt es de GitHub, no del autor. El repo sí incluye sus propios robots.txt y llms.txt en la raíz, pero solo aplicarían en el dominio donde se publique el sitio, no en github.com. El script tampoco halló llms.txt en github.com (sin bonus).

*Evidencia:*
- aeo-6: robotsTxtExiste = false; GPTBot, ClaudeBot, PerplexityBot y Google-Extended = permitido
- seo-6: "No hay robots.txt (status 403)" en https://github.com/robots.txt
- llms.txt en github.com: existe = false
- texto.md: el repo lista robots.txt y llms.txt como archivos propios (no servidos por github.com)

#### AEO 7 · Formato fácil de extraer: 1/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

La estructura de GitHub aporta encabezados por sección, una tabla de archivos de 20 filas y listas cortas, y cada sección trata un solo tema. Pero lo único que es prosa es la licencia Apache-2.0 en un solo bloque de ~1,500 palabras (promedio de 537 palabras por párrafo), que es una pared de texto; el proyecto no aporta texto propio en párrafos cortos. Parte del resultado se debe a GitHub (formato fijo) y parte a que no hay README.

*Evidencia:*
- Un párrafo de ~1,500 palabras: "Apache License Version 2.0, January 2004 http://www.apache.org/licenses/ TERMS AND CONDITIONS..."
- Tabla "Folders and files" con 20 filas y 7 ítems de lista
- Promedio de 537 palabras por párrafo; 1 párrafo largo; 0 listas numeradas

*Cómo mejorarlo:*
- Crea un README.md con párrafos de 2–3 frases, una lista con las funciones (links personalizados, música de fondo, plantillas) y pasos numerados para instalar o desplegar (por ejemplo: 1. Copia .env.example a .env, 2. Configura Supabase, 3. Construye con Docker).
- Con un README presente, GitHub lo muestra en lugar de la licencia como contenido principal, así que la pared de texto de la licencia deja de dominar la página.

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre del repositorio y su descripción son consistentes entre <title>, og:title, migas de pan y el bloque About ("sitio web para venta de invitaciones digitales"), pero no hay ningún dato verificable de contacto, ni redes oficiales del proyecto, ni schema (0 bloques JSON-LD, sameAs vacío). Una parte de esta ausencia refleja a GitHub y no al proyecto: og:site_name es "GitHub", el © es "© 2026 GitHub, Inc.", no hay H1 y la plataforma no permite insertar JSON-LD en la página del repositorio. La falta de correo, de enlace al sitio publicado y de perfiles sociales sí es del proyecto. La falta de dirección física no se castiga porque el negocio es en línea.

*Evidencia:*
- title: "GitHub - 1924/hackaton-irremplazables: sitio web para venta de invitaciones digitales · GitHub"
- og:site_name = "GitHub"; © 2026 GitHub, Inc.; H1 = null
- metaDescription y og:description coinciden con el texto del bloque About del repositorio
- jsonld.cantidadBloques = 0; enSchemaSameAs = []
- contacto: telefonosPagina = [], correosPagina = []
- redes.enPagina solo trae github.com y la página de login de GitHub, ningún perfil de la marca

*Cómo mejorarlo:*
- Agrega un README.md con el nombre comercial del proyecto, una descripción de una frase igual a la del campo About, un correo de contacto y enlaces a los perfiles oficiales (Instagram, Facebook, WhatsApp Business, etc.).
- Llena el campo Website del bloque About del repositorio con la URL del sitio publicado de invitaciones digitales, para que el repositorio quede ligado a la entidad real.
- En el index.html del sitio publicado agrega JSON-LD Organization con name, description, email o telephone y sameAs apuntando a los mismos perfiles, y verifica que el nombre sea idéntico al del título, el H1 y el pie.

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

No hay frases genéricas de marketing, pero tampoco hay un solo dato sobre la oferta (precio, número de plantillas, tiempos, formas de pago). Los datos concretos son de GitHub y del repositorio: 9 commits, 3 ramas, HTML 71% y JavaScript 28.2%, el archivo de ejemplo "Valentina & Sebastián · Nos casamos.html" y mensajes de commit que apuntan a funciones ("música de fondo", "links personalizados"). Las 75 cifras que contó el script son en gran parte de la licencia ("fifty percent (50%)", numeración de secciones) y de fechas repetidas "Nov 15, 2026".

*Evidencia:*
- "9 Commits", "3 Branches0 Tags", "HTML71%", "JavaScript28.2%"
- Ejemplo real: "Valentina & Sebastián · Nos casamos.html"
- Commits: "Agregar mejora para seleccionar musica de fondo", "Agregar mejora para links personalizados"
- Sin precios, plazos, cantidades ni horarios del servicio de invitaciones

*Cómo mejorarlo:*
- Agrega al README datos verificables de la oferta, por ejemplo: "Invitación digital desde $XXX MXN", "incluye N plantillas", "entrega en 24 horas" (con los valores reales del proyecto).
- Incluye un ejemplo concreto enlazado o con captura: "Ejemplo: la invitación de Valentina & Sebastián con música de fondo y link personalizado por invitado".
- Documenta las funciones con cifras o límites reales (cuántos invitados por link, cuántas canciones disponibles, formatos de música).

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Hay señales, pero débiles o heredadas de la interfaz de GitHub. Se ve la fecha del último commit ("Mejora SEO · Nov 15, 2026", "1 hour ago") y quién contribuye, pero solo como el usuario "1924" (Contributors 1, "@1924 1924Baku_Roku"), sin nombre real ni equipo descrito. El "acerca de" se reduce al bloque About de una línea, sin README, y no hay testimonios ni fuentes citadas. Los enlaces Team y About de la navegación son de GitHub, no del proyecto, y "by Sections" que detectó el script es un falso positivo del texto de la licencia Apache.

*Evidencia:*
- Último commit: "1924 · Mejora SEO · Nov 15, 2026" (en la captura, "1 hour ago"); fecha visible y reciente, aportada por la interfaz de GitHub
- Contributors 1: "@1924 1924Baku_Roku"; solo un identificador de usuario, sin nombre real ni equipo
- Sección About: "sitio web para venta de invitaciones digitales" + Apache-2.0 license; no hay README renderizado, solo el texto de la licencia
- testimonios.citas = 0, schemaReview = false, sin encabezado de testimonios o reseñas
- fuentesExternas = 2, que son solo los enlaces Terms y Privacy de GitHub, no fuentes del proyecto
- autor.textoPor = "by Sections" viene de la licencia ("as defined by Sections 1 through 9"), no es un autor

*Cómo mejorarlo:*
- Escribe un README.md con una sección "Acerca de" que diga quién hace el proyecto: nombre real o nombre comercial del autor o equipo, su rol y un enlace a su perfil profesional.
- Agrega prueba social verificable, por ejemplo testimonios de clientes de invitaciones con nombre, evento y foto, o enlaces a invitaciones reales publicadas con permiso.
- Incluye una fecha de actualización visible en el README, como "Última actualización: noviembre de 2026", y enlaza las fuentes o documentación externas que respalden lo que ofrece el servicio.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 3 · Estructura de encabezados** (0/2): Agrega un README.md en la raíz con un solo H1 que diga de qué trata el proyecto (por ejemplo «# Invitaciones digitales de boda») y H2 en orden: «## Qué es», «## Cómo usarlo», «## Demo»; GitHub lo muestra como contenido principal de la página.
2. **SEO 4 · Tema claro y contenido suficiente** (0/2): Agrega un README.md que empiece con un H1 como "# Invitaciones digitales para bodas" y un primer párrafo que repita el tema: "Sitio web para vender invitaciones digitales de boda, con links personalizados para cada invitado y música de fondo a elección." (ajusta los datos a lo que el proyecto realmente hace).
3. **SEO 6 · robots.txt y sitemap.xml** (0/2): Despliega el sitio en su propio dominio para que robots.txt y sitemap.xml queden en https://tu-dominio/robots.txt y https://tu-dominio/sitemap.xml; los archivos que ya tienes en el repositorio sirven de base.
4. **AEO 2 · Encabezados en forma de pregunta** (0/2): En el README agrega H2 con preguntas reales y respuesta en la primera frase, por ejemplo: "## ¿Qué es una invitación digital?", "## ¿Cómo se personaliza el link de cada invitado?" y "## ¿Cómo se despliega el proyecto?".
5. **AEO 3 · Preguntas frecuentes** (0/2): Agrega al README una sección "## Preguntas frecuentes" con al menos 3 preguntas y respuestas de 1–3 frases, por ejemplo: "¿Cuánto cuesta una invitación?", "¿Cómo comparto el link con mis invitados?" y "¿Puedo cambiar la música de fondo?".
6. **AEO 4 · Datos estructurados** (0/2): Agrega en el <head> del index.html del sitio publicado un bloque <script type="application/ld+json"> con @context https://schema.org y tipo Organization (name, url, logo, contactPoint) para identificar al negocio de invitaciones digitales.
7. **SEO 1 · Título de la página** (1/2): Publica el sitio en su propio dominio y define en index.html un <title> de 50–60 caracteres que abra con el tema, por ejemplo «Invitaciones digitales de boda: compra y personaliza en línea».
8. **SEO 2 · Descripción y vista al compartir** (1/2): En Settings > Social preview del repositorio sube una imagen propia de 1280×640 con el nombre y una vista del producto, en lugar de la tarjeta automática.
9. **SEO 5 · Indexable** (1/2): Publica el sitio en un dominio propio con <html lang="es"> y <link rel="canonical" href="https://tu-dominio/"> apuntando a cada página.
10. **SEO 8 · Velocidad** (1/2): Publica el sitio de invitaciones digitales en un dominio propio (por ejemplo en Hostinger) y mide ese sitio, no la página del repositorio: el LCP y el JavaScript de esta URL los controla GitHub.
11. **SEO 9 · Móvil** (1/2): En el sitio propio de invitaciones, haz que los enlaces y botones (menú, pie, enlaces de texto) midan al menos 24 px de alto, e idealmente 44×44 px, o sepáralos lo suficiente entre sí.
12. **AEO 1 · Respuesta directa arriba** (1/2): Abre el README con una respuesta directa de 40–60 palabras, por ejemplo: "Invitaciones digitales es un sitio web para comprar y personalizar invitaciones de boda en línea. Está pensado para parejas que quieren enviar a sus invitados un link propio con su nombre, fecha y música de fondo, sin imprimir nada." (ajusta a la oferta real).
13. **AEO 7 · Formato fácil de extraer** (1/2): Crea un README.md con párrafos de 2–3 frases, una lista con las funciones (links personalizados, música de fondo, plantillas) y pasos numerados para instalar o desplegar (por ejemplo: 1. Copia .env.example a .env, 2. Configura Supabase, 3. Construye con Docker).
14. **AEO 8 · Identidad clara y consistente** (1/2): Agrega un README.md con el nombre comercial del proyecto, una descripción de una frase igual a la del campo About, un correo de contacto y enlaces a los perfiles oficiales (Instagram, Facebook, WhatsApp Business, etc.).
15. **AEO 9 · Datos concretos** (1/2): Agrega al README datos verificables de la oferta, por ejemplo: "Invitación digital desde $XXX MXN", "incluye N plantillas", "entrega en 24 horas" (con los valores reales del proyecto).
16. **AEO 10 · Señales de confianza** (1/2): Escribe un README.md con una sección "Acerca de" que diga quién hace el proyecto: nombre real o nombre comercial del autor o equipo, su rol y un enlace a su perfil profesional.

## Advertencias
- El servidor respondió 403 al cliente simple.
- aeo-5 sin calificar (auditor-aeo-tecnico lo dejó sin evaluar: la evidencia no permitía calificarlo (el puntaje automático del script, 0, no se usa))

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
