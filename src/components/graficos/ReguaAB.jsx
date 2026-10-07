import { memo, useState } from 'react';
import { DADO_POR_ID, PARADA_POR_ID } from '../../data/index.js';
import Selo from '../dados/Selo.jsx';
import LinkFonte from '../dados/LinkFonte.jsx';
import Icone from '../ilustracoes/Icones.jsx';

/** P14: alterna entre a Régua A e a Régua B. Mostra paradas e selos. Sem placar final. */
function ReguaAB({ regua, irPara }) {
  const [lado, setLado] = useState('A');
  const r = regua[lado];
  return (
    <div className="regua">
      <div className="alternador" role="group" aria-label="Escolher a régua">
        {['A', 'B'].map((l) => (
          <button key={l} type="button" className="alternador__botao" aria-pressed={lado === l} onClick={() => setLado(l)}>
            {regua[l].titulo}
          </button>
        ))}
      </div>
      <div className="regua__painel" aria-live="polite">
        <p className="regua__pergunta">
          <Icone nome={lado === 'A' ? 'casa' : 'semente'} tamanho={22} />
          <span>{r.pergunta}</span>
        </p>
        <ul className="regua__lista">
          {r.itens.map((it) => {
            const p = PARADA_POR_ID[it.parada];
            return (
              <li key={it.parada} className="regua__item">
                <a
                  href={`#${p.id}`}
                  className="regua__parada"
                  onClick={(e) => {
                    e.preventDefault();
                    irPara(p.id);
                  }}
                >
                  Parada {p.numero}: {p.titulo}
                </a>
                <ul className="regua__dados">
                  {it.dados.map((did) => {
                    const d = DADO_POR_ID[did];
                    return (
                      <li key={did} className="regua__dado">
                        <span className="regua__dado-rotulo">{d.rotulo}</span>
                        <span className="regua__dado-valor">{d.valor}</span>
                        {d.selo === 'nao-confere' && (
                          <span className="regua__dado-corrigido">
                            <strong>Dado corrigido:</strong> {d.corrigido}
                          </span>
                        )}
                        <span className="regua__dado-meta">
                          <Selo tipo={d.selo} compacto />
                          <LinkFonte fonte={d.fonte} />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <p className="grafico__nota">O site não soma nem dá nota. Qual régua pesa mais é escolha sua.</p>
      </div>
    </div>
  );
}

export default memo(ReguaAB);
