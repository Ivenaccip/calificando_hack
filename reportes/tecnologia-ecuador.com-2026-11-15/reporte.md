# Calificación SEO + AEO: https://tecnologia-ecuador.com/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 95.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **16** | 20 | 80% |
| AEO | **19** | 20 | 95% |
| **Total** | **35** | 40 | 88% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente |
| 2 | Descripción y vista al compartir | ■■ 2/2 | Script | agente |
| 3 | Estructura de encabezados | ■□ 1/2 | Script | agente (ajustó al script) |
| 4 | Tema claro y contenido suficiente | ■■ 2/2 | Agente | agente |
| 5 | Indexable | ■■ 2/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | ■■ 2/2 | Script | agente |
| 7 | Imágenes | ■□ 1/2 | Script + Lighthouse | agente |
| 8 | Velocidad | ■□ 1/2 | Lighthouse | agente |
| 9 | Móvil | ■□ 1/2 | Lighthouse + captura móvil | agente (ajustó al script) |
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

Hay un solo <title> de 50 caracteres: «Tienda de tecnología en Quito | TECNOLOGIA ECUADOR». Dice qué es el sitio (tienda de tecnología), dónde (Quito) y la marca, y coincide con el tema del H1 («Todo en tecnología, con entrega inmediata»). No es genérico.

*Evidencia:*
- 1 etiqueta <title>
- «Tienda de tecnología en Quito | TECNOLOGIA ECUADOR» (50 caracteres)
- H1: «Todo en tecnología, con entrega inmediata»

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 151 caracteres, enumera las categorías, da beneficios (entrega inmediata, garantía local, envíos a todo Ecuador) y cierra con llamada a la acción («¡Compra hoy!»). Están og:title, og:description y og:image, y esta última es una URL absoluta con https. Además declara twitter:card summary_large_image.

*Evidencia:*
- Meta description: 151 caracteres, termina en «¡Compra hoy!»
- og:image: https://tecnologia-ecuador.com/wp-content/uploads/2026/11/LOGO-TECNOLOGIA-ECUADOR-OFICIAL-HORIZONTAL.png
- og:title y og:description presentes (repiten el título y la descripción)

#### SEO 3 · Estructura de encabezados: 1/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 claro y sin saltos de nivel, y las secciones principales tienen H2 descriptivos en forma de pregunta. Pero cerca de la mitad de los encabezados (unos 21 de 42) son nombres de producto de las tarjetas y títulos de widgets del pie, no estructura. Las tarjetas de producto aparecen como H2 en dos bloques (los de «¿Qué productos llegaron últimamente?» y «¿Qué equipos de seguridad ofrecemos…?»), al mismo nivel que la sección que las contiene, y como H3 en el bloque de «listos para entrega inmediata». Además «Botón de Pánico SOS WiFi Tuya» se repite como H2 y como H3.

*El script dio 2/2; el agente lo ajustó a 1/2. El script dio 2 porque no hay saltos de nivel y existe un solo H1. No detecta que las tarjetas de producto y los títulos del pie usan H2/H3 como estilo, con niveles inconsistentes entre bloques equivalentes. La guía pide bajar el puntaje en ese caso.*

*Evidencia:*
- 1 H1, 22 H2, 20 H3, sin saltos
- H2 de producto: «Micrófono Doble Con Entrada tipo C Inalámbrico…», «Tablet Amazon Fire Hd 8 32gb…», «Baston Control De Rondas Gps…»
- Las mismas tarjetas son H3 en «¿Qué equipos tenemos listos para entrega inmediata?»
- H3 del pie usados como etiqueta de widget: «Menú», «Contactos», «Sociales», «Suscríbete a nuestra newsletter»

*Cómo mejorarlo:*
- Baja los nombres de producto de los bloques «¿Qué productos llegaron últimamente?» y «¿Qué equipos de seguridad ofrecemos…?» de H2 a H3, para que cuelguen de su sección y sean consistentes con el bloque de «entrega inmediata». En WooCommerce se cambia en la plantilla del loop de productos o con el ajuste de nivel de encabezado del bloque.
- Deja H2 solo para las secciones (categorías, novedades, envíos, marcas, FAQ, local) y quita el encabezado de las tarjetas repetidas, por ejemplo «Botón de Pánico SOS WiFi Tuya», que sale dos veces en la misma página.
- Cambia los títulos del pie («Menú», «Contactos», «Sociales», «Suscríbete a nuestra newsletter») a <p> o <div> con estilo, o a un nivel que no compita con la estructura del contenido.

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (tienda de tecnología en Quito) coincide en el título, el H1 y el primer párrafo. El script cuenta 1,025 palabras en el contenido principal; aun descartando los listados de productos, quedan unas 450-500 palabras útiles (cómo comprar, envíos, horarios, garantías, preguntas frecuentes, quiénes somos). No hay relleno ni texto de plantilla.

