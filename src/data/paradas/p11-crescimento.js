import { video, inst, esp, URLS } from '../fontes.js';

const dolarBc = () => esp('Banco Central, série 3698: dólar (venda), média mensal', URLS.dolarMediaMensal);

export default {
  id: 'p11-crescimento',
  numero: 11,
  trilha: 't3',
  titulo: 'Crescimento e choques externos',
  abertura: 'A economia cresceu, mas menos que a de países parecidos. A Defesa culpa os choques; a Crítica diz que houve sorte.',
  pergunta: 'O crescimento foi mérito do governo ou ajuda do cenário externo?',

  ilustracao: {
    cena: 'globo',
    titulo: 'O que empurra e o que freia o PIB',
    descricao: 'Um globo ligado aos fatores externos desta parada.',
    partes: [
      { id: 'pib', icone: 'grafico', titulo: 'PIB per capita', texto: 'O valor de tudo o que o país produz, dividido pela população. Mede o tamanho da economia por pessoa, não a renda de cada um.' },
      { id: 'eua', icone: 'percentual', titulo: 'Juros nos EUA', texto: 'Quando os juros americanos sobem, o dinheiro sai de países emergentes e o dólar fica mais caro.' },
      { id: 'commodities', icone: 'trigo', titulo: 'Commodities', texto: 'Soja, minério e petróleo têm preço definido lá fora. Quando sobem, o Brasil exporta mais caro; quando caem, perde receita.' },
      { id: 'clima', icone: 'chuva', titulo: 'Clima', texto: 'Secas e enchentes destroem produção, estradas e casas. A enchente do Rio Grande do Sul, em 2024, é um exemplo.' },
      { id: 'petroleo', icone: 'gota', titulo: 'Petróleo', texto: 'O Brasil exporta mais petróleo do que importa. Petróleo caro ajuda a balança, mas encarece combustível aqui.' },
      { id: 'tarifa', icone: 'navio', titulo: 'Tarifas', texto: 'Uma tarifa dos EUA sobre produtos brasileiros fecha um mercado, mas pode abrir espaço em outro, como a China.' },
    ],
  },

  graficos: [
    {
      tipo: 'linha',
      id: 'p11-g-dolar',
      titulo: 'Dólar: média de cada ano (R$)',
      unidade: 'R$',
      descricao: 'Linha com a média anual do dólar de 2018 a 2026. Subiu forte na pandemia, de 2019 para 2020, e oscilou entre R$ 5 e R$ 5,60 desde então.',
      nota: 'Média das médias mensais do Banco Central (dólar de venda). *2026: janeiro a agosto. Valores nominais, sem descontar a inflação.',
      mostrarValores: true,
      faixas: [
        { de: 1, ate: 4, rotulo: 'Bolsonaro' },
        { de: 5, ate: 8, rotulo: 'Lula 3', tipo: 'destaque' },
      ],
      itens: [
        { id: 'p11-dolar-2018', rotulo: 'Dólar médio em 2018', curto: '’18', numero: 3.65, valor: 'R$ 3,65', valorCurto: '3,65', selo: 'verificado', ressalva: null, saibaMais: null, fonte: dolarBc() },
        { id: 'p11-dolar-2019', rotulo: 'Dólar médio em 2019', curto: '’19', numero: 3.95, valor: 'R$ 3,95', valorCurto: '3,95', selo: 'verificado', ressalva: null, saibaMais: null, fonte: dolarBc() },
        { id: 'p11-dolar-2020', rotulo: 'Dólar médio em 2020', curto: '’20', numero: 5.16, valor: 'R$ 5,16', valorCurto: '5,16', selo: 'verificado', ressalva: null, saibaMais: 'Ano da pandemia: o dólar saltou de R$ 4,15 (média de janeiro) para R$ 5,64 (média de maio).', fonte: dolarBc() },
        { id: 'p11-dolar-2021', rotulo: 'Dólar médio em 2021', curto: '’21', numero: 5.4, valor: 'R$ 5,40', valorCurto: '5,40', selo: 'verificado', ressalva: null, saibaMais: null, fonte: dolarBc() },
        { id: 'p11-dolar-2022', rotulo: 'Dólar médio em 2022', curto: '’22', numero: 5.16, valor: 'R$ 5,16', valorCurto: '5,16', selo: 'verificado', ressalva: null, saibaMais: null, fonte: dolarBc() },
        { id: 'p11-dolar-2023', rotulo: 'Dólar médio em 2023', curto: '’23', numero: 4.99, valor: 'R$ 4,99', valorCurto: '4,99', selo: 'verificado', ressalva: null, saibaMais: null, fonte: dolarBc() },
        { id: 'p11-dolar-2024', rotulo: 'Dólar médio em 2024', curto: '’24', numero: 5.39, valor: 'R$ 5,39', valorCurto: '5,39', selo: 'verificado', ressalva: null, saibaMais: 'Em dezembro de 2024 a média mensal chegou a R$ 6,10, a maior da série.', fonte: dolarBc() },
        { id: 'p11-dolar-2025', rotulo: 'Dólar médio em 2025', curto: '’25', numero: 5.59, valor: 'R$ 5,59', valorCurto: '5,59', selo: 'verificado', ressalva: null, saibaMais: null, fonte: dolarBc() },
        { id: 'p11-dolar-2026', rotulo: 'Dólar médio em 2026 (jan. a ago.)', curto: '’26*', numero: 5.15, valor: 'R$ 5,15', valorCurto: '5,15', selo: 'verificado', ressalva: null, saibaMais: null, fonte: dolarBc() },
      ],
    },
    {
      tipo: 'tarifa',
      id: 'p11-g-tarifa',
      titulo: 'Antes e depois da tarifa',
      descricao: 'Esquema com três pontos (EUA, China e Brasil) e a rota do dinheiro antes e depois da tarifa americana.',
      fonte: video(),
    },
  ],

  dados: [
    {
      id: 'p11-pib-pc',
      rotulo: 'PIB per capita 2022 → 2025 (US$ constantes)',
      valor: 'Brasil +7,9% (9.032 → 9.748) × países de renda média +11,6% (5.708 → 6.370)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: '"Países de renda média" é um grupo amplo do Banco Mundial, que inclui economias muito diferentes e mais pobres que o Brasil. Os de renda média-alta, grupo do Brasil, cresceram 12,5% no mesmo período.',
      fonte: esp('Banco Mundial, PIB per capita em US$ constantes de 2015', URLS.pibPerCapitaBM),
    },
    {
      id: 'p11-proj-2026',
      rotulo: 'Projeção de crescimento em 2026 (FMI, abril)',
      valor: 'Emergentes e em desenvolvimento 3,9% × Brasil 1,9%',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Em julho de 2026, o FMI elevou a projeção do Brasil para 2,4%.',
      fonte: esp('FMI, World Economic Outlook de abril de 2026 (cap. 1)', URLS.fmiWeoAbr2026),
      compacto: true,
    },
    {
      id: 'p11-focus',
      rotulo: 'Focus de setembro/2026: PIB do Brasil em 2026',
      valor: '1,89%',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'O Focus é a pesquisa semanal do Banco Central com as projeções do mercado.',
      fonte: inst('bcbFocus', 'boletim Focus'),
      compacto: true,
    },
    {
      id: 'p11-superavit',
      rotulo: 'Superávit comercial por ano (MDIC)',
      valor: '≈ US$ 80 bi por ano (2023–2025) × ≈ US$ 55 bi por ano (2019–2022)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: {
        paragrafos: [
          'Somas: cerca de US$ 241 bi em três anos (2023: 98,8, o recorde; 2024: 74,6; 2025: 68,3) contra cerca de US$ 221 bi em quatro anos (2019: ≈ 48,0; 2020: ≈ 50,4; 2021: 61,4; 2022: ≈ 61,5). Por isso o site compara a média por ano.',
          'O MDIC revisa os anos anteriores, então os valores mudam alguns décimos. Superávit maior não quer dizer, sozinho, economia melhor: ele também sobe quando o país importa menos.',
        ],
      },
      fonte: esp('Forbes, superávit de US$ 68,3 bi em 2025 (dados do MDIC)', URLS.balanca2025),
    },
    {
      id: 'p11-dolar',
      rotulo: 'Dólar médio: 2022 × 2026 (jan. a ago.)',
      valor: 'R$ 5,16 → R$ 5,15',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Média das médias mensais do Banco Central. O câmbio oscila bastante dentro do ano: R$ 5,45 em 24/06/2026, R$ 5,08 em 24/07/2026 e R$ 5,22 em 28/09/2026. O dólar depende também de fatores de fora (juros dos EUA, força do dólar no mundo), não só do governo.',
      fonte: dolarBc(),
    },
  ],

  choques: {
    defesa: {
      titulo: 'Choques citados pela Defesa (atrapalharam)',
      itens: [
        { id: 'p11-ch-eua', rotulo: 'Juros dos EUA', valor: 'No maior nível em 22 anos', selo: 'verificado', ressalva: null, saibaMais: 'Faixa de 5,25% a 5,50% ao ano, a partir de julho de 2023.', fonte: esp('CNN Brasil, Fed sobe juros ao maior nível em 22 anos', URLS.fed22anos), compacto: true },
        { id: 'p11-ch-commodities', rotulo: 'Commodities (preços em dólar)', valor: 'Três anos de queda: 2023, 2024 e 2025', selo: 'verificado', ressalva: null, saibaMais: 'Índice do Banco Mundial, em dólar. Em reais, o índice do Banco Central (IC-Br) não caiu três anos seguidos: caiu em 2023 e subiu em 2024 e 2025, por causa do câmbio.', fonte: esp('Banco Mundial, Commodity Markets Outlook (out/2025)', URLS.commoditiesBM), compacto: true },
        { id: 'p11-ch-rs', rotulo: 'Enchentes no RS (Globo Rural)', valor: 'R$ 88,9 bi de perdas, 69% no setor produtivo', selo: 'verificado', ressalva: null, saibaMais: 'Levantamento de organismos internacionais: R$ 61 bi dos danos no setor produtivo.', fonte: esp('Agência Brasil, danos das chuvas no RS', URLS.enchentesRS), compacto: true },
        { id: 'p11-ch-tarifa', rotulo: 'Tarifa dos EUA', valor: '50% sobre produtos brasileiros', selo: 'verificado', ressalva: null, saibaMais: 'Em vigor desde 6/8/2025, sobre parte das exportações brasileiras para os EUA.', fonte: esp('Agência Brasil, tarifaço entra em vigor', URLS.tarifaco), compacto: true },
      ],
    },
    critica: {
      titulo: 'Fatores citados pela Crítica (ajudaram)',
      itens: [
        {
          id: 'p11-ch-agro',
          rotulo: 'Agronegócio',
          valor: '25,13% do PIB em 2025 (22,9% em 2024)',
          selo: 'verificado',
          ressalva: null,
          saibaMais: {
            paragrafos: [
              'Cepea/USP e CNA, divulgado em 28/04/2026: R$ 3,20 trilhões. O agro ampliado soma insumos, produção, agroindústria e agrosserviços. O PIB da agropecuária do IBGE mede só a produção dentro da porteira.',
              'Em 2025, a pecuária cresceu 32,55% em valor, puxada por preços; o volume do agro cresceu 6,76%.',
              'Safra: a Conab estimou 354,8 milhões de toneladas para 2025/26. É projeção: trate "safra recorde" com cuidado.',
            ],
          },
          fonte: esp('Cepea/USP, PIB do agronegócio 2025', URLS.cepeaAgro2025),
        },
        {
          id: 'p11-ch-ormuz',
          rotulo: 'Guerra no Oriente Médio e petróleo (FMI)',
          valor: '+0,2 ponto no PIB de 2026 (projeção)',
          selo: 'verificado',
          ressalva: null,
          saibaMais: {
            paragrafos: [
              'No relatório de 14/04/2026, o FMI disse que o conflito no Oriente Médio tem "baixo efeito positivo" para o Brasil, exportador líquido de energia, elevando o crescimento de 2026 em cerca de 0,2 ponto.',
              'A revisão total de abril foi de 1,6% para 1,9% (+0,3 ponto). O FMI também vê efeito negativo em 2027. O Brent voltou a ficar perto de US$ 80–92 em jun/jul de 2026.',
              'Em julho de 2026, o FMI elevou o Brasil para 2,4% em 2026. O texto do FMI fala da guerra e de energia; o Estreito de Ormuz aparece em documentos como o Boletim MacroFiscal da Fazenda.',
            ],
          },
          fonte: inst('fmi', 'World Economic Outlook, abril de 2026'),
        },
      ],
    },
  },

  debate: {
    defesa: {
      titulo: 'Cresceu apesar dos choques',
      texto: 'Juros americanos altos, commodities em queda, uma enchente histórica no Rio Grande do Sul e uma tarifa americana. Crescer nesse cenário é mérito.',
    },
    critica: {
      titulo: 'Sorte, não mérito',
      texto: 'O agro bateu recordes, a tarifa dos EUA empurrou a China para comprar do Brasil e o petróleo caro ajudou. O crescimento teria vindo "apesar do governo". É um argumento.',
    },
  },

  mede: {
    mede: ['Quanto a economia cresceu por pessoa e como se compara a um grupo de países.'],
    naoProva: [
      'Quanto do resultado veio do governo e quanto do cenário externo.',
      'Que o grupo de comparação é o mais justo.',
      'O efeito real de choques que ainda são projeções.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Mérito ou maré', texto: 'Separar o efeito do governo do efeito do mundo exige comparar com países parecidos que passaram pelos mesmos choques. Mesmo assim, o resultado depende do grupo escolhido.' },
      { titulo: 'Projeção não é resultado', texto: 'Vários números desta parada são estimativas para 2026. Eles podem mudar até o ano fechar.' },
    ],
  },

  perguntas: [
    {
      id: 'p11-q1',
      enunciado: 'O Brasil cresceu 7,9% e os países de renda média, 11,6%. Para concluir que o governo foi pior, falta:',
      opcoes: [
        'Verificar se o grupo é comparável e se passou pelos mesmos choques.',
        'Nada: o Brasil cresceu menos.',
        'Saber o PIB dos EUA.',
      ],
      correta: 0,
      explicacao: 'Uma comparação só é justa se os grupos forem parecidos. "Renda média" junta economias muito diferentes.',
    },
    {
      id: 'p11-q2',
      enunciado: 'Um superávit de 3 anos é maior que o de 4 anos. A comparação mais justa é:',
      opcoes: ['O total de cada período.', 'A média por ano.', 'O maior ano de cada período.'],
      correta: 1,
      explicacao: 'Períodos de tamanhos diferentes se comparam pela média anual.',
    },
  ],
};
