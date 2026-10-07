import { memo, useId } from 'react';
import { SELOS } from '../../data/selos.js';
import { DesenhoIcone } from '../ilustracoes/Icones.jsx';
import { useSelecaoGrafico } from './useSelecaoGrafico.js';
import DetalheGrafico from './DetalheGrafico.jsx';

const L = 360;
const A = 220;
const M = { esq: 20, dir: 20, topo: 28, base: 56 };

function interpolar(trajeto, mes) {
  for (let i = 0; i < trajeto.length - 1; i++) {
    const a = trajeto[i];
    const b = trajeto[i + 1];
    if (mes >= a.mes && mes <= b.mes) {
      const t = b.mes === a.mes ? 0 : (mes - a.mes) / (b.mes - a.mes);
      return a.numero + (b.numero - a.numero) * t;
    }
  }
  return trajeto[trajeto.length - 1].numero;
}

/**
 * Linha com pontos-chave clicáveis.
 * - Sem `trajeto`: pontos igualmente espaçados, ligados em ordem.
 * - Com `trajeto` (Selic): a linha segue o trajeto (aproximado) e os pontos ficam em `mes`.
 */
function LinhaPontosChave({ grafico }) {
  const { itens, trajeto } = grafico;
  const { previa, fixado, setFixado, propsItem } = useSelecaoGrafico();
  const clipId = `revela-${useId().replace(/:/g, '')}`;

  const pontosBase = trajeto
    ? itens.map((it) => ({ ...it, xv: it.mes, yv: it.numero ?? interpolar(trajeto, it.mes) }))
    : itens.map((it, i) => ({ ...it, xv: i, yv: it.numero }));

  const xs = trajeto ? trajeto.map((t) => t.mes) : pontosBase.map((p) => p.xv);
  const ys = trajeto ? trajeto.map((t) => t.numero) : pontosBase.map((p) => p.yv);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMin = Math.min(...ys);
  const yMax = Math.max(...ys);
  const folga = (yMax - yMin) * 0.12 || 1;
  const X = (v) => M.esq + ((v - xMin) / (xMax - xMin || 1)) * (L - M.esq - M.dir);
  const Y = (v) => M.topo + ((yMax + folga - v) / (yMax - yMin + 2 * folga)) * (A - M.topo - M.base);

  const linha = (trajeto || pontosBase.map((p) => ({ mes: p.xv, numero: p.yv })))
    .map((p, i) => `${i ? 'L' : 'M'}${X(p.mes).toFixed(1)} ${Y(p.numero).toFixed(1)}`)
    .join(' ');

  return (
    <figure className="grafico grafico--linha">
      <figcaption>
        <h3 className="grafico__titulo">{grafico.titulo}</h3>
      </figcaption>
      <svg viewBox={`0 0 ${L} ${A}`} className="grafico__svg" role="group" aria-label={`${grafico.titulo}. ${grafico.descricao}`}>
        <line x1={M.esq} x2={L - M.dir} y1={A - M.base + 8} y2={A - M.base + 8} className="grafico__base" />
        {grafico.eixo &&
          grafico.eixo.map((e) => (
            <g key={e.rotulo}>
              <line x1={X(e.mes)} x2={X(e.mes)} y1={M.topo - 10} y2={A - M.base + 8} className="grafico__grade" />
              <text x={X(e.mes) + 3} y={M.topo - 14} className="grafico__eixo-texto">
                {e.rotulo}
              </text>
            </g>
          ))}
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width={L} height={A} className="linha__revela" />
          </clipPath>
        </defs>
        <path d={linha} className={`linha__traco${trajeto ? ' linha__traco--aprox' : ''}`} clipPath={`url(#${clipId})`} />
        {pontosBase.map((p, ordem) => {
          const cx = X(p.xv);
          const cy = Y(p.yv);
          const ativo = previa === p.id || fixado === p.id;
          const selo = SELOS[p.selo];
          const acima = cy > A / 2;
          return (
            <g
              key={p.id}
              className={`ponto${ativo ? ' is-ativo' : ''}${fixado === p.id ? ' is-fixado' : ''}`}
              style={{ '--ordem': ordem, '--total': pontosBase.length }}
              {...propsItem(p, `${p.rotulo}: ${p.valor}.${selo.interno ? '' : ` ${selo.rotulo}.`}`)}
            >
              <circle cx={cx} cy={cy} r="20" className="ponto__alvo" />
              <circle cx={cx} cy={cy} r={ativo ? 8 : 6} className="ponto__marca" />
              <circle cx={cx} cy={cy} r="13" className="foco-anel" />
              {ativo && (
                <text x={cx} y={acima ? cy - 16 : cy + 26} textAnchor={cx > L - 60 ? 'end' : cx < 60 ? 'start' : 'middle'} className="ponto__valor">
                  {p.valor.length > 14 ? '' : p.valor}
                </text>
              )}
              <text x={cx} y={A - M.base + 26} textAnchor={cx > L - 40 ? 'end' : cx < 40 ? 'start' : 'middle'} className="ponto__rotulo">
                {p.curto}
              </text>
              {selo.icone && (
                <g transform={`translate(${Math.min(Math.max(cx - 8, 2), L - 18)} ${A - M.base + 32}) scale(0.6667)`} className={`desenho barra__selo`} aria-hidden="true">
                <DesenhoIcone nome={selo.icone} />
              </g>
              )}
            </g>
          );
        })}
      </svg>
      {grafico.nota && <p className="grafico__nota">{grafico.nota}</p>}
      <DetalheGrafico itens={itens} previa={previa} fixado={fixado} onFechar={() => setFixado(null)} />
    </figure>
  );
}

export default memo(LinhaPontosChave);
