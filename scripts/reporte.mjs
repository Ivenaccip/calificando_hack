#!/usr/bin/env node
// Une la evidencia del script con los puntajes de los agentes y arma el reporte final.
//   node scripts/reporte.mjs reportes/<sitio>-<fecha> [--csv ruta.csv]
// Además deja una fila en calificaciones.csv (historial; volver a calificar el mismo sitio y fecha la actualiza).
// Los totales se calculan aquí (no los calcula ningún modelo). Sale con código 3 si falta algún criterio.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { guardarCalificacion, columnaCriterio } from './lib/calificaciones.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const iCsv = argv.indexOf('--csv');
const rutaCsv = path.resolve(RAIZ, iCsv >= 0 ? argv[iCsv + 1] : 'calificaciones.csv');
const posicional = argv.find((a, i) => !a.startsWith('--') && argv[i - 1] !== '--csv');
const carpeta = posicional && path.resolve(RAIZ, posicional);
if (!carpeta || !fs.existsSync(path.join(carpeta, 'evidencia/resumen.json'))) {
  console.error('Uso: node scripts/reporte.mjs reportes/<sitio>-<fecha>   (primero corre scripts/auditar.mjs)');
  process.exit(1);
}
const leer = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
const rubrica = leer(path.join(RAIZ, 'rubrica/rubrica.json'));
const resumen = leer(path.join(carpeta, 'evidencia/resumen.json'));

// ---- puntajes de los agentes ----
const problemas = [];
const deAgente = {}; // id -> { ...entrada, _agente }
const dirPuntajes = path.join(carpeta, 'puntajes');
const archivos = fs.existsSync(dirPuntajes) ? fs.readdirSync(dirPuntajes).filter((f) => f.endsWith('.json')) : [];
for (const f of archivos.sort((a, b) => fs.statSync(path.join(dirPuntajes, a)).mtimeMs - fs.statSync(path.join(dirPuntajes, b)).mtimeMs)) {
  let j;
  try { j = leer(path.join(dirPuntajes, f)); } catch (e) { problemas.push(`puntajes/${f} no es JSON válido: ${e.message}`); continue; }
  const lista = j.criterios || {};
  for (const [id, e] of Object.entries(lista)) {
    if (!rubrica.criterios.some((c) => c.id === id)) { problemas.push(`puntajes/${f}: "${id}" no existe en la rúbrica`); continue; }
    if (![0, 1, 2].includes(e.puntaje)) { problemas.push(`puntajes/${f}: ${id} tiene puntaje inválido (${JSON.stringify(e.puntaje)}); debe ser 0, 1 o 2`); continue; }
    if (deAgente[id]) problemas.push(`${id} fue calificado por más de un agente; se usa el de ${j.agente || f}`);
    deAgente[id] = { ...e, _agente: j.agente || f.replace(/\.json$/, '') };
  }
}

// ---- combinar ----
const filas = rubrica.criterios.map((c) => {
  const script = leer(path.join(carpeta, `evidencia/criterios/${c.id}.json`));
  const ag = deAgente[c.id];
  const final = ag ? ag.puntaje : script.puntaje_script;
  const origen = ag ? (script.puntaje_script !== null && script.puntaje_script !== ag.puntaje ? 'agente (ajustó al script)' : 'agente') : script.puntaje_script !== null ? 'script' : null;
  if (ag && !String(ag.justificacion || '').trim()) problemas.push(`${c.id}: el agente no dejó justificación`);
  if (ag && ag.puntaje < 2 && !(ag.mejoras || []).length) problemas.push(`${c.id}: puntaje ${ag.puntaje} sin mejoras sugeridas`);
  return { ...c, script, ag, final, origen, puntajeScript: script.puntaje_script };
});

const faltantes = filas.filter((f) => f.final === null);
for (const f of faltantes) problemas.push(`${f.id} sin calificar (${f.script.origen === 'agente' ? `lo esperaba de ${f.agente}` : f.script.nota})`);

const suma = (area) => filas.filter((f) => f.area === area && f.final !== null).reduce((s, f) => s + f.final, 0);
const evaluados = (area) => filas.filter((f) => f.area === area && f.final !== null).length;
const tot = { seo: suma('seo'), aeo: suma('aeo') };
const maxEval = { seo: evaluados('seo') * 2, aeo: evaluados('aeo') * 2 };
const completo = faltantes.length === 0;

