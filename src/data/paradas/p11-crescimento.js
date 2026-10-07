import { video, inst, esp, URLS } from '../fontes.js';

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
      valor: 'Brasil +7,9% (9.032 → 9.748) × renda média +11,6% (5.708 → 6.370)',
      selo: 'pendente',
      ressalva: null,
      saibaMais: '"Países de renda média" é um grupo amplo do Banco Mundial, que inclui economias muito diferentes do Brasil.',
      fonte: video(1069),
    },
    {
      id: 'p11-proj-2026',
      rotulo: 'Projeção de crescimento em 2026 (G1)',
      valor: 'Emergentes do G20 ≈ 4% × Brasil ≈ 2%',
      selo: 'pendente',
      ressalva: null,
      saibaMais: null,
      fonte: video(1129),
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
      rotulo: 'Superávit comercial acumulado (MDIC)',
      valor: 'US$ 241 bi (2023–2025) × US$ 222 bi (2019–2022)',
      selo: 'pendente',
      ressalva: null, pendencia: 'Compara 3 anos com 4 anos. Na média anual, o Lula 3 fica com cerca de US$ 80 bi contra US$ 55 bi (cálculo nosso).',
      saibaMais: '2023 foi recorde: US$ 98,8 bi, segundo o MDIC.',
      fonte: inst('mdic', 'balança comercial'),
    },
    {
      id: 'p11-dolar',
      rotulo: 'Dólar',
      valor: 'R$ 5,21 → R$ 5,15',
      selo: 'pendente',
      ressalva: null, pendencia: 'R$ 5,15 confere com a cotação de 16/09/2026, mas é a foto de um dia.',
      saibaMais: 'O câmbio oscila bastante: R$ 5,45 em 24/06/2026, R$ 5,08 em 24/07/2026 e R$ 5,22 em 28/09/2026.',
      fonte: inst('bcb', 'cotações do dólar (PTAX)'),
    },
  ],

  choques: {
    defesa: {
      titulo: 'Choques citados pela Defesa (atrapalharam)',
      itens: [
        { id: 'p11-ch-eua', rotulo: 'Juros dos EUA', valor: 'No maior nível em 22 anos', selo: 'verificado', ressalva: null, saibaMais: 'Faixa de 5,25% a 5,50% ao ano, a partir de julho de 2023.', fonte: esp('CNN Brasil, Fed sobe juros ao maior nível em 22 anos', URLS.fed22anos), compacto: true },
        { id: 'p11-ch-commodities', rotulo: 'Commodities', valor: 'Três anos de queda de preços', selo: 'pendente', ressalva: null, saibaMais: null, fonte: video(949), compacto: true },
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
          rotulo: 'Petróleo e Estreito de Ormuz (FMI)',
          valor: '+0,2 ponto no PIB de 2026 (projeção)',
          selo: 'pendente',
          ressalva: null, pendencia: 'É projeção do FMI, não efeito medido, e é só parte da revisão total de abril.',
          saibaMais: {
            paragrafos: [
              'No relatório de 14/04/2026, o FMI disse que o conflito no Oriente Médio tem "baixo efeito positivo" para o Brasil, exportador líquido de energia, elevando o crescimento de 2026 em cerca de 0,2 ponto.',
              'A revisão total de abril foi de 1,6% para 1,9% (+0,3 ponto). O FMI também vê efeito negativo em 2027. O Brent voltou a ficar perto de US$ 80–92 em jun/jul de 2026.',
              'Uma atualização de jul/2026 teria elevado o Brasil para 2,4% em 2026 (visto só em recorte de jornal; falta confirmar). O fechamento de Ormuz é citado em documentos oficiais, como o Boletim MacroFiscal da Fazenda.',
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
