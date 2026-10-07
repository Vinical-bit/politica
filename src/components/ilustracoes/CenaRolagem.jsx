import { memo, useEffect, useRef, useState } from 'react';
import { DesenhoIcone } from './Icones.jsx';
import RotuloIlustracao from '../graficos/RotuloIlustracao.jsx';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

// Palco da cena (unidades do viewBox)
const L = 360;
const A = 300;
const C = { x: 180, y: 150 };
const ZOOM = 1.55;
// A câmera mira um pouco acima da parte, para o balão caber no quadro
const SUBIR_ALVO = 22;

// Cenas sem personagens: 'familia' usa a casa.
const CENA_PARA_ICONE = { familia: 'casa' };

function quebrar(texto, max = 14) {
  const palavras = texto.split(' ');
  const linhas = [''];
  for (const p of palavras) {
    const atual = linhas[linhas.length - 1];
    if ((atual + ' ' + p).trim().length > max && atual) linhas.push(p);
    else linhas[linhas.length - 1] = (atual + ' ' + p).trim();
  }
  return linhas.slice(0, 2);
}

function posicoes(n) {
  const rx = 132;
  const ry = 96;
  return Array.from({ length: n }, (_, i) => {
    const ang = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return { x: C.x + rx * Math.cos(ang), y: C.y + ry * Math.sin(ang) };
  });
}

/** Família em cartoon (sem traços realistas): dois adultos e uma criança sob um telhado. */
function Familia({ cx, cy }) {
  const pessoa = (dx, dy, r, larg, alt, pele, roupa, k) => (
    <g key={k}>
      <path
        d={`M${cx + dx - larg / 2} ${cy + dy + alt} V${cy + dy + r + 6} Q${cx + dx - larg / 2} ${cy + dy + r} ${cx + dx} ${cy + dy + r} Q${cx + dx + larg / 2} ${cy + dy + r} ${cx + dx + larg / 2} ${cy + dy + r + 6} V${cy + dy + alt} Z`}
        className={`familia__roupa familia__roupa--${roupa}`}
      />
      <circle cx={cx + dx} cy={cy + dy} r={r} className={`familia__pele familia__pele--${pele}`} />
      <circle cx={cx + dx - r * 0.35} cy={cy + dy - r * 0.1} r={r * 0.12} className="familia__olho" />
      <circle cx={cx + dx + r * 0.35} cy={cy + dy - r * 0.1} r={r * 0.12} className="familia__olho" />
      <path d={`M${cx + dx - r * 0.35} ${cy + dy + r * 0.3} Q${cx + dx} ${cy + dy + r * 0.62} ${cx + dx + r * 0.35} ${cy + dy + r * 0.3}`} className="familia__boca" />
    </g>
  );
  return (
    <g className="familia">
      <path d={`M${cx - 40} ${cy - 22} L${cx} ${cy - 46} L${cx + 40} ${cy - 22}`} className="familia__telhado" />
      {pessoa(-21, -12, 10, 24, 50, 'a', 'a', 'p1')}
      {pessoa(21, -14, 10.5, 25, 52, 'b', 'b', 'p2')}
      {pessoa(0, 8, 7.5, 17, 30, 'b', 'c', 'p3')}
    </g>
  );
}

/** Câmera: leva o ponto (x, y) para o centro do palco com o zoom z.
 *  Sem limite nas bordas: o cenário é desenhado bem além do quadro,
 *  então a parte (e o balão) sempre ficam no centro, nunca cortados. */
function camera(alvo, z) {
  if (!alvo) return 'translate(0px, 0px) scale(1)';
  const x = alvo.x;
  const y = alvo.y - SUBIR_ALVO;
  return `translate(${C.x - x * z}px, ${C.y - y * z}px) scale(${z})`;
}

/**
 * Cena que anda com a rolagem (cartoon editorial).
 * O palco fica preso no topo; cada passo de texto que passa pela tela
 * leva a "câmera" até uma parte do desenho e marca a parte como explorada.
 * Todo o conteúdo está nos passos (texto comum): o palco é decorativo.
 */
