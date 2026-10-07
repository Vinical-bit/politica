import { memo, useState } from 'react';
import { DesenhoIcone } from './Icones.jsx';
import RotuloIlustracao from '../graficos/RotuloIlustracao.jsx';

const L = 360;
const A = 332;
const C = { x: 180, y: 166 };

// Cenas sem personagens: 'familia' usa a casa.
const CENA_PARA_ICONE = { familia: 'casa' };

function quebrar(texto, max = 13) {
  const palavras = texto.split(' ');
  const linhas = [''];
  for (const p of palavras) {
    const atual = linhas[linhas.length - 1];
    if ((atual + ' ' + p).trim().length > max && atual) linhas.push(p);
    else linhas[linhas.length - 1] = (atual + ' ' + p).trim();
  }
  return linhas.slice(0, 2);
}

/**
 * Ilustração clicável da parada: um desenho central ligado a 4–8 partes.
 * Cada parte, ao ser tocada/clicada (ou Enter/Espaço), revela título e texto.
 * O contador de partes exploradas fica na Parada.
 */
function IlustracaoClicavel({ ilustracao, exploradas, onExplorar }) {
  const [aberta, setAberta] = useState(null);
  const { partes } = ilustracao;
  const n = partes.length;
  const rx = 128;
  const ry = 98;

  const abrir = (id) => {
    setAberta(id);
    onExplorar(id);
  };

  const parteAberta = partes.find((p) => p.id === aberta);
  const icoCena = CENA_PARA_ICONE[ilustracao.cena] ?? ilustracao.cena;

  return (
    <figure className="ilustracao">
      <figcaption className="ilustracao__titulo">{ilustracao.titulo}</figcaption>
      {ilustracao.argumento && <RotuloIlustracao />}
      <svg viewBox={`0 0 ${L} ${A}`} className="ilustracao__svg" role="group" aria-label={`${ilustracao.titulo}. ${ilustracao.descricao} ${n} partes para explorar.`}>
        {partes.map((p, i) => {
          const ang = -Math.PI / 2 + (2 * Math.PI * i) / n;
          const x = C.x + rx * Math.cos(ang);
          const y = C.y + ry * Math.sin(ang);
          return <line key={`l-${p.id}`} x1={C.x} y1={C.y} x2={x} y2={y} className="ilustracao__ligacao" />;
        })}

        <g className="ilustracao__cena" aria-hidden="true">
          <circle cx={C.x} cy={C.y} r="46" className="ilustracao__cena-fundo" />
          <g transform={`translate(${C.x - 30} ${C.y - 30}) scale(2.5)`} className="desenho ilustracao__traco">
            <DesenhoIcone nome={icoCena} />
          </g>
        </g>

        {partes.map((p, i) => {
          const ang = -Math.PI / 2 + (2 * Math.PI * i) / n;
          const x = C.x + rx * Math.cos(ang);
          const y = C.y + ry * Math.sin(ang);
          const ativa = aberta === p.id;
          const vista = exploradas.includes(p.id);
          const linhas = quebrar(p.rotulo ?? p.titulo);
          const embaixo = y >= C.y - 50;
          return (
            <g
              key={p.id}
              className={`parte${ativa ? ' is-ativa' : ''}${vista ? ' is-vista' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={ativa}
              aria-label={`${p.titulo}${vista ? ' (já explorada)' : ''}`}
              onClick={() => abrir(p.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  abrir(p.id);
                }
              }}
            >
              <circle cx={x} cy={y} r="34" className="parte__alvo" />
              <circle cx={x} cy={y} r="25" className="parte__fundo" />
              <g transform={`translate(${x - 14.4} ${y - 14.4}) scale(1.2)`} className="desenho ilustracao__traco" aria-hidden="true">
                <DesenhoIcone nome={p.icone} />
              </g>
              {vista && (
                <g transform={`translate(${x + 14} ${y - 26})`} className="parte__marca" aria-hidden="true">
                  <circle r="8" />
                  <path d="M-3.5 0.2l2.4 2.4L3.8-2.4" />
                </g>
              )}
              <text x={x} y={embaixo ? y + 44 : y - 36 - (linhas.length - 1) * 15} textAnchor="middle" className="parte__rotulo">
                {linhas.map((l, k) => (
                  <tspan key={k} x={x} dy={k ? 15 : 0}>
                    {l}
                  </tspan>
                ))}
              </text>
              <circle cx={x} cy={y} r="30" className="foco-anel" />
            </g>
          );
        })}
      </svg>

      <div className="ilustracao__painel" aria-live="polite">
        {parteAberta ? (
          <>
            <h4 className="ilustracao__parte-titulo">{parteAberta.titulo}</h4>
            <p>{parteAberta.texto}</p>
          </>
        ) : (
          <p className="ilustracao__dica">Toque ou clique em cada parte do desenho para descobrir o que ela significa.</p>
        )}
      </div>
    </figure>
  );
}

export default memo(IlustracaoClicavel);
