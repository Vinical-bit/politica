import { memo, useEffect, useRef, useState } from 'react';
import { TRILHA_POR_ID } from '../../data/index.js';
import { useProgressoParada } from '../../hooks/useProgresso.js';
import CenaRolagem from '../ilustracoes/CenaRolagem.jsx';
import DadoComFonte from '../dados/DadoComFonte.jsx';
import SaibaMais from '../dados/SaibaMais.jsx';
import BarrasClicaveis from '../graficos/BarrasClicaveis.jsx';
import LinhaPontosChave from '../graficos/LinhaPontosChave.jsx';
import CurtoLongoPrazo from '../graficos/CurtoLongoPrazo.jsx';
import MapaTarifa from '../graficos/MapaTarifa.jsx';
import ReguaAB from '../graficos/ReguaAB.jsx';
import CartoesDebate from './CartoesDebate.jsx';
import QuadroMede from './QuadroMede.jsx';
import Quiz from './Quiz.jsx';
import PerguntasAbertas from './Pergunta.jsx';

const GRAFICOS = {
  barras: BarrasClicaveis,
  linha: LinhaPontosChave,
  selic: LinhaPontosChave,
  curtoLongo: CurtoLongoPrazo,
  tarifa: MapaTarifa,
};

/** Liga a classe de entrada uma única vez, quando a parada aparece na tela. */
function useEntrada(ref) {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisivel(true);
      return undefined;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visivel;
}

function Bloco({ titulo, children, className = '' }) {
  return (
    <div className={`parada__bloco ${className}`}>
      {titulo && <h3 className="parada__bloco-titulo">{titulo}</h3>}
      {children}
    </div>
  );
}

function separar(dados) {
  const grandes = dados.filter((d) => !d.compacto);
  const compactos = dados.filter((d) => d.compacto);
  return { grandes, compactos };
}

function Parada({ parada, irPara }) {
  const ref = useRef(null);
  const visivel = useEntrada(ref);
  const { partes, respostas, marcarParte, responder } = useProgressoParada(parada.id);
  const trilha = TRILHA_POR_ID[parada.trilha];
  const total = parada.ilustracao.partes.length;
  const exploradas = partes.filter((id) => parada.ilustracao.partes.some((p) => p.id === id));
  const { grandes, compactos } = separar(parada.dados || []);
  const tituloId = `${parada.id}-titulo`;

  return (
    <section
      id={parada.id}
      ref={ref}
      className={`parada parada--trilha-${trilha.numero}${visivel ? ' is-visivel' : ''}`}
      aria-labelledby={tituloId}
    >
      <div className="parada__conteudo">
        <header className="parada__cabecalho">
          <p className="parada__sobretitulo">
            <span className="parada__episodio" aria-hidden="true">
              {String(parada.numero).padStart(2, '0')}
            </span>
            Trilha {trilha.numero} · Parada {parada.numero} de 14
          </p>
          <h2 id={tituloId} className="parada__titulo" tabIndex={-1}>
            {parada.titulo}
          </h2>
          <p className="parada__abertura">{parada.abertura}</p>
        </header>

        <div className="parada__pergunta">
          <p className="parada__pergunta-rotulo">A pergunta</p>
          <p className="parada__pergunta-texto">{parada.pergunta}</p>
        </div>

        <Bloco titulo="Explore" className="parada__explore">
          <p className="cena__instrucao">Role a página: a cena anda junto.</p>
          <p className="contador" aria-live="polite">
            <span className="contador__numero">
              {exploradas.length} de {total}
            </span>{' '}
            partes exploradas
          </p>
          <CenaRolagem ilustracao={parada.ilustracao} exploradas={exploradas} onExplorar={marcarParte} />
        </Bloco>

        {(parada.graficos || []).map((g) => {
          const G = GRAFICOS[g.tipo];
          return (
            <Bloco key={g.id} className="parada__grafico">
              <G grafico={g} />
            </Bloco>
          );
        })}

        {(grandes.length > 0 || compactos.length > 0) && (
          <Bloco titulo="Os números" className="parada__dados">
            {grandes.length > 0 && (
              <div className="grade-dados">
                {grandes.map((d) => (
                  <DadoComFonte key={d.id} dado={d} />
                ))}
              </div>
            )}
            {compactos.length > 0 && (
              <div className="grade-dados grade-dados--compacta">
                {compactos.map((d) => (
                  <DadoComFonte key={d.id} dado={d} compacto />
                ))}
              </div>
            )}
          </Bloco>
        )}

        {parada.placar && (
          <Bloco titulo={parada.placar.titulo} className="parada__placar">
            <div className="grade-dados grade-dados--placar">
              {parada.placar.itens.map((d) => (
                <DadoComFonte key={d.id} dado={d} />
              ))}
            </div>
          </Bloco>
        )}

        {parada.choques && (
          <Bloco titulo="Choques e ventos a favor" className="parada__choques">
            <div className="choques">
              {['defesa', 'critica'].map((lado) => (
                <div key={lado} className="choques__col">
                  <h4 className="choques__titulo">{parada.choques[lado].titulo}</h4>
                  <div className="grade-dados grade-dados--uma">
                    {parada.choques[lado].itens.map((d) => (
                      <DadoComFonte key={d.id} dado={d} comoTitulo="h5" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Bloco>
        )}

        {parada.regua && (
          <Bloco titulo="Escolha a régua" className="parada__regua">
            <ReguaAB regua={parada.regua} irPara={irPara} />
          </Bloco>
        )}

        <Bloco titulo="Os dois lados" className="parada__debate">
          <CartoesDebate debate={parada.debate} />
        </Bloco>

        <Bloco className="parada__mede">
          <QuadroMede mede={parada.mede} />
        </Bloco>

        <Bloco className="parada__saiba-mais">
          <SaibaMais rotulo={parada.saibaMais.titulo} variante="parada">
            {parada.saibaMais.blocos.map((b) => (
              <div key={b.titulo} className="saiba-mais__bloco">
                <h4>{b.titulo}</h4>
                <p>{b.texto}</p>
              </div>
            ))}
          </SaibaMais>
        </Bloco>

        <Bloco titulo="Teste sua leitura" className="parada__quiz">
          <Quiz perguntas={parada.perguntas} respostas={respostas} onResponder={responder} />
        </Bloco>

        {parada.perguntasAbertas && (
          <Bloco titulo="Perguntas para levar" className="parada__abertas">
            <PerguntasAbertas perguntas={parada.perguntasAbertas} />
          </Bloco>
        )}
      </div>
    </section>
  );
}

export default memo(Parada);
