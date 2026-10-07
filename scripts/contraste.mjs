// Verifica o contraste WCAG dos pares de cor usados no site, nos dois temas.
// Uso: node scripts/contraste.mjs   (sai com código 1 se algum par ficar abaixo de AA)
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

function lerBloco(seletor) {
  const i = css.indexOf(seletor + ' {');
  if (i < 0) throw new Error(`Bloco não encontrado: ${seletor}`);
  const fim = css.indexOf('}', i);
  const vars = {};
  for (const m of css.slice(i, fim).matchAll(/--([\w-]+):\s*([^;]+);/g)) vars[m[1]] = m[2].trim();
  return vars;
}

const claro = lerBloco(':root');
const escuro = { ...claro, ...lerBloco(":root[data-tema='escuro']") };
const temas = { claro, escuro };

function rgba(v) {
  v = v.trim();
  let m = v.match(/^#([0-9a-f]{6})$/i);
  if (m) {
    const n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 1];
  }
  m = v.match(/^rgba?\(([^)]+)\)$/i);
  if (m) {
    const p = m[1].split(',').map((s) => parseFloat(s));
    return [p[0], p[1], p[2], p[3] ?? 1];
  }
  throw new Error(`Cor não reconhecida: ${v}`);
}
// cor com transparência composta sobre um fundo opaco
const sobre = (c, f) => [0, 1, 2].map((k) => c[k] * c[3] + f[k] * (1 - c[3])).concat(1);
const lum = (c) => {
  const [r, g, b] = c.slice(0, 3).map((x) => {
    x /= 255;
    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const razao = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

// [frente, fundo, mínimo, descrição]. Fundo "vidro" = --vidro composto sobre --fundo
// (pior caso para texto: a curva atrás do vidro é mais escura no claro / mais clara no escuro;
// também medimos vidro sobre --curvas).
const TEXTO = 4.5;
const NAO_TEXTO = 3;
const PARES = [
  ['texto', 'superficie', TEXTO, 'texto sobre superfície'],
  ['texto', 'superficie-2', TEXTO, 'texto sobre superfície 2'],
  ['texto', 'fundo', TEXTO, 'texto sobre fundo'],
  ['texto-suave', 'superficie', TEXTO, 'texto suave sobre superfície'],
  ['texto-suave', 'superficie-2', TEXTO, 'texto suave sobre superfície 2'],
  ['texto-suave', 'fundo', TEXTO, 'texto suave sobre fundo'],
  ['texto', 'vidro@fundo', TEXTO, 'texto sobre vidro (atrás: fundo)'],
  ['texto', 'vidro@curvas', TEXTO, 'texto sobre vidro (atrás: curva)'],
  ['texto-suave', 'vidro@fundo', TEXTO, 'texto suave sobre vidro (atrás: fundo)'],
  ['texto-suave', 'vidro@curvas', TEXTO, 'texto suave sobre vidro (atrás: curva)'],
  ['tinta-sobre', 'tinta', TEXTO, 'selo cheio: texto sobre tinta'],
  ['tinta', 'superficie', NAO_TEXTO, 'selo vazado / ícone: tinta sobre superfície'],
  ['tinta', 'icone-preenchimento', NAO_TEXTO, 'traço do ícone sobre preenchimento'],
  ['selo-cinza-texto', 'selo-cinza-fundo', TEXTO, 'selo cinza: texto sobre fundo'],
  ['borda-controle', 'superficie', NAO_TEXTO, 'borda de controle sobre superfície'],
  ['borda-controle', 'fundo', NAO_TEXTO, 'borda de controle sobre fundo'],
  ['foco', 'superficie', NAO_TEXTO, 'anel de foco sobre superfície'],
  ['foco', 'fundo', NAO_TEXTO, 'anel de foco sobre fundo'],
  ['grafico', 'superficie', NAO_TEXTO, 'barra/linha neutra sobre superfície'],
  ['grafico-ativo', 'superficie', NAO_TEXTO, 'barra/linha ativa sobre superfície'],
  ['defesa-texto', 'defesa-fundo', TEXTO, 'Defesa: rótulo (texto sobre pílula)'],
  ['defesa-borda', 'superficie', NAO_TEXTO, 'Defesa: borda do cartão'],
  ['defesa-borda', 'defesa-fundo', NAO_TEXTO, 'Defesa: borda sobre pílula'],
  ['critica-texto', 'critica-fundo', TEXTO, 'Crítica: rótulo (texto sobre pílula)'],
  ['critica-borda', 'superficie', NAO_TEXTO, 'Crítica: borda do cartão'],
  ['critica-borda', 'critica-fundo', NAO_TEXTO, 'Crítica: borda sobre pílula'],
];
// Informativos (decorativos, sem exigência WCAG): não reprovam.
const INFO = [
  ['borda', 'superficie', 'borda decorativa entre cartões'],
  ['curvas', 'fundo', 'curvas de nível do fundo'],
  ['grade', 'superficie', 'linhas de grade dos gráficos'],
];

function cor(t, nome) {
  const v = temas[t];
  const fundo = rgba(v.fundo);
  if (nome.startsWith('vidro@')) {
    const atras = sobre(rgba(v[nome.slice(6)]), fundo);
    return sobre(rgba(v.vidro), atras);
  }
  return sobre(rgba(v[nome]), fundo);
}

let falhas = 0;
for (const t of Object.keys(temas)) {
  console.log(`\nTema ${t}`);
  console.log('-'.repeat(72));
  for (const [f, b, min, desc] of PARES) {
    const r = razao(cor(t, f), cor(t, b));
    const ok = r >= min;
    if (!ok) falhas++;
    console.log(`${ok ? 'ok   ' : 'FALHA'} ${r.toFixed(2).padStart(5)}:1  (mín. ${min})  ${desc}`);
  }
  for (const [f, b, desc] of INFO) {
    const r = razao(cor(t, f), cor(t, b));
    console.log(`info  ${r.toFixed(2).padStart(5)}:1             ${desc} (decorativo)`);
  }
}
console.log(falhas ? `\n${falhas} par(es) abaixo de AA.` : '\nTodos os pares passam em AA.');
process.exit(falhas ? 1 : 0);
