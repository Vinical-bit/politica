// Confere a regra "todo número tem selo e fonte" nos arquivos de src/data.
// Uso: node scripts/validar-dados.mjs
import { PARADAS, dadosDaParada, DADO_POR_ID, TRILHAS } from '../src/data/index.js';
import { SELOS } from '../src/data/selos.js';

const erros = [];
const ids = new Set();
let total = 0;
const institucionais = [];
const semTempo = [];
const pendentes = [];

for (const p of PARADAS) {
  const n = p.ilustracao?.partes?.length ?? 0;
  if (n < 4 || n > 8) erros.push(`${p.id}: ilustração com ${n} partes (esperado 4–8)`);
  if ((p.perguntas || []).length !== 2) erros.push(`${p.id}: precisa de 2 perguntas`);
  if (!p.debate?.defesa || !p.debate?.critica) erros.push(`${p.id}: falta Defesa ou Crítica`);
  for (const d of dadosDaParada(p)) {
    total++;
    if (ids.has(d.id)) erros.push(`id repetido: ${d.id}`);
    ids.add(d.id);
    if (!SELOS[d.selo]) erros.push(`${d.id}: selo inválido (${d.selo})`);
    if (d.ressalva) erros.push(`${d.id}: ressalva deve ir para saibaMais`);
    if (d.selo === 'pendente') pendentes.push(`${d.id} — ${d.rotulo}${d.pendencia ? ` (${d.pendencia})` : ''}`);
    if (d.selo === 'verificado' && d.fonte?.tipo === 'video') erros.push(`${d.id}: verificado não pode ter o vídeo como fonte`);
    if (!d.fonte?.url?.startsWith('https://')) erros.push(`${d.id}: fonte sem URL https`);
    if (!['especifico', 'institucional', 'video'].includes(d.fonte?.tipo)) erros.push(`${d.id}: tipo de fonte inválido`);
    if (d.fonte?.tipo === 'institucional') institucionais.push(`${d.id} — ${d.rotulo} (${d.fonte.nome})`);
    if (d.fonte?.tipo === 'video' && d.fonte.t == null) semTempo.push(`${d.id} — ${d.rotulo}`);
  }
  for (const it of [...(p.regua?.A?.itens || []), ...(p.regua?.B?.itens || [])]) {
    for (const did of it.dados) if (!DADO_POR_ID[did]) erros.push(`régua: dado inexistente ${did}`);
  }
}
const todasParadas = TRILHAS.flatMap((t) => t.paradas);
for (const id of todasParadas) if (!PARADAS.find((p) => p.id === id)) erros.push(`trilha aponta para parada inexistente ${id}`);

console.log(`Paradas: ${PARADAS.length} · Dados: ${total}`);
if (process.argv.includes('--listas')) {
  console.log('\nInstitucionais:\n' + institucionais.join('\n'));
  console.log('\nVídeo sem minuto:\n' + semTempo.join('\n'));
}
if (pendentes.length) {
  console.warn(`\nATENÇÃO: ${pendentes.length} número(s) pendente(s) de checagem — não publique antes de resolver:`);
  if (process.argv.includes('--listas')) console.warn(pendentes.join('\n'));
}
if (erros.length) {
  console.error('\nErros:\n' + erros.join('\n'));
  process.exit(1);
}
console.log('OK: todo dado tem selo válido e fonte.');
