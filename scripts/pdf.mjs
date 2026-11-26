#!/usr/bin/env node
// Genera el PDF de la calificación de un sitio a partir de reportes/<sitio>-<fecha>/reporte.json.
//   node scripts/pdf.mjs reportes/<sitio>-<fecha> [--para "Nombre"] [--salida ruta.pdf]
//   node scripts/pdf.mjs --todos                      (un PDF por cada reporte.json de reportes/)
// Usa el Chrome instalado (CHROME_PATH o el que encuentre chrome-launcher). Sin ningún modelo: solo da formato
// a lo que ya escribieron los especialistas, así que las cifras siempre coinciden con calificaciones.csv.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import { buscarChrome, banderasChrome } from './lib/navegador.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const valor = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };
const todos = args.includes('--todos');
const posicional = args.find((a, i) => !a.startsWith('--') && !['--para', '--salida'].includes(args[i - 1]));
const paraArg = valor('--para');
const salidaArg = valor('--salida');

if (!todos && !posicional) { console.error('Uso: node scripts/pdf.mjs reportes/<sitio>-<fecha> [--para "Nombre"] [--salida ruta.pdf]\n     node scripts/pdf.mjs --todos'); process.exit(1); }

const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ETQ = { 0: 'No cumple', 1: 'A medias', 2: 'Cumple' };
const dominio = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } };
const fechaLarga = (iso) => { try { return new Date(`${iso}T12:00:00`).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }); } catch { return iso; } };
const recorte = (t, max) => { const s = String(t || '').replace(/\s+/g, ' ').trim(); if (s.length <= max) return s; const c = s.slice(0, max); const f = Math.max(c.lastIndexOf('. '), c.lastIndexOf('; ')); return f > max * 0.5 ? c.slice(0, f + 1) : `${c.slice(0, c.lastIndexOf(' '))}…`; };
const pips = (n) => (n === null || n === undefined ? '<span class="pips ne">sin evaluar</span>' : `<span class="pips p${n}"><i></i><i></i></span>`);

