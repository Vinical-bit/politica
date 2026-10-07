import DadoComFonte from '../dados/DadoComFonte.jsx';
import Selo from '../dados/Selo.jsx';

/** Área abaixo do gráfico: prévia (hover/foco) e detalhe fixado (clique/toque). */
export default function DetalheGrafico({ itens, previa, fixado, onFechar }) {
  const itemPrevia = itens.find((i) => i.id === previa);
  const itemFixado = itens.find((i) => i.id === fixado);
  return (
    <div className="grafico__detalhe">
      <p className="grafico__previa" aria-live="polite">
        {itemPrevia && itemPrevia.id !== fixado ? (
          <>
            <strong>{itemPrevia.rotulo}:</strong> {itemPrevia.valor} <Selo tipo={itemPrevia.selo} compacto />{' '}
            <span className="grafico__dica">Clique ou toque para ver a fonte.</span>
          </>
        ) : !itemFixado ? (
          <span className="grafico__dica">Passe o mouse, toque ou use Tab e Enter em cada barra ou ponto para ver valor, selo e fonte.</span>
        ) : null}
      </p>
      {itemFixado && (
        <div className="grafico__fixado">
          <DadoComFonte dado={itemFixado} comoTitulo="h4" />
          <button type="button" className="botao botao--texto" onClick={onFechar}>
            Fechar detalhe
          </button>
        </div>
      )}
    </div>
  );
}
