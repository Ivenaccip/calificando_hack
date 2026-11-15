# Calificación SEO + AEO: https://ergonlab.com.mx/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 92.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **15** | 20 | 75% |
| AEO | **9** | 20 | 45% |
| **Total** | **24** | 40 | 60% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente |
| 2 | Descripción y vista al compartir | ■□ 1/2 | Script | agente |
| 3 | Estructura de encabezados | ■■ 2/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | ■□ 1/2 | Agente | agente |
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
| 2 | Encabezados en forma de pregunta | □□ 0/2 | Agente | agente |
| 3 | Preguntas frecuentes | □□ 0/2 | Agente | agente |
| 4 | Datos estructurados | ■■ 2/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■■ 2/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | □□ 0/2 | Script | agente |
| 7 | Formato fácil de extraer | ■□ 1/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | ■□ 1/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 46 caracteres, "Ergon Lab | El trabajo detrás de cada proyecto", que incluye la marca y coincide con el H1 y con el mensaje del encabezado de la página. No es genérico. Es algo corto para el rango de 50–60 y el lema por sí solo no dice que se trata de software de gestión de obra, pero la marca va al inicio y el criterio se cumple.

*Evidencia:*
- 1 etiqueta <title>: "Ergon Lab | El trabajo detrás de cada proyecto"
- 46 caracteres
- H1: "El trabajo detrás de cada proyecto."

#### SEO 2 · Descripción y vista al compartir: 1/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 82 caracteres, muy por debajo de 140–160, y es descriptiva pero no invita a entrar: "Software de gestión de obra privada y pública y herramientas de campo Ergon Tools." no tiene beneficio ni llamada a la acción. og:title, og:description y og:image existen, y og:image es una URL absoluta (https://horizons-cdn.hostinger.com/...png).

*Evidencia:*
- meta description: 82 caracteres (rango 140–160)
- og:description repite la misma frase de 82 caracteres
- og:image absoluta en https y twitter:card summary_large_image

*Cómo mejorarlo:*
- Amplía la meta description a 140–160 caracteres con beneficio y llamada a la acción, por ejemplo: «Software para gestionar obra privada y pública con control de costos, estimaciones y trazabilidad. Conoce Ergon GDO, GDOP y las calculadoras de Ergon Tools.» (unos 156 caracteres).
- Usa el mismo texto mejorado en og:description para que la vista al compartir también invite a entrar.

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un solo H1 ("El trabajo detrás de cada proyecto."), seguido de 5 H2 y 6 H3 sin saltos de nivel (H1 → H2 → H3, nunca H2 → H4). Los H2/H3 son temáticos ("Ergon GDO", "Control de costos: empieza antes del primer colado") y no solo estilo, aunque el H1 es un lema y es el párrafo siguiente el que aclara que es software de gestión de obra. En el texto extraído el H1 y varios H2 aparecen sin espacio ("detrásde", "quecrece"), por un salto de línea sin espacio.

*Evidencia:*
- Resumen: h1=1, h2=5, h3=6, h4–h6=0
- Saltos de nivel: ninguno
- H3 decorativo en la maqueta marcada "CONCEPTO ILUSTRATIVO": "Herramientas de campo."

#### SEO 4 · Tema claro y contenido suficiente: 1/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El título («Ergon Lab | El trabajo detrás de cada proyecto») y el H1 («El trabajo detrás de cada proyecto.») son el mismo eslogan y no dicen qué es el sitio; el tema (software de gestión de obra) solo aparece en el primer párrafo y en la meta descripción. El contenido principal tiene unas 476 palabras, suficiente, aunque parte es rotulado decorativo y el aviso de cookies.

*Evidencia:*
- Título: «Ergon Lab | El trabajo detrás de cada proyecto»
- H1: «El trabajo detrás de cada proyecto.»
- Primer párrafo: «Software para gestionar el esfuerzo que hace posible una obra.»
- 476 palabras en el contenido principal (umbral 300)
- Rótulos sin valor informativo: «ERGON LAB / SUITE DE GESTIÓN01 — 03», «CONCEPTO ILUSTRATIVO»

