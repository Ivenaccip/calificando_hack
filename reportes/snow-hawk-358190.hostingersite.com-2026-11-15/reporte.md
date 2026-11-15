# Calificación SEO + AEO: https://snow-hawk-358190.hostingersite.com/

> Rúbrica: Hackathon Hostinger: rúbrica SEO y AEO. Auditado el 2026-11-15. Lighthouse móvil 12.8.2: rendimiento 86.

## Resultado

| Área | Puntos | Máximo | % |
| --- | ---: | ---: | ---: |
| SEO | **15** | 20 | 75% |
| AEO | **15** | 20 | 75% |
| **Total** | **30** | 40 | 75% |

## Rúbrica SEO: que Google encuentre y entienda la página

| # | Criterio | Puntos | Cómo se revisa | Calificó |
| ---: | --- | :---: | --- | --- |
| 1 | Título de la página | ■■ 2/2 | Script | agente (ajustó al script) |
| 2 | Descripción y vista al compartir | ■■ 2/2 | Script | agente |
| 3 | Estructura de encabezados | ■■ 2/2 | Script | agente |
| 4 | Tema claro y contenido suficiente | ■□ 1/2 | Agente | agente |
| 5 | Indexable | ■■ 2/2 | Script | agente |
| 6 | robots.txt y sitemap.xml | □□ 0/2 | Script | agente |
| 7 | Imágenes | ■■ 2/2 | Script + Lighthouse | agente |
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
| 6 | Acceso para bots de IA | ■■ 2/2 | Script | agente |
| 7 | Formato fácil de extraer | ■■ 2/2 | Agente | agente |
| 8 | Identidad clara y consistente | ■□ 1/2 | Agente + script | agente |
| 9 | Datos concretos | ■□ 1/2 | Agente | agente |
| 10 | Señales de confianza | ■□ 1/2 | Agente | agente |

## Detalle por criterio

### SEO

#### SEO 1 · Título de la página: 2/2
*Vale 2 si:* Hay un <title> único que describe la página e incluye el tema o la marca (50–60 caracteres aprox.)

Hay un solo <title> de 51 caracteres, «MAF Seguros en Veracruz: vida, auto, hogar y ahorro», que incluye la marca (MAF), el tema (seguros), la zona (Veracruz) y las líneas que ofrece. Describe bien esta página. El check fallido del script solo compara contra el H1 (un eslogan) y contra el subdominio de prueba, no contra la marca real.

*El script dio 1/2; el agente lo ajustó a 2/2. El script dio 1 porque «incluyeTemaOMarca» falló al compararlo con el H1 y con el nombre del subdominio (snow-hawk-358190). Semánticamente el título sí incluye marca y tema, y no es genérico, así que corresponde 2.*

*Evidencia:*
- <title>: «MAF Seguros en Veracruz: vida, auto, hogar y ahorro» (1 etiqueta, 51 caracteres)
- La marca «MAF» aparece también en el encabezado de la página y en el JSON-LD Organization
- H1: «Protege lo que más importa.» (eslogan, por eso el script no encontró coincidencia)

#### SEO 2 · Descripción y vista al compartir: 2/2
*Vale 2 si:* Hay meta description de 140–160 caracteres que invita a entrar, más og:title, og:description y og:image

La meta description mide 145 caracteres (dentro de 140–160), explica qué hace MAF y cierra con una llamada a la acción («Escríbenos por WhatsApp»). Están og:title, og:description y og:image, y la imagen es una URL absoluta https. También hay twitter:card summary_large_image.

*Evidencia:*
- meta description (145 car.): «MAF, agencia de seguros en Veracruz: asesoría en vida, auto, hogar, gastos médicos y ahorro. Protege lo que más importa. Escríbenos por WhatsApp.»
- og:image absoluta: https://images.hostinger.com/d9970198-.../a2d17204-...ceff.png
- og:title y og:description presentes; twitterCard: summary_large_image

#### SEO 3 · Estructura de encabezados: 2/2
*Vale 2 si:* Un solo H1 claro, y después H2/H3 en orden lógico, sin saltos

Hay exactamente un H1 y la jerarquía baja sin saltos: 12 H2 y 20 H3, sin H4–H6. Los encabezados se usan como estructura real (secciones de seguros, pasos, preguntas frecuentes agrupadas bajo H2 temáticos) y no aparecen en menú ni pie solo por estilo. El H1 es un eslogan («Protege lo que más importa.») y no nombra «seguros», pero el título, el encabezado «Agencia de seguros» y el texto inmediato dejan claro el tema.

