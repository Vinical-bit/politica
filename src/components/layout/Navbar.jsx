import { memo, useCallback, useRef, useState } from 'react';
import { TRILHAS, PARADA_POR_ID } from '../../data/index.js';
import Icone from '../ilustracoes/Icones.jsx';
import BarraProgresso from './BarraProgresso.jsx';
import MenuParadas from './MenuParadas.jsx';
import { useTema } from '../../hooks/useTema.js';

/** Navbar fixa: nome, as 3 trilhas e o botão "Paradas". */
function Navbar({ ativa, visitadas, irPara }) {
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef(null);
  const trilhaAtiva = ativa ? PARADA_POR_ID[ativa]?.trilha : null;
  const fechar = useCallback(() => setAberto(false), []);
  const { tema, alternar } = useTema();
  const escuro = tema === 'escuro';

  return (
    <header className="navbar vidro">
      <BarraProgresso />
      <nav className="navbar__interno" aria-label="Navegação principal">
        <a
          href="#inicio"
          className="navbar__marca"
          onClick={(e) => {
            e.preventDefault();
            irPara('inicio');
          }}
        >
          Política
        </a>
        <ul className="navbar__trilhas">
          {TRILHAS.map((t) => (
            <li key={t.id}>
              <a
                href={`#${t.paradas[0]}`}
                className={`navbar__trilha${trilhaAtiva === t.id ? ' is-ativa' : ''}`}
                aria-current={trilhaAtiva === t.id ? 'true' : undefined}
                aria-label={`Trilha ${t.numero}: ${t.curto}`}
                onClick={(e) => {
                  e.preventDefault();
                  irPara(t.paradas[0]);
                }}
              >
                <span className="navbar__trilha-num" aria-hidden="true">
                  {t.numero}
                </span>
                <span className="navbar__trilha-nome">
                  <span className="visualmente-oculto">Trilha {t.numero}: </span>
                  {t.curto}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="navbar__tema"
          aria-pressed={escuro}
          aria-label="Tema escuro"
          title={escuro ? 'Voltar ao tema claro' : 'Usar tema escuro'}
          onClick={alternar}
        >
          <Icone nome={escuro ? 'lua' : 'sol'} tamanho={22} />
        </button>
        <button
          type="button"
          ref={botaoRef}
          className="navbar__paradas"
          aria-expanded={aberto}
          aria-controls="menu-paradas"
          onClick={() => setAberto((a) => !a)}
        >
          <Icone nome="menu" tamanho={20} />
          <span>Paradas</span>
        </button>
      </nav>
      <MenuParadas aberto={aberto} onFechar={fechar} ativa={ativa} visitadas={visitadas} irPara={irPara} botaoRef={botaoRef} />
    </header>
  );
}

export default memo(Navbar);
