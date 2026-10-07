import { memo } from 'react';
import Icone from '../ilustracoes/Icones.jsx';

/** Uma pergunta de múltipla escolha sobre leitura de dados, com explicação. */
function PerguntaQuiz({ pergunta, resposta, onResponder, numero }) {
  const respondida = resposta != null;
  const acertou = resposta === pergunta.correta;
  return (
    <fieldset className="quiz__pergunta">
      <legend className="quiz__enunciado">
        <span className="quiz__numero">Pergunta {numero}.</span> {pergunta.enunciado}
      </legend>
      <ul className="quiz__opcoes">
        {pergunta.opcoes.map((op, i) => {
          const escolhida = resposta === i;
          const correta = i === pergunta.correta;
          let estado = '';
          if (respondida && correta) estado = ' is-correta';
          else if (respondida && escolhida) estado = ' is-errada';
          return (
            <li key={i}>
              <button
                type="button"
                className={`quiz__opcao${estado}`}
                aria-pressed={escolhida}
                disabled={respondida}
                onClick={() => onResponder(pergunta.id, i)}
              >
                <span className="quiz__letra" aria-hidden="true">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{op}</span>
                {respondida && correta && (
                  <span className="quiz__marca">
                    <Icone nome="seloConfere" tamanho={18} /> <span>Resposta certa</span>
                  </span>
                )}
                {respondida && escolhida && !correta && (
                  <span className="quiz__marca">
                    <Icone nome="seloNaoConfere" tamanho={18} /> <span>Sua resposta</span>
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <div aria-live="polite">
        {respondida && (
          <div className="quiz__explicacao">
            <p>
              <strong>{acertou ? 'Isso.' : 'Não exatamente.'}</strong> {pergunta.explicacao}
            </p>
            <button type="button" className="botao botao--texto" onClick={() => onResponder(pergunta.id, null)}>
              Responder de novo
            </button>
          </div>
        )}
      </div>
    </fieldset>
  );
}

function Quiz({ perguntas, respostas, onResponder }) {
  return (
    <div className="quiz">
      {perguntas.map((p, i) => (
        <PerguntaQuiz key={p.id} numero={i + 1} pergunta={p} resposta={respostas[p.id]} onResponder={onResponder} />
      ))}
    </div>
  );
}

export default memo(Quiz);