*Cómo mejorarlo:*
- Cambia el título a: «Ergon Lab | Software de gestión para obra privada y pública» (≤ 60 caracteres) para que el tema quede en el título.
- Convierte el H1 en: «Software para gestionar costos, estimaciones y avances de obra» y deja «El trabajo detrás de cada proyecto» como eslogan en el rótulo superior o en el logotipo.
- Elimina o sustituye los rótulos decorativos («ERGON LAB / SUITE DE GESTIÓN01 — 03», «+», «CONCEPTO ILUSTRATIVO») por una frase que explique qué hace cada producto.

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

No hay noindex en meta robots ni en X-Robots-Tag. El canonical apunta a la misma URL (https://ergonlab.com.mx/), responde 200 sin redirecciones, usa HTTPS y declara lang="es-MX", que coincide con el contenido en español.

*Evidencia:*
- metaRobots: null; xRobotsTag: null
- canonical: https://ergonlab.com.mx/
- status 200, cadena de redirecciones de 1 paso
- <html lang="es-MX">

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

robots.txt existe (200), permite todo para User-agent: * (Allow: /) y declara el sitemap. El sitemap.xml es válido, lista 12 URL del mismo dominio y protocolo (/, /tienda, /app, /noticias, /contacto) e incluye la página. Los Disallow: / solo afectan a bots de entrenamiento de IA (GPTBot, ClaudeBot, Google-Extended, Amazonbot, etc.), no a los buscadores, así que no bloquean el sitio para SEO.

*Evidencia:*
- User-agent: * → Allow: /
- Sitemap: https://ergonlab.com.mx/sitemap.xml (200, 12 URL)
- Disallow: / solo para GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot, Bytespider

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 4 imágenes con contenido tienen alt descriptivo (por ejemplo «Logotipo de Ergon GDOP») y pesan muy poco (33 KB en total, ninguna > 300 KB). Lo que falta es que Lighthouse marca uses-responsive-images: las imágenes se sirven más grandes de lo que se muestran, con un ahorro estimado de 26 KiB. El impacto real es pequeño, pero el parámetro de «no pesar de más» no queda completo.

*Evidencia:*
- 4 de 4 imágenes con alt válido; altVacioEnImagenesGrandes: []
- pesoTotalImagenesKB: 33; imagenesPesadas: []
- uses-responsive-images: score 0.5, «Est savings of 26 KiB» (cada PNG de ~8 KB podría ahorrar ~6-7 KB)
- unsized-images: el logo principal y el logo de Ergon Tools no declaran width/height

*Cómo mejorarlo:*
- Exporta los 4 PNG (logo de Ergon Lab y logos de GDO, GDOP y Ergon Tools) al tamaño en que se muestran en móvil, o sírvelos con srcset/sizes, para ahorrar los ~26 KiB que marca Lighthouse.
- Convierte los logos a SVG o WebP para reducir aún más su peso.
- Agrega los atributos width y height a las imágenes del logo principal y de Ergon Tools para reservar el espacio y evitar saltos de diseño.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Es una sola medición de Lighthouse móvil y puede variar entre corridas y equipos. Rendimiento 92 (cumple ≥ 80) y CLS 0.000 (cumple < 0.1), pero el LCP fue de 2.70 s, por arriba del límite de 2.5 s, así que cumple dos de las tres métricas y queda en 1. El servidor responde rápido (100 ms); el retraso viene de recursos que bloquean el render.

*Evidencia:*
- Rendimiento 92, SEO 92 (Lighthouse 12.8.2)
- LCP 2,702 ms (FCP y Speed Index también 2,702 ms), CLS 0, TBT 0 ms
- render-blocking-resources: ahorro estimado de 720 ms (hoja de Google Fonts y index-Dh_6YOYO.css)
- Peso total de la página: 223 KiB; server-response-time: 100 ms

*Cómo mejorarlo:*
- Elimina los recursos que bloquean el render: carga la fuente Manrope con preload y font-display: swap (o alójala en tu propio dominio) y pon en línea el CSS crítico de la parte superior de la página; Lighthouse estima un ahorro de 720 ms, que podría bajar el LCP de 2.7 s a menos de 2.5 s.
- Reduce el JavaScript que hay que descargar antes de pintar el título (entry.client ~55 KB y jsx-runtime ~27 KB) para que el contenido principal aparezca sin esperar a que cargue la aplicación.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto, no hay scroll horizontal y en la captura el diseño se ve ordenado: títulos grandes, botón hamburguesa y carrito visibles, y botones principales cómodos de tocar. Pero el 55% del texto mide menos de 12 px (etiquetas pequeñas como «INGENIERÍA DE ALTA PRECISIÓN» o «MXN · suscripción») y 8 de 29 enlaces/controles miden menos de 24 px de alto (enlaces del pie de 18 px, enlace de privacidad de 14 px, casilla de 13x13 px). El banner de cookies ocupa ~20% de la pantalla inicial, pero no tapa el título ni los botones de llamada a la acción.

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desbordeHorizontalPx: 0
- Captura movil-arriba.png: sin contenido cortado ni encimado; hamburguesa y carrito visibles; banner de cookies en la parte baja con tres botones de ~44 px de alto
- textoLegible: 1,773 de 3,241 caracteres (55%) menores a 12 px
- botonesTocables: 8 de 29 menores a 24 px; ejemplos: «Programas» 55x18, «Contacto» 69x18, «política de privacidad» 87x14, input 13x13

*Cómo mejorarlo:*
- Sube el tamaño de las etiquetas pequeñas y del texto secundario a al menos 12-14 px en móvil (por ejemplo las etiquetas en mayúsculas sobre los títulos y los textos «MXN · suscripción»).
- Aumenta el área táctil de los enlaces del pie («Programas», «Ergon Tools», «Recursos», «Contacto», «política de privacidad») a un alto mínimo de 44 px con padding o más separación entre ellos.
- Agranda la casilla (input de 13x13 px) o hazla clicable desde su etiqueta con un área de al menos 24x24 px.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 6 enlaces internos distintos (Programas, Ergon Tools, Recursos, Hablemos, etc.). Se revisaron los 11 enlaces internos únicos, con 0 rotos y 0 sin verificar, así que la revisión fue completa. No hay anclas genéricas tipo "clic aquí" o "leer más" y las 12 URLs son legibles (/tienda, /app, /noticias, /contacto). Lighthouse marca "Links have descriptive text" con score 1.

*Evidencia:*
- 0 rotos de 11 enlaces internos revisados; sinVerificar: []
- 0 enlaces genéricos y 0 sin texto
- URLs: /tienda, /app, /noticias, /contacto, /carrito
- Observación menor: dos enlaces distintos con el mismo texto "Conocer solución"

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

La primera frase dice que es software para gestionar el esfuerzo de una obra, pero no nombra a Ergon Lab ni dice para quién es (constructoras, residentes, municipios). Lo que ofrece queda en abstracto («Control, trazabilidad y claridad para cada decisión»). Son 17 palabras, por debajo del rango útil.

*Evidencia:*
- «Software para gestionar el esfuerzo que hace posible una obra. Control, trazabilidad y claridad para cada decisión.»
- Rótulo previo: «INGENIERÍA DE ALTA PRECISIÓN»
- Las audiencias («Obra privada», «Obra pública», «Herramientas de campo») aparecen solo como etiquetas sueltas, sin frase

*Cómo mejorarlo:*
- Reemplaza el párrafo de apertura por: «Ergon Lab es una suite de software para constructoras, despachos de ingeniería y dependencias públicas que organiza presupuestos, costos, estimaciones y contratos de obra en un solo lugar, con precios desde $649.90 MXN al mes.»
- Añade una segunda frase con las dos líneas de producto: «Incluye Ergon GDO para obra privada, Ergon GDOP para obra pública y Ergon Tools, calculadoras gratuitas para el trabajo en campo.»

#### AEO 2 · Encabezados en forma de pregunta: 0/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Ninguno de los cinco H2 ni de los H3 es una pregunta; todos son eslóganes («Cada proyecto exige precisión. Tenemos las herramientas.», «Buenas ideas. En tu correo.»).

*Evidencia:*
- H2: «Una plataforma que crece con el trabajo.»
- H2: «Información que suma a tu obra.»
- 0 de 5 H2 en forma de pregunta

*Cómo mejorarlo:*
- Cambia «Cada proyecto exige precisión. Tenemos las herramientas.» por «¿Qué software de gestión necesita mi obra?» y responde debajo en la primera frase: «Si tu obra es privada, Ergon GDO organiza presupuestos, avances y costos; si es pública, Ergon GDOP centraliza estimaciones y contratos.»
- Añade un H2 «¿Cuánto cuesta Ergon?» con la respuesta inmediata: «Ergon GDO cuesta desde $649.90 MXN al mes y Ergon GDOP desde $7,999 MXN al mes.»
- Cambia «Precisión en campo. Información al instante.» por «¿Qué puedo calcular con Ergon Tools?» y responde con las calculadoras de concreto, acero y materiales y los reportes en PDF.

#### AEO 3 · Preguntas frecuentes: 0/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

No hay sección de preguntas frecuentes visible. No hay encabezado de FAQ ni acordeón de preguntas y respuestas en el contenido, y el sitio tampoco declara FAQPage en el schema.

*Evidencia:*
- texto.md no contiene marcas «▸» de preguntas de acordeón
- Sin encabezado de FAQ; 0 elementos details/summary
- schemaFaq: false

*Cómo mejorarlo:*
- Agrega antes del formulario de correo una sección «Preguntas frecuentes» con al menos 4 preguntas visibles y respuestas de 1–2 frases, por ejemplo: «¿El pago es único o mensual?» — «Ergon GDO se cobra desde $649.90 MXN al mes; confirma en la ficha de cada producto el esquema vigente.»
- Incluye preguntas como «¿Ergon GDO sirve para obra pública?», «¿Ergon Tools es gratis?» y «¿Cuánto tarda la implementación con una empresa piloto?», respondidas con datos concretos.
- Después de publicar la sección visible, marca esas mismas preguntas con schema FAQPage.

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

La página trae 2 bloques JSON-LD válidos con @context schema.org, en el HTML inicial: un WebSite y una Organization, ambos con name "Ergon Lab", que coincide con el título, el H1 de marca y el © del pie. Para la portada de una empresa de software, Organization más WebSite es el tipo adecuado y nada del schema contradice la página (la página no muestra teléfono, correo ni dirección, y el schema tampoco los declara). El schema es básico: el extractor solo muestra name y un sameAs vacío.

*Evidencia:*
- 2 bloques JSON-LD, sin bloques inválidos, "@context": "https://schema.org"
- Tipos: WebSite y Organization; name "Ergon Lab" en ambos
- Está en el HTML crudo (crudo.jsonld = 2)
- sameAs vacío y sin descripción en el schema; la página muestra 2 precios ("Desde $649.90/mes", "Desde $7,999/mes") sin marcado Product/Offer

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae 455 de las 476 palabras de la página renderizada (96%), por encima del umbral de 80%. El H1 y los 12 encabezados ya vienen en el HTML crudo, junto con la descripción de la oferta ("Software para gestionar el esfuerzo que hace posible una obra…"), así que un bot que no ejecuta JavaScript ve lo esencial.

*Evidencia:*
- 455 de 476 palabras en el HTML crudo (96%)
- H1 en crudo: "El trabajo detrás de cada proyecto."
- Encabezados H2/H3 en crudo: Ergon GDO, Ergon GDOP, Herramientas de campo, Control de costos…
- Primeras palabras del crudo: "INGENIERÍA DE ALTA PRECISIÓN" y la descripción del software

#### AEO 6 · Acceso para bots de IA: 0/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt bloquea con "Disallow: /" a tres de los cuatro bots de la rúbrica: GPTBot, ClaudeBot y Google-Extended. Solo PerplexityBot está permitido. Se aplica la regla pareja: un bloqueo cuenta aunque otros bots de IA (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, Perplexity-User) sí estén permitidos. Contexto: las líneas "Content-Signal: search=yes, ai-input=yes, ai-train=no" repetidas por bot y el bloque de Disallow contra bots de entrenamiento (también Applebot-Extended, Bytespider, Amazonbot y meta-externalagent) tienen el formato de un robots.txt administrado por una plataforma, típicamente Cloudflare, así que quizá no fue una decisión manual del dueño. No hay llms.txt (bonus informativo, no afecta el puntaje).

*Evidencia:*
- "User-agent: GPTBot" / "Disallow: /"
- "User-agent: ClaudeBot" / "Disallow: /"
- "User-agent: Google-Extended" / "Disallow: /"
- "User-agent: PerplexityBot" / "Allow: /" con "Content-Signal: search=yes, ai-input=yes, ai-train=no"
- llms.txt no existe (https://ergonlab.com.mx/llms.txt)

*Cómo mejorarlo:*
- Revisa dónde se genera el robots.txt: si es un robots.txt administrado por Cloudflare (por las directivas Content-Signal), desactiva ahí la opción que bloquea a los bots de entrenamiento de IA en lugar de editar el archivo a mano, porque la plataforma lo puede volver a sobrescribir.
- Si quieres que los asistentes de IA puedan usar el sitio, cambia a "Allow: /" las entradas de GPTBot, ClaudeBot y Google-Extended, o elimina sus bloques "Disallow: /". Conserva Content-Signal con ai-train=no si lo que buscas es solo expresar tu preferencia sobre el entrenamiento.
- Opcional: publica un /llms.txt con un resumen del sitio y enlaces a Ergon GDO, Ergon GDOP, Ergon Tools y los recursos (suma como bonus informativo, no cambia el puntaje).

#### AEO 7 · Formato fácil de extraer: 1/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Los párrafos son cortos (promedio de 11 palabras), cada sección trata un tema y hay una lista de 3 viñetas con las calculadoras. Pero gran parte del contenido son rótulos y eslóganes sin oración completa, y la ruta de lanzamiento por fases no tiene formato de pasos o lista numerada.

*Evidencia:*
- 25 párrafos, 0 largos, 3 ítems de lista, 0 listas numeradas, 0 tablas
- Cadenas fragmentadas: «CALCULADORAVolumen de concretoDatos de proyecto / m³»
- Fases pegadas: «01Fundación y legalMarca, dominios y bases legales.MES 1»
- Solo 43 palabras por sección en promedio

*Cómo mejorarlo:*
- Convierte las cuatro fases de la sección «Una plataforma que crece con el trabajo» en una lista numerada: «1. Mes 1: fundación y bases legales. 2. Meses 2–3: piloto de Ergon GDO. 3. Meses 3–4: lanzamiento gratuito de Ergon Tools. 4. Mes 5 en adelante: Ergon GDOP para municipios.»
- Agrega una tabla comparativa Ergon GDO / Ergon GDOP / Ergon Tools con columnas Para quién, Qué incluye y Precio, en lugar de depender solo de las tarjetas.
- Escribe en frases completas los textos de la maqueta («Herramientas de campo. Cálculos claros para decisiones precisas.») o márcalos como decorativos.

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «Ergon Lab» es idéntico en title, og:title, pie (© 2026 Ergon Lab) y en los dos nodos de schema (WebSite y Organization), y la descripción coincide entre meta y og:description. Pero la página no publica teléfono, correo ni dirección (solo enlaza a /contacto), no hay ningún enlace a redes sociales y el schema tiene sameAs vacío, así que un buscador no puede verificar la entidad contra perfiles externos.

*Evidencia:*
- Nombre: title «Ergon Lab | El trabajo detrás de cada proyecto»; schema name «Ergon Lab» (x2); pie «© 2026 Ergon Lab»; og:site_name ausente
- Descripción: meta y og:description idénticas («Software de gestión de obra privada y pública y herramientas de campo Ergon Tools.»); el schema Organization no incluye description
- Contacto: telefonosPagina [], correosPagina [], mailto [], tel []; schema sin telephone, email ni address
- Ubicación: sin dirección ni mapa (mapas: 0); el único «match» de ubicación es ruido de texto («ERGON LAB / SUITE DE GESTIÓN01 — 03»)
- Redes: 0 enlaces externos en toda la página; sameAs: [] en WebSite y Organization

*Cómo mejorarlo:*
- Agrega en el schema Organization los campos email, telephone (o contactPoint con areaServed «MX») y, si hay oficina, address (PostalAddress), y muestra esos mismos datos en el pie de página.
- Publica enlaces a los perfiles oficiales de la marca (por ejemplo LinkedIn, Facebook, Instagram o YouTube de Ergon Lab) en el pie y repítelos en sameAs del schema Organization.
- Completa el schema Organization con description (igual a la meta description), logo y url, y añade la meta og:site_name con valor «Ergon Lab» para reforzar el nombre.

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Hay algunos datos verificables: dos precios (Ergon GDO desde $649.90/mes y Ergon GDOP desde $7,999/mes), fechas de publicación de los artículos y una ruta de lanzamiento por meses. Pero lo central (qué logra el software, para quién, resultados) queda en frases genéricas, y los precios se contradicen con el texto («Licencia digital de pago único» frente a «suscripción»).

*Evidencia:*
- «Desde $649.90/mesMXN · suscripción»
- «Desde $7,999/mesMXN · suscripción»
- «Licencia digital de pago único» (contradice el precio mensual)
- Fechas: «14 noviembre 2026», «10 noviembre 2026», «6 noviembre 2026»
- Genéricos: «Precisión para construir mejor», «Control, trazabilidad y claridad para cada decisión»

*Cómo mejorarlo:*
- Resuelve la contradicción de precios: deja una sola forma de cobro en cada tarjeta, por ejemplo «Desde $649.90 MXN al mes, sin permanencia», o «Pago único de $X MXN».
- Agrega un ejemplo concreto por producto, como: «Con Ergon GDO una constructora puede comparar el presupuesto contra el costo real de cada partida y detectar desviaciones desde el primer colado.»
- Incluye datos de la fase piloto (número de empresas, obras o resultados medidos) en cuanto los tengas, en lugar de describir solo el calendario.

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

De las cuatro señales solo la fecha es clara: hay fechas visibles recientes en los artículos (14 noviembre 2026) y © 2026. No se ve quién está detrás (sin autor ni equipo con nombres), no hay página o sección «Acerca de» (el enlace que el script marcó como «acerca» es un artículo sobre gestión de equipos, falso positivo) y no hay testimonios ni fuentes externas citadas.

*Evidencia:*
- Autor/equipo: autor null en meta, rel=author, JSON-LD y texto «Por»; mencionaEquipo: false
- Fecha: artículos con «14 noviembre 2026», «10 noviembre 2026», «6 noviembre 2026» y pie «© 2026 Ergon Lab»; sin <time>, dateModified ni «actualizado» explícito
- Acerca de: ni la nav ni el pie enlazan a «Nosotros/Acerca de» (nav: Inicio, Programas, Ergon Tools, Recursos; pie: Programas, Ergon Tools, Recursos, Contacto, Privacidad); solo hay una explicación del nombre («Ergon viene del griego érgon…») y una hoja de ruta de lanzamiento («MES 1… MES 5+»)
- Testimonios: citas 0, schemaReview false, sin encabezado de testimonios o casos
- Fuentes: fuentesExternas 0, ningún enlace externo en la página

*Cómo mejorarlo:*
- Crea una página «Nosotros» enlazada desde la nav y el pie, con el nombre, cargo y foto de las personas fundadoras o del equipo, su experiencia en obra y el respaldo legal de la empresa.
- Agrega 2 o 3 testimonios verificables de las empresas piloto de Ergon GDO (nombre, empresa, cargo o logo y, de ser posible, enlace), o un caso de éxito con resultados medibles.
- Firma cada artículo de Recursos con autor y añade «Actualizado el…» con <time datetime> y dateModified en el schema Article; cita fuentes externas con enlace (normas, reglamentos o guías oficiales de obra pública).

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 2 · Encabezados en forma de pregunta** (0/2): Cambia «Cada proyecto exige precisión. Tenemos las herramientas.» por «¿Qué software de gestión necesita mi obra?» y responde debajo en la primera frase: «Si tu obra es privada, Ergon GDO organiza presupuestos, avances y costos; si es pública, Ergon GDOP centraliza estimaciones y contratos.»
2. **AEO 3 · Preguntas frecuentes** (0/2): Agrega antes del formulario de correo una sección «Preguntas frecuentes» con al menos 4 preguntas visibles y respuestas de 1–2 frases, por ejemplo: «¿El pago es único o mensual?» — «Ergon GDO se cobra desde $649.90 MXN al mes; confirma en la ficha de cada producto el esquema vigente.»
3. **AEO 6 · Acceso para bots de IA** (0/2): Revisa dónde se genera el robots.txt: si es un robots.txt administrado por Cloudflare (por las directivas Content-Signal), desactiva ahí la opción que bloquea a los bots de entrenamiento de IA en lugar de editar el archivo a mano, porque la plataforma lo puede volver a sobrescribir.
4. **SEO 2 · Descripción y vista al compartir** (1/2): Amplía la meta description a 140–160 caracteres con beneficio y llamada a la acción, por ejemplo: «Software para gestionar obra privada y pública con control de costos, estimaciones y trazabilidad. Conoce Ergon GDO, GDOP y las calculadoras de Ergon Tools.» (unos 156 caracteres).
5. **SEO 4 · Tema claro y contenido suficiente** (1/2): Cambia el título a: «Ergon Lab | Software de gestión para obra privada y pública» (≤ 60 caracteres) para que el tema quede en el título.
6. **SEO 7 · Imágenes** (1/2): Exporta los 4 PNG (logo de Ergon Lab y logos de GDO, GDOP y Ergon Tools) al tamaño en que se muestran en móvil, o sírvelos con srcset/sizes, para ahorrar los ~26 KiB que marca Lighthouse.
7. **SEO 8 · Velocidad** (1/2): Elimina los recursos que bloquean el render: carga la fuente Manrope con preload y font-display: swap (o alójala en tu propio dominio) y pon en línea el CSS crítico de la parte superior de la página; Lighthouse estima un ahorro de 720 ms, que podría bajar el LCP de 2.7 s a menos de 2.5 s.
8. **SEO 9 · Móvil** (1/2): Sube el tamaño de las etiquetas pequeñas y del texto secundario a al menos 12-14 px en móvil (por ejemplo las etiquetas en mayúsculas sobre los títulos y los textos «MXN · suscripción»).
9. **AEO 1 · Respuesta directa arriba** (1/2): Reemplaza el párrafo de apertura por: «Ergon Lab es una suite de software para constructoras, despachos de ingeniería y dependencias públicas que organiza presupuestos, costos, estimaciones y contratos de obra en un solo lugar, con precios desde $649.90 MXN al mes.»
10. **AEO 7 · Formato fácil de extraer** (1/2): Convierte las cuatro fases de la sección «Una plataforma que crece con el trabajo» en una lista numerada: «1. Mes 1: fundación y bases legales. 2. Meses 2–3: piloto de Ergon GDO. 3. Meses 3–4: lanzamiento gratuito de Ergon Tools. 4. Mes 5 en adelante: Ergon GDOP para municipios.»
11. **AEO 8 · Identidad clara y consistente** (1/2): Agrega en el schema Organization los campos email, telephone (o contactPoint con areaServed «MX») y, si hay oficina, address (PostalAddress), y muestra esos mismos datos en el pie de página.
12. **AEO 9 · Datos concretos** (1/2): Resuelve la contradicción de precios: deja una sola forma de cobro en cada tarjeta, por ejemplo «Desde $649.90 MXN al mes, sin permanencia», o «Pago único de $X MXN».
13. **AEO 10 · Señales de confianza** (1/2): Crea una página «Nosotros» enlazada desde la nav y el pie, con el nombre, cargo y foto de las personas fundadoras o del equipo, su experiencia en obra y el respaldo legal de la empresa.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
