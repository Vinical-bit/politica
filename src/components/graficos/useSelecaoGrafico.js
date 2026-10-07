import { useCallback, useState } from 'react';

/**
 * Estado comum dos gráficos de dados clicáveis:
 * - `previa`: item sob o mouse ou com foco (mostra o valor);
 * - `fixado`: item clicado/tocado (mostra valor, selo, ressalva e fonte).
 */
export function useSelecaoGrafico() {
  const [previa, setPrevia] = useState(null);
  const [fixado, setFixado] = useState(null);

  const alternar = useCallback((id) => setFixado((f) => (f === id ? null : id)), []);

  const propsItem = useCallback(
    (item, rotuloAcessivel) => ({
      role: 'button',
      tabIndex: 0,
      'aria-pressed': fixado === item.id,
      'aria-label': rotuloAcessivel,
      onClick: () => alternar(item.id),
      onKeyDown: (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          alternar(item.id);
        }
      },
      onMouseEnter: () => setPrevia(item.id),
      onMouseLeave: () => setPrevia((p) => (p === item.id ? null : p)),
      onFocus: () => setPrevia(item.id),
      onBlur: () => setPrevia((p) => (p === item.id ? null : p)),
    }),
    [fixado, alternar],
  );

  return { previa, fixado, setFixado, propsItem };
}
