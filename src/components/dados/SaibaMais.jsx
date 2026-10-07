import { useId, useState } from 'react';
import Icone from '../ilustracoes/Icones.jsx';

/** Conteúdo do "Saiba mais": texto simples, ou { paragrafos, tabela }. */
export function ConteudoSaibaMais({ conteudo }) {
  if (!conteudo) return null;
  if (typeof conteudo === 'string') return <p>{conteudo}</p>;
  return (
    <>
      {(conteudo.paragrafos || []).map((t, i) => (
        <p key={i}>{t}</p>
      ))}
      {conteudo.tabela && (
        <div className="tabela-rolagem">
          <table className="tabela">
            <thead>
              <tr>
                {conteudo.tabela.cabecalho.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {conteudo.tabela.linhas.map((l, i) => (
                <tr key={i}>
                  {l.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

/** Bloco expansível. Fechado por padrão, botão com aria-expanded. */
export default function SaibaMais({ rotulo = 'Saiba mais', children, variante = 'dado' }) {
  const [aberto, setAberto] = useState(false);
  const id = useId();
  return (
    <div className={`saiba-mais saiba-mais--${variante}${aberto ? ' is-aberto' : ''}`}>
      <button
        type="button"
        className="saiba-mais__botao"
        aria-expanded={aberto}
        aria-controls={id}
        onClick={() => setAberto((a) => !a)}
      >
        <Icone nome={aberto ? 'menos' : 'mais'} tamanho={18} />
        <span>{rotulo}</span>
      </button>
      <div id={id} className="saiba-mais__conteudo" hidden={!aberto}>
        {children}
      </div>
    </div>
  );
}
