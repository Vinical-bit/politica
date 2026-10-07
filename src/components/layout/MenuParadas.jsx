import { useEffect, useRef } from 'react';
import { TRILHAS, PARADA_POR_ID } from '../../data/index.js';
import Icone from '../ilustracoes/Icones.jsx';

/** Painel com as 14 paradas agrupadas por trilha. Fecha com Esc, clique fora ou ao escolher. */
export default function MenuParadas({ aberto, onFechar, ativa, visitadas, irPara, botaoRef }) {
  const painelRef = useRef(null);

  useEffect(() => {
    if (!aberto) return undefined;
    const painel = painelRef.current;
    const focaveis = () => [...painel.querySelectorAll('a, button')];
    const atual = painel.querySelector('[aria-current="location"]') || focaveis()[0];
    atual?.focus({ preventScroll: true });
    const aoTeclar = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onFechar();
        botaoRef.current?.focus();
      } else if (e.key === 'Tab') {
        const lista = focaveis();
        const primeiro = lista[0];
        const ultimo = lista[lista.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    };
    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, [aberto, onFechar, botaoRef]);

  if (!aberto) return null;

  return (
    <div className="menu-paradas" onClick={onFechar}>
      <div
        className="menu-paradas__painel vidro"
        id="menu-paradas"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-paradas-titulo"
        ref={painelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu-paradas__topo">
          <h2 id="menu-paradas-titulo" className="menu-paradas__titulo">
            Paradas
          </h2>
          <button
            type="button"
            className="botao-icone"
            onClick={() => {
              onFechar();
              botaoRef.current?.focus();
            }}
            aria-label="Fechar lista de paradas"
          >
            <Icone nome="fechar" />
          </button>
        </div>
        {TRILHAS.map((t) => (
          <div key={t.id} className="menu-paradas__trilha">
            <h3 className="menu-paradas__trilha-titulo">
              Trilha {t.numero}: {t.titulo}
            </h3>
            <ol className="menu-paradas__lista">
              {t.paradas.map((id) => {
                const p = PARADA_POR_ID[id];
                const atual = ativa === id;
                const visitada = visitadas.has(id);
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`menu-paradas__link${atual ? ' is-atual' : ''}${visitada ? ' is-visitada' : ''}`}
                      aria-current={atual ? 'location' : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        onFechar();
                        irPara(id);
                      }}
                    >
                      <span className="menu-paradas__numero">{p.numero}</span>
                      <span className="menu-paradas__nome">{p.titulo}</span>
                      {visitada && (
                        <span className="menu-paradas__visitada">
                          <Icone nome="visto" tamanho={18} />
                          <span className="visualmente-oculto"> (visitada)</span>
                        </span>
                      )}
                      {atual && <span className="visualmente-oculto"> (você está aqui)</span>}
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
