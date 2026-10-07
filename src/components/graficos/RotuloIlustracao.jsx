import Icone from '../ilustracoes/Icones.jsx';

/** Rótulo obrigatório para ilustrações de argumento: nunca são evidência. */
export default function RotuloIlustracao() {
  return (
    <p className="rotulo-ilustracao">
      <Icone nome="pincel" tamanho={16} />
      <span>Ilustração de um argumento, sem dado</span>
    </p>
  );
}
