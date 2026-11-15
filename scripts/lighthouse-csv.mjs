#!/usr/bin/env node
// Mide Lighthouse móvil con TU Chrome y agrega las calificaciones a calificaciones.csv.
//   node scripts/lighthouse-csv.mjs [calificaciones.csv] [--corridas 3] [--chrome "/ruta/a/chrome"] [--solo texto] [--forzar]
// Agrega: rendimiento, accesibilidad, mejores prácticas, SEO, LCP, CLS y TBT (informativas: no suman a los 40 puntos).
// Cierra otras aplicaciones pesadas mientras corre: Lighthouse mide el rendimiento de tu equipo y se altera si está ocupado.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { correrLighthouse } from './lib/lighthouse.mjs';
import { buscarChrome } from './lib/navegador.mjs';
import { leerFilas, actualizarFilas, columnasLighthouse } from './lib/calificaciones.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rubrica = JSON.parse(fs.readFileSync(path.join(RAIZ, 'rubrica/rubrica.json'), 'utf8'));
const args = process.argv.slice(2);
const valor = (flag) => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : undefined; };
const rutaCsv = path.resolve(RAIZ, args.find((a, i) => !a.startsWith('--') && !['--corridas', '--chrome', '--solo'].includes(args[i - 1])) || 'calificaciones.csv');
const corridas = Math.max(1, Number(valor('--corridas')) || 1);
const solo = valor('--solo');
const forzar = args.includes('--forzar');

if (!fs.existsSync(rutaCsv)) { console.error(`No existe ${path.relative(RAIZ, rutaCsv)}. Primero califica sitios.`); process.exit(1); }
const chrome = buscarChrome(valor('--chrome'));
if (!chrome) { console.error('No encontré Chrome. Instálalo, o indica su ruta con --chrome "/ruta/a/chrome" (o la variable CHROME_PATH).'); process.exit(1); }

const urls = [...new Set(leerFilas(rutaCsv).filter((f) => f.url && (forzar || !f.lighthouse_chrome?.startsWith('local')) && (!solo || f.url.includes(solo))).map((f) => f.url))];
console.log(`Chrome: ${chrome}\nCSV: ${path.relative(RAIZ, rutaCsv)} · sitios por medir: ${urls.length} · corridas por sitio: ${corridas}${corridas === 1 ? ' (usa --corridas 3 para una medición más estable)' : ''}\n`);
if (!urls.length) { console.log('Nada pendiente. Usa --forzar para volver a medir todo.'); process.exit(0); }

let ok = 0;
const fallidos = [];
for (const [i, url] of urls.entries()) {
  const t0 = Date.now();
  const r = await correrLighthouse(url, { corridas, chromePath: chrome });
  const seg = Math.round((Date.now() - t0) / 1000);
  if (!r.ok) { fallidos.push({ url, error: r.error }); console.log(`[${i + 1}/${urls.length}] ✖ ${url} · ${r.error} (${seg} s)`); continue; }
  const cols = columnasLighthouse({ ...r.puntajes, ...r.metricas, chromeVersion: r.chromeVersion, version: r.version }, 'local', r.corridas);
  actualizarFilas(rutaCsv, rubrica, (f) => (f.url === url ? cols : null)); // se guarda tras cada sitio: si se interrumpe, no se pierde nada
  ok++;
  console.log(`[${i + 1}/${urls.length}] ✔ ${url} · rend ${r.puntajes.rendimiento} · acc ${r.puntajes.accesibilidad} · mp ${r.puntajes.mejoresPracticas} · seo ${r.puntajes.seo} · LCP ${(r.metricas.lcpMs / 1000).toFixed(1)} s${r.corridas > 1 ? ` · corridas ${r.rendimientoPorCorrida.join('/')}` : ''} (${seg} s)`);
}
console.log(`\nListo: ${ok} medidos, ${fallidos.length} con error.${fallidos.length ? ' Vuelve a correr el mismo comando para reintentar solo los pendientes.' : ''}`);
process.exit(fallidos.length ? 3 : 0);
