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

/** Nombre de la columna de un criterio, legible en una hoja de cálculo: "SEO 1 Título de la página". */
export const columnaCriterio = (c) => `${c.area.toUpperCase()} ${c.numero} ${c.nombre}`;

/** Columnas del CSV, derivadas de la rúbrica para que sigan a `rubrica.json` si cambia. */
export function cabeceraCsv(rubrica) {
  return [
    'fecha', 'sitio', 'url', 'seo', 'aeo', 'total', 'maximo_evaluado', 'completo',
    ...rubrica.criterios.map(columnaCriterio),
    'sin_evaluar', 'lighthouse_rendimiento', 'reporte', 'carpeta', 'generado_en',
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

/** Crea el archivo solo con la cabecera si todavía no existe. */
export function crearSiNoExiste(ruta, rubrica) {
  if (fs.existsSync(ruta)) return false;
  escribirAtomico(ruta, serializar(cabeceraCsv(rubrica), []));
  return true;
}

/**
 * Agrega la fila, o la reemplaza si ya existe una con el mismo `carpeta`
 * (mismo sitio y misma fecha: volver a calificar no duplica). Conserva columnas viejas
 * si la rúbrica cambió, para no perder datos.
 */
export function guardarCalificacion(ruta, rubrica, fila) {
  const cabecera = cabeceraCsv(rubrica);
  const previo = leerExistente(ruta);
  const cabFinal = [...cabecera, ...previo.cabecera.filter((c) => !cabecera.includes(c))];
  const i = previo.filas.findIndex((f) => f.carpeta === fila.carpeta);
  if (i >= 0) previo.filas[i] = fila; else previo.filas.push(fila);
  escribirAtomico(ruta, serializar(cabFinal, previo.filas));
  return { accion: i >= 0 ? 'actualizada' : 'agregada', filas: previo.filas.length };
}