*Evidencia:*
- H1 único: «Protege lo que más importa.»
- Resumen: h1=1, h2=12, h3=20, h4=0; saltos de nivel: ninguno
- H3 de tarjetas («Seguro de vida», «Seguro de automóvil»…) cuelgan de H2 «Tu vida cambia. Tu protección también.»; las preguntas frecuentes cuelgan de H2 «Elegir tu seguro», «Costos y condiciones», «Cómo cotizar»

#### SEO 4 · Tema claro y contenido suficiente: 1/2
*Vale 2 si:* El tema aparece en el título, el H1 y el primer párrafo; hay unas 300 palabras útiles o más, sin relleno

El tema (seguros en Veracruz) está claro en el título «MAF Seguros en Veracruz: vida, auto, hogar y ahorro», pero el H1 «Protege lo que más importa» no nombra ni seguros ni Veracruz, y el primer párrafo de texto («Tu familia. Tu hogar. Tu futuro. En MAF te acompañamos a elegir la protección…») tampoco dice «seguro». El script cuenta 1,085 palabras, pero parte es relleno: «Conoce tus opciones» se repite 7 veces y hay ~10 marcas sin resolver como «[FALTA DATO: dirección]» y «[EDITAR]».

*Evidencia:*
- Título: «MAF Seguros en Veracruz: vida, auto, hogar y ahorro»
- H1: «Protege lo quemás importa.» (sin la palabra seguros; además se extrae sin espacio entre «que» y «más»)
- Primer texto del hero: «En MAF te acompañamos a elegir la protección que necesitas para vivir con más tranquilidad.»
- Marcas de plantilla visibles: «[FALTA DATO: zonas de atención]», «[DATOS DE LICENCIA]», «[EDITAR] Agrega el número de WhatsApp…»
- «Conoce tus opciones» aparece en las 7 tarjetas de producto

*Cómo mejorarlo:*
- Incluye el tema en el H1, por ejemplo: «Seguros de vida, auto y hogar en Veracruz: protege lo que más importa», y corrige el espacio faltante entre «que» y «más» en el marcado.
- Haz que el primer párrafo visible diga qué es el sitio: «MAF es una agencia de seguros en Veracruz que asesora a familias y negocios para contratar seguros de vida, auto, hogar, gastos médicos y ahorro, con asesoría sin compromiso.»
- Elimina o completa todas las marcas «[FALTA DATO]», «[EDITAR]» y «[DATOS DE LICENCIA]», y cambia los siete enlaces «Conoce tus opciones» por textos distintos como «Ver seguro de vida» o «Ver seguro de auto».

#### SEO 5 · Indexable: 2/2
*Vale 2 si:* Sin noindex, con canonical correcto, HTTPS y atributo lang en <html>

La página responde 200 por HTTPS sin redirecciones, no tiene noindex ni en meta robots ni en X-Robots-Tag, el canonical apunta a sí misma y <html lang="es"> coincide con el contenido en español. Ojo: el bloqueo a Googlebot en robots.txt se califica en seo-6, no aquí.

*Evidencia:*
- statusHttp 200, URL final https://snow-hawk-358190.hostingersite.com/ sin redirecciones
- metaRobots: null; xRobotsTag: null
- canonical: https://snow-hawk-358190.hostingersite.com/ (autorreferenciado)
- lang="es"

#### SEO 6 · robots.txt y sitemap.xml: 0/2
*Vale 2 si:* Existen los dos, el sitemap lista las páginas y el robots.txt no bloquea el sitio

El robots.txt existe, pero tiene «User-agent: Googlebot / Disallow: /», es decir, le prohíbe a Google rastrear todo el sitio; solo los demás bots quedan con «Allow: /». Para el buscador principal es equivalente a un bloqueo total. El sitemap.xml sí existe y es válido (12 URLs, mismo dominio y protocolo, incluye la home), pero robots.txt no lo declara con una línea Sitemap.

*Evidencia:*
- robots.txt: «User-agent: Googlebot\nDisallow: /\n\nUser-agent: *\nAllow: /»
- sitemapsDeclarados en robots.txt: ninguno
- sitemap.xml: HTTP 200, 12 URLs; ejemplos: https://snow-hawk-358190.hostingersite.com/seguros/vida, /seguros/automovil, /seguros/hogar

