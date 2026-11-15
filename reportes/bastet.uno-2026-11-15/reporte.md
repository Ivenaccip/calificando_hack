# Calificación SEO + AEO: https://bastet.uno/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 99.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **18** | 20 | 90% |
| AEO | **17** | 20 | 85% |
| **Total** | **35** | 40 | 88% |

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
| 9 | Móvil | ■□ 1/2 | Lighthouse + captura móvil | agente (ajustó al script) |
| 10 | Enlaces y URLs | ■■ 2/2 | Script | agente |

## Rúbrica AEO: que los buscadores con IA usen la página como respuesta

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Respuesta directa arriba | ■■ 2/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | ■■ 2/2 | Agente | agente |
| 3 | Preguntas frecuentes | ■■ 2/2 | Agente | agente |
| 4 | Datos estructurados | ■■ 2/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■□ 1/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | ■■ 2/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | ■■ 2/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 57 caracteres que une la marca con el tema: «Bastet · Compra, alquila o reserva una estadía en Bolivia». Describe qué hace el sitio (compra, alquiler, estadías) y dónde, y no es genérico.

*Evidencia:*
- title: «Bastet · Compra, alquila o reserva una estadía en Bolivia»
- 1 etiqueta <title>, 57 caracteres
- El H1 es distinto («Encuentra dónde vivir o dónde quedarte») y complementa al título

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 156 caracteres (dentro de 140–160) y está completa, no cortada. Abre con un verbo de acción («Encuentra casas, departamentos y habitaciones…»), nombra los tipos de operación y cierra con un respaldo de confianza («Inmuebles revisados por Bastet»). Están og:title, og:description y og:image, y la imagen es una URL absoluta.

*Evidencia:*
- meta description: 156 caracteres
- og:image: https://bastet.uno/assets/img/hero-familia.webp (URL absoluta)
- og:title y og:description presentes; twitter:card = summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 claro («Encuentra dónde vivir o dónde quedarte») y 15 H2 con 35 H3, sin saltos de nivel (0 H4–H6). Los H2 son secciones reales (Estadías por noche, Inmuebles en venta, En alquiler, Preguntas frecuentes…) y los H3 son los títulos de cada tarjeta o pregunta debajo de su H2. El menú y el pie no usan encabezados para dar estilo. Detalle menor: «Habitacion Temporal» y «Air BnB en Calacoto» se repiten como H3 en dos secciones seguidas (Estadías por noche y Estadías en La Paz).

*Evidencia:*
- Resumen: h1=1, h2=15, h3=35, h4–h6=0; saltos: ninguno
- H1: «Encuentra dónde vivir o dónde quedarte»
- H3 repetidos: «Habitacion Temporal» y «Air BnB en Calacoto» aparecen en dos H2 distintos

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (plataforma para comprar, alquilar o reservar estadías en Bolivia) coincide en el título, el H1 y el primer párrafo visible, y el contenido principal pasa por mucho las 300 palabras útiles (el script cuenta 1,771 en total). Hay algo de repetición (las tarjetas de «Habitacion Temporal» y «Air BnB en Calacoto» aparecen dos veces), pero no es relleno notable.

*Evidencia:*
- Título: «Bastet · Compra, alquila o reserva una estadía en Bolivia»
- H1: «Encuentra dónde vivir o dónde quedarte»
- Primer párrafo: «Bastet.uno es una plataforma inmobiliaria de Bolivia: compra, alquiler, anticrético y estadías por noche…»
- Secciones con texto útil: anfitriones (10 %/90 %), verificación, 7 preguntas frecuentes, servicio legal de venta

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

