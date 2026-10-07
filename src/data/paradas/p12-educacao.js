import { video, esp, URLS } from '../fontes.js';

const inep = esp('Inep, resultados do PISA 2025', URLS.pisaInep);
const relatorio = esp('Inep, relatório PISA 2025 (PDF)', URLS.pisaRelatorio);
const fAg = esp('Agência Brasil, série histórica do PISA (2000–2015)', URLS.pisaSerieAgenciaBrasil);
const f18 = esp('Poder360, resultados do PISA 2018', URLS.pisa2018Poder360);
const fQb = esp('Quero Bolsa, PISA 2022 e 2025 (dados do Inep)', URLS.pisa2022e2025QueroBolsa);

export default {
  id: 'p12-educacao',
  numero: 12,
  trilha: 't3',
  titulo: 'Educação e proteção social',
  abertura: 'O Brasil está entre os que mais avançaram no PISA em 20 anos. Mas "sétimo que mais avançou entre 89" mistura duas listas.',
  pergunta: 'A educação avançou? E qual o papel dos programas sociais?',

  ilustracao: {
    cena: 'livro',
    titulo: 'Como ler o PISA',
    descricao: 'Um livro ligado às peças da avaliação internacional.',
    partes: [
      { id: 'pisa', icone: 'livro', titulo: 'O que é o PISA', texto: 'Avaliação internacional da OCDE com estudantes de 15 anos, aplicada a cada três ou quatro anos. No Brasil, quem aplica é o Inep.' },
      { id: 'areas', icone: 'lapis', titulo: 'Três áreas', texto: 'Leitura, matemática e ciências. Cada uma tem a própria nota e o próprio ranking.' },
      { id: 'nota', icone: 'regua', titulo: 'Nota × avanço', texto: 'Uma lista ordena países pela nota. Outra ordena pelo quanto a nota subiu. Um país pode ir bem numa e mal na outra.' },
      { id: 'ocde', icone: 'globo', titulo: 'A média da OCDE', texto: 'Média de países ricos. Se ela cai, a distância para o Brasil diminui mesmo sem o Brasil mudar.' },
      { id: 'janela', icone: 'calendario', titulo: 'A janela de tempo', texto: 'Comparar 2006 com 2025 atravessa vários governos. Avanço em educação leva anos para aparecer.' },
      { id: 'protecao', icone: 'guardaChuva', titulo: 'Proteção social', texto: 'Bolsa Família e BPC transferem renda para famílias pobres e idosos ou pessoas com deficiência de baixa renda.' },
    ],
  },

  graficos: [
    {
      tipo: 'pisa',
      id: 'p12-g-pisa',
      titulo: 'PISA: Brasil × média da OCDE',
      descricao: 'Linhas com a nota do Brasil em cada edição do PISA e a média da OCDE em 2006 e 2025, por área.',
      nota: 'Brasil: todas as edições em que a área foi medida de forma comparável (matemática desde 2003, ciências desde 2006). OCDE: 2006 e 2025, os dois pontos conferidos. Fontes: Inep, Agência Brasil, Poder360 e Quero Bolsa.',
      areas: [
        { id: 'leitura', nome: 'Leitura' },
        { id: 'matematica', nome: 'Matemática' },
        { id: 'ciencias', nome: 'Ciências' },
      ],
      itens: [
        { id: 'p12-br-leitura-2000', serie: 'brasil', area: 'leitura', ano: 2000, rotulo: 'Brasil, leitura, PISA 2000', curto: '2000', numero: 396, valor: '396 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-leitura-2003', serie: 'brasil', area: 'leitura', ano: 2003, rotulo: 'Brasil, leitura, PISA 2003', curto: '2003', numero: 403, valor: '403 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-leitura-2006', serie: 'brasil', area: 'leitura', ano: 2006, rotulo: 'Brasil, leitura, PISA 2006', curto: '2006', numero: 393, valor: '393 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-leitura-2009', serie: 'brasil', area: 'leitura', ano: 2009, rotulo: 'Brasil, leitura, PISA 2009', curto: '2009', numero: 412, valor: '412 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-leitura-2012', serie: 'brasil', area: 'leitura', ano: 2012, rotulo: 'Brasil, leitura, PISA 2012', curto: '2012', numero: 407, valor: '407 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-leitura-2015', serie: 'brasil', area: 'leitura', ano: 2015, rotulo: 'Brasil, leitura, PISA 2015', curto: '2015', numero: 407, valor: '407 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-leitura-2018', serie: 'brasil', area: 'leitura', ano: 2018, rotulo: 'Brasil, leitura, PISA 2018', curto: '2018', numero: 413, valor: '413 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: f18 },
        { id: 'p12-br-leitura-2022', serie: 'brasil', area: 'leitura', ano: 2022, rotulo: 'Brasil, leitura, PISA 2022', curto: '2022', numero: 410, valor: '410 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fQb },
        { id: 'p12-br-leitura-2025', serie: 'brasil', area: 'leitura', ano: 2025, rotulo: 'Brasil, leitura, PISA 2025', curto: '2025', numero: 408, valor: '408 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: inep },
        { id: 'p12-br-matematica-2003', serie: 'brasil', area: 'matematica', ano: 2003, rotulo: 'Brasil, matemática, PISA 2003', curto: '2003', numero: 356, valor: '356 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-matematica-2006', serie: 'brasil', area: 'matematica', ano: 2006, rotulo: 'Brasil, matemática, PISA 2006', curto: '2006', numero: 370, valor: '370 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-matematica-2009', serie: 'brasil', area: 'matematica', ano: 2009, rotulo: 'Brasil, matemática, PISA 2009', curto: '2009', numero: 386, valor: '386 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-matematica-2012', serie: 'brasil', area: 'matematica', ano: 2012, rotulo: 'Brasil, matemática, PISA 2012', curto: '2012', numero: 389, valor: '389 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-matematica-2015', serie: 'brasil', area: 'matematica', ano: 2015, rotulo: 'Brasil, matemática, PISA 2015', curto: '2015', numero: 377, valor: '377 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-matematica-2018', serie: 'brasil', area: 'matematica', ano: 2018, rotulo: 'Brasil, matemática, PISA 2018', curto: '2018', numero: 384, valor: '384 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: f18 },
        { id: 'p12-br-matematica-2022', serie: 'brasil', area: 'matematica', ano: 2022, rotulo: 'Brasil, matemática, PISA 2022', curto: '2022', numero: 379, valor: '379 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fQb },
        { id: 'p12-br-matematica-2025', serie: 'brasil', area: 'matematica', ano: 2025, rotulo: 'Brasil, matemática, PISA 2025', curto: '2025', numero: 377, valor: '377 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: inep },
        { id: 'p12-br-ciencias-2006', serie: 'brasil', area: 'ciencias', ano: 2006, rotulo: 'Brasil, ciências, PISA 2006', curto: '2006', numero: 390, valor: '390 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-ciencias-2009', serie: 'brasil', area: 'ciencias', ano: 2009, rotulo: 'Brasil, ciências, PISA 2009', curto: '2009', numero: 405, valor: '405 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-ciencias-2012', serie: 'brasil', area: 'ciencias', ano: 2012, rotulo: 'Brasil, ciências, PISA 2012', curto: '2012', numero: 402, valor: '402 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-ciencias-2015', serie: 'brasil', area: 'ciencias', ano: 2015, rotulo: 'Brasil, ciências, PISA 2015', curto: '2015', numero: 401, valor: '401 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fAg },
        { id: 'p12-br-ciencias-2018', serie: 'brasil', area: 'ciencias', ano: 2018, rotulo: 'Brasil, ciências, PISA 2018', curto: '2018', numero: 404, valor: '404 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: f18 },
        { id: 'p12-br-ciencias-2022', serie: 'brasil', area: 'ciencias', ano: 2022, rotulo: 'Brasil, ciências, PISA 2022', curto: '2022', numero: 403, valor: '403 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: fQb },
        { id: 'p12-br-ciencias-2025', serie: 'brasil', area: 'ciencias', ano: 2025, rotulo: 'Brasil, ciências, PISA 2025', curto: '2025', numero: 409, valor: '409 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: inep },
        { id: 'p12-ocde-leitura-2006', serie: 'ocde', area: 'leitura', ano: 2006, rotulo: 'Média da OCDE, leitura, PISA 2006', curto: '2006', numero: 495, valor: '495 pontos', selo: 'verificado', ressalva: null, saibaMais: 'Calculada a partir da distância informada pelo Inep (nota do Brasil + distância).', fonte: inep },
        { id: 'p12-ocde-leitura-2025', serie: 'ocde', area: 'leitura', ano: 2025, rotulo: 'Média da OCDE, leitura, PISA 2025', curto: '2025', numero: 466, valor: '466 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: inep },
        { id: 'p12-ocde-matematica-2006', serie: 'ocde', area: 'matematica', ano: 2006, rotulo: 'Média da OCDE, matemática, PISA 2006', curto: '2006', numero: 501, valor: '501 pontos', selo: 'verificado', ressalva: null, saibaMais: 'Calculada a partir da distância informada pelo Inep (nota do Brasil + distância).', fonte: inep },
        { id: 'p12-ocde-matematica-2025', serie: 'ocde', area: 'matematica', ano: 2025, rotulo: 'Média da OCDE, matemática, PISA 2025', curto: '2025', numero: 469, valor: '469 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: inep },
        { id: 'p12-ocde-ciencias-2006', serie: 'ocde', area: 'ciencias', ano: 2006, rotulo: 'Média da OCDE, ciências, PISA 2006', curto: '2006', numero: 503, valor: '503 pontos', selo: 'verificado', ressalva: null, saibaMais: 'Calculada a partir da distância informada pelo Inep (nota do Brasil + distância).', fonte: inep },
        { id: 'p12-ocde-ciencias-2025', serie: 'ocde', area: 'ciencias', ano: 2025, rotulo: 'Média da OCDE, ciências, PISA 2025', curto: '2025', numero: 486, valor: '486 pontos', selo: 'verificado', ressalva: null, saibaMais: null, fonte: inep },
      ],
    },
  ],

  dados: [
    {
      id: 'p12-pisa-2025',
      rotulo: 'PISA 2025: Brasil × média da OCDE',
      valor: 'Leitura 408 × 466 · Matemática 377 × 469 · Ciências 409 × 486',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Em 2006, o Brasil tinha 393 em leitura, 370 em matemática e 390 em ciências.',
      fonte: inep,
    },
    {
      id: 'p12-avanco',
      rotulo: 'Avanço de 2006 a 2025',
      valor: '7º em leitura e matemática, 8º em ciências',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Numa lista de mais de 50 países com dados desde 2006.',
      fonte: inep,
    },
    {
      id: 'p12-89',
      rotulo: 'Posição no ranking de nota do PISA 2025 (89 países)',
      valor: '71º em matemática (empatado com o Líbano), 52º em leitura e 67º em ciências',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Participaram 91 países e economias; 89 têm resultados comparáveis e entram no ranking. São duas listas diferentes: na de avanço desde 2006 o Brasil é 7º, entre pouco mais de 50 países com dados desde então; na de nota em 2025 são os 89.',
      fonte: esp('O POVO, posições do Brasil no PISA 2025 (dados da OCDE)', URLS.pisaRankingOpovo),
    },
    {
      id: 'p12-estavel',
      rotulo: '2025 comparado a 2022',
      valor: 'Estável: leitura 408 × 410; matemática 377 × 379',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'A janela 2006–2025 atravessa vários governos.',
      fonte: relatorio,
      compacto: true,
    },
    {
      id: 'p12-distancia',
      rotulo: 'Distância para a OCDE (2006 → 2025)',
      valor: 'Leitura 102 → 58 pontos; matemática 131 → 92',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Em parte porque a média da OCDE caiu. Mas o Brasil também subiu nas três áreas desde 2006: "só os outros caíram" é exagero.',
      fonte: relatorio,
      compacto: true,
    },
    {
      id: 'p12-bf-bpc',
      rotulo: 'Extrema pobreza sem os programas sociais (2024)',
      valor: '10% (contra 3,5%)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Simulação do IBGE: sem os benefícios de programas sociais (Bolsa Família, BPC e outros), a extrema pobreza teria sido 6,5 pontos maior. Contraponto: o BPC existe desde 1993 e o Bolsa Família desde 2003 (virou Auxílio Brasil no governo anterior).',
      fonte: esp('IBGE, Síntese de Indicadores Sociais 2025', URLS.pobreza2024),
    },
  ],

  debate: {
    defesa: {
      titulo: 'Avanço de longo prazo e rede de proteção',
      texto: 'O Brasil está entre os que mais avançaram no PISA, e os programas sociais seguram milhões de pessoas fora da extrema pobreza.',
    },
    critica: {
      titulo: 'Mérito de vários governos',
      texto: 'O avanço do PISA vem desde 2006 e ficou estável de 2022 para 2025. Os programas sociais também são antigos e atravessaram governos diferentes.',
    },
  },

  mede: {
    mede: ['O desempenho de estudantes de 15 anos em provas comparáveis entre países.'],
    naoProva: [
      'Qual governo causou o avanço: a janela tem quase 20 anos.',
      'A qualidade de toda a educação, como ensino superior ou alfabetização.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Duas listas diferentes', texto: 'A lista de nota ordena quem tirou mais. A lista de avanço ordena quem subiu mais desde 2006. O Brasil vai bem na segunda e mal na primeira.' },
      { titulo: 'Por que a média da OCDE caiu', texto: 'Vários países ricos tiveram queda de desempenho, em especial depois da pandemia. Isso encurta a distância, mas não é avanço do Brasil.' },
    ],
  },

  perguntas: [
    {
      id: 'p12-q1',
      enunciado: 'A distância do Brasil para a média da OCDE caiu. Isso prova que o Brasil melhorou?',
      opcoes: [
        'Sim, sempre.',
        'Não sozinho: a distância também cai se a média da OCDE cair. É preciso olhar a nota do Brasil.',
        'Não, prova que piorou.',
      ],
      correta: 1,
      explicacao: 'Distância depende dos dois lados. Neste caso, o Brasil também subiu, mas o encurtamento exagera o avanço.',
    },
    {
      id: 'p12-q2',
      enunciado: 'Ser 7º em avanço e 71º em nota é:',
      opcoes: ['Contraditório: um dos dados está errado.', 'Possível: avançar muito partindo de longe ainda deixa a nota baixa.', 'Impossível.'],
      correta: 1,
      explicacao: 'Quem começa muito atrás pode subir bastante e ainda ficar abaixo de quem começou na frente.',
    },
  ],
};
