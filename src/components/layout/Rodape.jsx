import { memo } from 'react';
import { VIDEO, REPOSITORIO_URL, DATA_CHECAGEM, FONTES_CONSULTADAS } from '../../data/fontes.js';
import Selo from '../dados/Selo.jsx';

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__conteudo">
        <p className="rodape__aviso">
          Todo número deste site tem link para a fonte original. Se encontrar um erro, avise pelo repositório.
        </p>

        <div className="rodape__grade">
          <div>
            <h2 className="rodape__titulo">Pesquisa de base</h2>
            <p>
              O ponto de partida foi a pesquisa do vídeo{' '}
              <a href={VIDEO.url} target="_blank" rel="noopener noreferrer">
                "{VIDEO.titulo}"<span className="visualmente-oculto"> (abre em nova aba)</span>
              </a>
              . Os números foram conferidos nas fontes citadas em cada dado.
            </p>
            <h2 className="rodape__titulo">Data da checagem</h2>
            <p>{DATA_CHECAGEM}.</p>
          </div>

          <div>
            <h2 className="rodape__titulo">Como ler</h2>
            <p className="legenda-selos__item">
              <Selo tipo="verificado" compacto />
              <span>Número conferido na fonte original.</span>
            </p>
          </div>

          <div>
            <h2 className="rodape__titulo">Fontes oficiais consultadas</h2>
            <p>{FONTES_CONSULTADAS.join(', ')}.</p>
            <h2 className="rodape__titulo">Código</h2>
            <p>
              <a href={REPOSITORIO_URL} target="_blank" rel="noopener noreferrer">
                Repositório no GitHub<span className="visualmente-oculto"> (abre em nova aba)</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Rodape);
