# Calificación SEO + AEO: https://dralmeidacirplas.com/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 93.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **15** | 20 | 75% |
| AEO | **12** | 20 | 60% |
| **Total** | **27** | 40 | 68% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente (ajustó al script) |
| 2 | Descripción y vista al compartir | ■■ 2/2 | Script | agente |
| 3 | Estructura de encabezados | ■□ 1/2 | Script | agente (ajustó al script) |
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
| 4 | Datos estructurados | ■■ 2/2 | Script | agente (ajustó al script) |
| 5 | Contenido legible sin JavaScript | ■■ 2/2 | Script: compara el HTML crudo con la página ya cargada | agente |
| 6 | Acceso para bots de IA | □□ 0/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■■ 2/2 | Agente + script | agente |
| 9 | Datos concretos | ■□ 1/2 | Agente | agente |
| 10 | Señales de confianza | ■■ 2/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 63 caracteres que dice de qué trata la página (especialidad y ciudad) e incluye el nombre del médico como marca: «Cirujano plástico en Quito, La Pradera | Dr. Roberto Almeida V.». No es genérico y coincide con el tema real del sitio (cirugía plástica en Quito).

*El script dio 1/2; el agente lo ajustó a 2/2. El script dio 1 porque el check incluyeTemaOMarca comparó el título contra el H1 («Transformación y belleza», un eslogan) y contra el dominio pegado («dralmeidacirplas»). Es un falso negativo: el título sí incluye el tema y el nombre del médico. Se sube a 2. El largo de 63 queda apenas sobre el 50–60 aproximado, sin afectar el resultado.*

