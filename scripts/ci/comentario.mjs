#!/usr/bin/env node
// Arma el comentario de respuesta para el issue de una solicitud de calificación (Markdown).
//
// Variables: ESTADO (calificado | no-abre | error | invalida | en-espera), MOTIVO, CARPETA (con reporte.json),
// ARTEFACTO_URL (descarga del PDF), RUN_URL (la ejecución en Actions).
// Uso: node scripts/ci/comentario.mjs > comentario.md
//
// El texto de las mejoras lo escriben los agentes a partir del sitio, así que se escapa: sin ligas, imágenes,
// menciones ni HTML que alguien pudiera colar desde su página.
import fs from 'node:fs';
import path from 'node:path';

const E = process.env;
const escapar = (t) => String(t ?? '')
  .replace(/[\r\n]+/g, ' ')
  .replace(/([\\`*_[\]{}()<>#+!|~])/g, '\\$1')
  .replace(/@/g, '@​')
  .replace(/https?:\/\//gi, (m) => m.replace('//', '/​/'))
  .trim();
const recortar = (t, n) => (t.length > n ? `${t.slice(0, n - 1)}…` : t);
const pie = `\n\n<sub>Calificación automática con la rúbrica SEO + AEO del Hackathon Hostinger. ${E.RUN_URL ? `[Ver la ejecución](${E.RUN_URL})` : ''}</sub>`;

function calificado() {
  const r = JSON.parse(fs.readFileSync(path.join(E.CARPETA || '.', 'reporte.json'), 'utf8'));
  const max = r.maximoEvaluado ?? 40;
  const L = [];
  L.push(`### Resultado: SEO ${r.seo}/20 · AEO ${r.aeo}/20 · **Total ${r.total}/${max === 40 ? 40 : `${max} evaluados`}**`);
  L.push('', `Sitio: \`${String(r.url).replace(/`/g, '')}\``);
  if (!r.completo) {
    const sin = r.criterios.filter((c) => c.puntaje === null || c.puntaje === undefined).map((c) => `${c.area.toUpperCase()} ${c.numero}`);
    L.push('', `> Quedaron sin evaluar: ${sin.join(', ')}. Los totales suman solo lo evaluado.`);
  }
  if (E.ARTEFACTO_URL) L.push('', `📄 **[Descarga tu PDF y el reporte completo](${E.ARTEFACTO_URL})** (inicia sesión en GitHub; disponible 30 días).`);

  const pendientes = r.criterios.filter((c) => typeof c.puntaje === 'number' && c.puntaje < 2)
    .sort((a, b) => a.puntaje - b.puntaje || (a.area === b.area ? a.numero - b.numero : a.area === 'seo' ? -1 : 1));
  L.push('', '#### Lo primero que arreglaría');
  if (!pendientes.length) L.push('', 'Cumples todos los criterios evaluados. 🎉');
  pendientes.slice(0, 5).forEach((c, i) => {
    const mejora = (c.mejoras && c.mejoras[0]) || c.justificacion || '';
    L.push(`${i + 1}. **${c.area.toUpperCase()} ${c.numero} · ${escapar(c.nombre)}** (${c.puntaje}/2): ${recortar(escapar(mejora), 400)}`);
  });

  L.push('', '<details><summary>Los 20 criterios</summary>', '', '| Criterio | Puntos |', '| --- | :-: |');
  r.criterios.forEach((c) => {
    const p = typeof c.puntaje === 'number' ? `${c.puntaje}/2` : 'sin evaluar';
    L.push(`| ${c.area.toUpperCase()} ${c.numero} · ${escapar(c.nombre)} | ${p} |`);
  });
  L.push('', '</details>');
  return L.join('\n');
}

const mensajes = {
  calificado,
  'no-abre': () => `### No pude abrir el sitio\n\n${escapar(E.MOTIVO) || 'El sitio no respondió.'}\n\nRevisa que la liga funcione en un navegador y abre una solicitud nueva.`,
  invalida: () => `### No pude usar esa liga\n\n${escapar(E.MOTIVO)}\n\nAbre una solicitud nueva con la dirección completa de tu sitio (por ejemplo \`https://tusitio.com\`).`,
  'en-espera': () => '### ¡Recibido!\n\nTu solicitud está en la fila. Un organizador la aprobará en breve y aquí mismo te dejaré tu calificación y el PDF.',
  error: () => '### Algo falló al calificar tu sitio\n\nNo es por tu sitio: el proceso tuvo un error. Un organizador lo revisará y lo volverá a correr.',
};

const generar = mensajes[E.ESTADO] || mensajes.error;
process.stdout.write(`${generar()}${pie}\n`);