*Cómo mejorarlo:*
- Elimina el bloque «User-agent: Googlebot / Disallow: /» del robots.txt; hoy impide que Google rastree y muestre el sitio.
- Deja el archivo así: «User-agent: *\nAllow: /\n\nSitemap: https://snow-hawk-358190.hostingersite.com/sitemap.xml» (usa el dominio definitivo si lo cambian).
- Después de publicar el cambio, vuelve a enviar el sitemap en Google Search Console y revisa que la home salga como «rastreable».

#### SEO 7 · Imágenes: 2/2
*Vale 2 si:* Las imágenes con contenido tienen alt descriptivo y no pesan de más

La página tiene 2 imágenes con contenido y ambas traen alt descriptivo que dice lo que se ve (p. ej. «Padre e hija construyendo una pequeña casa de juguete, cuidando juntos el hogar y el futuro familiar»). Pesan unos 35 KB cada una (68 KB en total) y Lighthouse no marca formato, tamaño ni carga diferida; solo sugiere un ahorro menor de 29 KiB en la entrega de imágenes.

*Evidencia:*
- 2 de 2 imágenes con contenido con alt válido; sin alt vacío en imágenes grandes
- Peso total de imágenes: 68 KB; ninguna supera 300 KB
- uses-optimized-images, modern-image-formats, uses-responsive-images y offscreen-images con score 1
- La segunda imagen usa loading="lazy"; la primera (hero) no, lo cual es correcto
- image-delivery-insight: score 0.5, ahorro estimado de 29 KiB (mejora menor)

#### SEO 8 · Velocidad: 1/2
*Vale 2 si:* En Lighthouse móvil: rendimiento de 80 o más, LCP menor a 2.5 s y CLS menor a 0.1

Es una sola medición de Lighthouse móvil, y puede variar entre corridas y equipos. El rendimiento es 86 (≥ 80) y el CLS es 0.000 (< 0.1), pero el LCP es 3.79 s, por encima del límite de 2.5 s. Se cumplen dos de tres parámetros, así que la regla del script (1) se confirma. El FCP de 2.34 s sugiere que el contenido tarda en pintarse desde el inicio.

*Evidencia:*
- Rendimiento 86; CLS 0.000; TBT 0 ms
- LCP 3,787 ms (límite 2,500 ms); FCP 2,339 ms
- Respuesta del servidor: 110 ms (no es la causa)
- render-blocking-resources: ahorro estimado de 150 ms (Google Fonts CSS e index-Bcmy4e_o.css)
- Peso total 296 KiB; entry.client JS 55.7 KB y jsx-runtime JS 27.1 KB

*Cómo mejorarlo:*
- Quita del camino crítico los recursos que bloquean el render: carga las fuentes de Google (Lato y Lora) con preconnect y font-display: swap, o alójalas en tu propio dominio, y pon en línea el CSS crítico de index-Bcmy4e_o.css (22 KB).
- Prioriza la imagen principal (hero con la familia): agrégale fetchpriority="high" y un <link rel="preload" as="image"> para que se descargue antes de que cargue el JS, y confirma que no tenga loading="lazy".
- Reduce el costo de arranque de la página: sirve el hero en WebP/AVIF a su tamaño real (Lighthouse estima 29 KiB de ahorro en imágenes) y divide o recorta el JS inicial (entry.client y jsx-runtime suman cerca de 83 KB) para que el LCP baje de 2.5 s.

#### SEO 9 · Móvil: 1/2
*Vale 2 si:* Tiene meta viewport, se ve bien en el teléfono, el texto se lee y los botones se tocan fácil

Tiene meta viewport correcto, no hay scroll horizontal, el menú hamburguesa se ve arriba a la derecha y no hay banner de cookies ni pop-up que tape la pantalla. Los botones principales del hero son grandes y fáciles de tocar. Pero el 26% del texto mide menos de 12 px y 22 de 44 enlaces/botones miden menos de 24 px de alto (los «Conoce tus opciones» de las tarjetas miden 19 px). En la captura, las etiquetas «Atención cercana» y «Asesoría sin compromiso» sobre la foto se leen con dificultad.

*Evidencia:*
- viewport="width=device-width, initial-scale=1"; desborde horizontal 0 px
- 1,720 de 6,723 caracteres (26%) con tamaño menor a 12 px
- 22 de 44 objetivos táctiles miden menos de 24 px; «Conoce tus opciones» mide 133×19 px
- Captura arriba: título y botones «Quiero una asesoría» y «Hablemos por WhatsApp» legibles y grandes
- Captura arriba: un fragmento grande y difuso de texto («ce») queda cortado en el borde izquierdo y se encima con las etiquetas diminutas de la foto
- Captura completa (primeros 3000 px): las leyendas al pie de cada tarjeta («Para quienes más quieren», etc.) son minúsculas; no se ve menú roto ni contenido encimado en las tarjetas

