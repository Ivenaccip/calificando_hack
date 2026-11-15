import robotsParser from 'robots-parser';
import { obtener, sondear, enParalelo } from './red.mjs';
import { BOTS_IA, BOTS_IA_EXTRA, UMBRALES } from './config.mjs';

const pareceHtml = (r) => /text\/html/i.test(r.headers?.['content-type'] || '') || /^\s*<(!doctype|html|head|body)/i.test(r.texto || '');

export async function revisarRobots(origen, urlPagina) {
  const r = await obtener(`${origen}/robots.txt`, { timeoutMs: 15000 });
  const existe = Boolean(r.ok && r.status === 200 && r.texto.trim() && !pareceHtml(r));
  // Ausente de verdad (404/410, o 200 vacío/HTML) ≠ inaccesible (403, 5xx, timeout): en el segundo caso no se sabe qué dice.
  const ausente = Boolean(r.ok && (r.status === 404 || r.status === 410 || (r.status === 200 && (!r.texto.trim() || pareceHtml(r)))));
  const inaccesible = !existe && !ausente;
  const info = { url: `${origen}/robots.txt`, existe, inaccesible, status: r.status ?? null, error: r.error, contenido: existe ? r.texto.slice(0, 3000) : null, sitemaps: [] };
  if (!existe) {
    const motivo = inaccesible ? `robots.txt inaccesible (${r.status ? `HTTP ${r.status}` : r.error}): no se pudo comprobar` : 'robots.txt no existe (todo permitido)';
    return { ...info, bloqueaTodoElSitio: false, bloqueaLaPagina: false, bots: Object.fromEntries([...BOTS_IA, ...BOTS_IA_EXTRA].map((b) => [b, { bloqueado: false, indeterminado: inaccesible, motivo }])) };
  }
  const robots = robotsParser(info.url, r.texto);
  const bloqueado = (ua, u = `${origen}/`) => robots.isAllowed(u, ua) === false;
  return {
    ...info,
    sitemaps: robots.getSitemaps(),
    bloqueaTodoElSitio: bloqueado('*') || bloqueado('Googlebot'),
    bloqueaLaPagina: bloqueado('Googlebot', urlPagina),
    bots: Object.fromEntries([...BOTS_IA, ...BOTS_IA_EXTRA].map((b) => [b, { bloqueado: bloqueado(b), motivo: bloqueado(b) ? 'robots.txt le prohíbe la raíz del sitio' : 'permitido' }])),
  };
}

const locs = (xml) => [...xml.matchAll(/<loc>\s*(?:<!\[CDATA\[)?\s*([^<\]\s][^<\]]*?)\s*(?:\]\]>)?\s*<\/loc>/gi)].map((m) => m[1]);

export async function revisarSitemap(origen, sitemapsDeRobots, urlPagina) {
  const candidatos = [...new Set([...sitemapsDeRobots, `${origen}/sitemap.xml`, `${origen}/sitemap_index.xml`, `${origen}/sitemap-index.xml`, `${origen}/wp-sitemap.xml`])];
  const intentos = [];
  for (const c of candidatos) {
    const r = await obtener(c, { timeoutMs: 15000, maxBytes: 5_000_000 });
    const valido = r.ok && r.status === 200 && /<urlset|<sitemapindex/i.test(r.texto);
    intentos.push({ url: c, status: r.status ?? null, valido });
    if (!valido) continue;
    const indice = /<sitemapindex/i.test(r.texto);
    let urls = locs(r.texto);
    let hijos = [];
    if (indice) {
      hijos = urls.slice(0, 3);
      const sub = await Promise.all(hijos.map((h) => obtener(h, { timeoutMs: 15000, maxBytes: 5_000_000 })));
      urls = sub.flatMap((s) => (s.ok && s.status === 200 ? locs(s.texto) : []));
    }
    const norm = (u) => u.replace(/\/$/, '').replace(/^https?:\/\/(www\.)?/, '');
    return { existe: true, url: c, tipo: indice ? 'índice de sitemaps' : 'sitemap', sitemapsHijoRevisados: hijos.length, urlsEnMuestra: urls.length, incluyeLaPagina: urls.some((u) => norm(u) === norm(urlPagina)), ejemplos: urls.slice(0, 5), intentos };
  }
  return { existe: false, urlsEnMuestra: 0, incluyeLaPagina: false, ejemplos: [], intentos };
}

export async function revisarLlmsTxt(origen) {
  const r = await obtener(`${origen}/llms.txt`, { timeoutMs: 12000, maxBytes: 200_000 });
  const existe = Boolean(r.ok && r.status === 200 && r.texto.trim() && !pareceHtml(r));
  return { existe, url: `${origen}/llms.txt`, muestra: existe ? r.texto.slice(0, 400) : null };
}

const ROTO = (s) => s === 404 || s === 410 || (s >= 500 && s < 600);
const DNS = /ENOTFOUND|EAI_AGAIN|ECONNREFUSED|CERT|certificate/i;

/** Prueba enlaces internos buscando 404. Prioriza los del menú. */
export async function revisarEnlaces(enlaces, urlPagina) {
  const vistos = new Set([urlPagina.replace(/#.*$/, '')]);
  const lista = [];
  for (const e of [...enlaces.filter((x) => x.interno && x.enNav), ...enlaces.filter((x) => x.interno && !x.enNav)]) {
    const u = e.url.replace(/#.*$/, '');
    if (vistos.has(u)) continue;
    vistos.add(u);
    lista.push({ url: u, texto: e.texto, enNav: e.enNav });
  }
  const aRevisar = lista.slice(0, UMBRALES.enlacesMaxRevisar);
  const res = await enParalelo(aRevisar, async (e) => ({ ...e, ...(await sondear(e.url)) }), 6);
  const rotos = res.filter((r) => ROTO(r.status) || (r.status === 0 && DNS.test(r.error || '')));
  const sinVerificar = res.filter((r) => !rotos.includes(r) && (r.status === 0 || [401, 403, 429, 999].includes(r.status)));
  return { internosUnicos: lista.length, revisados: res.length, rotos: rotos.map(({ url, texto, status, error }) => ({ url, texto, status, error })), sinVerificar: sinVerificar.map(({ url, status, error }) => ({ url, status, error })) };
}
