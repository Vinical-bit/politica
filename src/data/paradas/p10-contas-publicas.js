import { video, inst, esp, URLS } from '../fontes.js';

const rtn = esp('Tesouro Nacional, Resultado do Tesouro Nacional (dez/2025)', URLS.rtnDez2025);

export default {
  id: 'p10-contas-publicas',
  numero: 10,
  trilha: 't2',
  titulo: 'Contas públicas',
  abertura: 'O governo gastou mais do que arrecadou em todos os anos do mandato. Isso é investimento ou bomba-relógio?',
  pergunta: 'O governo gasta mais do que arrecada? Isso é um problema?',

  ilustracao: {
    cena: 'familia',
    titulo: 'A analogia da família',
    argumento: true,
    descricao: 'Uma casa com as peças da analogia da família endividada.',
    partes: [
      { id: 'renda', icone: 'moeda', titulo: 'A renda', texto: 'Na analogia, a família ganha R$ 3.000 por mês.' },
      { id: 'divida', icone: 'cartao', titulo: 'A dívida', texto: 'Ela acumula R$ 100.000 em cheque especial e cartão para manter um padrão que a renda não paga.' },
      { id: 'consumo', icone: 'carro', titulo: 'O consumo', texto: 'Carro novo, viagem à Disney, picanha no fim de semana. Por fora, a vida parece ótima.' },
      { id: 'juros', icone: 'percentual', titulo: 'Os juros', texto: 'Os juros da dívida passam a comer a renda. Casa, carro e nome limpo ficam em risco.' },
      { id: 'limite', icone: 'balanca', titulo: 'Onde a analogia falha', rotulo: 'Onde falha', texto: 'Um país que emite a própria moeda e se financia na própria moeda não tem a mesma restrição de uma família. Mas também não pode gastar sem limite sem pagar em juros ou inflação.' },
    ],
  },

  graficos: [
    {
      tipo: 'curtoLongo',
      id: 'p10-g-curto-longo',
      titulo: 'Auxílios e gastos sem lastro: curto × longo prazo',
      descricao: 'Cinco barras sem escala que mudam do curto para o longo prazo, segundo o argumento da Crítica.',
      barras: [
        { id: 'poder', rotulo: 'Poder de compra individual', curto: 0.75, longo: 0.08 },
        { id: 'vendas', rotulo: 'Vendas no comércio', curto: 0.7, longo: 0.08 },
        { id: 'desemprego', rotulo: 'Desemprego', curto: 0.2, longo: 0.55 },
        { id: 'popularidade', rotulo: 'Popularidade do governo', curto: 0.8, longo: 0.08 },
        { id: 'inflacao', rotulo: 'Inflação', curto: 0.3, longo: 0.95 },
      ],
      fonte: video(671),
    },
    {
      tipo: 'barras',
      id: 'p10-g-primario',
      titulo: 'Resultado primário do Governo Central (R$ bilhões)',
      unidade: ' bi',
      descricao: 'Barras com o superávit de 2022 e os déficits de 2023, 2024 e 2025.',
      nota: 'Resultado primário: receitas menos despesas, sem contar os juros da dívida. Acima de zero é superávit; abaixo, déficit.',
      itens: [
        {
          id: 'p10-prim-2022', rotulo: 'Resultado primário em 2022', curto: '2022', numero: 54.1, valor: '+R$ 54,1 bi', selo: 'verificado',
          ressalva: null,
          saibaMais: 'Teve ajuda do adiamento de precatórios e de restos a pagar, e os investimentos caíram quase 30%. Segundo o próprio Tesouro. Precatórios são dívidas do governo reconhecidas pela Justiça.',
          fonte: rtn,
        },
        {
          id: 'p10-prim-2023', rotulo: 'Resultado primário em 2023', curto: '2023', numero: -228.5, valor: '−R$ 228,5 bi', selo: 'verificado',
          ressalva: null,
          saibaMais: 'Inclui R$ 92,4 bi de pagamento extraordinário de precatórios atrasados.',
          fonte: rtn,
        },
        { id: 'p10-prim-2024', rotulo: 'Resultado primário em 2024', curto: '2024', numero: -42.9, valor: '−R$ 42,9 bi', selo: 'verificado', ressalva: null, saibaMais: null, fonte: rtn },
        {
          id: 'p10-prim-2025', rotulo: 'Resultado primário em 2025', curto: '2025', numero: -61.7, valor: '−R$ 61,7 bi', selo: 'verificado',
          ressalva: null,
          saibaMais: 'Cerca de R$ 48,7 bi de despesas ficam fora da conta da meta; com isso, a meta foi cumprida. O déficit total foi de R$ 61,7 bi (Tesouro) ou R$ 58,7 bi (Banco Central). Descontadas as despesas fora da meta, o déficit considerado ficou em cerca de R$ 10 bi (BC) ou R$ 13 bi (Tesouro).',
          fonte: esp('Ministério da Fazenda, meta fiscal de 2025', URLS.fazendaMeta2025),
        },
      ],
    },
    {
      tipo: 'linha',
      id: 'p10-g-divida',
      titulo: 'Dívida bruta do governo geral (% do PIB)',
      unidade: '%',
      descricao: 'Linha com a dívida bruta em 2020, 2021, 2022 e julho de 2026.',
      nota: '2022 foi um vale: a dívida tinha caído depois do pico da pandemia.',
      itens: [
        { id: 'p10-div-2020', rotulo: 'Dívida bruta em 2020', curto: '2020', numero: 86.9, valor: '86,9%', selo: 'pendente', ressalva: null, saibaMais: null, fonte: video(704) },
        { id: 'p10-div-2021', rotulo: 'Dívida bruta em 2021', curto: '2021', numero: 77.3, valor: '77,3%', selo: 'pendente', ressalva: null, saibaMais: null, fonte: video(704) },
        { id: 'p10-div-2022', rotulo: 'Dívida bruta em 2022', curto: '2022', numero: 71.6, valor: '71,6%', selo: 'pendente', ressalva: null, saibaMais: null, fonte: video(704) },
        { id: 'p10-div-2026', rotulo: 'Dívida bruta em jul/2026 (BC)', curto: 'jul/26', numero: 82.5, valor: '82,5%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: esp('CNN Brasil, dívida bruta em julho (Banco Central)', URLS.dividaJul2026) },
      ],
    },
  ],

  dados: [
    {
      id: 'p10-soma',
      rotulo: 'Soma dos déficits de 2023 a 2025',
      valor: 'Cerca de R$ 333 bi',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Soma dos três resultados do Tesouro.',
      fonte: rtn,
    },
    {
      id: 'p10-pec',
      rotulo: 'PEC da Transição (EC 126/2022)',
      valor: 'R$ 145 bi acima do teto + R$ 23 bi para investimentos ≈ R$ 168 bi',
      selo: 'verificado',
      ressalva: null,
      saibaMais: {
        paragrafos: [
          'Promulgada em 21/12/2022. Os cerca de R$ 168 bi equivalem a 1,6% do PIB.',
          'A Câmara reduziu a validade de dois anos para um (só 2023).',
          'O dinheiro bancou o Bolsa Família de R$ 600 mais R$ 150 por criança até 6 anos e recompôs outras áreas do Orçamento.',
          'O texto também afastou a "regra de ouro" para esse valor e o deixou fora da meta de resultado primário.',
        ],
      },
      fonte: esp('Planalto, Emenda Constitucional 126', URLS.ec126),
    },
    {
      id: 'p10-carga',
      rotulo: 'Carga tributária bruta',
      valor: '31,2% (2022) → 32,4% do PIB (2025)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'É o maior da série do Tesouro Nacional, que começa em 2010.',
      fonte: inst('tesouro', 'estimativa da carga tributária bruta'),
    },
  ],

  debate: {
    defesa: {
      titulo: 'Vitórias concretas, não promessas',
      texto: 'É fácil desqualificar resultados reais dizendo que "no futuro vai dar ruim". O gasto financiou renda, comida e emprego para quem precisava agora.',
    },
    critica: {
      titulo: 'Bomba-relógio',
      texto: 'Déficit todo ano faz a dívida crescer. Para financiá-la, o juro sobe, e o juro alto trava o crescimento. A conta chega depois. É um argumento, não um dado medido.',
    },
  },

  mede: {
    mede: ['Quanto o governo gastou além do que arrecadou e quanto deve em relação ao tamanho da economia.'],
    naoProva: [
      'Que o déficit causou os juros altos: há outros fatores, como a inflação e o cenário externo.',
      'O que vai acontecer no futuro: o gráfico curto × longo prazo é um argumento.',
      'Que todo gasto é igual: investimento e transferência têm efeitos diferentes.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Resultado primário', texto: 'É o saldo entre receitas e despesas sem contar os juros da dívida. Mostra se o governo, antes de pagar juros, gasta mais ou menos do que arrecada.' },
      { titulo: 'Dívida bruta em % do PIB', texto: 'Divide o que o governo deve pelo tamanho da economia num ano. Pode subir por déficit, por juros altos ou porque a economia cresceu pouco.' },
      { titulo: 'A meta e as exceções', texto: 'O arcabouço fiscal permite tirar algumas despesas da conta da meta, como precatórios. Por isso o resultado "para a meta" e o resultado total são diferentes.' },
    ],
  },

  perguntas: [
    {
      id: 'p10-q1',
      enunciado: 'O gráfico curto × longo prazo tem barras sem escala. Ele serve como:',
      opcoes: ['Prova de que a inflação vai disparar.', 'Ilustração de um argumento.', 'Dado oficial do Tesouro.'],
      correta: 1,
      explicacao: 'Sem escala e sem fonte, o gráfico representa uma ideia. Para testá-la, é preciso olhar dados reais ao longo do tempo.',
    },
    {
      id: 'p10-q2',
      enunciado: 'A dívida em 2022 estava num vale depois da pandemia. Comparar com 2022 faz o aumento:',
      opcoes: ['Parecer maior do que comparando com 2020.', 'Parecer menor.', 'Ficar igual.'],
      correta: 0,
      explicacao: 'O ponto de partida muda a leitura. Contra 2020, a dívida atual é menor; contra 2022, é maior.',
    },
  ],
};
