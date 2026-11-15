#!/usr/bin/env node
// Prepara y mide un lote de sitios a partir del CSV de un formulario (nombre + liga del proyecto).
//   node scripts/lote.mjs <formulario.csv> [--solo-listar] [--forzar] [--sin-lighthouse]
// - Deduplica ligas repetidas (se mide una vez; la nota se copiará a cada participante que la envió).
// - Guarda quién envió cada liga en reportes/<sitio>-<fecha>/participantes.json.
// - Corre scripts/auditar.mjs de uno en uno (Lighthouse necesita el equipo libre) y se puede reanudar.
// - Si un sitio no abre, deja su fila en calificaciones.csv con la nota correspondiente.
// El avance queda en reportes/lote.json. Después, el agente principal califica cada sitio con sus especialistas.
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parsearCsv, guardarCalificacion, columnaCriterio } from './lib/calificaciones.mjs';
import { normalizarUrl, slugDe } from './lib/red.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rubrica = JSON.parse(fs.readFileSync(path.join(RAIZ, 'rubrica/rubrica.json'), 'utf8'));
const args = process.argv.slice(2);
const archivo = args.find((a) => !a.startsWith('--'));
if (!archivo) { console.error('Uso: node scripts/lote.mjs <formulario.csv> [--solo-listar] [--forzar] [--sin-lighthouse]'); process.exit(1); }
const soloListar = args.includes('--solo-listar');
const forzar = args.includes('--forzar');
const TOPE_MS = 8 * 60 * 1000; // límite duro por sitio

// ---- leer el formulario ----
const sinAcentos = (t) => String(t).normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const [cab, ...datos] = parsearCsv(fs.readFileSync(path.resolve(archivo), 'utf8'));
const cols = cab.map(sinAcentos);
const iNombre = cols.findIndex((c) => /nombre/.test(c));
const iUrl = cols.map((c, i) => (/url|liga|link|enlace/.test(c) ? i : -1)).filter((i) => i >= 0).pop() ?? cab.length - 1;

const fecha = new Date().toISOString().slice(0, 10);
const claveSitio = (u) => { const x = new URL(u); return `${x.hostname.replace(/^www\./, '').toLowerCase()}${x.pathname.replace(/\/+$/, '')}`; };

const sitios = new Map();
const invalidas = [];
for (const fila of datos) {
  const nombre = (iNombre >= 0 ? fila[iNombre] : '').trim();
  const bruta = (fila[iUrl] || '').trim().split(/[\s,;]+/)[0];
  if (!bruta) { invalidas.push({ nombre, motivo: 'sin liga' }); continue; }
  let url;
  try { url = normalizarUrl(bruta); if (!new URL(url).hostname.includes('.')) throw new Error('host'); } catch { invalidas.push({ nombre, motivo: `liga inválida: ${bruta.slice(0, 60)}` }); continue; }
  const k = claveSitio(url);
  if (!sitios.has(k)) sitios.set(k, { url, carpeta: `${slugDe(url)}-${fecha}`, participantes: [] });
  const s = sitios.get(k);
  if (nombre && !s.participantes.includes(nombre)) s.participantes.push(nombre);
}
const lista = [...sitios.values()];
console.log(`Envíos: ${datos.length} · ligas distintas: ${lista.length} · inválidas: ${invalidas.length}`);
if (soloListar) { lista.forEach((s, i) => console.log(`${String(i + 1).padStart(2)}. ${s.url}  (${s.participantes.length} envío(s))`)); process.exit(0); }

// ---- manifiesto de avance ----
const rutaManifiesto = path.join(RAIZ, 'reportes/lote.json');
const manifiesto = lista.map((s) => ({ url: s.url, carpeta: s.carpeta, envios: s.participantes.length, estado: 'pendiente' }));
const guardar = () => fs.writeFileSync(rutaManifiesto, JSON.stringify({ fecha, total: manifiesto.length, invalidas: invalidas.length, sitios: manifiesto }, null, 2));
guardar();

const filaSinEvaluar = (s, motivo) => ({
  fecha, sitio: new URL(s.url).hostname.replace(/^www\./, ''), url: s.url, seo: '', aeo: '', total: '', maximo_evaluado: 0, completo: 'no',
  ...Object.fromEntries(rubrica.criterios.map((c) => [columnaCriterio(c), ''])),
  sin_evaluar: 'todos', notas: motivo, lighthouse_rendimiento: '', reporte: '', carpeta: s.carpeta, generado_en: new Date().toISOString(),
});

function medir(s) {
  return new Promise((resolve) => {
    const dir = path.join(RAIZ, 'reportes', s.carpeta);
    fs.mkdirSync(dir, { recursive: true });
    const log = fs.openSync(path.join(dir, 'auditar.log'), 'w');
    const extra = args.includes('--sin-lighthouse') ? ['--sin-lighthouse'] : [];
    const hijo = spawn(process.execPath, [path.join(RAIZ, 'scripts/auditar.mjs'), s.url, '--salida', `reportes/${s.carpeta}`, ...extra], { cwd: RAIZ, stdio: ['ignore', log, log] });
    const t = setTimeout(() => hijo.kill('SIGKILL'), TOPE_MS);
    hijo.on('close', (codigo, senal) => { clearTimeout(t); fs.closeSync(log); resolve({ codigo, senal }); });
  });
}

const motivoDeLog = (carpeta) => {
  try {
    const t = fs.readFileSync(path.join(RAIZ, 'reportes', carpeta, 'auditar.log'), 'utf8');
    return (t.match(/✖[^\n]*/) || [''])[0].replace(/^✖\s*/, '').slice(0, 220);
  } catch { return ''; }
};

for (const [i, s] of lista.entries()) {
  const m = manifiesto[i];
  const dir = path.join(RAIZ, 'reportes', s.carpeta);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'participantes.json'), JSON.stringify({ url: s.url, participantes: s.participantes }, null, 2));

  if (!forzar && fs.existsSync(path.join(dir, 'evidencia/resumen.json'))) { m.estado = 'evidencia-lista'; guardar(); console.log(`[${i + 1}/${lista.length}] ya medido: ${s.url}`); continue; }

  m.estado = 'midiendo'; guardar();
  const t0 = Date.now();
  console.log(`[${i + 1}/${lista.length}] midiendo ${s.url} …`);
  const { codigo, senal } = await medir(s);
  m.segundos = Math.round((Date.now() - t0) / 1000);
  if (codigo === 0) { m.estado = 'evidencia-lista'; console.log(`   ✔ listo en ${m.segundos} s`); }
  else {
    const motivo = senal ? `Se agotó el tiempo de medición (${TOPE_MS / 60000} min)` : motivoDeLog(s.carpeta) || `auditar.mjs terminó con código ${codigo}`;
    m.estado = 'sin-acceso'; m.motivo = motivo;
    const filas = (s.participantes.length ? s.participantes : ['']).map((participante) => ({ ...filaSinEvaluar(s, `No se pudo medir el sitio: ${motivo}`), participante }));
    guardarCalificacion(path.join(RAIZ, 'calificaciones.csv'), rubrica, filas);
    console.log(`   ✖ no se pudo medir: ${motivo}`);
  }
  guardar();
}
const conteo = manifiesto.reduce((a, m) => ({ ...a, [m.estado]: (a[m.estado] || 0) + 1 }), {});
console.log(`\nLOTE TERMINADO: ${JSON.stringify(conteo)}`);
