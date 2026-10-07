import { video, inst, esp, URLS } from '../fontes.js';

export default {
  id: 'p13-reforma-tributaria',
  numero: 13,
  trilha: 't3',
  titulo: 'Reforma tributária',
  abertura: 'A reforma troca cinco impostos por um IVA dividido em dois. Simplifica, mas as exceções empurram a alíquota padrão para cima.',
  pergunta: 'A reforma tributária simplifica ou encarece?',

  ilustracao: {
    cena: 'engrenagem',
    titulo: 'A cadeia do carro',
    argumento: true,
    descricao: 'Uma fábrica de carros ligada aos fornecedores que pagam imposto em cada etapa.',
    partes: [
      { id: 'minerio', icone: 'montanha', titulo: 'Minério → aço → carro', texto: 'Cada etapa transforma o produto da anterior. Hoje, parte do imposto pago lá atrás vira custo e se acumula no preço final.' },
      { id: 'petroleo', icone: 'gota', titulo: 'Petróleo → plástico → notebook', rotulo: 'Petróleo → notebook', texto: 'O mesmo vale para cadeias longas como a de eletrônicos.' },
      { id: 'soja', icone: 'trigo', titulo: 'Soja → óleo → alimento', texto: 'Alimentos processados também passam por várias etapas industriais.' },
      { id: 'fornecedores', icone: 'pneu', titulo: 'Os fornecedores', texto: 'Um carro puxa pneu, vidro, tinta e bancos. Com o IVA, quem compra desconta o imposto já pago pelo fornecedor.' },
      { id: 'iva', icone: 'documento', titulo: 'O IVA', texto: 'Imposto sobre valor agregado: cada etapa paga só sobre o que acrescentou. É o modelo da maioria dos países.' },
      { id: 'excecoes', icone: 'remendo', titulo: 'O "Frankenstein"', texto: 'Descontos, isenções e regimes especiais foram costurados no texto. Quem fica de fora paga mais para compensar.' },
    ],
  },

  dados: [
    {
      id: 'p13-iva-dual',
      rotulo: 'O que muda',
      valor: 'IVA dual (CBS federal + IBS de estados e municípios) no lugar de PIS, Cofins, IPI, ICMS e ISS',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: esp('Planalto, Emenda Constitucional 132 (reforma tributária)', URLS.ec132),
    },
    {
      id: 'p13-aliquota',
      rotulo: 'Alíquota de referência estimada',
      valor: 'Cerca de 28%',
      selo: 'pendente',
      ressalva: null, pendencia: 'É estimativa, não alíquota em vigor. Se confirmada, passaria os 27% da Hungria ("maior IVA do mundo").',
      saibaMais: {
        paragrafos: [
          'A Secretaria Extraordinária da Reforma Tributária (Fazenda) já falava em torno de 28% (27,97% na estimativa de 2025; a versão original era 26,5%). O Comitê Gestor do IBS adotou 27,91% como premissa em ago/2026 e projetou cerca de 28% em 2033.',
          'A lei tem uma trava de 26,5%: se a soma das alíquotas passar disso, o Executivo precisa propor lei para reduzir benefícios. A checagem está prevista para 2031.',
          'A alíquota definitiva é fixada pelo Senado, com cálculo do TCU (prazo previsto até 30/10/2026), e só vale por completo em 2033. Em 2026, a alíquota-teste é de 0,9% (CBS) e 0,1% (IBS).',
          'Quanto mais exceções e regimes especiais, maior a alíquota padrão para o resto. Esse é o centro da crítica do "Frankenstein".',
        ],
      },
      fonte: inst('reforma', 'estimativas da alíquota de referência'),
    },
    {
      id: 'p13-comercio-servicos',
      rotulo: 'Peso de comércio e serviços (MDIC, 2023)',
      valor: '71% dos empregos formais e 67,4% do PIB',
      selo: 'pendente',
      ressalva: null, pendencia: 'O dado junta comércio e serviços; o vídeo fala em "serviços, mais de 60%".',
      saibaMais: null,
      fonte: inst('mdic', 'comércio e serviços'),
    },
    {
      id: 'p13-transformacao',
      rotulo: 'Indústria de transformação',
      valor: 'Cerca de 10,8% do PIB',
      selo: 'pendente',
      ressalva: null,
      saibaMais: null,
      fonte: video(1314),
      compacto: true,
    },
  ],

  debate: {
    defesa: {
      titulo: 'Simplifica e destrava a indústria',
      texto: 'Acabar com o imposto em cascata barateia cadeias longas, como a do carro. A indústria de transformação e seus fornecedores ganham competitividade.',
    },
    critica: {
      titulo: 'Exceção para uns, conta para outros',
      texto: 'As exceções puxaram a alíquota padrão para perto do maior IVA do mundo. Comércio e serviços, que empregam a maioria, podem pagar mais.',
    },
  },

  mede: {
    mede: ['Quanto de imposto a reforma prevê sobre o consumo, segundo estimativas oficiais.'],
    naoProva: [
      'A alíquota final: ela ainda será fixada.',
      'Quem vai pagar mais ou menos de fato: depende de preços e do repasse de cada setor.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Transição em 2026', texto: 'O imposto novo é abatido do antigo, então o caixa das empresas não muda neste ano. O custo é de adaptação: nota fiscal, sistema, contador. É um argumento, não um dado medido.' },
      { titulo: 'Por que serviços reclamam', texto: 'Serviços usam poucos insumos tributados: o maior custo é gente. Com pouco crédito para descontar, uma alíquota alta pesa mais.' },
    ],
  },

  perguntas: [
    {
      id: 'p13-q1',
      enunciado: 'Se o Congresso cria mais exceções na reforma, a alíquota padrão tende a:',
      opcoes: ['Cair.', 'Subir, para manter a arrecadação.', 'Ficar igual.'],
      correta: 1,
      explicacao: 'Quem tem desconto paga menos; para arrecadar o mesmo, quem não tem paga mais.',
    },
    {
      id: 'p13-q2',
      enunciado: '"28%" hoje é:',
      opcoes: ['A alíquota em vigor.', 'Uma estimativa que ainda depende de cálculo e votação.', 'A alíquota de 2026.'],
      correta: 1,
      explicacao: 'Em 2026 vale só a alíquota-teste. A definitiva será fixada pelo Senado e valerá por completo em 2033.',
    },
  ],
};