// ---- markdown ----
const barra = (n) => (n === null ? '·' : '■'.repeat(n) + '□'.repeat(2 - n));
const pctTxt = (n, m) => (m ? `${Math.round((n / m) * 100)}%` : '—');
const L = [];
L.push(`# Calificación SEO + AEO: ${resumen.urlFinal}`);
L.push('');
L.push(`> Rúbrica: ${rubrica.nombre}. Auditado el ${resumen.fecha}.${resumen.lighthouse ? ` Lighthouse móvil ${resumen.lighthouse.version}: rendimiento ${resumen.lighthouse.rendimiento}.` : ''}`);
L.push('');
L.push('## Resultado');
L.push('');
L.push('| Área | Puntos | Máximo | % |');
L.push('| --- | ---: | ---: | ---: |');
L.push(`| SEO | **${tot.seo}** | ${maxEval.seo}${maxEval.seo < 20 ? ' (de 20)' : ''} | ${pctTxt(tot.seo, maxEval.seo)} |`);
L.push(`| AEO | **${tot.aeo}** | ${maxEval.aeo}${maxEval.aeo < 20 ? ' (de 20)' : ''} | ${pctTxt(tot.aeo, maxEval.aeo)} |`);
L.push(`| **Total** | **${tot.seo + tot.aeo}** | ${maxEval.seo + maxEval.aeo}${completo ? '' : ' (de 40)'} | ${pctTxt(tot.seo + tot.aeo, maxEval.seo + maxEval.aeo)} |`);
if (!completo) L.push('', `⚠ **Calificación incompleta:** faltan ${faltantes.map((f) => f.id).join(', ')}. Los totales solo suman lo evaluado.`);
L.push('');

for (const area of ['seo', 'aeo']) {
  L.push(`## ${rubrica.areas[area].titulo}`);
  L.push('');
  L.push('| # | Criterio | Puntos | Cómo se revisa | Calificó |');
  L.push('| ---: | --- | :---: | --- | --- |');
  for (const f of filas.filter((x) => x.area === area)) L.push(`| ${f.numero} | ${f.nombre} | ${f.final === null ? 'n/e' : `${barra(f.final)} ${f.final}/2`} | ${f.como_se_revisa} | ${f.origen ?? '—'} |`);
  L.push('');
}

L.push('## Detalle por criterio');
for (const area of ['seo', 'aeo']) {
  L.push('', `### ${area.toUpperCase()}`);
  for (const f of filas.filter((x) => x.area === area)) {
    L.push('', `#### ${area.toUpperCase()} ${f.numero} · ${f.nombre}: ${f.final === null ? 'sin evaluar' : `${f.final}/2`}`);
    L.push(`*Vale 2 si:* ${f.vale_2_si}`);
    if (f.ag?.justificacion) L.push('', f.ag.justificacion);
    else if (f.script.checks?.length) { L.push(''); f.script.checks.forEach((c) => L.push(`- ${c.ok ? '✅' : '❌'} ${c.detalle}`)); }
    if (f.ag && f.puntajeScript !== null && f.puntajeScript !== f.ag.puntaje) L.push('', `*El script dio ${f.puntajeScript}/2; el agente lo ajustó a ${f.ag.puntaje}/2.${f.ag.ajuste_al_script ? ` ${f.ag.ajuste_al_script}` : ''}*`);
    if (f.ag?.evidencia?.length) { L.push('', '*Evidencia:*'); f.ag.evidencia.slice(0, 6).forEach((e) => L.push(`- ${e}`)); }
    if (f.ag?.mejoras?.length) { L.push('', '*Cómo mejorarlo:*'); f.ag.mejoras.forEach((m) => L.push(`- ${m}`)); }
    else if (f.final !== null && f.final < 2 && !f.ag) { const fallos = (f.script.checks || []).filter((c) => !c.ok); if (fallos.length) { L.push('', '*Falta:*'); fallos.forEach((c) => L.push(`- ${c.detalle}`)); } }
    if (f.script.nota && f.origen !== 'agente') L.push('', `*Nota:* ${f.script.nota}`);
    if (f.final === null) L.push('', '*No se pudo calificar.*');
  }
}

