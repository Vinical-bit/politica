// Fontes: instituições, URLs oficiais e atalhos para montar o campo `fonte` de cada dado.
// Regra (README, seção "Como funcionam as fontes"):
//   - 'especifico'    → página do próprio dado (tabela, release, matéria).
//   - 'institucional' → página geral da instituição para o tema. Aparece como "Fonte (página geral)".
//   - 'video'         → o próprio vídeo, no minuto em que o dado aparece.

export const VIDEO = {
  id: 'j_jRpvDfIUU',
  url: 'https://youtu.be/j_jRpvDfIUU',
  titulo: 'O que Lula prometeu no plano de governo?',
};

// Endereço do repositório no GitHub (edite aqui).
export const REPOSITORIO_URL = 'https://github.com/SEU-USUARIO/politica';

// Data da checagem exibida no rodapé.
export const DATA_CHECAGEM = '06/10/2026';

/** Fonte do tipo "vídeo". `t` em segundos (ou null quando o minuto ainda não foi localizado). */
export function video(t = null) {
  return {
    nome: `Vídeo "${VIDEO.titulo}"`,
    url: t != null ? `${VIDEO.url}?t=${t}` : VIDEO.url,
    tipo: 'video',
    t,
  };
}

/** Fonte específica: página do próprio dado. */
export function esp(nome, url) {
  return { nome, url, tipo: 'especifico' };
}