*Cómo mejorarlo:*
- Aumenta el área táctil de los enlaces «Conoce tus opciones» de las 7 tarjetas a un mínimo de 44 px de alto (con padding o haciendo que toda la tarjeta sea el enlace), ya que hoy miden 19 px.
- Sube a 12 px o más las leyendas pequeñas (las de pie de tarjeta y las etiquetas «Atención cercana» y «Asesoría sin compromiso» sobre la foto) y dales contraste, por ejemplo con un fondo sólido o un degradado detrás del texto.
- Revisa el fragmento de texto decorativo («ce») que aparece cortado y encimado sobre la foto del hero en móvil: ocúltalo en pantallas angostas o reubícalo para que no choque con las etiquetas.

#### SEO 10 · Enlaces y URLs: 2/2
*Vale 2 si:* El menú funciona, no hay enlaces internos rotos (404), los enlaces no dicen "clic aquí" y las URLs se pueden leer

El menú tiene 6 enlaces internos funcionales (anclas a secciones y la página /negocios-y-empresas). Se revisaron 8 enlaces internos y 0 están rotos; no hay enlaces sin verificar. Las URLs son legibles (/seguros/vida, /seguros/gastos-medicos). Solo hay 1 ancla genérica («Ver»), y las 7 tarjetas que dicen «Conoce tus opciones» se compensan porque el pie enlaza las mismas URLs con texto descriptivo («Seguro de vida», «Seguro de hogar»…).

*Evidencia:*
- 0 rotos de 8 enlaces internos revisados; sinVerificar: []
- Menú: Nuestros seguros, Negocios y empresas, Sobre MAF, Preguntas frecuentes, Contacto
- Ancla genérica: «Ver» → /seguros/vida (4 %); Lighthouse «Links have descriptive text»: score 1
- URLs poco legibles: 0 de 9

### AEO

#### AEO 1 · Respuesta directa arriba: 1/2
*Vale 2 si:* En las primeras 1–2 frases queda claro qué es, para quién y qué ofrece (40–60 palabras aprox.)

Las primeras frases son más eslogan que definición: «Tu familia. Tu hogar. Tu futuro. En MAF te acompañamos a elegir la protección que necesitas…». Se intuye el para quién (familia) y algo de lo que ofrece (acompañamiento para elegir protección), pero nunca dice que MAF es una agencia de seguros ni en qué lugar opera. Esa definición clara llega mucho más abajo: «Somos MAF · Agencia de seguros…».

*Evidencia:*
- Apertura: «Tu familia. Tu hogar. Tu futuro. En MAF te acompañamos a elegir la protección que necesitas para vivir con más tranquilidad.» (21 palabras, sin la palabra «seguro»)
- Los ramos «VIDA · AUTO · HOGAR · AHORRO» aparecen varias líneas después, como etiqueta suelta
- La definición explícita está al final: «Somos MAF · Agencia de seguros. Te acompañamos para elegir la protección que necesitas…»
- La captura móvil superior muestra solo el eslogan y los botones; «Agencia de seguros» solo aparece en el logotipo (encabezado)

*Cómo mejorarlo:*
- Sustituye o antepón al párrafo del hero esta definición (31 palabras): «MAF es una agencia de seguros en Veracruz que asesora a familias y negocios para contratar seguros de vida, auto, hogar, gastos médicos y ahorro, con asesoría sin compromiso.»
- Deja «Tu familia. Tu hogar. Tu futuro.» como línea secundaria debajo de esa definición, no como apertura.

#### AEO 2 · Encabezados en forma de pregunta: 2/2
*Vale 2 si:* Algunos H2 son preguntas reales del usuario ("¿Cuánto cuesta…?") con la respuesta justo debajo

La sección de preguntas frecuentes tiene 10 encabezados H3 que son preguntas reales de un usuario, y varias se responden en la primera frase justo debajo. El script marcó como pregunta «Quiénes somos y cómo trabajamos» y «Cómo cotizar», pero no lo son; los dos H2 con signos de interrogación del inicio son un selector y una invitación, no preguntas con respuesta. Aun así hay bastante más de 3 preguntas bien respondidas. Dos respuestas (precio y zonas) quedan vacías por marcas de plantilla sin completar.

