import { useCallback, useEffect, useRef, useState } from 'react';

const PREFIXO = 'politica:';

/** Lê do localStorage com segurança. O site funciona mesmo sem storage. */
export function lerStorage(chave, padrao) {
  try {
    const bruto = window.localStorage.getItem(PREFIXO + chave);
    return bruto == null ? padrao : JSON.parse(bruto);
  } catch {
    return padrao;
  }
}

export function gravarStorage(chave, valor) {
  try {
    window.localStorage.setItem(PREFIXO + chave, JSON.stringify(valor));
  } catch {
    /* storage indisponível: segue sem salvar */
  }
}

/** Estado React persistido numa chave do localStorage (com try/catch). */
export function useLocalStorage(chave, padrao) {
  const [valor, setValor] = useState(() => lerStorage(chave, padrao));
  const primeiro = useRef(true);

  useEffect(() => {
    if (primeiro.current) {
      primeiro.current = false;
      return;
    }
    gravarStorage(chave, valor);
  }, [chave, valor]);

  const atualizar = useCallback((novo) => setValor(novo), []);
  return [valor, atualizar];
}