// Páginas oficiais por instituição (usadas quando a página específica não foi confirmada).
export const INSTITUICOES = {
  ibge: { nome: 'IBGE', url: 'https://www.ibge.gov.br/' },
  ibgeIpca: { nome: 'IBGE', url: 'https://www.ibge.gov.br/explica/inflacao.php' },
  ibgePnad: { nome: 'IBGE', url: 'https://www.ibge.gov.br/estatisticas/sociais/trabalho/9171-pesquisa-nacional-por-amostra-de-domicilios-continua-mensal.html' },
  bcb: { nome: 'Banco Central', url: 'https://www.bcb.gov.br/' },
  bcbFocus: { nome: 'Banco Central', url: 'https://www.bcb.gov.br/publicacoes/focus' },
  bcbFiscal: { nome: 'Banco Central', url: 'https://www.bcb.gov.br/estatisticas/estatisticasfiscais' },
  tesouro: { nome: 'Tesouro Nacional', url: 'https://www.tesourotransparente.gov.br/' },
  fao: { nome: 'FAO (SOFI)', url: 'https://www.fao.org/publications/home/fao-flagship-publications/the-state-of-food-security-and-nutrition-in-the-world' },
  inep: { nome: 'Inep', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/pisa' },
  ocde: { nome: 'OCDE (PISA)', url: 'https://www.oecd.org/en/about/programmes/pisa.html' },
  serasa: { nome: 'Serasa Experian', url: 'https://www.serasa.com.br/imprensa/' },
  caged: { nome: 'Ministério do Trabalho (Novo Caged)', url: 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged' },
  b3: { nome: 'B3', url: 'https://www.b3.com.br/' },
  mdic: { nome: 'MDIC', url: 'https://www.gov.br/mdic/pt-br' },
  bancoMundial: { nome: 'Banco Mundial', url: 'https://data.worldbank.org/' },
  fazenda: { nome: 'Ministério da Fazenda', url: 'https://www.gov.br/fazenda/pt-br' },
  tse: { nome: 'TSE (propostas de governo registradas)', url: 'https://divulgacandcontas.tse.jus.br/' },
  fmi: { nome: 'FMI (World Economic Outlook)', url: 'https://www.imf.org/en/Publications/WEO' },
  conab: { nome: 'Conab', url: 'https://www.gov.br/conab/pt-br' },
  reforma: { nome: 'Ministério da Fazenda (reforma tributária)', url: 'https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria' },
};

/** Fonte institucional: página geral da instituição + o que é o dado. */
export function inst(chave, oque) {
  const i = INSTITUICOES[chave];
  if (!i) throw new Error(`Instituição desconhecida: ${chave}`);
  return { nome: `${i.nome}, ${oque}`, url: i.url, tipo: 'institucional' };
}

// Páginas específicas localizadas na checagem de 06/10/2026.
export const URLS = {
  ipca2025: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45612-ipca-vai-a-0-33-em-dezembro-e-fecha-o-ano-em-4-26',
  pnad2025Anual: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45759-pnad-continua-em-2025-taxa-anual-de-desocupacao-foi-de-5-6-enquanto-taxa-de-subutilizacao-foi-14-5',
  pnadDez2025: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/45761-desocupacao-cai-para-5-1-em-dezembro-e-2025-tem-melhores-resultados-da-serie-historica',
  agBrasilJul2026: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/desemprego-cai-para-53-o-menor-para-o-trimestre-terminado-em-julho',
  cagedCincoMilhoes: 'https://www.gov.br/secom/pt-br/assuntos/noticias/2025/12/brasil-supera-marco-de-5-milhoes-de-empregos-com-carteira-assinada-desde-2023',
  salarioMinimo2026: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12797.htm',
  salarioMinimoSerie: 'https://www.ipardes.pr.gov.br/sites/ipardes/arquivos_restritos/files/documento/2026-01/sal%C3%A1rio_m%C3%ADnimo.pdf',
  pobreza2024: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/45344-8-6-milhoes-de-pessoas-sairam-da-pobreza-entre-2023-e-2024',
  fome2026Mds: 'https://www.gov.br/mds/pt-br/noticias/relatorio-da-onu-confirma-que-brasil-permanece-fora-do-mapa-da-fome-e-aponta-melhora-em-indicadores',
  sofi2026Consea: 'https://www.gov.br/secretariageral/pt-br/consea/relatorio-sofi-2026/relatorio-sofi-2026-o-estado-da-seguranca-alimentar-e-nutricional-no-mundo',
  desenrolaBalanco: 'https://static.poder360.com.br/2024/05/desenrola-brasil-balanco-21mai2024.pdf',
  serasaJul2026: 'https://www.serasa.com.br/imprensa/inadimplencia-segundo-semestre-serasa/',
  selicHistorico: 'https://www.bcb.gov.br/controleinflacao/historicotaxasjuros',
  cnnJuroReal: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/brasil-volta-a-posicao-de-maior-juro-real-do-mundo-veja-ranking/',
  rtnDez2025: 'https://www.tesourotransparente.gov.br/publicacoes/boletim-resultado-do-tesouro-nacional-rtn/2025/12',
  fazendaMeta2025: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/janeiro/governo-central-cumpre-com-folga-a-meta-fiscal-estabelecida-para-2025-aponta-relatorio-do-tesouro',
  ec126: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc126.htm',
  cepeaAgro2025: 'https://cepea.org.br/br/releases/pib-agro-cepea-pib-do-agronegocio-cresce-expressivos-12-em-2025.aspx',
  pisaInep: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/acoes-internacionais/pisa-brasil-esta-entre-os-paises-que-mais-avancaram-em-educacao-nos-ultimos-20-anos',
  pisaRelatorio: 'https://download.inep.gov.br/acoes_internacionais/pisa/resultados/2025/resultados_pisa_2025.pdf',
  pnad2023Anual: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39025-pnad-continua-em-2023-taxa-anual-de-desocupacao-foi-de-7-8-enquanto-de-taxa-de-subutilizacao-foi-de-18-0',
  pnad2024Anual: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/42530-pnad-continua-em-2024-taxa-anual-de-desocupacao-foi-de-6-6-enquanto-taxa-de-subutilizacao-foi-de-16-2',
  dolarMediaMensal: 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.3698/dados?formato=json&dataInicial=01/01/2018',
  pisaRankingOpovo: 'https://mais.opovo.com.br/jornal/cidades/2026/09/09/matematica-e-o-indice-mais-critico-do-brasil-no-pisa-2025-na-71-colocacao-global.html',
  pnadJul2026: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/47849-pnad-continua-desocupacao-e-de-5-3-e-subutilizacao-e-de-13-0-no-trimestre-encerrado-em-julho',
  pnad2022Anual: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/36336-pnad-continua-em-2022-taxa-media-anual-de-desocupacao-foi-de-9-3-enquanto-de-taxa-de-subutilizacao-foi-de-20-8',
  laresInseguranca: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/44728-mais-de-dois-milhoes-de-lares-saem-da-inseguranca-alimentar-em-2024',
  serasaJan2023: 'https://agenciabrasil.ebc.com.br/economia/noticia/2023-02/mais-de-70-milhoes-de-brasileiros-estao-inadimplentes-aponta-serasa',
  recuperacaoJudicial2025: 'https://www.infomoney.com.br/business/serasa-experian-recuperacao-judicial-cresce-em-2025-e-atinge-maior-no-desde-2012/',
  paraguaiPoder360: 'https://www.poder360.com.br/poder-economia/mais-de-230-empresas-brasileiras-ja-produzem-no-paraguai/',
  dividaJul2026: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/divida-bruta-do-governo-sobe-para-825-do-pib-em-julho/',
  fed22anos: 'https://www.cnnbrasil.com.br/economia/fed-eua-decisao-juros-26-07-2023/',
  enchentesRS: 'https://agenciabrasil.ebc.com.br/economia/noticia/2024-11/rs-organismos-internacionais-calculam-danos-de-r-889-bi-com-chuvas',
  tarifaco: 'https://agenciabrasil.ebc.com.br/economia/noticia/2025-08/tarifaco-sobre-parte-das-exportacoes-brasileiras-entra-em-vigor-hoje',
  ec132: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm',
};

// Lista exibida no rodapé.
export const FONTES_CONSULTADAS = [
  'IBGE', 'Banco Central', 'Tesouro Nacional', 'FAO', 'Inep/OCDE', 'Serasa', 'Caged/MTE', 'B3',
];
