#!/usr/bin/env node
// Lee una solicitud de calificación para GitHub Actions y valida la liga antes de gastar en agentes.
//
// Origen de los datos:
//   - Ejecución manual (workflow_dispatch): variables SOLICITUD_URL y SOLICITUD_NOMBRE.
//   - Issue del formulario: el cuerpo del issue en GITHUB_EVENT_PATH ("### Liga de tu sitio", "### Tu nombre…").
//
// Escribe en GITHUB_OUTPUT (o en la consola, si se corre a mano):
//   ok=true|false · url · nombre · motivo · confiable=true|false · numero (del issue)
//
// La liga se rechaza si no es http(s), si apunta a una IP o a un dominio que resuelve a una red interna
// (para que nadie use el servidor de GitHub para asomarse a direcciones privadas).
import fs from 'node:fs';
import dns from 'node:dns/promises';
import net from 'node:net';
import { pathToFileURL } from 'node:url';

const salidas = {};
const poner = (k, v) => { salidas[k] = String(v ?? '').replace(/[\r\n]+/g, ' ').trim(); };

function limpiarNombre(t) {
  return String(t || '')
    .replace(/[\u0000-\u001f\u007f​-‏‪-‮⁦-⁩]/g, ' ')
    .replace(/[<>`*_#[\]|\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80);
}

// GitHub arma el cuerpo de un formulario como "### Etiqueta\n\nvalor\n\n### Otra etiqueta\n\nvalor".
export function leerFormulario(cuerpo) {
  const secciones = {};
  String(cuerpo || '').replace(/\r/g, '').split(/^###\s+/m).slice(1).forEach((s) => {
    const i = s.indexOf('\n');
    const etiqueta = (i < 0 ? s : s.slice(0, i)).trim();
    const valor = i < 0 ? '' : s.slice(i + 1).trim();
    secciones[etiqueta] = valor === '_No response_' ? '' : valor;
  });
  const buscar = (re) => { const k = Object.keys(secciones).find((x) => re.test(x)); return k ? secciones[k] : ''; };
  return { url: buscar(/liga|url/i), nombre: buscar(/nombre/i) };
}

export function ipInterna(ip) {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split('.').map(Number);
    return a === 0 || a === 10 || a === 127 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31)
      || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || (a === 198 && (b === 18 || b === 19)) || a >= 224;
  }
  const x = ip.toLowerCase();
  if (x.startsWith('::ffff:')) return ipInterna(x.slice(7));
  return x === '::' || x === '::1' || x.startsWith('fc') || x.startsWith('fd') || x.startsWith('fe8') || x.startsWith('fe9')
    || x.startsWith('fea') || x.startsWith('feb') || x.startsWith('ff');
}

export async function validarUrl(texto) {
  let t = String(texto || '').trim();
  const encontrada = t.match(/https?:\/\/[^\s<>()"'`]+/i);
  t = encontrada ? encontrada[0] : t.split(/\s+/)[0] || '';
  t = t.replace(/[.,;:!?]+$/, '');
  if (!t) return { ok: false, motivo: 'No escribiste ninguna liga.' };
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(t)) t = `https://${t}`;
  let u;
  try { u = new URL(t); } catch { return { ok: false, motivo: 'La liga no tiene un formato válido.' }; }
  if (!/^https?:$/.test(u.protocol)) return { ok: false, motivo: 'La liga debe empezar con http:// o https://.' };
  if (u.username || u.password) return { ok: false, motivo: 'La liga no puede llevar usuario ni contraseña.' };
  if (u.port && !['80', '443'].includes(u.port)) return { ok: false, motivo: 'Solo se revisan sitios en los puertos normales (80 o 443).' };
  const host = u.hostname.replace(/^\[|\]$/g, '').toLowerCase();
  if (net.isIP(host)) return { ok: false, motivo: 'Escribe el dominio del sitio, no una dirección IP.' };
  if (!host.includes('.') || /\.(local|localhost|internal|lan|home|corp|intranet)$/.test(host) || host === 'localhost') {
    return { ok: false, motivo: 'La liga debe ser un dominio público (por ejemplo tusitio.com).' };
  }
  let direcciones;
  try { direcciones = await dns.lookup(host, { all: true, verbatim: true }); } catch {
    return { ok: false, motivo: `No encontré el dominio ${host}. Revisa que esté bien escrito.` };
  }
  if (!direcciones.length || direcciones.some((d) => ipInterna(d.address))) {
    return { ok: false, motivo: `El dominio ${host} apunta a una red interna; solo se califican sitios públicos.` };
  }
  u.hash = '';
  return { ok: true, url: u.href };
}

async function principal() {
  const evento = process.env.GITHUB_EVENT_NAME || 'manual';
  let urlTexto = process.env.SOLICITUD_URL || '';
  let nombre = process.env.SOLICITUD_NOMBRE || '';
  let confiable = evento === 'workflow_dispatch' || evento === 'manual';

  if (evento === 'issues') {
    const ev = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
    const f = leerFormulario(ev.issue?.body);
    urlTexto = f.url;
    nombre = f.nombre;
    poner('numero', ev.issue?.number);
    // Confiable: lo abrió alguien con acceso al repo, o un organizador le puso la etiqueta "aprobado"
    // (solo quien tiene permiso de triage o más puede poner etiquetas).
    const delEquipo = ['OWNER', 'MEMBER', 'COLLABORATOR'].includes(ev.issue?.author_association);
    const aprobado = ev.action === 'labeled' && ev.label?.name === 'aprobado';
    confiable = delEquipo || aprobado;
  }

  const v = await validarUrl(urlTexto);
  poner('ok', v.ok);
  poner('url', v.ok ? v.url : '');
  poner('motivo', v.ok ? '' : v.motivo);
  poner('nombre', limpiarNombre(nombre));
  poner('confiable', confiable);

  const lineas = Object.entries(salidas).map(([k, val]) => `${k}=${val}`).join('\n') + '\n';
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, lineas);
  process.stdout.write(lineas);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  principal().catch((e) => { console.error(e); process.exit(1); });
}
