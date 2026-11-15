// Traduce una lista de verificaciones a la escala 0 / 1 / 2 de la rúbrica.
// La rúbrica solo define cuándo vale 2; aquí se fija una regla mecánica y transparente para el 1:
//   - cualquier verificación "bloqueante" que falle  -> 0
//   - todas pasan                                   -> 2
//   - pasa la mitad o más                           -> 1
//   - pasa menos de la mitad                        -> 0
// Las verificaciones marcadas { na: true } (no aplica) no cuentan: evitan "aprobar" por no haber nada que revisar.
export function puntuar(todos, { sinBloqueantes = false } = {}) {
  const checks = todos.filter((c) => !c.na);
  if (!checks.length) return null;
  if (!sinBloqueantes && checks.some((c) => c.bloqueante && !c.ok)) return 0;
  const ok = checks.filter((c) => c.ok).length;
  if (ok === checks.length) return 2;
  return ok / checks.length >= 0.5 ? 1 : 0;
}

export const check = (id, ok, detalle, extra = {}) => ({ id, ok: Boolean(ok), detalle, ...extra });
