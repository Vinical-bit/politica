import { memo } from 'react';
import { VIDEO, REPOSITORIO_URL, DATA_CHECAGEM, FONTES_CONSULTADAS } from '../../data/fontes.js';
import Selo from '../dados/Selo.jsx';
import { AUTOR, PRODUCAO } from '../../data/autor.js';

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

        <section className="creditos" aria-labelledby="creditos-titulo">
          <h2 id="creditos-titulo" className="creditos__titulo">
            Créditos
          </h2>
          <p className="creditos__autor">
            <span className="creditos__papel">{AUTOR.papel}</span>
            <strong className="creditos__nome">{AUTOR.nome}</strong>
          </p>
          {(AUTOR.github || AUTOR.instagram) && (
            <ul className="creditos__links">
              {AUTOR.github && (
                <li>
                  <a href={`https://github.com/${AUTOR.github}`} target="_blank" rel="noopener noreferrer" className="creditos__link">
                    GitHub: {AUTOR.github}
                    <span className="visualmente-oculto"> (abre em nova aba)</span>
                  </a>
                </li>
              )}
              {AUTOR.instagram && (
                <li>
                  <a href={`https://www.instagram.com/${AUTOR.instagram}/`} target="_blank" rel="noopener noreferrer" className="creditos__link">
                    Instagram: @{AUTOR.instagram}
                    <span className="visualmente-oculto"> (abre em nova aba)</span>
                  </a>
                </li>
              )}
            </ul>
          )}
          <p className="creditos__producao">{PRODUCAO}</p>
        </section>
      </div>
    </footer>
  );
}

export default memo(Rodape);