*Evidencia:*
- Título: "Tienda de tecnología en Quito | TECNOLOGIA ECUADOR"
- H1: "Todo en tecnología, con entrega inmediata"
- Primer párrafo: "TECNOLOGIA ECUADOR es la tienda de tecnología de Torres de Almagro, en Quito: vendemos cámaras de seguridad…"
- palabrasContenido: 1025 (umbral 300)

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 en https sin redirecciones. No tiene noindex: la meta robots es «index, follow, max-image-preview:large…» y no hay X-Robots-Tag. El canonical apunta a la misma URL y <html lang="es"> coincide con el contenido, que está en español.

*Evidencia:*
- Meta robots: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- X-Robots-Tag: null
- Canonical: https://tecnologia-ecuador.com/ (igual a la URL final)
- lang="es", HTTP 200

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

El robots.txt responde 200 y no bloquea el sitio: solo restringe rutas técnicas (wp-admin, logs y descargas privadas de WooCommerce, ?add-to-cart=), y el bloque de Yoast deja «Disallow:» vacío para todos. Declara https://tecnologia-ecuador.com/sitemap_index.xml, que es válido y lista 624 URLs en la muestra, con el mismo dominio y protocolo, e incluye la portada.

*Evidencia:*
- robots.txt: sin «Disallow: /»; Sitemap: https://tecnologia-ecuador.com/sitemap_index.xml
- Sitemap índice con 200 y 624 URLs en la muestra
- Ejemplos: https://tecnologia-ecuador.com/, /blog/ (todas en https del mismo dominio)
- También aparecen /cart/, /checkout/ y /my-account/ en el sitemap (páginas de bajo valor para buscadores)

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Los alt son buenos: las 18 imágenes con contenido tienen alt descriptivo (por ejemplo «Cámara IP Domo 720p HD Interior Nocturna», «Batería Dell XPS 15 69KF2»), no hay alt vacíos en imágenes grandes y el peso total es bajo (219 KB, ninguna imagen > 300 KB). Lo que falta es el tamaño de entrega: Lighthouse marca uses-responsive-images (el logo pesa 37,970 bytes y se puede ahorrar ~35 KiB) y su insight de entrega de imágenes estima 114 KiB de ahorro, porque las miniaturas de producto se sirven en 600x600 cuando se muestran más pequeñas.

*Evidencia:*
- 18 de 18 imágenes con contenido con alt válido; sinAlt y altVacioEnImagenesGrandes vacíos
- Peso total de imágenes: 219 KB; imagenesPesadas vacío
- uses-responsive-images: logo-tecnologia-ecuador-claro.webp, 37,970 bytes, ahorro 35,850 bytes
- image-delivery-insight: ahorro estimado de 114 KiB (logo y miniaturas t-T220208, t-T220111, t-T520926 en 600x600)
- Formato webp casi en todo; solo sirena-inalambrica-exterior-433-mhz-wifi-110db.jpg va en JPG

*Cómo mejorarlo:*
- Re-exporta el logo (logo-tecnologia-ecuador-claro.webp) al tamaño real con el que se muestra en el encabezado (aprox. 2x de su ancho en pantalla) para ahorrar ~35 KiB.
- Sirve las miniaturas de producto con srcset/sizes y usa el tamaño de 300x300 en móvil en lugar de las versiones 600x600 (por ejemplo, t-T220208-0-600x600.webp) donde la tarjeta se ve a menos de 300 px.
- Convierte sirena-inalambrica-exterior-433-mhz-wifi-110db.jpg a WebP para ser consistente con el resto de las imágenes.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Se confirma el puntaje del script: rendimiento 95 (cumple ≥ 80) y CLS 0.000 (cumple < 0.1), pero el LCP es 2.65 s, apenas arriba del límite de 2.5 s. Es una sola medición de Lighthouse móvil y puede variar entre corridas y equipos; el LCP está tan cerca del umbral que otra corrida podría quedar de uno u otro lado.

