# Calificación SEO + AEO: https://cilindroya.com/hogar/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 92.

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
| 8 | Velocidad | ■□ 1/2 | Lighthouse | agente |
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
| 10 | Señales de confianza | □□ 0/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un único <title> de 50 caracteres: «CilindroYa · Gas a domicilio en Imbabura por $3,60». Incluye la marca, el servicio y la zona, así que describe de qué trata esta página y no es genérico.

*Evidencia:*
- title: «CilindroYa · Gas a domicilio en Imbabura por $3,60» (50 caracteres, 1 etiqueta)
- El H1 comparte el tema: «Gas a domicilio en Imbabura por $3,60»

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 144 caracteres (dentro de 140–160) y invita a actuar: «Pide tu cilindro de gas de 15 kg desde el celular… por $3,60… Pagas al recibir». Están og:title, og:description y og:image, y la imagen es una URL absoluta; además hay twitter:card summary_large_image.

*Evidencia:*
- meta description: 144 caracteres, con beneficio, precio, zonas y forma de pago
- og:image: https://cilindroya.com/assets/og-cilindroya.jpg (URL absoluta)
- twitterCard: summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 claro («Gas a domicilio en Imbabura por $3,60») y 12 H2 con 7 H3 sin saltos de nivel (no hay H4–H6). Los encabezados funcionan como estructura de contenido (pasos, precio, zonas, FAQ, contacto) y no como estilo de menú o pie.

*Evidencia:*
- Resumen: H1=1, H2=12, H3=7, H4–H6=0; saltos: ninguno
- H3 bajo «¿Cómo pedir tu cilindro de gas en 4 pasos?»: los pasos de compra
- Detalles menores: el H2 «Cili · CilindroYa» y el H3 «Cili te acompaña» son rótulos de marca/mascota, no afectan la jerarquía

#### SEO 4 · Tema claro y contenido suficiente: 2/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (gas a domicilio en Imbabura a $3,60) coincide en el título «CilindroYa · Gas a domicilio en Imbabura por $3,60», en el H1 «Gas a domicilio en Imbabura por $3,60» y en el primer párrafo («CilindroYa es la plataforma de entrega de gas doméstico a domicilio…»). El contenido principal tiene unas 1,376 palabras con información variada (pasos, precios, zonas, servicios, 8 preguntas frecuentes); el desglose del precio se repite en varios bloques, pero cada vez responde una pregunta distinta, así que no es relleno.

*Evidencia:*
- Título: «CilindroYa · Gas a domicilio en Imbabura por $3,60»
- H1: «Gas a domicilio en Imbabura por $3,60»
- Primer párrafo: «CilindroYa es la plataforma de entrega de gas doméstico a domicilio en Ibarra, Otavalo, Antonio Ante y Cotacachi.»
- ≈1,376 palabras en el contenido principal (umbral 300)

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

