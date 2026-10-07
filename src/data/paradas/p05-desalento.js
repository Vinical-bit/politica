import { video, esp, inst, URLS } from '../fontes.js';

export default {
  id: 'p05-desalento',
  numero: 5,
  trilha: 't1',
  titulo: 'Desalento',
  abertura: 'Desalento é quem desistiu de procurar emprego. É o quinto problema da promessa e um contraponto ao desemprego baixo.',
  pergunta: 'Menos gente desistiu de procurar emprego?',

  ilustracao: {
    cena: 'placa',
    titulo: 'Quem cabe na "subutilização"',
    descricao: 'Uma placa de "procura-se" ligada aos grupos que somam a subutilização.',
    partes: [
      { id: 'desocupados', icone: 'lupa', titulo: 'Desocupados', texto: 'Procuram trabalho e não acham. É o grupo da taxa de desemprego.' },
      { id: 'subocupados', icone: 'relogio', titulo: 'Subocupados', texto: 'Trabalham menos horas do que gostariam e estão disponíveis para trabalhar mais.' },
      { id: 'desalentados', icone: 'placa', titulo: 'Desalentados', texto: 'Queriam trabalhar, mas desistiram de procurar porque acham que não vão encontrar vaga.' },
      { id: 'potencial', icone: 'porta', titulo: 'Força de trabalho potencial', rotulo: 'Força potencial', texto: 'Pessoas que não procuraram ou não estavam disponíveis na semana, mas poderiam trabalhar. Os desalentados fazem parte desse grupo.' },
    ],
  },

  graficos: [
    {
      tipo: 'linha',
      id: 'p05-g-subutilizacao',
      titulo: 'Taxa de subutilização da força de trabalho',
      unidade: '%',
      descricao: 'Linha com três pontos: 2022, 2025 e 2º trimestre de 2026.',
      nota: 'Os pontos misturam médias anuais com um trimestre isolado.',
      itens: [
        { id: 'p05-sub-2022', rotulo: 'Subutilização em 2022', curto: '2022', numero: 20.8, valor: '20,8%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: esp('IBGE, PNAD Contínua: resultados de 2022', URLS.pnad2022Anual) },
        { id: 'p05-sub-2025', rotulo: 'Subutilização em 2025 (média anual)', curto: '2025', numero: 14.5, valor: '14,5%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: esp('IBGE, PNAD Contínua: resultados de 2025', URLS.pnad2025Anual) },
        {
          id: 'p05-sub-2026',
          rotulo: 'Subutilização no trimestre até jul/2026',
          curto: 'jul/26',
          numero: 13,
          valor: '13,0%',
          selo: 'verificado',
          ressalva: null,
          saibaMais: 'É um trimestre, não uma média anual: trimestres têm efeitos sazonais.',
          fonte: esp('IBGE, PNAD Contínua: trimestre até julho de 2026', URLS.pnadJul2026),
        },
      ],
    },
  ],

  dados: [
    {
      id: 'p05-desalentados',
      rotulo: 'Desalentados em 2025',
      valor: '2,9 milhões (−9,6% frente a 2024)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: esp('IBGE, PNAD Contínua: resultados de 2025', URLS.pnad2025Anual),
    },
    {
      id: 'p05-pico',
      rotulo: 'Pico de desalentados',
      valor: '5,5 milhões em 2021',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: inst('ibgePnad', 'PNAD Contínua'),
      compacto: true,
    },
  ],

  debate: {
    defesa: {
      titulo: 'Menos gente desistindo',
      texto: 'O número de desalentados caiu e a subutilização está bem abaixo de 2022. Isso mostra que a queda do desemprego não veio de gente saindo da conta.',
    },
    critica: {
      titulo: 'O gráfico mistura recortes',
      texto: 'Comparar médias anuais com um trimestre isolado exagera a queda. E a subutilização já caía desde o pico de 2021.',
    },
  },

  mede: {
    mede: ['Quanta gente poderia trabalhar mais, ou queria trabalhar, e não conseguiu.'],
    naoProva: [
      'Por que as pessoas voltaram a procurar ou a trabalhar.',
      'A qualidade das vagas encontradas.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Por que olhar o desalento junto com o desemprego', texto: 'Se o desemprego cai porque gente desiste, o desalento sobe. Quando os dois caem juntos, a melhora do mercado de trabalho é mais consistente.' },
      { titulo: 'Média anual e trimestre', texto: 'O mercado de trabalho tem sazonalidade: contrata mais no fim do ano, por exemplo. Comparar um trimestre com uma média do ano pode distorcer.' },
    ],
  },

  perguntas: [
    {
      id: 'p05-q1',
      enunciado: 'A subutilização inclui:',
      opcoes: ['Só quem desistiu de procurar.', 'Desocupados, subocupados e a força de trabalho potencial.', 'Só quem trabalha sem carteira.'],
      correta: 1,
      explicacao: 'É uma medida ampla. Os desalentados são uma parte dela.',
    },
    {
      id: 'p05-q2',
      enunciado: 'Um gráfico liga uma média anual a um trimestre isolado. O melhor cuidado é:',
      opcoes: [
        'Ignorar o gráfico.',
        'Comparar períodos do mesmo tipo, como média com média ou trimestre com o mesmo trimestre.',
        'Somar os pontos.',
      ],
      correta: 1,
      explicacao: 'Comparar recortes iguais evita que a sazonalidade pareça tendência.',
    },
  ],
};
