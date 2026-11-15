import { UMBRALES, TIPOS_SCHEMA_AUXILIARES, BOTS_IA } from './config.mjs';
import { puntuar, check } from './puntaje.mjs';
import { esAnclaGenerica, terminosFrecuentes, sinAcentos, palabras } from './pagina.mjs';

const U = UMBRALES;
const enRango = (n, { min, max }) => n >= min && n <= max;
const sinWww = (h) => h.replace(/^www\./, '').toLowerCase();
const normUrl = (u) => { try { const x = new URL(u); return `${sinWww(x.hostname)}${x.pathname.replace(/\/+$/, '') || '/'}`; } catch { return String(u); } };
const pct = (x) => `${Math.round(x * 100)}%`;

const resultado = (puntaje, checks, evidencia, nota) => ({ puntaje, origen: 'script', checks, evidencia, ...(nota ? { nota } : {}) });
const paraAgente = (agente, evidencia, nota) => ({ puntaje: null, origen: 'agente', agente, evidencia, nota: nota || `Lo califica ${agente} con esta evidencia.` });
const noEvaluable = (motivo, evidencia = {}) => ({ puntaje: null, origen: 'script', checks: [], evidencia, nota: `No evaluable automáticamente: ${motivo}` });

// ============================ SEO ============================

function seo1(p) {
  const t = p.titulos[0] || '';
  const h1 = p.encabezados.find((h) => h.nivel === 1)?.texto || '';
  const marca = sinWww(new URL(p.url).hostname).split('.')[0];
  const toks = (s) => new Set(sinAcentos(s).match(/[a-z0-9]{4,}/g) || []);
  const comunes = [...toks(t)].filter((w) => toks(h1).has(w));
  // "Áurea Seguros" ↔ aureaseguros.com: se compara sin espacios ni acentos, y también por palabras del título dentro del dominio.
  const plano = (x) => sinAcentos(x).replace(/[^a-z0-9]/g, '');
  const marcaEnTitulo = plano(t).includes(plano(marca)) || [...toks(t)].some((w) => plano(marca).includes(w));
  const generico = /^(home|inicio|index|untitled|sin t[ií]tulo|document|p[aá]gina principal|bienvenid[oa]|welcome|nueva p[aá]gina)$/i.test(t.trim());
  const checks = [
    check('existe', t.length > 0, t ? `Hay título: "${t}"` : 'No hay <title>', { bloqueante: true }),
    check('unico', p.titulos.length === 1, `${p.titulos.length} etiqueta(s) <title>`),
    check('longitud', enRango(t.length, U.titulo), `${t.length} caracteres (rango ${U.titulo.min}–${U.titulo.max})`),
    check('noGenerico', t.length > 0 && !generico, generico ? 'El título es genérico' : 'No es un título genérico'),
    check('incluyeTemaOMarca', marcaEnTitulo || comunes.length > 0, comunes.length ? `Comparte términos con el H1: ${comunes.slice(0, 4).join(', ')}` : marcaEnTitulo ? `Incluye la marca (${marca})` : `No coincide con el H1 ni con la marca (${marca})`),
  ];
  return resultado(puntuar(checks), checks, { titulos: p.titulos, longitud: t.length, h1 });
}

