# Calificación SEO + AEO: https://chipchoppetshop.com/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 98.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **19** | 20 | 95% |
| AEO | **19** | 20 | 95% |
| **Total** | **38** | 40 | 95% |

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
| 8 | Identidad clara y consistente | ■■ 2/2 | Agente + script | agente |
| 9 | Datos concretos | ■■ 2/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 58 caracteres: «Chip Chop Pet Shop | Tienda de mascotas en Quito con envío». Incluye la marca, el tipo de negocio y la ciudad, y es coherente con el H1 («Tienda de mascotas en Quito: Chip Chop Pet Shop»). No es genérico.

*Evidencia:*
- Título: «Chip Chop Pet Shop | Tienda de mascotas en Quito con envío»
- 1 etiqueta <title>, 58 caracteres
- El H1 comparte tema y marca con el título

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 151 caracteres (dentro de 140–160) y es concreta: «Alimento, snacks y accesorios para perros y gatos en Quito. Compra en línea, paga con Deuna y retira en tienda o recibe en Norte, Centro, Sur y Valles.» Dice qué se vende, dónde y cómo comprar. Están og:title, og:description y og:image, y la imagen es una URL absoluta; también hay twitter:card summary_large_image.

*Evidencia:*
- meta description: 151 caracteres
- og:image: https://chipchoppetshop.com/img/og-image.jpg (URL absoluta)
- og:title y og:description presentes, iguales al título y a la descripción
- twitterCard: summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 («Tienda de mascotas en Quito: Chip Chop Pet Shop») que dice de qué trata la página. Siguen 10 H2 y 6 H3 sin saltos de nivel (los H3 cuelgan del H2 «Preguntas frecuentes»). Los encabezados marcan secciones reales, no se usan para dar estilo al menú, al pie ni a las tarjetas de producto.

*Evidencia:*
- Resumen: H1=1, H2=10, H3=6, H4–H6=0
- Saltos de nivel: ninguno
- Los 6 H3 están todos dentro de «Preguntas frecuentes»

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (tienda de mascotas en Quito) aparece en los tres lugares: título «Chip Chop Pet Shop | Tienda de mascotas en Quito con envío», H1 «Tienda de mascotas en Quito: Chip Chop Pet Shop» y primer párrafo «Chip Chop Pet Shop es una tienda de mascotas en Quito…». El script cuenta 1,125 palabras en el contenido principal; aun descontando las tarjetas de producto repetidas, quedan unas 600 de texto útil (compra, envíos, ubicación, FAQ), muy por encima de 300.

