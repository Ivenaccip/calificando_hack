#!/usr/bin/env node
// Vuelve a tomar SOLO las capturas móviles de un sitio ya medido (no toca Lighthouse ni los puntajes).
//   node scripts/recapturar.mjs reportes/<sitio>-<fecha>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderizar } from './lib/navegador.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const carpeta = process.argv[2] && path.resolve(RAIZ, process.argv[2]);
const rutaResumen = carpeta && path.join(carpeta, 'evidencia/resumen.json');
if (!rutaResumen || !fs.existsSync(rutaResumen)) { console.error('Uso: node scripts/recapturar.mjs reportes/<sitio>-<fecha>'); process.exit(1); }
const { urlFinal } = JSON.parse(fs.readFileSync(rutaResumen, 'utf8'));
const r = await renderizar(urlFinal, { carpetaCapturas: path.join(carpeta, 'evidencia') });
if (!r.ok) { console.error(`✖ No se pudo recapturar: ${r.error}`); process.exit(2); }
console.log(`✔ capturas actualizadas: ${Object.values(r.capturas).join(', ')}`);
