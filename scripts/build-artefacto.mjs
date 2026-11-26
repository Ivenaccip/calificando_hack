#!/usr/bin/env node
// Arma artefacto/index.html (la página pública "Califica tu sitio") a partir de artefacto/plantilla.html.
// Importa la rúbrica y las instrucciones de los 5 especialistas directamente del repo, para que la página y el
// pipeline completo califiquen con el mismo criterio. Corre esto después de cambiar rubrica/ o .claude/agents/.
//   node scripts/build-artefacto.mjs
import fs from 'node:fs';
import path from 'node:path';
import { RAIZ, cargarEquipo, bloqueDesempate } from './lib/agentes.mjs';

const equipo = cargarEquipo();
// En la página, las instrucciones de cada área cierran con sus reglas de desempate (comunes + propias), igual que en el pipeline.
const agentes = Object.fromEntries(Object.entries(equipo.agentes).map(([nombre, a]) => [nombre, {
  rol: a.rol, titulo: a.titulo, criterios: a.criterios,
  calibracion: `${a.calibracion}\n\n### Reglas de desempate (mandan sobre lo anterior si hay duda)\n${bloqueDesempate(equipo, nombre)}`,
}]));
const GUIAS = { comun: { calificar: equipo.guia.calificar, seguridad: equipo.guia.seguridad }, agentes };
const CRITERIOS = equipo.rubrica.criterios.map((c) => ({ id: c.id, area: c.area, numero: c.numero, nombre: c.nombre, vale: c.vale_2_si, como: c.como_se_revisa, agente: c.agente }));

const SEPARADORES = new RegExp(String.fromCharCode(91, 0x2028, 0x2029, 93), 'g'); // separadores de línea Unicode: rompen un literal JS
const json = (x) => JSON.stringify(x).replace(/</g, '\\u003c').replace(SEPARADORES, '');
let html = fs.readFileSync(path.join(RAIZ, 'artefacto/plantilla.html'), 'utf8');
for (const [marca, valor] of [['/*__GUIAS__*/{}', GUIAS], ['/*__CRITERIOS__*/[]', CRITERIOS]]) {
  if (!html.includes(marca)) throw new Error(`Falta la marca ${marca} en la plantilla`);
  html = html.replace(marca, () => json(valor));
}
fs.writeFileSync(path.join(RAIZ, 'artefacto/index.html'), html);
console.log(`✔ artefacto/index.html · ${(html.length / 1024).toFixed(0)} KB · ${CRITERIOS.length} criterios · ${Object.keys(agentes).length} agentes`);
