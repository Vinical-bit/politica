# Checagem pendente

O site agora tem um único selo, **Verificado**. Todo número publicado precisa dele. Os números abaixo ainda **não foram conferidos** e aparecem no site sem selo, marcados internamente como `pendente`. O comando `node scripts/validar-dados.mjs --listas` mostra a lista atualizada.

**Não publique enquanto houver pendentes.** Para cada um, há três saídas:
1. **Achou na fonte:** troque `selo: 'pendente'` por `selo: 'verificado'`, coloque a fonte com `esp('Nome', 'URL')` e apague o campo `pendencia`.
2. **Achou um valor diferente:** corrija o `valor` (e o `numero`, se for gráfico) e faça o passo 1.
3. **Não achou:** apague o dado do arquivo da parada.

## Números e contas que precisam de checagem (11)

| Parada | Dado | No site | O que falta checar | Onde checar |
| --- | --- | --- | --- | --- |
| 2 | IPCA do Lula 3 | 19,73% | É projeção. Com 2026 em 4,27%, a conta dá ~19,2%; 19,73% pede 2026 ≈ 4,7%. Descobrir qual projeção o vídeo usou. | [IBGE IPCA](https://www.ibge.gov.br/explica/inflacao.php), [Focus](https://www.bcb.gov.br/publicacoes/focus) |
| 3 | Vagas com carteira | 5,37 milhões | O total exato não foi achado. O Caged dava 4,94 mi até out/2025 e "mais de 5 mi" até mar/2026. Achar o saldo acumulado até jun/2026. | [Novo Caged](https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged) |
| 3 | Salário mínimo, poder de compra | +15% | Depende da conta. De R$ 1.212 a R$ 1.621 é +33,7% nominal. Descontando o INPC de 2023–2025 dá ~18%; incluindo 2022, ~12%; partindo de R$ 1.302, ~10%. Nenhuma base óbvia dá exatamente 15%. | [IBGE INPC](https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9258-indice-nacional-de-precos-ao-consumidor.html) |
| 6 | Crescimento dos negativados | 27% | 27% bate com 66 mi (número do plano, 2022) → 83,9 mi. Desde jan/2023 (70,1 mi) a alta é de ~20%. Decidir a base. | [Agência Brasil](https://agenciabrasil.ebc.com.br/economia/noticia/2023-02/mais-de-70-milhoes-de-brasileiros-estao-inadimplentes-aponta-serasa) |
| 8 | IPOs: 1 × 79 | 1 × 79 | O "79" não foi achado; a B3 fala em ~71 em 2020–21. | [B3](https://www.b3.com.br/) |
| 8 | IPOs em 2020 | 28 | Contagem do vídeo de referência; não conferida na B3. | [B3](https://www.b3.com.br/) |
| 8 | IPOs em 2021 | 46 | Idem. | [B3](https://www.b3.com.br/) |
| 11 | Superávit comercial | US$ 241 bi × US$ 222 bi | Somar os saldos anuais do MDIC (2023 foi US$ 98,8 bi). | [MDIC](https://www.gov.br/mdic/pt-br/assuntos/noticias/2024/janeiro/comercio-exterior-brasileiro-bate-recordes-e-fecha-2023-com-saldo-de-us-98-8-bi) |
| 11 | Petróleo/Ormuz (FMI) | +0,2 ponto no PIB de 2026 | É projeção do FMI, não efeito medido. Confirmar no relatório de abril/2026. | [FMI WEO](https://www.imf.org/en/Publications/WEO) |
| 13 | Alíquota do IVA | Cerca de 28% | É estimativa; a alíquota final ainda será fixada pelo Senado. | [Fazenda](https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria) |
| 13 | Comércio e serviços | 71% dos empregos, 67,4% do PIB | É comércio + serviços juntos (MDIC). A fala diz "serviços, mais de 60%". Achar a página do MDIC. | [MDIC](https://www.gov.br/mdic/pt-br) |

## Números que vieram só do vídeo de referência (15)

| Parada | Dado | No site | Onde procurar |
| --- | --- | --- | --- |
| 1 | Inflação em 12 meses (placar) | 5,79% → 4,22% | O 5,79% confere. O 4,22% não bate com jul/2026 (4,44%); ver IPCA de ago ou set/2026 no IBGE. |
| 4 | Subalimentação na narração | 2,4% | A FAO costuma publicar "<2,5%", sem valor exato. Ver o relatório SOFI 2025 / FAOSTAT. |
| 4 | Primeira saída do mapa | 2014 (critério de 5%) | Matéria do Consea de 17/09/2014 exibida no vídeo (gov.br/secretariageral). |
| 8 | IPOs em 2019 | 5 | B3 |
| 8 | IPOs em 2024 | 0 | B3 / InfoMoney ("seca de IPOs") |
| 8 | IPOs em 2025 | 0 | B3 / InfoMoney |
| 8 | IPOs em 2026 (até 31/08) | 1 | B3 |
| 10 | Dívida bruta 2020 | 86,9% | Banco Central, estatísticas fiscais (série revisada) |
| 10 | Dívida bruta 2021 | 77,3% | Idem |
| 10 | Dívida bruta 2022 | 71,6% | Idem. A divulgação original do BC era 73,5% (Poder360); o número mudou com a revisão do PIB. |
| 11 | PIB per capita 2022 → 2025 | Brasil +7,9% × renda média +11,6% | Banco Mundial (data.worldbank.org), indicador "GDP per capita (constant US$)" |
| 11 | Projeção 2026 (G1) | Emergentes do G20 ≈ 4% × Brasil ≈ 2% | Matéria do G1 exibida no vídeo; ou FMI WEO |
| 11 | Commodities | Três anos de queda | Índice de commodities do BC (IC-Br) ou Banco Mundial (Pink Sheet) |
| 12 | Extrema pobreza sem Bolsa Família e BPC | 10% (contra 3,5%) | IBGE, Síntese de Indicadores Sociais 2025 (simulação sem benefícios) |
| 13 | Indústria de transformação | ~10,8% do PIB | IBGE, Contas Nacionais / CNI |

---

## Resolvido nesta rodada

- **Dólar (07/10/2026, ramificação cartoon):** trocado por médias anuais da série 3698 do Banco Central (dólar de venda, média mensal): R$ 5,16 em 2022 e R$ 5,15 em 2026 (jan. a ago.). Entrou também o gráfico 2018–2026. A foto de um dia (R$ 5,21 → R$ 5,15) saiu.

- **Renda de R$ 3.032 (2022) → R$ 3.560 (2025), +17,4%: verificado.** É a renda de 2022 a preços de 2025 (altas reais do IBGE: 2023 +7,2%, 2024 +3,7%, 2025 +5,7%).
- **16 números que conferiam com ressalva** viraram "Verificado"; o contexto foi para o "Saiba mais".
- **Subutilização de 13,0%:** rótulo corrigido para "trimestre até jul/2026", que é o recorte do IBGE.
- **PISA:** o card agora mostra a posição no ranking de nota (71º em matemática, 52º em leitura, entre 89 países), com a explicação das duas listas.
- **Removidos por serem comentário sobre o vídeo, não dado:** "Leitura do gráfico do vídeo" (parada 5), "Endividados ou negativados?" (parada 6, o conceito foi para o Saiba mais da Serasa) e "Tese do vídeo" (parada 14).