function construirHtml(r, para) {
  const crit = r.criterios;
  const evaluados = crit.filter((c) => c.puntaje !== null);
  const porMejorar = evaluados.filter((c) => c.puntaje < 2).sort((a, b) => a.puntaje - b.puntaje || (a.area === b.area ? a.numero - b.numero : a.area === 'seo' ? -1 : 1));
  const cumple = evaluados.filter((c) => c.puntaje === 2);
  const sinEvaluar = crit.filter((c) => c.puntaje === null);
  const maxSeo = crit.filter((c) => c.area === 'seo' && c.puntaje !== null).length * 2;
  const maxAeo = crit.filter((c) => c.area === 'aeo' && c.puntaje !== null).length * 2;
  const etiqueta = (c) => `${c.area.toUpperCase()} ${c.numero}`;
  const quien = para || (r.participantes || []).join(' y ') || '';
  const lh = r.lighthouse;

  const barra = (n, max) => `<div class="barra"><div style="width:${max ? Math.round((n / max) * 100) : 0}%"></div></div>`;

  const primero = porMejorar.slice(0, 5).map((c, i) => {
    const accion = (c.mejoras && c.mejoras[0]) || recorte(c.justificacion, 200) || 'Revisa el detalle de este criterio.';
    return `<li><span class="n">${i + 1}</span><div><b>${esc(etiqueta(c))} · ${esc(c.nombre)}</b> <span class="pt p${c.puntaje}">${c.puntaje}/2</span><p>${esc(recorte(accion, 330))}</p></div></li>`;
  }).join('');

  const tabla = ['seo', 'aeo'].map((area) => `
    <div class="col"><h3>${area === 'seo' ? 'SEO · que Google te encuentre y te entienda' : 'AEO · que la IA te cite como respuesta'}</h3>
    <table>${crit.filter((c) => c.area === area).map((c) => `<tr><td class="num">${c.numero}</td><td>${esc(c.nombre)}</td><td class="r">${pips(c.puntaje)}</td></tr>`).join('')}</table></div>`).join('');

  const detalle = porMejorar.map((c) => `
    <section class="crit">
      <div class="crit-h"><div><span class="et">${esc(etiqueta(c))}</span><h4>${esc(c.nombre)}</h4></div><div class="crit-p p${c.puntaje}"><b>${c.puntaje}</b>/2<small>${ETQ[c.puntaje]}</small></div></div>
      <p class="vale"><b>Vale 2 si:</b> ${esc(c.valeDosSi)}</p>
      <p class="que"><b>Qué encontramos.</b> ${esc(c.justificacion || 'Sin detalle.')}</p>
      ${c.evidencia && c.evidencia.length ? `<ul class="ev">${c.evidencia.slice(0, 4).map((e) => `<li>${esc(recorte(e, 240))}</li>`).join('')}</ul>` : ''}
      ${c.mejoras && c.mejoras.length ? `<div class="como"><b>Cómo mejorarlo</b><ol>${c.mejoras.slice(0, 3).map((m) => `<li>${esc(m)}</li>`).join('')}</ol></div>` : ''}
      ${c.ajusteAlScript ? `<p class="aj">Ajuste de la revisión experta: ${esc(recorte(c.ajusteAlScript, 260))}</p>` : ''}
    </section>`).join('');

  const yaCumple = cumple.length ? `<ul class="cumple">${cumple.map((c) => `<li><b>${esc(etiqueta(c))} · ${esc(c.nombre)}.</b> ${esc(recorte(c.justificacion, 230))}</li>`).join('')}</ul>` : '<p class="mute">Todavía ningún criterio llega a 2.</p>';

  return `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><title>Calificación SEO + AEO · ${esc(dominio(r.url))}</title>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=DM+Sans:wght@400;500;700&display=block" rel="stylesheet">
<style>
  @page { size: A4; margin: 15mm 14mm 16mm; }
  :root { --tinta:#101426; --apagado:#5b6280; --linea:#dfe2ee; --fondo:#f5f6fb; --acento:#5a31d6; --d:"Bricolage Grotesque","Arial Narrow",system-ui,sans-serif; --c:"DM Sans",system-ui,"Segoe UI",sans-serif;
    --r0:#b42318; --r0f:#fdecea; --r1:#b45309; --r1f:#fef3dc; --r2:#067647; --r2f:#e4f6ec; }
  * { box-sizing:border-box; } html,body { margin:0; }
  body { font-family:var(--c); color:var(--tinta); font-size:10pt; line-height:1.45; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  h1,h2,h3,h4 { font-family:var(--d); margin:0; letter-spacing:-.01em; }
  .mute { color:var(--apagado); }
  header.portada { padding-bottom:14px; border-bottom:2px solid var(--tinta); margin-bottom:18px; }
  .eyebrow { font-size:8.5pt; letter-spacing:.14em; text-transform:uppercase; color:var(--acento); font-weight:700; margin:0 0 4px; }
  h1 { font-size:30pt; line-height:1; font-weight:800; word-break:break-word; }
  .meta { margin:8px 0 0; color:var(--apagado); font-size:9.5pt; }
  .para { margin-top:10px; padding:8px 12px; background:var(--fondo); border-left:3px solid var(--acento); border-radius:3px; }
  .marcador { display:grid; grid-template-columns:1fr 1fr 1.25fr; gap:12px; margin-bottom:18px; }
  .marcador .caja { border:1px solid var(--linea); border-radius:8px; padding:12px 14px; }
  .marcador .caja.total { background:var(--tinta); color:#fff; border-color:var(--tinta); }
  .marcador small { display:block; font-size:8pt; letter-spacing:.12em; text-transform:uppercase; opacity:.7; }
  .marcador .cifra { font-family:var(--d); font-weight:800; font-size:26pt; line-height:1.05; margin-top:2px; }
  .marcador .cifra span { font-size:12pt; font-weight:600; opacity:.6; }
  .barra { height:6px; border-radius:99px; background:var(--linea); margin-top:8px; overflow:hidden; } .barra div { height:100%; background:var(--acento); }
  .total .barra { background:rgba(255,255,255,.2); } .total .barra div { background:#fff; }
  .aviso { margin:0 0 14px; padding:8px 12px; background:var(--r1f); border-left:3px solid var(--r1); border-radius:3px; font-size:9pt; }
  h2 { font-size:14pt; font-weight:800; margin:20px 0 8px; padding-bottom:5px; border-bottom:1px solid var(--linea); break-after:avoid; page-break-after:avoid; }
  ol.primero { list-style:none; padding:0; margin:0; display:grid; gap:9px; }
  ol.primero li { display:grid; grid-template-columns:24px 1fr; gap:10px; break-inside:avoid; }
  ol.primero .n { width:24px; height:24px; border-radius:50%; background:var(--acento); color:#fff; font:700 9pt var(--d); display:grid; place-items:center; margin-top:1px; }
  ol.primero p { margin:2px 0 0; color:#262b45; }
  .pt { font-size:8.5pt; font-weight:700; padding:1px 7px; border-radius:99px; margin-left:4px; } .pt.p0 { background:var(--r0f); color:var(--r0); } .pt.p1 { background:var(--r1f); color:var(--r1); }
  .tabla { display:grid; grid-template-columns:1fr 1fr; gap:18px; break-inside:avoid; }
  .tabla h3 { font-size:9.5pt; margin-bottom:5px; color:var(--apagado); font-family:var(--c); font-weight:700; }
  table { width:100%; border-collapse:collapse; font-size:9pt; } td { padding:4px 0; border-bottom:1px solid var(--linea); } td.num { width:20px; color:var(--apagado); } td.r { text-align:right; white-space:nowrap; }
  .pips { display:inline-flex; gap:3px; align-items:center; } .pips i { width:14px; height:8px; border-radius:2px; background:var(--linea); }
  .pips.p0 i { background:var(--linea); } .pips.p1 i:first-child { background:var(--r1); } .pips.p2 i { background:var(--r2); } .pips.ne { font-size:8pt; color:var(--apagado); }
  .crit { border:1px solid var(--linea); border-radius:8px; padding:12px 14px; margin-bottom:10px; break-inside:avoid; }
  .crit-h { display:flex; justify-content:space-between; align-items:flex-start; gap:12px; }
  .crit .et { font-size:8pt; letter-spacing:.12em; font-weight:700; color:var(--apagado); } .crit h4 { font-size:12pt; font-weight:800; }
  .crit-p { text-align:center; padding:4px 10px; border-radius:8px; line-height:1.1; flex:none; } .crit-p b { font:800 16pt var(--d); } .crit-p small { display:block; font-size:7.5pt; }
  .crit-p.p0 { background:var(--r0f); color:var(--r0); } .crit-p.p1 { background:var(--r1f); color:var(--r1); }
  .crit p { margin:7px 0 0; } .vale { font-size:8.8pt; color:var(--apagado); }
  ul.ev { margin:6px 0 0; padding-left:16px; font-size:9pt; color:#383e5c; } ul.ev li { margin-bottom:2px; }
  .como { margin-top:8px; padding:8px 12px; background:var(--fondo); border-radius:6px; } .como ol { margin:4px 0 0; padding-left:18px; } .como li { margin-bottom:3px; }
  .aj { font-size:8.5pt; color:var(--apagado); font-style:italic; }
  ul.cumple { padding-left:16px; margin:0; font-size:9pt; } ul.cumple li { margin-bottom:5px; }
  .pie { margin-top:22px; padding-top:10px; border-top:1px solid var(--linea); font-size:8.5pt; color:var(--apagado); }
  .pie p { margin:0 0 5px; }
</style></head><body>
<header class="portada">
  <p class="eyebrow">Informe de calificación SEO + AEO · Hackathon Hostinger</p>
  <h1>${esc(dominio(r.url))}</h1>
  <p class="meta">${esc(r.url)} · auditado el ${esc(fechaLarga(r.fecha))}${lh && lh.rendimiento != null ? ` · Lighthouse móvil: rendimiento ${esc(lh.rendimiento)}` : ''}</p>
  ${quien ? `<div class="para">Preparado para <b>${esc(quien)}</b></div>` : ''}
</header>

<div class="marcador">
  <div class="caja"><small>SEO</small><div class="cifra">${r.seo}<span> / ${maxSeo}</span></div>${barra(r.seo, maxSeo)}</div>
  <div class="caja"><small>AEO</small><div class="cifra">${r.aeo}<span> / ${maxAeo}</span></div>${barra(r.aeo, maxAeo)}</div>
  <div class="caja total"><small>Total</small><div class="cifra">${r.total}<span> / ${r.maximoEvaluado}</span></div>${barra(r.total, r.maximoEvaluado)}</div>
</div>
${r.completo ? '' : `<p class="aviso"><b>Calificación incompleta.</b> No se pudieron evaluar: ${esc(sinEvaluar.map((c) => `${etiqueta(c)} · ${c.nombre}`).join('; '))}. Los totales suman solo lo evaluado.</p>`}

<h2>Lo primero que arreglaría</h2>
${porMejorar.length ? `<ol class="primero">${primero}</ol>` : '<p>Cumples todos los criterios evaluados. No hay pendientes.</p>'}

<h2>Tus 20 criterios de un vistazo</h2>
<div class="tabla">${tabla}</div>

${porMejorar.length ? `<h2>Para mejorar, con el detalle de cada punto</h2>${detalle}` : ''}

<h2>Lo que ya haces bien</h2>
${yaCumple}

<div class="pie">
  <p><b>Cómo se calificó.</b> Cada criterio vale 0 (no cumple), 1 (cumple a medias: algún parámetro está a medias) o 2 (cumple). Se midió lo medible de la página publicada (HTML, robots.txt, sitemap, enlaces, datos estructurados, Lighthouse móvil, captura móvil) y cinco especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo.</p>
  <p><b>Límites.</b> Se revisó la página principal, no las demás páginas del sitio. Lighthouse es una sola medición y varía entre corridas y equipos. No se miden backlinks, autoridad de dominio ni posición en Google.</p>
</div>
</body></html>`;
}