No hay noindex ni en meta robots ni en X-Robots-Tag. El canonical apunta a la misma URL (https://bastet.uno/), la página responde 200 sin redirecciones por HTTPS y <html lang="es"> coincide con el contenido, que está en español.

*Evidencia:*
- metaRobots: null; xRobotsTag: null
- canonical: https://bastet.uno/ (igual a la URL final)
- HTTP 200, protocolo https, lang="es"

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml (200, válido, 20 URL). El robots.txt permite todo el sitio y solo bloquea /admin/; además declara el sitemap. Las URL de ejemplo del sitemap son reales, del mismo dominio y con HTTPS, e incluyen la home.

*Evidencia:*
- robots.txt: «User-agent: * / Allow: / / Disallow: /admin/» y «Sitemap: https://bastet.uno/sitemap.xml»
- sitemap.xml: 20 URL, incluye https://bastet.uno/, /marketplace.html, /estadias.html
- bloqueaTodoElSitio: false

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 56 imágenes tienen alt (100%), ninguna pesa más de 300 KB y el total es de 310 KB. Pero la calidad del alt es irregular: las 18 imágenes de «Empresas que trabajan con nosotros» repiten el mismo alt «Hospeda a tu gente con nosotros», que no describe lo que muestran, y varias tarjetas de propiedades usan un alt genérico («Inmueble en venta en El Alto»). Además, Lighthouse marca uses-responsive-images (score 0.5) con 286 KiB de ahorro posible.

*Evidencia:*
- 56 de 56 imágenes con alt; 0 imágenes > 300 KB; peso total de imágenes 310 KB
- 18 imágenes con el mismo alt: «Hospeda a tu gente con nosotros» (sección «Empresas que trabajan con nosotros»)
- Alts genéricos repetidos en tarjetas: «Inmueble en venta en El Alto», «Inmueble en venta en Sucre», «Inmueble en venta en Tarija»
- Buen ejemplo: «Familia en su hogar, feliz de haber encontrado dónde vivir con Bastet»
- Lighthouse uses-responsive-images: testi-09.jpg (74 KB, ahorro 72 KB), testi-08.jpg (69 KB, ahorro 67 KB), hospeda-a-tu-gente.webp (35 KB, ahorro 34 KB)

*Cómo mejorarlo:*
- Da un alt distinto a cada una de las 18 imágenes de «Empresas que trabajan con nosotros», con el nombre de la empresa o lo que muestra (por ejemplo «Logo de [empresa]»), en lugar de repetir «Hospeda a tu gente con nosotros».
- Sirve las fotos de testimonios (testi-09.jpg, testi-08.jpg, testi-04.jpg, testi-06.jpg) y hospeda-a-tu-gente.webp al tamaño con el que se muestran, usando srcset/sizes, y convierte los .jpg a WebP; Lighthouse estima 286 KiB de ahorro.
- Haz más específico el alt de las tarjetas de propiedades que dicen solo «Inmueble en venta en [ciudad]», por ejemplo «Casa de dos pisos con jardín en venta en Cochabamba».

#### SEO 8 · Velocidad: 2/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: Lighthouse móvil da rendimiento 99 (mínimo 80), LCP de 1.93 s (máximo 2.5 s) y CLS de 0.000 (máximo 0.1); cumple las tres. Es una sola medición de Lighthouse, así que el resultado puede variar unos puntos entre corridas y equipos.

*Evidencia:*
- Rendimiento 99, SEO 100 (Lighthouse 12.8.2)
- LCP 1,932 ms; FCP 1,281 ms; TBT 0 ms; CLS 0
- Respuesta del servidor: 160 ms; peso total 541 KiB

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto, no hay scroll horizontal y solo 1% del texto es menor a 12 px; el diseño se ve ordenado y legible en la captura. Pero en el encabezado móvil solo se ven el logo y «Instalar app», sin botón de menú visible (los enlaces de navegación existen en el DOM, pero no se ve cómo abrirlos), el banner de cookies ocupa cerca de una cuarta parte de la primera pantalla y roza el botón «Buscar», y hay objetivos táctiles pequeños («Ver todas» de 60×18 px, selects del buscador de 17 px de alto).

*El script dio 2/2; el agente lo ajustó a 1/2. El script dio 2 porque mide viewport, desborde, tamaño de texto y objetivos táctiles. La captura móvil muestra además que no hay un botón de menú visible en el encabezado y que el banner de cookies cubre gran parte de la primera pantalla, así que bajo a 1.*

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desborde horizontal 0 px; 41 de 6,552 caracteres < 12 px
- Captura movil-arriba.png: encabezado con logo + «Instalar app», sin icono de hamburguesa ni otra entrada al menú
- Banner «Usamos una etiqueta de Google…» cubre aprox. de y=640 a y=835 de 844 px y se superpone con el borde inferior de «Buscar»
- 7 de 114 botones/enlaces miden menos de 24 px: «Ver todas» (60×18 px) y dos select (302×17 px)
- La pestaña «Anticrético» queda cortada («Anticrét») y las tarjetas se recortan a la derecha (patrón de carrusel con desplazamiento)

*Cómo mejorarlo:*
- Agrega un botón de menú (hamburguesa) visible en el encabezado móvil, junto a «Instalar app», que abra Inicio, Propiedades, Estadías, Sé anfitrión y Acceder.
- Aumenta el área táctil de los enlaces «Ver todas» (hoy 60×18 px) y de los campos del buscador a al menos 44 px de alto, con padding, sin cambiar el tamaño del texto.
- Compacta el banner de cookies (por ejemplo, una barra más baja con los dos botones en una fila) para que no tape «Buscar» ni el inicio del contenido en la primera pantalla.

*Nota:* El script puntúa lo medible; el agente debe revisar la captura móvil.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 11 enlaces internos distintos con textos descriptivos (por ejemplo «Propiedades en alquiler en Bolivia»). De los 40 enlaces internos revisados, 0 están rotos, 0 son genéricos tipo «clic aquí» y 0 URLs son poco legibles (por ejemplo /casas-en-venta/, /inmuebles-en-la-paz/). No hay enlaces sin verificar. Nota: el script probó 40 de 41 enlaces internos únicos (su límite), así que queda uno sin revisar; no cambia el resultado.

*Evidencia:*
- 0 rotos de 40 enlaces internos revisados (41 únicos)
- 0 enlaces genéricos y 0 sin texto; Lighthouse «Links have descriptive text» = 1
- URLs legibles: https://bastet.uno/casas-en-alquiler/, https://bastet.uno/inmuebles-en-la-paz/

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Justo bajo el H1, la primera frase dice qué es (plataforma inmobiliaria de Bolivia) y qué ofrece (compra, alquiler, anticrético y estadías por noche, con inmuebles revisados y contacto protegido). El bloque mide 44 palabras, dentro del rango, y la segunda frase aclara a quién se dirige (quien busca casas o departamentos y quiere contactar anunciantes en todo el país). El público queda implícito más que nombrado, por eso la confianza es media.

*Evidencia:*
- «Bastet.uno es una plataforma inmobiliaria de Bolivia: compra, alquiler, anticrético y estadías por noche, con inmuebles revisados y contacto protegido.»
- «Encuentra casas, departamentos y otras propiedades, compara opciones y solicita contacto con anunciantes…»
- 44 palabras; visible en la captura móvil justo debajo del H1

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Hay 7 encabezados H3 que son preguntas reales de un usuario y cada uno se responde en la primera frase debajo, además de 3 H2 en forma de pregunta. Los H2 de las secciones de tarjetas (p. ej. «En alquiler», «Inmuebles en venta») son etiquetas, no preguntas, y el H2 «¿Cómo compro o reservo con tranquilidad?» se responde con tarjetas H3 en vez de una frase directa, pero el bloque de preguntas frecuentes cumple el criterio.

*Evidencia:*
- H3: «¿Qué es el anticrético?» → «Es un contrato propio de Bolivia: entregas una suma de dinero al propietario y usas el inmueble sin pagar alquiler…»
- H3: «¿Cómo reservo una estadía por noches?» → «Elige ciudad, fechas y huéspedes en Estadías y envía la solicitud.»
- H3: «¿Los teléfonos de propietarios y agentes son públicos?» → «No. Los teléfonos no se publican en el sitio…»
- H2: «¿Cómo compro o reservo con tranquilidad?» (respuesta en tarjetas H3, no en una frase directa)

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Existe una sección «Preguntas frecuentes» visible, con 7 preguntas en H3 y respuestas completas que casi siempre caben en 1–3 frases. Solo la de reservar una estadía llega a 4 frases (≈65 palabras), pero es un procedimiento completo y claro. El schema FAQPage está presente y además hay contenido visible que lo respalda.

*Evidencia:*
- H2: «Preguntas frecuentes» con 7 preguntas, de «¿Qué es Bastet y qué puedo hacer en el sitio?» a «¿Bastet trabaja con empresas?»
- Respuesta corta y completa: «No. Los teléfonos no se publican en el sitio: se entregan cuando tu solicitud de contacto o tu reserva se confirma.»
- «¿Bastet trabaja con empresas?» → «Sí. Las empresas afiliadas piden alojamiento para sus trabajadores…»

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

El JSON-LD (3 bloques, todos con @context schema.org, sin errores de lectura y presentes en el HTML inicial) usa tipos adecuados para una inmobiliaria: Organization + RealEstateAgent (subtipo de LocalBusiness), WebSite y FAQPage. Los datos coinciden con lo visible: teléfono +59177666205, correo inmobiliaria@bastet.uno y dirección «Calle Yanacocha, Edif. Cristal, Piso 7, Of. 706, La Paz» son los mismos del pie de página, y las 7 preguntas del FAQPage son las 7 del acordeón visible. Queda margen de enriquecimiento (sameAs vacío, sin schema de los inmuebles listados), pero nada contradice la página.

*Evidencia:*
- Tipos detectados: Organization, RealEstateAgent, WebSite, FAQPage; 0 bloques inválidos
- Schema: telefono +59177666205 / correo inmobiliaria@bastet.uno; pie de página: «+591 77666205» e «inmobiliaria@bastet.uno»
- Dirección en schema y en el pie coinciden (Calle Yanacocha, Edif. Cristal, Piso 7, Of. 706, La Paz)
- FAQPage con 7 preguntas = 7 H3 de «Preguntas frecuentes» visibles en la página
- sameAs vacío en Organization y WebSite; la página no tiene Product/Offer ni ItemList para sus ~20 inmuebles con precio

#### AEO 5 · Contenido legible sin JavaScript: 1/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae 1,053 de 1,771 palabras (59%), así que cae en el rango de 40–80%. El H1 y la sección de confianza ya vienen sin JavaScript, pero el HTML crudo pasa del H1 directo a «Haz que tu espacio trabaje para ti»: los listados con nombre, ciudad y precio (Estadías por noche, Inmuebles en venta, En alquiler, En anticrético) solo aparecen tras renderizar con JavaScript. Es justo el contenido de oferta que un bot de IA sin JS no vería.

*Evidencia:*
- 59% del texto en el HTML inicial (1053 de 1771 palabras)
- Encabezados del HTML crudo: H1 «Encuentra dónde vivir o dónde quedarte» seguido de H2 «Haz que tu espacio trabaje para ti»; faltan las secciones de inmuebles
- Solo 22 encabezados en el crudo frente a unos 50 en la página renderizada
- Faltan en el crudo los precios de los listados, por ejemplo «Bs 150 por noche» o «100.000 USD»

*Cómo mejorarlo:*
- Genera en el servidor (SSR o HTML estático en el build) las tarjetas de «Estadías por noche», «Inmuebles en venta», «En alquiler» y «En anticrético», con título, ciudad y precio dentro del HTML inicial, en vez de cargarlas con JavaScript desde la base de datos.
- Si no puedes hacer SSR de todo, incluye al menos las 3 a 4 propiedades destacadas de cada sección en el HTML y deja que JavaScript cargue el resto.
- Agrega un JSON-LD ItemList con las propiedades destacadas (nombre, URL, precio) en el HTML inicial para que los bots sin JavaScript también vean la oferta.

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt permite explícitamente GPTBot, ClaudeBot, Google-Extended, PerplexityBot (y también OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, CCBot y Applebot-Extended) con «Allow: /». La única restricción es «Disallow: /admin/» (panel de administración), que no es una sección de contenido. Además declara el sitemap y existe /llms.txt (bonus informativo, no suma puntaje).

*Evidencia:*
- Bloque de GPTBot, ClaudeBot, Google-Extended, Applebot-Extended y CCBot: «Allow: /» y «Disallow: /admin/»
- Bloque con PerplexityBot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot y Claude-User: «Allow: /»; el resto de bots (*) también tiene «Allow: /»
- Sitemap: https://bastet.uno/sitemap.xml
- llms.txt presente en https://bastet.uno/llms.txt (bonus)

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Predominan los párrafos cortos (promedio de 17 palabras, solo 1 largo de 76) y cada sección trata un solo tema: estadías, venta, alquiler, anticrético, anfitriones, verificación, FAQ, servicio legal. Se usan listas donde corresponde (beneficios para anfitriones y servicios legales) y tarjetas con precio. No hay tablas ni pasos numerados, pero no hacen falta para el tipo de contenido.

*Evidencia:*
- 76 párrafos, promedio de 17 palabras, 9 ítems de lista
- Lista de beneficios: «Publicar es gratis y no vence…», «Tú aceptas cada reserva…», «Tú cobras el 90 % directo del huésped…»
- Lista de servicios legales: «Verificación registral y catastral», «Revisión de títulos y cadena de propiedad»…

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre "Bastet" coincide en title, og:site_name y schema (Organization y WebSite), y el pie dice "© 2026 Bastet Real State S.R.L.". Teléfono (+59177666205 / +591 77666205), correo (inmobiliaria@bastet.uno) y dirección (Calle Yanacocha, Edif. Cristal, Piso 7, Of. 706, La Paz) son los mismos en el pie y en el schema, y la descripción de meta y schema es consistente. Falta lo de las redes: no hay un solo enlace a perfiles oficiales (solo un enlace de WhatsApp) y todos los `sameAs` del schema están vacíos.

*Evidencia:*
- Nombre: title "Bastet · Compra, alquila o reserva una estadía en Bolivia"; og:site_name "Bastet"; schema name "Bastet" (x2)
- Pie: "© 2026 Bastet Real State S.R.L." (razón social; "State" parece errata de "Estate")
- Contacto: pie "+591 77666205" e "inmobiliaria@bastet.uno" = schema telephone "+59177666205" y email idéntico
- Dirección: pie "Calle Yanacocha, Edif. Cristal, Piso 7, Of. 706 — La Paz, Bolivia" = schema "…Of. 706, La Paz, BO"
- Redes: no hay enlaces a Facebook, Instagram, TikTok, LinkedIn ni YouTube en pagina.json; solo api.whatsapp.com
- sameAs vacío en los 3 nodos JSON-LD (Organization/RealEstateAgent, WebSite, FAQPage)

*Cómo mejorarlo:*
- Enlaza en el pie los perfiles oficiales de Bastet (Facebook, Instagram, TikTok o LinkedIn, los que existan) con URLs completas al perfil, no a la página principal de la red.
- Agrega esos mismos perfiles al arreglo `sameAs` del nodo Organization/RealEstateAgent del JSON-LD.
- Convierte `address` del schema en un objeto PostalAddress (streetAddress "Calle Yanacocha, Edif. Cristal, Piso 7, Of. 706", addressLocality "La Paz", addressCountry "BO") y corrige la errata "Real State" por la razón social correcta en el pie.

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Las afirmaciones clave vienen con cifras verificables: porcentajes de cobro, plazos en horas y días, precios en cada tarjeta y un caso real con número. Casi no hay frases vacías de tipo «somos los mejores». Observación: algunos precios de alquiler no indican el periodo (p. ej. «800 USD») y «Casa en Achumani» aparece en alquiler con «350.000 USD», que parece un error de captura; no cambia la nota, pero un buscador con IA podría citarlo mal.

*Evidencia:*
- «Tú cobras el 90 % directo del huésped. Bastet cobra solo el 10 %…»
- «tienes 2 horas para responder»; «Cancelas gratis durante 4 horas»
- «30 días plazo estándar de resolución; hasta 3 meses en casos de mayor complejidad registral»; «+500 alianzas con notarías…»
- «Bs 150 por noche»; «Casi compro un inmueble con 15 gravámenes y gracias a la asesoría de Bastet no pasó.»

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Solo hay señales débiles. El © 2026 es el año vigente, y hay testimonios con nombre y foto (Susana Camacho: "Casi compro un inmueble con 15 gravámenes…"), pero sin ciudad, empresa ni calificación, y solo una cita se ve en el texto. No hay equipo ni autor con nombre, ni página "Acerca de" (solo la FAQ "¿Qué es Bastet?"), ni fuentes externas. Los "hallazgos" del script sobre "por QR", "actualizado de Derechos Reales" y los enlaces a empresas.html son falsos positivos del formulario de publicación.

*Evidencia:*
- Quién está detrás: solo la razón social "Bastet Real State S.R.L." en el pie; mencionaEquipo: false; no se nombra a ninguna persona ("un asesor de Bastet", "nuestro equipo legal" son genéricos)
- Actualización: sin <time>, sin dateModified, sin fecha visible; solo "© 2026" (señal débil; el "actualizado de Derechos Reales" del script viene del formulario de documentos)
- Acerca de: sin enlace a "Nosotros" o "Acerca de" en nav ni pie; los enlaces legales sí existen (Política de privacidad, Términos de uso, Derechos de autor/DMCA); lo más cercano es la FAQ "¿Qué es Bastet y qué puedo hacer en el sitio?"
- Testimonios: sección "Lo que cuentan quienes ya encontraron su lugar" con 11 nombres y fotos (Susana Camacho, María Elena Rojas, Carlos Fernández, "Familia Quispe Mamani"…), pero solo 1 cita en el texto y sin Review/AggregateRating en schema (schemaReview: false)
- "Empresas que trabajan con nosotros": 18 imágenes con el mismo src (hospeda-a-tu-gente.webp) y el mismo alt "Hospeda a tu gente con nosotros"; no identifican a ninguna empresa
- Fuentes externas enlazadas: 0; sí existe un verificador propio (bastet.uno/verificar) que respalda la credibilidad de los inmuebles

*Cómo mejorarlo:*
- Crea una página "Acerca de Bastet" (enlazada desde el nav y el pie) con historia, razón social, año de fundación, y los nombres, cargos y fotos de las personas del equipo o dirección.
- Muestra una fecha visible de actualización (por ejemplo "Inmuebles actualizados el 15 de noviembre de 2026") y agrega `dateModified` en el JSON-LD de la página.
- Completa cada testimonio con ciudad, tipo de operación y fecha, muestra las citas en texto visible y márcalos con schema Review. Sustituye las 18 imágenes idénticas de "Empresas que trabajan con nosotros" por logos reales con el nombre de cada empresa en el alt.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 7 · Imágenes** (1/2): Da un alt distinto a cada una de las 18 imágenes de «Empresas que trabajan con nosotros», con el nombre de la empresa o lo que muestra (por ejemplo «Logo de [empresa]»), en lugar de repetir «Hospeda a tu gente con nosotros».
2. **SEO 9 · Móvil** (1/2): Agrega un botón de menú (hamburguesa) visible en el encabezado móvil, junto a «Instalar app», que abra Inicio, Propiedades, Estadías, Sé anfitrión y Acceder.
3. **AEO 5 · Contenido legible sin JavaScript** (1/2): Genera en el servidor (SSR o HTML estático en el build) las tarjetas de «Estadías por noche», «Inmuebles en venta», «En alquiler» y «En anticrético», con título, ciudad y precio dentro del HTML inicial, en vez de cargarlas con JavaScript desde la base de datos.
4. **AEO 8 · Identidad clara y consistente** (1/2): Enlaza en el pie los perfiles oficiales de Bastet (Facebook, Instagram, TikTok o LinkedIn, los que existan) con URLs completas al perfil, no a la página principal de la red.
5. **AEO 10 · Señales de confianza** (1/2): Crea una página "Acerca de Bastet" (enlazada desde el nav y el pie) con historia, razón social, año de fundación, y los nombres, cargos y fotos de las personas del equipo o dirección.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
