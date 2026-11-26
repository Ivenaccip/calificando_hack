#!/usr/bin/env node
// Arma artefacto/index.html (la página pública "Califica tu sitio") a partir de artefacto/plantilla.html.
// Importa la rúbrica y las instrucciones de los 5 especialistas directamente del repo, para que la página y el
// pipeline completo califiquen con el mismo criterio. Corre esto después de cambiar rubrica/ o .claude/agents/.
//   node scripts/build-artefacto.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const leer = (r) => fs.readFileSync(path.join(RAIZ, r), 'utf8');
const rubrica = JSON.parse(leer('rubrica/rubrica.json'));

const seccion = (md, titulo) => {
  const m = md.match(new RegExp(`^## ${titulo}[^\\n]*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm'));
  return m ? m[1].trim() : '';
};
const guia = leer('rubrica/guia-auditores.md');
const ROLES = {
  'auditor-seo-tecnico': 'el auditor de SEO técnico',
  'auditor-rendimiento-movil': 'el auditor de rendimiento y experiencia móvil',
  'auditor-contenido': 'el auditor de contenido',
  'auditor-aeo-tecnico': 'el auditor técnico de AEO',
  'auditor-confianza': 'el auditor de identidad y confianza',
};
const TITULOS = {
  'auditor-seo-tecnico': 'SEO técnico', 'auditor-rendimiento-movil': 'Rendimiento y móvil', 'auditor-contenido': 'Contenido',
  'auditor-aeo-tecnico': 'AEO técnico', 'auditor-confianza': 'Identidad y confianza',
};

const agentes = {};
for (const [nombre, rol] of Object.entries(ROLES)) {
  const md = leer(`.claude/agents/${nombre}.md`);
  const calibracion = seccion(md, 'Tus criterios');
  if (!calibracion) throw new Error(`No encontré la sección "Tus criterios" en ${nombre}.md`);
  agentes[nombre] = {
    rol, titulo: TITULOS[nombre], calibracion,
    criterios: rubrica.criterios.filter((c) => c.agente === nombre).map((c) => c.id),
  };
}
const GUIAS = { comun: { calificar: seccion(guia, 'Cómo calificar'), seguridad: seccion(guia, 'Seguridad') }, agentes };
const CRITERIOS = rubrica.criterios.map((c) => ({ id: c.id, area: c.area, numero: c.numero, nombre: c.nombre, vale: c.vale_2_si, como: c.como_se_revisa, agente: c.agente }));

const SEPARADORES = new RegExp(String.fromCharCode(91, 0x2028, 0x2029, 93), 'g'); // separadores de línea Unicode: rompen un literal JS
const json = (x) => JSON.stringify(x).replace(/</g, '\\u003c').replace(SEPARADORES, '');
let html = leer('artefacto/plantilla.html');
for (const [marca, valor] of [['/*__GUIAS__*/{}', GUIAS], ['/*__CRITERIOS__*/[]', CRITERIOS]]) {
  if (!html.includes(marca)) throw new Error(`Falta la marca ${marca} en la plantilla`);
  html = html.replace(marca, () => json(valor));
}
fs.writeFileSync(path.join(RAIZ, 'artefacto/index.html'), html);
console.log(`✔ artefacto/index.html · ${(html.length / 1024).toFixed(0)} KB · ${CRITERIOS.length} criterios · ${Object.keys(agentes).length} agentes`);
