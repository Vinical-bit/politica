import { video, inst, esp, URLS } from '../fontes.js';

export default {
  id: 'p06-endividamento',
  numero: 6,
  trilha: 't1',
  titulo: 'Endividamento',
  abertura: 'Dos cinco problemas, este é o que piorou. O número de pessoas com nome negativado bateu recorde.',
  pergunta: 'As famílias estão menos endividadas?',

  ilustracao: {
    cena: 'cartao',
    titulo: 'Dívida, atraso e nome sujo',
    descricao: 'Um cartão de crédito ligado a conceitos que costumam ser confundidos.',
    partes: [
      { id: 'endividado', icone: 'cartao', titulo: 'Endividado', texto: 'Quem tem alguma dívida: financiamento, cartão, empréstimo. Pode estar tudo em dia.' },
      { id: 'inadimplente', icone: 'calendario', titulo: 'Inadimplente', texto: 'Quem atrasou o pagamento de uma dívida.' },
      { id: 'negativado', icone: 'alerta', titulo: 'Negativado', texto: 'Quem teve a dívida atrasada registrada num cadastro como o da Serasa. É esse o número que a Serasa divulga.' },
      { id: 'juros', icone: 'percentual', titulo: 'Juros', texto: 'Com juro alto, a parcela pesa mais e a dívida cresce mais rápido quando atrasa.' },
      { id: 'desenrola', icone: 'chave', titulo: 'Renegociação', texto: 'Programas como o Desenrola oferecem desconto e prazo para limpar o nome. Resolvem o estoque, mas não impedem novos atrasos.' },
    ],
  },

  dados: [
    {
      id: 'p06-item60',
      rotulo: 'Item 60 do plano de governo',
      valor: '"Já são mais de 66 milhões de pessoas inadimplentes"',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: inst('tse', 'plano de governo de 2022 (item 60)'),
    },
    {
      id: 'p06-desenrola',
      rotulo: 'Desenrola Brasil (encerrado em maio/2024)',
      valor: 'R$ 53,07 bi renegociados por 15,1 milhões de pessoas',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: esp('Ministério da Fazenda, balanço final do Desenrola (PDF publicado pelo Poder360)', URLS.desenrolaBalanco),
    },
    {
      id: 'p06-serasa',
      rotulo: 'Negativados em julho/2026 (Serasa)',
      valor: '83,9 milhões, recorde da série',
      selo: 'verificado',
      ressalva: null,
      saibaMais: 'Foram 20 altas mensais seguidas. A economista-chefe da Serasa associa a alta aos juros elevados. Negativado é quem tem dívida atrasada registrada; não é o mesmo que endividado (quem tem dívida, em dia ou não).',
      fonte: esp('Serasa, inadimplência atinge 83,9 milhões', URLS.serasaJul2026),
    },
    {
      id: 'p06-crescimento',
      rotulo: 'Crescimento desde o início do governo',
      valor: '27%',
      selo: 'pendente',
      ressalva: null, pendencia: '27% é a alta contra os 66 milhões do plano (2022). Contra jan/2023 (70,1 milhões), a alta é de cerca de 20%.',
      saibaMais: 'É coerente com a passagem de 66 para 83,9 milhões.',
      fonte: esp('Agência Brasil/Serasa, inadimplentes em janeiro de 2023', URLS.serasaJan2023),
      compacto: true,
    },
    {
      id: 'p06-2016',
      rotulo: 'Negativados em 2016',
      valor: '59 milhões',
      selo: 'verificado',
      ressalva: null,
      saibaMais: null,
      fonte: inst('serasa', 'Mapa da Inadimplência'),
      compacto: true,
    },
  ],

  debate: {
    defesa: {
      titulo: 'O Desenrola foi a resposta',
      texto: 'O governo criou um programa que renegociou dívidas de milhões de pessoas. Sem ele, o número de negativados seria ainda maior.',
    },
    critica: {
      titulo: 'O carro zero do amigo endividado',
      texto: 'É como o amigo que aparece de carro novo, mas está endividado. Indicadores bonitos convivem com um recorde de nomes negativados.',
    },
  },

  mede: {
    mede: ['Quantas pessoas têm dívida atrasada registrada num cadastro de crédito.'],
    naoProva: [
      'O total de pessoas endividadas.',
      'Quanto cada um deve ou há quanto tempo.',
      'Que o Desenrola não funcionou: sem ele, o número poderia ser maior.',
    ],
  },

  saibaMais: {
    titulo: 'Quer entender melhor?',
    blocos: [
      { titulo: 'Por que a inadimplência sobe com o juro', texto: 'Juro alto encarece o crédito rotativo e as parcelas. Quem estava no limite atrasa. É por isso que esta parada conversa com a de juros (parada 7).' },
      { titulo: 'Programa de renegociação', texto: 'Renegociar limpa o nome no curto prazo. Se a renda não acompanha o custo da dívida, parte das pessoas volta a atrasar.' },
    ],
  },

  perguntas: [
    {
      id: 'p06-q1',
      enunciado: 'A Serasa conta 83,9 milhões de negativados. Isso é o número de:',
      opcoes: ['Pessoas com qualquer dívida.', 'Pessoas com dívida atrasada registrada.', 'Pessoas que fizeram empréstimo no ano.'],
      correta: 1,
      explicacao: 'Negativado é quem tem dívida em atraso registrada. Quem paga em dia não entra.',
    },
    {
      id: 'p06-q2',
      enunciado: 'O Desenrola renegociou dívidas de milhões e, mesmo assim, os negativados bateram recorde. Uma leitura possível é:',
      opcoes: [
        'O programa não teve efeito nenhum.',
        'Novos atrasos superaram as renegociações; sem o programa, o número poderia ser maior.',
        'Os dados estão errados.',
      ],
      correta: 1,
      explicacao: 'Um dado não basta para dizer se o programa funcionou. Seria preciso estimar o que teria acontecido sem ele.',
    },
  ],
};
