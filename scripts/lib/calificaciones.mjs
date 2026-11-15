// Historial de calificaciones en CSV: una fila por sitio auditado.
// Abre bien en Excel y Google Sheets (UTF-8 con BOM, separador coma).
import fs from 'node:fs';
import path from 'node:path';

const BOM = '﻿';

export function parsearCsv(texto) {
  const filas = [];
  let fila = [];
  let campo = '';
  let enComillas = false;
  const t = texto.replace(/^﻿/, '');
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (enComillas) {
      if (c === '"') { if (t[i + 1] === '"') { campo += '"'; i++; } else enComillas = false; } else campo += c;
    } else if (c === '"') enComillas = true;
    else if (c === ',') { fila.push(campo); campo = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && t[i + 1] === '\n') i++;
      fila.push(campo); campo = '';
      if (fila.length > 1 || fila[0] !== '') filas.push(fila);
      fila = [];
    } else campo += c;
  }
  if (campo !== '' || fila.length) { fila.push(campo); filas.push(fila); }
  return filas;
}

const celda = (v) => {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const serializar = (cabecera, filas) =>
  `${BOM}${[cabecera, ...filas.map((f) => cabecera.map((c) => f[c]))].map((r) => r.map(celda).join(',')).join('\n')}\n`;

// Calificaciones de Lighthouse (informativas: no suman a los 40 puntos de la rúbrica).
export const COLUMNAS_LIGHTHOUSE = [
  'lighthouse_rendimiento', 'lighthouse_accesibilidad', 'lighthouse_mejores_practicas', 'lighthouse_seo',
  'lighthouse_lcp_s', 'lighthouse_cls', 'lighthouse_tbt_ms', 'lighthouse_chrome', 'lighthouse_medido_en',
];

/**
 * Convierte un resultado de Lighthouse (forma plana: rendimiento, accesibilidad, mejoresPracticas, seo,
 * lcpMs, cls, tbtMs, chromeVersion, version) en las columnas del CSV. `origen` dice con qué Chrome se midió:
 * 'local' = el de la persona (más confiable), otro texto = el del entorno donde corrió la auditoría.
 */
export function columnasLighthouse(f, origen, corridas = 1) {
  if (!f) return {};
  const v = (x) => (x === null || x === undefined ? '' : x);
  return {
    lighthouse_rendimiento: v(f.rendimiento), lighthouse_accesibilidad: v(f.accesibilidad), lighthouse_mejores_practicas: v(f.mejoresPracticas), lighthouse_seo: v(f.seo),
    lighthouse_lcp_s: f.lcpMs == null ? '' : (f.lcpMs / 1000).toFixed(2),
    lighthouse_cls: f.cls == null ? '' : Number(f.cls).toFixed(3),
    lighthouse_tbt_ms: f.tbtMs == null ? '' : Math.round(f.tbtMs),
    lighthouse_chrome: `${origen} · Chrome ${f.chromeVersion || '?'} · Lighthouse ${f.version || '?'} · ${corridas > 1 ? `mediana de ${corridas} corridas` : '1 corrida'}`,
    lighthouse_medido_en: new Date().toISOString(),
  };
}

/** Nombre de la columna de un criterio, legible en una hoja de cálculo: "SEO 1 Título de la página". */
export const columnaCriterio = (c) => `${c.area.toUpperCase()} ${c.numero} ${c.nombre}`;

/** Columnas del CSV, derivadas de la rúbrica para que sigan a `rubrica.json` si cambia. */
export function cabeceraCsv(rubrica) {
  return [
    'fecha', 'participante', 'sitio', 'url', 'seo', 'aeo', 'total', 'maximo_evaluado', 'completo',
    ...rubrica.criterios.map(columnaCriterio),
    'sin_evaluar', 'notas', ...COLUMNAS_LIGHTHOUSE, 'reporte', 'carpeta', 'generado_en',
  ];
}

function leerExistente(ruta) {
  if (!fs.existsSync(ruta)) return { cabecera: [], filas: [] };
  const todo = parsearCsv(fs.readFileSync(ruta, 'utf8'));
  if (!todo.length) return { cabecera: [], filas: [] };
  const [cabecera, ...resto] = todo;
  return { cabecera, filas: resto.map((r) => Object.fromEntries(cabecera.map((c, i) => [c, r[i] ?? '']))) };
}

function escribirAtomico(ruta, contenido) {
  fs.mkdirSync(path.dirname(ruta), { recursive: true });
  const tmp = `${ruta}.tmp-${process.pid}`;
  fs.writeFileSync(tmp, contenido);
  fs.renameSync(tmp, ruta);
}

/** Filas actuales del CSV como objetos (vacío si no existe). */
export function leerFilas(ruta) { return leerExistente(ruta).filas; }

/**
 * Aplica `fn(fila)` a cada fila; si devuelve un objeto, sus claves se escriben en esa fila.
 * Conserva el resto de columnas y agrega las nuevas de la rúbrica si faltaban.
 */
export function actualizarFilas(ruta, rubrica, fn) {
  const cabecera = cabeceraCsv(rubrica);
  const previo = leerExistente(ruta);
  let tocadas = 0;
  for (const fila of previo.filas) { const cambios = fn(fila); if (cambios) { Object.assign(fila, cambios); tocadas++; } }
  escribirAtomico(ruta, serializar([...cabecera, ...previo.cabecera.filter((c) => !cabecera.includes(c))], previo.filas));
  return { filas: previo.filas.length, tocadas };
}

/** Crea el archivo solo con la cabecera si todavía no existe. */
export function crearSiNoExiste(ruta, rubrica) {
  if (fs.existsSync(ruta)) return false;
  escribirAtomico(ruta, serializar(cabeceraCsv(rubrica), []));
  return true;
}

/**
 * Guarda las filas de UN sitio (una por participante que envió esa liga). Si ya había filas de ese
 * mismo sitio y fecha (`carpeta`), las reemplaza en su lugar: volver a calificar no duplica.
 * Conserva columnas viejas si la rúbrica cambió, para no perder datos.
 */
export function guardarCalificacion(ruta, rubrica, nuevas) {
  const filasNuevas = [].concat(nuevas);
  const carpeta = filasNuevas[0].carpeta;
  const cabecera = cabeceraCsv(rubrica);
  const previo = leerExistente(ruta);
  const cabFinal = [...cabecera, ...previo.cabecera.filter((c) => !cabecera.includes(c))];
  const i = previo.filas.findIndex((f) => f.carpeta === carpeta);
  const resto = previo.filas.filter((f) => f.carpeta !== carpeta);
  resto.splice(i >= 0 ? i : resto.length, 0, ...filasNuevas);
  escribirAtomico(ruta, serializar(cabFinal, resto));
  return { accion: i >= 0 ? 'actualizada' : 'agregada', filas: resto.length, agregadas: filasNuevas.length };
}