const mejorar = filas.filter((f) => f.final !== null && f.final < 2).sort((a, b) => a.final - b.final || (a.area === b.area ? a.numero - b.numero : a.area === 'seo' ? -1 : 1));
L.push('', '## Qué arreglar primero');
if (!mejorar.length) L.push('', 'Todo cumple. No hay pendientes.');
else {
  L.push('', 'Ordenado de lo que más puntos pierde (0) a lo que está a medias (1):', '');
  mejorar.forEach((f, i) => {
    const accion = f.ag?.mejoras?.[0] || (f.script.checks || []).find((c) => !c.ok)?.detalle || 'Revisar el detalle.';
    L.push(`${i + 1}. **${f.area.toUpperCase()} ${f.numero} · ${f.nombre}** (${f.final}/2): ${accion}`);
  });
}

const adv = [...(resumen.advertencias || []), ...problemas];
if (adv.length) { L.push('', '## Advertencias'); adv.forEach((a) => L.push(`- ${a}`)); }
L.push('', '## Cómo se calificó', '',
  'Cada criterio vale 0 (no cumple), 1 (cumple a medias) o 2 (cumple). Un script midió lo medible (HTML, robots.txt, sitemap, enlaces, JSON-LD, Lighthouse móvil, captura móvil); cinco agentes especialistas revisaron la evidencia, juzgaron lo que requiere criterio y propusieron mejoras. Los totales los suma código, no un modelo. Evidencia completa en `evidencia/`.',
  '', 'Limitaciones: Lighthouse es una sola medición y varía entre corridas y entre equipos; no se miden backlinks ni autoridad de dominio ni posición en Google.');
fs.writeFileSync(path.join(carpeta, 'reporte.md'), `${L.join('\n')}\n`);

fs.writeFileSync(path.join(carpeta, 'reporte.json'), JSON.stringify({
  url: resumen.urlFinal, fecha: resumen.fecha, completo, seo: tot.seo, aeo: tot.aeo, total: tot.seo + tot.aeo, maximoEvaluado: maxEval.seo + maxEval.aeo,
  criterios: filas.map((f) => ({ id: f.id, nombre: f.nombre, puntaje: f.final, puntajeScript: f.puntajeScript, origen: f.origen, justificacion: f.ag?.justificacion ?? null, mejoras: f.ag?.mejoras ?? [] })),
  advertencias: adv,
}, null, 2));

// ---- historial en CSV: una fila por sitio, con el puntaje de cada criterio ----
const archivoPart = path.join(carpeta, 'participantes.json'); // lo escribe scripts/lote.mjs
const participantes = fs.existsSync(archivoPart) ? (leer(archivoPart).participantes || []).filter(Boolean) : [];
const filaBase = {
  fecha: resumen.fecha,
  sitio: new URL(resumen.urlFinal).hostname.replace(/^www\./, ''),
  url: resumen.urlFinal,
  seo: tot.seo, aeo: tot.aeo, total: tot.seo + tot.aeo, maximo_evaluado: maxEval.seo + maxEval.aeo,
  completo: completo ? 'sí' : 'no',
  ...Object.fromEntries(filas.map((f) => [columnaCriterio(f), f.final ?? ''])),
  sin_evaluar: faltantes.map((f) => f.id).join(' '),
  notas: adv.join(' | ').slice(0, 400),
  lighthouse_rendimiento: resumen.lighthouse?.rendimiento ?? '',
  reporte: path.relative(RAIZ, path.join(carpeta, 'reporte.md')),
  carpeta: path.basename(carpeta),
  generado_en: new Date().toISOString(),
};
const csv = guardarCalificacion(rutaCsv, rubrica, (participantes.length ? participantes : ['']).map((participante) => ({ ...filaBase, participante })));

console.log(`SEO ${tot.seo}/${maxEval.seo}  ·  AEO ${tot.aeo}/${maxEval.aeo}  ·  TOTAL ${tot.seo + tot.aeo}/${maxEval.seo + maxEval.aeo}${completo ? '' : '  (INCOMPLETO)'}`);
if (problemas.length) { console.log('\nProblemas:'); problemas.forEach((p) => console.log(` - ${p}`)); }
console.log(`REPORTE=${path.relative(RAIZ, path.join(carpeta, 'reporte.md'))}`);
console.log(`CSV=${path.relative(RAIZ, rutaCsv)} (${csv.agregadas} fila(s) ${csv.accion}; ${csv.filas} en total)`);
process.exit(completo ? 0 : 3);