function CenaRolagem({ ilustracao, exploradas, onExplorar }) {
  const { partes } = ilustracao;
  const n = partes.length;
  const [ativo, setAtivo] = useState(-1); // -1 = visão geral
  const passosRef = useRef([]);
  const palcoRef = useRef(null);
  const reduzir = usePrefersReducedMotion();
  const pos = posicoes(n);
  const icoCena = CENA_PARA_ICONE[ilustracao.cena] ?? ilustracao.cena;

  // Passo ativo = o último cujo topo já passou de 60% da altura da tela.
  // Calculado a cada quadro de rolagem (e não por faixa do IntersectionObserver),
  // para uma rolagem rápida não "pular" passos.
  useEffect(() => {
    let quadro = 0;
    const medir = () => {
      quadro = 0;
      // Linha de ativação: no celular, um pouco abaixo do palco (que fica preso no topo);
      // em tela larga (palco ao lado), no meio da tela.
      const palco = palcoRef.current?.getBoundingClientRect();
      const lado = window.matchMedia('(min-width: 900px)').matches;
      const linha = !lado && palco ? palco.bottom + (window.innerHeight - palco.bottom) * 0.45 : window.innerHeight * 0.72;
      const els = passosRef.current;
      let novo = -1;
      for (let i = 0; i < n; i++) {
        const el = els[i];
        if (el && el.getBoundingClientRect().top <= linha) novo = i;
      }
      // Depois do último passo, a câmera volta para a visão geral
      const ultimo = els[n - 1];
      if (ultimo && ultimo.getBoundingClientRect().bottom < linha * 0.35) novo = n;
      setAtivo(novo);
    };
    const pedir = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };
    medir();
    window.addEventListener('scroll', pedir, { passive: true });
    window.addEventListener('resize', pedir);
    return () => {
      window.removeEventListener('scroll', pedir);
      window.removeEventListener('resize', pedir);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [n]);

  // Marca como exploradas todas as partes já percorridas (inclusive as puladas)
  useEffect(() => {
    for (let i = 0; i <= Math.min(ativo, n - 1); i++) onExplorar(partes[i].id);
  }, [ativo, n, partes, onExplorar]);

  const alvo = ativo >= 0 && ativo < n ? pos[ativo] : null;
  const zoom = alvo ? ZOOM : 1;
  const transCamera = camera(alvo, zoom);
  // O fundo anda menos que o primeiro plano: dá profundidade (paralaxe)
  const zFundo = 1 + (zoom - 1) * 0.35;
  const transFundo = alvo
    ? `translate(${(C.x - alvo.x) * 0.35 - (zFundo - 1) * C.x}px, ${(C.y - alvo.y) * 0.25 - (zFundo - 1) * C.y}px) scale(${zFundo})`
    : 'translate(0px, 0px) scale(1)';

  const irPara = (i) => {
    const el = passosRef.current[i];
    if (!el) return;
    el.scrollIntoView({ behavior: reduzir ? 'auto' : 'smooth', block: 'center' });
  };

  const progresso = n ? Math.min(1, Math.max(0, ativo + 1) / n) : 0;

  return (
    <figure className={`cena${alvo ? ' is-zoom' : ''}`}>
      <figcaption className="ilustracao__titulo">{ilustracao.titulo}</figcaption>
      {ilustracao.argumento && <RotuloIlustracao />}

      <div className="cena__palco" ref={palcoRef}>
        <svg viewBox={`0 0 ${L} ${A}`} className="cena__svg" role="img" aria-label={`${ilustracao.titulo}. ${ilustracao.descricao}`}>
          <defs>
            <clipPath id={`moldura-${ilustracao.cena}-${n}`}>
              <rect x="0" y="0" width={L} height={A} rx="18" />
            </clipPath>
          </defs>
          <g clipPath={`url(#moldura-${ilustracao.cena}-${n})`}>
            {/* Fundo: céu, sol, nuvens e colinas (anda devagar) */}
            <g className="cena__camada" style={{ transform: transFundo }}>
              <rect x={-L} y={-A} width={L * 3} height={A * 3} className="cena__ceu" />
              <g className="cena__sol">
                <circle cx="300" cy="52" r="22" />
                {Array.from({ length: 8 }, (_, k) => {
                  const a = (k * Math.PI) / 4;
                  return <line key={k} x1={300 + 29 * Math.cos(a)} y1={52 + 29 * Math.sin(a)} x2={300 + 37 * Math.cos(a)} y2={52 + 37 * Math.sin(a)} />;
                })}
              </g>
              <path className="cena__nuvem" d="M40 70a14 14 0 0 1 26-8 12 12 0 0 1 22 6 10 10 0 0 1 2 20H44a10 10 0 0 1-4-18z" />
              <path className="cena__nuvem" d="M196 40a10 10 0 0 1 19-6 9 9 0 0 1 16 5 8 8 0 0 1 1 15h-34a8 8 0 0 1-2-14z" />
              <path className="cena__colina" d="M-360 240 C-200 200 -80 190 20 214 C110 236 150 176 250 180 C330 184 380 214 720 220 V600 H-360Z" />
            </g>

            {/* Primeiro plano: chão, objeto central e partes (anda com a câmera) */}
            <g className="cena__camada" style={{ transform: transCamera }}>
              <path className="cena__chao" d="M-360 236 C-120 226 80 250 180 244 C280 238 460 222 720 232 V600 H-360Z" />
              <path className="cena__chao-risco" d="M30 262h26M120 276h18M250 266h30M320 284h14" />

              {pos.map((p, i) => (
                <path
                  key={`l-${partes[i].id}`}
                  d={`M${C.x} ${C.y} Q${(C.x + p.x) / 2} ${Math.min(C.y, p.y) - 18} ${p.x} ${p.y}`}
                  className={`cena__ligacao${i === ativo ? ' is-ativa' : ''}`}
                />
              ))}

              <g className="cena__heroi" aria-hidden="true">
                <ellipse cx={C.x} cy={C.y + 50} rx="46" ry="9" className="cena__sombra" />
                <circle cx={C.x} cy={C.y} r="50" className="cena__heroi-fundo" />
                {ilustracao.cena === 'familia' ? (
                  <Familia cx={C.x} cy={C.y} />
                ) : (
                  <g transform={`translate(${C.x - 36} ${C.y - 36}) scale(3)`} className="desenho cena__traco cena__heroi-desenho">
                    <DesenhoIcone nome={icoCena} />
                  </g>
                )}
              </g>

              {partes.map((p, i) => {
                const { x, y } = pos[i];
                const vista = exploradas.includes(p.id);
                const linhas = quebrar(p.rotulo ?? p.titulo);
                const ehAtiva = i === ativo;
                return (
                  <g key={p.id} className={`cena__parte${ehAtiva ? ' is-ativa' : ''}${vista ? ' is-vista' : ''}`} aria-hidden="true">
                    <ellipse cx={x} cy={y + 27} rx="20" ry="4.5" className="cena__sombra" />
                    <g className="cena__parte-corpo" style={{ transformOrigin: `${x}px ${y}px` }}>
                      <circle cx={x} cy={y} r="24" className="cena__parte-fundo" />
                      <g transform={`translate(${x - 14.4} ${y - 14.4}) scale(1.2)`} className="desenho cena__traco">
                        <DesenhoIcone nome={p.icone} />
                      </g>
                    </g>
                    {vista && (
                      <g transform={`translate(${x + 17} ${y - 19})`} className="cena__marca">
                        <circle r="7.5" />
                        <path d="M-3.4 0.2l2.3 2.3L3.6-2.3" />
                      </g>
                    )}
                    {/* Balão com o nome da parte: aparece quando a câmera chega */}
                    <g className="cena__balao" style={{ transformOrigin: `${x}px ${y - 30}px` }}>
                      <rect x={x - 44} y={y - 50 - (linhas.length - 1) * 11} width="88" height={18 + (linhas.length - 1) * 11} rx="9" />
                      <path d={`M${x - 5} ${y - 32.5}l5 6 5-6`} />
                      <text x={x} y={y - 37.5 - (linhas.length - 1) * 11} textAnchor="middle">
                        {linhas.map((l, k) => (
                          <tspan key={k} x={x} dy={k ? 11 : 0}>
                            {l}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </g>
          <rect x="1" y="1" width={L - 2} height={A - 2} rx="18" className="cena__moldura" />
        </svg>

        {/* Linha do tempo, como a barra de um vídeo: cada marca leva a uma parte */}
        <div className="cena__linha-tempo">
          <div className="cena__trilho" aria-hidden="true">
            <div className="cena__preenchido" style={{ transform: `scaleX(${progresso})` }} />
          </div>
          <ol className="cena__marcas">
            {partes.map((p, i) => (
              <li key={p.id}>
                <button
                  type="button"
                  className={`cena__marca-botao${i === ativo ? ' is-ativa' : ''}${exploradas.includes(p.id) ? ' is-vista' : ''}`}
                  aria-label={`Ir para: ${p.titulo}`}
                  aria-current={i === ativo ? 'step' : undefined}
                  onClick={() => irPara(i)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>

      <ol className="cena__passos">
        {partes.map((p, i) => (
          <li
            key={p.id}
            ref={(el) => {
              passosRef.current[i] = el;
            }}
            data-passo={i}
            className={`cena__passo${i === ativo ? ' is-ativa' : ''}`}
          >
            <p className="cena__passo-num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
            </p>
            <h4 className="cena__passo-titulo">{p.titulo}</h4>
            <p className="cena__passo-texto">{p.texto}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default memo(CenaRolagem);