*Evidencia:*
- Rendimiento 95, LCP 2,645 ms, CLS 0, FCP 2,014 ms, TBT 13 ms, Speed Index 2,246 ms
- render-blocking-resources: ahorro estimado de 350 ms (jquery.min.js 3.7.1 y woocommerce.css)
- Respuesta del servidor 540 ms (score 1, no es la causa principal)
- image-delivery-insight: ahorro estimado de 114 KiB en imágenes

*Cómo mejorarlo:*
- Elimina o difiere los recursos que bloquean el render: carga jquery.min.js con defer y entrega el CSS de woocommerce.css de forma crítica/en línea para ganar ~350 ms de FCP y LCP.
- Reduce el peso de las imágenes de la parte superior de la página (logo de 37 KB y miniaturas 600x600) con tamaños responsivos para acercar el LCP por debajo de 2.5 s.
- Mide de nuevo con varias corridas tras los cambios para confirmar que el LCP queda de forma estable bajo 2.5 s.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto, no hay scroll horizontal, solo 2% del texto es menor a 12 px y el texto del hero se lee bien sin zoom, con menú de hamburguesa y carrito visibles. Pero en la captura de arriba el botón flotante verde de WhatsApp se encima sobre el botón «Hablar con un asesor» y tapa la última palabra («asesor»), por lo que ese CTA principal no se toca ni se lee completo en la primera pantalla. Además, el ícono de búsqueda del encabezado casi no se distingue (oscuro sobre fondo oscuro).

*El script dio 2/2; el agente lo ajustó a 1/2. El script dio 2 porque mide viewport, desborde, tamaño de texto y objetivos táctiles, pero no ve que el botón flotante de WhatsApp se encima sobre el CTA «Hablar con un asesor» en la primera pantalla de la captura; bajo a 1 por ese encimado y el ícono de búsqueda casi invisible.*

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desbordeHorizontalPx 0
- Texto pequeño: 125 de 5,683 caracteres (2%); 2 de 96 objetivos táctiles < 24 px (el enlace «Saltar al contenido» y el botón «Submenú de Categorías», probablemente del menú oculto)
- movil-arriba.png: el botón flotante «WhatsApp» queda encima de «Hablar con un asesor» y corta el texto en 390x844
- movil-arriba.png: el ícono de búsqueda a la izquierda del carrito tiene contraste muy bajo
- movil-completa.png: sin diseño roto; secciones y tarjetas de categorías bien apiladas en una columna; la etiqueta «Medición» parece rozar su ícono

*Cómo mejorarlo:*
- Evita que el botón flotante de WhatsApp tape contenido: súbelo/muévelo (por ejemplo, redúcelo a solo ícono o déjalo más abajo en la esquina) o agrega margen inferior al hero para que «Hablar con un asesor» quede completo y tocable en 390 px.
- Aumenta el contraste del ícono de búsqueda del encabezado (hoy casi invisible sobre el fondo oscuro) y dale un área táctil de al menos 44x44 px.
- Revisa que el botón «Submenú de Categorías» (10x10 px) tenga un área táctil de al menos 24-44 px dentro del menú móvil.

*Nota:* El script puntúa lo medible; el agente debe revisar la captura móvil.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 24 enlaces internos distintos (Tienda y las categorías principales). De 40 enlaces internos probados no hay ninguno roto, ninguno en sinVerificar, ninguno genérico ni sin texto. Solo 1 de 79 URLs internas es larga, pero legible: el slug está en palabras. Aviso: el script probó 40 de 78 enlaces internos únicos (su límite), así que los otros 38 no están verificados.

*Evidencia:*
- 0 rotos de 40 enlaces revisados (78 internos únicos); sinVerificar: []
- 0 enlaces genéricos y 0 sin texto; el único «Ver…» es «Ver tienda», que es claro
- URLs tipo /product-category/camaras-y-vigilancia/
- Lighthouse «Links have descriptive text»: score 1

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

El primer párrafo del contenido responde en 47 palabras qué es ("la tienda de tecnología de Torres de Almagro, en Quito"), para quién ("hogares y negocios") y qué ofrece (cámaras, audio y video, fotografía, medición y repuestos, con entrega inmediata, garantía local y envíos a todo Ecuador). Los bloques previos son solo "Saltar al contenido" y una etiqueta de 5 palabras, sin eslóganes vacíos.

