// Gera UMA VEZ o fundo de curvas de nível (src/assets/curvas.svg).
// Uso: node scripts/gerar-curvas.mjs [semente]
// O SVG é usado como máscara estática; a cor vem de var(--curvas) no CSS.
import { writeFileSync, mkdirSync } from 'node:fs';

const L = 1600;
const A = 1000;
const PASSO = 10; // tamanho da célula da grade (px do viewBox)
const semente = Number(process.argv[2] ?? 1987);

// PRNG simples e determinístico
let s = semente >>> 0;
const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);

// Ruído de valor suave (grade de 9×6 com interpolação cúbica)
function criarRuido(nx, ny) {
  const g = Array.from({ length: (nx + 1) * (ny + 1) }, rand);
  const at = (i, j) => g[j * (nx + 1) + i];
  const suave = (t) => t * t * (3 - 2 * t);
  return (x, y) => {
    const fx = (x / L) * nx;
    const fy = (y / A) * ny;
    const i = Math.min(nx - 1, Math.floor(fx));
    const j = Math.min(ny - 1, Math.floor(fy));
    const tx = suave(fx - i);
    const ty = suave(fy - j);
    const a = at(i, j) + (at(i + 1, j) - at(i, j)) * tx;
    const b = at(i, j + 1) + (at(i + 1, j + 1) - at(i, j + 1)) * tx;
    return a + (b - a) * ty;
  };
}
const r1 = criarRuido(5, 3);
const r2 = criarRuido(11, 7);
const r3 = criarRuido(23, 14);

// 3 focos de relevo (morros) com tamanhos e alturas diferentes
const focos = [
  { x: L * 0.22, y: A * 0.3, r: 260, h: 1.1 },
  { x: L * 0.74, y: A * 0.62, r: 340, h: 1.35 },
  { x: L * 0.5, y: A * 0.95, r: 200, h: 0.7 },
];

function altura(x, y) {
  let h = r1(x, y) * 0.9 + r2(x, y) * 0.35 + r3(x, y) * 0.12;
  for (const f of focos) {
    const d2 = (x - f.x) ** 2 + (y - f.y) ** 2;
    h += f.h * Math.exp(-d2 / (2 * f.r * f.r));
  }
  return h;
}

const nx = Math.ceil(L / PASSO);
const ny = Math.ceil(A / PASSO);
const campo = [];
for (let j = 0; j <= ny; j++) {
  campo.push([]);
  for (let i = 0; i <= nx; i++) campo[j].push(altura(i * PASSO, j * PASSO));
}
let min = Infinity;
let max = -Infinity;
for (const linha of campo) for (const v of linha) { min = Math.min(min, v); max = Math.max(max, v); }

// Níveis com espaçamento irregular
const niveis = [];
let t = min + (max - min) * 0.06;
while (t < max) {
  niveis.push(t);
  t += (max - min) * (0.035 + rand() * 0.04);
}

const interp = (v0, v1, nivel) => (nivel - v0) / (v1 - v0 || 1e-9);

function segmentosDoNivel(nivel) {
  const segs = [];
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const a = campo[j][i];
      const b = campo[j][i + 1];
      const c = campo[j + 1][i + 1];
      const d = campo[j + 1][i];
      const x = i * PASSO;
      const y = j * PASSO;
      const pts = [];
      if ((a < nivel) !== (b < nivel)) pts.push([x + PASSO * interp(a, b, nivel), y]);
      if ((b < nivel) !== (c < nivel)) pts.push([x + PASSO, y + PASSO * interp(b, c, nivel)]);
      if ((c < nivel) !== (d < nivel)) pts.push([x + PASSO * interp(d, c, nivel), y + PASSO]);
      if ((d < nivel) !== (a < nivel)) pts.push([x, y + PASSO * interp(a, d, nivel)]);
      if (pts.length === 2) segs.push(pts);
      else if (pts.length === 4) { segs.push([pts[0], pts[1]]); segs.push([pts[2], pts[3]]); }
    }
  }
  return segs;
}

// Junta segmentos em polilinhas
function costurar(segs) {
  const chave = (p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;
  const mapa = new Map();
  segs.forEach((sg, idx) => {
    for (const p of sg) {
      const k = chave(p);
      if (!mapa.has(k)) mapa.set(k, []);
      mapa.get(k).push(idx);
    }
  });
  const usado = new Array(segs.length).fill(false);
  const linhas = [];
  for (let i = 0; i < segs.length; i++) {
    if (usado[i]) continue;
    usado[i] = true;
    const linha = [segs[i][0], segs[i][1]];
    for (const fim of [true, false]) {
      for (;;) {
        const p = fim ? linha[linha.length - 1] : linha[0];
        const prox = (mapa.get(chave(p)) || []).find((k) => !usado[k]);
        if (prox == null) break;
        usado[prox] = true;
        const [q0, q1] = segs[prox];
        const outro = chave(q0) === chave(p) ? q1 : q0;
        if (fim) linha.push(outro);
        else linha.unshift(outro);
      }
    }
    if (linha.length > 3) linhas.push(linha);
  }
  return linhas;
}

const r = (v) => Math.round(v);
let paths = '';
for (const nivel of niveis) {
  const linhas = costurar(segmentosDoNivel(nivel));
  const d = linhas
    .map((ln) => {
      // reduz pontos: guarda 1 a cada 2
      const pts = ln.filter((_, k) => k % 2 === 0 || k === ln.length - 1);
      return 'M' + pts.map((p) => `${r(p[0])} ${r(p[1])}`).join('L');
    })
    .join('');
  if (d) paths += `<path d="${d}"/>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${L} ${A}" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="#000" stroke-width="1" stroke-linejoin="round" vector-effect="non-scaling-stroke" style="vector-effect:non-scaling-stroke">${paths.replaceAll('<path ', '<path vector-effect="non-scaling-stroke" ')}</g></svg>\n`;

mkdirSync(new URL('../src/assets/', import.meta.url), { recursive: true });
writeFileSync(new URL('../src/assets/curvas.svg', import.meta.url), svg);
console.log(`curvas.svg: ${niveis.length} níveis, ${(svg.length / 1024).toFixed(0)} KB`);