*Evidencia:*
- Título: «Chip Chop Pet Shop | Tienda de mascotas en Quito con envío»
- H1: «Tienda de mascotas en Quito: Chip Chop Pet Shop»
- Primer párrafo: «Chip Chop Pet Shop es una tienda de mascotas en Quito, en Serapio Japerabi y Miguel Pontón…»
- palabrasContenido: 1125 (umbral 300)

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 en HTTPS, sin redirecciones. La meta robots es «index, follow» y no hay X-Robots-Tag. El canonical apunta a la propia URL (https://chipchoppetshop.com/) y el <html> declara lang="es-EC", que coincide con el contenido en español de Ecuador.

*Evidencia:*
- metaRobots: index, follow; xRobotsTag: null
- canonical: https://chipchoppetshop.com/
- lang="es-EC"; status 200 sin redirecciones

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml (200, válido) con 97 URL del mismo dominio y protocolo, entre ellas la home, /productos/, /perros/, /gatos/ y fichas de producto. El robots.txt permite todo el sitio (Allow: /) y solo bloquea rutas privadas de la tienda: /panel/, /checkout/, /pedido/ y /carrito/. Declara el sitemap.

*Evidencia:*
- robots.txt: User-Agent * con Allow: / y Disallow solo de /panel/, /checkout/, /pedido/, /carrito/
- Sitemap: https://chipchoppetshop.com/sitemap.xml
- 97 URL en el sitemap; incluye la página auditada

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

El alt es muy bueno: las 21 imágenes con contenido lo tienen y describen el producto con presentación y tamaño (p. ej. «NutraPro Adultos, Razas medianas y grandes, Funda 2 kg»); los dos alt vacíos son el isotipo y la mascota Caramelo, decorativos y pequeños. No hay imágenes pesadas (223 KB en total, ~13 KB por foto en WebP), pero Lighthouse marca uses-responsive-images con ahorro estimado de 88 KiB porque se sirven las versiones de 400 px a tarjetas más chicas. Es un detalle menor en peso absoluto, pero es el único parámetro a medias.

*Evidencia:*
- 21 de 21 imágenes con contenido tienen alt válido; sinAlt: [] y altVacioEnImagenesGrandes: []
- imagenesPesadas: [] y pesoTotalImagenesKB: 223
- Lighthouse uses-responsive-images: score 0.5, «Est savings of 88 KiB» (archivos *-400.webp de ~13 KB con ~7 KB de ahorro cada uno)
- uses-optimized-images, modern-image-formats y offscreen-images: score 1

*Cómo mejorarlo:*
- Agrega srcset y sizes a las fotos de producto para que el teléfono descargue la variante -160 en las tarjetas pequeñas y la -400 solo cuando el espacio la necesite (el sitio ya genera ambos tamaños).
- Revisa las tarjetas marcadas por Lighthouse (Felix sabor Salmón, Carnitas Snack de Carne XL, NutraPro Adultos, Shampoo antipulgas con Fipronil) y sirve imágenes del tamaño real con el que se muestran.

#### SEO 8 · Velocidad: 2/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: en Lighthouse móvil el rendimiento es 98 (≥ 80), el LCP es 1.74 s (< 2.5 s) y el CLS es 0.000 (< 0.1). Es una sola medición, así que los números pueden variar unos puntos entre corridas y entre equipos o redes.

*Evidencia:*
- Rendimiento 98; SEO 100 (Lighthouse 12.8.2)
- LCP 1,744 ms; FCP 969 ms; CLS 0
- TBT 152 ms; Speed Index 1,406 ms
- Respuesta del servidor: documento raíz en 90 ms; peso total de la página 486 KiB
- Único aviso menor: unused-javascript, ahorro estimado de 25 KiB (score 0.5)

#### SEO 9 · Móvil: 2/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport (width=device-width, initial-scale=1) y las capturas móviles confirman al script: nada cortado ni encimado, sin banner de cookies ni pop-up que tape la pantalla, y el encabezado trae botón «Menú» con texto y carrito bien visibles, además de una barra inferior fija (Inicio, Productos, Carrito, WhatsApp). El texto es grande y se lee sin zoom, y los botones («Ver productos y precios», «Pedir por WhatsApp», «Agregar al carrito») son anchos y están bien separados. Solo 1 de 90 objetivos táctiles mide menos de 24 px de alto (el enlace de teléfono, 22 px), un detalle menor. La captura completa está recortada a 3000 px, así que no vi el pie de página; ahí aplican las métricas del script.

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desbordeHorizontalPx: 0
- 0% del texto menor a 12 px (6,101 caracteres medidos)
- 1 de 90 enlaces/botones menor a 24 px: «099 525 2457», 256×22 px
- movil-arriba.png: título, botones y barra inferior legibles; sin elementos encimados ni banner de cookies
- movil-completa.png (primeros 3000 px): el cintillo de Black Friday, las categorías y las tarjetas de producto se acomodan sin cortes; la barra inferior fija aparece a media captura solo por el modo de captura de página completa

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 9 enlaces internos (Productos, Cómo comprar, Envíos, Seguros, Preguntas frecuentes, Quiénes somos, Blog, Carrito). Se revisaron los 24 enlaces internos únicos y ninguno está roto; no hay enlaces sin verificar. No hay anclas genéricas ni enlaces sin texto (Lighthouse link-text: 1). Las URLs son legibles (/como-comprar/, /envios/, /perros/).

*Evidencia:*
- 0 rotos de 24 enlaces internos revisados; sinVerificar vacío
- 0 enlaces genéricos y 0 sin texto
- 0 de 25 URLs internas poco legibles
- Anclas como «Ver productos y precios» y «Leer el blog» describen el destino

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Las dos primeras frases (38 palabras, dentro del rango) dicen qué es («una tienda de mascotas en Quito, en Serapio Japerabi y Miguel Pontón, abierta todos los días de 8:00 a 22:00»), qué ofrece («alimento, snacks y accesorios») y para quién («para perros, gatos, conejos y peces»). La tercera frase añade cómo se compra, sin relleno ni eslóganes antes.

*Evidencia:*
- «Chip Chop Pet Shop es una tienda de mascotas en Quito… abierta todos los días de 8:00 a 22:00.»
- «Vendemos alimento, snacks y accesorios para perros, gatos, conejos y peces.»
- «Compras en línea, pagas con Deuna y retiras en el local o lo recibes en tu casa.»

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

7 de los 10 H2 son preguntas reales y la mayoría se responde en la primera frase. Por ejemplo, «¿Hacen envíos a domicilio en Quito?» abre con «Sí. Enviamos a Quito Norte, Centro, Sur y a los Valles…», y «¿Cómo compro en línea y pago con Deuna?» baja directo a 5 pasos numerados. Solo «¿Qué consejos te da Caramelo?» queda débil, porque únicamente remite al blog.

*Evidencia:*
- H2: «¿Hacen envíos a domicilio en Quito?» → «Sí. Enviamos a Quito Norte, Centro, Sur y a los Valles…»
- H2: «¿Qué alimento seco tienen para perros y gatos?» → «Fundas de 2 kg de NutraPro… además de Cat Chow.»
- H2: «¿Dónde está la tienda y a qué hora abre?» → «Serapio Japerabi y Miguel Pontón… Todos los días, de 8:00 a 22:00»
- H2: «¿Qué consejos te da Caramelo?» → «Guías sobre cómo cambiar su alimento, el agua que necesita y los antiparasitarios.»

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección «Preguntas frecuentes» visible, con 6 preguntas en H3 y respuestas completas de 1 a 3 frases cada una. Se renderiza como texto plano (no solo en el schema), y las respuestas dan datos reales (dirección, horario, mascotas, pago, envío), no un «contáctanos». La captura móvil se corta a los 3000 px y no llega al FAQ, así que la visibilidad se confirma con texto.md.

*Evidencia:*
- H2 «Preguntas frecuentes» con 6 H3: «¿Dónde queda Chip Chop Pet Shop?», «¿Cuál es el horario de atención?», «¿Cómo pago mi pedido en línea?»…
- «Atendemos todos los días, de lunes a domingo, de 8:00 a 22:00, en el local y por WhatsApp.»
- «Nunca pagas más que el total de tus productos.» (respuesta de 3 frases, completa)

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 2 bloques JSON-LD válidos con @context schema.org, presentes en el HTML inicial, con tres nodos: PetStore (subtipo de LocalBusiness, adecuado para una tienda física con venta en línea), WebSite y FAQPage con 6 preguntas. Los datos coinciden con lo visible: teléfono +593995252457 (página: 099 525 2457), dirección «Serapio Japerabi y Miguel Pontón, Quito, 170504» y las 6 preguntas del FAQ son las mismas que se ven en la sección «Preguntas frecuentes».

*Evidencia:*
- Tipos: PetStore, WebSite, FAQPage (preguntasFaq: 6)
- name «Chip Chop Pet Shop» y url https://chipchoppetshop.com en PetStore y WebSite, igual que el título y el pie de la página
- telephone +593995252457 = WhatsApp 099 525 2457 del pie; address coincide con el pie y el FAQ
- sameAs: Instagram @chipchop_uio y perfil de Google, ambos enlazados en el pie
- pagina.json crudo.jsonld = 3 nodos: el JSON-LD viene en el HTML sin ejecutar JavaScript

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae 1123 de las 1125 palabras de la página renderizada (100%). El H1 y todos los H2 (Black Friday, categorías, productos destacados, FAQ, envíos) ya vienen en el HTML crudo, y el primer texto es la descripción de la tienda con dirección y horario, así que un bot sin JavaScript lee lo que importa.

*Evidencia:*
- 1123 palabras en HTML crudo vs 1125 renderizadas (proporción 1)
- H1 en crudo: «Tienda de mascotas en Quito: Chip Chop Pet Shop»
- Primer párrafo crudo: «Chip Chop Pet Shop es una tienda de mascotas en Quito, en Serapio Japerabi y Miguel Pontón, abierta todos los días de 8:00…»
- 8 encabezados (H1 + 7 H2) presentes en el HTML crudo

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt tiene bloques explícitos con «Allow: /» para GPTBot, ClaudeBot, PerplexityBot y Google-Extended (también para OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, Perplexity-User, Applebot-Extended y Bingbot). Solo se excluyen /panel/, /checkout/, /pedido/ y /carrito/, rutas privadas o transaccionales que no son contenido a indexar; ninguna sección clave queda bloqueada. El archivo parece escrito a mano por el sitio, sin secciones de Cloudflare ni directivas Content-Signal. Además existe un llms.txt (bonus informativo, no cambia el puntaje) con descripción, dirección, horario y contacto.

*Evidencia:*
- GPTBot, ClaudeBot, PerplexityBot y Google-Extended: «Allow: /» con Disallow solo de /panel/, /checkout/, /pedido/, /carrito/
- Sin Content-Signal, sin bloque de Cloudflare ni reglas de entrenamiento (ai-train)
- Sitemap: https://chipchoppetshop.com/sitemap.xml
- llms.txt existe en https://chipchoppetshop.com/llms.txt

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Los párrafos son cortos (promedio de 21 palabras, ninguno largo) y hay listas (40 ítems), pasos numerados para comprar y secciones de un solo tema, con unas 70 palabras por sección. Las tarjetas de producto salen pegadas en la extracción («Alimento húmedoWhiskas… $1.00Agregar al carrito»), pero en la captura se ven como tarjetas separadas y la prosa va en oraciones completas.

*Evidencia:*
- 21 párrafos, promedio 21 palabras, 0 párrafos largos
- Lista numerada de 5 pasos en «¿Cómo compro en línea y pago con Deuna?»
- Un tema por sección: envíos, ubicación y horario, quiénes somos, FAQ

#### AEO 8 · Identidad clara y consistente: 2/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre "Chip Chop Pet Shop" es igual en title, og:site_name, H1, pie (© 2026) y en los dos nodos de schema (PetStore y WebSite). El teléfono (099 525 2457 / +593 99 525 2457) y la dirección (Serapio Japerabi y Miguel Pontón, 170504 Quito) coinciden entre página y schema una vez normalizados, y el pie enlaza a Instagram (@chipchop_uio) y al perfil de Google, ambos repetidos en sameAs.

*Evidencia:*
- Nombre: title "Chip Chop Pet Shop | Tienda de mascotas en Quito con envío"; og:site_name "Chip Chop Pet Shop"; schema name "Chip Chop Pet Shop"; pie "© 2026 Chip Chop Pet Shop"
- Teléfono: página "099 525 2457 (+593 99 525 2457)" = schema "+593995252457" = enlaces wa.me/593995252457
- Dirección: página "Serapio Japerabi y Miguel Pontón, 170504 Quito, Ecuador" = schema "Serapio Japerabi y Miguel Pontón, Quito, Pichincha, 170504, EC"; 2 enlaces a Google Maps
- Redes: pie con "Instagram @chipchop_uio" (rel="noopener me") y "Perfil en Google"; sameAs del PetStore repite ambos
- Descripción: meta y OG dicen "perros y gatos"; el schema añade "conejos y peces", igual que el cuerpo de la página (variación menor, no contradicción)
- Sin correo electrónico en la página ni en el schema; el canal de contacto es WhatsApp

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Casi todas las afirmaciones traen datos verificables: dirección y código postal (170504), horario «8:00 a 22:00», precios desde $1.00, «83 productos» con conteo por categoría, tamaños (2 kg, 85 g) y una promoción con fecha y hora límite («hasta el viernes 27 de noviembre a las 23:59»). No hay frases vacías del tipo «somos los mejores». El único dato que falta es el costo del envío, que solo se describe como «depende de la distancia».

*Evidencia:*
- «Tenemos 83 productos con foto y precio, desde $1.00.»
- «Black Friday: 10 % en todo el alimento seco. Hasta el viernes 27 de noviembre a las 23:59.»
- NutraPro Adultos Funda 2 kg: $7.20 (antes $8.00)
- «Todos los días, de 8:00 a 22:00, incluidos fines de semana»

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Hay dos señales claras: una sección "acerca de" (enlace "Quiénes somos" a /nosotros/ en el menú y el pie, más el bloque "¿Quién está detrás de Chip Chop?") y una fecha visible ("Información actualizada el 15 de noviembre de 2026" y "Página actualizada el 15 de noviembre de 2026" en el pie). La señal de "quién" es débil: dice "negocio familiar" y "la misma familia", pero sin nombres ni fotos. No hay testimonios, reseñas ni fuentes citadas con enlace, así que solo se cumplen 2 de 4 señales con claridad.

*Evidencia:*
- Acerca de: enlaces "Quiénes somos" y "Conoce la historia de Chip Chop" a https://chipchoppetshop.com/nosotros/ (nav y pie); H2 "¿Quién está detrás de Chip Chop?"
- Equipo: "Chip Chop es un negocio familiar de Quito. Nos atiende la misma familia que te recibe en el local"; sin nombres de personas ni fotos; meta author es solo "Chip Chop Pet Shop"; mencionaEquipo=false
- Actualización: "Información actualizada el 15 de noviembre de 2026" y pie "Página actualizada el 15 de noviembre de 2026"; sin <time>, dateModified ni meta de fecha. La fecha coincide con el día de la auditoría, lo que sugiere que podría generarse automáticamente
- Testimonios: 0 citas, sin encabezado de reseñas, schemaReview=false, sin AggregateRating
- Fuentes: fuentesExternas=1 (solo el perfil de Google en el pie); sin enlaces a fuentes veterinarias ni a reseñas en la página principal

*Cómo mejorarlo:*
- Nombra a quienes atienden la tienda en el bloque "¿Quién está detrás de Chip Chop?" y en /nosotros/, con nombre, rol y foto (por ejemplo: «Atendido por [nombre], dueño, y [nombre], atención al cliente»), y añade un nodo Organization o Person con founder/employee en el schema.
- Agrega una sección de reseñas reales con nombre o inicial, barrio y fecha, o muestra la calificación y el número de reseñas del perfil de Google con enlace directo. Solo añade AggregateRating o Review al schema si coinciden con lo visible.
- Respalda los consejos de Caramelo (alimentación, antiparasitarios) con enlaces a fuentes verificables, como un veterinario con nombre o una guía oficial. Marca la fecha con <time datetime> o dateModified en el schema para que sea legible por máquina y refleje cambios reales, no la fecha del día.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 7 · Imágenes** (1/2): Agrega srcset y sizes a las fotos de producto para que el teléfono descargue la variante -160 en las tarjetas pequeñas y la -400 solo cuando el espacio la necesite (el sitio ya genera ambos tamaños).
2. **AEO 10 · Señales de confianza** (1/2): Nombra a quienes atienden la tienda en el bloque "¿Quién está detrás de Chip Chop?" y en /nosotros/, con nombre, rol y foto (por ejemplo: «Atendido por [nombre], dueño, y [nombre], atención al cliente»), y añade un nodo Organization o Person con founder/employee en el schema.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
