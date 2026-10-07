import { video, inst, esp, URLS } from '../fontes.js';

export default {
  id: 'p04-fome',
  numero: 4,
  trilha: 't1',
  titulo: 'Fome',
  abertura: 'O Brasil saiu do Mapa da Fome e ficou fora no relatório seguinte. O detalhe está em como a ONU calcula.',
  pergunta: 'O Brasil saiu do Mapa da Fome. O que isso quer dizer?',

  ilustracao: {
    cena: 'prato',
    titulo: 'Como funciona o Mapa da Fome',
    descricao: 'Um prato ligado às peças do cálculo da FAO.',
    partes: [
      { id: 'fao', icone: 'globo', titulo: 'Quem mede', texto: 'A FAO, agência da ONU para alimentação, publica todo ano o relatório SOFI, sobre segurança alimentar no mundo.' },
      { id: 'subalimentacao', icone: 'prato', titulo: 'Subalimentação', texto: 'É a parcela da população que, de forma habitual, consome menos calorias do que precisa para uma vida ativa.' },
      { id: 'linha', icone: 'regua', titulo: 'A linha de corte', texto: 'O país fica fora do mapa quando a subalimentação fica abaixo de um limite fixo da FAO.' },
      { id: 'trienio', icone: 'calendario', titulo: 'Média de três anos', texto: 'Cada relatório usa a média de três anos. Por isso um relatório publicado num governo ainda carrega anos do governo anterior.' },
      { id: 'inseguranca', icone: 'escada', titulo: 'Insegurança alimentar', texto: 'É outro indicador: mede quem precisou reduzir a quantidade ou a qualidade da comida. Pode existir mesmo com o país fora do mapa.' },
    ],
  },

  dados: [
    {
      id: 'p04-corte',
      rotulo: 'Linha de corte do Mapa da Fome',
      valor: 'Abaixo de 2,5% de subalimentação',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: inst('fao', 'relatório SOFI (metodologia)'),
    },
    {
      id: 'p04-saida',
      rotulo: 'Situação nos relatórios',
      valor: 'Saiu em 2025 (triênio 2022–2024) e ficou fora em 2026 (2023–2025)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'O relatório de 2025 ainda inclui 2022; o primeiro inteiramente do atual governo é o de 2026. Foi a segunda saída do Brasil do mapa. A fonte primária é o relatório SOFI, da FAO.',
      fonte: esp('MDS, relatório SOFI 2026 da FAO', URLS.fome2026Mds),
    },
    {
      id: 'p04-2020-2022',
      rotulo: 'Subalimentação em 2020–2022',
      valor: '3,5%',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: inst('fao', 'relatório SOFI'),
      compacto: true,
    },
    {
      id: 'p04-narracao',
      rotulo: 'Subalimentação em 2022–2024 (SOFI 2025)',
      valor: '2,4%',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'O limite para estar no Mapa da Fome é 2,5%. A FAO publica só "menos de 2,5%"; o 2,4% é o número citado pelo Instituto Fome Zero com base no relatório de 2025. O relatório de 2026 (2023–2025) manteve o Brasil abaixo de 2,5%.',
      fonte: esp('Instituto Fome Zero, dados da FAO (SOFI 2025)', URLS.fomeIfz2025),
      compacto: true,
    },
    {
      id: 'p04-inseguranca',
      rotulo: 'Insegurança alimentar moderada ou grave (2023–2025)',
      valor: '9,6%, cerca de 20,3 milhões de pessoas',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Mostrado como contexto: fora do mapa não quer dizer fome zero.',
      fonte: esp('Consea, relatório SOFI 2026', URLS.sofi2026Consea),
    },
    {
      id: 'p04-lares',
      rotulo: 'Lares que saíram da insegurança alimentar em um ano (IBGE)',
      valor: 'Mais de 2 milhões',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: esp('IBGE, segurança alimentar 2024', URLS.laresInseguranca),
      compacto: true,
    },
    {
      id: 'p04-2014',
      rotulo: 'Primeira saída do mapa',
      valor: 'Relatório de 2014 (critério da época: menos de 5%)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'O relatório de 2014 usou dados de 2013. Até 2016, a FAO considerava fora do mapa o país que ficasse abaixo de 5% por três anos seguidos. O critério e a metodologia mudaram desde então.',
      fonte: esp('Instituto Fome Zero, quando um país sai do Mapa da Fome', URLS.fomeIfz2014),
      compacto: true,
    },
  ],

  debate: {
    defesa: {
      titulo: 'Fora do mapa duas vezes seguidas',
      texto: 'O país saiu do Mapa da Fome e continuou fora no relatório seguinte, já só com anos do atual governo. A insegurança alimentar também caiu.',
    },
    critica: {
      titulo: 'A média de três anos engana o calendário',
      texto: 'O primeiro relatório de saída ainda inclui 2022. E milhões de pessoas seguem com insegurança alimentar moderada ou grave.',
    },
  },

  mede: {
    mede: ['A parcela da população que come menos calorias do que precisa, em média de três anos.'],
    naoProva: [
      'Que ninguém passa fome no país.',
      'Qual política causou a melhora.',
      'O que aconteceu em um ano isolado.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Mapa da Fome e insegurança alimentar', texto: 'São medidas diferentes. O mapa olha calorias. A insegurança alimentar pergunta às famílias se faltou comida ou se precisaram comer pior. Ver as duas juntas dá um retrato mais completo.' },
      { titulo: 'Fonte de governo e fonte primária', texto: 'Ministérios divulgam o relatório da FAO com o enquadramento deles. Para conferir o número, o caminho é o próprio relatório SOFI.' },
    ],
  },

  perguntas: [
    {
      id: 'p04-q1',
      enunciado: 'O relatório de 2025 usa a média de 2022 a 2024. O que isso significa?',
      opcoes: [
        'O resultado reflete só o governo atual.',
        'O resultado mistura um ano do governo anterior com dois do atual.',
        'O resultado é uma projeção.',
      ],
      correta: 1,
      explicacao: 'Médias de três anos suavizam oscilações, mas atrasam e misturam períodos.',
    },
    {
      id: 'p04-q2',
      enunciado: 'O país está fora do Mapa da Fome. Isso quer dizer que:',
      opcoes: [
        'Ninguém mais passa fome.',
        'A subalimentação está abaixo do limite da FAO, mas ainda pode haver insegurança alimentar.',
        'A insegurança alimentar é zero.',
      ],
      correta: 1,
      explicacao: 'Estar fora do mapa é ficar abaixo de uma linha. Milhões de pessoas ainda relatam insegurança alimentar.',
    },
  ],
};