*Evidencia:*
- «¿Qué diferencia hay entre cobertura amplia, limitada y responsabilidad civil en un seguro de auto?» → «La diferencia está en el alcance: la responsabilidad civil cubre daños a terceros, la limitada suele sumar robo total y la amplia añade daños a tu propio auto.»
- «¿Qué es el deducible y el coaseguro…?» → «El deducible es lo que pagas al inicio de un siniestro y el coaseguro es un porcentaje…»
- «Tengo una enfermedad desde hace años, ¿un seguro de gastos médicos mayores la cubre?» → «Por lo general, las enfermedades que ya existen al contratar no se cubren desde el inicio…»
- Respuesta evasiva: «¿Cuánto cuesta un seguro de auto o de hogar en Veracruz?» → «…[FALTA DATO: rango o ejemplo que se pueda publicar].»

#### AEO 3 · Preguntas frecuentes: 1/2
*Vale 2 si:* Hay una sección de FAQ visible con respuestas cortas y completas

Hay una sección «Preguntas frecuentes» visible, con 10 preguntas agrupadas por tema y respuestas cortas de 1–2 frases (no depende de schema: no hay FAQPage). Pero la mitad de las respuestas está incompleta porque conserva marcas de plantilla sin resolver, y el criterio pide que cada respuesta sea completa. Nota: el contenido está en un acordeón (details/summary); la captura completa se corta antes de esa sección, así que no pude confirmar si carga abierto o cerrado.

*Evidencia:*
- Sección: «Preguntas frecuentes» con subgrupos «Elegir tu seguro», «Costos y condiciones», «Quiénes somos y cómo trabajamos», «Cómo cotizar»
- Respuestas completas: huracanes e inundaciones, cobertura amplia/limitada/RC, enfermedad preexistente, deducible y coaseguro, seguro para negocio (5 de 10)
- «¿En qué zonas de Veracruz atienden y cuál es su horario?» → «[FALTA DATO: zonas, dirección y horario].»
- «¿Qué hago si tengo un siniestro…?» → «Reporta el siniestro a la aseguradora lo antes posible. [FALTA DATO: cómo acompañas al cliente].»
- «¿Cómo puedo cotizar…?» → «…te pediremos datos básicos… [EDITAR: lista de datos].» y «Mi cédula es: [DATOS DE LICENCIA].»

*Cómo mejorarlo:*
- Completa o elimina las cinco respuestas con marcas. Ejemplo para cotizar: «Escríbenos por WhatsApp y te pediremos nombre, edad y código postal para vida y gastos médicos; marca, modelo y año del auto para seguro de auto; y dirección y tipo de vivienda para seguro de hogar.»
- Responde «¿En qué zonas atienden y cuál es su horario?» con datos reales, por ejemplo: «Atendemos en [ciudades de Veracruz] de lunes a viernes de [hora] a [hora]», y publica el mismo horario en la sección de contacto.
- Agrega a la respuesta del precio un ejemplo orientativo real (por ejemplo, el rango de prima anual de un auto o casa típicos) o, si no se puede, dilo sin marcas: «Cotizamos sin costo en menos de 24 horas.»

#### AEO 4 · Datos estructurados: 2/2
*Vale 2 si:* Hay JSON-LD de schema.org válido y del tipo correcto (Organization, LocalBusiness, Product, Event, FAQPage…), y coincide con lo que se ve en la página

Hay 2 bloques JSON-LD válidos con @context schema.org, presentes en el HTML inicial: un WebSite ("MAF · Agencia de seguros") y una Organization ("MAF", con descripción y sameAs a Facebook). Organization es un tipo aceptable para una agencia de seguros, el nombre aparece en la página y la descripción (vida, automóvil, hogar y ahorro) no contradice el contenido. Matices que no bajan el puntaje: un tipo más específico como InsuranceAgency/LocalBusiness describiría mejor a un negocio local en Veracruz, y la sección de preguntas frecuentes visible no tiene FAQPage. La página aún muestra dirección, teléfono y horario como [FALTA DATO], así que el schema no los puede incluir; tampoco pude verificar url, logo ni contactPoint porque la evidencia no los lista.

*Evidencia:*
- 2 bloques JSON-LD, todos válidos, @context https://schema.org, en el HTML crudo
- Tipos: WebSite y Organization; Organization name "MAF"
- sameAs: https://www.facebook.com/Luismtez34 (coincide con el enlace de Facebook visible)
- texto.md: dirección, horario y WhatsApp aparecen como [FALTA DATO], sin datos que contrastar con el schema
- Hay una sección de preguntas frecuentes visible (~10 preguntas) sin FAQPage en el schema

