// Junta trilhas e paradas. Para atualizar um número, edite só o arquivo da parada em ./paradas/.
import { TRILHAS } from './trilhas.js';
import p01 from './paradas/p01-promessa.js';
import p02 from './paradas/p02-inflacao.js';
import p03 from './paradas/p03-emprego-renda.js';
import p04 from './paradas/p04-fome.js';
import p05 from './paradas/p05-desalento.js';
import p06 from './paradas/p06-endividamento.js';
import p07 from './paradas/p07-juros.js';
import p08 from './paradas/p08-empresas.js';
import p09 from './paradas/p09-pobreza.js';
import p10 from './paradas/p10-contas-publicas.js';
import p11 from './paradas/p11-crescimento.js';
import p12 from './paradas/p12-educacao.js';
import p13 from './paradas/p13-reforma-tributaria.js';
import p14 from './paradas/p14-veredito.js';

export { TRILHAS };
export { SELOS, ORDEM_SELOS } from './selos.js';

export const PARADAS = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14];

export const PARADA_POR_ID = Object.fromEntries(PARADAS.map((p) => [p.id, p]));

export const TRILHA_POR_ID = Object.fromEntries(TRILHAS.map((t) => [t.id, t]));

/** Todos os dados (com selo e fonte) de uma parada, venham de onde vierem. */
export function dadosDaParada(p) {
  const lista = [...(p.dados || [])];
  if (p.placar) lista.push(...p.placar.itens);
  for (const g of p.graficos || []) if (g.itens) lista.push(...g.itens);
  if (p.choques) lista.push(...p.choques.defesa.itens, ...p.choques.critica.itens);
  return lista;
}

/** Índice global de dados por id (usado pela Régua A/B). */
export const DADO_POR_ID = Object.fromEntries(
  PARADAS.flatMap((p) => dadosDaParada(p).map((d) => [d.id, { ...d, paradaId: p.id }])),
);
