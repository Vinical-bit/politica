import { memo } from 'react';
import Icone from '../ilustracoes/Icones.jsx';

function mmss(seg) {
  const m = Math.floor(seg / 60);
  const s = String(seg % 60).padStart(2, '0');
  return `${m}:${s}`;
}

/** Link da fonte: abre em nova aba, com texto honesto sobre o nível de precisão. */
function LinkFonte({ fonte }) {
  if (!fonte) return null;
  let texto;
  let prefixo;
  if (fonte.tipo === 'video') {
    prefixo = null;
    texto = fonte.t != null ? `Fonte: vídeo de referência (${mmss(fonte.t)})` : 'Fonte: vídeo de referência';
  } else if (fonte.tipo === 'institucional') {
    prefixo = 'Fonte (página geral):';
    texto = fonte.nome;
  } else {
    prefixo = 'Fonte:';
    texto = fonte.nome;
  }
  return (
    <a className={`link-fonte link-fonte--${fonte.tipo}`} href={fonte.url} target="_blank" rel="noopener noreferrer">
      <Icone nome={fonte.tipo === 'video' ? 'play' : 'externo'} tamanho={16} />
      <span>
        {prefixo && <span className="link-fonte__prefixo">{prefixo} </span>}
        {texto}
        <span className="visualmente-oculto"> (abre em nova aba)</span>
      </span>
    </a>
  );
}

export default memo(LinkFonte);
