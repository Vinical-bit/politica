import { memo } from 'react';
import { SELOS } from '../../data/selos.js';
import Icone from '../ilustracoes/Icones.jsx';

/** Selo de checagem: sempre ícone + texto. */
function Selo({ tipo, compacto = false }) {
  const s = SELOS[tipo];
  if (!s || s.interno) return null;
  return (
    <span className={`selo selo--${s.id}${compacto ? ' selo--compacto' : ''}`}>
      <Icone nome={s.icone} tamanho={compacto ? 16 : 18} />
      <span className="selo__texto">{s.rotulo}</span>
    </span>
  );
}

export default memo(Selo);
