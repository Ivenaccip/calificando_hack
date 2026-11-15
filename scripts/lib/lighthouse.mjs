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

/** Corre Lighthouse en modo móvil (la configuración por defecto) y devuelve un resumen compacto. */
export async function correrLighthouse(url) {
  const exe = buscarChrome();
  if (!exe) return { ok: false, error: 'No se encontró Chrome/Chromium para Lighthouse.' };
  let chrome;
  try {
    chrome = await chromeLauncher.launch({ chromePath: exe, chromeFlags: ['--headless=new', ...banderasChrome()] });
    const r = await lighthouse(url, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'seo'] });
    const lhr = r.lhr;
    if (lhr.runtimeError) return { ok: false, error: `${lhr.runtimeError.code}: ${lhr.runtimeError.message}`.slice(0, 300) };
    const a = lhr.audits;
    const num = (id) => a[id]?.numericValue ?? null;
    const auditorias = {};
    for (const id of AUDITORIAS) {
      const x = a[id];
      if (!x) continue;
      auditorias[id] = {
        titulo: x.title, score: x.score, modo: x.scoreDisplayMode, valor: x.displayValue,
        items: (x.details?.items || []).slice(0, 5).map(resumirItem),
      };
    }
    return {
      ok: true,
      version: lhr.lighthouseVersion,
      formFactor: lhr.configSettings.formFactor,
      urlFinal: lhr.finalDisplayedUrl,
      puntajes: { rendimiento: Math.round((lhr.categories.performance?.score ?? 0) * 100), seo: Math.round((lhr.categories.seo?.score ?? 0) * 100) },
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
