import { useCallback, useEffect, useState } from 'react';

const CHAVE = 'politica:tema';

function temaAtual() {
  if (typeof document === 'undefined') return 'claro';
  const t = document.documentElement.getAttribute('data-tema');
  if (t === 'claro' || t === 'escuro') return t;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
}

/**
 * Tema claro/escuro. A primeira visita segue o sistema (o script do <head>
 * já define data-tema antes do primeiro desenho). A escolha manual fica em
 * localStorage, com try/catch: o site funciona sem armazenamento.
 */
export function useTema() {
  const [tema, setTema] = useState(temaAtual);

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema);
  }, [tema]);

  const alternar = useCallback(() => {
    setTema((t) => {
      const novo = t === 'escuro' ? 'claro' : 'escuro';
      try {
        window.localStorage.setItem(CHAVE, novo);
      } catch {
        /* sem armazenamento: vale só nesta visita */
      }
      return novo;
    });
  }, []);

  return { tema, alternar };
}
