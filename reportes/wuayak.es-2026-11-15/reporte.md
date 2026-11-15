# Calificación SEO + AEO: https://wuayak.es/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 83.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **15** | 20 | 75% |
| AEO | **15** | 20 | 75% |
| **Total** | **30** | 40 | 75% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente |
| 2 | Descripción y vista al compartir | ■■ 2/2 | Script | agente |
| 3 | Estructura de encabezados | ■■ 2/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | ■□ 1/2 | Agente | agente |
| 5 | Indexable | ■■ 2/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | ■■ 2/2 | Script | agente |
| 7 | Imágenes | ■□ 1/2 | Script + Lighthouse | agente |
| 8 | Velocidad | ■□ 1/2 | Lighthouse | agente |
| 9 | Móvil | ■□ 1/2 | Lighthouse + captura móvil | agente |
| 10 | Enlaces y URLs | ■□ 1/2 | Script | agente |

## Rúbrica AEO: que los buscadores con IA usen la página como respuesta

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Respuesta directa arriba | ■□ 1/2 | Agente | agente |
| 2 | Encabezados en forma de pregunta | ■■ 2/2 | Agente | agente |
| 3 | Preguntas frecuentes | ■■ 2/2 | Agente | agente |
| 4 | Datos estructurados | ■■ 2/2 | Script | agente |
| 5 | Contenido legible sin JavaScript | ■■ 2/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | □□ 0/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■■ 2/2 | Agente + script | agente |
| 9 | Datos concretos | ■□ 1/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 54 caracteres que nombra la marca y dice a qué se dedica y dónde: «WUAYAK Startup Studio | MVP y validación en Valladolid». No es genérico y es distinto del H1, así que aporta información propia.

