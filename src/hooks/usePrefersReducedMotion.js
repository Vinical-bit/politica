import { useEffect, useState } from 'react';

const CONSULTA = '(prefers-reduced-motion: reduce)';

export function usePrefersReducedMotion() {
  const [reduzir, setReduzir] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(CONSULTA).matches : false,
  );
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia(CONSULTA);
    const aoMudar = () => setReduzir(mq.matches);
    mq.addEventListener('change', aoMudar);
    return () => mq.removeEventListener('change', aoMudar);
  }, []);
  return reduzir;
}

/** true quando o dispositivo tem mouse (hover real). No celular é false. */
export function usePodeHover() {
  const [pode, setPode] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)').matches : true,
  );
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const aoMudar = () => setPode(mq.matches);
    mq.addEventListener('change', aoMudar);
    return () => mq.removeEventListener('change', aoMudar);
  }, []);
  return pode;
}
