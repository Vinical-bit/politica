import { memo, useId, useState } from 'react';
import { SELOS } from '../../data/selos.js';
import { useSelecaoGrafico } from './useSelecaoGrafico.js';
import DetalheGrafico from './DetalheGrafico.jsx';

const L = 360;
const A = 290;
const M = { esq: 34, dir: 44, topo: 18, base: 34 };
const ANO_MIN = 2000;
const ANO_MAX = 2025;
const Y_MIN = 320;
const Y_MAX = 520;

const X = (ano) => M.esq + ((ano - ANO_MIN) / (ANO_MAX - ANO_MIN)) * (L - M.esq - M.dir);
const Y = (v) => M.topo + ((Y_MAX - v) / (Y_MAX - Y_MIN)) * (A - M.topo - M.base);

const fmt = (n) => String(Math.round(n));

/**
 * P12: série histórica do PISA, Brasil × média da OCDE, por área.
 * A distância entre as linhas em 2006 e em 2025 é marcada com uma chave,
 * e o texto abaixo separa quanto da aproximação veio do Brasil e quanto da OCDE.
 */
function SeriesPisa({ grafico }) {
  const [area, setArea] = useState(grafico.areas[1]?.id ?? grafico.areas[0].id);
  const { previa, fixado, setFixado, propsItem } = useSelecaoGrafico();
  const clipId = `pisa-${useId().replace(/:/g, '')}`;

  const daArea = grafico.itens.filter((i) => i.area === area);
  const brasil = daArea.filter((i) => i.serie === 'brasil').sort((a, b) => a.ano - b.ano);
  const ocde = daArea.filter((i) => i.serie === 'ocde').sort((a, b) => a.ano - b.ano);
  const nomeArea = grafico.areas.find((a) => a.id === area).nome;

  const caminho = (serie) => serie.map((p, i) => `${i ? 'L' : 'M'}${X(p.ano).toFixed(1)} ${Y(p.numero).toFixed(1)}`).join(' ');

  const br06 = brasil.find((p) => p.ano === 2006);
  const br25 = brasil.find((p) => p.ano === 2025);
  const oc06 = ocde.find((p) => p.ano === 2006);
  const oc25 = ocde.find((p) => p.ano === 2025);
  const dist06 = oc06.numero - br06.numero;
  const dist25 = oc25.numero - br25.numero;
  const queda = oc06.numero - oc25.numero;
  const subida = br25.numero - br06.numero;
  const fecha = dist06 - dist25;
  const parteOcde = Math.round((queda / fecha) * 100);

  const chave = (ano, de, ate, texto, lado) => {
    const x = X(ano) + (lado === 'esq' ? -10 : 10);
    const y1 = Y(de);
    const y2 = Y(ate);
    const meio = (y1 + y2) / 2;
    return (
      <g className="pisa__chave" aria-hidden="true">
        <path d={`M${x} ${y1} L${x} ${y2}`} />
        <path d={`M${x - 4} ${y1} L${x + 4} ${y1} M${x - 4} ${y2} L${x + 4} ${y2}`} />
        <text x={lado === 'esq' ? x - 6 : x + 6} y={meio + 4} textAnchor={lado === 'esq' ? 'end' : 'start'}>
          {texto}
        </text>
      </g>
    );
  };

  const ponto = (p, classe) => {
    const ativo = previa === p.id || fixado === p.id;
    const selo = SELOS[p.selo];
    return (
      <g
        key={p.id}
        className={`ponto ${classe}${ativo ? ' is-ativo' : ''}${fixado === p.id ? ' is-fixado' : ''}`}
        {...propsItem(p, `${p.rotulo}: ${p.valor}.${selo.interno ? '' : ` ${selo.rotulo}.`}`)}
      >
        <circle cx={X(p.ano)} cy={Y(p.numero)} r="14" className="ponto__alvo" />
        <circle cx={X(p.ano)} cy={Y(p.numero)} r={ativo ? 7 : 5} className="ponto__marca" />
        <circle cx={X(p.ano)} cy={Y(p.numero)} r="11" className="foco-anel" />
        {ativo && (
          <text x={X(p.ano)} y={Y(p.numero) - 12} textAnchor="middle" className="ponto__valor">
            {fmt(p.numero)}
          </text>
        )}
      </g>
    );
  };

  return (
    <figure className="grafico grafico--pisa">
      <figcaption>
        <h3 className="grafico__titulo">{grafico.titulo}</h3>
      </figcaption>
      <div className="alternador" role="group" aria-label="Escolher a área do PISA">
        {grafico.areas.map((a) => (
          <button key={a.id} type="button" className="alternador__botao" aria-pressed={area === a.id} onClick={() => setArea(a.id)}>
            {a.nome}
          </button>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${L} ${A}`}
        className="grafico__svg pisa__svg"
        role="group"
        aria-label={`${grafico.titulo}, ${nomeArea}. Brasil: ${fmt(br06.numero)} em 2006 e ${fmt(br25.numero)} em 2025. Média da OCDE: ${fmt(oc06.numero)} em 2006 e ${fmt(oc25.numero)} em 2025.`}
      >
        {[350, 400, 450, 500].map((v) => (
          <g key={v} aria-hidden="true">
            <line x1={M.esq} x2={L - M.dir + 6} y1={Y(v)} y2={Y(v)} className="grafico__grade" />
            <text x={M.esq - 6} y={Y(v) + 4} textAnchor="end" className="grafico__eixo-texto">
              {v}
            </text>
          </g>
        ))}
        {[2000, 2006, 2012, 2018, 2025].map((ano) => (
          <text key={ano} x={X(ano)} y={A - M.base + 20} textAnchor="middle" className="ponto__rotulo" aria-hidden="true">
            {ano}
          </text>
        ))}

        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width={L} height={A} className="linha__revela" key={area} />
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId})`} key={`linhas-${area}`}>
          <path d={caminho(ocde)} className="pisa__linha pisa__linha--ocde" />
          <path d={caminho(brasil)} className="pisa__linha pisa__linha--brasil" />
        </g>

        {chave(2006, oc06.numero, br06.numero, `${dist06} pts`, 'esq')}
        {chave(2025, oc25.numero, br25.numero, `${dist25} pts`, 'dir')}

        <text x={X(2025) + 8} y={Y(oc25.numero) - 10} className="pisa__nome pisa__nome--ocde" aria-hidden="true">
          OCDE
        </text>
        <text x={X(2025) + 8} y={Y(br25.numero) + 18} className="pisa__nome pisa__nome--brasil" aria-hidden="true">
          Brasil
        </text>

        {ocde.map((p) => ponto(p, 'pisa__ponto--ocde'))}
        {brasil.map((p) => ponto(p, 'pisa__ponto--brasil'))}
      </svg>

      <div className="pisa__conta" aria-live="polite">
        <p>
          <strong>
            {nomeArea}: a distância caiu de {dist06} para {dist25} pontos.
          </strong>{' '}
          A média da OCDE caiu {queda} pontos e o Brasil subiu {subida}.
        </p>
        <p className="pisa__proporcao">
          Cerca de {parteOcde}% da aproximação veio da queda da OCDE; {100 - parteOcde}%, da subida do Brasil.
        </p>
      </div>
      {grafico.nota && <p className="grafico__nota">{grafico.nota}</p>}
      <DetalheGrafico itens={grafico.itens} previa={previa} fixado={fixado} onFechar={() => setFixado(null)} />
    </figure>
  );
}

export default memo(SeriesPisa);