*Evidencia:*
- title: «WUAYAK Startup Studio | MVP y validación en Valladolid»
- 1 etiqueta <title>, 54 caracteres
- Marca + tema (MVP, validación) + ubicación (Valladolid)

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 153 caracteres (dentro de 140–160) y es clara: dice qué hace el estudio, con qué servicios y para quién («validamos ideas, creamos MVPs… para emprendedores e inversores»). Existen og:title, og:description y og:image, esta última con URL absoluta (https://images.hostinger.com/…png), y twitter:card es summary_large_image.

*Evidencia:*
- meta description: 153 caracteres, «Startup studio en Valladolid: validamos ideas, creamos MVPs…»
- og:title, og:description y og:image presentes
- og:image absoluta: https://images.hostinger.com/38013f64-…/f662ada1-….png
- twitter:card = summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay un único H1 («Convierte tu idea en un negocio real y empieza a ganar clientes desde el primer día») y 7 H2 con 26 H3 sin saltos de nivel (0 H4–H6). Los H3 son contenido real (servicios, etapas del método, proyectos y preguntas frecuentes), no elementos de menú, pie o estilo.

*Evidencia:*
- Resumen: H1=1, H2=7, H3=26, H4–H6=0; sin saltos
- H2 temáticos: «¿Qué es WUAYAK Startup Studio?», «¿Cómo creamos una startup paso a paso?»
- H3 de FAQ bajo el H2 «¿Te queda alguna duda?» (9 preguntas)

#### SEO 4 · Tema claro y contenido suficiente: 1/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El título sí nombra el tema («WUAYAK Startup Studio | MVP y validación en Valladolid») y hay contenido de sobra (≈1,446 palabras), pero el H1 («Convierte tu idea en un negocio real y empieza a ganar clientes desde el primer día») no dice que es un startup studio ni habla de MVP o validación. El primer párrafo real promete «una web lista para funcionar», que no coincide con el tema, y arriba aparece un aviso de plantilla («Creado con Hostinger. Personaliza esta plantilla con IA Builder.»). Además hay texto repetido: el párrafo «Somos WUAYAK, un startup studio con sede en Valladolid…» reitera casi igual la definición de la sección anterior, y las cuatro etapas de la metodología se repiten tres veces.

*Evidencia:*
- Título: «WUAYAK Startup Studio | MVP y validación en Valladolid»
- H1: «Convierte tu idea en un negocio real y empieza a ganar clientes desde el primer día.»
- Primer párrafo del hero: «te entregamos una web lista para funcionar que transmite confianza inmediata»
- Banner de plantilla: «Creado con Hostinger . Personaliza esta plantilla con IA Builder.»
- Repetición: «Trabajamos con emprendedores, startups, pymes e inversores» aparece en dos secciones seguidas

*Cómo mejorarlo:*
- Reescribe el H1 para que coincida con el título, por ejemplo: «WUAYAK, startup studio en Valladolid: validamos tu idea y construimos tu MVP».
- Cambia el párrafo bajo el H1 (hoy habla de «una web lista para funcionar») por: «Ayudamos a emprendedores, startups, pymes e inversores a validar su idea, construir un MVP y salir al mercado con evidencias, desde Valladolid y en remoto.»
- Quita el banner «Creado con Hostinger… Usar plantilla» y elimina el párrafo duplicado «Somos WUAYAK, un startup studio…» de la sección de servicios; sustitúyelo por una frase que enumere los seis servicios.

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 por HTTPS, sin redirecciones, sin noindex en meta ni en X-Robots-Tag. El canonical apunta a sí misma (https://wuayak.es/) y <html lang="es"> coincide con el idioma español del contenido.

*Evidencia:*
- urlFinal https://wuayak.es/ con status 200
- metaRobots: null, xRobotsTag: null
- canonical: https://wuayak.es/
- lang="es" y contenido en español

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

El robots.txt responde 200, permite todo a `User-agent: *` (`Allow: /`) y declara el sitemap. El sitemap.xml existe, es válido y lista https://wuayak.es/ (mismo dominio y protocolo); al ser un sitio de una sola página, una URL es lo esperado. Los `Disallow: /` solo van dirigidos a rastreadores de entrenamiento de IA (GPTBot, ClaudeBot, Google-Extended, etc.), no a buscadores tradicionales.

*Evidencia:*
- robots.txt 200: `User-agent: *` con `Allow: /`
- Sitemap: https://wuayak.es/sitemap.xml declarado en robots.txt
- sitemap.xml 200 válido, 1 URL: https://wuayak.es/
- Disallow: / solo para GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot y Bytespider

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 6 imágenes con contenido tienen alt descriptivo y específico (por ejemplo «Fundadores colaborando con portátiles en un espacio de coworking luminoso»), ninguna pesa más de 300 KB y el total es de solo 55 KB. Lo que queda a medias es que Lighthouse marca uses-responsive-images (ahorro estimado de 22 KiB): el logo se sirve casi 10 veces más grande de lo necesario (5.9 KB de los que se podrían ahorrar 5.8 KB) y la foto principal de 35 KB se podría reducir a la mitad para una pantalla de 390 px.

*Evidencia:*
- 6 de 6 imágenes con alt válido; altVacioEnImagenesGrandes vacío; imagenesPesadas vacío
- Peso total de imágenes: 55 KB
- uses-responsive-images: ahorro de 22 KiB (foto principal 17 KB, logo 5.8 KB)
- uses-optimized-images, modern-image-formats y offscreen-images: sin observaciones

*Cómo mejorarlo:*
- Sirve la foto principal del coworking con srcset y tamaños acordes al móvil (por ejemplo 400 px y 800 px de ancho) en lugar de un solo ?width=768; Lighthouse estima 17 KB de ahorro.
- Reemplaza el logotipo de WUAYAK por un SVG o por un PNG al doble del tamaño con que se muestra (unos 160 px de ancho como máximo); hoy se descarga casi del todo de más (5.8 KB de ahorro).
- Diferencia el alt de la imagen del equipo que se repite con la misma URL (aparece con dos textos casi iguales) o usa solo una de las dos descripciones.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Confirmo el puntaje del script: Lighthouse móvil da rendimiento 83 (cumple ≥ 80) y CLS 0.000 (cumple < 0.1), pero el LCP es de 3.96 s y no llega al máximo de 2.5 s, así que cumple 2 de 3 métricas. El FCP ya es lento (2.76 s), lo que apunta a que el contenido tarda en pintarse por los recursos que bloquean el render y el JavaScript de la página. Es una sola medición de Lighthouse y puede variar entre corridas y equipos, por lo que el LCP podría moverse algo, aunque la distancia al límite es amplia.

*Evidencia:*
- Rendimiento 83, LCP 3.96 s, CLS 0.000, FCP 2.76 s, TBT 0 ms, Speed Index 3.07 s
- render-blocking-resources: ahorro de 240 ms (hoja de Google Fonts e index-BQ_Rxob2.css)
- unused-javascript: ahorro de 23 KiB
- Servidor rápido: documento raíz en 160 ms; peso total de 278 KiB

*Cómo mejorarlo:*
- Elimina el bloqueo del render: carga las fuentes de Google Fonts con preconnect y font-display: swap (o alójalas localmente, solo con los pesos que usas de Manrope y Roboto Slab) y pon en línea el CSS crítico de index-BQ_Rxob2.css.
- Reduce el JavaScript sin usar (23 KiB) dividiendo el código por ruta o con carga diferida de lo que no se ve al abrir la página, para que el contenido de arriba aparezca antes.
- Haz que el elemento LCP aparezca más temprano: si es la foto principal, aliviana su peso y precárgala con fetchpriority="high" (sin loading="lazy"); si es el título, evita que dependa de las fuentes web para pintarse.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Confirmo el puntaje del script. Tiene meta viewport correcto, no hay scroll horizontal y en la captura de 390 px el diseño se ve ordenado: logo, botón «Hablemos de tu idea» y menú hamburguesa visibles, titular grande y botón principal ancho y fácil de tocar. Queda a medias porque el 18% del texto mide menos de 12 px (etiquetas y descripciones de las tarjetas se ven notablemente más pequeñas que el cuerpo) y una barra fija de plantilla de Hostinger («Creado con Hostinger… Usar plantilla») ocupa unos 100 px en la parte inferior de la pantalla y tapa contenido. La captura completa solo llega a 3000 px, así que no vi el pie de página, donde el script detecta enlaces pequeños («Privacidad», 38×12 px).

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desborde horizontal 0 px
- 18% del texto (1751 de 9834 caracteres) menor a 12 px
- 3 de 32 objetivos táctiles menores a 24 px: dos inputs (1×1 y 15×15 px) y el enlace «Privacidad» (38×12 px)
- Captura móvil: barra fija inferior «Creado con Hostinger. Personaliza esta plantilla con IA Builder.» con botón «Usar plantilla», encima del contenido
- Captura móvil: menú hamburguesa visible y botón principal «Empezar mi proyecto hoy» grande

*Cómo mejorarlo:*
- Quita la barra fija «Creado con Hostinger… Usar plantilla» antes de publicar el sitio; hoy tapa parte de la pantalla en móvil y distrae de tu llamada a la acción.
- Sube a 14 px o más el texto de las etiquetas (Emprendedores, Startups, Pymes, Inversores) y de las descripciones de las tarjetas (Día 1, Web, MVP), y evita bajar de 12 px en cualquier texto.
- Aumenta el área de toque de los enlaces del pie de página (como «Privacidad», de 12 px de alto) a al menos 24 px, con padding o más separación entre ellos.

#### SEO 10 · Enlaces y URLs: 1/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

No hay enlaces rotos, ni anclas genéricas («clic aquí», «leer más»), ni URLs ilegibles, y Lighthouse aprueba «Links have descriptive text». Pero el menú que se ve en pantalla («Qué hacemos», «Cómo trabajamos», «El estudio» y el botón «Hablemos de tu idea») no aparece como enlaces <a> en el DOM: el script detectó 0 enlaces internos y los únicos 4 enlaces son externos (WhatsApp e Instagram). Un rastreador no puede seguir la navegación, y no se pudo confirmar que el menú funcione.

*Evidencia:*
- menu: [] y 0 enlaces internos distintos en menú/encabezado
- Los 4 enlaces de la página son externos (3 a wa.me, 1 a instagram.com/holawuayak)
- texto.md muestra el nav como «Qué hacemosCómo trabajamosEl estudio», sin enlaces
- 0 enlaces rotos, 0 genéricos, 0 sin texto; Lighthouse link-text = 1
- El script no revisó ningún enlace (revisados: 0) porque no hay internos

*Cómo mejorarlo:*
- Convierte los tres elementos del menú en enlaces reales a anclas de la misma página, por ejemplo <a href="#que-hacemos">Qué hacemos</a>, <a href="#como-trabajamos">Cómo trabajamos</a> y <a href="#el-estudio">El estudio</a>, con el id correspondiente en cada sección.
- Haz que los botones «Hablemos de tu idea» y «Empezar mi proyecto hoy» sean enlaces <a> (a #contacto o a WhatsApp) en vez de botones con JavaScript, para que se puedan rastrear.
- Verifica en móvil que el menú hamburguesa abra la lista y que cada opción lleve a su sección.

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Las primeras frases del contenido son un eslogan y una promesa: «Convierte tu idea en un negocio real…» y «Deja de perder tiempo con herramientas difíciles… te entregamos una web lista para funcionar». No dicen qué es WUAYAK ni para quién. La definición completa sí existe, pero llega en la sección siguiente: «WUAYAK Startup Studio es un estudio de creación de startups con sede en Valladolid. Ayudamos a emprendedores, startups, pymes e inversores a validar ideas de negocio, desarrollar MVPs…». Responde qué es, para quién y qué ofrece, pero está debajo del hero y de los datos «Día 1 / Web / MVP». Hoy el hero no cumple y la respuesta queda un bloque más abajo.

*Evidencia:*
- Hero: «Deja de perder tiempo con herramientas difíciles. En Valladolid, te entregamos una web lista para funcionar…» (25 palabras, sin decir qué es ni para quién)
- Definición correcta pero en el segundo bloque: «WUAYAK Startup Studio es un estudio de creación de startups con sede en Valladolid. Ayudamos a emprendedores, startups, pymes e inversores…»
- Lo primero en el texto es «Creado con Hostinger . Personaliza esta plantilla con IA Builder.»

*Cómo mejorarlo:*
- Sustituye el párrafo bajo el H1 por la definición: «WUAYAK es un startup studio de Valladolid que ayuda a emprendedores, startups, pymes e inversores a validar ideas, construir MVPs y llevarlos al mercado, con desarrollo digital, IA y marketing.» (≈35 palabras).
- Mueve el aviso de plantilla («Creado con Hostinger… Usar plantilla») fuera del contenido para que la definición sea lo primero que lea un buscador o una IA.

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

6 de 7 H2 son preguntas, y además hay H3 en forma de pregunta. Varias tienen la respuesta en la primera frase: «¿Qué es WUAYAK Startup Studio?» → «WUAYAK Startup Studio es un estudio de creación de startups con sede en Valladolid…»; «¿Desarrolláis MVP?» → «Sí. Construimos productos mínimos viables…»; «¿Cuánto cuesta contratar vuestros servicios?» → «No hay una tarifa única…». Dos H2 («¿Te queda alguna duda?» y «¿Y si tu idea es el próximo paso?») son retóricos de cierre, y «¿Qué servicios ofrecemos…?» abre con un párrafo genérico en lugar de enumerar los servicios. Aun así, hay bastante más de 3 preguntas reales respondidas de inmediato.

*Evidencia:*
- H2: «¿Qué es WUAYAK Startup Studio?» con definición directa debajo
- H3: «¿Desarrolláis MVP?» → «Sí. Construimos productos mínimos viables centrados en la hipótesis que quieres probar.»
- H3: «¿Cuánto cuesta contratar vuestros servicios?» → «No hay una tarifa única. Cada proyecto se evalúa según su alcance…»
- H2 retóricos: «¿Te queda alguna duda?», «¿Y si tu idea es el próximo paso?»

#### AEO 3 · Preguntas frecuentes: 2/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección visible rotulada «04 / PREGUNTAS FRECUENTES» (H2 «¿Te queda alguna duda?») con 9 preguntas como H3, cada una con su respuesta en texto abierto de 2 a 4 frases cortas y completas. Responden de verdad, incluso la de precio. El script no la detectó porque el H2 no dice «FAQ» ni «Preguntas frecuentes», pero el texto renderizado la muestra completa y no depende solo del schema.

*Evidencia:*
- Rótulo: «04 / PREGUNTAS FRECUENTES»
- 9 preguntas, por ejemplo «¿En qué fase puedo empezar a trabajar con vosotros?» → «En cualquier fase. No necesitas tener un plan cerrado ni un equipo formado…»
- «¿Cómo es la primera reunión?» → «Es una conversación sin compromiso. Escuchamos tu idea… Al final sabrás si tiene sentido seguir juntos.»

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 3 bloques JSON-LD válidos con @context schema.org, presentes en el HTML inicial: WebSite, ProfessionalService (subtipo de LocalBusiness, adecuado para un estudio con sede en Valladolid) y FAQPage. Los datos coinciden con lo visible: teléfono +34 655 726 899 y correo hola@wuayak.com iguales a los del pie, nombre «WUAYAK Startup Studio», Instagram @holawuayak y 9 preguntas en FAQPage frente a las 9 preguntas visibles en la sección de preguntas frecuentes. No hay contradicciones con la página.

*Evidencia:*
- Tipos: WebSite, ProfessionalService, FAQPage (3 bloques, 0 inválidos)
- telephone «+34 655 726 899» y email «hola@wuayak.com» = pie de página en texto.md
- FAQPage con 9 preguntas; texto.md muestra 9 preguntas numeradas 01–09
- address «Valladolid, ES»; el pie dice «Valladolid, España»
- El schema está en el HTML crudo (estaEnHtmlCrudo = true)

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae 1,435 de 1,446 palabras del render (99%), muy por encima del 80% que pide la escala. El H1 («Convierte tu idea en un negocio real…»), los H2 y H3 de servicios y las primeras palabras de la página ya están en el HTML crudo, así que un bot que no ejecuta JavaScript ve la oferta completa. La página no publica precios (las FAQ dicen que no hay tarifa única), por lo que no falta nada de ese tipo.

*Evidencia:*
- 1435 de 1446 palabras en el HTML crudo (proporción 0.99)
- H1 presente en HTML inicial; H2: «¿Qué es WUAYAK Startup Studio?», «¿Qué servicios ofrecemos…?»
- primerasPalabrasCrudo: «Saltar al contenido», «WUAYAK · VALLADOLID», «Convierte tu idea en un negocio real…»

#### AEO 6 · Acceso para bots de IA: 0/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt bloquea con «Disallow: /» a tres de los cuatro bots de la rúbrica: GPTBot, ClaudeBot y Google-Extended. Solo PerplexityBot está permitido. Por la regla de esta auditoría, el bloqueo cuenta aunque parezca intencional. El archivo tiene el formato típico de un robots.txt administrado por una plataforma (líneas «Content-Signal: search=yes, ai-input=yes, ai-train=no», como el robots.txt administrado de Cloudflare); no puedo confirmar quién lo genera, pero el patrón sugiere que no se escribió a mano. Matiz: los bots de búsqueda y consulta de usuario (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, Perplexity-User) sí están permitidos, y el bloqueo apunta a los rastreadores de entrenamiento (también Applebot-Extended, meta-externalagent, Amazonbot y Bytespider). Existe llms.txt en https://wuayak.es/llms.txt (bonus informativo, no suma puntaje).

*Evidencia:*
- User-agent: GPTBot → Disallow: /
- User-agent: ClaudeBot → Disallow: /
- User-agent: Google-Extended → Disallow: /
- User-agent: PerplexityBot → Content-Signal: search=yes, ai-input=yes, ai-train=no; Allow: /
- Content-Signal: ai-train=no en todos los bloques permitidos
- llms.txt existe: «# WUAYAK Startup Studio»

*Cómo mejorarlo:*
- Quita los bloques «User-agent: GPTBot», «User-agent: ClaudeBot» y «User-agent: Google-Extended» con «Disallow: /» (o cámbialos a «Allow: /») si quieres que cuenten como accesibles para esta rúbrica.
- Si el robots.txt lo administra la plataforma (parece Cloudflare/Content-Signal), desactiva el bloqueo de rastreadores de IA o el robots.txt administrado en su panel; de lo contrario tus cambios manuales se sobrescribirán.
- Si decides mantener el bloqueo para evitar entrenamiento, ten presente que es una decisión de negocio que baja este criterio a 0 y que ChatGPT y Claude solo podrán citar tu sitio mediante sus bots de búsqueda y de usuario.

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

El formato es fácil de extraer: promedio de 22 palabras por párrafo y ninguno largo, 17 elementos de lista, y cada sección trata un solo tema (qué es, servicios, proceso en 4 pasos «01/ … 04/», proyectos, equipo, FAQ). Los servicios y proyectos van como bloques H3 con una descripción de 1–2 frases. No hay tablas ni listas numeradas con etiqueta ol, pero los pasos están numerados en el texto. Detalle menor: varios H2 salen con las palabras pegadas en el texto extraído («ofrecemospara», «startuppaso», «detrásde», «quedaalguna», «próximopaso»), y si el salto de línea es solo visual, un bot podría leerlos así.

*Evidencia:*
- 41 párrafos, promedio 22 palabras, 0 párrafos largos, 17 ítems de lista
- Proceso en pasos: «01/ Diagnóstico», «02/ Validación», «03/ Construcción», «04/ Crecimiento»
- Sección única por tema: servicios con 6 bloques H3 de 1–2 frases cada uno
- Texto pegado en encabezados: «¿Qué servicios ofrecemospara tu proyecto?»

#### AEO 8 · Identidad clara y consistente: 2/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre «WUAYAK Startup Studio» es idéntico en title, og:title, logo/encabezado, pie (© 2026 WUAYAK Startup Studio) y en los dos nodos de schema (WebSite y ProfessionalService). Teléfono (+34 655 726 899), correo (hola@wuayak.com) y ubicación (Valladolid, España en el pie; «Valladolid, ES» en el schema) coinciden entre página y schema, y la descripción del schema repite la de la meta description. Enlaza el Instagram oficial (instagram.com/holawuayak) en el pie y lo reafirma en sameAs; la ubicación es solo de ciudad, aceptable para un estudio que trabaja también en remoto.

*Evidencia:*
- Nombre: title y og:title «WUAYAK Startup Studio | MVP y validación en Valladolid»; schema name «WUAYAK Startup Studio» (x2); pie «© 2026 WUAYAK Startup Studio»
- Teléfono en pie «+34 655 726 899» = schema telephone «+34 655 726 899» (el enlace tel/wa.me usa +34655726899, mismo número)
- Correo en pie y política de privacidad «hola@wuayak.com» = schema email «hola@wuayak.com»
- Ubicación: pie «Valladolid, España» y schema address «Valladolid, ES»; no hay calle ni código postal, ni mapa
- Redes: pie «Instagram @holawuayak» → https://instagram.com/holawuayak; sameAs del ProfessionalService lo incluye; también hay enlace de WhatsApp (wa.me/34655726899)
- Detalles menores: no existe og:site_name; el sameAs del nodo WebSite está vacío; el correo usa wuayak.com mientras el sitio es wuayak.es; solo hay un perfil social (sin LinkedIn ni otras redes)

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Hay ejemplos concretos y nombrados: siete proyectos del estudio (Pinturasvalladolid.es, FiAxpay, ManoPedia.org, KolaboratyVa…) con su fase y objetivo, una metodología en 4 etapas, entregables en el FAQ («entrevistas, prototipos y pruebas de demanda») y datos de contacto reales (Valladolid, +34 655 726 899). Pero no hay precios, plazos, cifras de resultados, número de proyectos o clientes, ni casos con métricas: los 24 «números» detectados son sobre todo numeración de pasos. Abundan las frases genéricas y promesas sin respaldo: «empieza a ganar clientes desde el primer día», «Una hoja de ruta clara para avanzar», «con evidencias, no con suposiciones» (repetida varias veces). Sobre el precio, el sitio dice «No inventamos precios cerrados».

*Evidencia:*
- Ejemplos reales: «Pinturasvalladolid.es», «FiAxpay», «ManoPedia.org», «KolaboratyVa»
- Promesa sin dato: «Día 1 Empiezas a ganar clientes»
- Sin cifras: «No hay una tarifa única… No inventamos precios cerrados.»
- Frases genéricas: «Tecnología útil, diseñada para tu negocio», «Una hoja de ruta clara para avanzar»

*Cómo mejorarlo:*
- Añade plazos y alcance reales a las etapas, por ejemplo: «Diagnóstico: 1 semana · Validación: 2–4 semanas · MVP: 6–8 semanas» (usa los tiempos verdaderos del estudio).
- Da una referencia de inversión aunque sea un rango, por ejemplo: «Un MVP parte desde X € y el diagnóstico inicial cuesta Y €», en lugar de «No hay una tarifa única».
- Agrega al menos un resultado medible por proyecto, por ejemplo en Pinturasvalladolid.es: «X solicitudes de presupuesto en los primeros 60 días», y sustituye «empieza a ganar clientes desde el primer día» por un dato verificable o quítalo.

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Solo hay dos señales claras: una fecha de actualización visible («Última actualización del contenido: noviembre 2026» y «Actualizado en noviembre 2026» en el pie) y secciones «Sobre WUAYAK» / «¿Quién está detrás de WUAYAK?». Pero esta última no nombra a ninguna persona, y no hay testimonios, reseñas ni fuentes externas con enlace (citas: 0, fuentesExternas: 0). Con 2 de 4 señales y la de equipo débil, no llega a 2.

*Evidencia:*
- Equipo/autor: el H2 «¿Quién está detrás de WUAYAK?» solo habla de la metodología («Nos implicamos en tu proyecto con una mirada práctica»), sin nombres, cargos ni fotos; mencionaEquipo: false
- El «por WhatsApp Personas» que detectó el script como autor es un falso positivo: viene del texto «Hablemos por WhatsApp Personas hablando con personas», no de un autor
- Fecha: «Última actualización del contenido: noviembre 2026» y pie «Actualizado en noviembre 2026» (reciente respecto a hoy, 15-nov-2026); no hay <time>, article:modified_time ni dateModified en el schema
- Acerca de: secciones «SOBRE WUAYAK / ¿Qué es WUAYAK Startup Studio?» y «03 / EL ESTUDIO»; no hay enlace a una página «Sobre nosotros» dedicada (enlacesAcerca: [])
- Testimonios y fuentes: testimonios.citas = 0, schemaReview = false, fuentesExternas = 0; los proyectos de «Ideas que estamos convirtiendo» (Pinturasvalladolid.es, FiAxpay, ManoPedia.org…) se nombran sin enlace ni resultados verificables
- Las imágenes del equipo («Fundadores colaborando con portátiles…») no identifican a nadie; hay además un aviso de plantilla «Creado con Hostinger. Personaliza esta plantilla con IA Builder.» que resta profesionalismo

*Cómo mejorarlo:*
- Presenta al equipo en la sección «¿Quién está detrás de WUAYAK?» con nombre, cargo, foto real, una línea de experiencia y enlace a LinkedIn de cada fundador; añade un nodo Person (founder/employee) en el schema.
- Agrega prueba social verificable: 2 o 3 testimonios con nombre, empresa y foto, o casos con resultado y enlace a los proyectos reales (por ejemplo, enlazar pinturasvalladolid.es y manopedia.org con cifras como visitas o leads obtenidos).
- Refuerza la fecha de actualización con un <time datetime="2026-11-15"> y la propiedad dateModified en el JSON-LD, y quita el aviso de plantilla de Hostinger de la parte superior.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 6 · Acceso para bots de IA** (0/2): Quita los bloques «User-agent: GPTBot», «User-agent: ClaudeBot» y «User-agent: Google-Extended» con «Disallow: /» (o cámbialos a «Allow: /») si quieres que cuenten como accesibles para esta rúbrica.
2. **SEO 4 · Tema claro y contenido suficiente** (1/2): Reescribe el H1 para que coincida con el título, por ejemplo: «WUAYAK, startup studio en Valladolid: validamos tu idea y construimos tu MVP».
3. **SEO 7 · Imágenes** (1/2): Sirve la foto principal del coworking con srcset y tamaños acordes al móvil (por ejemplo 400 px y 800 px de ancho) en lugar de un solo ?width=768; Lighthouse estima 17 KB de ahorro.
4. **SEO 8 · Velocidad** (1/2): Elimina el bloqueo del render: carga las fuentes de Google Fonts con preconnect y font-display: swap (o alójalas localmente, solo con los pesos que usas de Manrope y Roboto Slab) y pon en línea el CSS crítico de index-BQ_Rxob2.css.
5. **SEO 9 · Móvil** (1/2): Quita la barra fija «Creado con Hostinger… Usar plantilla» antes de publicar el sitio; hoy tapa parte de la pantalla en móvil y distrae de tu llamada a la acción.
6. **SEO 10 · Enlaces y URLs** (1/2): Convierte los tres elementos del menú en enlaces reales a anclas de la misma página, por ejemplo <a href="#que-hacemos">Qué hacemos</a>, <a href="#como-trabajamos">Cómo trabajamos</a> y <a href="#el-estudio">El estudio</a>, con el id correspondiente en cada sección.
7. **AEO 1 · Respuesta directa arriba** (1/2): Sustituye el párrafo bajo el H1 por la definición: «WUAYAK es un startup studio de Valladolid que ayuda a emprendedores, startups, pymes e inversores a validar ideas, construir MVPs y llevarlos al mercado, con desarrollo digital, IA y marketing.» (≈35 palabras).
8. **AEO 9 · Datos concretos** (1/2): Añade plazos y alcance reales a las etapas, por ejemplo: «Diagnóstico: 1 semana · Validación: 2–4 semanas · MVP: 6–8 semanas» (usa los tiempos verdaderos del estudio).
9. **AEO 10 · Señales de confianza** (1/2): Presenta al equipo en la sección «¿Quién está detrás de WUAYAK?» con nombre, cargo, foto real, una línea de experiencia y enlace a LinkedIn de cada fundador; añade un nodo Person (founder/employee) en el schema.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
