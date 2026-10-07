import { video, inst, esp, URLS } from '../fontes.js';

export default {
  id: 'p01-promessa',
  numero: 1,
  trilha: 't1',
  titulo: 'A promessa',
  abertura: 'Em 2022, o plano de governo listou cinco problemas. Quatro anos depois, melhoraram?',
  pergunta: 'Os cinco problemas que o plano prometeu resolver melhoraram em quatro anos?',

  ilustracao: {
    cena: 'documento',
    titulo: 'Os cinco problemas do item 1',
    descricao: 'Um documento no centro, ligado aos cinco problemas citados no plano de governo.',
    partes: [
      { id: 'fome', icone: 'prato', titulo: 'Fome', texto: 'Medida pela FAO, a agência da ONU para alimentação. O Brasil entra ou sai do "Mapa da Fome" conforme a parcela da população subalimentada.' },
      { id: 'desemprego', icone: 'carteira', titulo: 'Desemprego', texto: 'Medido pelo IBGE na PNAD Contínua, uma pesquisa feita de casa em casa. Conta quem procurou trabalho e não achou.' },
      { id: 'inflacao', icone: 'carrinho', titulo: 'Inflação', texto: 'É a alta geral de preços. O índice oficial é o IPCA, do IBGE.' },
      { id: 'endividamento', icone: 'cartao', titulo: 'Endividamento', texto: 'O plano fala em inadimplentes: quem tem conta atrasada e o nome negativado. Ter dívida em dia é outra coisa.' },
      { id: 'desalento', icone: 'placa', titulo: 'Desalento', texto: 'É quem desistiu de procurar emprego porque acha que não vai achar. Essa pessoa não entra na taxa de desemprego.' },
    ],
  },

  dados: [
    {
      id: 'p01-item1',
      rotulo: 'Item 1 do plano de governo',
      valor: '5 problemas',
      selo: 'verificado',
      ressalva: null,
      saibaMais:
        'Texto do plano: o Brasil precisa resgatar a esperança "de um país devastado pela fome, pelo desemprego, inflação, endividamento e desalento das famílias". O link leva à página do TSE onde os planos registrados podem ser consultados.',
      fonte: inst('tse', 'plano de governo de 2022 (item 1)'),
    },
  ],

  placar: {
    titulo: 'Placar "fim de 2022 × atual"',
    itens: [
      {
        id: 'p01-placar-inflacao',
        rotulo: 'Inflação em 12 meses (dez/2022 → ago/2026)',
        antes: '5,79%',
        depois: '4,22%',
        valor: '5,79% → 4,22%',
        selo: 'verificado',
        ressalva: null,
        saibaMais: 'IPCA acumulado em 12 meses: 5,79% em dezembro de 2022 e 4,22% em agosto de 2026, o último mês divulgado.',
        fonte: esp('Banco Central (série 13522: IPCA em 12 meses, dados do IBGE)', URLS.ipca12m),
      },
      {
        id: 'p01-placar-desemprego',
        rotulo: 'Desemprego',
        antes: '7,9%',
        depois: '5,3%',
        valor: '7,9% → 5,3%',
        selo: 'verificado',
        ressalva: null,
        saibaMais: 'O 7,9% do 4º trimestre de 2022 confere com o IBGE. O 5,3% é do trimestre até julho de 2026 (ver parada 3).',
        fonte: esp('IBGE, PNAD Contínua: trimestre até julho de 2026', URLS.pnadJul2026),
      },
      {
        id: 'p01-placar-salario',
        rotulo: 'Salário mínimo',
        antes: 'R$ 1.212',
        depois: 'R$ 1.621',
        valor: 'R$ 1.212 → R$ 1.621',
        selo: 'verificado',
        ressalva: null,
        saibaMais: 'Os valores nominais conferem com os decretos oficiais. O ganho real (descontada a inflação) depende da base de comparação: veja a parada 3.',
        fonte: esp('Planalto, decreto do salário mínimo de 2026', URLS.salarioMinimo2026),
      },
      {
        id: 'p01-placar-renda',
        rotulo: 'Renda média do trabalho',
        antes: 'R$ 3.032',
        depois: 'R$ 3.560',
        valor: 'R$ 3.032 → R$ 3.560',
        selo: 'verificado',
        ressalva: null,
        saibaMais: 'Os dois valores estão a preços de 2025, ou seja, já descontada a inflação. Veja a conta na parada 3.',
        fonte: esp('IBGE, PNAD Contínua: rendimento de 2025', URLS.pnad2025Anual),
      },
      {
        id: 'p01-placar-fome',
        rotulo: 'Mapa da Fome',
        antes: 'Dentro',
        depois: 'Fora',
        valor: 'Dentro → Fora',
        selo: 'verificado',
        ressalva: null,
        saibaMais: 'O índice da FAO é média de 3 anos: o relatório de 2025 ainda inclui 2022. O de 2026 já é só do atual governo. Veja a parada 4.',
        fonte: esp('MDS, relatório SOFI 2026 da FAO', URLS.fome2026Mds),
      },
    ],
  },

  debate: {
    defesa: {
      titulo: 'Os cinco viraram para o lado certo',
      texto: 'Inflação menor, desemprego menor, salário mínimo e renda maiores, país fora do Mapa da Fome. O placar mostra melhora em tudo o que o plano prometeu atacar.',
    },
    critica: {
      titulo: 'Placar bonito não é balanço completo',
      texto: 'O placar escolhe o que mostrar. O endividamento, que estava na promessa, piorou e ficou de fora. O que não aparece também pesa.',
    },
  },

  mede: {
    mede: [
      'Se cada indicador estava melhor ou pior no fim do período, comparado ao fim de 2022.',
    ],
    naoProva: [
      'Que a melhora foi causada pelo governo.',
      'Quanto custou chegar lá (juros, dívida, déficit).',
      'Que os cinco problemas pesam igual.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Por que comparar com o fim de 2022', texto: 'É o ponto de partida natural de um mandato. Mas o ponto de partida também foi influenciado por fatores daquele ano, como a saída da pandemia e auxílios temporários.' },
      { titulo: 'Por que o endividamento sumiu do placar', texto: 'O item 1 cita cinco problemas. O placar troca "endividamento" e "desalento" por "salário mínimo" e "renda". Endividamento e desalento aparecem nas paradas 5 e 6.' },
    ],
  },

  perguntas: [
    {
      id: 'p01-q1',
      enunciado: 'O placar compara "fim de 2022" com "atual". O que essa comparação sozinha consegue mostrar?',
      opcoes: [
        'Que o governo causou todas as melhoras.',
        'Se cada indicador está melhor ou pior entre os dois momentos.',
        'Que os indicadores vão continuar melhorando.',
      ],
      correta: 1,
      explicacao: 'Duas fotos mostram a diferença entre dois momentos. Causa e tendência exigem outras análises.',
    },
    {
      id: 'p01-q2',
      enunciado: 'O placar mostra a renda de 2022 em R$ 3.032 e a de 2025 em R$ 3.560. Para comparar, os dois valores precisam estar:',
      opcoes: [
        'Cada um a preços do próprio ano.',
        'A preços do mesmo momento, para descontar a inflação.',
        'Em dólar.',
      ],
      correta: 1,
      explicacao: 'O IBGE corrige os valores antigos pela inflação. Assim, R$ 3.032 é a renda de 2022 a preços de 2025, e a diferença para R$ 3.560 é ganho real.',
    },
  ],
};
