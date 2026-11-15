import * as cheerio from 'cheerio';

// ---------- utilidades de texto ----------
export const palabras = (t) => (String(t || '').match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) || []).length;
const limpiar = (t) => String(t || '').replace(/\s+/g, ' ').trim();
const sinAcentos = (t) => String(t || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

const STOP = new Set(('de la que el en y a los del se las por un para con no una su al lo como más mas pero sus le ya o este sí si porque esta entre cuando muy sin sobre también tambien me hasta hay donde quien desde todo nos durante todos uno les ni contra otros ese eso ante ellos e esto mí mi antes algunos qué que unos yo otro otras otra él tanto esa estos mucho quienes nada muchos cual poco ella estar estas algunas algo nosotros tu tus te ti tu es son ser fue ha han puede pueden the and for you your with that this from are was were have has not but can all any our their they them its will more about what when where which who how why into out one two than then also just like over such only other some may most each very been being does did get got use used using per via www com mx es en')
  .split(/\s+/).map(sinAcentos));

const PREGUNTA = /^(como|que|cual|cuales|cuanto|cuanta|cuantos|cuantas|cuando|donde|adonde|por que|para que|quien|quienes|puedo|debo|necesito|se puede|how|what|why|when|where|who|which|can i|do i|should|is it|are there|does)\b/;
export const esPregunta = (t) => /[¿?]/.test(t) || PREGUNTA.test(sinAcentos(t).trim());

const GENERICO_ANCLA = /^(clic|click|haz clic|haga clic|da clic|dar clic|pulsa|aqui|aqui\.|here|click here|clic aqui|click aqui|haz click|leer mas|leer mas\.\.\.|ver mas|ver mas\.\.\.|mas|mas info|mas informacion|saber mas|conoce mas|descubre mas|read more|learn more|more|more info|continuar|continue|ver|enlace|link|este enlace|this link|ir|go|\.\.\.|>|»)$/;
export const esAnclaGenerica = (t) => GENERICO_ANCLA.test(sinAcentos(t).replace(/[»›>→.…\s]+$/g, '').trim() || '');

const REDES = [
  ['facebook', /(^|\.)facebook\.com|(^|\.)fb\.com/], ['instagram', /(^|\.)instagram\.com/], ['linkedin', /(^|\.)linkedin\.com/],
  ['x/twitter', /(^|\.)twitter\.com|(^|\.)x\.com/], ['youtube', /(^|\.)youtube\.com|(^|\.)youtu\.be/], ['tiktok', /(^|\.)tiktok\.com/],
  ['pinterest', /(^|\.)pinterest\./], ['github', /(^|\.)github\.com/], ['whatsapp', /(^|\.)wa\.me|whatsapp\.com/], ['telegram', /(^|\.)t\.me/],
];
export function redSocial(href) {
  try { const h = new URL(href).hostname; return REDES.find(([, re]) => re.test(h))?.[0] || null; } catch { return null; }
}

const GENERICAS_FRASES = [
  'somos los mejores', 'los mejores', 'el mejor', 'la mejor', 'líder en', 'lider en', 'líderes en', 'soluciones integrales', 'servicio de calidad',
  'alta calidad', 'de calidad', 'innovador', 'innovadoras', 'de clase mundial', 'a tu medida', 'a su medida', 'compromiso con la excelencia', 'excelencia',
  'pasión por', 'comprometidos con', 'experiencia y profesionalismo', 'profesionales', 'best in class', 'world-class', 'cutting-edge', 'state of the art',
  'industry-leading', 'leading provider', 'we are the best', 'passionate about', 'one-stop', 'solutions tailored',
];

// ---------- conversión del DOM a bloques ----------
const SALTAR = new Set(['script', 'style', 'noscript', 'template', 'svg', 'iframe', 'head', 'canvas', 'video', 'audio', 'object', 'embed', 'option', 'select', 'link', 'meta']);
const BLOQUE = new Set(['p', 'div', 'section', 'article', 'main', 'header', 'footer', 'nav', 'aside', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'blockquote', 'details', 'summary', 'dl', 'dt', 'dd', 'figure', 'figcaption', 'pre', 'hr', 'address', 'form', 'fieldset', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
const ROL_A_REGION = { navigation: 'nav', banner: 'header', contentinfo: 'footer', complementary: 'aside', main: 'main' };

function oculto($el) {
  const st = $el.attr('style') || '';
  return $el.attr('hidden') !== undefined || $el.attr('aria-hidden') === 'true' || /display\s*:\s*none|visibility\s*:\s*hidden/i.test(st);
}

function convertir($) {
  const bloques = [];
  let buf = '';
  let bufCtx = null;
  const regionDe = (stack) => {
    if (stack.includes('nav')) return 'nav';
    if (stack.includes('footer')) return 'footer';
    if (stack.includes('aside')) return 'aside';
    const contenido = stack.includes('main') || stack.includes('article');
    if (stack.includes('header') && !contenido) return 'header';
    return contenido ? 'main' : 'cuerpo';
  };
  const flush = (stack) => {
    const t = limpiar(buf);
    if (t) bloques.push({ tipo: bufCtx?.tipo || 'p', depth: bufCtx?.depth || 0, num: bufCtx?.num, texto: t, region: regionDe(bufCtx?.stack || stack) });
    buf = ''; bufCtx = null;
  };
  const visit = (n, ctx) => {
    if (n.type === 'text') {
      if (!buf && !n.data.trim()) return;
      if (!buf) bufCtx = ctx;
      buf += n.data;
      return;
    }
    if (n.type !== 'tag') return;
    const tag = n.name;
    if (SALTAR.has(tag)) return;
    const $el = $(n);
    if (oculto($el)) return;

    let stack = ctx.stack;
    const landmark = ['nav', 'header', 'footer', 'aside', 'main', 'article'].includes(tag) ? tag : ROL_A_REGION[$el.attr('role')];
    if (landmark) stack = [...stack, landmark];

    if (/^h[1-6]$/.test(tag)) {
      flush(stack);
      const t = limpiar($el.text());
      if (t) bloques.push({ tipo: tag, texto: t, region: regionDe(stack) });
      return;
    }
    if (tag === 'table') {
      flush(stack);
      $el.find('tr').each((_, tr) => {
        const celdas = $(tr).children('th,td').map((__, c) => limpiar($(c).text())).get().filter(Boolean);
        if (celdas.length) bloques.push({ tipo: 'fila', texto: celdas.join(' | '), region: regionDe(stack) });
      });
      return;
    }
    if (tag === 'img') {
      const alt = limpiar($el.attr('alt'));
      if (alt) { if (!buf) bufCtx = ctx; buf += ` [img: ${alt}] `; }
      return;
    }
    if (tag === 'br') { buf += ' '; return; }

    const esBloque = BLOQUE.has(tag);
    let hijoCtx = { ...ctx, stack };
    if (esBloque) flush(ctx.stack);
    if (tag === 'ul' || tag === 'ol') hijoCtx = { ...hijoCtx, lista: { ordenada: tag === 'ol', n: 0 }, depth: ctx.depth + 1 };
    if (tag === 'li') {
      const l = ctx.lista || { ordenada: false, n: 0 };
      l.n += 1;
      hijoCtx = { ...hijoCtx, tipo: 'li', depth: Math.max(ctx.depth - 1, 0), num: l.ordenada ? l.n : undefined };
    }
    if (tag === 'summary') hijoCtx = { ...hijoCtx, tipo: 'resumen' };
    if (tag === 'details') hijoCtx = { ...hijoCtx, tipo: 'p' };
    if (['p', 'div', 'section', 'article', 'main', 'blockquote', 'dd', 'dt', 'td'].includes(tag) && ctx.tipo === 'resumen') hijoCtx = { ...hijoCtx, tipo: 'p' };

    for (const hijo of n.children || []) visit(hijo, hijoCtx);
    if (esBloque) flush(stack);
  };
  const raiz = $('body').get(0) || $.root().get(0);
  for (const h of raiz.children || []) visit(h, { stack: [], tipo: 'p', depth: 0 });
  flush([]);
  return bloques;
}

function aMarkdown(bloques) {
  const out = [];
  let region = null;
  for (const b of bloques) {
    if (b.region !== region) { out.push(`\n<!-- región: ${b.region} -->`); region = b.region; }
    if (/^h[1-6]$/.test(b.tipo)) out.push(`\n${'#'.repeat(+b.tipo[1])} ${b.texto}`);
    else if (b.tipo === 'li') out.push(`${'  '.repeat(b.depth)}${b.num ? `${b.num}.` : '-'} ${b.texto}`);
    else if (b.tipo === 'fila') out.push(`| ${b.texto} |`);
    else if (b.tipo === 'resumen') out.push(`▸ ${b.texto}`);
    else out.push(b.texto);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

// ---------- JSON-LD ----------
function leerJsonLd($) {
  const bloques = [];
  $('script[type="application/ld+json"]').each((_, s) => {
    const raw = $(s).contents().text().trim();
    if (!raw) return;
    try { bloques.push({ valido: true, data: JSON.parse(raw) }); } catch (e) { bloques.push({ valido: false, error: e.message, muestra: raw.slice(0, 200) }); }
  });
  const nodos = [];
  const aplanar = (x) => {
    if (Array.isArray(x)) return x.forEach(aplanar);
    if (x && typeof x === 'object') {
      if (x['@graph']) aplanar(x['@graph']);
      if (x['@type']) nodos.push(x);
    }
  };
  bloques.filter((b) => b.valido).forEach((b) => aplanar(b.data));
  const txt = (v) => (typeof v === 'string' ? v : v?.name || v?.['@id'] || '');
  const direccion = (a) => (typeof a === 'string' ? a : a && typeof a === 'object' ? [a.streetAddress, a.addressLocality, a.addressRegion, a.postalCode, a.addressCountry && txt(a.addressCountry)].filter(Boolean).join(', ') : '');
  const resumen = nodos.map((x) => ({
    tipos: [].concat(x['@type']).map(String),
    name: txt(x.name) || txt(x.headline) || undefined,
    url: x.url, descripcion: x.description,
    telephone: x.telephone, email: x.email,
    address: direccion(x.address) || undefined,
    sameAs: [].concat(x.sameAs || []),
    dateModified: x.dateModified, datePublished: x.datePublished,
    author: txt(Array.isArray(x.author) ? x.author[0] : x.author) || undefined,
    rating: x.aggregateRating ? { valor: x.aggregateRating.ratingValue, total: x.aggregateRating.reviewCount || x.aggregateRating.ratingCount } : undefined,
    preguntasFaq: Array.isArray(x.mainEntity) ? x.mainEntity.length : undefined,
    precio: x.offers ? [].concat(x.offers).map((o) => o.price).filter(Boolean) : undefined,
  }));
  return { cantidadBloques: bloques.length, invalidos: bloques.filter((b) => !b.valido), contextos: bloques.filter((b) => b.valido).map((b) => JSON.stringify(b.data['@context'] ?? (Array.isArray(b.data) ? b.data[0]?.['@context'] : ''))), nodos: resumen };
}

// ---------- análisis principal ----------
export function analizarHtml(html, baseUrl) {
  const $ = cheerio.load(html);
  const abs = (h) => { try { return new URL(h, baseUrl).href; } catch { return null; } };
  const hostBase = new URL(baseUrl).hostname.replace(/^www\./, '');
  const interno = (href) => { try { return new URL(href).hostname.replace(/^www\./, '') === hostBase; } catch { return false; } };

  const meta = {};
  $('meta').each((_, m) => {
    const k = ($(m).attr('name') || $(m).attr('property') || $(m).attr('http-equiv') || '').toLowerCase();
    if (k && $(m).attr('content') !== undefined) (meta[k] ||= []).push($(m).attr('content'));
  });
  const m1 = (k) => meta[k]?.[0];

  const titulos = $('title').filter((_, t) => !$(t).closest('svg').length).map((_, t) => limpiar($(t).text())).get();
  const canonicales = $('link[rel~="canonical"]').map((_, l) => abs($(l).attr('href'))).get();
  const encabezados = $('h1,h2,h3,h4,h5,h6').map((_, h) => ({ nivel: +h.tagName[1], texto: limpiar($(h).text()) })).get();

  const bloques = convertir($);
  const contenido = bloques.filter((b) => b.region === 'main' || b.region === 'cuerpo');
  const textoContenido = contenido.map((b) => b.texto).join('\n');
  const textoTotal = bloques.map((b) => b.texto).join('\n');
  const parrafos = contenido.filter((b) => b.tipo === 'p' && palabras(b.texto) >= 6);

  // Enlaces
  const enlaces = [];
  const contacto = { tel: [], mailto: [] };
  $('a[href]').each((_, a) => {
    const href = ($(a).attr('href') || '').trim();
    if (!href || href.startsWith('#') || /^javascript:/i.test(href)) return;
    if (/^tel:/i.test(href)) return void contacto.tel.push(href.replace(/^tel:/i, '').trim());
    if (/^mailto:/i.test(href)) return void contacto.mailto.push(href.replace(/^mailto:/i, '').split('?')[0].trim());
    const url = abs(href);
    if (!url || !/^https?:/i.test(url)) return;
    const texto = limpiar($(a).text()) || limpiar($(a).attr('aria-label')) || limpiar($(a).attr('title')) || limpiar($(a).find('img').attr('alt'));
    const enNav = $(a).closest('nav,[role=navigation],header').length > 0;
    const enFooter = $(a).closest('footer,[role=contentinfo]').length > 0;
    enlaces.push({ url, texto, interno: interno(url), enNav, enFooter, rel: $(a).attr('rel') || undefined });
  });

  const imagenes = $('img').map((_, i) => ({
    src: abs($(i).attr('src') || $(i).attr('data-src') || ''),
    alt: $(i).attr('alt') === undefined ? null : $(i).attr('alt'),
    loading: $(i).attr('loading') || undefined,
    role: $(i).attr('role') || undefined,
  })).get();

  // Señales para los agentes
  const encabezadosInfo = encabezados.map((h) => ({ ...h, esPregunta: esPregunta(h.texto) }));
  const bajoCadaH2 = bloques.flatMap((b, i) => {
    if (b.tipo !== 'h2') return [];
    const sig = [];
    for (let j = i + 1; j < bloques.length && sig.length < 2; j++) { if (/^h[1-6]$/.test(bloques[j].tipo)) break; sig.push(bloques[j].texto); }
    return [{ h2: b.texto, esPregunta: esPregunta(b.texto), respuesta: limpiar(sig.join(' ')).split(' ').slice(0, 45).join(' ') }];
  });

  const faqIdx = bloques.findIndex((b) => /^h[1-6]$/.test(b.tipo) && /preguntas?\s+frecuentes|faq|preguntas\s+comunes|dudas\s+frecuentes|frequently\s+asked/i.test(b.texto));
  const seccionFaq = faqIdx >= 0 ? bloques.slice(faqIdx, faqIdx + 14).map((b) => `${b.tipo}: ${b.texto}`).join('\n').slice(0, 1800) : null;

  const lower = sinAcentos(textoContenido);
  const contar = (re) => (textoContenido.match(re) || []).length;
  const genericas = GENERICAS_FRASES.map((f) => ({ frase: f, veces: (lower.match(new RegExp(`\\b${sinAcentos(f).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g')) || []).length })).filter((x) => x.veces);
  const datosConcretos = {
    numeros: contar(/\b\d[\d.,]*\b/g),
    precios: contar(/(?:\$|USD|MXN|MX\$|€|EUR|COP|ARS|£)\s?\d[\d.,]*|\d[\d.,]*\s?(?:pesos|dólares|dolares|usd|mxn|eur|€)\b/gi),
    porcentajes: contar(/\d+(?:[.,]\d+)?\s?%/g),
    fechas: contar(/\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b|\b\d{1,2}\s+de\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)(?:\s+de\s+\d{4})?\b|\b(?:19|20)\d{2}\b/gi),
    horarios: contar(/\b\d{1,2}:\d{2}\s?(?:am|pm|hrs?|h)?\b|\b(?:lunes|martes|miércoles|miercoles|jueves|viernes|sábado|sabado|domingo)\b/gi),
    frasesGenericas: genericas,
    ejemplosDeNumeros: [...new Set(textoContenido.match(/[^.\n]{0,50}(?:\$\s?\d[\d.,]*|\d+(?:[.,]\d+)?\s?%|\b\d{2,}[\d.,]*\s?(?:clientes|años|anos|usuarios|proyectos|sitios|países|paises|empleados|sucursales|productos|years|customers|users|projects)\b)[^.\n]{0,40}/gi) || [])].slice(0, 8).map(limpiar),
  };

  const jsonld = leerJsonLd($);
  const nodosLd = jsonld.nodos;
  const acercaRe = /nosotros|acerca|about|quienes somos|quiénes somos|equipo|team|historia|nuestra empresa|who we are/i;
  const contactoRe = /contacto|contact|cont[aá]ctanos|escr[ií]benos/i;
  const legalRe = /privacidad|privacy|t[eé]rminos|terms|aviso legal|cookies/i;
  const confianza = {
    autor: {
      meta: m1('author') || null,
      relAuthor: $('a[rel~="author"],[itemprop="author"],.author,.byline,[class*="autor"]').first().text().trim().slice(0, 80) || null,
      jsonld: nodosLd.map((n) => n.author).filter(Boolean)[0] || null,
      textoPor: (textoContenido.match(/\b(?:por|by|escrito por|written by|autor:?)\s+[A-ZÁÉÍÓÚÑ][\wáéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][\wáéíóúñ]+)?/) || [null])[0],
    },
    fechaActualizacion: {
      time: $('time[datetime]').first().attr('datetime') || null,
      meta: m1('article:modified_time') || m1('og:updated_time') || m1('last-modified') || m1('date') || null,
      jsonld: nodosLd.map((n) => n.dateModified || n.datePublished).filter(Boolean)[0] || null,
      texto: (textoTotal.match(/(?:actualizad[oa]|última actualización|ultima actualizacion|updated|last updated|modificad[oa])[^\n]{0,40}/i) || [null])[0],
    },
    enlacesAcerca: enlaces.filter((e) => e.interno && (acercaRe.test(e.texto) || acercaRe.test(new URL(e.url).pathname))).slice(0, 5).map((e) => ({ texto: e.texto, url: e.url })),
    enlacesContacto: enlaces.filter((e) => e.interno && (contactoRe.test(e.texto) || contactoRe.test(new URL(e.url).pathname))).slice(0, 3).map((e) => ({ texto: e.texto, url: e.url })),
    enlacesLegales: enlaces.filter((e) => legalRe.test(e.texto) || legalRe.test(new URL(e.url).pathname)).slice(0, 4).map((e) => ({ texto: e.texto, url: e.url })),
    testimonios: {
      encabezado: encabezados.filter((h) => /testimonio|rese[ñn]a|opiniones|reviews?|clientes (?:dicen|opinan)|casos? de [eé]xito|lo que dicen|testimonials|customers say/i.test(h.texto)).map((h) => h.texto),
      citas: $('blockquote').length,
      schemaReview: nodosLd.some((n) => n.rating || n.tipos.some((t) => /Review/.test(t))),
    },
    fuentesExternas: enlaces.filter((e) => !e.interno && !e.enNav && !e.enFooter && !redSocial(e.url)).length,
    mencionaEquipo: encabezados.some((h) => /equipo|team|fundador|founder|nuestro equipo/i.test(h.texto)),
  };

  const correos = [...new Set([...contacto.mailto, ...(textoTotal.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g) || [])].map((x) => x.toLowerCase()))].slice(0, 8);
  const telefonos = [...new Set([...contacto.tel, ...(textoTotal.match(/\+?\d[\d\s().-]{8,}\d/g) || [])].map(limpiar))]
    .filter((t) => { const d = t.replace(/\D/g, '').length; return d >= 10 && d <= 13; }).slice(0, 8);
  const lineasUbicacion = [...new Set([
    ...$('address').map((_, a) => limpiar($(a).text())).get(),
    ...bloques.filter((b) => (b.region === 'footer' || b.region === 'main' || b.region === 'cuerpo') && b.texto.length < 220 && /\b(calle|av\.?|avenida|blvd|boulevard|col\.|colonia|c\.p\.|cp\s?\d|código postal|codigo postal|street|suite|piso|local)\b/i.test(b.texto) && /\d/.test(b.texto)).map((b) => b.texto),
  ])].slice(0, 4);
  const redes = {};
  for (const e of enlaces) { const r = redSocial(e.url); if (r) (redes[r] ||= new Set()).add(e.url); }
  const redesPagina = Object.fromEntries(Object.entries(redes).map(([k, v]) => [k, [...v].slice(0, 2)]));
  const copyright = (bloques.filter((b) => b.region === 'footer').map((b) => b.texto).join(' ').match(/(?:©|copyright)\s*(?:\d{4}\s*)?[^|.\n]{2,70}/i) || [null])[0];

  const identidad = {
    nombres: { title: titulos[0] || null, ogSiteName: m1('og:site_name') || null, ogTitle: m1('og:title') || null, h1: encabezados.find((h) => h.nivel === 1)?.texto || null, schema: nodosLd.map((n) => n.name).filter(Boolean).slice(0, 4), copyright, dominio: hostBase },
    descripciones: { metaDescription: m1('description') || null, ogDescription: m1('og:description') || null, schema: nodosLd.map((n) => n.descripcion).filter(Boolean).slice(0, 2) },
    ubicacion: { enPagina: lineasUbicacion, enSchema: nodosLd.map((n) => n.address).filter(Boolean).slice(0, 2), mapas: enlaces.filter((e) => /google\.[a-z.]+\/maps|goo\.gl\/maps|maps\.app\.goo\.gl|waze\.com/i.test(e.url)).length },
    contacto: { telefonosPagina: telefonos, correosPagina: correos, telefonosSchema: nodosLd.map((n) => n.telephone).filter(Boolean), correosSchema: nodosLd.map((n) => n.email).filter(Boolean) },
    redes: { enPagina: redesPagina, enSchemaSameAs: [...new Set(nodosLd.flatMap((n) => n.sameAs))].slice(0, 12) },
  };

  return {
    url: baseUrl,
    lang: $('html').attr('lang') || null,
    titulos, canonicales, meta, encabezados: encabezadosInfo, bajoCadaH2,
    jsonld, enlaces, contacto, imagenes,
    palabrasContenido: palabras(textoContenido),
    palabrasTotales: palabras(textoTotal),
    bloques, markdown: aMarkdown(bloques),
    primerosParrafos: parrafos.slice(0, 4).map((p) => ({ texto: p.texto, palabras: palabras(p.texto), region: p.region })),
    formato: {
      parrafos: parrafos.length,
      promedioPalabrasPorParrafo: parrafos.length ? Math.round(parrafos.reduce((s, p) => s + palabras(p.texto), 0) / parrafos.length) : 0,
      parrafosLargos: parrafos.filter((p) => palabras(p.texto) > 100).length,
      itemsDeLista: contenido.filter((b) => b.tipo === 'li').length,
      listasNumeradas: contenido.filter((b) => b.tipo === 'li' && b.num === 1).length,
      filasDeTabla: contenido.filter((b) => b.tipo === 'fila').length,
      secciones: contenido.filter((b) => /^h[2-4]$/.test(b.tipo)).length,
      palabrasPorSeccion: contenido.filter((b) => /^h[2-4]$/.test(b.tipo)).length ? Math.round(palabras(textoContenido) / contenido.filter((b) => /^h[2-4]$/.test(b.tipo)).length) : palabras(textoContenido),
    },
    faq: {
      encabezadoFaq: faqIdx >= 0 ? bloques[faqIdx].texto : null,
      seccionFaq,
      detailsSummary: $('details > summary').length,
      ariaExpanded: $('[aria-expanded]').length,
      schemaFaq: nodosLd.some((n) => n.tipos.includes('FAQPage')),
      preguntasEnEncabezados: encabezadosInfo.filter((h) => h.esPregunta && h.nivel >= 2).length,
    },
    datosConcretos, confianza, identidad,
  };
}

// Términos más frecuentes (para verificar si el tema aparece en título, H1 y primer párrafo).
export function terminosFrecuentes(texto, n = 8) {
  const cuenta = new Map();
  for (const t of String(texto).toLowerCase().match(/[\p{L}]{4,}/gu) || []) {
    const k = sinAcentos(t);
    if (STOP.has(k)) continue;
    const e = cuenta.get(k) || { termino: t, veces: 0 };
    e.veces += 1;
    cuenta.set(k, e);
  }
  return [...cuenta.entries()].sort((a, b) => b[1].veces - a[1].veces).slice(0, n).map(([k, v]) => ({ ...v, _k: k }));
}
export { sinAcentos, limpiar };