#### AEO 5 · Contenido legible sin JavaScript: 2/2
*Vale 2 si:* El texto principal ya viene en el HTML inicial, porque muchos bots de IA no ejecutan JavaScript

El HTML crudo trae el 100% del texto renderizado (1085 de 1085 palabras) y el H1 "Protege lo que más importa." ya viene en el HTML inicial junto con los H2 y los H3 de cada seguro. Lo que importa (propuesta de valor, seguros ofrecidos, preguntas frecuentes) es legible sin JavaScript. El "quemás" en el H1 es solo un salto de línea sin espacio en la extracción, no falta de contenido.

*Evidencia:*
- palabrasHtmlCrudo 1085 / palabrasRenderizado 1085 (proporción 1)
- H1 en crudo: "Protege lo quemás importa."
- H2 y H3 en crudo: "¿Qué quieres proteger hoy?", "Seguro de vida", "Seguro de automóvil", "Seguro de hogar"…
- primerasPalabrasCrudo incluye el alt de la imagen principal y "TU TRANQUILIDAD, NUESTRA PRIORIDAD"

#### AEO 6 · Acceso para bots de IA: 2/2
*Vale 2 si:* El robots.txt no bloquea a GPTBot, ClaudeBot, PerplexityBot ni Google-Extended; un llms.txt suma como bonus, porque todavía no es un estándar

El robots.txt tiene solo 6 líneas: bloquea a Googlebot ("Disallow: /") y deja "User-agent: * / Allow: /" para todos los demás. GPTBot, ClaudeBot y PerplexityBot caen en la regla comodín y están permitidos; Google-Extended es un token distinto de Googlebot, no tiene grupo propio y también cae en el comodín, así que ninguno de los cuatro bots de la rúbrica está bloqueado. Advertencia importante: Googlebot sí está bloqueado por completo, por lo que Google no puede rastrear el sitio y, en la práctica, Google-Extended no tendría qué leer; eso afecta sobre todo a la indexación (SEO), no a los cuatro bots de esta rúbrica. El archivo no tiene comentarios, Content-Signal ni marcas de Cloudflare; no se puede confirmar si lo administra el hosting (posible regla por defecto de un dominio temporal de Hostinger, sin verificar). No existe llms.txt (solo bonus informativo, no cambia el puntaje).

*Evidencia:*
- robots.txt: "User-agent: Googlebot / Disallow: /"
- robots.txt: "User-agent: * / Allow: /"
- Script: GPTBot, ClaudeBot, PerplexityBot y Google-Extended permitidos; también OAI-SearchBot, ChatGPT-User, anthropic-ai, CCBot, Applebot-Extended y Bytespider
- Sin Content-Signal ni referencias a Cloudflare en el robots.txt
- llms.txt: no existe

#### AEO 7 · Formato fácil de extraer: 2/2
*Vale 2 si:* Párrafos cortos, listas, tablas o pasos numerados, con un tema por sección

El contenido está bien estructurado para extraerse: 42 párrafos con promedio de 17 palabras y ninguno largo, tarjetas de producto de una sola idea, un proceso en 3 pasos numerados (01 «Nos cuentas tu historia», 02 «Exploramos tus opciones», 03 «Tú eliges con confianza»), una lista de 3 viñetas y una FAQ agrupada por tema con respuesta corta bajo cada pregunta. Cada sección trata un solo tema. Detalle menor: algunos encabezados se extraen sin espacio («Detrás de cada seguro,hay una historia.La tuya…»).

*Evidencia:*
- 42 párrafos, promedio 17 palabras, 0 párrafos largos
- Pasos 01–03 bajo «No tienes que decidir a solas.»
- Lista: «Escuchamos antes de recomendar», «Hablamos claro…», «Te acompañamos en el proceso de elección»
- FAQ con H3 de pregunta + respuesta de 1–2 frases

#### AEO 8 · Identidad clara y consistente: 1/2
*Vale 2 si:* El nombre, la descripción, la ubicación y el contacto son iguales en toda la página y en el schema, con enlaces a las redes oficiales

El nombre y la descripción son consistentes: «MAF · Agencia de seguros» aparece en el ©, el nombre del WebSite en el schema y el texto de la página, y «MAF» en la Organization (variación de formato normal). Pero no hay ningún dato de contacto ni de ubicación: ni teléfono, ni correo, ni dirección, ni en la página ni en el schema, y la sección «Quiénes somos y dónde estamos» muestra marcadores sin llenar.

