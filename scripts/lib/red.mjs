import { setGlobalDispatcher, EnvHttpProxyAgent } from 'undici';
import { UA } from './config.mjs';

// Respeta HTTP(S)_PROXY / NO_PROXY si existen (útil en redes corporativas); si no, no hace nada.
// undici avisa que EnvHttpProxyAgent es experimental; es ruido para quien usa la herramienta.
const _emit = process.emitWarning;
process.emitWarning = (w, ...a) => (String(w?.message ?? w).includes('EnvHttpProxyAgent') ? undefined : _emit.call(process, w, ...a));
if (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) {
  setGlobalDispatcher(new EnvHttpProxyAgent());
}

/**
 * GET con timeout y redirecciones manuales (para registrar la cadena).
 * Nunca lanza: devuelve { ok:false, error } si falla la conexión.
 */
export async function obtener(url, { timeoutMs = 20000, metodo = 'GET', maxBytes = 3_000_000, headers = {} } = {}) {
  const cadena = [];
  let actual = url;
  try {
    for (let i = 0; i < 8; i++) {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), timeoutMs);
      let res;
      try {
        res = await fetch(actual, {
          method: metodo,
          redirect: 'manual',
          signal: ctrl.signal,
          headers: { 'user-agent': UA, accept: 'text/html,application/xhtml+xml,application/xml,text/plain;q=0.9,*/*;q=0.8', 'accept-language': 'es-MX,es;q=0.9,en;q=0.8', ...headers },
        });
      } finally {
        clearTimeout(t);
      }
      cadena.push({ url: actual, status: res.status });
      if ([301, 302, 303, 307, 308].includes(res.status) && res.headers.get('location')) {
        await res.body?.cancel().catch(() => {});
        actual = new URL(res.headers.get('location'), actual).href;
        continue;
      }
      let texto = '';
      if (metodo !== 'HEAD') {
        const buf = Buffer.from(await res.arrayBuffer());
        texto = buf.subarray(0, maxBytes).toString('utf8');
      }
      return {
        ok: true,
        status: res.status,
        urlFinal: actual,
        cadena,
        headers: Object.fromEntries(res.headers.entries()),
        texto,
      };
    }
    return { ok: false, error: 'Demasiadas redirecciones', cadena, urlFinal: actual };
  } catch (e) {
    return { ok: false, error: e.name === 'AbortError' ? `Timeout (${timeoutMs} ms)` : `${e.cause?.code || e.message}`, cadena, urlFinal: actual };
  }
}

export function normalizarUrl(entrada) {
  let s = String(entrada).trim().replace(/^<|>$/g, '');
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(s)) s = `https://${s}`;
  const u = new URL(s);
  u.hash = '';
  return u.href;
}

export function mismoSitio(a, b) {
  const h = (x) => new URL(x).hostname.replace(/^www\./, '');
  try { return h(a) === h(b); } catch { return false; }
}

export function slugDe(url) {
  const u = new URL(url);
  const ruta = u.pathname === '/' ? '' : u.pathname.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 40);
  const host = u.hostname.replace(/^www\./, '').replace(/[^a-z0-9.-]/gi, '');
  return ruta ? `${host}-${ruta}` : host;
}

/** GET sin leer el cuerpo: solo interesa el status final. Sigue redirecciones. */
export async function sondear(url, timeoutMs = 12000) {
  let actual = url;
  try {
    for (let i = 0; i < 6; i++) {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), timeoutMs);
      let res;
      try {
        res = await fetch(actual, { redirect: 'manual', signal: ctrl.signal, headers: { 'user-agent': UA, accept: 'text/html,*/*;q=0.8' } });
      } finally { clearTimeout(t); }
      await res.body?.cancel().catch(() => {});
      if ([301, 302, 303, 307, 308].includes(res.status) && res.headers.get('location')) { actual = new URL(res.headers.get('location'), actual).href; continue; }
      return { url, status: res.status, urlFinal: actual };
    }
    return { url, status: 0, error: 'Demasiadas redirecciones' };
  } catch (e) {
    return { url, status: 0, error: e.name === 'AbortError' ? 'timeout' : `${e.cause?.code || e.message}` };
  }
}

export async function enParalelo(items, fn, limite = 6) {
  const salida = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(limite, items.length) }, async () => {
    while (i < items.length) { const k = i++; salida[k] = await fn(items[k], k); }
  }));
  return salida;
}
