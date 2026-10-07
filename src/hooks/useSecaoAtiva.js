import { useEffect, useState } from 'react';

/**
 * Detecta qual seção (parada) está no meio da tela usando IntersectionObserver.
 * Retorna o id da seção ativa, ou null antes da primeira parada.
 */
export function useSecaoAtiva(ids) {
  const [ativa, setAtiva] = useState(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const elementos = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const visiveis = new Map();

    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) visiveis.set(e.target.id, e.boundingClientRect.top);
          else visiveis.delete(e.target.id);
        }
        if (visiveis.size === 0) {
          // Acima da primeira parada (abertura) não há parada ativa.
          const primeira = elementos[0];
          if (primeira && primeira.getBoundingClientRect().top > window.innerHeight * 0.5) setAtiva(null);
          return;
        }
        // A ativa é a última (mais abaixo na ordem) que cruzou a faixa central.
        const ordem = ids.filter((id) => visiveis.has(id));
        setAtiva(ordem[ordem.length - 1]);
      },
      { rootMargin: '-45% 0px -54% 0px', threshold: 0 },
    );

    elementos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return ativa;
}
