#!/usr/bin/env node
// Arma un reporte único con lo que falló en cada proyecto, a partir de calificaciones.csv y de cada reporte.json.
//   node scripts/resumen.mjs [--csv calificaciones.csv] [--salida reportes/resumen-por-participante.md]
// No usa ningún modelo: solo ordena y recorta lo que ya escribieron los agentes, así que coincide con el CSV.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { leerFilas } from './lib/calificaciones.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const valor = (f, d) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };
const rutaCsv = path.resolve(RAIZ, valor('--csv', 'calificaciones.csv'));
const salida = path.resolve(RAIZ, valor('--salida', 'reportes/resumen-por-participante.md'));

const recorte = (t, max = 330) => {
  const s = String(t || '').replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  const corte = s.slice(0, max);
  const fin = Math.max(corte.lastIndexOf('. '), corte.lastIndexOf('; '));
  return fin > max * 0.5 ? corte.slice(0, fin + 1) : `${corte.slice(0, corte.lastIndexOf(' '))}…`;
};

// ---- agrupar filas del CSV por sitio ----
const sitios = new Map();
for (const f of leerFilas(rutaCsv)) {
  if (!sitios.has(f.carpeta)) sitios.set(f.carpeta, { ...f, participantes: [] });
  const nombre = /^https?:\/\/|^[\w-]+\.[a-z]{2,}(\/|$)/i.test(f.participante.trim()) ? '(sin nombre: el formulario trae la liga en el campo nombre)' : f.participante.replace(/\s+/g, ' ').trim();
  const llave = (x) => x.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  const ps = sitios.get(f.carpeta).participantes;
  if (nombre && !ps.some((p) => llave(p) === llave(nombre))) ps.push(nombre);
}
const lista = [...sitios.values()].map((s) => {
  const rj = path.join(RAIZ, 'reportes', s.carpeta, 'reporte.json');
  const reporte = fs.existsSync(rj) ? JSON.parse(fs.readFileSync(rj, 'utf8')) : null;
  return { ...s, rutaReporte: s.reporte, reporte, total: Number(s.total) || 0, seo: Number(s.seo) || 0, aeo: Number(s.aeo) || 0 };
});
const completos = lista.filter((s) => s.completo === 'sí').sort((a, b) => b.total - a.total || b.seo - a.seo);
const incompletos = lista.filter((s) => s.completo !== 'sí');
const orden = [...completos, ...incompletos];

// ---- fallas más comunes ----
const conteo = new Map();
for (const s of orden) for (const c of s.reporte?.criterios || []) {
  if (c.puntaje === null) continue;
  const e = conteo.get(c.id) || { id: c.id, nombre: c.nombre, evaluados: 0, fallan: 0, ceros: 0 };
  e.evaluados++; if (c.puntaje < 2) e.fallan++; if (c.puntaje === 0) e.ceros++;
  conteo.set(c.id, e);
}
const etiqueta = (id) => id.replace('-', ' ').toUpperCase();

const L = [];
L.push('# Qué falló en cada proyecto', '');
L.push(`> Calificación con la rúbrica SEO + AEO del Hackathon Hostinger (40 puntos). ${completos.length} sitios completos y ${incompletos.length} incompletos. Generado de \`calificaciones.csv\` y de los reportes de cada sitio. Cada criterio vale 0, 1 o 2; aquí solo aparecen los que no llegaron a 2.`, '');

L.push('## Panorama', '');
L.push('| # | Participante(s) | Sitio | SEO | AEO | Total |', '| ---: | --- | --- | ---: | ---: | ---: |');
orden.forEach((s, i) => L.push(`| ${s.completo === 'sí' ? i + 1 : '—'} | ${s.participantes.join(' / ') || '—'} | ${s.sitio} | ${s.seo} | ${s.aeo} | ${s.completo === 'sí' ? `**${s.total}**` : `${s.total} (incompleto)`} |`));
L.push('');

L.push('## Lo que más se repite', '');
L.push('| Criterio | Sitios que no llegan a 2 | De ellos, con 0 |', '| --- | ---: | ---: |');
[...conteo.values()].filter((e) => e.fallan).sort((a, b) => b.fallan - a.fallan || b.ceros - a.ceros).slice(0, 10)
  .forEach((e) => L.push(`| ${etiqueta(e.id)} · ${e.nombre} | ${e.fallan} de ${e.evaluados} | ${e.ceros} |`));
L.push('');
const aeo6 = conteo.get('aeo-6');
if (aeo6?.ceros) L.push(`> **AEO 6 (acceso para bots de IA):** ${aeo6.ceros} sitios sacan 0 porque su \`robots.txt\` bloquea a GPTBot, ClaudeBot y Google-Extended. En casi todos las líneas \`Content-Signal\` indican que lo agrega una plataforma (parece Cloudflare), así que muchos participantes quizá no lo eligieron. Se aplicó la rúbrica al pie de la letra.`, '');

L.push('## Detalle por proyecto', '');
orden.forEach((s, i) => {
  const rep = s.reporte;
  L.push(`### ${s.completo === 'sí' ? `${i + 1}. ` : ''}${s.participantes.join(' / ') || s.sitio} · ${s.sitio} — ${s.total}/${s.completo === 'sí' ? 40 : `${s.maximo_evaluado} evaluados`}`);
  L.push(`${s.url} · SEO ${s.seo} · AEO ${s.aeo} · reporte completo: \`${s.rutaReporte || `reportes/${s.carpeta}/reporte.md`}\``);
  if (s.lighthouse_chrome?.startsWith('local')) L.push(`Lighthouse (Chrome local): rendimiento ${s.lighthouse_rendimiento} · accesibilidad ${s.lighthouse_accesibilidad} · mejores prácticas ${s.lighthouse_mejores_practicas} · SEO ${s.lighthouse_seo} · LCP ${s.lighthouse_lcp_s} s`);
  L.push('');
  if (!rep) { L.push('_No hay reporte detallado de este sitio._', ''); return; }
  if (s.completo !== 'sí') L.push(`⚠ **Calificación incompleta.** ${(s.notas || '').split(' | ').filter(Boolean).slice(0, 3).join(' · ') || 'Faltan criterios por evaluar.'}`, '');
  const fallas = rep.criterios.filter((c) => c.puntaje !== null && c.puntaje < 2).sort((a, b) => a.puntaje - b.puntaje);
  const sinEvaluar = rep.criterios.filter((c) => c.puntaje === null);
  if (!fallas.length && !sinEvaluar.length) L.push('Cumple todos los criterios. Sin pendientes.', '');
  for (const c of fallas) {
    L.push(`- **${etiqueta(c.id)} · ${c.nombre} — ${c.puntaje}/2.** ${recorte(c.justificacion) || 'Sin detalle.'}`);
    for (const m of (c.mejoras || []).slice(0, 2)) L.push(`  - *Cómo arreglarlo:* ${recorte(m, 300)}`);
  }
  if (sinEvaluar.length) L.push(`- **Sin evaluar:** ${sinEvaluar.map((c) => `${etiqueta(c.id)} · ${c.nombre}`).join('; ')}.`);
  L.push('');
});

L.push('---', '', '*Cada especialista revisó la página principal; no abrió las demás páginas del sitio. Lighthouse es una sola medición y varía entre corridas y equipos.*');
fs.mkdirSync(path.dirname(salida), { recursive: true });
fs.writeFileSync(salida, `${L.join('\n')}\n`);
console.log(`✔ ${path.relative(RAIZ, salida)} · ${orden.length} sitios · ${fs.statSync(salida).size} bytes`);
