import { memo } from 'react';
import Icone from '../ilustracoes/Icones.jsx';

/** "O que esse número mede e o que ele não prova". */
function QuadroMede({ mede }) {
  return (
    <div className="quadro-mede">
      <div className="quadro-mede__col">
        <h4 className="quadro-mede__titulo">
          <Icone nome="regua" tamanho={20} /> O que esse número mede
        </h4>
        <ul>
          {mede.mede.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="quadro-mede__col">
        <h4 className="quadro-mede__titulo">
          <Icone nome="alerta" tamanho={20} /> O que ele não prova
        </h4>
        <ul>
          {mede.naoProva.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(QuadroMede);
