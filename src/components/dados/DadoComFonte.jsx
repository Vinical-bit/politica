import { memo } from 'react';
import Selo from './Selo.jsx';
import LinkFonte from './LinkFonte.jsx';
import SaibaMais, { ConteudoSaibaMais } from './SaibaMais.jsx';

/**
 * Um número com selo e link da fonte. Formato do dado em src/data/paradas/*.
 * - 'ressalva' e 'nao-confere' mostram a ressalva sempre visível.
 * - Contexto e explicações ficam no 'Saiba mais'.
 */
function DadoComFonte({ dado, compacto = false, comoTitulo = 'h4' }) {
  const Titulo = comoTitulo;
  const classe = `dado dado--${dado.selo}${compacto || dado.compacto ? ' dado--compacto' : ''}`;
  return (
    <article className={classe} aria-label={dado.rotulo}>
      <div className="dado__topo">
        <Titulo className="dado__rotulo">{dado.rotulo}</Titulo>
        <Selo tipo={dado.selo} compacto />
      </div>

      {dado.selo === 'nao-confere' ? (
        <div className="dado__comparacao">
          <div className="dado__lado dado__lado--video">
            <span className="dado__lado-rotulo">Afirmação</span>
            <p className="dado__lado-texto">{dado.videoDiz}</p>
          </div>
          <div className="dado__lado dado__lado--corrigido">
            <span className="dado__lado-rotulo">Dado corrigido</span>
            <p className="dado__lado-texto">{dado.corrigido}</p>
          </div>
        </div>
      ) : (
        <p className="dado__valor">{dado.valor}</p>
      )}

      {dado.ressalva && (
        <p className="dado__ressalva">
          <span className="dado__ressalva-rotulo">{dado.selo === 'nao-confere' ? 'Por quê: ' : 'Ressalva: '}</span>
          {dado.ressalva}
        </p>
      )}

      <div className="dado__rodape">
        <LinkFonte fonte={dado.fonte} />
      </div>

      {dado.saibaMais && (
        <SaibaMais>
          <ConteudoSaibaMais conteudo={dado.saibaMais} />
        </SaibaMais>
      )}
    </article>
  );
}

export default memo(DadoComFonte);