*Evidencia:*
- Nombres: title «MAF Seguros en Veracruz…», schema «MAF · Agencia de seguros» (WebSite) y «MAF» (Organization), pie «© 2026 MAF · Agencia de seguros»; og:site_name ausente
- Descripción: meta description y og:description idénticas; el schema dice «Agencia de seguros: asesoría en vida, automóvil, hogar y ahorro.» (coherente, aunque omite gastos médicos y negocios)
- Contacto: pagina.json contacto.tel = [] y mailto = []; en el schema no hay telephone, email ni address
- Sección de contacto con «Dirección [FALTA DATO: dirección]», «Horario [FALTA DATO: horario]», «WhatsApp [FALTA DATO: WhatsApp]», «Zonas de atención [FALTA DATO: zonas de atención]»
- Los botones «Hablemos por WhatsApp» apuntan solo al ancla interna /#contacto, no a un número ni a wa.me
- Redes: un solo enlace, https://www.facebook.com/Luismtez34 (pie, sección Sobre MAF y CTA), repetido en sameAs de la Organization; el WebSite tiene sameAs vacío. El perfil parece de una persona y no de una página de marca

*Cómo mejorarlo:*
- Reemplaza los marcadores «[FALTA DATO: …]» por datos reales (dirección o zonas de atención, horario y número de WhatsApp) y publícalos en la sección «Quiénes somos y dónde estamos» y en el pie.
- Añade al schema Organization (o InsuranceAgency) los campos telephone, email, address o areaServed y url, con los mismos valores que muestra la página. Unifica el name con «MAF · Agencia de seguros» en WebSite y Organization.
- Enlaza un perfil de marca oficial (página de Facebook de MAF, más Instagram, Google Business Profile o LinkedIn si existen), repítelo en sameAs y agrega og:site_name con el nombre del negocio. Haz que los botones de WhatsApp usen https://wa.me/<número>.

#### AEO 9 · Datos concretos: 1/2
*Vale 2 si:* Hay cifras, precios, horarios, fechas o ejemplos en lugar de frases genéricas tipo "somos los mejores"

Hay contenido concreto y útil (los siete ramos, qué cubre cada tipo de cobertura de auto, cómo funcionan deducible y coaseguro, que las preexistentes suelen tener periodos de espera, que huracán e inundación suelen ser coberturas adicionales), pero no hay una sola cifra verificable: 0 precios, 0 horarios, 0 fechas, 0 porcentajes. Los únicos números son los índices «01»–«07». Todo lo que sería dato duro aparece como marca sin completar, y el resto del texto es marketing genérico.

*Evidencia:*
- Ejemplo concreto: «la responsabilidad civil cubre daños a terceros, la limitada suele sumar robo total y la amplia añade daños a tu propio auto»
- Ejemplo concreto: «Gastos médicos y vida colectivos, flotillas y daños empresariales»
- «Horario [FALTA DATO: horario]», «Dirección [FALTA DATO: dirección]», «WhatsApp [FALTA DATO: WhatsApp]»
- Frases genéricas: «Atención cercana», «Protección con sentido. Acompañamiento de persona a persona.», «Hablamos claro, sin letras pequeñas»

*Cómo mejorarlo:*
- Publica horario y zonas reales en la sección «Quiénes somos y dónde estamos», por ejemplo: «Lunes a viernes de 9:00 a 18:00 h · Atendemos Xalapa, Veracruz y Boca del Río», ajustado a los datos verdaderos del negocio.
- Añade un ejemplo numérico en «¿Cuánto cuesta un seguro de auto o de hogar en Veracruz?», como «Un seguro de auto de cobertura amplia para un sedán de 3 años puede costar desde $X al año», con una cifra que MAF pueda respaldar.
- Sustituye frases como «Atención cercana» por hechos medibles: años de experiencia, número de familias atendidas, tiempo de respuesta por WhatsApp o aseguradoras con las que trabaja, y el número de cédula CNSF.

#### AEO 10 · Señales de confianza: 1/2
*Vale 2 si:* Se ve quién está detrás (autor o equipo), cuándo se actualizó, una sección "acerca de" y fuentes o testimonios reales

