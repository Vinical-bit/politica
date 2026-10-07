import { esp, URLS } from '../fontes.js';

const sis = esp('IBGE, Síntese de Indicadores Sociais 2025', URLS.pobreza2024);

export default {
  id: 'p09-pobreza',
  numero: 9,
  trilha: 't2',
  titulo: 'Pobreza',
  abertura: 'A pobreza caiu de quase um terço para menos de um quarto da população. A base de comparação tem um detalhe.',
  pergunta: 'Quantas pessoas saíram da pobreza, e por quê?',

  ilustracao: {
    cena: 'casa',
    titulo: 'Como se mede pobreza',
    descricao: 'Uma casa ligada às peças da medição de pobreza.',
    partes: [
      { id: 'linha', icone: 'regua', titulo: 'Linha de pobreza', texto: 'Um valor de renda por pessoa por dia. Quem vive abaixo dele é contado como pobre. O IBGE usa as linhas do Banco Mundial.' },
      { id: 'extrema', icone: 'termometro', titulo: 'Extrema pobreza', texto: 'Uma linha bem mais baixa, para quem mal consegue cobrir o básico.' },
      { id: 'renda', icone: 'moeda', titulo: 'Renda de todas as fontes', rotulo: 'Todas as rendas', texto: 'Entram salário, aposentadoria e benefícios sociais. Por isso programas de transferência mexem direto no indicador.' },
      { id: 'domicilio', icone: 'casa', titulo: 'Renda por pessoa', texto: 'A renda da casa é dividida por quem mora nela. Um emprego novo numa família grande muda menos o indicador.' },
      { id: 'serie', icone: 'calendario', titulo: 'Defasagem', texto: 'A pesquisa anual sai com atraso. Em 2026, a série disponível vai até 2024.' },
    ],
  },

  dados: [
    {
      id: 'p09-pobreza',
      rotulo: 'Pobreza (linha do Banco Mundial)',
      valor: '31,6% (2022) → 23,1% (2024)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: '2022 inclui o Auxílio Brasil de R$ 600 no 2º semestre; a série vai até 2024. O benefício maior no fim de 2022 já reduzia a pobreza naquele ano. A queda até 2024 aconteceu mesmo partindo dessa base.',
      fonte: sis,
    },
    {
      id: 'p09-pessoas',
      rotulo: 'Pessoas que saíram da pobreza (2022–2024)',
      valor: '17,5 milhões (66,4 → 48,9 milhões)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: sis,
    },
    {
      id: 'p09-extrema',
      rotulo: 'Extrema pobreza',
      valor: '4,4% (2023) → 3,5% (2024), a menor da série',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: sis,
    },
  ],

  debate: {
    defesa: {
      titulo: 'O saldo para a maioria',
      texto: 'Milhões de pessoas saíram da pobreza em dois anos, e a extrema pobreza chegou ao menor nível já medido. É o que importa para a maior parte da população.',
    },
    critica: {
      titulo: 'Foto sem ver o filme',
      texto: 'A queda é uma foto do momento. Se for sustentada por gasto que não cabe no orçamento, pode não durar.',
    },
  },

  mede: {
    mede: ['Quantas pessoas vivem com renda abaixo de uma linha fixa.'],
    naoProva: [
      'Quanto da queda veio de emprego e quanto de benefícios.',
      'Que a melhora vai se manter.',
      'O que aconteceu em 2025 e 2026: os dados ainda não saíram.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Emprego ou benefício?', texto: 'Os dois entram na renda. Separar o efeito de cada um exige simular a renda sem os benefícios, o que o IBGE e pesquisadores fazem em estudos específicos.' },
      { titulo: 'Por que 2022 é uma base delicada', texto: 'O Auxílio Brasil foi elevado temporariamente no 2º semestre de 2022, ano eleitoral. Isso reduziu a pobreza naquele ano e torna a comparação mais exigente.' },
    ],
  },

  perguntas: [
    {
      id: 'p09-q1',
      enunciado: 'Um benefício temporário maior no ano de partida faz a comparação:',
      opcoes: ['Exagerar a melhora.', 'Ficar mais exigente: a base já estava ajudada.', 'Ficar impossível.'],
      correta: 1,
      explicacao: 'Se 2022 já tinha o benefício maior, a queda depois dele é mais difícil de alcançar, mas a causa fica mais difícil de separar.',
    },
    {
      id: 'p09-q2',
      enunciado: 'A renda usada para medir pobreza inclui:',
      opcoes: ['Só salário.', 'Salário, aposentadorias e benefícios sociais.', 'Só benefícios sociais.'],
      correta: 1,
      explicacao: 'É a renda de todas as fontes, dividida por morador.',
    },
  ],
};
