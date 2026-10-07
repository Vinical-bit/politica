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

        <section className="creditos" aria-label="Créditos">
          <p className="creditos__linha">
            Desenvolvido por <strong>{AUTOR.nome}</strong>
            {AUTOR.github && (
              <a
                href={`https://github.com/${AUTOR.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="creditos__icone"
                aria-label={`GitHub de ${AUTOR.nome} (abre em nova aba)`}
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.5 7.5L4 12l4.5 4.5M15.5 7.5L20 12l-4.5 4.5M13.5 5l-3 14" />
                </svg>
              </a>
            )}
            {AUTOR.instagram && (
              <a
                href={`https://www.instagram.com/${AUTOR.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="creditos__icone"
                aria-label={`Instagram de ${AUTOR.nome} (abre em nova aba)`}
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H8l1.5-2h5L16 6h1.5A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z" />
                  <circle cx="12" cy="12.5" r="3.5" />
                </svg>
              </a>
            )}
          </p>
          {PRODUCAO && <p className="creditos__producao">{PRODUCAO}</p>}
        </section>
      </div>
    </footer>
  );
}

export default memo(Rodape);