function seo2(p) {
  const d = (p.meta.description?.[0] || '').trim();
  const og = (k) => (p.meta[`og:${k}`]?.[0] || '').trim();
  const ogImg = og('image');
  const checks = [
    check('metaDescription', d.length > 0, d ? 'Hay meta description' : 'Falta meta description'),
    check('longitud', d.length > 0 && enRango(d.length, U.metaDescription), `${d.length} caracteres (rango ${U.metaDescription.min}–${U.metaDescription.max})`),
    check('ogTitle', og('title'), og('title') ? 'og:title presente' : 'Falta og:title'),
    check('ogDescription', og('description'), og('description') ? 'og:description presente' : 'Falta og:description'),
    check('ogImage', ogImg && /^https?:\/\//i.test(ogImg), ogImg ? `og:image: ${ogImg.slice(0, 100)}` : 'Falta og:image (o no es URL absoluta)'),
  ];
  return resultado(puntuar(checks), checks, { metaDescription: d, longitud: d.length, og: { title: og('title'), description: og('description'), image: ogImg }, twitterCard: p.meta['twitter:card']?.[0] || null });
}

function seo3(p) {
  const hs = p.encabezados;
  const h1s = hs.filter((h) => h.nivel === 1);
  const saltos = [];
  let prev = 0;
  for (const h of hs) {
    if (h.nivel > prev + 1) saltos.push(`${prev ? `H${prev}` : 'inicio'} → H${h.nivel} ("${h.texto.slice(0, 50)}")`);
    prev = h.nivel;
  }
  const checks = [
    check('tieneH1', h1s.length >= 1, `${h1s.length} H1`, { bloqueante: true }),
    check('unSoloH1', h1s.length === 1, h1s.length === 1 ? 'Exactamente un H1' : `${h1s.length} H1 (debe haber uno)`),
    check('h1ConTexto', h1s.length > 0 && h1s.every((h) => h.texto.length > 0), h1s.map((h) => `"${h.texto.slice(0, 60)}"`).join(', ') || 'sin H1'),
    check('sinSaltos', saltos.length === 0, saltos.length ? `Saltos: ${saltos.slice(0, 3).join('; ')}` : 'Sin saltos de nivel'),
    check('tieneH2', hs.some((h) => h.nivel === 2), `${hs.filter((h) => h.nivel === 2).length} H2`),
  ];
  return resultado(puntuar(checks), checks, { h1: h1s.map((h) => h.texto), saltos, resumen: Object.fromEntries([1, 2, 3, 4, 5, 6].map((n) => [`h${n}`, hs.filter((h) => h.nivel === n).length])), encabezados: hs.slice(0, 40).map((h) => `H${h.nivel}: ${h.texto.slice(0, 80)}`) });
}

function seo4(p) {
  const texto = p.bloques.filter((b) => b.region === 'main' || b.region === 'cuerpo').map((b) => b.texto).join(' ');
  const titulo = p.titulos[0] || '';
  const h1 = p.encabezados.find((h) => h.nivel === 1)?.texto || '';
  const primero = p.primerosParrafos[0]?.texto || '';
  const aparece = (t, term) => sinAcentos(t).includes(sinAcentos(term).slice(0, Math.max(5, term.length - 2)));
  const terminos = terminosFrecuentes(texto, 8).map(({ termino, veces }) => ({ termino, veces, enTitulo: aparece(titulo, termino), enH1: aparece(h1, termino), enPrimerParrafo: aparece(primero, termino) }));
  return paraAgente('auditor-contenido', { titulo, h1, metaDescription: p.meta.description?.[0] || null, primerParrafo: p.primerosParrafos[0] || null, palabrasContenido: p.palabrasContenido, umbralPalabras: U.palabrasContenido, terminosMasFrecuentes: terminos, nota: 'Las palabras se cuentan en el contenido principal (sin menú ni pie de página).' });
}

function seo5(ctx) {
  const { pagina: p, principal, urlFinal } = ctx;
  const robotsMeta = [...(p.meta.robots || []), ...(p.meta.googlebot || [])].join(',').toLowerCase();
  const xrobots = String(ctx.render?.headers?.['x-robots-tag'] || principal.headers?.['x-robots-tag'] || '').toLowerCase();
  const noindex = /noindex/.test(robotsMeta) || /noindex/.test(xrobots);
  const canon = p.canonicales;
  const canonOk = canon.length === 1 && normUrl(canon[0]) === normUrl(urlFinal);
  const checks = [
    check('sinNoindex', !noindex, noindex ? `Tiene noindex (${robotsMeta || xrobots})` : 'Sin noindex', { bloqueante: true }),
    check('canonicalCorrecto', canonOk, canon.length === 0 ? 'No hay canonical' : canon.length > 1 ? `${canon.length} canonical` : canonOk ? `Canonical apunta a sí misma: ${canon[0]}` : `Canonical apunta a otra URL: ${canon[0]}`),
    check('https', new URL(urlFinal).protocol === 'https:', `Protocolo ${new URL(urlFinal).protocol}`),
    check('langEnHtml', Boolean(p.lang), p.lang ? `lang="${p.lang}"` : 'Falta lang en <html>'),
  ];
  return resultado(puntuar(checks), checks, { urlFinal, statusHttp: ctx.render?.status ?? principal.status, cadenaDeRedirecciones: principal.cadena, metaRobots: robotsMeta || null, xRobotsTag: xrobots || null, canonicales: canon, lang: p.lang, hreflang: p.meta['hreflang'] || undefined });
}

function seo6(ctx) {
  const { robots, sitemap } = ctx;
  const checks = [
    check('robotsExiste', robots.existe, robots.existe ? 'robots.txt encontrado' : `No hay robots.txt (${robots.error || `status ${robots.status}`})`),
    check('robotsNoBloquea', !robots.bloqueaTodoElSitio && !robots.bloqueaLaPagina, robots.bloqueaTodoElSitio ? 'robots.txt bloquea todo el sitio' : robots.bloqueaLaPagina ? 'robots.txt bloquea esta página' : 'No bloquea el sitio', { bloqueante: true }),
    check('sitemapExiste', sitemap.existe, sitemap.existe ? `Sitemap en ${sitemap.url}` : 'No se encontró sitemap en robots.txt ni en rutas comunes'),
    check('sitemapListaPaginas', sitemap.urlsEnMuestra > 0, `${sitemap.urlsEnMuestra} URL(s) listadas${sitemap.tipo === 'índice de sitemaps' ? ' (muestra de los primeros sitemaps hijo)' : ''}`),
  ];
  return resultado(puntuar(checks), checks, { robots: { url: robots.url, status: robots.status, bloqueaTodoElSitio: robots.bloqueaTodoElSitio, sitemapsDeclarados: robots.sitemaps, contenido: robots.contenido?.slice(0, 1200) }, sitemap: { existe: sitemap.existe, url: sitemap.url, tipo: sitemap.tipo, urlsEnMuestra: sitemap.urlsEnMuestra, incluyeLaPagina: sitemap.incluyeLaPagina, ejemplos: sitemap.ejemplos, intentos: sitemap.intentos } });
}

const archivoGenerico = /\.(jpe?g|png|webp|gif|svg|avif)$|^(img|image|imagen|dsc|screenshot|foto|photo|picture|banner|logo)[-_ ]?\d*$|^[\w-]*\d{4,}[\w-]*$/i;

function seo7(ctx) {
  const { render, pagina: p, lh } = ctx;
  const imgs = (render?.ok ? render.metricas.imagenes : p.imagenes.map((i) => ({ src: i.src, alt: i.alt, role: i.role, ancho: null, alto: null }))).filter((i) => i.src && !i.src.startsWith('data:'));
  const decorativa = (i) => i.alt === '' || ['presentation', 'none'].includes(i.role) || i.ariaHidden === 'true';
  const diminuta = (i) => i.ancho != null && (i.ancho < 32 || i.alto < 32);
  const conContenido = imgs.filter((i) => !decorativa(i) && !diminuta(i));
  const altValido = (i) => i.alt != null && i.alt.trim().length >= 3 && !archivoGenerico.test(i.alt.trim());
  const sinAlt = conContenido.filter((i) => !altValido(i));
  const vaciasGrandes = imgs.filter((i) => i.alt === '' && i.ancho >= 150 && i.alto >= 150);
  const cobertura = conContenido.length ? (conContenido.length - sinAlt.length) / conContenido.length : 1;
  const pesadas = (render?.pesosImg || []).filter((x) => x.bytes > U.imagenPesadaKB * 1024).sort((a, b) => b.bytes - a.bytes);
  const auditsImg = ['uses-optimized-images', 'modern-image-formats', 'uses-responsive-images', 'offscreen-images'];
  const lhMalas = lh?.ok ? auditsImg.filter((id) => typeof lh.auditorias[id]?.score === 'number' && lh.auditorias[id].score < 0.9) : [];
  const checks = [
    check('altMinimo', cobertura >= 0.5, `${pct(cobertura)} de ${conContenido.length} imágenes con contenido tienen alt válido`, { bloqueante: true }),
    check('altCobertura', cobertura >= U.imagenesConAltMin, `Se espera ≥ ${pct(U.imagenesConAltMin)}; hay ${pct(cobertura)}`),
    check('sinImagenesPesadas', pesadas.length === 0, pesadas.length ? `${pesadas.length} imagen(es) > ${U.imagenPesadaKB} KB (la mayor: ${Math.round(pesadas[0].bytes / 1024)} KB)` : `Ninguna imagen > ${U.imagenPesadaKB} KB`),
    ...(lh?.ok ? [check('lighthouseImagenes', lhMalas.length === 0, lhMalas.length ? `Lighthouse marca: ${lhMalas.join(', ')}` : 'Lighthouse no marca problemas de formato, tamaño ni carga diferida')] : []),
  ];
  return resultado(puntuar(checks), checks, {
    totalImagenes: imgs.length, conContenido: conContenido.length, conAltValido: conContenido.length - sinAlt.length,
    sinAlt: sinAlt.slice(0, 8).map((i) => ({ src: i.src.slice(0, 120), alt: i.alt })),
    altVacioEnImagenesGrandes: vaciasGrandes.slice(0, 5).map((i) => ({ src: i.src.slice(0, 120), tamano: `${i.ancho}x${i.alto}` })),
    imagenesPesadas: pesadas.slice(0, 6).map((x) => ({ url: x.url.slice(0, 120), kb: Math.round(x.bytes / 1024), tipo: x.tipo })),
    pesoTotalImagenesKB: Math.round((render?.pesosImg || []).reduce((s, x) => s + x.bytes, 0) / 1024),
    lighthouse: lh?.ok ? Object.fromEntries(auditsImg.filter((id) => lh.auditorias[id]).map((id) => [id, { score: lh.auditorias[id].score, valor: lh.auditorias[id].valor, items: lh.auditorias[id].items }])) : 'Lighthouse no disponible',
  }, conContenido.length === 0 ? 'La página no tiene imágenes con contenido: se considera cumplido por no aplicar.' : undefined);
}

function seo8(ctx) {
  const { lh } = ctx;
  if (!lh?.ok) return noEvaluable(`Lighthouse falló (${lh?.error || 'sin datos'})`);
  const V = U.velocidad;
  const checks = [
    check('rendimiento', lh.puntajes.rendimiento >= V.rendimiento, `Rendimiento ${lh.puntajes.rendimiento} (mínimo ${V.rendimiento})`),
    check('lcp', lh.metricas.lcpMs < V.lcpMs, `LCP ${(lh.metricas.lcpMs / 1000).toFixed(2)} s (máximo ${V.lcpMs / 1000} s)`),
    check('cls', lh.metricas.cls < V.cls, `CLS ${lh.metricas.cls.toFixed(3)} (máximo ${V.cls})`),
  ];
  const pasan = checks.filter((c) => c.ok).length;
  const puntaje = pasan === 3 ? 2 : pasan >= 1 ? 1 : 0; // regla propia: 1 si cumple al menos una de las tres
  return resultado(puntaje, checks, { lighthouseMovil: { version: lh.version, ...lh.puntajes, ...lh.metricas }, oportunidades: ['server-response-time', 'render-blocking-resources', 'unused-javascript', 'total-byte-weight', 'largest-contentful-paint-element'].filter((id) => lh.auditorias[id]).map((id) => ({ id, titulo: lh.auditorias[id].titulo, valor: lh.auditorias[id].valor, score: lh.auditorias[id].score })) }, 'Es una sola medición de Lighthouse; el rendimiento puede variar unos puntos entre corridas.');
}

function seo9(ctx) {
  const { render, lh, pagina: p } = ctx;
  const viewport = p.meta.viewport?.[0] || render?.metricas?.viewportMeta || '';
  const m = render?.ok ? render.metricas : null;
  const checks = [
    check('metaViewport', /width\s*=\s*device-width/i.test(viewport), viewport ? `viewport="${viewport}"` : 'Falta meta viewport', { bloqueante: true }),
    ...(m ? [
      check('sinScrollHorizontal', m.desbordeHorizontalPx <= 1, m.desbordeHorizontalPx > 1 ? `La página se desborda ${m.desbordeHorizontalPx}px a lo ancho en móvil` : 'No hay scroll horizontal en móvil'),
      check('textoLegible', m.texto.proporcionPequena <= 0.1, `${pct(m.texto.proporcionPequena)} del texto es menor a ${U.textoLegibleMinPx}px`),
      check('botonesTocables', m.objetivosTactiles.total === 0 || m.objetivosTactiles.pequenos / m.objetivosTactiles.total <= U.tapTargetMaxProporcionPequena, `${m.objetivosTactiles.pequenos} de ${m.objetivosTactiles.total} botones/enlaces miden menos de ${U.tapTargetMinPx}px`),
    ] : []),
  ];
  const lhAud = lh?.ok ? Object.fromEntries(['viewport', 'font-size', 'tap-targets'].filter((id) => lh.auditorias[id]).map((id) => [id, { score: lh.auditorias[id].score, valor: lh.auditorias[id].valor, items: lh.auditorias[id].items }])) : null;
  return resultado(m ? puntuar(checks) : null, checks, { viewport, metricasMovil: m ? { desbordeHorizontalPx: m.desbordeHorizontalPx, texto: m.texto, objetivosTactiles: m.objetivosTactiles } : 'No se pudo abrir la página en móvil', lighthouse: lhAud, capturas: render?.capturas, nota: 'Mira las capturas para juzgar lo que el script no ve (diseño roto, texto sobre texto, menú ilegible).' }, m ? 'El script puntúa lo medible; el agente debe revisar la captura móvil.' : 'Sin navegador: no hay métricas móviles.');
}

function seo10(ctx) {
  const { pagina: p, enlaces: en, lh } = ctx;
  const navLinks = p.enlaces.filter((e) => e.interno && e.enNav);
  const navUnicos = new Set(navLinks.map((e) => e.url));
  const conTexto = p.enlaces.filter((e) => e.texto || e.enNav);
  const genericos = p.enlaces.filter((e) => esAnclaGenerica(e.texto));
  const sinTexto = p.enlaces.filter((e) => !e.texto);
  const internos = [...new Set(p.enlaces.filter((e) => e.interno).map((e) => e.url.replace(/#.*/, '')))];
  const ilegible = (u) => {
    const x = new URL(u);
    const segs = x.pathname.split('/').filter(Boolean);
    return x.search.split('&').length > 2 || (x.search && x.search.length > 40) || u.length > 110 || segs.some((s) => /^[0-9a-f]{12,}$/i.test(s) || /^\d{6,}$/.test(s) || /[A-Z]{3,}|_{1}/.test(s) || /%[0-9A-F]{2}/i.test(s) || s.length > 60);
  };
  const ilegibles = internos.filter(ilegible);
  const propGen = conTexto.length ? genericos.length / conTexto.length : 0;
  const propIleg = internos.length ? ilegibles.length / internos.length : 0;
  const checks = [
    check('menuPresente', navUnicos.size >= 2, `${navUnicos.size} enlaces internos distintos en menú/encabezado`),
    check('sinEnlacesRotos', en.rotos.length === 0, en.rotos.length ? `${en.rotos.length} enlace(s) roto(s): ${en.rotos.slice(0, 3).map((r) => `${r.status || r.error} ${r.url}`).join(' | ')}` : en.revisados ? `0 rotos de ${en.revisados} enlaces internos revisados` : 'No hay enlaces internos que revisar (no aplica)', { na: en.revisados === 0 }),
    check('textoDescriptivo', propGen <= 0.1 && sinTexto.length <= Math.max(1, p.enlaces.length * 0.05), `${genericos.length} enlace(s) genérico(s) tipo "clic aquí"/"leer más" (${pct(propGen)}); ${sinTexto.length} sin texto`),
    check('urlsLegibles', propIleg <= 0.2, internos.length ? `${ilegibles.length} de ${internos.length} URLs internas poco legibles (${pct(propIleg)})` : 'No hay URLs internas que revisar (no aplica)', { na: internos.length === 0 }),
  ];
  return resultado(puntuar(checks), checks, {
    menu: [...navUnicos].slice(0, 12).map((u) => `${(navLinks.find((e) => e.url === u)?.texto || '').slice(0, 50)} → ${u}`),
    revisados: en.revisados, internosUnicos: en.internosUnicos, rotos: en.rotos, sinVerificar: en.sinVerificar.slice(0, 5),
    enlacesGenericos: genericos.slice(0, 8).map((e) => ({ texto: e.texto, url: e.url })), enlacesSinTexto: sinTexto.slice(0, 5).map((e) => e.url),
    urlsPocoLegibles: ilegibles.slice(0, 6), lighthouseLinkText: lh?.ok ? lh.auditorias['link-text'] : undefined,
  }, en.revisados < en.internosUnicos ? `Solo se probaron ${en.revisados} de ${en.internosUnicos} enlaces internos (límite ${U.enlacesMaxRevisar}).` : undefined);
}

// ============================ AEO ============================

function aeo1(p) {
  const primerosBloques = p.bloques.filter((b) => b.region === 'main' || b.region === 'cuerpo').slice(0, 7).map((b) => ({ tipo: b.tipo, texto: b.texto.slice(0, 400), palabras: palabras(b.texto) }));
  const primero = p.primerosParrafos[0]?.texto || '';
  const frases = primero.split(/(?<=[.!?…])\s+/).slice(0, 2).join(' ');
  return paraAgente('auditor-contenido', { h1: p.encabezados.find((h) => h.nivel === 1)?.texto || null, metaDescription: p.meta.description?.[0] || null, primerosBloquesDelContenido: primerosBloques, primerasDosFrasesDelPrimerParrafo: { texto: frases, palabras: palabras(frases) }, rangoEsperado: '40–60 palabras aprox.' });
}
const aeo2 = (p) => paraAgente('auditor-contenido', { encabezadosH2: p.bajoCadaH2.slice(0, 25), totalH2: p.encabezados.filter((h) => h.nivel === 2).length, h2ComoPregunta: p.bajoCadaH2.filter((x) => x.esPregunta).length, todosLosEncabezadosComoPregunta: p.encabezados.filter((h) => h.esPregunta).map((h) => `H${h.nivel}: ${h.texto}`).slice(0, 15) });
const aeo3 = (p) => paraAgente('auditor-contenido', p.faq);
const aeo7 = (p) => paraAgente('auditor-contenido', { ...p.formato, encabezados: p.encabezados.slice(0, 30).map((h) => `H${h.nivel}: ${h.texto.slice(0, 70)}`), muestraDelContenido: 'Lee evidencia/texto.md para ver el formato real (listas con "-", numeradas con "1.", tablas con "|").' });
const aeo9 = (p) => paraAgente('auditor-contenido', p.datosConcretos);
const aeo10 = (p) => paraAgente('auditor-confianza', p.confianza);

function aeo4(ctx) {
  const { pagina: p, crudo } = ctx;
  const ld = p.jsonld;
  const tipos = [...new Set(ld.nodos.flatMap((n) => n.tipos))];
  const relevantes = tipos.filter((t) => !TIPOS_SCHEMA_AUXILIARES.includes(t));
  const textoPagina = sinAcentos([p.titulos[0], ...p.bloques.map((b) => b.texto)].join(' '));
  const nombres = ld.nodos.map((n) => n.name).filter(Boolean);
  const coinciden = nombres.filter((n) => textoPagina.includes(sinAcentos(n)));
  const enCrudo = crudo ? crudo.jsonld.nodos.length > 0 : null;
  const checks = [
    check('hayJsonLd', ld.cantidadBloques > 0, `${ld.cantidadBloques} bloque(s) JSON-LD`, { bloqueante: true }),
    check('jsonValido', ld.cantidadBloques > 0 && ld.invalidos.length === 0, ld.invalidos.length ? `${ld.invalidos.length} bloque(s) con JSON inválido: ${ld.invalidos[0].error}` : 'Todo el JSON-LD se puede leer'),
    check('contextoSchemaOrg', ld.contextos.some((c) => /schema\.org/i.test(c)), `@context: ${ld.contextos.join(', ') || 'ninguno'}`),
    check('tipoRelevante', relevantes.length > 0, relevantes.length ? `Tipos: ${relevantes.join(', ')}` : `Solo hay tipos auxiliares o ninguno (${tipos.join(', ') || '—'})`),
    check('estaEnHtmlCrudo', enCrudo !== false, ld.cantidadBloques === 0 ? 'No hay JSON-LD que ubicar (no aplica)' : enCrudo === false ? 'El JSON-LD lo inyecta JavaScript: no está en el HTML inicial' : 'Está en el HTML inicial', { na: ld.cantidadBloques === 0 }),
    check('coincideConLaPagina', nombres.length === 0 ? false : coinciden.length > 0, nombres.length ? `Nombre(s) en el schema ${coinciden.length ? 'que se ven en la página' : 'que NO aparecen en la página'}: ${nombres.slice(0, 3).join(' | ')}` : 'Ningún nodo trae name'),
  ];
  return resultado(puntuar(checks), checks, { tipos, nodos: ld.nodos.slice(0, 6), invalidos: ld.invalidos, nota: 'El agente debe confirmar que el tipo sea el adecuado para este sitio y que precios/teléfonos/dirección del schema coincidan con la página.' });
}

function aeo5(ctx) {
  const { crudo, pagina: rend, principal } = ctx;
  if (!crudo) return noEvaluable(`no se pudo descargar el HTML crudo (${principal.error || `status ${principal.status}`}); probablemente el sitio bloquea clientes que no son navegador`);
  const r = rend.palabrasContenido;
  const c = crudo.palabrasContenido;
  const ratio = r > 0 ? Math.min(1, c / r) : 1;
  const checks = [
    check('textoEnHtmlInicial', ratio >= U.sinJsRatio.bien, `El HTML inicial trae ${pct(ratio)} del texto que ve el usuario (${c} de ${r} palabras)`),
    check('h1EnHtmlInicial', crudo.encabezados.some((h) => h.nivel === 1), crudo.encabezados.some((h) => h.nivel === 1) ? 'El H1 ya viene en el HTML inicial' : rend.encabezados.some((h) => h.nivel === 1) ? 'El H1 aparece solo después de ejecutar JavaScript' : 'La página no tiene H1'),
    check('contenidoMinimo', c >= 100, `${c} palabras de contenido sin JavaScript`),
  ];
  const puntaje = ratio >= U.sinJsRatio.bien ? 2 : ratio >= U.sinJsRatio.medio ? 1 : 0;
  return resultado(puntaje, checks, { palabrasHtmlCrudo: c, palabrasRenderizado: r, proporcion: Number(ratio.toFixed(2)), encabezadosCrudo: crudo.encabezados.slice(0, 8).map((h) => `H${h.nivel}: ${h.texto.slice(0, 60)}`), primerasPalabrasCrudo: crudo.bloques.filter((b) => b.region === 'main' || b.region === 'cuerpo').slice(0, 3).map((b) => b.texto.slice(0, 120)) }, 'Regla: ≥ 80% = 2, 40–80% = 1, < 40% = 0.');
}

function aeo6(ctx) {
  const { robots, llms } = ctx;
  const checks = BOTS_IA.map((b) => check(b, !robots.bots[b].bloqueado, robots.bots[b].bloqueado ? `${b} está bloqueado en robots.txt` : `${b} permitido`));
  const extras = Object.fromEntries(Object.entries(robots.bots).filter(([k]) => !BOTS_IA.includes(k)).map(([k, v]) => [k, v.bloqueado ? 'bloqueado' : 'permitido']));
  return resultado(puntuar(checks), checks, { robotsTxtExiste: robots.existe, botsDeLaRubrica: Object.fromEntries(BOTS_IA.map((b) => [b, robots.bots[b].bloqueado ? 'bloqueado' : 'permitido'])), otrosBots: extras, llmsTxt: llms, bonusLlmsTxt: llms.existe }, 'El llms.txt se reporta como bonus informativo: no cambia el puntaje (la escala está topada en 2).');
}

function aeo8(p) {
  return paraAgente('auditor-confianza', { ...p.identidad, nodosSchema: p.jsonld.nodos.slice(0, 4).map(({ tipos, name, url, telephone, email, address }) => ({ tipos, name, url, telephone, email, address })), nota: 'Compara nombre, descripción, ubicación y contacto entre página, metadatos y schema, y confirma que las redes sociales sean las oficiales.' });
}

export function calcularCriterios(ctx) {
  const p = ctx.pagina;
  return {
    'seo-1': seo1(p), 'seo-2': seo2(p), 'seo-3': seo3(p), 'seo-4': seo4(p), 'seo-5': seo5(ctx), 'seo-6': seo6(ctx), 'seo-7': seo7(ctx),
    'seo-8': seo8(ctx), 'seo-9': seo9(ctx), 'seo-10': seo10(ctx),
    'aeo-1': aeo1(p), 'aeo-2': aeo2(p), 'aeo-3': aeo3(p), 'aeo-4': aeo4(ctx), 'aeo-5': aeo5(ctx), 'aeo-6': aeo6(ctx), 'aeo-7': aeo7(p),
    'aeo-8': aeo8(p), 'aeo-9': aeo9(p), 'aeo-10': aeo10(p),
  };
}
