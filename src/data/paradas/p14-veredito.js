import { video } from '../fontes.js';

export default {
  id: 'p14-veredito',
  numero: 14,
  trilha: 't3',
  titulo: 'Veredito: depende da régua',
  abertura: 'Este site não dá nota. Ele propõe duas réguas, e cada uma conta uma história diferente.',
  pergunta: 'Como avaliar o governo com esses números?',

  ilustracao: {
    cena: 'regua',
    titulo: 'Duas réguas',
    descricao: 'Uma régua ligada aos critérios de cada lado.',
    partes: [
      { id: 'a', icone: 'casa', titulo: 'Régua A: agora', texto: 'Pergunta o que melhorou na vida de quem está embaixo: preço, emprego, renda, comida.' },
      { id: 'b', icone: 'semente', titulo: 'Régua B: depois', texto: 'Pergunta se o país está preparado para continuar melhorando: juros, dívida, investimento.' },
      { id: 'conflito', icone: 'balanca', titulo: 'O conflito', texto: 'Uma mesma decisão pode subir numa régua e descer na outra. Gastar mais ajuda agora e pesa depois.' },
      { id: 'fontes', icone: 'seloConfere', titulo: 'A fonte de cada número', texto: 'Antes de pesar um dado, veja de onde ele vem. Cada número verificado tem link para a fonte original.' },
    ],
  },

  regua: {
    A: {
      titulo: 'Régua A',
      pergunta: 'O que melhorou para quem está embaixo, agora?',
      itens: [
        { parada: 'p02-inflacao', dados: ['p02-mandato-lula3', 'p02-mesmo-ponto'] },
        { parada: 'p03-emprego-renda', dados: ['p03-media-2025', 'p03-renda-ganho', 'p03-minimo-real'] },
        { parada: 'p04-fome', dados: ['p04-saida', 'p04-inseguranca'] },
        { parada: 'p09-pobreza', dados: ['p09-pobreza', 'p09-extrema'] },
        { parada: 'p05-desalento', dados: ['p05-desalentados', 'p05-sub-2026'] },
      ],
    },
    B: {
      titulo: 'Régua B',
      pergunta: 'O país está mais capaz de continuar melhorando?',
      itens: [
        { parada: 'p07-juros', dados: ['p07-selic-atual', 'p07-juro-real'] },
        { parada: 'p10-contas-publicas', dados: ['p10-div-2026', 'p10-soma', 'p10-carga'] },
        { parada: 'p08-empresas', dados: ['p08-1x79', 'p08-rj'] },
        { parada: 'p06-endividamento', dados: ['p06-serasa'] },
      ],
    },
  },

  dados: [
  ],

  debate: {
    defesa: {
      titulo: 'A régua de quem precisa',
      texto: 'Governo existe para melhorar a vida das pessoas. Por essa régua, inflação, emprego, renda, fome e pobreza melhoraram.',
    },
    critica: {
      titulo: 'A régua de quem vem depois',
      texto: 'Melhora que não se sustenta é empréstimo do futuro. Por essa régua, juros, dívida, déficit e investimento acendem alertas.',
    },
  },

  mede: {
    mede: ['Como os mesmos dados mudam de leitura conforme o critério.'],
    naoProva: [
      'Qual régua é a certa: isso é escolha de valores, não de dados.',
      'Uma nota final do governo: este site não dá veredito.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Por que este site não dá nota', texto: 'Uma nota exigiria decidir o peso de cada régua. Esse peso depende do que cada pessoa valoriza. O papel do site é mostrar os dados com o grau de confiança de cada um.' },
      { titulo: 'O que ficou de fora', texto: 'Segurança pública, saúde, meio ambiente e política externa não entram aqui. Uma avaliação completa de governo passaria por eles.' },
    ],
  },

  perguntasAbertas: [
    'O juro alto é causa do bom resultado da inflação ou consequência do gasto?',
    'Quanto da queda da pobreza veio de política deste governo e quanto da retomada pós-pandemia?',
    'Que números mudariam sua conclusão se saíssem ao contrário?',
    'Qual régua você usa para avaliar um governo, e por quê?',
  ],

  perguntas: [
    {
      id: 'p14-q1',
      enunciado: 'Um número sem fonte conferida deveria pesar na sua avaliação:',
      opcoes: ['Igual aos verificados.', 'Menos, até ser conferido na fonte.', 'Mais que os outros.'],
      correta: 1,
      explicacao: 'Antes de pesar um número, vale saber de onde ele vem. Todo número verificado aqui tem link para a fonte.',
    },
    {
      id: 'p14-q2',
      enunciado: 'Inflação menor com juro alto. Na régua A e na régua B, isso conta:',
      opcoes: [
        'A favor nas duas.',
        'A favor na A (preço contido agora) e com alerta na B (custo do juro para o futuro).',
        'Contra nas duas.',
      ],
      correta: 1,
      explicacao: 'A mesma política pode ser lida de jeitos opostos conforme a régua.',
    },
  ],
};
