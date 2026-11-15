import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { buscarChrome, banderasChrome } from './navegador.mjs';

const AUDITORIAS = [
  'viewport', 'font-size', 'tap-targets', 'image-alt', 'link-text', 'crawlable-anchors', 'is-crawlable', 'canonical', 'meta-description',
  'document-title', 'http-status-code', 'hreflang', 'robots-txt', 'uses-optimized-images', 'modern-image-formats', 'uses-responsive-images',
  'offscreen-images', 'image-size-responsive', 'unsized-images', 'total-byte-weight', 'largest-contentful-paint-element', 'layout-shifts',
  'render-blocking-resources', 'unused-javascript', 'server-response-time', 'image-delivery-insight', 'lcp-discovery-insight', 'cls-culprits-insight',
];

const resumirItem = (it) => ({
  url: it.url || it.node?.snippet?.slice(0, 120) || it.source?.url || undefined,
  bytes: it.totalBytes ?? it.wastedBytes ?? undefined,
  ahorroBytes: it.wastedBytes ?? undefined,
  detalle: it.text || it.reason || it.node?.nodeLabel || undefined,
});

/** Una corrida de Lighthouse móvil (configuración por defecto) con el Chrome indicado. */
async function unaCorrida(url, exe) {
  let chrome;
  try {
    chrome = await chromeLauncher.launch({ chromePath: exe, chromeFlags: ['--headless=new', ...banderasChrome()] });
    const r = await lighthouse(url, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'seo', 'accessibility', 'best-practices'] });
    const lhr = r.lhr;
    if (lhr.runtimeError) return { ok: false, error: `${lhr.runtimeError.code}: ${lhr.runtimeError.message}`.slice(0, 300) };
    const a = lhr.audits;
    const num = (id) => a[id]?.numericValue ?? null;
    const cat = (id) => (lhr.categories[id]?.score == null ? null : Math.round(lhr.categories[id].score * 100));
    const auditorias = {};
    for (const id of AUDITORIAS) {
      const x = a[id];
      if (!x) continue;
      auditorias[id] = { titulo: x.title, score: x.score, modo: x.scoreDisplayMode, valor: x.displayValue, items: (x.details?.items || []).slice(0, 5).map(resumirItem) };
    }
    return {
      ok: true,
      version: lhr.lighthouseVersion,
      chromeVersion: (lhr.environment?.hostUserAgent?.match(/Chrome\/([\d.]+)/) || [])[1] || null,
      formFactor: lhr.configSettings.formFactor,
      urlFinal: lhr.finalDisplayedUrl,
      puntajes: { rendimiento: cat('performance'), accesibilidad: cat('accessibility'), mejoresPracticas: cat('best-practices'), seo: cat('seo') },
      metricas: { lcpMs: num('largest-contentful-paint'), cls: num('cumulative-layout-shift'), fcpMs: num('first-contentful-paint'), tbtMs: num('total-blocking-time'), speedIndexMs: num('speed-index') },
      auditorias,
      advertencias: lhr.runWarnings || [],
    };
  } catch (e) {
    return { ok: false, error: e.message.split('\n')[0].slice(0, 300) };
  } finally {
    try { await chrome?.kill(); } catch { /* ya cerrado */ }
  }
}

/**
 * Corre Lighthouse móvil `corridas` veces y devuelve la corrida mediana por rendimiento
 * (Lighthouse varía entre corridas; la mediana de 3 es mucho más estable que una sola).
 * `chromePath` fuerza un Chrome concreto; si no, se usa CHROME_PATH o el Chrome instalado.
 */
export async function correrLighthouse(url, { corridas = 1, chromePath } = {}) {
  const exe = buscarChrome(chromePath);
  if (!exe) return { ok: false, error: 'No se encontró Chrome/Chromium para Lighthouse. Instala Chrome o indica su ruta con --chrome o CHROME_PATH.' };
  const buenas = [];
  let ultimoError = null;
  for (let i = 0; i < Math.max(1, corridas); i++) {
    const r = await unaCorrida(url, exe);
    if (r.ok) buenas.push(r); else ultimoError = r.error;
  }
  if (!buenas.length) return { ok: false, error: ultimoError || 'Lighthouse no devolvió resultados', chrome: exe };
  const ordenadas = [...buenas].sort((x, y) => x.puntajes.rendimiento - y.puntajes.rendimiento);
  const mediana = ordenadas[Math.floor((ordenadas.length - 1) / 2)];
  return { ...mediana, chrome: exe, corridas: buenas.length, rendimientoPorCorrida: buenas.map((x) => x.puntajes.rendimiento) };
}
