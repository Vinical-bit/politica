import { memo, useState } from 'react';
import { usePodeHover, usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';
import RotuloIlustracao from './RotuloIlustracao.jsx';

/**
 * P10: gráfico curto × longo prazo (ilustração, sem escala).
 * Mouse: passar por cima mostra o longo prazo. Toque: alterna. Teclado: botões com aria-pressed.
 */
const MOEDAS = 4; // por cano
const QUEDA = 1.6; // segundos de cada queda

function CurtoLongoPrazo({ grafico }) {
  const [pausado, setPausado] = useState(false);
  const [modo, setModo] = useState('curto');
  const [hover, setHover] = useState(false);
  const [suspenso, setSuspenso] = useState(false);
  const podeHover = usePodeHover();
  const reduzir = usePrefersReducedMotion();
  const visao = hover && !suspenso ? 'longo' : modo;

  const escolher = (m) => {
    setModo(m);
    setHover(false);
    setSuspenso(true);
  };

  return (
    <figure className={`grafico grafico--curto-longo is-${visao}`}>
      <figcaption>
        <h3 className="grafico__titulo">{grafico.titulo}</h3>
      </figcaption>
      <RotuloIlustracao />

      <div className="alternador" role="group" aria-label="Escolher o prazo">
        <button type="button" className="alternador__botao" aria-pressed={modo === 'curto'} onClick={() => escolher('curto')}>
          Curto prazo
        </button>
        <button type="button" className="alternador__botao" aria-pressed={modo === 'longo'} onClick={() => escolher('longo')}>
          Longo prazo
        </button>
      </div>

      <div
        className="curto-longo__palco"
        onMouseEnter={() => podeHover && setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setSuspenso(false);
        }}
        onClick={() => {
          if (!podeHover) escolher(modo === 'curto' ? 'longo' : 'curto');
        }}
      >
        <svg viewBox="0 0 320 112" className={`curto-longo__topo${pausado ? ' is-pausado' : ''}`} aria-hidden="true">
          {/* Canos que despejam dinheiro na economia */}
          <path d="M8 10 L84 34" className="cano" />
          <path d="M312 10 L236 34" className="cano" />
          {[
            { x: 92, lado: 'e' },
            { x: 228, lado: 'd' },
          ].map(({ x, lado }) =>
            Array.from({ length: MOEDAS }, (_, i) => {
              // Com movimento reduzido, as moedas ficam paradas no meio da queda
              const y = reduzir ? 44 + (i % 2) * 12 : 38;
              const dx = reduzir ? (i % 2 ? 9 : -9) : 0;
              return (
                <g
                  key={`${lado}${i}`}
                  className={`moeda-fluxo${reduzir ? '' : ' is-animada'}`}
                  style={reduzir ? undefined : { animationDelay: `${(i * QUEDA) / MOEDAS + (lado === 'd' ? QUEDA / (2 * MOEDAS) : 0)}s` }}
                >
                  <g transform={`translate(${x + dx} ${y})`}>
                    <circle r="9" />
                    <text y="4" textAnchor="middle">
                      $
                    </text>
                  </g>
                </g>
              );
            }),
          )}
          <rect x="70" y="72" width="180" height="36" rx="8" className="caixa-economia" />
          <text x="160" y="95" textAnchor="middle" className="caixa-economia__texto">
            Economia
          </text>
        </svg>
        <p className="curto-longo__estado" aria-live="polite">
          {visao === 'curto' ? 'Curto prazo: segundo esse argumento, tudo parece melhorar.' : 'Longo prazo: segundo esse argumento, a conta chega.'}
        </p>
        <ul className="curto-longo__barras">
          {grafico.barras.map((b) => {
            const v = b[visao];
            return (
              <li key={b.id} className={`curto-longo__item curto-longo__item--${b.id}`}>
                <span className="visualmente-oculto">
                  {b.rotulo}: {v > b[visao === 'curto' ? 'longo' : 'curto'] ? 'mais alto' : 'mais baixo'} no {visao === 'curto' ? 'curto' : 'longo'} prazo.
                </span>
                <svg viewBox="0 0 40 100" className="curto-longo__svg curto-longo__svg--vertical" aria-hidden="true">
                  <rect x="4" y="2" width="32" height="96" rx="6" className="curto-longo__trilho" />
                  <rect x="4" y="2" width="32" height="96" rx="6" className="curto-longo__barra" style={{ transform: `scaleY(${v})` }} />
                </svg>
                <svg viewBox="0 0 100 24" className="curto-longo__svg curto-longo__svg--horizontal" aria-hidden="true" preserveAspectRatio="none">
                  <rect x="1" y="2" width="98" height="20" rx="5" className="curto-longo__trilho" />
                  <rect x="1" y="2" width="98" height="20" rx="5" className="curto-longo__barra curto-longo__barra--h" style={{ transform: `scaleX(${v})` }} />
                </svg>
                <span className="curto-longo__rotulo" aria-hidden="true">{b.rotulo}</span>
              </li>
            );
          })}
        </ul>
        {!reduzir && (
          <button type="button" className="tarifa__pausa curto-longo__pausa" aria-pressed={pausado} onClick={(e) => {
              e.stopPropagation();
              setPausado((v) => !v);
            }}
          >
            {pausado ? 'Continuar o fluxo' : 'Pausar o fluxo'}
          </button>
        )}
        {!podeHover && <p className="grafico__dica">Toque no gráfico para alternar.</p>}
      </div>
      <p className="grafico__nota">
        Barras sem escala: representam uma ideia, não números.
      </p>
    </figure>
  );
}

export default memo(CurtoLongoPrazo);
