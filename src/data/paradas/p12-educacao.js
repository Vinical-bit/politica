import { video, esp, URLS } from '../fontes.js';

const inep = esp('Inep, resultados do PISA 2025', URLS.pisaInep);
const relatorio = esp('Inep, relatório PISA 2025 (PDF)', URLS.pisaRelatorio);

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
      rotulo: 'Extrema pobreza sem Bolsa Família e BPC',
      valor: '10% (contra 3,5%)',
      selo: 'pendente',
      ressalva: null,
      saibaMais: 'Contraponto: o BPC existe desde 1993 e o Bolsa Família desde 2003 (virou Auxílio Brasil no governo anterior).',
      fonte: video(918),
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
