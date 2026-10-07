import { useCallback, useEffect, useState } from 'react';
import { lerStorage, gravarStorage, useLocalStorage } from './useLocalStorage.js';

/**
 * Progresso de navegação: paradas visitadas e última parada vista.
 * Fica no App e alimenta só a navbar e o menu (as paradas não dependem dele).
 */
export function useProgresso() {
  const [visitadas, setVisitadas] = useState(() => new Set(lerStorage('visitadas', [])));
  const [ultima, setUltima] = useState(() => lerStorage('ultima', null));

  const marcarVisita = useCallback((id) => {
    if (!id) return;
    setUltima(id);
    gravarStorage('ultima', id);
    setVisitadas((atual) => {
      if (atual.has(id)) return atual;
      const nova = new Set(atual);
      nova.add(id);
      gravarStorage('visitadas', [...nova]);
      return nova;
    });
  }, []);

  return { visitadas, ultima, marcarVisita };
}

/**
 * Progresso de UMA parada: partes exploradas e respostas das perguntas.
 * Cada parada guarda o próprio estado, numa chave própria do localStorage,
 * para que interagir com ela não redesenhe as outras.
 */
export function useProgressoParada(paradaId) {
  const [estado, setEstado] = useLocalStorage(`parada:${paradaId}`, { partes: [], respostas: {} });

  const marcarParte = useCallback(
    (parteId) =>
      setEstado((e) => (e.partes.includes(parteId) ? e : { ...e, partes: [...e.partes, parteId] })),
    [setEstado],
  );

  const responder = useCallback(
    (perguntaId, opcao) => setEstado((e) => ({ ...e, respostas: { ...e.respostas, [perguntaId]: opcao } })),
    [setEstado],
  );

  return { partes: estado.partes, respostas: estado.respostas, marcarParte, responder };
}

/** Atualiza o hash da URL sem recarregar e sem criar entradas no histórico. */
export function useHashSincronizado(id) {
  useEffect(() => {
    if (!id) return;
    const novo = `#${id}`;
    if (window.location.hash !== novo) {
      try {
        window.history.replaceState(null, '', novo);
      } catch {
        /* ignora */
      }
    }
  }, [id]);
}
