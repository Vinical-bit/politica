import { memo } from 'react';
import { SELOS } from '../../data/selos.js';
import { DesenhoIcone } from '../ilustracoes/Icones.jsx';
import { useSelecaoGrafico } from './useSelecaoGrafico.js';
import DetalheGrafico from './DetalheGrafico.jsx';

const ALTURA = 200;
const TOPO = 16;
const BASE_ROTULOS = 52;
const minimo0 = (itens) => itens.some((i) => i.numero < 0);

/** Barras de dados. Cada barra é focável e clicável. Aceita valores negativos. */
function BarrasClicaveis({ grafico }) {
  const { itens } = grafico;
  const { previa, fixado, setFixado, propsItem } = useSelecaoGrafico();

  const passo = 64;
  const margem = minimo0(itens) ? 40 : 8;
  const largura = Math.max(320, itens.length * passo + margem + 8);
  const maximo = Math.max(0, ...itens.map((i) => i.numero));
  const minimo = Math.min(0, ...itens.map((i) => i.numero));
  const faixa = maximo - minimo || 1;
  const area = ALTURA - TOPO;
  const y = (v) => TOPO + ((maximo - v) / faixa) * area;
  const zero = y(0);
  const larguraBarra = Math.min(40, passo * 0.62);
  const altoTotal = ALTURA + BASE_ROTULOS;

  return (
    <figure className="grafico grafico--barras">
      <figcaption>
        <h3 className="grafico__titulo">{grafico.titulo}</h3>
      </figcaption>
      <svg
        viewBox={`0 0 ${largura} ${altoTotal}`}
        className="grafico__svg"
        role="group"
        aria-label={`${grafico.titulo}. ${grafico.descricao}`}
      >
        <line x1={minimo < 0 ? 34 : 0} x2={largura} y1={zero} y2={zero} className="grafico__base" />
        {minimo < 0 && (
          <text x="0" y={zero + 4} className="grafico__eixo-texto">
            zero
          </text>
        )}
        {itens.map((item, i) => {
          const cx = margem + passo * i + passo / 2;
          const topoBarra = Math.min(y(item.numero), zero);
          const altura = Math.max(Math.abs(y(item.numero) - zero), item.numero === 0 ? 0 : 2);
          const ativo = previa === item.id || fixado === item.id;
          const selo = SELOS[item.selo];
          const rotuloAcessivel = `${item.rotulo}: ${item.valor}.${selo.interno ? '' : ` ${selo.rotulo}.`}`;
          return (
            <g
              key={item.id}
              className={`barra${ativo ? ' is-ativa' : ''}${fixado === item.id ? ' is-fixada' : ''}${item.numero < 0 ? ' barra--negativa' : ''}`}
              {...propsItem(item, rotuloAcessivel)}
            >
              {/* área de toque maior que a barra */}
              <rect x={cx - passo / 2 + 2} y={0} width={passo - 4} height={altoTotal} className="barra__alvo" rx="8" />
              <rect
                x={cx - larguraBarra / 2}
                y={topoBarra}
                width={larguraBarra}
                height={altura}
                rx="6"
                className="barra__ret"
                style={{ transformOrigin: `${cx}px ${zero}px` }}
              />
              {item.numero === 0 && <circle cx={cx} cy={zero} r="4" className="barra__zero" />}
              {ativo && (
                <text x={cx} y={item.numero < 0 ? zero - 6 : topoBarra - 6} className="barra__valor" textAnchor="middle">
                  {item.valor}
                </text>
              )}
              <text x={cx} y={ALTURA + 20} className="barra__rotulo" textAnchor="middle">
                {item.curto}
              </text>
              {selo.icone && (
                <g transform={`translate(${cx - 8} ${ALTURA + 28}) scale(0.6667)`} className={`desenho barra__selo`} aria-hidden="true">
                <DesenhoIcone nome={selo.icone} />
              </g>
              )}
              <rect x={cx - passo / 2 + 4} y={2} width={passo - 8} height={altoTotal - 4} rx="8" className="foco-anel" />
            </g>
          );
        })}
      </svg>
      {grafico.nota && <p className="grafico__nota">{grafico.nota}</p>}
      <DetalheGrafico itens={itens} previa={previa} fixado={fixado} onFechar={() => setFixado(null)} />
    </figure>
  );
}

export default memo(BarrasClicaveis);