*Evidencia:*
- "TECNOLOGIA ECUADOR es la tienda de tecnología de Torres de Almagro, en Quito: vendemos cámaras de seguridad, audio y video, fotografía, instrumentos de medición y repuestos para hogares y negocios…"
- 47 palabras, dentro del rango 40-60

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Hay 8 H2 y 6 H3 en forma de pregunta real, y varios se responden de inmediato debajo: "¿Cuánto cuesta el envío y cuándo llega mi pedido?" abre con una tabla con $5,00 y 2 días laborables; "¿Qué marcas manejamos?" responde "Trabajamos con marcas como HP, Lenovo, Dell…"; "¿Cómo comprar…?" abre con pasos numerados. Algunas preguntas de las secciones de producto ("¿Qué productos llegaron últimamente?") son más de marketing, pero sobran preguntas bien respondidas.

*Evidencia:*
- H2: "¿Cuánto cuesta el envío y cuándo llega mi pedido?" con tabla de costos y tiempos justo debajo
- H2: "¿Qué días y a qué hora atiende el local?" con tabla de horario (lunes a viernes, 9:00 a 18:00)
- H2: "¿Qué marcas manejamos?" → "Trabajamos con marcas como HP, Lenovo, Dell, Asus, Sony y Nikon, entre otras."
- H3 de FAQ: "¿Hacen envíos a todo Ecuador?" → "Sí. El envío es gratis en compras mayores a $50."

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección visible "Preguntas frecuentes" con 6 preguntas (envíos, tiempo de entrega, formas de pago, garantía, cambios, horario). Cada respuesta es completa y mide de 1 a 3 frases, con datos concretos. El texto está como H3 más párrafo en el contenido principal, no solo en el schema FAQPage. Ninguna respuesta se limita a "contáctanos".

*Evidencia:*
- H2: "Preguntas frecuentes" con 6 H3 en forma de pregunta
- "Sí. Tienen garantía local de 3 meses por defectos de fabricación, y de 6 meses en baterías y cargadores de laptop."
- "Sí, hasta 5 días hábiles después de la entrega, con factura y sin señales de uso. No hacemos devolución de dinero…"
- schemaFaq: true y preguntasFaq: 6, coherentes con el texto visible

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 2 bloques de JSON-LD válidos con contexto schema.org, presentes en el HTML inicial, con los tipos que corresponden a una tienda local con comercio electrónico: Organization, Store/LocalBusiness, WebSite, WebPage, BreadcrumbList y FAQPage. Los datos coinciden con la página: teléfono +593995815371 frente a «099 581 5371», dirección «Torres de Almagro, Av. Colón y Diego de Almagro, Local 1, Quito» y las 6 preguntas del FAQPage frente a las 6 visibles en la sección «Preguntas frecuentes». Observaciones menores que no contradicen la página: la URL del nodo Store usa «www.» mientras que la página y el resto del schema usan el dominio sin «www», y el Facebook que se ve en la página no aparece en sameAs.

*Evidencia:*
- Tipos detectados: WebPage, ImageObject, BreadcrumbList, WebSite, Organization, Store, LocalBusiness, FAQPage
- estaEnHtmlCrudo: true (pagina.json crudo.jsonld = 7 nodos en el HTML inicial)
- Schema telephone +593995815371 y texto visible «WhatsApp y ventas: 099 581 5371»
- Schema address «Torres de Almagro, Av. Colón y Diego de Almagro, Local 1, Quito, Pichincha, EC» coincide con el pie de la página
- FAQPage con preguntasFaq: 6 y seis h3 de preguntas en la sección «Preguntas frecuentes»
- Store url «https://www.tecnologia-ecuador.com/» frente a canonical sin www en el resto de nodos

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML crudo trae 1020 de las 1025 palabras de la página renderizada (100%). El H1 «Todo en tecnología, con entrega inmediata», los H2 de secciones y los nombres de productos ya están en el HTML inicial, igual que las preguntas frecuentes. Todo el contenido que importa se lee sin ejecutar JavaScript.