async function generar(carpeta, navegador) {
  const rj = path.join(carpeta, 'reporte.json');
  if (!fs.existsSync(rj)) { console.error(`✖ ${path.relative(RAIZ, carpeta)}: no hay reporte.json (corre scripts/reporte.mjs primero)`); return null; }
  const r = JSON.parse(fs.readFileSync(rj, 'utf8'));
  const pagina = await navegador.newPage();
  await pagina.setContent(construirHtml(r, paraArg), { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {});
  await pagina.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
  const salida = path.resolve(RAIZ, salidaArg || path.join(path.relative(RAIZ, carpeta), 'reporte.pdf'));
  fs.mkdirSync(path.dirname(salida), { recursive: true });
  await pagina.pdf({ path: salida, format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;font:8px sans-serif;color:#7a809c;padding:0 14mm;display:flex;justify-content:space-between"><span>${esc(dominio(r.url))} · SEO + AEO</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
    margin: { top: '15mm', bottom: '16mm', left: '14mm', right: '14mm' } });
  await pagina.close();
  return salida;
}

const exe = buscarChrome();
if (!exe) { console.error('No encontré Chrome. Instálalo o define CHROME_PATH.'); process.exit(1); }
const navegador = await chromium.launch({ executablePath: exe, headless: true, args: banderasChrome() });
let carpetas;
if (todos) carpetas = fs.readdirSync(path.join(RAIZ, 'reportes'), { withFileTypes: true }).filter((d) => d.isDirectory() && fs.existsSync(path.join(RAIZ, 'reportes', d.name, 'reporte.json'))).map((d) => path.join(RAIZ, 'reportes', d.name));
else carpetas = [path.resolve(RAIZ, posicional)];
let ok = 0;
for (const c of carpetas) { const s = await generar(c, navegador); if (s) { ok++; console.log(`✔ ${path.relative(RAIZ, s)} (${Math.round(fs.statSync(s).size / 1024)} KB)`); } }
await navegador.close();
console.log(`PDF listos: ${ok} de ${carpetas.length}`);
process.exit(ok === carpetas.length ? 0 : 3);
