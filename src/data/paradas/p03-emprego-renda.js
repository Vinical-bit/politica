import { video, inst, esp, URLS } from '../fontes.js';

const pnad = (oque) => inst('ibgePnad', oque);

export default {
  id: 'p03-emprego-renda',
  numero: 3,
  trilha: 't1',
  titulo: 'Emprego e renda',
  abertura: 'O desemprego chegou ao menor nível da série e a renda bateu recorde. Mas a queda do desemprego já vinha de antes.',
  pergunta: 'Há mais gente trabalhando, e ganhando mais?',

  ilustracao: {
    cena: 'carteira',
    titulo: 'Quem conta como empregado',
    descricao: 'Uma carteira de trabalho ligada às categorias que a pesquisa do IBGE usa.',
    partes: [
      { id: 'ocupado', icone: 'maleta', titulo: 'Ocupado', texto: 'Quem trabalhou ao menos uma hora na semana da pesquisa, com ou sem carteira assinada.' },
      { id: 'desocupado', icone: 'lupa', titulo: 'Desocupado', texto: 'Quem não trabalhou, procurou emprego e estava disponível. É essa pessoa que entra na taxa de desemprego.' },
      { id: 'informal', icone: 'guardaChuva', titulo: 'Informal', texto: 'Quem trabalha sem carteira ou sem CNPJ. Conta como ocupado, mas sem direitos como férias e FGTS.' },
      { id: 'caged', icone: 'documento', titulo: 'Caged × PNAD', texto: 'O Caged conta só vagas com carteira (admissões menos demissões). A PNAD entrevista famílias e pega todo tipo de trabalho. Os números não se substituem.' },
      { id: 'renda', icone: 'moeda', titulo: 'Renda real', texto: 'Renda "real" é a renda descontada a inflação. Só dá para comparar dois valores reais se estiverem na mesma base de preços.' },
      { id: 'minimo', icone: 'escada', titulo: 'Salário mínimo', texto: 'É definido por decreto todo ano. A regra atual soma a inflação a um ganho real, que desde 2025 tem um limite anual.' },
    ],
  },

  graficos: [
    {
      tipo: 'linha',
      id: 'p03-g-desemprego',
      titulo: 'Taxa de desemprego',
      unidade: '%',
      descricao: 'Linha com a taxa de desemprego de 2020 a 2026. A queda começou antes de 2023.',
      nota: 'Os pontos são de períodos diferentes (trimestres e meses). Toque em cada ponto para ver o recorte.',
      itens: [
        { id: 'p03-des-2020', rotulo: 'Desemprego no 4º tri/2020', curto: '2020', numero: 14.2, valor: '14,2%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: pnad('PNAD Contínua') },
        { id: 'p03-des-2021', rotulo: 'Desemprego no 4º tri/2021', curto: '2021', numero: 11.1, valor: '11,1%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: pnad('PNAD Contínua') },
        { id: 'p03-des-2022', rotulo: 'Desemprego no 4º tri/2022', curto: '2022', numero: 7.9, valor: '7,9%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: pnad('PNAD Contínua') },
        { id: 'p03-des-2023', rotulo: 'Desemprego no 4º tri/2023', curto: '2023', numero: 7.4, valor: '7,4%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: pnad('PNAD Contínua') },
        {
          id: 'p03-des-dez2025',
          rotulo: 'Desemprego em dez/2025',
          curto: 'dez/25',
          numero: 5.1,
          valor: '5,1%',
          selo: 'verificado',
          ressalva: null,
          saibaMais: 'A média anual de 2025 foi de 5,6%, a menor da série do IBGE, que começa em 2012 (confere).',
          fonte: esp('IBGE, desocupação de dezembro de 2025', URLS.pnadDez2025),
        },
        { id: 'p03-des-jul2026', rotulo: 'Desemprego no trimestre até jul/2026', curto: 'jul/26', numero: 5.3, valor: '5,3%', selo: 'verificado', ressalva: null, saibaMais: 'Menor taxa para esse trimestre na série do IBGE.', fonte: esp('IBGE, PNAD Contínua: trimestre até julho de 2026', URLS.pnadJul2026) },
      ],
    },
  ],

  dados: [
    {
      id: 'p03-media-2025',
      rotulo: 'Desemprego, média de 2025',
      valor: '5,6%',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Menor média anual da série histórica, iniciada em 2012.',
      fonte: esp('IBGE, PNAD Contínua: resultados de 2025', URLS.pnad2025Anual),
    },
    {
      id: 'p03-vagas',
      rotulo: 'Vagas com carteira criadas',
      valor: 'Cerca de 5,6 milhões, de jan/2023 a ago/2026',
      selo: 'verificado',
      ressalva: null,
      saibaMais:
        'Saldo do Caged (admissões menos demissões) somado ano a ano, como divulgado: 2023: 1,48 milhão; 2024: 1,69 milhão; 2025: 1,28 milhão; jan–ago/2026: 1,13 milhão. O ministério revisa os números depois, então o total pode mudar um pouco.',
      fonte: esp('Agência Gov, Novo Caged de agosto de 2026', URLS.cagedAgo2026),
    },
    {
      id: 'p03-ocupada',
      rotulo: 'População ocupada (recorde)',
      valor: '103,3 milhões',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: esp('IBGE, PNAD Contínua: trimestre até julho de 2026', URLS.pnadJul2026),
      compacto: true,
    },
    {
      id: 'p03-setor-privado',
      rotulo: 'Carteira assinada no setor privado',
      valor: '39,4 milhões',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: esp('IBGE, PNAD Contínua: trimestre até julho de 2026', URLS.pnadJul2026),
      compacto: true,
    },
    {
      id: 'p03-informalidade',
      rotulo: 'Informalidade',
      valor: '39% → 37,5%',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: esp('IBGE, PNAD Contínua: trimestre até julho de 2026', URLS.pnadJul2026),
      compacto: true,
    },
    {
      id: 'p03-renda-2025',
      rotulo: 'Renda média do trabalho em 2025',
      valor: 'R$ 3.560 (recorde, +5,7% sobre 2024)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Valor a preços de 2025. É o maior da série do IBGE.',
      fonte: esp('IBGE, PNAD Contínua: resultados de 2025', URLS.pnad2025Anual),
    },
    {
      id: 'p03-renda-ganho',
      rotulo: 'Ganho real da renda de 2022 a 2025',
      valor: '+17,4% (R$ 3.032 → R$ 3.560, a preços de 2025)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: {
        paragrafos: [
          'A conta já desconta a inflação. O IBGE divulga a renda média de cada ano corrigida para os preços do ano mais recente. Encadeando as altas reais anuais publicadas pelo IBGE, 2023 (+7,2%), 2024 (+3,7%) e 2025 (+5,7%), o ganho acumulado é de cerca de 17,5%. Aplicado a R$ 3.560, isso dá cerca de R$ 3.030 para 2022 a preços de 2025 (R$ 3.032 com os arredondamentos).',
          'Em valores da época, a renda de 2022 foi publicada como R$ 2.715. A diferença para R$ 3.032 é só a correção pela inflação.',
        ],
        tabela: {
          cabecalho: ['Ano', 'Alta real sobre o ano anterior (IBGE)'],
          linhas: [
            ['2023', '+7,2%'],
            ['2024', '+3,7%'],
            ['2025', '+5,7%'],
            ['2022 → 2025', '≈ +17,5%'],
          ],
        },
      },
      fonte: esp('IBGE, PNAD Contínua: resultados de 2025', URLS.pnad2025Anual),
    },
    {
      id: 'p03-minimo-valores',
      rotulo: 'Salário mínimo (valores nominais)',
      valor: 'R$ 1.212 → R$ 1.621 (+33,7%)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: {
        paragrafos: ['Valores publicados no Diário Oficial. Em 2023 houve dois valores: R$ 1.302 em janeiro e R$ 1.320 a partir de maio.'],
        tabela: {
          cabecalho: ['Ano', 'Valor'],
          linhas: [
            ['2022', 'R$ 1.212'],
            ['jan/2023', 'R$ 1.302'],
            ['mai/2023', 'R$ 1.320'],
            ['2024', 'R$ 1.412'],
            ['2025', 'R$ 1.518'],
            ['2026', 'R$ 1.621'],
          ],
        },
      },
      fonte: esp('Ipardes, evolução do salário mínimo (decretos federais)', URLS.salarioMinimoSerie),
    },
    {
      id: 'p03-minimo-real',
      rotulo: 'Poder de compra do salário mínimo desde 2023',
      valor: '+10% acima da inflação (R$ 1.302 → R$ 1.621)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: {
        paragrafos: [
          'Conta nossa: o mínimo foi de R$ 1.302 (jan/2023) para R$ 1.621 (2026), alta de 24,5%. O INPC do IBGE somou 12,9% de 2023 a 2025 (3,71%, 4,77% e 3,90%). Descontada a inflação, o ganho real é de cerca de 10%.',
          'A política de valorização foi retomada em 2023. Desde 2025, o ganho acima da inflação fica limitado a 2,5% ao ano pelo arcabouço fiscal.',
        ],
        tabela: {
          cabecalho: ['Base de partida', 'Chegada', 'Ganho real'],
          linhas: [
            ['R$ 1.302 (jan/2023)', 'R$ 1.621', '≈ 10%'],
            ['R$ 1.212 (2022)', 'R$ 1.621', '≈ 18%'],
          ],
        },
      },
      fonte: inst('ibge', 'INPC (inflação usada na conta)'),
    },
  ],

  debate: {
    defesa: {
      titulo: 'Mais emprego formal e renda recorde',
      texto: 'Milhões de vagas com carteira, o menor desemprego da série e a maior renda já medida. O salário mínimo voltou a ganhar da inflação.',
    },
    critica: {
      titulo: 'A queda já vinha, e taxa não é tudo',
      texto: 'O desemprego cai desde a saída da pandemia. E a taxa também cai quando gente desiste de procurar.',
    },
  },

  mede: {
    mede: ['Quantas pessoas procuram trabalho e não acham, e quanto ganha em média quem trabalha.'],
    naoProva: [
      'A qualidade dos empregos (jornada, estabilidade, salário de cada vaga).',
      'Que a queda foi efeito de política deste governo, e não da recuperação pós-pandemia.',
      'Que todos ganharam: média alta convive com desigualdade.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Renda real e renda nominal', texto: 'Renda nominal é o valor em reais da época. Renda real é o valor corrigido pela inflação. Só a real mostra se o poder de compra subiu.' },
      { titulo: 'Caged e PNAD medem coisas diferentes', texto: 'O Caged soma vagas formais criadas. A PNAD estima quantas pessoas estão trabalhando de qualquer jeito. Um pode subir enquanto o outro fica parado.' },
    ],
  },

  perguntas: [
    {
      id: 'p03-q1',
      enunciado: 'Se alguém para de procurar emprego, o que acontece com a taxa de desemprego?',
      opcoes: ['Sobe.', 'Cai, porque a pessoa deixa de ser contada como desocupada.', 'Não muda.'],
      correta: 1,
      explicacao: 'Só entra na taxa quem procurou trabalho. Quem desiste vira "desalentado" e sai da conta. Por isso vale olhar o desalento junto (parada 5).',
    },
    {
      id: 'p03-q2',
      enunciado: 'A renda de 2022 foi publicada como R$ 2.715 e aparece como R$ 3.032 em 2025. Por quê?',
      opcoes: [
        'O IBGE errou em 2022.',
        'R$ 3.032 é o mesmo valor corrigido pela inflação até 2025.',
        'São pesquisas diferentes.',
      ],
      correta: 1,
      explicacao: 'Para comparar anos, o IBGE traz os valores antigos para os preços de hoje. Sem isso, parte do "aumento" seria só inflação.',
    },
  ],
};
