// Ícones em traço simples (grade 24×24). Herdam cor por currentColor e a
// espessura do traço pela variável --traco, para o prompt 2 restilizar tudo.
// Sem personagens humanos e sem rostos.

const P = {
  documento: (
    <>
      <path className="ic-p" d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 11h6M9 14h6M9 17h4" />
    </>
  ),
  prato: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="7" />
      <circle className="ic-p" cx="12" cy="12" r="4" />
      <path d="M2.5 5v5a1.5 1.5 0 0 0 3 0V5M4 10v10" />
      <path d="M21 4c-1.5 1-2 3-2 5s1 2 2 2v9" />
    </>
  ),
  carteira: (
    <>
      <rect className="ic-p" x="5" y="3" width="14" height="18" rx="2" />
      <circle className="ic-p" cx="12" cy="10" r="2.5" />
      <path d="M8.5 15.5h7M9.5 18h5" />
    </>
  ),
  carrinho: (
    <>
      <path d="M3 4h2.5l2.2 10.5h10.3L20 7H6.5" />
      <circle className="ic-p" cx="9" cy="19" r="1.5" />
      <circle className="ic-p" cx="17" cy="19" r="1.5" />
    </>
  ),
  cartao: (
    <>
      <rect className="ic-p" x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  placa: (
    <>
      <path d="M12 3v3" />
      <rect className="ic-p" x="4" y="6" width="16" height="9" rx="1.5" />
      <path d="M8 21l2-6M16 21l-2-6" />
      <path d="M8 10.5h8" />
    </>
  ),
  lupa: (
    <>
      <circle className="ic-p" cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5.5 5.5" />
    </>
  ),
  cesta: (
    <>
      <path className="ic-p" d="M3 10h18l-2 10H5z" />
      <path d="M7 10l4-6M17 10l-4-6" />
      <path d="M9 13v4M12 13v4M15 13v4" />
    </>
  ),
  calendario: (
    <>
      <rect className="ic-p" x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
      <path d="M8 13h2M12 13h2M8 16h2" />
    </>
  ),
  alvo: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="8" />
      <circle className="ic-p" cx="12" cy="12" r="4.5" />
      <circle className="ic-p" cx="12" cy="12" r="1" />
    </>
  ),
  percentual: (
    <>
      <path d="M18 6L6 18" />
      <circle className="ic-p" cx="7.5" cy="7.5" r="2.5" />
      <circle className="ic-p" cx="16.5" cy="16.5" r="2.5" />
    </>
  ),
  maleta: (
    <>
      <rect className="ic-p" x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5h6v2M3 12h18" />
    </>
  ),
  guardaChuva: (
    <>
      <path className="ic-p" d="M3 12a9 9 0 0 1 18 0z" />
      <path d="M12 12v6a2 2 0 0 0 4 0" />
    </>
  ),
  moeda: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.2c-.6-.8-1.5-1.2-2.5-1.2-1.4 0-2.5.8-2.5 1.9 0 2.6 5 1.4 5 4.1 0 1.1-1.1 2-2.5 2-1.1 0-2.1-.5-2.6-1.3M12 6.5v1.5M12 16v1.5" />
    </>
  ),
  escada: (
    <>
      <path d="M4 20h4v-4h4v-4h4V8h4" />
      <path d="M16 4h4v4" />
    </>
  ),
  globo: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="8.5" />
      <path className="ic-p" d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5z" />
    </>
  ),
  regua: (
    <>
      <rect className="ic-p" x="2.5" y="8" width="19" height="8" rx="1.5" />
      <path d="M6 8v3M9 8v2M12 8v3M15 8v2M18 8v3" />
    </>
  ),
  relogio: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  porta: (
    <>
      <path className="ic-p" d="M6 21V4h10v17z" />
      <path d="M4 21h16M13 12h.5" />
      <path d="M16 6l3 1v13" />
    </>
  ),
  alerta: (
    <>
      <path className="ic-p" d="M12 4L2.8 19.5h18.4z" />
      <path d="M12 10v4M12 16.8v.2" />
    </>
  ),
  chave: (
    <>
      <circle className="ic-p" cx="8" cy="12" r="4" />
      <path d="M12 12h9M18 12v3M15 12v2" />
    </>
  ),
  fabrica: (
    <>
      <path className="ic-p" d="M3 20V10l5 3V10l5 3V10l5 3V4h3v16z" />
      <path d="M7 17h2M12 17h2" />
    </>
  ),
  cofre: (
    <>
      <rect className="ic-p" x="3" y="5" width="18" height="14" rx="2" />
      <circle className="ic-p" cx="12" cy="12" r="3.5" />
      <path d="M12 8.5V10M15.5 12H14M6 19v2M18 19v2" />
    </>
  ),
  balanca: (
    <>
      <path d="M12 4v16M7 20h10M5 7h14" />
      <path className="ic-p" d="M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z" />
    </>
  ),
  sino: (
    <>
      <path className="ic-p" d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  janela: (
    <>
      <rect className="ic-p" x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 4v16M4 12h16" />
    </>
  ),
  caminhao: (
    <>
      <path d="M2 6h12v10H2zM14 9h4l3 3v4h-7" />
      <circle className="ic-p" cx="6" cy="18" r="1.8" />
      <circle className="ic-p" cx="17" cy="18" r="1.8" />
    </>
  ),
  grafico: (
    <>
      <path d="M4 4v16h16" />
      <path d="M7 15l4-4 3 3 5-6" />
      <path d="M16 8h3v3" />
    </>
  ),
  termometro: (
    <>
      <path className="ic-p" d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z" />
      <path d="M12 9v7" />
    </>
  ),
  casa: (
    <>
      <path className="ic-p" d="M5.5 9.5V20h13V9.5L12 4.4z" />
      <path d="M3 11l9-7 9 7" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  carro: (
    <>
      <path className="ic-p" d="M3 16v-3l2-5h14l2 5v3z" />
      <path d="M3 13h18" />
      <circle className="ic-p" cx="7" cy="17" r="1.8" />
      <circle className="ic-p" cx="17" cy="17" r="1.8" />
    </>
  ),
  trigo: (
    <>
      <path d="M12 21V8" />
      <path className="ic-p" d="M12 9c-2 0-3.5-1.5-3.5-3.5C10.5 5.5 12 7 12 9zM12 9c2 0 3.5-1.5 3.5-3.5C13.5 5.5 12 7 12 9z" />
      <path className="ic-p" d="M12 13c-2 0-3.5-1.5-3.5-3.5 2 0 3.5 1.5 3.5 3.5zM12 13c2 0 3.5-1.5 3.5-3.5-2 0-3.5 1.5-3.5 3.5z" />
      <path className="ic-p" d="M12 17c-2 0-3.5-1.5-3.5-3.5 2 0 3.5 1.5 3.5 3.5zM12 17c2 0 3.5-1.5 3.5-3.5-2 0-3.5 1.5-3.5 3.5z" />
    </>
  ),
  chuva: (
    <>
      <path className="ic-p" d="M7 15a4 4 0 0 1 .5-8 5 5 0 0 1 9.5 1.5A3.3 3.3 0 0 1 17 15z" />
      <path d="M8 18l-1 2.5M12 18l-1 2.5M16 18l-1 2.5" />
    </>
  ),
  gota: <path className="ic-p" d="M12 3.5c3 4 6 7 6 10.5a6 6 0 0 1-12 0c0-3.5 3-6.5 6-10.5z" />,
  navio: (
    <>
      <path className="ic-p" d="M3 15h18l-2.5 4.5h-13z" />
      <path d="M6 15V9h9v6M9 9V6h3v3M15 12h3v3" />
    </>
  ),
  livro: (
    <>
      <path className="ic-p" d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V19c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z" />
      <path d="M12 6v13.5" />
    </>
  ),
  lapis: (
    <>
      <path className="ic-p" d="M4 20l1-4L16 5l3 3L8 19z" />
      <path d="M14 7l3 3" />
    </>
  ),
  montanha: (
    <>
      <path className="ic-p" d="M2 20l7-12 4 6 2-3 7 9z" />
      <path d="M7.5 10.5L9 12l1.5-1.5" />
    </>
  ),
  pneu: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="8.5" />
      <circle className="ic-p" cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" />
    </>
  ),
  remendo: (
    <>
      <path className="ic-p" d="M4 5h7v6H4zM13 5h7v9h-7zM4 13h7v6H4zM13 16h7v3h-7z" />
      <path d="M11 7.5h2M11 16h2M7.5 11v2" />
    </>
  ),
  semente: (
    <>
      <path d="M12 21v-8" />
      <path className="ic-p" d="M12 13c0-4 3-7 7-7 0 4-3 7-7 7zM12 15c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z" />
      <path d="M7 21h10" />
    </>
  ),
  engrenagem: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="3.2" />
      <path className="ic-p" d="M12 2.8l1.6 2.5 2.9-.8.4 3 2.8 1.2-1.3 2.7 1.8 2.4-2.6 1.5.1 3-3-.3-1.6 2.6L12 18.7l-2.1 1.9-1.6-2.6-3 .3.1-3-2.6-1.5 1.8-2.4L3.3 8.7l2.8-1.2.4-3 2.9.8z" />
    </>
  ),
  predio: (
    <>
      <path className="ic-p" d="M4 21V5l8-2v18z" />
      <path className="ic-p" d="M12 8h8v13h-8z" />
      <path d="M2 21h20" />
      <path d="M7 8h2M7 11h2M7 14h2M15 11h2M15 14h2M15 17h2" />
    </>
  ),
  escudo: (
    <>
      <path className="ic-p" d="M12 3l7.5 3v5.5c0 4.7-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.8-7.5-9.5V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  pergunta: (
    <>
      <path className="ic-p" d="M4 5h16v11H9l-5 4z" />
      <path d="M10 8.7a2 2 0 1 1 2.8 1.8c-.5.3-.8.7-.8 1.3M12 13.6v.2" />
    </>
  ),
  sol: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
    </>
  ),
  lua: <path className="ic-p" d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  visto: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  fechar: <path d="M6 6l12 12M18 6L6 18" />,
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  setaBaixo: <path d="M12 5v14M6 13l6 6 6-6" />,
  externo: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  ),
  play: (
    <>
      <rect className="ic-p" x="3" y="5" width="18" height="14" rx="3" />
      <path className="ic-p" d="M10 9l5 3-5 3z" />
    </>
  ),
  mais: <path d="M12 5v14M5 12h14" />,
  menos: <path d="M5 12h14" />,
  info: (
    <>
      <circle className="ic-p" cx="12" cy="12" r="8.5" />
      <path d="M12 11v5M12 8v.2" />
    </>
  ),
  pincel: (
    <>
      <path className="ic-p" d="M14 4l6 6-7 7-6-6z" />
      <path d="M7 11l-3 3c-1 1-1 3 0 4s3 1 4 0l3-3" />
    </>
  ),
  // Selos
  seloConfere: <path d="M6 12.5l4 4L18 8" />,
  seloRessalva: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path className="ic-cheio" d="M12 4.5a7.5 7.5 0 0 1 0 15z" />
    </>
  ),
  seloNaoConfere: <path d="M7.5 7.5l9 9M16.5 7.5l-9 9" />,
  seloVideo: <circle cx="12" cy="12" r="7.5" />,
};

export const NOMES_ICONES = Object.keys(P);

/** Desenho do ícone, para usar dentro de outro <svg> (com transform). */
export function DesenhoIcone({ nome }) {
  return P[nome] ?? P.info;
}

/**
 * Ícone isolado, estilo B: viewBox 48×48, traço de 1,5 px e preenchimento suave.
 * Os desenhos são feitos numa grade de 24 e ampliados 2×. Cores só por CSS
 * (stroke: currentColor, que por padrão é --tinta; fill: --icone-preenchimento).
 * Decorativo por padrão (aria-hidden); com `rotulo`, vira imagem com nome.
 */
export default function Icone({ nome, tamanho = 24, rotulo, className }) {
  return (
    <svg
      className={className ? `icone ${className}` : 'icone'}
      width={tamanho}
      height={tamanho}
      viewBox="0 0 48 48"
      aria-hidden={rotulo ? undefined : 'true'}
      role={rotulo ? 'img' : undefined}
      aria-label={rotulo}
      focusable="false"
    >
      <g transform="scale(2)">{P[nome] ?? P.info}</g>
    </svg>
  );
}