*Evidencia:*
- palabrasHtmlCrudo 1020 / palabrasRenderizado 1025 (proporción 1)
- H1 en HTML crudo: «Todo en tecnología, con entrega inmediata»
- 43 encabezados en el HTML crudo, incluido «H2: ¿Qué productos llegaron últimamente?» con los nombres de producto
- primerasPalabrasCrudo: «Saltar al contenido», «Tienda de tecnología · Quito, Ecuador»

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended: solo tiene reglas para User-agent: * que cierran rutas técnicas (wc-logs, woocommerce_transient_files, woocommerce_uploads, ?add-to-cart=, /wp-admin/) y un bloque de Yoast con «Disallow:» vacío, por lo que el resto del sitio queda abierto. No hay reglas por bot, ni Content-Signal, ni bloque administrado por Cloudflare; el archivo lo generan WordPress, WooCommerce y Yoast SEO. Además existe un llms.txt (bonus informativo, no cambia el puntaje), pero sus enlaces apuntan a blueviolet-starling-201612.hostingersite.com, un dominio temporal, y no a tecnologia-ecuador.com.

*Evidencia:*
- robots.txt: «User-agent: *» con Disallow solo en /wp-content/uploads/wc-logs/, /woocommerce_transient_files/, /woocommerce_uploads/, /*?add-to-cart= y /wp-admin/
- Bloque «START YOAST BLOCK» con «User-agent: *» y «Disallow:» vacío
- Sin directivas por bot (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) ni Content-Signal
- Otros bots de IA (OAI-SearchBot, ChatGPT-User, anthropic-ai, CCBot, etc.) también permitidos
- llms.txt existe en https://tecnologia-ecuador.com/llms.txt; sus enlaces muestran el host blueviolet-starling-201612.hostingersite.com

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Predominan los párrafos cortos (promedio de 17 palabras, ninguno largo). Hay una lista numerada de 4 pasos para comprar, dos tablas (envíos y horario) y una FAQ con un tema por pregunta. Cada sección trata un solo asunto. Como detalle menor, las categorías y las marcas salen pegadas en una sola línea ("HPLenovoDellAsus…") y los nombres de producto usan H2, pero son listados de tienda y no afectan lo importante.

*Evidencia:*
- 27 párrafos, promedio de 17 palabras, 0 párrafos largos
- 1 lista numerada ("1. Elige tu producto en la tienda…" a "4. Recibe tu pedido…") y 7 filas de tabla
- Tablas: "| Provincias continentales | $5,00 con IVA… | 2 días laborables |"

#### AEO 8 · Identidad clara y consistente: 2/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «TECNOLOGIA ECUADOR» es idéntico en <title>, og:site_name, pie (© 2026), logo y en el name de WebSite, Organization y LocalBusiness. La dirección («Torres de Almagro, Av. Colón y Diego de Almagro, Local 1, Quito») y el teléfono (099 581 5371 en la página, +593995815371 en el schema, mismo número) coinciden, y hay enlaces a Instagram, Facebook (perfil con id real) y WhatsApp. Detalles menores que no contradicen la identidad: el LocalBusiness usa la URL con www, sameAs solo incluye Instagram (falta Facebook) y no hay correo en la página ni en el schema.

*Evidencia:*
- Nombre: title «Tienda de tecnología en Quito | TECNOLOGIA ECUADOR», og:site_name «TECNOLOGIA ECUADOR», © 2026 «TECNOLOGIA ECUADOR», schema name «TECNOLOGIA ECUADOR» (x3)
- Dirección en página y en schema.address: «Torres de Almagro, Av. Colón y Diego de Almagro, Local 1, Quito» (el schema añade «Pichincha, EC»)
- Teléfono: «099 581 5371» en la página y «+593995815371» en el schema (equivalentes tras normalizar)
- Descripción: meta description = og:description = schema WebPage; WebSite y LocalBusiness usan versiones más cortas pero compatibles
- Redes en el pie: instagram.com/tecnologia.ecuador/, facebook.com/profile.php?id=100063840590377, wa.me/593995815371
- sameAs del LocalBusiness: solo https://www.instagram.com/tecnologia.ecuador/; el Organization tiene sameAs vacío

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Las afirmaciones clave traen datos verificables: costos de envío ($5,00 y $11,82 con IVA), umbral de envío gratis ($50), tiempos (2 días laborables, 30 en Galápagos), garantía (3 y 6 meses), plazo de cambios (5 días hábiles), horario (9:00 a 18:00), dirección, teléfono y precios por producto. No hay frases tipo "somos los mejores".

*Evidencia:*
- "envío gratis en compras mayores a $50"
- "Galápagos | $11,82 con IVA | 30 días laborables"
- "garantía local de 3 meses… y de 6 meses en baterías y cargadores de laptop"
- "Lunes a viernes | 9:00 a 18:00" y WhatsApp "099 581 5371"
- 24 precios, 14 horarios y 3 fechas detectados; 0 frases genéricas

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Hay dos señales claras: la fecha de actualización («Última actualización de esta página: 15/11/2026», dateModified 2026-11-15, © 2026) y la sección «acerca de» (enlace «Nosotros»/«Quiénes somos» a /about/ y el bloque «¿Quién está detrás de TECNOLOGIA ECUADOR?»). El equipo se menciona pero sin nombres («Nuestro equipo atiende en el local y por WhatsApp»), y no hay testimonios, reseñas con calificación ni fuentes citadas: citas = 0, schemaReview = false. Es una señal débil y otra ausente, por eso queda en 1.

*Evidencia:*
- Fecha: «Última actualización de esta página: 15/11/2026»; dateModified 2026-11-15T18:48:39+00:00; © 2026
- Acerca de: enlaces a https://tecnologia-ecuador.com/about/ («Nosotros» en nav y pie, «Quiénes somos» en el cuerpo) y H2 «¿Quién está detrás de TECNOLOGIA ECUADOR?»
- Equipo: «Nuestro equipo atiende en el local y por WhatsApp, y te asesora antes de comprar», sin nombres, cargos ni fotos; autor sin meta, rel=author ni JSON-LD (el «por WhatsApp» detectado no es un autor)
- Testimonios: encabezado [], citas 0, schemaReview false; la lista de marcas (HP, Lenovo, Dell, Sony…) son logos, no testimonios
- Fuentes externas: solo Google Maps e Instagram (verifican ubicación y perfil, pero no son fuentes ni reseñas de clientes)
- Existen páginas legales y de contacto (/terminos-y-condiciones/, /politica-de-privacidad/, /contact/), que ayudan pero no cuentan como las cuatro señales

*Cómo mejorarlo:*
- Agrega testimonios reales con nombre y ciudad (o empresa/foto), o enlaza las reseñas de Google Maps del local con su calificación; marca con Review/AggregateRating solo reseñas verdaderas y visibles en la página.
- Nombra a quien está detrás: en /about/ y en el bloque «¿Quién está detrás de TECNOLOGIA ECUADOR?» pon el nombre del responsable o del equipo de ventas con foto y rol, y refléjalo en el schema (founder o employee en el Organization).
- Cita fuentes verificables con enlace, por ejemplo la página de garantía del fabricante, la ficha de la marca o tu perfil de Google Business, y agrega datos legales del negocio (razón social o RUC) en el pie.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 3 · Estructura de encabezados** (1/2): Baja los nombres de producto de los bloques «¿Qué productos llegaron últimamente?» y «¿Qué equipos de seguridad ofrecemos…?» de H2 a H3, para que cuelguen de su sección y sean consistentes con el bloque de «entrega inmediata». En WooCommerce se cambia en la plantilla del loop de productos o con el ajuste de nivel de encabezado del bloque.
2. **SEO 7 · Imágenes** (1/2): Re-exporta el logo (logo-tecnologia-ecuador-claro.webp) al tamaño real con el que se muestra en el encabezado (aprox. 2x de su ancho en pantalla) para ahorrar ~35 KiB.
3. **SEO 8 · Velocidad** (1/2): Elimina o difiere los recursos que bloquean el render: carga jquery.min.js con defer y entrega el CSS de woocommerce.css de forma crítica/en línea para ganar ~350 ms de FCP y LCP.
4. **SEO 9 · Móvil** (1/2): Evita que el botón flotante de WhatsApp tape contenido: súbelo/muévelo (por ejemplo, redúcelo a solo ícono o déjalo más abajo en la esquina) o agrega margen inferior al hero para que «Hablar con un asesor» quede completo y tocable en 390 px.
5. **AEO 10 · Señales de confianza** (1/2): Agrega testimonios reales con nombre y ciudad (o empresa/foto), o enlaza las reseñas de Google Maps del local con su calificación; marca con Review/AggregateRating solo reseñas verdaderas y visibles en la página.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
