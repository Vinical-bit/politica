import { video, inst, esp, URLS } from '../fontes.js';

const iposB3 = esp('Acionista, histórico de IPOs na B3 (contagem da B3)', URLS.iposB3Historico);

const b3 = inst('b3', 'ofertas públicas iniciais (IPOs)');


export default {
  id: 'p08-empresas',
  numero: 8,
  trilha: 't2',
  titulo: 'Empresas e investimento',
  abertura: 'Com juro alto, abrir capital na bolsa ficou raro e pedidos de recuperação judicial subiram. Parte disso começou antes de 2023.',
  pergunta: 'As empresas estão investindo mais ou menos?',

  ilustracao: {
    cena: 'predio',
    titulo: 'Os caminhos de uma empresa',
    descricao: 'Um prédio de empresa ligado às situações desta parada.',
    partes: [
      { id: 'ipo', icone: 'sino', titulo: 'IPO', texto: 'Oferta pública inicial: quando uma empresa vende ações na bolsa pela primeira vez para captar dinheiro.' },
      { id: 'janela', icone: 'janela', titulo: 'Janela de mercado', texto: 'IPOs se concentram quando os juros estão baixos e os investidores aceitam mais risco. Com juro alto, a renda fixa compete.' },
      { id: 'rj', icone: 'alerta', titulo: 'Recuperação judicial', texto: 'Pedido na Justiça para renegociar dívidas e evitar a falência. Sobe quando o crédito fica caro e as vendas caem.' },
      { id: 'maquila', icone: 'caminhao', titulo: 'Maquila no Paraguai', texto: 'Regime paraguaio com imposto baixo para quem produz lá e exporta. Atrai empresas brasileiras há anos.' },
      { id: 'investimento', icone: 'grafico', titulo: 'Investimento', texto: 'É o que amplia a capacidade de produzir no futuro: máquinas, fábricas, obras. É o que o plano prometia elevar.' },
    ],
  },

  graficos: [
    {
      tipo: 'barras',
      id: 'p08-g-ipos',
      titulo: 'IPOs na B3 por ano',
      unidade: '',
      descricao: 'Barras com o número de aberturas de capital por ano, de 2019 a 2026.',
      nota: '2026: até 31/08/2026.',
      itens: [
        { id: 'p08-ipo-2019', rotulo: 'IPOs em 2019', curto: '2019', numero: 5, valor: '5', selo: 'verificado', ressalva: null, saibaMais: null, fonte: iposB3 },
        { id: 'p08-ipo-2020', rotulo: 'IPOs em 2020', curto: '2020', numero: 28, valor: '28', selo: 'verificado', ressalva: null, saibaMais: 'Contagem da B3, que inclui empresas estrangeiras listadas por BDR. Contando só empresas que seguem listadas, seriam 24.', fonte: iposB3 },
        { id: 'p08-ipo-2021', rotulo: 'IPOs em 2021', curto: '2021', numero: 46, valor: '46', selo: 'verificado', ressalva: null, saibaMais: 'Contagem da B3, que inclui o BDR do Nubank (dez/2021). Contando só empresas que seguem listadas, seriam 37. O último IPO local de 2021 foi em setembro.', fonte: iposB3 },
        { id: 'p08-ipo-2022', rotulo: 'IPOs em 2022', curto: '2022', numero: 0, valor: '0', selo: 'verificado', ressalva: null, saibaMais: 'Zero IPOs, ainda no governo anterior.', fonte: b3 },
        { id: 'p08-ipo-2023', rotulo: 'IPOs em 2023', curto: '2023', numero: 0, valor: '0', selo: 'verificado', ressalva: null, saibaMais: null, fonte: b3 },
        { id: 'p08-ipo-2024', rotulo: 'IPOs em 2024', curto: '2024', numero: 0, valor: '0', selo: 'verificado', ressalva: null, saibaMais: null, fonte: iposB3 },
        { id: 'p08-ipo-2025', rotulo: 'IPOs em 2025', curto: '2025', numero: 0, valor: '0', selo: 'verificado', ressalva: null, saibaMais: null, fonte: iposB3 },
        { id: 'p08-ipo-2026', rotulo: 'IPOs em 2026 (até 31/08)', curto: '2026*', numero: 1, valor: '1', selo: 'verificado', ressalva: null, saibaMais: 'A Compass, em maio de 2026, encerrou cinco anos sem IPOs na B3.', fonte: esp('Poder360, Compass estreia na bolsa e encerra jejum de 5 anos', URLS.ipoCompass2026) },
      ],
    },
  ],

  dados: [
    {
      id: 'p08-1x79',
      rotulo: 'IPOs: Lula 3 × mandato anterior',
      valor: '1 × 79',
      selo: 'pendente',
      ressalva: null, pendencia: 'A Selic está acima de 10% desde fev/2022; os 79 são o boom de 2020–21, com juro mínimo.',
      saibaMais: 'A seca de IPOs começou no fim de 2021, antes do Lula 3, e 2022 também teve zero. Os 79 são a contagem da B3 (5 + 28 + 46), que inclui BDRs de empresas estrangeiras.',
      fonte: b3,
    },
    {
      id: 'p08-rj',
      rotulo: 'Recuperações judiciais em 2025 (Serasa)',
      valor: '2.466, o maior número desde 2012',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Alta de 12,9% sobre 2024. A série da Serasa começa em 2012.',
      fonte: esp('InfoMoney, dados da Serasa Experian', URLS.recuperacaoJudicial2025),
    },
    {
      id: 'p08-paraguai',
      rotulo: 'Maquiladoras brasileiras no Paraguai',
      valor: '40 (17,2%) iniciaram operação a partir de 2023',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Na mesma matéria, outras 26 se mudaram em 2021–2022, no governo anterior.',
      fonte: esp('Poder360, empresas brasileiras no Paraguai', URLS.paraguaiPoder360),
    },
  ],

  debate: {
    defesa: {
      titulo: 'Folga menor para quem já tinha muito',
      texto: 'O juro alto apertou a margem de empresários e da bolsa. Foi o preço para segurar a inflação que corrói a renda de quem não tem investimentos.',
    },
    critica: {
      titulo: 'Negócios que morrem no freio',
      texto: 'O maior problema não é a bolsa: são as empresas que fecham ou não nascem com o crédito caro e a atividade desacelerada.',
    },
  },

  mede: {
    mede: ['Quantas empresas abriram capital, pediram recuperação ou se instalaram no Paraguai.'],
    naoProva: [
      'O total investido na economia, que inclui empresas fora da bolsa.',
      'Que a seca de IPOs começou neste governo: ela começou em 2021.',
      'O motivo de cada empresa.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Por que IPO depende de juro', texto: 'Quando a renda fixa paga muito, investidores aceitam menos risco e pagam menos por ações. Empresas adiam a estreia na bolsa até a janela reabrir.' },
      { titulo: 'Comparar mandatos pelo número de IPOs', texto: 'Mandatos com juro baixo tendem a ter mais IPOs. A comparação mostra mais o ciclo de juros do que a política de cada governo.' },
    ],
  },

  perguntas: [
    {
      id: 'p08-q1',
      enunciado: 'A seca de IPOs começou em ago/2021. Isso indica que:',
      opcoes: [
        'O Lula 3 causou a seca.',
        'A seca tem relação com o ciclo de juros, que subia desde 2021.',
        'IPOs não dependem de juros.',
      ],
      correta: 1,
      explicacao: 'Se o fenômeno começou antes, atribuí-lo só ao governo seguinte é um erro de cronologia.',
    },
    {
      id: 'p08-q2',
      enunciado: '"40 empresas foram para o Paraguai neste mandato". O que falta para avaliar?',
      opcoes: [
        'Quantas foram nos anos anteriores e o total de empresas do país.',
        'O nome do presidente do Paraguai.',
        'Nada, o número basta.',
      ],
      correta: 0,
      explicacao: 'Um número sem comparação não diz se é muito ou pouco. A mesma matéria cita 26 em 2021–2022.',
    },
  ],
};
