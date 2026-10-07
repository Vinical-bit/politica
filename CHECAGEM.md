# Checagem pendente

O site agora tem um único selo, **Verificado**. Todo número publicado precisa dele. Os números abaixo ainda **não foram conferidos** e aparecem no site sem selo, marcados internamente como `pendente`. O comando `node scripts/validar-dados.mjs --listas` mostra a lista atualizada.

**Não publique enquanto houver pendentes.** Para cada um, há três saídas:
1. **Achou na fonte:** troque `selo: 'pendente'` por `selo: 'verificado'`, coloque a fonte com `esp('Nome', 'URL')` e apague o campo `pendencia`.
2. **Achou um valor diferente:** corrija o `valor` (e o `numero`, se for gráfico) e faça o passo 1.
3. **Não achou:** apague o dado do arquivo da parada.

## Pendentes (3)

| Parada | Dado | Valor no site | O que falta |
|---|---|---|---|
| 8 | IPOs: Lula 3 × mandato anterior | 1 × 79 | A contagem está certa (B3: 5 + 28 + 46 + 0 = 79; Lula 3: 1, a Compass em mai/2026). Falta decidir o enquadramento: o boom de 2020–21 aconteceu com a Selic na mínima (2%), e a seca começou no fim de 2021, antes do Lula 3. |
| 11 | Superávit comercial acumulado | US$ 241 bi × US$ 222 bi | Valores revisados do MDIC: 2019 ≈ 48,0 · 2020 ≈ 50,4 · 2021 61,4 · 2022 ≈ 61,5 (soma ≈ 221) · 2023 98,8 · 2024 74,6 · 2025 68,3 (soma ≈ 241). Compara 3 anos com 4; por ano, ≈ US$ 80 bi × ≈ US$ 55 bi. Fonte para conferir: [Comex Stat](https://comexstat.mdic.gov.br/pt/geral) e [balança comercial do MDIC](https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/estatisticas/balanca-comercial-brasileira-acumulado-do-ano). |
| 13 | Comércio e serviços juntos | 71% dos empregos formais e 67,4% do PIB | Não achei a fonte primária. A provável é a [Agência Gov sobre a parceria MDIC/MEMP/CNC](https://agenciagov.ebc.com.br/noticias/202406/mdic-memp-e-cnc-fecham-parceria-para-impulsionar-o-setor-de-comercio-e-servicos) (bloqueada para leitura automática). |

## Resolvido em 07/10/2026 (23 números)

- **Inflação em 12 meses:** 5,79% (dez/2022) → 4,22% (ago/2026), série 13522 do BC.
- **IPCA do Lula 3:** trocado por 20,1% (projeção), com o Focus de 02/10/2026 (5,01% para 2026).
- **Vagas com carteira:** cerca de 5,6 milhões de jan/2023 a ago/2026 (soma do Caged ano a ano).
- **Salário mínimo:** +10% acima do INPC desde jan/2023 (R$ 1.302 → R$ 1.621), conta nossa com a série 188 do BC.
- **Subalimentação:** 2,4% em 2022–2024 vem do SOFI **2025**; o SOFI 2026 (2023–2025) só publica "< 2,5%".
- **Saída do mapa em 2014:** critério de menos de 5% (Instituto Fome Zero).
- **Negativados +27%:** base 2022 (66 milhões, número do plano).
- **IPOs por ano:** 5, 28, 46, 0, 0, 0, 0 e 1 (contagem da B3, que inclui BDRs).
- **Dívida bruta:** 86,9% (2020), 77,3% (2021) e **71,7%** (2022; o site dizia 71,6%), série 13762 do BC.
- **PIB per capita:** confere; o grupo de comparação é "países de renda média" (não "renda média-alta", que cresceu 12,5%).
- **Projeção de 2026:** o artigo do G1 não foi achado; trocado por FMI de abril (emergentes e em desenvolvimento 3,9% × Brasil 1,9%; em julho o Brasil subiu para 2,4%).
- **Commodities:** caíram três anos seguidos em dólar (Banco Mundial). Em reais (IC-Br), não.
- **Guerra e petróleo (FMI):** o +0,2 ponto está no texto do FMI, que fala da guerra e de energia, não de Ormuz.
- **Extrema pobreza sem programas sociais:** 10% contra 3,5% (IBGE, SIS 2025). A simulação tira todos os programas sociais, não só Bolsa Família e BPC.
- **Alíquota de cerca de 28%:** Fazenda (jan/2025); o Comitê Gestor do IBS usa 27,91%.
- **Indústria de transformação:** 10,8% do PIB em 2023, a preços constantes de 2019 (Fiesp/IBGE).

## Para ampliar (não é pendente: não aparece no site)

- **Média da OCDE no PISA, edições intermediárias (2000–2022).** O gráfico de referência ("média dos mesmos 23 países da OCDE") mostra a queda edição a edição, por exemplo matemática 496 em 2018 → 480 em 2022. Esses pontos não foram achados numa fonte primária. Por isso o site mostra só 2006 e 2025, que batem com o Inep. Caso apareça a tabela da OCDE/Inep com a série dos 23 países, dá para completar a linha.
- **Matemática do Brasil em 2000 (334).** Em 2000 matemática não era a área principal, e a série comparável começa em 2003. Ficou de fora.

## Resolvido nesta rodada

- **Série do PISA do Brasil (07/10/2026, ramificação cartoon):** leitura 2000–2025, matemática 2003–2025 e ciências 2006–2025, conferidas na Agência Brasil (2000–2015), no Poder360 (2015 e 2018), no Quero Bolsa (2022 e 2025) e no Inep (2025). A média da OCDE de 2006 e 2025 sai das distâncias informadas pelo Inep (102/131/113 → 58/92/77 pontos).

- **Dólar (07/10/2026, ramificação cartoon):** trocado por médias anuais da série 3698 do Banco Central (dólar de venda, média mensal): R$ 5,16 em 2022 e R$ 5,15 em 2026 (jan. a ago.). Entrou também o gráfico 2018–2026. A foto de um dia (R$ 5,21 → R$ 5,15) saiu.

- **Renda de R$ 3.032 (2022) → R$ 3.560 (2025), +17,4%: verificado.** É a renda de 2022 a preços de 2025 (altas reais do IBGE: 2023 +7,2%, 2024 +3,7%, 2025 +5,7%).
- **16 números que conferiam com ressalva** viraram "Verificado"; o contexto foi para o "Saiba mais".
- **Subutilização de 13,0%:** rótulo corrigido para "trimestre até jul/2026", que é o recorte do IBGE.
- **PISA:** o card agora mostra a posição no ranking de nota (71º em matemática, 52º em leitura, entre 89 países), com a explicação das duas listas.
- **Removidos por serem comentário sobre o vídeo, não dado:** "Leitura do gráfico do vídeo" (parada 5), "Endividados ou negativados?" (parada 6, o conceito foi para o Saiba mais da Serasa) e "Tese do vídeo" (parada 14).
