import fs from 'node:fs';
import { chromium } from 'playwright-core';
import * as chromeLauncher from 'chrome-launcher';
import { VIEWPORT_MOVIL, UMBRALES } from './config.mjs';

const UA_MOVIL = 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36 CalificadorSEO-AEO/1.0';

export function buscarChrome() {
  for (const c of [process.env.CHROME_PATH, process.env.PUPPETEER_EXECUTABLE_PATH, process.env.CHROME_BIN]) {
    if (c && fs.existsSync(c)) return c;
  }
  try { const inst = chromeLauncher.Launcher.getInstallations(); if (inst.length) return inst[0]; } catch { /* sigue */ }
  try { const p = chromium.executablePath(); if (p && fs.existsSync(p)) return p; } catch { /* sigue */ }
  return null;
}

// Banderas de Chrome. Detrás de un proxy corporativo/sandbox que re-firma TLS hay que aceptar su certificado.
export function banderasChrome() {
  const b = ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'];
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  if (proxy && !process.env.CALIFICADOR_NO_PROXY_CHROME) b.push(`--proxy-server=${proxy}`, '--proxy-bypass-list=<-loopback>', '--ignore-certificate-errors');
  return b;
}

/**
 * Abre la página como un teléfono, espera a que cargue, la recorre (para disparar lazy-load),
 * y devuelve el HTML ya renderizado + métricas móviles + capturas.
 */
export async function renderizar(url, { carpetaCapturas, timeoutMs = 45000 } = {}) {
  const exe = buscarChrome();
  if (!exe) return { ok: false, error: 'No se encontró Chrome/Chromium. Instala Chrome o define CHROME_PATH.' };
  let browser;
  try {
    browser = await chromium.launch({ executablePath: exe, headless: true, args: banderasChrome() });
    const ctx = await browser.newContext({ viewport: VIEWPORT_MOVIL, deviceScaleFactor: 1, isMobile: true, hasTouch: true, userAgent: UA_MOVIL, locale: 'es-MX' });
    const page = await ctx.newPage();
    const pesos = [];
    page.on('response', (res) => {
      if (res.request().resourceType() !== 'image') return;
      pesos.push((async () => {
        const url = res.url();
        if (url.startsWith('data:')) return null;
        let bytes = Number(res.headers()['content-length']) || 0;
        if (!bytes) { try { bytes = (await res.body()).length; } catch { /* sin cuerpo */ } }
        return { url, bytes, tipo: res.headers()['content-type'] || '' };
      })());
    });
    const resp = await page.goto(url, { waitUntil: 'load', timeout: timeoutMs });
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await page.evaluate(async () => {
      const alto = () => document.documentElement.scrollHeight;
      for (let y = 0; y < Math.min(alto(), 12000); y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });
    const U = UMBRALES;
    const metricas = await page.evaluate(({ tapMin, fontMin }) => {
      const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && s.opacity !== '0'; };
      const desbordeX = document.documentElement.scrollWidth - window.innerWidth;
      const objetivos = [...document.querySelectorAll('a[href],button,input:not([type=hidden]),select,textarea,[role=button],summary')].filter(visible);
      const pequenos = objetivos.filter((el) => {
        const r = el.getBoundingClientRect();
        if (el.tagName === 'A' && getComputedStyle(el).display === 'inline' && el.closest('p,li,span,td')) return false; // enlace dentro de un texto: exento (WCAG 2.5.8)
        return r.width < tapMin || r.height < tapMin;
      });
      let chars = 0; let charsChicos = 0;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        const t = n.textContent.trim();
        if (!t || !n.parentElement || !visible(n.parentElement) || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(n.parentElement.tagName)) continue;
        const fs = parseFloat(getComputedStyle(n.parentElement).fontSize);
        chars += t.length; if (fs < fontMin) charsChicos += t.length;
      }
      const imagenes = [...document.images].map((i) => {
        const r = i.getBoundingClientRect();
        return { src: i.currentSrc || i.src, alt: i.getAttribute('alt'), role: i.getAttribute('role'), ariaHidden: i.getAttribute('aria-hidden'), ancho: Math.round(r.width), alto: Math.round(r.height), naturalAncho: i.naturalWidth, naturalAlto: i.naturalHeight, lazy: i.loading === 'lazy', visible: visible(i) };
      });
      return {
        desbordeHorizontalPx: desbordeX,
        viewportMeta: document.querySelector('meta[name=viewport]')?.getAttribute('content') || null,
        objetivosTactiles: { total: objetivos.length, pequenos: pequenos.length, ejemplos: pequenos.slice(0, 6).map((el) => ({ etiqueta: el.tagName.toLowerCase(), texto: (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 40), ancho: Math.round(el.getBoundingClientRect().width), alto: Math.round(el.getBoundingClientRect().height) })) },
        texto: { caracteres: chars, caracteresPequenos: charsChicos, proporcionPequena: chars ? charsChicos / chars : 0 },
        imagenes,
      };
    }, { tapMin: U.tapTargetMinPx, fontMin: U.textoLegibleMinPx });

    const capturas = {};
    if (carpetaCapturas) {
      fs.mkdirSync(carpetaCapturas, { recursive: true });
      await page.screenshot({ path: `${carpetaCapturas}/movil-arriba.png` });
      capturas.arriba = 'movil-arriba.png';
      const alto = await page.evaluate(() => document.documentElement.scrollHeight);
      if (alto > VIEWPORT_MOVIL.height * 1.3) {
        await page.screenshot({ path: `${carpetaCapturas}/movil-completa.png`, fullPage: true, clip: { x: 0, y: 0, width: VIEWPORT_MOVIL.width, height: Math.min(alto, 3000) } });
        capturas.completa = 'movil-completa.png';
      }
    }
    const html = await page.content();
    const pesosImg = (await Promise.all(pesos)).filter(Boolean);
    return {
      ok: true,
      status: resp?.status() ?? null,
      urlFinal: page.url(),
      headers: resp?.headers() ?? {},
      html, metricas, capturas, pesosImg,
    };
  } catch (e) {
    return { ok: false, error: e.message.split('\n')[0] };
  } finally {
    await browser?.close().catch(() => {});
  }
}
