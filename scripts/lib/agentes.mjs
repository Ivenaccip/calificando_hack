// Lee al equipo de especialistas desde el repo: la rúbrica, la guía común y las reglas de cada agente
// (.claude/agents/<nombre>.md). Lo usan scripts/especialistas.mjs y scripts/build-artefacto.mjs, para que
// el pipeline, los subagentes y la página pública califiquen con las mismas reglas.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export const ESPECIALISTAS = {
  'auditor-seo-tecnico': { rol: 'el auditor de SEO técnico', titulo: 'SEO técnico' },
  'auditor-rendimiento-movil': { rol: 'el auditor de rendimiento y experiencia móvil', titulo: 'Rendimiento y móvil' },
  'auditor-contenido': { rol: 'el auditor de contenido', titulo: 'Contenido' },
  'auditor-aeo-tecnico': { rol: 'el auditor técnico de AEO', titulo: 'AEO técnico' },
  'auditor-confianza': { rol: 'el auditor de identidad y confianza', titulo: 'Identidad y confianza' },
};

/** Texto de una sección "## Título…" de un Markdown (hasta el siguiente "## "; las "###" quedan dentro). */
export function seccion(md, titulo) {
  const m = md.match(new RegExp(`^## ${titulo}[^\\n]*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm'));
  return m ? m[1].trim() : '';
}

/** Rúbrica, guía común y los cinco especialistas con sus reglas, su modelo y sus criterios. */
export function cargarEquipo() {
  const leer = (r) => fs.readFileSync(path.join(RAIZ, r), 'utf8');
  const rubrica = JSON.parse(leer('rubrica/rubrica.json'));
  const guia = leer('rubrica/guia-auditores.md');
  const agentes = {};
  for (const [nombre, base] of Object.entries(ESPECIALISTAS)) {
    const md = leer(`.claude/agents/${nombre}.md`);
    const criteriosMd = seccion(md, 'Tus criterios');
    if (!criteriosMd) throw new Error(`No encontré la sección "Tus criterios" en ${nombre}.md`);
    // Dentro de "Tus criterios", lo que sigue a "### Reglas de desempate" son los desempates propios del especialista.
    const [calibracion, desempate = ''] = criteriosMd.split(/^### Reglas de desempate[^\n]*\n/m).map((t) => t.trim());
    const encabezado = (md.match(/^---\n([\s\S]*?)\n---/) || [])[1] || '';
    agentes[nombre] = {
      ...base,
      calibracion,
      desempate,
      modelo: (encabezado.match(/^model:\s*(\S+)/m) || [])[1] || null,
      criterios: rubrica.criterios.filter((c) => c.agente === nombre).map((c) => c.id),
    };
  }
  // De la guía, los desempates comunes son solo la lista (sin el párrafo que la presenta).
  const desempateComun = seccion(guia, 'Reglas de desempate').split('\n').filter((l) => /^\s*-\s/.test(l)).join('\n');
  return { rubrica, guia: { calificar: seccion(guia, 'Cómo calificar'), seguridad: seccion(guia, 'Seguridad'), desempate: desempateComun }, agentes };
}

/** Bloque de desempates (comunes + los del especialista) que cierra las instrucciones de un especialista. */
export function bloqueDesempate(equipo, nombre) {
  return [equipo.guia.desempate, equipo.agentes[nombre].desempate].filter(Boolean).join('\n');
}
