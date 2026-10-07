import { memo } from 'react';
import { PARADA_POR_ID } from '../../data/index.js';
import { VIDEO } from '../../data/fontes.js';
import Selo from '../dados/Selo.jsx';
import Icone from '../ilustracoes/Icones.jsx';
import RotuloIlustracao from '../graficos/RotuloIlustracao.jsx';

function Abertura({ ultima, irPara }) {
  const pUltima = ultima ? PARADA_POR_ID[ultima] : null;
  return (
    <section id="inicio" className="abertura" aria-labelledby="titulo-site">
      <div className="abertura__conteudo vidro">
        <p className="abertura__edicao">Política · Governo Lula 3 (2023–2026)</p>
        <h1 id="titulo-site" className="abertura__titulo abertura__titulo--pergunta">
          O governo Lula foi bom?
        </h1>
        <p className="abertura__subtitulo">Depende do que você mede.</p>
        <div className="abertura__tensao">
          <p className="abertura__fato">
            <span className="numeral">5,6%</span> O desemprego médio de 2025 foi o menor da série do IBGE.
          </p>
          <p className="abertura__fato">
            <span className="numeral">71,7% → 82,5%</span> A dívida bruta, em % do PIB, voltou a subir (dez/2022 → jul/2026).
          </p>
          <p className="abertura__virada">Os dois são verdade.</p>
        </div>
        <p className="abertura__video">
          São 14 perguntas, os números de cada uma e o melhor argumento dos dois lados. No fim, você escolhe a régua.
        </p>

        <div className="abertura__acoes">
          <button type="button" className="botao botao--principal" onClick={() => irPara('p01-promessa')}>
            Começar pela primeira pergunta <Icone nome="setaBaixo" tamanho={20} />
          </button>
          {pUltima && pUltima.id !== 'p01-promessa' && (
            <button type="button" className="botao botao--secundario" onClick={() => irPara(pUltima.id)}>
              Continuar de onde parei <span className="botao__detalhe">(parada {pUltima.numero}: {pUltima.titulo})</span>
            </button>
          )}
        </div>

        <div className="abertura__legenda">
          <h2 className="abertura__legenda-titulo">Como ler</h2>
          <ul className="legenda-selos">
            <li className="legenda-selos__item">
              <Selo tipo="verificado" />
              <span>Número conferido na fonte original. O link abaixo dele leva direto a ela.</span>
            </li>
            <li className="legenda-selos__item">
              <span className="legenda-debate">
                <span className="debate__lado debate__lado--defesa">
                  <Icone nome="escudo" tamanho={18} />
                  <span>Defesa</span>
                </span>
                <span className="debate__lado debate__lado--critica">
                  <Icone nome="lupa" tamanho={18} />
                  <span>Crítica</span>
                </span>
              </span>
              <span>
                A cor indica o argumento (Defesa do governo ou Crítica ao governo), não o partido de quem fala. Os dois lados têm o mesmo peso.
              </span>
            </li>
            <li className="legenda-selos__item">
              <RotuloIlustracao />
              <span>Desenho que explica um argumento. Não é dado nem evidência.</span>
            </li>
          </ul>
          <p className="abertura__nota">Os selos se distinguem por forma e ícone; Defesa e Crítica, por cor, ícone e rótulo.</p>
        </div>

        <p className="abertura__metodo">
          <Icone nome="info" tamanho={20} />
          <span>
            <strong>Método.</strong> A pesquisa partiu do vídeo{' '}
            <a href={VIDEO.url} target="_blank" rel="noopener noreferrer">
              "{VIDEO.titulo}"
              <span className="visualmente-oculto"> (abre em nova aba)</span>
            </a>
            . Cada número foi conferido nas fontes oficiais. O site não dá veredito: no fim, as perguntas ficam com você.
          </span>
        </p>

      </div>
    </section>
  );
}

export default memo(Abertura);
