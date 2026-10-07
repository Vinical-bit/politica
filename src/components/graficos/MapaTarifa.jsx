import { memo, useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';
import RotuloIlustracao from './RotuloIlustracao.jsx';

const PONTOS = {
  eua: { x: 70, y: 62, nome: 'EUA' },
  china: { x: 292, y: 78, nome: 'China' },
  brasil: { x: 112, y: 172, nome: 'Brasil' },
};

const ROTAS = {
  antes: { de: 'eua', para: 'china', ctrl: { x: 180, y: 6 }, texto: 'Antes da tarifa: a China compra dos EUA.' },
  depois: { de: 'brasil', para: 'china', ctrl: { x: 230, y: 200 }, texto: 'Depois da tarifa: a China passa a comprar do Brasil.' },
};

function pontoBezier(a, c, b, t) {
  const u = 1 - t;
  return { x: u * u * a.x + 2 * u * t * c.x + t * t * b.x, y: u * u * a.y + 2 * u * t * c.y + t * t * b.y };
}

/** P11: esquema antes/depois da tarifa, com três pontos e um fluxo contínuo de moedas (ilustração). */
function MapaTarifa({ grafico }) {
  const [estado, setEstado] = useState('antes');
  const reduzir = usePrefersReducedMotion();
  const rota = ROTAS[estado];
  const a = PONTOS[rota.de];
  const b = PONTOS[rota.para];
  const caminho = `M${a.x} ${a.y} Q${rota.ctrl.x} ${rota.ctrl.y} ${b.x} ${b.y}`;
  const n = 6;
  const svgRef = useRef(null);

  const [pausado, setPausado] = useState(false);
  const DUR = 2.4; // segundos para uma moeda fazer a rota inteira

  // Fluxo contínuo de moedas, com botão de pausa (WCAG 2.2.2: movimento que dura mais de 5 s pode ser pausado)
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || typeof svg.pauseAnimations !== 'function') return;
    if (pausado) svg.pauseAnimations();
    else svg.unpauseAnimations();
  }, [pausado, estado]);

  return (
    <figure className="grafico grafico--tarifa">
      <figcaption>
        <h3 className="grafico__titulo">{grafico.titulo}</h3>
      </figcaption>
      <RotuloIlustracao />
      <div className="alternador" role="group" aria-label="Escolher o momento">
        <button type="button" className="alternador__botao" aria-pressed={estado === 'antes'} onClick={() => setEstado('antes')}>
          Antes da tarifa
        </button>
        <button type="button" className="alternador__botao" aria-pressed={estado === 'depois'} onClick={() => setEstado('depois')}>
          Depois da tarifa
        </button>
      </div>
      <svg ref={svgRef} viewBox="0 0 360 220" className="grafico__svg tarifa__svg" role="img" aria-label={`Esquema com EUA, China e Brasil. ${rota.texto}`}>
        <path d={caminho} className="tarifa__rota" key={`r-${estado}`} />
        {Array.from({ length: n }).map((_, i) => {
          if (reduzir) {
            const p = pontoBezier(a, rota.ctrl, b, (i + 1) / (n + 1));
            return (
              <g key={`${estado}-${i}`} transform={`translate(${p.x} ${p.y})`} className="tarifa__moeda">
                <circle r="9" />
                <text y="4" textAnchor="middle">$</text>
              </g>
            );
          }
          // Fluxo: as moedas seguem a rota sem parar, igualmente espaçadas no tempo.
          const inicio = `${(-(i * DUR) / n).toFixed(2)}s`;
          return (
            <g key={`${estado}-${i}`} className="tarifa__moeda" opacity="0">
              <circle r="9" />
              <text y="4" textAnchor="middle">$</text>
              <animateMotion dur={`${DUR}s`} begin={inicio} repeatCount="indefinite" path={caminho} />
              <animate attributeName="opacity" dur={`${DUR}s`} begin={inicio} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.12;0.85;1" />
            </g>
          );
        })}
        {Object.entries(PONTOS).map(([id, p]) => {
          const ativo = id === rota.de || id === rota.para;
          return (
            <g key={id} className={`tarifa__ponto${ativo ? ' is-ativo' : ''}`} transform={`translate(${p.x} ${p.y})`}>
              <circle r="16" />
              <circle r="5" className="tarifa__miolo" />
              <text y={id === 'brasil' ? 36 : -24} textAnchor="middle" className="tarifa__nome">
                {p.nome}
              </text>
            </g>
          );
        })}
      </svg>
      {!reduzir && (
        <button type="button" className="tarifa__pausa" aria-pressed={pausado} onClick={() => setPausado((v) => !v)}>
          {pausado ? 'Continuar o fluxo' : 'Pausar o fluxo'}
        </button>
      )}
      <p className="tarifa__legenda" aria-live="polite">
        {rota.texto}
      </p>
      <p className="grafico__nota">
        Esquema simplificado, sem escala nem valores.
      </p>
    </figure>
  );
}

export default memo(MapaTarifa);
