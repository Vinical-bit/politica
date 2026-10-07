import { video, inst, esp, URLS } from '../fontes.js';

const ibgeIpca = (oque) => inst('ibgeIpca', oque);

export default {
  id: 'p02-inflacao',
  numero: 2,
  trilha: 't1',
  titulo: 'Inflação',
  abertura: 'A inflação caiu e ficou abaixo da de mandatos anteriores. A pergunta é por quanto, e a que preço.',
  pergunta: 'A inflação caiu? E quanto custou segurá-la?',

  ilustracao: {
    cena: 'carrinho',
    titulo: 'Como se mede a inflação',
    descricao: 'Um carrinho de compras ligado às etapas da medição do IPCA.',
    partes: [
      { id: 'ipca', icone: 'lupa', titulo: 'O que é o IPCA', texto: 'Índice de Preços ao Consumidor Amplo. É a medida oficial de inflação do Brasil, calculada pelo IBGE todo mês.' },
      { id: 'cesta', icone: 'cesta', titulo: 'A cesta', texto: 'O IBGE acompanha centenas de produtos e serviços, de comida a aluguel e transporte. Cada item tem um peso conforme o gasto das famílias.' },
      { id: 'acumulado', icone: 'calendario', titulo: 'Acumulado', texto: 'Inflação de vários anos não se soma: ela se multiplica. Por isso o acumulado de um mandato é um pouco maior que a soma dos anos.' },
      { id: 'meta', icone: 'alvo', titulo: 'A meta', texto: 'O governo define uma meta de inflação e o Banco Central tenta cumpri-la, principalmente mexendo nos juros.' },
      { id: 'juros', icone: 'percentual', titulo: 'O freio', texto: 'Juro alto encarece o crédito, esfria o consumo e segura os preços. É eficaz, mas tem custo para quem deve e para quem investe.' },
    ],
  },

  graficos: [
    {
      tipo: 'barras',
      id: 'p02-g-anual',
      titulo: 'IPCA anual',
      unidade: '%',
      descricao: 'Barras com a inflação de cada ano, de 2022 a 2025.',
      itens: [
        { id: 'p02-ipca-2022', rotulo: 'IPCA em 2022', curto: '2022', numero: 5.79, valor: '5,79%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: ibgeIpca('IPCA anual') },
        { id: 'p02-ipca-2023', rotulo: 'IPCA em 2023', curto: '2023', numero: 4.62, valor: '4,62%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: ibgeIpca('IPCA anual') },
        { id: 'p02-ipca-2024', rotulo: 'IPCA em 2024', curto: '2024', numero: 4.83, valor: '4,83%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: ibgeIpca('IPCA anual') },
        { id: 'p02-ipca-2025', rotulo: 'IPCA em 2025', curto: '2025', numero: 4.26, valor: '4,26%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: esp('IBGE, IPCA de dezembro de 2025', URLS.ipca2025) },
      ],
    },
    {
      tipo: 'barras',
      id: 'p02-g-mandatos',
      titulo: 'IPCA acumulado por mandato',
      unidade: '%',
      descricao: 'Barras com a inflação acumulada em cada mandato presidencial desde o Plano Real.',
      itens: [
        { id: 'p02-mandato-fhc1', rotulo: 'FHC 1 (1995–1998)', curto: 'FHC 1', numero: 43.44, valor: '43,44%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: ibgeIpca('série histórica do IPCA') },
        { id: 'p02-mandato-fhc2', rotulo: 'FHC 2 (1999–2002)', curto: 'FHC 2', numero: 39.87, valor: '39,87%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: ibgeIpca('série histórica do IPCA') },
        { id: 'p02-mandato-lula1', rotulo: 'Lula 1 (2003–2006)', curto: 'Lula 1', numero: 28.2, valor: '28,20%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: ibgeIpca('série histórica do IPCA') },
        { id: 'p02-mandato-lula2', rotulo: 'Lula 2 (2007–2010)', curto: 'Lula 2', numero: 22.21, valor: '22,21%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: ibgeIpca('série histórica do IPCA') },
        { id: 'p02-mandato-dilma1', rotulo: 'Dilma 1 (2011–2014)', curto: 'Dilma 1', numero: 27, valor: '~27%', selo: 'verificado', ressalva: null, saibaMais: 'Composto dos IPCAs anuais de 2011 a 2014: cerca de 27,0%.', fonte: ibgeIpca('série histórica do IPCA') },
        { id: 'p02-mandato-bolsonaro', rotulo: 'Bolsonaro (2019–2022)', curto: 'Bolsonaro', numero: 26.93, valor: '26,93%', selo: 'verificado', ressalva: null, saibaMais: null, fonte: ibgeIpca('série histórica do IPCA') },
        {
          id: 'p02-mandato-lula3',
          rotulo: 'Lula 3 (2023–2026)',
          curto: 'Lula 3',
          numero: 19.73,
          valor: '19,73%',
          selo: 'pendente',
          ressalva: null, pendencia: 'É projeção: o mandato só fecha em dezembro de 2026.',
          saibaMais:
            'Compostos, os IPCAs de 2023 a 2025 dão cerca de 14,3% (cálculo nosso). A projeção de 19,73% foi feita com 2026 em 4,27%. O boletim Focus de setembro de 2026 projeta cerca de 4,9% para 2026, o que levaria o acumulado para perto de 20%.',
          fonte: ibgeIpca('série histórica do IPCA'),
        },
      ],
    },
  ],

  dados: [
    {
      id: 'p02-menor-desde-2018',
      rotulo: '2025: menor alta anual desde 2018',
      valor: '4,26% (2018: 3,75%)',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: esp('IBGE, IPCA de dezembro de 2025', URLS.ipca2025),
    },
    {
      id: 'p02-mesmo-ponto',
      rotulo: 'No mesmo ponto do mandato (jan. do 1º ano a ago. do 4º)',
      valor: 'Lula 3: 17,9% · Lula 2: 19% · Bolsonaro: 25,3%',
      selo: 'verificado',
      ressalva: null,
      saibaMais:
        'Comparação publicada pela Folha com dados do IBGE. Nesse recorte igual, o Lula 3 continua com a menor inflação desde o Plano Real, mas a vantagem sobre o Lula 2 é de cerca de 1 ponto percentual.',
      fonte: ibgeIpca('IPCA, via Folha de S.Paulo'),
    },
  ],

  debate: {
    defesa: {
      titulo: 'Menor inflação de um mandato desde o Real',
      texto: 'A inflação caiu e ficou controlada enquanto a economia crescia e o emprego aumentava. Isso protege o poder de compra de quem ganha menos.',
    },
    critica: {
      titulo: 'Preço segurado tem conta',
      texto: 'Segurar preços tem custo. O custo foi juro alto por muito tempo, que encarece dívidas e trava investimento.',
    },
  },

  mede: {
    mede: ['Quanto os preços ao consumidor subiram em média, no período.'],
    naoProva: [
      'Quem segurou a inflação: governo, Banco Central ou cenário externo.',
      'Que o preço de cada família subiu igual: a cesta de cada um é diferente.',
      'O resultado do mandato inteiro, que ainda não fechou.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Por que o recorte importa', texto: 'Comparar um mandato fechado com outro ainda aberto mistura dado com projeção. O recorte "até agosto do 4º ano" compara todos no mesmo ponto.' },
      { titulo: 'O papel do Banco Central', texto: 'O Banco Central tem autonomia formal desde 2021. Ele decide os juros para cumprir a meta. Parte do mérito, e do custo, da inflação baixa passa por essa decisão.' },
    ],
  },

  perguntas: [
    {
      id: 'p02-q1',
      enunciado: 'A inflação foi de 4,62%, 4,83% e 4,26% em três anos. O acumulado é:',
      opcoes: ['Exatamente a soma: 13,71%.', 'Um pouco mais que a soma: cerca de 14,3%.', 'A média: cerca de 4,6%.'],
      correta: 1,
      explicacao: 'A inflação de cada ano incide sobre preços que já subiram. Por isso se multiplica: 1,0462 × 1,0483 × 1,0426 ≈ 1,143.',
    },
    {
      id: 'p02-q2',
      enunciado: 'Por que comparar todos os governos "até agosto do 4º ano"?',
      opcoes: [
        'Porque agosto é o mês de menor inflação.',
        'Para comparar mandatos no mesmo ponto, sem misturar dado fechado com projeção.',
        'Porque o IBGE só divulga dados até agosto.',
      ],
      correta: 1,
      explicacao: 'O Lula 3 ainda não terminou. O recorte igual evita comparar 48 meses de um governo com 44 meses mais uma estimativa de outro.',
    },
  ],
};
