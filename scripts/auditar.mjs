#!/usr/bin/env node
// Recolecta TODA la evidencia técnica de un sitio para calificarlo con la rúbrica SEO + AEO.
//   node scripts/auditar.mjs <url> [--salida carpeta] [--sin-lighthouse] [--sin-enlaces]
// Escribe en reportes/<sitio>-<fecha>/evidencia/ y deja listo el trabajo de los agentes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { obtener, normalizarUrl, slugDe } from './lib/red.mjs';
import { analizarHtml } from './lib/pagina.mjs';
import { renderizar } from './lib/navegador.mjs';
import { correrLighthouse } from './lib/lighthouse.mjs';
import { revisarRobots, revisarSitemap, revisarLlmsTxt, revisarEnlaces } from './lib/rastreo.mjs';
import { calcularCriterios } from './lib/criterios.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rubrica = JSON.parse(fs.readFileSync(path.join(RAIZ, 'rubrica/rubrica.json'), 'utf8'));

// ---- argumentos ----
const args = process.argv.slice(2);
const opc = { sinLighthouse: args.includes('--sin-lighthouse'), sinEnlaces: args.includes('--sin-enlaces') };
const iSalida = args.indexOf('--salida');
const salidaArg = iSalida >= 0 ? args[iSalida + 1] : null;
const entrada = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--salida');
if (!entrada) {
  console.error('Uso: node scripts/auditar.mjs <url> [--salida carpeta] [--sin-lighthouse] [--sin-enlaces]');
  process.exit(1);
}
let url;
try { url = normalizarUrl(entrada); } catch { console.error(`URL inválida: ${entrada}`); process.exit(1); }

const t0 = Date.now();
const log = (m) => console.error(`[${((Date.now() - t0) / 1000).toFixed(0).padStart(3)}s] ${m}`);
const fecha = new Date().toISOString().slice(0, 10);
const dir = path.resolve(RAIZ, salidaArg || `reportes/${slugDe(url)}-${fecha}`);
const rel = (p) => path.relative(RAIZ, p) || '.';
fs.rmSync(path.join(dir, 'evidencia'), { recursive: true, force: true });
fs.rmSync(path.join(dir, 'puntajes'), { recursive: true, force: true });
fs.rmSync(path.join(dir, 'reporte.md'), { force: true });
fs.rmSync(path.join(dir, 'reporte.json'), { force: true });
for (const d of ['evidencia/criterios', 'puntajes']) fs.mkdirSync(path.join(dir, d), { recursive: true });
const ev = (f) => path.join(dir, 'evidencia', f);
const advertencias = [];

// ---- 1. HTML crudo + página renderizada ----
log(`Auditando ${url}`);
log('1/5 Descargando el HTML inicial (como lo ve un bot que no ejecuta JavaScript)…');
const principal = await obtener(url);
if (!principal.ok) advertencias.push(`No se pudo descargar el HTML crudo: ${principal.error}. AEO 5 no será evaluable.`);
else if (principal.status >= 400) advertencias.push(`El servidor respondió ${principal.status} al cliente simple.`);

log('2/5 Abriendo la página en un teléfono virtual (Chrome móvil) y tomando capturas…');
const render = await renderizar(url, { carpetaCapturas: path.join(dir, 'evidencia') });
if (!render.ok) advertencias.push(`No se pudo renderizar la página: ${render.error}. Se usa solo el HTML crudo; faltarán métricas móviles.`);

if (!principal.ok && !render.ok) {
  console.error(`✖ No se pudo abrir el sitio. HTML crudo: ${principal.error}. Navegador: ${render.error}`);
  process.exit(2);
}
const urlFinal = render.ok ? render.urlFinal : principal.urlFinal;
const origen = new URL(urlFinal).origin;
if (render.ok && render.status >= 400) advertencias.push(`La página respondió ${render.status} en el navegador: se evalúa lo que haya, pero el sitio está roto.`);

const crudo = principal.ok && principal.texto ? analizarHtml(principal.texto, principal.urlFinal) : null;
const renderizado = render.ok ? analizarHtml(render.html, render.urlFinal) : null;
const pagina = renderizado ?? crudo;
if (!pagina) {
  console.error(`✖ El sitio respondió (HTTP ${principal.status ?? render.status ?? '?'}) pero no devolvió HTML que se pueda analizar.`);
  advertencias.forEach((a) => console.error(`  - ${a}`));
  process.exit(2);
}

// ---- 2. robots.txt, sitemap, llms.txt, enlaces ----
log('3/5 Revisando robots.txt, sitemap.xml y llms.txt…');
const robots = await revisarRobots(origen, urlFinal);
const [sitemap, llms] = await Promise.all([revisarSitemap(origen, robots.sitemaps, urlFinal), revisarLlmsTxt(origen)]);

