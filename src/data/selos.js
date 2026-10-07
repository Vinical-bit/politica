// Selo de checagem. Todo número publicado deve estar 'verificado':
// conferido na fonte original, com link. 'pendente' é só um controle interno
// (não aparece no site) para números que ainda faltam conferir — veja CHECAGEM.md.
export const SELOS = {
  verificado: {
    id: 'verificado',
    simbolo: '✓',
    icone: 'seloConfere',
    rotulo: 'Verificado',
    descricao: 'Conferido na fonte original. O link leva direto a ela.',
  },
  pendente: {
    id: 'pendente',
    simbolo: '',
    icone: null,
    rotulo: 'Pendente',
    descricao: 'Ainda não conferido. Não deve ir para a versão publicada.',
    interno: true,
  },
};

export const ORDEM_SELOS = ['verificado'];
