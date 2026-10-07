import { video, inst, esp, URLS } from '../fontes.js';

const copom = esp('Banco Central, histórico das decisões do Copom', URLS.selicHistorico);

export default {
  id: 'p07-juros',
  numero: 7,
  trilha: 't2',
  titulo: 'Juros',
  abertura: 'A Selic começou e terminou o período em 13,75%. No meio, caiu, subiu até 15% e voltou a cair.',
  pergunta: 'O custo do dinheiro caiu, como o plano prometia?',

  ilustracao: {
    cena: 'fabrica',
    titulo: 'O exemplo da fábrica',
    argumento: true,
    descricao: 'Uma fábrica ligada às escolhas de um empresário diante do juro alto.',
    partes: [
      { id: 'selic', icone: 'percentual', titulo: 'O que é a Selic', texto: 'A taxa básica de juros, definida pelo Copom, o comitê do Banco Central. Ela serve de piso para os juros da economia.' },
      { id: 'fabrica', icone: 'fabrica', titulo: 'Abrir ou ampliar a fábrica', rotulo: 'Abrir a fábrica', texto: 'Uma fábrica pode render 20% a 25% ao ano, mas tem risco: vendas podem cair, máquinas quebram, clientes atrasam.' },
      { id: 'titulo', icone: 'cofre', titulo: 'Deixar no título público', rotulo: 'Título público', texto: 'Com a Selic alta, um título do governo rende perto de 13% ao ano quase sem risco. A diferença para a fábrica fica pequena.' },
      { id: 'decisao', icone: 'balanca', titulo: 'A decisão', texto: 'Quando o retorno sem risco chega perto do retorno com risco, muita gente prefere não investir. Menos fábrica, menos emprego no futuro.' },
      { id: 'credito', icone: 'cartao', titulo: 'O crédito', texto: 'Juro alto também encarece financiamento e cartão para as famílias. Ajuda a frear preços e pesa no orçamento.' },
    ],
  },

  graficos: [
    {
      tipo: 'selic',
      id: 'p07-g-selic',
      titulo: 'Selic no governo Lula 3 (pontos-chave)',
      unidade: '% ao ano',
      descricao: 'Linha da Selic de dez/2022 a set/2026, com os pontos-chave clicáveis.',
      nota: 'Só os pontos marcados são dados. A linha entre eles é aproximada.',
      // `mes`: meses contados a partir de dez/2022 (0). A linha é desenhada pela sequência de `trajeto`.
      trajeto: [
        { mes: 0, numero: 13.75 },
        { mes: 7, numero: 13.75 },
        { mes: 17, numero: 10.5 },
        { mes: 20, numero: 10.5 },
        { mes: 30, numero: 15 },
        { mes: 39, numero: 15 },
        { mes: 40, numero: 14.75 },
        { mes: 42, numero: 14.25 },
        { mes: 44, numero: 14 },
        { mes: 45, numero: 13.75 },
      ],
      eixo: [
        { mes: 0, rotulo: 'dez/22' },
        { mes: 13, rotulo: '2024' },
        { mes: 25, rotulo: '2025' },
        { mes: 37, rotulo: '2026' },
      ],
      itens: [
        { id: 'p07-selic-inicio', mes: 0, rotulo: 'Selic em dez/2022 e no início do mandato', curto: 'Início', numero: 13.75, valor: '13,75%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: copom },
        { id: 'p07-selic-cortes', mes: 8, rotulo: 'Início dos cortes', curto: 'ago/23', numero: null, valor: 'Cortes a partir de ago/2023', selo: 'verificado', ressalva: null, saibaMais: null, fonte: copom },
        { id: 'p07-selic-minima', mes: 17, rotulo: 'Mínima do período (meados de 2024)', curto: 'Mínima', numero: 10.5, valor: '10,50%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: copom },
        { id: 'p07-selic-maxima', mes: 30, rotulo: 'Máxima: de jun/2025 a mar/2026', curto: 'Máxima', numero: 15, valor: '15,00%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: copom },
        {
          id: 'p07-selic-atual',
          mes: 45,
          rotulo: 'Após o Copom de 16/09/2026',
          curto: 'set/26',
          numero: 13.75,
          valor: '13,75%',
          selo: 'verificado',
          ressalva: null,
          saibaMais: 'No caminho, houve um ciclo de queda até 10,50% e outro de alta até 15%. Em 2026 houve cortes de 0,25 ponto em março, abril, junho, agosto e setembro.',
          fonte: copom,
        },
      ],
    },
  ],

  dados: [
    {
      id: 'p07-plano',
      rotulo: 'Itens 62 e 64 do plano de governo',
      valor: 'Reindustrializar, elevar o investimento e reduzir o custo de capital',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: inst('tse', 'plano de governo de 2022 (itens 62 e 64)'),
    },
    {
      id: 'p07-juro-real',
      rotulo: 'Juro real do Brasil',
      valor: '8,45% ao ano, o maior entre 40 países',
      selo: 'verificado',
      ressalva: null,
      saibaMais: {
        paragrafos: [
          'O valor e a 1ª posição batem com o "Ranking Mundial de Juros Reais" de 16/09/2026, com a Selic em 13,75%. A tabela vai do Brasil (1º, 8,45%) à Nova Zelândia (40º, −0,91%).',
          'O juro é "ex ante": Selic menos a inflação projetada para os próximos 12 meses, e não a inflação já ocorrida.',
          'O relatório de set/2026 renovou parte dos países e a metodologia pela primeira vez em 12 anos. Em mar/2026 o Brasil era 2º, atrás da Turquia.',
          'São "40 países analisados", não "as 40 maiores economias".',
        ],
      },
      fonte: esp('CNN Brasil, ranking de juros reais (MoneYou/Lev)', URLS.cnnJuroReal),
    },
    {
      id: 'p07-media-40',
      rotulo: 'Média de juro real dos 40 países',
      valor: '1,62%',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Média dos 40 países analisados no ranking. Outras edições do ranking trouxeram 1,67% e 2,18%.',
      fonte: esp('CNN Brasil, ranking de juros reais (MoneYou/Lev)', URLS.cnnJuroReal),
      compacto: true,
    },
  ],

  debate: {
    defesa: {
      titulo: 'O preço da inflação baixa',
      texto: 'O juro alto foi o remédio que segurou os preços enquanto o emprego crescia. Sem ele, a inflação estaria maior e corroendo salários.',
    },
    critica: {
      titulo: 'Juro alto trava o futuro',
      texto: 'Com o título público rendendo tanto, investir em produção perde sentido. Negócios fecham, dívidas encarecem e o crescimento futuro fica menor.',
    },
  },

  mede: {
    mede: ['O custo básico do dinheiro na economia e quanto ele rende acima da inflação esperada.'],
    naoProva: [
      'Se o juro alto foi causado pelo gasto do governo ou por choques externos.',
      'Que o ranking é comparável com edições anteriores.',
      'O que teria acontecido com juros mais baixos.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Juro nominal e juro real', texto: 'Nominal é a taxa anunciada. Real é a taxa menos a inflação. Um país pode ter juro nominal menor que o Brasil e juro real maior, se a inflação dele for mais baixa.' },
      { titulo: 'Quem decide a Selic', texto: 'O Copom, do Banco Central, que tem autonomia formal. O governo influencia indiretamente, por exemplo, pela política fiscal e pelas expectativas de inflação.' },
    ],
  },

  perguntas: [
    {
      id: 'p07-q1',
      enunciado: 'A Selic começou e terminou o período em 13,75%. Dizer que "não mudou nada" é:',
      opcoes: [
        'Correto: o número é o mesmo.',
        'Incompleto: no meio houve um ciclo de queda até 10,50% e outro de alta até 15%.',
        'Errado: a Selic nunca foi 13,75%.',
      ],
      correta: 1,
      explicacao: 'Olhar só as pontas esconde o caminho. Gráficos de linha mostram o percurso.',
    },
    {
      id: 'p07-q2',
      enunciado: 'O juro real "ex ante" desconta qual inflação?',
      opcoes: ['A dos últimos 12 meses.', 'A projetada para os próximos 12 meses.', 'A média da última década.'],
      correta: 1,
      explicacao: 'Ex ante quer dizer "olhando para a frente". Por isso muda conforme as projeções do mercado.',
    },
  ],
};
