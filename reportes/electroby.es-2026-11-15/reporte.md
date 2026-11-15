# Calificación SEO + AEO: https://electroby.es/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 97.

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
| 1 | Respuesta directa arriba | ■■ 2/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | ■■ 2/2 | Agente | agente |
| 3 | Preguntas frecuentes | ■■ 2/2 | Agente | agente |
| 4 | Datos estructurados | ■■ 2/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■■ 2/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | ■■ 2/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | ■■ 2/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 51 caracteres: «Instalaciones LED y eléctricas en Quito | ELECTROBY». Dice el servicio, la ciudad y la marca, y es coherente con el H1; no es genérico.

*Evidencia:*
- title: «Instalaciones LED y eléctricas en Quito | ELECTROBY»
- 1 etiqueta <title>, 51 caracteres
- H1: «Instalaciones LED y eléctricas en Quito para hogares y empresas»

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 150 caracteres (dentro de 140–160), nombra servicio, zonas y garantía, y cierra con una llamada a la acción: «Cotiza por Telegram». Están og:title, og:description y og:image; la imagen es una URL absoluta (https://electroby.es/wp-content/uploads/2026/11/01-hero-instalacion.jpg) con ancho, alto y texto alternativo, y también hay twitter:card summary_large_image.

*Evidencia:*
- meta description: 150 caracteres, «…garantía de 15 días en mano de obra. Cotiza por Telegram.»
- og:title, og:description y og:image presentes
- og:image absoluta, 1600x1000, con og:image:alt
- twitter:card = summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 que dice de qué trata la página. La jerarquía es H1, H2 (8), H3 (22) y H4 (22) sin saltos de nivel. Los H4 son los servicios dentro de cada categoría H3 y los H3 de la sección de preguntas frecuentes son las preguntas; es estructura real, no estilo. No hay encabezados en el menú ni en el pie.

*Evidencia:*
- 1 H1: «Instalaciones LED y eléctricas en Quito para hogares y empresas»
- Resumen: h1=1, h2=8, h3=22, h4=22, h5=0, h6=0; saltos: []
- H2 → H3 → H4: «Servicios eléctricos y de iluminación LED» → «1. Servicios Eléctricos Residenciales Esenciales» → «Instalación eléctrica residencial (mano de obra)»
- La lista de la evidencia del criterio está cortada en 40 entradas; pagina.json trae los 53 encabezados completos y también sin saltos

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (instalaciones LED y eléctricas en Quito) coincide en el título, el H1 y el primer párrafo real del contenido: «Instalamos iluminación LED, tableros, mantenimiento, domótica y seguridad eléctrica… en Quito». El contenido principal tiene unas 1,300 palabras con servicios, pasos, cobertura y preguntas frecuentes; hay cierta repetición de cobertura y horario, pero no es relleno.

*Evidencia:*
- Título: «Instalaciones LED y eléctricas en Quito | ELECTROBY»
- H1: «Instalaciones LED y eléctricas en Quito para hogares y empresas»
- Primer párrafo: «Instalamos iluminación LED, tableros, mantenimiento, domótica y seguridad eléctrica para hogares, locales e industrias en Quito…»
- palabrasContenido: 1321 (umbral 300)

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página es indexable: la meta robots dice «index, follow…», no hay X-Robots-Tag y el canonical apunta a sí misma (https://electroby.es/). Responde 200 sin redirecciones, usa HTTPS y declara lang="es", que coincide con el idioma del contenido.

*Evidencia:*
- meta robots: index, follow, max-snippet:-1, max-image-preview:large
- X-Robots-Tag: null
- canonical: https://electroby.es/
- HTTP 200, sin cadena de redirecciones
- <html lang="es">, og:locale es_ES, contenido en español

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

El robots.txt existe (200), permite todo el sitio y solo bloquea /wp-admin/, /wp-login.php, /?s= y /search/, además de declarar el sitemap. El sitemap_index.xml responde 200 y es válido; las 20 URLs de la muestra están en https://electroby.es (mismo dominio y protocolo) e incluyen la portada. Detalle menor: en el sitemap aparece /hello-world/, la entrada de ejemplo de WordPress.

*Evidencia:*
- robots.txt: «User-agent: * / Allow: / / Disallow: /wp-admin/…»; «Sitemap: https://electroby.es/sitemap_index.xml»
- sitemap_index.xml: 200, válido, 20 URLs en la muestra, incluyeLaPagina=true
- Ejemplos: /blog/, /hello-world/, /, /politica-de-privacidad/, /nosotros/

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

El alt es bueno: las 10 imágenes con contenido lo tienen y describen lo que se ve (por ejemplo «Electricista probando un tablero eléctrico residencial con multímetro» o «Cámaras de seguridad CCTV instaladas en una pared»), sin alt vacío en imágenes grandes. El peso total es moderado (322 KB, ninguna imagen > 300 KB), pero Lighthouse marca la imagen principal como sobredimensionada (uses-responsive-images, ahorro estimado de 215 KiB sobre 251 KB) y sin formato moderno (modern-image-formats, 164 KiB), así que el parámetro de peso queda a medias.

*Evidencia:*
- 10 de 10 imágenes con contenido con alt descriptivo; altVacioEnImagenesGrandes: []
- 01-hero-instalacion.jpg pesa 256,794 bytes y Lighthouse estima 220,461 bytes de ahorro con tamaños responsivos
- modern-image-formats: ahorro de 164 KiB (hero JPG ≈ 100 KB y logo PNG 768x128 de 73 KB ≈ 67 KB)
- Peso total de imágenes: 322 KB; las demás imágenes ya usan loading="lazy"

*Cómo mejorarlo:*
- Sirve 01-hero-instalacion.jpg con srcset/sizes (por ejemplo 390, 780 y 1200 px de ancho) para que el teléfono no descargue la versión grande; Lighthouse estima ahorrar unos 215 KiB.
- Convierte el hero JPG y el logo PNG (electroby-logo-horizontal-768x128.png) a WebP o AVIF, o el logo a SVG, para recuperar cerca de 164 KiB.

#### SEO 8 · Velocidad: 2/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: Lighthouse móvil da rendimiento 97 (mínimo 80), LCP 2.12 s (máximo 2.5 s) y CLS 0.000 (máximo 0.1); TBT es 0 ms y la respuesta del servidor tardó 360 ms. Es una sola medición, así que puede variar entre corridas y equipos; el LCP tiene solo unos 0.4 s de margen. Lo único marcado es eliminar recursos que bloquean el render (ahorro estimado de 350 ms).

*Evidencia:*
- Rendimiento 97, LCP 2120 ms, CLS 0, TBT 0 ms, Speed Index 2600 ms
- server-response-time: el documento raíz tardó 360 ms
- render-blocking-resources: ahorro estimado de 350 ms (score 0)
- Peso total de la página: 403 KiB

#### SEO 9 · Móvil: 2/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport (width=device-width, initial-scale=1), no hay scroll horizontal y solo el 0.4% del texto es menor a 12px. En movil-arriba.png el encabezado, el menú hamburguesa (arriba a la derecha), el texto del hero y los dos botones grandes («Cotizar por Telegram» y «Llamar ahora») se ven completos, sin encimar ni cortar, y no hay banner de cookies ni pop-up que tape la pantalla. La captura completa (recortada a 3000 px) muestra tarjetas, formulario y secciones bien apiladas en una columna. Detalle menor: dos enlaces de lista miden 21 px de alto («2. Iluminación Residencial», «4. Seguridad Eléctrica Residencial»), aunque son anchos y fáciles de tocar.

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desbordeHorizontalPx: 0
- caracteresPequenos: 39 de 8920 (0.4%)
- 4 de 41 objetivos táctiles < 24 px: skip link oculto, 2 enlaces de 21 px de alto y un checkbox de 20x18
- Captura: menú hamburguesa visible, botones CTA grandes, sin pop-ups ni contenido encimado

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 5 enlaces internos (Inicio, Servicios, Galería, FAQ, Contacto, más el botón «Cotizar por Telegram»). De 9 enlaces internos revisados, 0 están rotos y ninguno quedó sin verificar. Las anclas son descriptivas («Ver servicio de iluminación LED», «2. Iluminación Residencial») y no hay «clic aquí» ni «leer más». Las URLs son slugs legibles como /servicios-electricos-residenciales/. Observación menor: el encabezado trae un enlace «Cart», en inglés, que apunta a la portada.

*Evidencia:*
- revisados: 9, rotos: [], sinVerificar: []
- enlacesGenericos: [], enlacesSinTexto: [], urlsPocoLegibles: []
- Lighthouse «Links have descriptive text»: score 1
- URLs: /iluminacion-residencial/, /automatizacion-domotica-residencial/, /politica-de-privacidad/, /nosotros/

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

La primera frase del contenido dice qué hace (instalación de iluminación LED, tableros, domótica y seguridad eléctrica), para quién (hogares, locales e industrias) y dónde (Quito, Cumbayá, Tumbaco, Sangolquí, Valle de los Chillos). La segunda frase añade cómo trabajan y la garantía. Son 44 palabras, dentro del rango, y el bloque aparece justo debajo del H1.

*Evidencia:*
- «Instalamos iluminación LED, tableros, mantenimiento, domótica y seguridad eléctrica para hogares, locales e industrias en Quito, Cumbayá, Tumbaco, Sangolquí y Valle de los Chillos.»
- «Trabajamos a domicilio, con cotización clara, materiales por cuenta del cliente y garantía de 15 días en mano de obra.»
- 44 palabras en el primer párrafo

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Los H2 «Por qué elegir ELECTROBY» y «Cómo trabajamos» no son preguntas reales (el script los marcó por la palabra interrogativa). Aun así, el H2 «Preguntas frecuentes» contiene 10 H3 que sí son preguntas reales de un usuario, y cada una se responde en la primera frase justo debajo. Un par de respuestas son parcialmente evasivas (precio y costo de la visita se remiten a la cotización), pero la mayoría es directa.

*Evidencia:*
- H3: «¿Los materiales están incluidos?» → «Los materiales no están incluidos: son por cuenta del cliente, salvo acuerdo escrito diferente.»
- H3: «¿Qué formas de pago aceptan?» → «Aceptamos pagos por bancos, Binance o efectivo…»
- H3: «¿Atienden emergencias eléctricas 24/7?» → «Atendemos emergencias eléctricas 24/7 con respuesta en 2 horas…»
- 10 H3 en forma de pregunta; solo 0 de los 8 H2 son preguntas reales

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección «Preguntas frecuentes» visible en el texto de la página (no solo en el schema), con 10 preguntas y respuestas de 1–2 frases cada una, completas y autocontenidas. Ninguna se limita a «contáctanos».

*Evidencia:*
- H2 «Preguntas frecuentes» con 10 H3 y su párrafo de respuesta en texto.md
- «La garantía es de 15 días y cubre solo la mano de obra; no cubre materiales del cliente, daños de terceros ni trabajos adicionales no cotizados.»
- «El RUC está en trámite; la facturación electrónica estará disponible… previsto para después del 1 de febrero de 2027.»

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 2 bloques JSON-LD válidos con @context schema.org, presentes en el HTML inicial. El tipo es adecuado para un negocio de servicios: Organization + Electrician (subtipo de LocalBusiness), más WebSite, WebPage y un FAQPage con 10 preguntas que coincide con las 10 preguntas visibles en la página. Teléfono (+593997631506 vs 0997631506 en la página) y correo coinciden con el contenido visible, y el address «Quito, EC» no contradice el aviso «Sin local físico; servicio a domicilio». Detalles menores que no restan: el nodo Article es poco natural para una página de inicio de servicios, y el address es texto simple, no un PostalAddress.

*Evidencia:*
- Tipos: Organization, Electrician, WebSite, ImageObject, WebPage, Article, FAQPage; sin bloques inválidos
- Organization/Electrician: name «ELECTROBY», url https://electroby.es/, telephone +593997631506, email byron92m.bot@gmail.com
- FAQPage con 10 preguntas; texto.md muestra 10 preguntas en la sección «Preguntas frecuentes»
- Página: «Teléfono y Telegram 0997631506»; «Dirección: Sin local físico; servicio a domicilio con coordinación previa»
- Script: estaEnHtmlCrudo = true, coincideConLaPagina = true

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML crudo trae 1324 palabras frente a 1321 de la página renderizada (100%). El H1 «Instalaciones LED y eléctricas en Quito para hogares y empresas», los H2/H3/H4 de servicios y los textos de oferta ya están en el HTML inicial, así que un bot que no ejecuta JavaScript ve el contenido que importa (servicios, cobertura, garantía, FAQ y datos de contacto).

*Evidencia:*
- palabrasHtmlCrudo 1324 / palabrasRenderizado 1321 (proporción 1)
- H1 y encabezados H2–H4 presentes en el HTML crudo («Servicios eléctricos y de iluminación LED», «Instalación eléctrica residencial (mano de obra)»)
- primerasPalabrasCrudo: «Instalaciones LED y eléctricas en Quito para hogares y empresas»

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt permite explícitamente a los cuatro bots de la rúbrica: GPTBot, ClaudeBot, PerplexityBot y Google-Extended tienen cada uno su grupo con «Allow: /» y sin ningún Disallow. Las únicas restricciones están en «User-agent: *» (/wp-admin/, /wp-login.php, /?s=, /search/) y no afectan al contenido útil. El archivo no parece administrado por una plataforma: no hay directivas Content-Signal ni bloques gestionados de Cloudflare; parece una configuración manual en WordPress, con Sitemap https://electroby.es/sitemap_index.xml. Además existe llms.txt (https://electroby.es/llms.txt), que se menciona como bonus informativo sin subir el puntaje.

*Evidencia:*
- robots.txt: «User-agent: GPTBot / Allow: /», «User-agent: ClaudeBot / Allow: /», «User-agent: PerplexityBot / Allow: /», «User-agent: Google-Extended / Allow: /»
- Grupo «*»: Disallow solo de /wp-admin/, /wp-login.php, /?s=, /search/
- Sin Content-Signal ni marcas de Cloudflare en el robots.txt
- llms.txt existe: empieza con «# ELECTROBY» y lista servicios principales (bonus, no cambia el puntaje)

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Los párrafos son cortos (promedio 13 palabras, ninguno largo), hay un proceso en 4 pasos numerados, viñetas de contacto y un esquema claro H2/H3/H4 con un servicio por encabezado. Cada sección trata un solo tema (servicios, galería, ventajas, proceso, cobertura, FAQ, contacto).

*Evidencia:*
- 67 párrafos, promedio 13 palabras, 0 párrafos largos
- «Cómo trabajamos» con lista numerada: «1. Nos contactas… 4. Ejecución y pruebas…»
- Servicios agrupados en 5 categorías con H4 de una línea cada uno

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «ELECTROBY» es idéntico en title, og:site_name, encabezado, © 2026 y en el schema (Organization/WebSite). La descripción, el teléfono (0997631506 = +593997631506) y el correo (byron92m.bot@gmail.com) coinciden entre página y schema, y la ubicación es coherente («sin local físico» en la página, «Quito, EC» en el schema). Lo que falta son redes oficiales: el único perfil enlazado en la página es un bot de Telegram con nombre de persona (t.me/ByronMartinezBot) y el segundo sameAs es un enlace corto opaco (share.google/...) que no aparece en la página.

*Evidencia:*
- Nombre: title «Instalaciones LED y eléctricas en Quito | ELECTROBY», og:site_name «ELECTROBY», schema name «ELECTROBY», pie «© 2026 ELECTROBY».
- Teléfono en página «0997631506» y en schema «+593997631506»; correo en página y en schema «byron92m.bot@gmail.com» (el «telegrambyron92m.bot@gmail.com» detectado es solo texto pegado «Correo y Telegram» + el correo, no es un segundo correo).
- Página: «Dirección: Sin local físico; servicio a domicilio con coordinación previa». Schema: address «Quito, EC» (texto simple, no PostalAddress); sin mapas.
- Redes en la página: solo https://t.me/ByronMartinezBot. sameAs del schema: t.me/ByronMartinezBot y https://share.google/2kZe1YDV2eFYFRt2Q. No hay Facebook, Instagram, Google Business, LinkedIn ni WhatsApp.
- El handle y el correo usan «Byron» pero la página nunca dice quién es; la marca (ELECTROBY) y los canales (ByronMartinezBot) no se vinculan de forma explícita.

*Cómo mejorarlo:*
- Enlaza en el pie y en el sameAs los perfiles oficiales de la marca (Facebook, Instagram, ficha de Google Business Profile o Google Maps) con la URL completa y estable en lugar del acortador share.google.
- Cambia el address del schema a un PostalAddress (addressLocality «Quito», addressRegion «Pichincha», addressCountry «EC») y agrega areaServed con Cumbayá, Tumbaco, Sangolquí y Valle de los Chillos para reflejar el servicio a domicilio.
- Aclara en la página que el bot de Telegram lo opera ELECTROBY (por ejemplo, «Telegram oficial de ELECTROBY») y, si es posible, crea un canal o handle con el nombre de la marca para que coincida con el nombre del negocio.

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

La página sustenta sus afirmaciones con datos operativos verificables: garantía de 15 días, respuesta en 2 horas, atención 24/7, horario lunes a viernes de 9am a 5pm, localidades nombradas, formas de pago, teléfono y una fecha (1 de febrero de 2027). Casi no hay frases vacías tipo «somos los mejores». Su punto débil es que no muestra ningún precio, tarifa ni caso real (la galería son fotos de referencia de Pexels).

*Evidencia:*
- «garantía de 15 días en mano de obra»
- «Emergencias eléctricas 24/7 con respuesta en 2 horas»
- «lunes a viernes, 9am a 5pm»
- Script: 37 números, 9 horarios, 1 fecha, 0 precios

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

De las cuatro señales solo dos son claras: la fecha de actualización («Última actualización: 14 de noviembre de 2026», dateModified 2026-11-14 y © 2026) y un enlace «Acerca de ELECTROBY» a /nosotros/ en el pie. No se ve quién está detrás (el autor del schema es la propia Organization, sin persona ni equipo con nombre) y no hay testimonios, reseñas ni fuentes citadas con enlace. Con 2 de 4 señales, y las otras dos ausentes, corresponde 1.

*Evidencia:*
- Fecha: pie «Última actualización: 14 de noviembre de 2026. © 2026 ELECTROBY.»; dateModified «2026-11-14T22:09:15-05:00» en WebPage y Article.
- Acerca de: pie «Acerca de ELECTROBY» → https://electroby.es/nosotros/; además hay una sección «Información del negocio y cobertura» en la portada. No se revisó el contenido de /nosotros/ (no está en la evidencia).
- Quién está detrás: author del Article = «https://electroby.es/#organization» (la empresa); mencionaEquipo = false; el «por TelegramLlamar» detectado es texto de botones, no un autor. No hay nombre, foto, experiencia ni registro del electricista.
- Testimonios/reseñas: 0 citas, sin encabezado de opiniones, sin schema Review/AggregateRating. Fuentes externas con enlace: 0.
- La galería declara «Fotografías de referencia: Pexels» (fotos de stock, no trabajos propios), y la FAQ indica «El RUC está en trámite»; ambos datos son honestos pero restan credibilidad.

*Cómo mejorarlo:*
- Muestra en la portada y en /nosotros/ a la persona o equipo con nombre, rol, años de experiencia y credenciales o registro profesional (por ejemplo, «Byron Martínez, electricista, X años de experiencia en Quito»), con foto real, y refléjalo en el schema como Person (author/founder).
- Agrega al menos 3 testimonios verificables con nombre, sector de Quito y tipo de trabajo, o enlaza tus reseñas de Google con calificación, y marca el schema con Review/AggregateRating solo si son reales.
- Sustituye las fotos de stock de Pexels por fotos de trabajos propios con ubicación y fecha, y cita con enlace las fuentes normativas que respaldas (por ejemplo, la norma técnica o la empresa distribuidora que mencionas en los trámites).

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 7 · Imágenes** (1/2): Sirve 01-hero-instalacion.jpg con srcset/sizes (por ejemplo 390, 780 y 1200 px de ancho) para que el teléfono no descargue la versión grande; Lighthouse estima ahorrar unos 215 KiB.
2. **AEO 8 · Identidad clara y consistente** (1/2): Enlaza en el pie y en el sameAs los perfiles oficiales de la marca (Facebook, Instagram, ficha de Google Business Profile o Google Maps) con la URL completa y estable en lugar del acortador share.google.
3. **AEO 10 · Señales de confianza** (1/2): Muestra en la portada y en /nosotros/ a la persona o equipo con nombre, rol, años de experiencia y credenciales o registro profesional (por ejemplo, «Byron Martínez, electricista, X años de experiencia en Quito»), con foto real, y refléjalo en el schema como Person (author/founder).

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