No hay noindex (meta robots y X-Robots-Tag en null) y el canonical apunta a sí misma (https://cilindroya.com/hogar/). El sitio sirve por HTTPS y declara lang="es-EC", coherente con el contenido en español. La raíz (/) redirige con 301 a /hogar/, que es la URL canónica.

*Evidencia:*
- canonical: https://cilindroya.com/hogar/ (una sola)
- lang="es-EC"; contenido en español
- Redirección: https://cilindroya.com/ → 301 → https://cilindroya.com/hogar/ (200)

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml (200, válido, 18 URL), el sitemap está declarado en robots.txt y lista páginas reales del mismo dominio y protocolo, incluida /hogar/. El robots.txt permite todo el sitio y solo bloquea /pwa/ y /marketing/, que no son páginas de contenido enlazadas en el menú.

*Evidencia:*
- robots.txt: «User-agent: *  Allow: /  Disallow: /pwa/  Disallow: /marketing/» y «Sitemap: https://cilindroya.com/sitemap.xml»
- Sitemap: 18 URL; ejemplos https://cilindroya.com/hogar/, /cliente/, /distribuidores/, /guias/
- Bots de IA (GPTBot, ClaudeBot, PerplexityBot, etc.) permitidos explícitamente

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 10 imágenes con contenido tienen alt descriptivo y específico (por ejemplo «Repartidor bajando un cilindro azul del camión»), no hay alt vacío en imágenes grandes y el peso total es de solo 88 KB sin ninguna imagen > 300 KB. Lo que falta es el dimensionado: Lighthouse marca uses-responsive-images porque cili_render_saluda.webp (86.5 KB) se sirve más grande de lo que se muestra (ahorro estimado de 54 KiB) y su insight de entrega de imágenes suma 112 KiB de ahorro en 4 archivos. Los tres alt="" corresponden a cili_avatar.webp, un avatar pequeño del widget de chat, y son aceptables como decorativos.

*Evidencia:*
- 10 de 10 imágenes con contenido con alt válido; sinAlt: [] y altVacioEnImagenesGrandes: []
- pesoTotalImagenesKB: 88; imagenesPesadas: []
- Lighthouse uses-responsive-images (score 0): cili_render_saluda.webp, 86,516 bytes, ahorro 55,351 bytes
- Lighthouse image-delivery-insight: ahorro estimado de 112 KiB (cili_render_saluda, cili_asoma, cili_avatar, cili_cara)
- uses-optimized-images, modern-image-formats y offscreen-images pasan (WebP, carga diferida en las imágenes de abajo)

*Cómo mejorarlo:*
- Exporta cili_render_saluda.webp al tamaño real con que se muestra en móvil (aprox. 390 px de ancho, y 780 px para pantallas 2x) y ofrécela con srcset/sizes; Lighthouse estima que se ahorran unos 54 KiB.
- Redimensiona también cili_asoma.webp, cili_avatar.webp y cili_cara.webp a las dimensiones con que se pintan; el insight de entrega de imágenes calcula 112 KiB de ahorro en total.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Confirmo el puntaje del script: rendimiento 92 (cumple ≥ 80) y CLS 0.001 (cumple < 0.1), pero LCP de 3.19 s (no cumple < 2.5 s), así que se cumplen dos de tres métricas. Es una sola medición de Lighthouse móvil y puede variar entre corridas y equipos, pero el LCP queda a 0.7 s del umbral. El servidor responde rápido (100 ms), no hay recursos que bloqueen el render ni JS sin usar, y el FCP es de 1.19 s; la demora está entre el primer pintado y el elemento más grande, probablemente la imagen principal de Cili (la más pesada y sobredimensionada según Lighthouse), aunque el reporte no identifica el nodo LCP.

*Evidencia:*
- Rendimiento 92, LCP 3,191 ms, CLS 0.0009, FCP 1,194 ms, TBT 135 ms, Speed Index 1,980 ms
- server-response-time: el documento raíz tardó 100 ms
- render-blocking-resources y unused-javascript pasan (score 1)
- cili_render_saluda.webp pesa 86.5 KB y Lighthouse estima 54 KiB de ahorro por sobredimensionado
- Peso total de la página: 300 KiB; además se descargan cili_explica.webm (38 KB) y cili_habla.webm (27.5 KB)

*Cómo mejorarlo:*
- Reduce la imagen principal cili_render_saluda.webp al tamaño que realmente se pinta en móvil (hoy ahorra ~54 KiB) y verifica que tenga fetchpriority="high" y que no se cargue con lazy, para bajar el LCP de 3.19 s a menos de 2.5 s.
- Pospón la carga de los videos cili_explica.webm y cili_habla.webm y del widget de chat de Cili hasta después del primer pintado o la primera interacción, para que no compitan por ancho de banda con el elemento LCP.

#### SEO 9 · Móvil: 2/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto (width=device-width, initial-scale=1), no hay scroll horizontal (0 px) y en la captura móvil el diseño se ve limpio: el texto es legible sin zoom, los botones principales («PEDIR GAS», «PEDIR CILINDRO · $3,60», «HABLAR CON CILI») son grandes y están bien separados, y el formulario de pedido ocupa todo el ancho. Solo 3 de 68 objetivos táctiles miden menos de 24 px (enlaces de 20 px de alto bajo el formulario) y 4% del texto es menor a 12 px. Detalles menores que vi y que no rompen la experiencia: el widget flotante «Habla con Cili» y su globo tapan parte de la mascota y del marcador «3», y en el encabezado no vi botón de menú (solo logo y «Pedir gas»), aunque la navegación existe en el DOM. La captura completa está cortada a 3,000 px, así que no pude revisar la parte baja ni el pie.

*Evidencia:*
- viewport="width=device-width, initial-scale=1, viewport-fit=cover"; desbordeHorizontalPx: 0
- Texto pequeño (< 12 px): 249 de 6,638 caracteres (3.8%)
- Objetivos táctiles pequeños: 3 de 68 (enlaces de 136 a 243 px de ancho por 20 px de alto)
- Captura movil-arriba.png: sin contenido cortado ni encimado en lo esencial; sin banner de cookies ni pop-up que tape la pantalla
- Captura movil-arriba.png: encabezado con logo y botón «PEDIR GAS», sin ícono de hamburguesa visible; el widget de chat se superpone a la ilustración de Cili

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 4 enlaces internos (inicio, Distribuidores, Guías, Pedir gas) y se revisaron 13 enlaces internos únicos con 0 rotos y 0 sin verificar. No hay anclas genéricas ni enlaces sin texto, y las 14 URLs internas son legibles (p. ej. /gas-a-domicilio/ibarra/).

*Evidencia:*
- 13 de 13 enlaces internos revisados, rotos: [], sinVerificar: []
- Anclas genéricas: 0; sin texto: 0; Lighthouse «Links have descriptive text»: 1
- URLs como https://cilindroya.com/gas-a-domicilio/otavalo/ y /guias/distribuidor-de-gas-carga-vendida/

### AEO

#### AEO 1 · Respuesta directa arriba: 2/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Las dos primeras frases del H1 responden las tres cosas en 57 palabras: qué es («plataforma de entrega de gas doméstico a domicilio»), para quién (hogares de «Ibarra, Otavalo, Antonio Ante y Cotacachi») y qué ofrece («cilindro de 15 kg cuesta $3,60 en total… pagas al recibir en efectivo o DeUna, todos los días de 06:30 a 19:30»). La respuesta llega sin eslóganes previos; solo antecede una línea corta con la misma información.

*Evidencia:*
- «CilindroYa es la plataforma de entrega de gas doméstico a domicilio en Ibarra, Otavalo, Antonio Ante y Cotacachi.»
- «Tu cilindro de 15 kg cuesta $3,60 en total ($1,65 cilindro oficial ARCH + $1,85 de entrega + $0,10 de plataforma), pagas al recibir en efectivo o DeUna, todos los días de 06:30 a 19:30.»
- 57 palabras en el bloque

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Hay varios H2 que son preguntas reales de un usuario y con la respuesta justo debajo: «¿Cuánto cuesta el cilindro de gas a domicilio? $3,60 en tu puerta.» (la primera frase da el desglose $1,65 + $1,85 + $0,10), «¿Dónde operamos y a qué barrios llegamos en Imbabura?» (primera frase: «Operamos todos los días de 06:30 a 19:30 en Ibarra, Otavalo, Antonio Ante y Cotacachi») y «¿Cómo pedir tu cilindro de gas en 4 pasos?» (los 4 pasos numerados). «¿Qué servicios ofrecemos…?» también se responde con la lista de precios. Dentro del bloque del precio aparece el aviso «Por ahora no hay distribuidores disponibles en tu zona», que contradice el mensaje del sitio, pero no quita que la respuesta esté arriba.

*Evidencia:*
- H2: «¿Cuánto cuesta el cilindro de gas a domicilio? $3,60 en tu puerta.»
- H2: «¿Dónde operamos y a qué barrios llegamos en Imbabura?»
- H2: «¿Cómo pedir tu cilindro de gas en 4 pasos?»
- 6 de 12 H2 están en forma de pregunta

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección de FAQ visible bajo el H2 «¿Tienes preguntas frecuentes antes de pedir?» con 8 preguntas en formato de acordeón, y cada respuesta es completa y corta (1–2 frases). Ejemplos: «Alrededor de 15 a 20 minutos desde que el repartidor acepta tu pedido…» y «No. CilindroYa funciona en el navegador de tu celular.». También existe FAQPage en el schema, pero la calificación se basa en la sección visible.

*Evidencia:*
- 8 preguntas con «▸» en el texto renderizado
- «¿Cuánto tarda en llegar el gas?» → «Alrededor de 15 a 20 minutos desde que el repartidor acepta tu pedido, según tu barrio y la hora.»
- «¿Tengo que descargar una aplicación?» → «No. CilindroYa funciona en el navegador de tu celular.»

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay un bloque JSON-LD válido con @context schema.org y los tipos WebSite, LocalBusiness, Service y FAQPage, que son adecuados para un negocio local de entrega de gas con FAQ visible. Los datos coinciden con la página: teléfono +593993052744 = «099 305 2744», precio $3.60 = «$3,60» desglosado igual ($1,65 + $1,85 + $0,10) y las 8 preguntas del FAQPage corresponden a las 8 preguntas visibles. Está en el HTML inicial, así que los bots sin JavaScript lo ven.

*Evidencia:*
- 1 bloque JSON-LD, sin inválidos, @context "https://schema.org"
- Tipos: WebSite, LocalBusiness, Service, FAQPage (8 preguntas, igual que el acordeón visible)
- telephone "+593993052744" vs página «099 305 2744»; precio "3.60" vs «$3,60 en total»
- Está en el HTML crudo (crudo.jsonld = 4 nodos)
- Detalles menores: address es texto simple («Ibarra, Imbabura, EC»), sameAs vacío, sin openingHours, logo ni areaServed, aunque la página muestra horario 06:30–19:30 y 4 cantones

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae 1239 de 1376 palabras del render (90%, por encima del 80%). El H1 «Gas a domicilio en Imbabura por $3,60», los H2/H3 de los 4 pasos y las primeras palabras del crudo con el precio, el horario y la forma de pago ya vienen sin ejecutar JavaScript.

*Evidencia:*
- 90% del texto en HTML inicial (1239/1376 palabras)
- H1 y encabezados H2/H3 presentes en el HTML crudo
- Primeras palabras del crudo: «Cilindro de 15 kg a $3,60 en tu puerta · Pagas al recibir: efectivo o DeUna»

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt tiene bloques explícitos con «Allow: /» para GPTBot, ClaudeBot, PerplexityBot y Google-Extended (más OAI-SearchBot), y ninguno queda bloqueado. Solo se restringen /pwa/ y /marketing/ (igual que para todos los bots), que no son las páginas de contenido ni de pedido, y ninguno de los enlaces de la página apunta ahí. El archivo parece escrito a mano (comentario «Buscadores con IA: bienvenidos»), sin señales de que lo administre Cloudflare ni de Content-Signal. Bonus informativo: existe https://cilindroya.com/llms.txt, que no cambia el puntaje.

*Evidencia:*
- GPTBot, ClaudeBot, PerplexityBot y Google-Extended: «Allow: /»
- Disallow parcial solo en /pwa/ y /marketing/
- Sitemap: https://cilindroya.com/sitemap.xml
- llms.txt existe (bonus, sin efecto en el puntaje)

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Predominan los párrafos cortos (63 párrafos, promedio de 16 palabras, ninguno largo) y hay una lista numerada de 4 pasos, listas con viñetas (15 ítems en total) y un bloque de servicios con precio por línea. Cada sección trata un solo tema (pasos, precio, cobertura, distribuidores, servicios, FAQ), con ≈81 palabras por sección.

*Evidencia:*
- 63 párrafos, promedio 16 palabras, 0 párrafos largos
- Pasos numerados del 1 al 4 bajo «¿Cómo pedir tu cilindro de gas en 4 pasos?»
- Lista de servicios: «Gas doméstico 15 kg… $1,65», «Entrega a domicilio… $1,85», «Total por cilindro 15 kg $3,60»

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «CilindroYa» es idéntico en og:site_name, title, texto de la página y el `name` del schema (WebSite y LocalBusiness). El teléfono coincide al normalizarlo (099 305 2744 = +593993052744) y la ubicación (Ibarra, Imbabura) coincide entre el pie y el schema. Falta lo importante para ser verificable: no hay ningún perfil de red social, `sameAs` está vacío en los cuatro nodos y no hay correo.

*Evidencia:*
- title: «CilindroYa · Gas a domicilio en Imbabura por $3,60»; og:site_name: «CilindroYa»; schema name: «CilindroYa» (WebSite y LocalBusiness)
- Teléfono en página «099 305 2744» y en schema «+593993052744»: es el mismo número
- Pie: «Ibarra, Imbabura · Lunes a domingo, 06:30 a 19:30»; schema address: «Ibarra, Imbabura, EC»
- Descripción coherente: schema «Plataforma de entrega de cilindros de gas doméstico a domicilio en Imbabura, Ecuador» y texto «plataforma de entrega de gas doméstico a domicilio en Ibarra, Otavalo, Antonio Ante y Cotacachi»
- Redes: solo enlaces wa.me (WhatsApp); sin Facebook, Instagram ni TikTok; `sameAs` vacío
- Sin correo en la página ni en el schema; el pie no trae © con el nombre del negocio (copyright: null); la dirección es solo ciudad, sin calle

*Cómo mejorarlo:*
- Crea y enlaza en el pie los perfiles oficiales de la marca (por ejemplo Facebook e Instagram de CilindroYa) y agrégalos al arreglo `sameAs` del nodo LocalBusiness y del WebSite.
- Agrega un correo de contacto visible en el pie (por ejemplo hola@cilindroya.com) y repítelo como `email` en el schema LocalBusiness.
- Añade al pie un © con el nombre y el año («© 2026 CilindroYa · Ibarra, Imbabura, Ecuador») y completa `address` en el schema con `PostalAddress` (addressLocality, addressRegion, addressCountry) y `areaServed` con los cuatro cantones.

#### AEO 9 · Datos concretos: 2/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Casi todas las afirmaciones traen datos verificables: precio desglosado ($1,65 + $1,85 + $0,10 = $3,60), peso del cilindro (15 kg), horario (06:30 a 19:30), tiempo de llegada (15 a 20 minutos), otros precios ($12,00 la válvula, $22,50 el cilindro industrial de 45 kg) y cantones y parroquias concretos. No se detectaron frases genéricas tipo «somos los mejores».

*Evidencia:*
- «$3,60 en total ($1,65 cilindro oficial ARCH + $1,85 de entrega + $0,10 de plataforma)»
- «Válvula reguladora… $12,00», «Gas industrial 45 kg… $22,50»
- «Alrededor de 15 a 20 minutos desde que el repartidor acepta tu pedido»
- 38 precios y 18 horarios detectados por el script, 0 frases genéricas

#### AEO 10 · Señales de confianza: 0/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

La página no dice quién está detrás de CilindroYa: no hay autor, equipo ni razón social (solo la mascota «Cili»), no hay sección ni enlace «acerca de», no hay fecha de actualización ni testimonios o reseñas. Solo hay indicios débiles: el año «2026» suelto en el pie, sin ©, y menciones sin enlace a ARCH y Vepagas, que no cuentan como fuentes verificables.

*Evidencia:*
- Autor/equipo: ninguno (autor.textoPor: «por WhatsApp»; mencionaEquipo: false); el único «rostro» es la mascota «Cili»
- Fecha: sin <time>, sin meta, sin dateModified en el schema; el pie dice solo «Ibarra · 2026», sin © ni «actualizado»
- Acerca de: enlacesAcerca: []; el menú trae Precio, Zonas, Servicios, Cómo pedir, Preguntas, Distribuidores, Guías; el pie solo tiene Pedir gas, Soy distribuidor, Guías, Preguntas frecuentes y Privacidad
- Testimonios: citas: 0, schemaReview: false, sin encabezado de reseñas
- Fuentes: fuentesExternas: 0; «precio oficial ARCH» y «distribuidores autorizados de Vepagas» aparecen como texto sin enlace a las fuentes
- Existe una página de privacidad (/privacidad.html), pero no identifica al responsable en la evidencia revisada

*Cómo mejorarlo:*
- Crea una página «Quiénes somos» (por ejemplo /nosotros/) con la razón social o responsable, los nombres y roles del equipo fundador, la ciudad y un contacto, y enlázala desde el menú y el pie.
- Muestra la fecha de actualización de forma visible, por ejemplo «Precios y horarios actualizados el 15 de noviembre de 2026» con <time datetime>, y añade `dateModified` al schema; cambia el pie a «© 2026 CilindroYa».
- Publica testimonios verificables (nombre, barrio o cantón, calificación) o reseñas con fuente, y enlaza las fuentes oficiales que respaldan tus datos, como el tarifario de la ARCH y la página de Vepagas, con `rel="noopener"`.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 10 · Señales de confianza** (0/2): Crea una página «Quiénes somos» (por ejemplo /nosotros/) con la razón social o responsable, los nombres y roles del equipo fundador, la ciudad y un contacto, y enlázala desde el menú y el pie.
2. **SEO 7 · Imágenes** (1/2): Exporta cili_render_saluda.webp al tamaño real con que se muestra en móvil (aprox. 390 px de ancho, y 780 px para pantallas 2x) y ofrécela con srcset/sizes; Lighthouse estima que se ahorran unos 54 KiB.
3. **SEO 8 · Velocidad** (1/2): Reduce la imagen principal cili_render_saluda.webp al tamaño que realmente se pinta en móvil (hoy ahorra ~54 KiB) y verifica que tenga fetchpriority="high" y que no se cargue con lazy, para bajar el LCP de 3.19 s a menos de 2.5 s.
4. **AEO 8 · Identidad clara y consistente** (1/2): Crea y enlaza en el pie los perfiles oficiales de la marca (por ejemplo Facebook e Instagram de CilindroYa) y agrégalos al arreglo `sameAs` del nodo LocalBusiness y del WebSite.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
