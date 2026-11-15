# Calificación SEO + AEO: https://mi-retiroseguro.com/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 82.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **17** | 20 | 85% |
| AEO | **15** | 20 | 75% |
| **Total** | **32** | 40 | 80% |

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
| 1 | Respuesta directa arriba | ■□ 1/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | ■■ 2/2 | Agente | agente |
| 3 | Preguntas frecuentes | ■□ 1/2 | Agente | agente |
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

Hay un solo <title> de 53 caracteres que dice de qué trata la página (asesoría de pensiones IMSS), dónde (Tijuana) y la marca (Retiro Seguro). No es genérico y coincide con el tema del H1.

*Evidencia:*
- title: "Retiro Seguro | Asesoría de Pensiones IMSS en Tijuana"
- 1 etiqueta <title>, 53 caracteres
- H1: "Asesoría en pensiones IMSS desde Tijuana, para todo México"

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 143 caracteres (dentro de 140–160), es clara y concreta (Ley 73, Ley 97, ISSSTE, diagnósticos y proyecciones personalizadas, atención en línea). Están og:title, og:description y og:image, y la imagen es una URL absoluta en https. También declara twitter:card summary_large_image.

*Evidencia:*
- meta description: 143 caracteres, "Asesoría en pensiones IMSS Ley 73, Ley 97 e ISSSTE. Diagnósticos y proyecciones personalizadas…"
- og:image: https://images.hostinger.com/8dda2477-098a-495f-b7b5-a43958448f98/2e81ac70-0460-4ea0-804f-dce9fa8469ed.png
- og:title y og:description presentes; twitterCard: summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 que dice de qué trata la página, 6 H2 y 22 H3 sin saltos de nivel (0 H4–H6). Los H3 cuelgan de su H2 con lógica: regímenes, servicios, guías del blog y las 10 preguntas del FAQ. Los encabezados no se usan solo para dar estilo.

*Evidencia:*
- Resumen: H1=1, H2=6, H3=22, H4–H6=0; saltos: ninguno
- H1: "Asesoría en pensiones IMSS desde Tijuana, para todo México"
- H2 "Preguntas frecuentes sobre pensiones" con 10 H3 que son las preguntas del FAQ

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (asesoría en pensiones IMSS) coincide en el título, el H1 y el primer párrafo del contenido, y la página tiene unas 1,660 palabras útiles, muy por encima de las 300 esperadas. El texto no es relleno: la mayor parte es una sección de preguntas frecuentes con datos reales.

*Evidencia:*
- Título: «Retiro Seguro | Asesoría de Pensiones IMSS en Tijuana»
- H1: «Asesoría en pensiones IMSS desde Tijuana, para todo México»
- Primer bloque: «Asesoría en pensiones y seguridad social · Atención en línea para todo México»
- ≈1,660 palabras en el contenido principal

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 en https sin redirecciones. No hay noindex en la meta robots ni en X-Robots-Tag. El canonical apunta a sí misma y <html> declara lang="es-MX", que coincide con el contenido en español.

*Evidencia:*
- URL final https://mi-retiroseguro.com/ con status 200
- metaRobots: null; xRobotsTag: null
- canonical: https://mi-retiroseguro.com/; lang="es-MX"

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt y sitemap.xml (ambos con 200). El robots.txt permite todo a `User-agent: *` (`Allow: /`) y solo bloquea con `Disallow: /` a bots de entrenamiento de IA (GPTBot, ClaudeBot, Google-Extended, etc.), lo que no afecta la indexación en buscadores. El sitemap está declarado en robots.txt y lista 7 URL del mismo dominio y protocolo, incluida la página de inicio.

