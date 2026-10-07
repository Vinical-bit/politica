import { memo } from 'react';
import Icone from '../ilustracoes/Icones.jsx';

/** Defesa × Crítica, com peso igual. Os lados se distinguem por rótulo e ícone, não por cor. */
function CartoesDebate({ debate }) {
  const lados = [
    { chave: 'defesa', rotulo: 'Defesa', icone: 'escudo', descricao: 'Defesa do governo' },
    { chave: 'critica', rotulo: 'Crítica', icone: 'lupa' },
  ];
  return (
    <div className="debate" role="group" aria-label="O melhor argumento de cada lado">
      {lados.map((l) => (
        <article key={l.chave} className={`debate__cartao debate__cartao--${l.chave}`}>
          <p className={`debate__lado debate__lado--${l.chave}`}>
            <Icone nome={l.icone} tamanho={20} />
            <span>{l.rotulo}</span>
            <span className="visualmente-oculto"> {l.chave === 'defesa' ? 'do governo' : 'ao governo'}</span>
          </p>
          <h4 className="debate__titulo">{debate[l.chave].titulo}</h4>
          <p className="debate__texto">{debate[l.chave].texto}</p>
        </article>
      ))}
    </div>
  );
}

export default memo(CartoesDebate);
