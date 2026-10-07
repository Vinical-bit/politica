import { memo, useEffect, useState } from 'react';

/** Barra fina colada no topo: quanto da página já foi percorrido. Estado próprio. */
function BarraProgresso() {
  const [fracao, setFracao] = useState(0);
  useEffect(() => {
    let quadro = 0;
    const medir = () => {
      quadro = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setFracao(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const aoRolar = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };
    medir();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
    return () => {
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, []);
  const pct = Math.round(fracao * 100);
  return (
    <div className="barra-progresso" role="progressbar" aria-label="Progresso da leitura" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
      <div className="barra-progresso__preenchimento" style={{ transform: `scaleX(${fracao})` }} />
    </div>
  );
}

export default memo(BarraProgresso);