*Evidencia:*
- title: «Cirujano plástico en Quito, La Pradera | Dr. Roberto Almeida V.»
- 1 etiqueta <title>, 63 caracteres (el script acepta 45–65)
- Tema (cirujano plástico, Quito) y marca/nombre (Dr. Roberto Almeida) presentes

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 150 caracteres (dentro de 140–160), es concreta y da datos útiles para decidir (especialidad, formación en París, precio de la consulta USD 60, horario y teléfono). Están og:title, og:description y og:image, esta última con URL absoluta (https://dralmeidacirplas.com/img/consultorio-hero-1140.webp), y twitter:card es summary_large_image.

*Evidencia:*
- meta description (150 car.): «Cirugía estética y reconstructiva en Quito con el Dr. Roberto Almeida, especializado en París. Consulta USD 60, de lunes a viernes. Tel. 098 516 9268.»
- og:title y og:description presentes y coherentes con el título y la descripción
- og:image absoluta: https://dralmeidacirplas.com/img/consultorio-hero-1140.webp
- twitterCard: summary_large_image

#### SEO 3 · Estructura de encabezados: 1/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

La jerarquía es técnicamente limpia: 1 H1, 4 H2 y 9 H3 sin saltos de nivel. Pero el H1 «Transformación y belleza» es un eslogan que no dice de qué trata la página; el tema («Cirugía plástica estética y reconstructiva en Quito») queda en un párrafo debajo, fuera del H1. Los H2 también son frases abstractas sin tema («Opciones para conversar, no respuestas prefabricadas», «Una práctica guiada por la seguridad y la ética»), y el banner de cookies aparece como un H3 más en la estructura.

*El script dio 2/2; el agente lo ajustó a 1/2. El script dio 2 por ser un solo H1 con texto y sin saltos de nivel, pero no juzga lo semántico. El H1 es un eslogan sin el tema y varios H2 son abstractos; por eso se baja a 1.*

*Evidencia:*
- H1: «Transformación y belleza» (1 solo H1)
- Resumen: h1=1, h2=4, h3=9, sin saltos
- H2: «Opciones para conversar, no respuestas prefabricadas», «Una práctica guiada por la seguridad y la ética», «Un proceso claro, paso a paso»
- H3 final: «Cookies» (banner de cookies, no es contenido de la página)
- El texto con el tema está en un párrafo: «Cirugía plástica estética y reconstructiva en Quito»

*Cómo mejorarlo:*
- Cambia el H1 para que diga el tema, por ejemplo: «Cirugía plástica estética y reconstructiva en Quito», y deja «Transformación y belleza» como texto de apoyo (párrafo o eyebrow).
- Reescribe los H2 con palabras clave que describan la sección, por ejemplo: «Procedimientos de cirugía plástica», «Formación y ética médica del Dr. Almeida» y «Cómo es la consulta de valoración».
- Cambia el título «Cookies» del banner de H3 a un elemento no encabezado (por ejemplo, <div role="dialog" aria-label="Cookies">) para que no se mezcle con la estructura del contenido.

#### SEO 4 · Tema claro y contenido suficiente: 1/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (cirugía plástica en Quito) está claro en el título («Cirujano plástico en Quito, La Pradera | Dr. Roberto Almeida V.») y en el subtítulo, pero el H1 es «Transformación y belleza», que no nombra la especialidad ni la ciudad. El primer elemento antes del H1 es la descripción de una foto, no un párrafo que presente el tema. El contenido principal ronda 330-395 palabras, suficiente y sin relleno repetido.

*Evidencia:*
- Título: «Cirujano plástico en Quito, La Pradera | Dr. Roberto Almeida V.»
- H1: «Transformación y belleza»
- Subtítulo bajo el H1: «Cirugía plástica estética y reconstructiva en Quito»
- Script: 395 palabras en contenido principal (umbral 300)

*Cómo mejorarlo:*
- Cambia el H1 a «Cirujano plástico en Quito: cirugía estética y reconstructiva» y deja «Transformación y belleza» como lema secundario.
- Añade un primer párrafo de texto bajo el H1, por ejemplo: «El Dr. Roberto Almeida es cirujano plástico en Quito y realiza cirugía estética y reconstructiva, con valoración individual previa a cada procedimiento.»

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página es indexable: HTTP 200 sin redirecciones, sin meta robots ni X-Robots-Tag (sin noindex), canonical que apunta a sí misma, HTTPS y lang="es", que coincide con el idioma del contenido (español).

*Evidencia:*
- statusHttp 200, cadena de redirecciones: solo https://dralmeidacirplas.com/
- metaRobots: null; xRobotsTag: null
- canonical: https://dralmeidacirplas.com/ (misma URL)
- <html lang="es"> y contenido en español

#### SEO 6 · robots.txt y sitemap.xml: 2/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

Existen robots.txt (200) y sitemap.xml (200, válido). El robots.txt permite todo para * y solo bloquea /api/, y declara el sitemap. El sitemap lista 12 URLs reales del mismo dominio y protocolo (https://dralmeidacirplas.com/...), incluida la home. Los Disallow: / aplican solo a rastreadores de entrenamiento de IA (GPTBot, ClaudeBot, Google-Extended, etc.) por decisión explícita (ai-train=no) y no afectan a Googlebot ni a Bingbot.

*Evidencia:*
- robots.txt: User-agent: * con Allow: / y Disallow: /api/; Sitemap: https://dralmeidacirplas.com/sitemap.xml
- sitemap.xml: 12 URLs, incluye la página; ejemplos: /dr-almeida, /procedimientos, /procedimientos/rinoplastia
- Disallow: / solo para GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot y Bytespider

#### SEO 7 · Imágenes: 1/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

Las 7 imágenes con contenido tienen alt descriptivo y específico (por ejemplo «Equipo quirúrgico con batas estériles en un quirófano moderno») y ninguna pasa de 300 KB (total 122 KB). Lo que lo deja en 1: Lighthouse marca uses-responsive-images (ahorro estimado de 67 KiB) y el logo del encabezado, alojado en otro dominio con alt vacío, se ve como imagen rota en la captura móvil.

*Evidencia:*
- 7 de 7 imágenes con contenido con alt válido; altVacioEnImagenesGrandes: []
- Peso total de imágenes: 122 KB; imagenesPesadas: []
- uses-responsive-images (score 0.5): retrato-896.webp ahorraría 41.6 KB y la foto de Pexels 27.1 KB
- Logo cargado desde cirugiaplasticalmeida.com/wp-content/uploads/2026/01/cropped-cropped-2026_logo_RA_1.png con alt vacío; en movil-arriba.png aparece como ícono de imagen rota junto a «Dr. Roberto Almeida»
- Las fotos de Pexels (retrato de mujer, piel, cirujanos) son genéricas de banco de imágenes, aunque sus alt describen bien lo que se ve

*Cómo mejorarlo:*
- Sirve retrato-896.webp y la foto de consultorio de Pexels en el tamaño en que se muestran (por ejemplo, anchos de 390–600 px) o añade srcset/sizes; Lighthouse estima un ahorro de unos 67 KiB.
- Aloja el logo en tu propio dominio (por ejemplo /img/logo.webp) en vez de enlazar al sitio cirugiaplasticalmeida.com, y revisa por qué se ve roto en el encabezado.
- Pon al logo un alt con el nombre de marca, por ejemplo «Dr. Roberto Almeida, cirujano plástico», o déjalo vacío solo si el texto al lado ya lo nombra y la imagen carga bien.

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Confirmo el puntaje del script: cumple 2 de 3 umbrales. Rendimiento 93 (≥ 80) y CLS 0.000 (< 0.1) pasan, pero el LCP es de 2.71 s, arriba del límite de 2.5 s. Es una sola medición de Lighthouse móvil y puede variar entre corridas y equipos; como el LCP está solo 0.21 s sobre el umbral, otra corrida podría quedar de cualquier lado.

*Evidencia:*
- Rendimiento 93, LCP 2,707 ms, CLS 0, TBT 0 ms, FCP 2,491 ms
- Servidor rápido: el documento raíz tardó 60 ms
- render-blocking-resources (score 0): ahorro estimado de 340 ms por fonts.googleapis.com/css2 (Cormorant Garamond e Inter) y assets/index-C3SFu9Id.css (18 KB)
- unused-javascript: 22 KiB sin usar en assets/jsx-runtime-98TrhzpB.js
- El LCP casi coincide con el FCP, así que el retraso parece venir del bloqueo de render y no del peso de la imagen principal (consultorio-hero-1140.webp pesa ~39.8 KB)

*Cómo mejorarlo:*
- Quita el bloqueo de render: carga las fuentes con preconnect a fonts.gstatic.com o alójalas en tu dominio, reduce los pesos de Inter y Cormorant a los que uses de verdad, e inyecta el CSS crítico en línea para recortar los ~340 ms que estima Lighthouse.
- Precarga la imagen principal con <link rel="preload" as="image" fetchpriority="high"> para consultorio-hero-1140.webp y evita que cargue con lazy.
- Divide el JavaScript para no enviar 22 KiB sin usar de jsx-runtime y reducir entry.client (58 KB) en la carga inicial.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Confirmo el puntaje del script. Tiene meta viewport correcta, sin scroll horizontal y la captura se ve ordenada (hamburguesa visible, titular y botón «Agenda tu cita» legibles sobre la foto). Pero 13% del texto mide menos de 12 px, 9 de 37 enlaces miden menos de 24 px de alto, y en la primera pantalla el banner de cookies tapa cerca de un tercio del hero.

*Evidencia:*
- viewport=width=device-width, initial-scale=1; desbordeHorizontalPx: 0; Lighthouse viewport: score 1
- movil-arriba.png: botón de menú (hamburguesa) visible arriba a la derecha; titular «Transformación y belleza» y botón «Agenda tu cita» se leen bien
- movil-arriba.png: el banner «Cookies» (~265 px de 844) cubre la parte baja del hero; sus tres botones son grandes, pero el botón «Agenda tu cita» queda pegado al borde del banner
- 374 de 2,938 caracteres (12.7%) menores a 12 px; las etiquetas pequeñas en mayúsculas («CIRUJANO PLÁSTICO», «CIRUGÍA PLÁSTICA · QUITO») se ven diminutas
- 9 de 37 objetivos táctiles < 24 px: «Dr. Almeida» 65×20, «Procedimientos» 88×20, «FAQ» 23×20, «Contacto» 52×20, «UBICACIÓN Y TELÉFONOS» 188×23
- En la captura el logo del encabezado se ve como imagen rota (círculo con ícono de imagen)

*Cómo mejorarlo:*
- Aumenta el área táctil de los enlaces del pie y de «UBICACIÓN Y TELÉFONOS» a al menos 44 px de alto (padding vertical o min-height) y sepáralos entre sí.
- Sube las etiquetas pequeñas (subtítulo «CIRUJANO PLÁSTICO», etiquetas de sección, texto del pie) a 12 px o más, idealmente 14 px.
- Reduce el banner de cookies a una franja compacta (o con botones en una sola fila) para que no tape el hero ni el botón «Agenda tu cita».

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 7 enlaces internos funcionales (Dr. Almeida, Procedimientos, Testimonios, FAQ, Contacto, Agenda tu cita). Se revisaron los 11 enlaces internos únicos (cobertura completa): 0 rotos y 0 sin verificar. No hay anclas genéricas ni sin texto, y las 12 URLs son legibles (por ejemplo /procedimientos/mamoplastia-de-aumento).

*Evidencia:*
- Menú: 7 enlaces, todos con destino a páginas del mismo dominio
- 0 rotos de 11 internos revisados; sinVerificar vacío
- 0 enlaces genéricos tipo «clic aquí»/«leer más»; Lighthouse «Links have descriptive text» = 1
- URLs: /dr-almeida, /preguntas-frecuentes, /procedimientos/rinoplastia (0 de 12 poco legibles)

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Arriba solo hay el lema «Transformación y belleza» y la línea «Cirugía plástica estética y reconstructiva en Quito», que dice qué se ofrece y dónde. No hay una frase que diga quién es el médico ni para quién es el servicio. La presentación del Dr. Almeida llega más abajo, en la sección «Una práctica guiada por la seguridad y la ética». La primera frase real de prosa («Cada indicación nace de una valoración médica individual») habla de método, no de qué es el sitio.

*Evidencia:*
- «Transformación y belleza»
- «Cirugía plástica estética y reconstructiva en Quito»
- Primera prosa: «Cada indicación nace de una valoración médica individual.»
- «Médico cirujano plástico formado en la Université René Descartes (París V)» aparece después de la lista de procedimientos

*Cómo mejorarlo:*
- Añade bajo el H1 una respuesta de 40-60 palabras, por ejemplo: «El Dr. Roberto Almeida es cirujano plástico con formación en París V (promoción 1995) y atiende en Quito a pacientes adultos que buscan cirugía estética (rinoplastia, mamoplastia, lipoescultura) o reconstructiva. La consulta de valoración cuesta USD 60 y se agenda de lunes a viernes.»
- Define a quién atiende (por ejemplo, adultos que buscan cirugía estética o reconstrucción tras una malformación o lesión) para cubrir el «para quién».

#### AEO 2 · Encabezados en forma de pregunta: 0/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

Ninguno de los 4 H2 ni de los H3 es una pregunta. Los H2 son «Opciones para conversar, no respuestas prefabricadas», «Una práctica guiada por la seguridad y la ética», «Un proceso claro, paso a paso» y «Agenda una valoración con el Dr. Almeida».

*Evidencia:*
- H2: «Un proceso claro, paso a paso»
- H2: «Una práctica guiada por la seguridad y la ética»
- 0 de 4 H2 en forma de pregunta

*Cómo mejorarlo:*
- Cambia «Un proceso claro, paso a paso» por «¿Cómo es la primera consulta con el Dr. Almeida?» y responde en la primera frase: «Empieza con una valoración clínica y una revisión de tus expectativas; luego se explican opciones, riesgos y consentimiento informado.»
- Cambia «Agenda una valoración con el Dr. Almeida» por «¿Cuánto cuesta la consulta y dónde se atiende?» con la respuesta debajo: «La consulta de valoración cuesta USD 60; se atiende de lunes a viernes de 9:00 a 18:00 en el Edificio Medical, 7.º piso, Quito.»
- Convierte el H2 de procedimientos en «¿Qué procedimientos realiza el Dr. Almeida?» y responde con una frase que los enumere.

#### AEO 3 · Preguntas frecuentes: 0/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

La página no tiene una sección de preguntas frecuentes visible. El menú enlaza a «FAQ», pero el contenido principal no muestra preguntas ni respuestas, y el script no encontró acordeones de FAQ ni schema FAQPage.

*Evidencia:*
- El menú incluye «FAQ», pero no hay contenido de FAQ en la región main
- Script: encabezadoFaq null, seccionFaq null, schemaFaq false

*Cómo mejorarlo:*
- Agrega una sección «Preguntas frecuentes» visible en esta página, con al menos 4 preguntas y respuestas de 1-3 frases, por ejemplo: «¿Cuánto cuesta la consulta de valoración? USD 60.» y «¿Cuál es el horario de atención? De lunes a viernes, de 9:00 a 18:00.»
- Incluye también «¿Dónde está el consultorio?» (Alemania N29-60 y Av. Eloy Alfaro, Edificio Medical, 7.º piso, Quito) y «¿La lipoescultura sirve para bajar de peso?» (No, es un procedimiento de contorno corporal).

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 2 bloques JSON-LD válidos con @context schema.org, presentes en el HTML inicial: un WebSite y un Physician. Physician es el tipo adecuado para un cirujano plástico (es subtipo de MedicalBusiness/LocalBusiness) y sus datos coinciden con la página: teléfono +593985169268 (= 098 516 9268 del footer), correo ra8308@gmail.com, dirección Alemania N29-60 y Av. Eloy Alfaro, Edificio Medical, 7.º piso, Quito, C.P. 170519, y sameAs de Instagram y Facebook que sí aparecen en el pie. Nada contradice lo visible.

*El script dio 1/2; el agente lo ajustó a 2/2. El script dio 1 por dos checks que fallaron por limitación del propio script: (1) tipoRelevante marcó Physician como "auxiliar", pero es el tipo más específico y correcto para un médico (hereda de LocalBusiness); (2) coincideConLaPagina comparó el name completo de forma literal y no lo encontró, aunque la página muestra el mismo nombre del doctor y todos los datos de contacto coinciden. Con eso el schema cumple el criterio de 2. Reservas menores no verificables con la evidencia: si faltan openingHoursSpecification, image/logo y geo en el Physician, conviene agregarlos; no bajan el puntaje porque el resumen del script no los extrae y no se contradice nada de la página.*

*Evidencia:*
- Tipos: WebSite + Physician; 2 bloques, 0 inválidos; en HTML crudo
- Physician.telephone "+593985169268" = footer "+593 98 516 9268"
- Physician.address coincide con "Alemania N29-60 y Av. Eloy Alfaro, Edificio Medical, 7.º piso, Quito" y C.P. 170519 del footer
- Physician.name "Dr. Roberto Almeida V. Cirujano Plástico, Reconstructivo y Estético" vs página "Dr. Roberto Almeida · CIRUJANO PLÁSTICO": es la misma persona, solo difiere el texto literal
- Del resumen del script no se pueden ver horarios, logo/imagen ni geo dentro del schema (la página muestra "Lunes a viernes, 9:00 a 18:00")

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML inicial trae 365 de 395 palabras del contenido renderizado (92%, sobre el umbral de 80%). El H1 y los H2/H3 clave ya vienen en el HTML crudo, incluidos los cinco procedimientos (Rinoplastia, Mamoplastia de aumento y reducción, Lipoescultura, Lipoabdominoplastia). Un bot sin JavaScript lee prácticamente toda la página.

*Evidencia:*
- 365 de 395 palabras en el HTML crudo (92%)
- H1 crudo: "Transformación y belleza"
- H2 crudos: "Opciones para conversar, no respuestas prefabricadas" y "Una práctica guiada por la seguridad y la ética"
- Primeras palabras del crudo: "Saltar al contenido", alt de la foto del doctor, "CIRUGÍA PLÁSTICA · QUITO"

#### AEO 6 · Acceso para bots de IA: 0/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt bloquea con "Disallow: /" a tres de los cuatro bots de la rúbrica: GPTBot, ClaudeBot y Google-Extended. Solo PerplexityBot está permitido (únicamente "Disallow: /api/"). Aunque el bloqueo parezca intencional (permite los bots de búsqueda y de usuario, como OAI-SearchBot, ChatGPT-User y Claude-SearchBot, y bloquea los de entrenamiento), la rúbrica lo cuenta como bloqueado y no se sube el puntaje por eso. El archivo parece administrado por una plataforma o generado con una plantilla: cada bloque permitido lleva líneas "Content-Signal: search=yes, ai-input=yes, ai-train=no", el formato que popularizó el robots.txt administrado de Cloudflare. La evidencia no confirma qué plataforma lo genera. Existe llms.txt (https://dralmeidacirplas.com/llms.txt), anotado solo como bonus informativo, sin efecto en el puntaje.

*Evidencia:*
- robots.txt: "User-agent: GPTBot" + "Disallow: /"
- robots.txt: "User-agent: ClaudeBot" + "Disallow: /"
- robots.txt: "User-agent: Google-Extended" + "Disallow: /"
- PerplexityBot: "Allow: /" y "Disallow: /api/" (permitido)
- Cada bloque permitido lleva "Content-Signal: search=yes, ai-input=yes, ai-train=no"; también bloquea Applebot-Extended, meta-externalagent, Amazonbot y Bytespider
- llms.txt existe (bonus, no suma)

*Cómo mejorarlo:*
- Cambia las reglas de GPTBot, ClaudeBot y Google-Extended de "Disallow: /" a "Allow: /" con "Disallow: /api/", igual que ya tienes para PerplexityBot, para que los asistentes de IA puedan leer el sitio. Si el archivo lo administra una plataforma (por ejemplo, un panel de bots de IA), el cambio se hace en ese panel; si editas el archivo a mano, puede sobrescribirse.
- Si quieres seguir expresando que no autorizas el entrenamiento, mantén "ai-train=no" en los Content-Signal; es una preferencia declarada y no bloquea el acceso, a diferencia del Disallow.

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

Los párrafos son cortos (promedio 19 palabras, ninguno largo) y cada sección trata un solo tema. Los procedimientos van como tarjetas con H3, el proceso se presenta en 3 pasos numerados y los datos del doctor en pares etiqueta-valor. Un detalle menor es que la línea de cirugía reconstructiva queda como frase corrida bajo Lipoabdominoplastia, sin lista ni encabezado propio.

*Evidencia:*
- 16 párrafos, promedio 19 palabras, 0 párrafos largos
- Pasos 1, 2, 3: «Evaluación», «Plan personalizado», «Seguimiento»
- Pares «Formación / Promoción / Ámbito / Sede»
- «Cirugía reconstructiva: labio y paladar fisurados, cirugía reconstructiva en general, tratamiento quirúrgico de cicatrices…»

#### AEO 8 · Identidad clara y consistente: 2/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre es el mismo en title, encabezado, pie y schema ("Dr. Roberto Almeida" / "Dr. Roberto Almeida V."), una variación de formato normal. Teléfono (+593 98 516 9268 = +593985169268), correo (ra8308@gmail.com) y dirección (Alemania N29-60 y Av. Eloy Alfaro, Edificio Medical, 7.º piso, Quito, C.P. 170519) coinciden entre página y schema Physician. El pie enlaza a Instagram y Facebook de la marca y el schema los reafirma en sameAs. Detalles menores que no llegan a contradicción: falta og:site_name, el nodo WebSite tiene sameAs vacío y el teléfono fijo (02) 252-0588 está en la página pero no en el schema.

*Evidencia:*
- title: "Cirujano plástico en Quito, La Pradera | Dr. Roberto Almeida V."; pie: "© 2026 Dr. Roberto Almeida | Cirujano Plástico"
- schema Physician: name "Dr. Roberto Almeida V. Cirujano Plástico, Reconstructivo y Estético", telephone "+593985169268", email "ra8308@gmail.com"
- Pie: "+593 98 516 9268 · (02) 252-0588 · ra8308@gmail.com"; dirección idéntica a la del schema (más sector La Pradera y C.P. 170519)
- Redes en el pie: instagram.com/dr.roberto_almeida/ y facebook.com/docrobertoalmeida/ (perfiles específicos), ambos en sameAs del Physician
- meta description y descripción del schema coinciden en el fondo: cirugía plástica, reconstructiva y estética en Quito
- og:site_name ausente; sameAs del nodo WebSite vacío; el logo se sirve desde otro dominio (cirugiaplasticalmeida.com)

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Hay algunos datos verificables: horario «Lunes a viernes, 9:00 a 18:00», dirección completa, «promoción 1995» y la consulta a «USD 60», que solo aparece en el pie de página. Las descripciones de los procedimientos no traen cifras (duración, recuperación, anestesia, rango de precios) ni casos, y varias frases son genéricas («Transformación y belleza», «información clara antes de cada decisión»).

*Evidencia:*
- «Lunes a viernes, 9:00 a 18:00»
- «promoción 1995»
- «Consulta de valoración: USD 60» (solo en el pie)
- Genérico: «Una práctica guiada por la seguridad y la ética»
- Procedimientos sin duración, recuperación ni precio

*Cómo mejorarlo:*
- Lleva «Consulta de valoración: USD 60» al cuerpo de la página, junto al botón «Agenda tu cita».
- Añade por procedimiento un dato verificable, por ejemplo duración aproximada de la cirugía, tiempo típico de recuperación y tipo de anestesia, solo si el doctor puede respaldarlos.
- Agrega años de experiencia y número aproximado de procedimientos realizados, si el doctor puede respaldarlos, para sustituir frases como «una práctica guiada por la seguridad y la ética».

#### AEO 10 · Señales de confianza: 2/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Se ve quién está detrás: el Dr. Roberto Almeida aparece con nombre, dos fotos suyas y una sección "DR. ALMEIDA" que indica su formación (Université René Descartes, París V, promoción 1995), con enlace a /dr-almeida. Esa sección y el enlace "Conoce al Dr. Almeida" cubren "acerca de". La fecha se apoya solo en "© 2026" en el pie, que para un sitio que no es de artículos cuenta como actualización reciente, aunque es una señal débil porque no hay dateModified ni fecha visible. Faltan testimonios y fuentes en la home: hay un enlace "Testimonios" en el menú pero la página no muestra ninguna cita (0 citas, 0 schema Review) ni fuentes externas con enlace, por lo que son 3 de 4 señales y no hay margen si alguna se debilita. El puntaje depende de que el © cuente como fecha.

*Evidencia:*
- Sección "DR. ALMEIDA": "Médico cirujano plástico formado en la Université René Descartes (París V), Francia, promoción 1995" y enlace "Conoce al Dr. Almeida" (/dr-almeida)
- Foto con alt "Dr. Roberto Almeida, cirujano plástico, con uniforme quirúrgico y lupas de aumento en su consultorio de Quito"
- Pie: "© 2026 Dr. Roberto Almeida | Cirujano Plástico"; sin <time>, sin dateModified, sin fecha de actualización
- Testimonios: solo enlace de menú a /testimonios; testimonios.citas = 0, schemaReview = false, fuentesExternas = 0
- No aparece número de registro profesional ni enlace verificable a la formación (el script marcó como enlace "acerca" un falso positivo: el alt de una foto de stock)

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **AEO 2 · Encabezados en forma de pregunta** (0/2): Cambia «Un proceso claro, paso a paso» por «¿Cómo es la primera consulta con el Dr. Almeida?» y responde en la primera frase: «Empieza con una valoración clínica y una revisión de tus expectativas; luego se explican opciones, riesgos y consentimiento informado.»
2. **AEO 3 · Preguntas frecuentes** (0/2): Agrega una sección «Preguntas frecuentes» visible en esta página, con al menos 4 preguntas y respuestas de 1-3 frases, por ejemplo: «¿Cuánto cuesta la consulta de valoración? USD 60.» y «¿Cuál es el horario de atención? De lunes a viernes, de 9:00 a 18:00.»
3. **AEO 6 · Acceso para bots de IA** (0/2): Cambia las reglas de GPTBot, ClaudeBot y Google-Extended de "Disallow: /" a "Allow: /" con "Disallow: /api/", igual que ya tienes para PerplexityBot, para que los asistentes de IA puedan leer el sitio. Si el archivo lo administra una plataforma (por ejemplo, un panel de bots de IA), el cambio se hace en ese panel; si editas el archivo a mano, puede sobrescribirse.
4. **SEO 3 · Estructura de encabezados** (1/2): Cambia el H1 para que diga el tema, por ejemplo: «Cirugía plástica estética y reconstructiva en Quito», y deja «Transformación y belleza» como texto de apoyo (párrafo o eyebrow).
5. **SEO 4 · Tema claro y contenido suficiente** (1/2): Cambia el H1 a «Cirujano plástico en Quito: cirugía estética y reconstructiva» y deja «Transformación y belleza» como lema secundario.
6. **SEO 7 · Imágenes** (1/2): Sirve retrato-896.webp y la foto de consultorio de Pexels en el tamaño en que se muestran (por ejemplo, anchos de 390–600 px) o añade srcset/sizes; Lighthouse estima un ahorro de unos 67 KiB.
7. **SEO 8 · Velocidad** (1/2): Quita el bloqueo de render: carga las fuentes con preconnect a fonts.gstatic.com o alójalas en tu dominio, reduce los pesos de Inter y Cormorant a los que uses de verdad, e inyecta el CSS crítico en línea para recortar los ~340 ms que estima Lighthouse.
8. **SEO 9 · Móvil** (1/2): Aumenta el área táctil de los enlaces del pie y de «UBICACIÓN Y TELÉFONOS» a al menos 44 px de alto (padding vertical o min-height) y sepáralos entre sí.
9. **AEO 1 · Respuesta directa arriba** (1/2): Añade bajo el H1 una respuesta de 40-60 palabras, por ejemplo: «El Dr. Roberto Almeida es cirujano plástico con formación en París V (promoción 1995) y atiende en Quito a pacientes adultos que buscan cirugía estética (rinoplastia, mamoplastia, lipoescultura) o reconstructiva. La consulta de valoración cuesta USD 60 y se agenda de lunes a viernes.»
10. **AEO 9 · Datos concretos** (1/2): Lleva «Consulta de valoración: USD 60» al cuerpo de la página, junto al botón «Agenda tu cita».

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