let enlaces = { internosUnicos: 0, revisados: 0, rotos: [], sinVerificar: [] };
if (!opc.sinEnlaces) {
  log('4/5 Probando enlaces internos en busca de 404…');
  enlaces = await revisarEnlaces(pagina.enlaces, urlFinal);
} else log('4/5 (omitido) enlaces');

// Lighthouse al final y solo: si corre en paralelo con otras cosas, el CPU compartido altera la medición.
let lh = null;
if (!opc.sinLighthouse) {
  log('5/5 Corriendo Lighthouse móvil (puede tardar ~30–60 s)…');
  lh = await correrLighthouse(urlFinal);
  if (!lh.ok) advertencias.push(`Lighthouse falló: ${lh.error}. SEO 8 queda sin evaluar.`);
} else log('5/5 (omitido) Lighthouse');

// ---- 3. Criterios ----
const criterios = calcularCriterios({ url, urlFinal, origen, principal, crudo, pagina, render: render.ok ? render : null, robots, sitemap, llms, enlaces, lh });

for (const c of rubrica.criterios) {
  const r = criterios[c.id];
  fs.writeFileSync(path.join(ev(`criterios/${c.id}.json`)), JSON.stringify({
    id: c.id, area: c.area, nombre: c.nombre, vale_2_si: c.vale_2_si, como_se_revisa: c.como_se_revisa, agente_responsable: c.agente,
    puntaje_script: r.puntaje, ...r,
  }, null, 2));
}

const { bloques: _b, markdown, ...paginaSinBloques } = pagina;
fs.writeFileSync(ev('pagina.json'), JSON.stringify({
  ...paginaSinBloques,
  enlaces: pagina.enlaces.slice(0, 150),
  imagenes: pagina.imagenes.slice(0, 80),
  crudo: crudo ? { palabrasContenido: crudo.palabrasContenido, encabezados: crudo.encabezados.length, jsonld: crudo.jsonld.nodos.length } : null,
}, null, 2));

const TOPE = 50_000;
fs.writeFileSync(ev('texto.md'), [
  `# Contenido de ${urlFinal}`,
  `> Página renderizada en móvil. Las marcas \`<!-- región: ... -->\` indican si el texto está en el menú (nav), encabezado (header), contenido (main/cuerpo), pie (footer) o lateral (aside).`,
  `> Listas: "-" o "1."; tablas: filas con "|"; preguntas de acordeón/FAQ: "▸".`,
  '', markdown.length > TOPE ? `${markdown.slice(0, TOPE)}\n\n[… recortado: el texto original tiene ${markdown.length} caracteres]` : markdown,
].join('\n'));

if (lh) fs.writeFileSync(ev('lighthouse.json'), JSON.stringify(lh, null, 2));
fs.writeFileSync(ev('robots.txt'), robots.contenido ?? '(no existe robots.txt)');

const meta = {
  url, urlFinal, fecha, generadoEn: new Date().toISOString(), duracionSegundos: Math.round((Date.now() - t0) / 1000),
  statusHttp: render.ok ? render.status : principal.status, htmlCrudoDescargado: Boolean(crudo), paginaRenderizada: render.ok,
  lighthouse: lh?.ok ? { version: lh.version, ...lh.puntajes } : null, capturas: render.ok ? render.capturas : {}, advertencias,
};
fs.writeFileSync(ev('resumen.json'), JSON.stringify(meta, null, 2));

// ---- 4. Resumen para quien lo lea (el agente principal) ----
const auto = rubrica.criterios.filter((c) => criterios[c.id].puntaje !== null);
const pend = rubrica.criterios.filter((c) => criterios[c.id].puntaje === null);
console.log(`\n✔ Evidencia lista en ${rel(dir)}/evidencia (${meta.duracionSegundos} s)`);
console.log(`  URL final: ${urlFinal}  ·  HTTP ${meta.statusHttp}  ·  ${pagina.palabrasContenido} palabras de contenido`);
if (lh?.ok) console.log(`  Lighthouse móvil: rendimiento ${lh.puntajes.rendimiento}, LCP ${(lh.metricas.lcpMs / 1000).toFixed(2)} s, CLS ${lh.metricas.cls.toFixed(3)}`);
console.log(`\n  Puntaje preliminar del script (los agentes lo revisan):`);
for (const c of auto) console.log(`   ${c.id.padEnd(7)} ${criterios[c.id].puntaje}/2  ${c.nombre}`);
console.log(`\n  Sin puntaje del script (los califica un agente):`);
for (const c of pend) console.log(`   ${c.id.padEnd(7)} ${c.nombre}  → ${c.agente}`);
if (advertencias.length) { console.log('\n  ⚠ Advertencias:'); advertencias.forEach((a) => console.log(`   - ${a}`)); }
console.log(`\nSALIDA=${rel(dir)}`);
