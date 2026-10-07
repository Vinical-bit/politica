import { memo } from 'react';
import Icone from '../ilustracoes/Icones.jsx';

/** Perguntas abertas do fim (P14): sem resposta certa, para a pessoa pensar. */
function PerguntasAbertas({ perguntas }) {
  return (
    <ol className="perguntas-abertas">
      {perguntas.map((p) => (
        <li key={p} className="perguntas-abertas__item">
          <Icone nome="pergunta" tamanho={22} />
          <span>{p}</span>
        </li>
      ))}
    </ol>
  );
}

export default memo(PerguntasAbertas);
