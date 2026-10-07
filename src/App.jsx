import { useCallback, useEffect } from 'react';
import { PARADAS } from './data/index.js';
import { useSecaoAtiva } from './hooks/useSecaoAtiva.js';
import { useProgresso, useHashSincronizado } from './hooks/useProgresso.js';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion.js';
import Navbar from './components/layout/Navbar.jsx';
import Abertura from './components/layout/Abertura.jsx';
import Rodape from './components/layout/Rodape.jsx';
import Parada from './components/parada/Parada.jsx';

const IDS = PARADAS.map((p) => p.id);

export default function App() {
  const ativa = useSecaoAtiva(IDS);
  const { visitadas, ultima, marcarVisita } = useProgresso();
  const reduzir = usePrefersReducedMotion();

  useEffect(() => {
    marcarVisita(ativa);
  }, [ativa, marcarVisita]);

  useHashSincronizado(ativa);

  // Rola até uma parada (ou até a abertura), atualiza o hash e move o foco para o título.
  const irPara = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: reduzir ? 'auto' : 'smooth', block: 'start' });
      try {
        window.history.replaceState(null, '', id === 'inicio' ? window.location.pathname : `#${id}`);
      } catch {
        /* ignora */
      }
      const titulo = el.querySelector('h1, h2');
      if (titulo) {
        if (!titulo.hasAttribute('tabindex')) titulo.setAttribute('tabindex', '-1');
        titulo.focus({ preventScroll: true });
      }
    },
    [reduzir],
  );

  // Abrir o site com um hash (#p05-fome) leva direto à parada.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id && document.getElementById(id)) {
      const rolar = () => document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' });
      requestAnimationFrame(rolar);
      // As fontes chegam depois e mudam a altura do texto acima: rola de novo quando carregarem.
      document.fonts?.ready.then(() => requestAnimationFrame(rolar));
    }
  }, []);

  return (
    <>
      <div className="fundo-curvas" aria-hidden="true" />
      <a className="pular-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Navbar ativa={ativa} visitadas={visitadas} irPara={irPara} />
      <main id="conteudo">
        <Abertura ultima={ultima} irPara={irPara} />
        {PARADAS.map((p) => (
          <Parada key={p.id} parada={p} irPara={irPara} />
        ))}
      </main>
      <Rodape />
    </>
  );
}