Solo hay señales débiles: existe una sección «Sobre MAF» (con ancla #sobre-maf en el menú) y un © 2026, pero no se nombra a ninguna persona o equipo, no hay fecha de actualización explícita, ni testimonios, ni reseñas, ni fuentes con enlace. Además el texto público conserva marcadores sin completar («[FALTA DATO]», «[DATOS DE LICENCIA]», «[EDITAR]»), lo que resta credibilidad.

*Evidencia:*
- Quién está detrás: sin autor ni equipo; pagina.json autor.meta/relAuthor/jsonld = null, mencionaEquipo = false. El único rastro es un usuario de Facebook, «Luismtez34»
- Actualización: sin <time>, dateModified ni «actualizado el…»; solo «© 2026 MAF · Agencia de seguros.» (año vigente, señal mínima)
- Acerca de: sección «SOBRE MAF» («Detrás de cada seguro, hay una historia…») con ancla #sobre-maf, pero con texto genérico y sin nombres, trayectoria ni experiencia
- Testimonios y fuentes: testimonios.citas = 0, schemaReview = false, fuentesExternas = 0; en las preguntas frecuentes se menciona a la CNSF sin enlace
- Cédula de agente: «Mi cédula es: [DATOS DE LICENCIA]» y «Cédula de agente [DATOS DE LICENCIA]» sin llenar
- Sin enlaces a política de privacidad, aviso legal o términos (enlacesLegales = [])

*Cómo mejorarlo:*
- Nombra a la persona o al equipo en «Sobre MAF» (nombre completo, foto, años de experiencia) y publica el número real de cédula de agente en lugar de «[DATOS DE LICENCIA]», con enlace a la consulta oficial de la CNSF.
- Agrega 2 o 3 testimonios verificables con nombre, ciudad o foto (o reseñas de Google con calificación y enlace) y márcalos con schema Review/AggregateRating si son reales.
- Muestra una fecha visible tipo «Última actualización: noviembre 2026» y añade dateModified en el schema. Cita con enlace las fuentes regulatorias que mencionas (CNSF, CONDUSEF) y publica aviso de privacidad.

## Qué arreglar primero

Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):

1. **SEO 6 · robots.txt y sitemap.xml** (0/2): Elimina el bloque «User-agent: Googlebot / Disallow: /» del robots.txt; hoy impide que Google rastree y muestre el sitio.
2. **SEO 4 · Tema claro y contenido suficiente** (1/2): Incluye el tema en el H1, por ejemplo: «Seguros de vida, auto y hogar en Veracruz: protege lo que más importa», y corrige el espacio faltante entre «que» y «más» en el marcado.
3. **SEO 8 · Velocidad** (1/2): Quita del camino crítico los recursos que bloquean el render: carga las fuentes de Google (Lato y Lora) con preconnect y font-display: swap, o alójalas en tu propio dominio, y pon en línea el CSS crítico de index-Bcmy4e_o.css (22 KB).
4. **SEO 9 · Móvil** (1/2): Aumenta el área táctil de los enlaces «Conoce tus opciones» de las 7 tarjetas a un mínimo de 44 px de alto (con padding o haciendo que toda la tarjeta sea el enlace), ya que hoy miden 19 px.
5. **AEO 1 · Respuesta directa arriba** (1/2): Sustituye o antepón al párrafo del hero esta definición (31 palabras): «MAF es una agencia de seguros en Veracruz que asesora a familias y negocios para contratar seguros de vida, auto, hogar, gastos médicos y ahorro, con asesoría sin compromiso.»
6. **AEO 3 · Preguntas frecuentes** (1/2): Completa o elimina las cinco respuestas con marcas. Ejemplo para cotizar: «Escríbenos por WhatsApp y te pediremos nombre, edad y código postal para vida y gastos médicos; marca, modelo y año del auto para seguro de auto; y dirección y tipo de vivienda para seguro de hogar.»
7. **AEO 8 · Identidad clara y consistente** (1/2): Reemplaza los marcadores «[FALTA DATO: …]» por datos reales (dirección o zonas de atención, horario y número de WhatsApp) y publícalos en la sección «Quiénes somos y dónde estamos» y en el pie.
8. **AEO 9 · Datos concretos** (1/2): Publica horario y zonas reales en la sección «Quiénes somos y dónde estamos», por ejemplo: «Lunes a viernes de 9:00 a 18:00 h · Atendemos Xalapa, Veracruz y Boca del Río», ajustado a los datos verdaderos del negocio.
9. **AEO 10 · Señales de confianza** (1/2): Nombra a la persona o al equipo en «Sobre MAF» (nombre completo, foto, años de experiencia) y publica el número real de cédula de agente en lugar de «[DATOS DE LICENCIA]», con enlace a la consulta oficial de la CNSF.

## Cómo se calificó

Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.

Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.