*Evidencia:*
- robots.txt: `User-agent: *` con `Allow: /`; bloqueaTodoElSitio: false
- Sitemap: https://mi-retiroseguro.com/sitemap.xml (declarado en robots.txt), 7 URL
- Ejemplos del sitemap: /, /citas, /blog, /privacidad, /blog/ley-73-o-ley-97 (todas en https://mi-retiroseguro.com)

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 2 imágenes con contenido tienen alt descriptivo («Pareja disfrutando con tranquilidad una nueva etapa de vida», «Documentos y herramientas preparados para una asesoría de pensión») y el peso total es de 83 KB, sin imágenes > 300 KB. Lo que queda a medias es la entrega: Lighthouse marca uses-responsive-images (el logo PNG de 27 KB se sirve mucho más grande de lo que se muestra, ahorro de 26 KiB) y su insight de entrega de imágenes estima 60 KiB de ahorro en las 3 imágenes, todas PNG. El logo con alt vacío es aceptable porque es decorativo y el texto «Retiro Seguro» ya está junto a él.

*Evidencia:*
- totalImagenes 4; conContenido 2; conAltValido 2; altVacioEnImagenesGrandes: []
- pesoTotalImagenesKB 83; imagenesPesadas: []
- Lighthouse uses-responsive-images: ahorro de 26 KiB en img.brand-logo (27,290 bytes)
- Lighthouse image-delivery-insight: ahorro estimado de 60 KiB (logo, imagen del hero de 37.7 KB y imagen de documentos de 19.7 KB, todas .png)
- La imagen de documentos ya usa loading="lazy"; la del hero no, lo cual es correcto porque está en la primera pantalla

*Cómo mejorarlo:*
- Reexporta el logo (a30aa17e…png) como SVG, o al doble de su tamaño real en pantalla, para recuperar los ~26 KiB que Lighthouse marca como desperdicio.
- Convierte la imagen del hero y la de documentos de PNG a WebP o AVIF y compáralas contra los 22 KiB y 12 KiB de ahorro que estima Lighthouse.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Lighthouse móvil (una sola medición, que varía entre corridas y equipos): rendimiento 82 (cumple ≥ 80), CLS 0.000 (cumple < 0.1), pero LCP 4.20 s (no cumple < 2.5 s). Cumple 2 de 3 parámetros, así que confirmo el 1 del script. El servidor responde rápido (60 ms), así que el retraso viene del lado del navegador: el FCP ya es de 2.4 s y Lighthouse marca 2 recursos que bloquean el render.

*Evidencia:*
- Rendimiento 82; LCP 4195 ms; CLS 0; FCP 2410 ms; TBT 0 ms; Speed Index 2987 ms
- server-response-time: el documento raíz tardó 60 ms
- render-blocking-resources: ahorro de 180 ms (CSS de Google Fonts y /assets/index-UWngDO63.css)
- image-delivery-insight: ahorro estimado de 60 KiB en 3 imágenes PNG
- lcp-discovery-insight pasa (score 1): la imagen del LCP no está oculta ni en carga diferida

*Cómo mejorarlo:*
- Elimina el bloqueo de render que marca Lighthouse: inserta en línea el CSS crítico de /assets/index-UWngDO63.css y carga las fuentes de Google (Manrope y Plus Jakarta Sans) con preconnect o autoalojadas, reduciendo los pesos cargados (hoy 5 de Manrope y 7 variantes de Plus Jakarta Sans).
- Baja el LCP de 4.2 s a menos de 2.5 s: el archivo de Lighthouse no identifica el elemento LCP, pero lo probable es la imagen o el titular del hero; convierte la imagen a WebP/AVIF y añade fetchpriority="high".
- Como el contenido se pinta con JavaScript (div#root), considera prerenderizar la portada para que el primer texto no espere al bundle; es una inferencia mía, no un dato directo de Lighthouse.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto (width=device-width, initial-scale=1), no hay scroll horizontal y solo 4.8% del texto mide menos de 12 px. En las capturas el diseño no se ve roto: el botón de menú (hamburguesa) está visible junto al logo, el titular y el texto del hero son blancos sobre fondo oscuro y se leen sin zoom, las tarjetas de regímenes se apilan en una columna y no hay banner de cookies ni pop-up que tape la pantalla. Lo que queda a medias son los objetivos táctiles: 17 de 57 enlaces miden menos de 24 px de alto («Conoce tus opciones» 21 px, «Solicitar asesoría por WhatsApp» 23 px).

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desbordeHorizontalPx 0
- 537 de 11,146 caracteres (4.8%) menores a 12 px
- 17 de 57 botones/enlaces < 24 px: «Conoce tus opciones» (299×21), «Explorar el blog» (131×21), «Leer artículo» (112×21), «Solicitar asesoría por WhatsApp» (255×23)
- movil-arriba.png: encabezado con logo y botón de menú visibles; hero legible; el botón principal «Planeemos tu retiro» es grande (~58 px de alto) y el botón flotante de chat queda a la derecha del enlace de WhatsApp sin tocarlo
- movil-completa.png: sin desbordes ni texto encimado en las tarjetas de Ley 73, Ley 97 e ISSSTE; se alcanza a ver un fragmento «ión» junto a la tarjeta superpuesta del hero, posiblemente una animación capturada a medias, sin evidencia suficiente para penalizarlo
- Límite de la revisión: movil-completa.png se corta a 3000 px de alto, así que no vi las secciones inferiores ni el pie de página; el botón flotante, al ser fijo, aparece en la captura completa solo en la posición de la primera pantalla

*Cómo mejorarlo:*
- Agranda el área táctil de los enlaces de texto («Conoce tus opciones», «Explorar el blog», «Leer artículo», «Solicitar asesoría por WhatsApp») a al menos 44 px de alto con padding vertical, o haz clicable toda la tarjeta.
- Sube el texto más pequeño (la barra superior y las etiquetas en mayúsculas como «ASESORÍA EN PENSIONES IMSS», de ~11 px) a 12–13 px para que el 4.8% de texto pequeño llegue a cero.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 4 enlaces internos (Inicio, Servicios, Blog, Contacto) y los 5 enlaces internos únicos que se revisaron respondieron bien: 0 rotos y 0 sin verificar. Las URLs son legibles (/blog/ley-73-o-ley-97, /blog/modalidad-40, /privacidad) y Lighthouse aprueba el texto descriptivo de enlaces. Detalle menor: cada tarjeta del blog repite un enlace «Leer artículo» junto al título, que ya es descriptivo y apunta a la misma URL, así que no afecta el puntaje.

*Evidencia:*
- Menú: Inicio, Servicios (#servicios), Blog (/blog), Contacto (#contacto)
- 5 enlaces internos revisados, rotos: [], sinVerificar: []
- 0 enlaces genéricos según el script; Lighthouse link-text score 1

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Lo primero que se lee es un bloque de eslogan («Tu tranquilidad comienza con información clara») y una imagen; el párrafo útil llega después del H1. Ese párrafo sí dice qué ofrece («Analizamos tu historial de cotizaciones, realizamos cálculos y proyecciones»), pero no nombra a Retiro Seguro ni dice para quién es (¿afiliados al IMSS o ISSSTE?, ¿próximos a pensionarse?); solo dice «para todo México».

*Evidencia:*
- Primer bloque: «Asesoría en pensiones y seguridad social · Atención en línea para todo México Tu tranquilidad comienza con información clara.»
- Párrafo bajo el H1: «Conoce tu situación pensionaria y toma decisiones informadas sobre tu futuro. Analizamos tu historial de cotizaciones, realizamos cálculos y proyecciones…»
- El nombre «Retiro Seguro» solo aparece en el encabezado, no en las primeras frases del contenido

*Cómo mejorarlo:*
- Reescribe el párrafo bajo el H1 para que diga quién eres, para quién es y qué ofrece, por ejemplo: «Retiro Seguro es una asesoría independiente en pensiones con sede en Tijuana, para trabajadores afiliados al IMSS (Ley 73 y Ley 97) o al ISSSTE que quieren conocer sus alternativas de retiro. Revisamos tu historial de cotizaciones, calculamos escenarios de pensión y te acompañamos en trámites, por videollamada en todo México.»
- Quita o mueve debajo del H1 la línea de eslogan «Tu tranquilidad comienza con información clara», para que el contenido abra con la definición y no con una frase genérica.

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Ningún H2 es pregunta, pero la sección de preguntas frecuentes tiene 10 H3 con preguntas reales que un usuario haría, y casi todas se responden en la primera frase. Solo «¿Cuánto cuesta…?» responde de forma evasiva («El costo depende del tipo de asesoría»).

*Evidencia:*
- H3: «¿A qué edad puedo pensionarme por el IMSS?» → «Puedes solicitar una pensión por cesantía en edad avanzada a partir de los 60 años, o una pensión por vejez a partir de los 65 años…»
- H3: «¿Dónde puedo consultar cuántas semanas tengo cotizadas ante el IMSS?» → «Puedes consultar gratuitamente… a través del portal oficial del IMSS o desde la aplicación IMSS Digital»
- H3: «¿Cuánto cuesta una asesoría de pensiones en Retiro Seguro?» → «El costo depende del tipo de asesoría…»

#### AEO 3 · Preguntas frecuentes: 1/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección visible de «Preguntas frecuentes sobre pensiones» con 10 preguntas y respuestas con datos útiles, pero la mayoría de las respuestas no son cortas: 7 de 10 tienen 4 o 5 frases (≈80 a 110 palabras) cuando la rúbrica pide 1 a 3. Además, la respuesta de precio solo remite a «Contáctanos».

*Evidencia:*
- 10 preguntas visibles bajo «Preguntas frecuentes sobre pensiones»
- «¿Cuál es la diferencia entre la Ley 73 y la Ley 97 del IMSS?»: 4 frases, ≈90 palabras
- «¿Qué incluye una asesoría de pensiones en Retiro Seguro?»: 5 frases, ≈100 palabras
- «¿Cuánto cuesta…?»: «Contáctanos para conocer tu situación y determinar qué tipo de servicio necesitas.»

*Cómo mejorarlo:*
- Acorta cada respuesta a 1–3 frases (≈40–60 palabras) con la respuesta directa primero y deja el detalle para los artículos del blog. Ejemplo para «¿A qué edad puedo pensionarme por el IMSS?»: «Desde los 60 años por cesantía en edad avanzada o desde los 65 por vejez, si cumples las semanas cotizadas de tu régimen: 500 en Ley 73 y 875 en 2026 en Ley 97.»
- Responde «¿Cuánto cuesta una asesoría?» con un dato verificable en vez de «Contáctanos»: el precio o rango de cada tipo de asesoría, por ejemplo «La consulta inicial cuesta MXN [monto] y dura [X] minutos; la asesoría integral cuesta desde MXN [monto].»

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 3 bloques JSON-LD válidos de schema.org en el HTML inicial (WebSite, LocalBusiness y FAQPage) y los datos coinciden con lo visible: teléfono +526643021832 = «+52 664 302 1832», correo contacto@mi-retiroseguro.com, dirección de Plaza Patria en Tijuana y Facebook RetiroSeguro.Mex. El FAQPage declara 10 preguntas y la página muestra exactamente 10 preguntas frecuentes. LocalBusiness es un tipo adecuado para un despacho con oficina física y atención previa cita; no hay precios ni horarios en la página que el schema pudiera contradecir.

*Evidencia:*
- 3 bloques JSON-LD, sin bloques inválidos, @context https://schema.org, presentes en el HTML crudo
- LocalBusiness: name «Retiro Seguro», telephone +526643021832, email contacto@mi-retiroseguro.com, address «Plaza Patria, Nivel 2, Oficina 6E, Blvd. Díaz Ordaz 12649… Tijuana, Baja California, 22106, MX»
- texto.md: «Teléfono +52 664 302 1832», mismo correo y misma dirección en el bloque de contacto y el pie
- FAQPage con 10 preguntas; texto.md tiene 10 encabezados H3 de pregunta en la sección de preguntas frecuentes
- Propiedades opcionales ausentes en LocalBusiness: logo/image, horarios, geo, areaServed

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae el 100% del texto que ve el usuario (1660 de 1660 palabras) y el H1 ya está en el HTML crudo. Los encabezados H1, H2 y H3 (servicios por régimen, cómo ayudamos) y las primeras palabras del crudo («Asesoría en pensiones y seguridad social · Atención en línea para todo México…») coinciden con lo que se ve, así que un bot que no ejecuta JavaScript lee todo el contenido relevante.

*Evidencia:*
- palabrasHtmlCrudo 1660 de 1660 renderizadas (proporción 1)
- H1 en crudo: «Asesoría en pensiones IMSS desde Tijuana, para todo México»
- H2/H3 en crudo: «Pensiones IMSS Ley 73», «Pensiones IMSS Ley 97», «Pensiones ISSSTE», «Diagnóstico de tu situación pensionaria»

#### AEO 6 · Acceso para bots de IA: 0/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt prohíbe la raíz del sitio (Disallow: /) a GPTBot, ClaudeBot y Google-Extended; solo PerplexityBot está permitido, es decir 1 de los 4 bots de la rúbrica. El bloqueo es deliberado (Content-Signal: ai-train=no) y el sitio sí permite bots de búsqueda y de usuario como OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User y Perplexity, pero la rúbrica exige que no se bloquee a los cuatro. Existe un llms.txt en https://mi-retiroseguro.com/llms.txt, que se anota como bonus informativo y no sube el puntaje.

*Evidencia:*
- robots.txt: «User-agent: GPTBot / Disallow: /»
- robots.txt: «User-agent: ClaudeBot / Disallow: /»
- robots.txt: «User-agent: Google-Extended / Disallow: /»
- robots.txt: «User-agent: PerplexityBot / Allow: /»
- También bloqueados: Applebot-Extended, meta-externalagent, Amazonbot y Bytespider
- llms.txt existe (bonus, sin efecto en el puntaje)

*Cómo mejorarlo:*
- Cambia «Disallow: /» por «Allow: /» en los bloques de GPTBot, ClaudeBot y Google-Extended de robots.txt para que los cuatro bots de la rúbrica puedan acceder.
- Si quieres seguir expresando tu preferencia de no entrenamiento, conserva la línea «Content-Signal: search=yes, ai-input=yes, ai-train=no» en esos bloques; es una señal de preferencia y no cierra el acceso como lo hace Disallow.
- Revisa si el bloqueo a Google-Extended es lo que buscas: no afecta tu posicionamiento en Google Search, pero sí que Gemini use tu contenido.

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Predominan los párrafos cortos (44 párrafos, promedio de 30 palabras, ninguno marcado como largo) y las secciones están bien separadas, una por tema, con H2 y H3 claros. El proceso de trabajo va en una lista numerada de 4 pasos y los regímenes en tarjetas. Lo único mejorable es que las respuestas de las preguntas frecuentes son bloques densos de 80 a 110 palabras, y que la comparación de requisitos entre Ley 73 y Ley 97 se prestaría a una tabla.

*Evidencia:*
- 44 párrafos, promedio 30 palabras; 2 listas numeradas, 8 ítems de lista
- Pasos numerados: «Diagnóstico de tu situación pensionaria», «Cálculos y proyecciones», «Orientación sobre tus alternativas», «Acompañamiento en trámites y aclaraciones»
- Secciones separadas por tema: regímenes, cómo ayudamos, por qué elegirnos, blog, preguntas frecuentes, contacto

#### AEO 8 · Identidad clara y consistente: 2/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «Retiro Seguro» coincide en el title, el logotipo del encabezado, el pie (© 2026 Retiro Seguro) y el name de los nodos WebSite y LocalBusiness del schema. El teléfono (+52 664 302 1832 / +526643021832), el correo (contacto@mi-retiroseguro.com) y la dirección de Plaza Patria, Tijuana coinciden entre la página y el schema. La descripción del schema es coherente con la meta description, y el perfil de Facebook (RetiroSeguro.Mex) está enlazado en la sección de contacto y en el pie, y repetido en sameAs.

*Evidencia:*
- Nombre: title «Retiro Seguro | Asesoría de Pensiones IMSS en Tijuana»; pie «© 2026 Retiro Seguro»; schema name «Retiro Seguro» (WebSite y LocalBusiness)
- Teléfono: página «+52 664 302 1832» y tel: «+526643021832»; schema telephone «+526643021832» (mismo número tras normalizar)
- Correo: mailto «contacto@mi-retiroseguro.com» = schema email. El «correocontacto@…» que aparece en la evidencia automática es la etiqueta «Correo» pegada al texto, no una dirección distinta
- Dirección: «Plaza Patria, Nivel 2, Oficina 6E, Blvd. Díaz Ordaz 12649, Fracc. El Paraíso, C. P. 22106, Tijuana, B.C.» en contacto y pie; mismo dato en address del schema; 2 enlaces a Google Maps
- Redes: https://www.facebook.com/RetiroSeguro.Mex (contacto y pie) y en sameAs del LocalBusiness; además WhatsApp wa.me/526643021832 (mismo número)
- Detalles menores: no hay og:site_name y el nodo WebSite trae sameAs vacío; el H1 no menciona la marca, pero el encabezado sí

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Las afirmaciones importantes vienen con cifras, fechas y requisitos verificables, sobre todo en las preguntas frecuentes, y también hay datos de confianza (años de experiencia, certificación, dirección y teléfono). Las líneas de eslogan de la parte alta son genéricas, pero ocupan poco texto. Falta el dato comercial más buscado, que es el precio, y tampoco hay horarios de atención.

*Evidencia:*
- «más de 10 años de experiencia», «Estándar de Competencia EC0485», «certificado por CONOCER»
- «Si cotizaste por primera vez antes del 1 de julio de 1997…», «las últimas 250 semanas de cotización»
- «a los 60 años se aplica el 75% de la cuantía… a los 65 años corresponde el 100%»
- «durante 2026 se requieren 875 semanas y llegará a 1,000 en 2031», «52 nuevas semanas de cotización»
- Eslóganes: «Claridad en cada paso. Tranquilidad en cada decisión.», «Una nueva etapa. Muchas razones para disfrutarla.»
- Sin precios ni horarios: «El costo depende del tipo de asesoría…»

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

La página dice que hay «un equipo de profesionistas con más de 10 años de experiencia» y personal certificado CONOCER EC0485, pero sin un solo nombre, foto ni cargo. No hay fecha de actualización visible ni dateModified (solo «© 2026»), no existe una página «Acerca de» propia (el enlace «Sobre Retiro Seguro» del pie salta a la sección «Respaldo profesional» de la misma página) y no hay testimonios ni reseñas. Las únicas referencias externas son un enlace al portal del IMSS para consultar semanas cotizadas y la ubicación en Maps. Hay señales, pero débiles y anónimas.

*Evidencia:*
- Equipo sin nombres: «Somos un equipo de profesionistas con más de 10 años de experiencia…»; «La certificación corresponde a personas de nuestro equipo, no a la empresa en su conjunto»
- Autor: sin meta author, rel=author ni autor en el JSON-LD; las tarjetas del blog no muestran autor
- Fecha: sin <time>, dateModified ni «actualizado»; solo «© 2026 Retiro Seguro. Todos los derechos reservados»
- Acerca de: enlacesAcerca vacío; «Sobre Retiro Seguro» → /#respaldo (sección dentro de la home, sin página propia)
- Testimonios: encabezado de testimonios ausente, 0 citas, sin schema Review/AggregateRating
- Fuentes: 1 enlace útil al portal del IMSS en una FAQ; las cifras legales (875 semanas en 2026, 500 semanas, 52 semanas) no citan ley ni artículo con enlace

*Cómo mejorarlo:*
- Crea una página «Quiénes somos» (/nosotros) y enlázala en el menú y el pie. Pon nombre, foto, cargo y años de experiencia de cada asesor, con su número de constancia CONOCER EC0485 enlazado al registro oficial, y sustituye «Sobre Retiro Seguro → #respaldo» por esa página.
- Agrega testimonios reales con nombre (o iniciales), ciudad y tipo de trámite, con permiso del cliente, o enlaza las reseñas de Google Business o Facebook con su calificación. Marca con schema Review solo lo que sea verificable.
- Muestra una fecha visible, por ejemplo «Última actualización: noviembre de 2026», junto a las preguntas frecuentes. Añade autor, datePublished y dateModified a los artículos del blog, y cita con enlace la Ley del Seguro Social o las páginas del IMSS que respaldan las cifras (875 semanas, 500 semanas, 52 semanas).

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 6 · Acceso para bots de IA** (0/2): Cambia «Disallow: /» por «Allow: /» en los bloques de GPTBot, ClaudeBot y Google-Extended de robots.txt para que los cuatro bots de la rúbrica puedan acceder.
2. **SEO 7 · Imágenes** (1/2): Reexporta el logo (a30aa17e…png) como SVG, o al doble de su tamaño real en pantalla, para recuperar los ~26 KiB que Lighthouse marca como desperdicio.
3. **SEO 8 · Velocidad** (1/2): Elimina el bloqueo de render que marca Lighthouse: inserta en línea el CSS crítico de /assets/index-UWngDO63.css y carga las fuentes de Google (Manrope y Plus Jakarta Sans) con preconnect o autoalojadas, reduciendo los pesos cargados (hoy 5 de Manrope y 7 variantes de Plus Jakarta Sans).
4. **SEO 9 · Móvil** (1/2): Agranda el área táctil de los enlaces de texto («Conoce tus opciones», «Explorar el blog», «Leer artículo», «Solicitar asesoría por WhatsApp») a al menos 44 px de alto con padding vertical, o haz clicable toda la tarjeta.
5. **AEO 1 · Respuesta directa arriba** (1/2): Reescribe el párrafo bajo el H1 para que diga quién eres, para quién es y qué ofrece, por ejemplo: «Retiro Seguro es una asesoría independiente en pensiones con sede en Tijuana, para trabajadores afiliados al IMSS (Ley 73 y Ley 97) o al ISSSTE que quieren conocer sus alternativas de retiro. Revisamos tu historial de cotizaciones, calculamos escenarios de pensión y te acompañamos en trámites, por videollamada en todo México.»
6. **AEO 3 · Preguntas frecuentes** (1/2): Acorta cada respuesta a 1–3 frases (≈40–60 palabras) con la respuesta directa primero y deja el detalle para los artículos del blog. Ejemplo para «¿A qué edad puedo pensionarme por el IMSS?»: «Desde los 60 años por cesantía en edad avanzada o desde los 65 por vejez, si cumples las semanas cotizadas de tu régimen: 500 en Ley 73 y 875 en 2026 en Ley 97.»
7. **AEO 10 · Señales de confianza** (1/2): Crea una página «Quiénes somos» (/nosotros) y enlázala en el menú y el pie. Pon nombre, foto, cargo y años de experiencia de cada asesor, con su número de constancia CONOCER EC0485 enlazado al registro oficial, y sustituye «Sobre Retiro Seguro → #respaldo» por esa página.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
