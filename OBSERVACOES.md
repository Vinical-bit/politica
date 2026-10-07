# Observações da checagem

Registro do que foi encontrado durante a construção do site (06/10/2026). Regra seguida: **nenhum número do site foi trocado por causa de pesquisa**. Divergências ficam aqui para o autor decidir.

## 1. Divergências e pontos para o autor conferir

### Números

1. **IPCA acumulado do Lula 3 (projeção de 19,73%).** Compondo 2023 (4,62%), 2024 (4,83%), 2025 (4,26%) e 2026 em 4,27%, o resultado é **cerca de 19,2%**, não 19,73%. Para chegar a 19,73%, o IPCA de 2026 teria de ser cerca de 4,7%. Com o Focus de setembro (cerca de 4,9%), o acumulado fica perto de 19,95%. O site mantém 19,73% e a frase "feita com 2026 em 4,27%"; vale revisar a origem.
2. **IPCA do mandato Bolsonaro.** Compondo os anuais (4,31; 4,52; 10,06; 5,79), dá 26,94%. O site usa 26,93% (diferença de arredondamento).
3. **Resultado primário de 2022.** O gráfico do próprio vídeo ("Receita menos despesa do Governo Central, 2022–2025") mostra **+R$ 46,4 bi** para 2022; o site usa +R$ 54,1 bi (Tesouro), que bate com a manchete da CNN exibida no vídeo ("superávit de R$ 54 bi"). Provavelmente o gráfico do vídeo usa outro recorte (ex.: valores de dezembro ou deflacionados). Os outros três anos do gráfico batem.
4. **Data da matéria da CNN sobre juro real.** O prompt diz que o print mostra 16/08/2026. Ampliando o print, a data visível é **16/09/26 às 18:33** (igual à do relatório MoneYou/Lev). Ou seja, não parece haver divergência de edição. Confira no vídeo.
5. **Dados do vídeo conferidos em 2ª rodada (06/10/2026).** 21 números que estavam só com o vídeo como fonte foram achados em IBGE, Agência Brasil, CNN, InfoMoney, Poder360 e Planalto e ganharam selo e link: desemprego de dez/2025 e do trimestre até jul/2026, população ocupada (103,3 mi), carteira no setor privado (39,4 mi) e informalidade (37,5%) do trimestre até jul/2026, subutilização de 2022 (20,8%), lares fora da insegurança alimentar, IPCA do mandato Dilma, recuperações judiciais (2.466), Paraguai (40 e 26), dívida bruta de jul/2026 (82,5%), juros dos EUA (22 anos), enchentes no RS (R$ 88,9 bi), tarifa de 50%, IVA dual (EC 132), placar do desemprego e média de 1,62% do ranking de juros.
6. **Achados dessa rodada que pedem ressalva:**
   - *Crescimento de 27% dos negativados:* 27% é a alta contra os 66 milhões do plano (2022). Contra jan/2023 (70,1 milhões, Serasa via Agência Brasil), a alta até 83,9 milhões é de cerca de 20%. Marcado como "Confere com ressalva".
   - *Subutilização de 13%:* o IBGE dá 13,0% no trimestre até julho/2026; no 2º trimestre (abr–jun) foi 12,9%. O gráfico do vídeo rotula "2º tri".
   - *1,62%:* a matéria da CNN traz esse número como média dos 40 países analisados, não das 40 maiores economias, como diz a fala.
7. **Dívida bruta de 2022.** O vídeo usa 71,6% (tabela BACEN/TCU). Na divulgação original do BC, em jan/2023, o número era 73,5% (Poder360); o valor mudou depois com a revisão do PIB. Está como pendente.
9. **PIB per capita.** Um print mostra o PIB per capita em reais de 2025 (R$ 55,3 mil → R$ 59,7 mil, +7,9%; fonte IBGE e Banco Mundial) e outro em US$ constantes (9.032 → 9.748). O site usa só a versão em US$, como no prompt.
10. **Desenrola.** Não localizei a URL da matéria Reuters/UOL. O link usado é o balanço final do Ministério da Fazenda (PDF publicado pelo Poder360), que traz os R$ 53,07 bi e 15,1 milhões de pessoas.
11. **Comparação "mesmo ponto do mandato" (Folha).** Não localizei a URL da Folha; o link é institucional (IBGE). Existem reproduções do texto em outros sites (ex.: Bahia Notícias, "Lula 3 acumula menor inflação às vésperas das eleições no Plano Real").
12. **Decreto do salário mínimo de 2026.** O link do Planalto (`d12797`) veio da busca "decreto salário mínimo 2026 R$ 1.621"; confira se é o decreto certo. A série completa usa uma tabela do Ipardes (governo do Paraná) que compila os decretos federais.
13. **Histórico da Selic.** A página `bcb.gov.br/controleinflacao/historicotaxasjuros` é a página oficial de histórico do Copom, mas não pôde ser aberta nesta sessão (bloqueio de permissão). Confira.

### Achados na transcrição

- Números falados de forma arredondada ("mais de 50 bilhões", "220 bilhões", "7,92%") não foram tratados como divergência: a referência é o número exibido na tela.
- **Desenrola:** a transcrição automática traz "R3 bilhões", mas é falha da legenda automática (o mesmo acontece em "R34 bilhões" para R$ 334 bi). O site não atribui esse erro ao vídeo.
- **"7º entre 89 países"** continua como "Não confere": a fala confirma (15:08).
- **Renda de R$ 3.032 em 2022: o vídeo está certo.** A checagem anterior (e o prompt 1) tratavam esse número como o 4º trimestre de 2023. Na verdade é a renda média anual de 2022 a preços de 2025: encadeando as altas reais anuais do IBGE (2023 +7,2%; 2024 +3,7%; 2025 +5,7%), 3.560 ÷ 1,175 ≈ R$ 3.030. O ganho real de 17,4% confere. Corrigido no site (paradas 1 e 3).

### Material de referência

- A transcrição com tempos está em `referencia/transcricao.txt` (27 KB). Ela vai de 0:00 a **22:30**, e o vídeo tem 23:51. Ficaram sem minuto só os 3 dados que aparecem depois de 22:30 (o placar "fim de 2022 × atual" e a tese da régua). Todos os outros links "Ver no vídeo" e o link do bloco "O que o vídeo afirma" de cada parada (campo `tVideo`) apontam para o minuto da fala.
- A transcrição confirma o trecho de propaganda entre 13:23 e 14:25 (descartado).
- Os prints estão direto em `referencia/` (não em `referencia/prints/`). Um deles (`Captura de tela 2026-10-06 152100.png`) é uma imagem vazia de 1×6 pixels. Os outros 62 foram identificados pelo catálogo do prompt.

### Como as URLs foram obtidas

- **Abertas e conferidas nesta sessão:** IBGE PNAD 2025 anual (release 45759), IBGE pobreza 2022–2024 (notícia 45344), lista de matérias da Agência Brasil sobre PNAD.
- **Localizadas por busca, com título que confirma o dado (não abertas):** IPCA 2025 (IBGE), PNAD dez/2025 (IBGE), Agência Brasil jul/2026, Secom/Caged 5 milhões, Planalto (EC 126 e decreto do mínimo), MDS e Consea (SOFI 2026), Serasa (83,9 milhões), CNN (juro real), Tesouro (RTN dez/2025), Fazenda (meta 2025), Cepea (PIB do agro 2025), Inep (PISA 2025, notícia e PDF), Ipardes (série do mínimo), balanço do Desenrola.

## 2. Dados que ficaram só com link institucional ("Fonte (página geral)")

Para completar, troque `inst(...)` por `esp('Nome', 'URL específica')` no arquivo da parada.

- p01-item1 — Item 1 do plano de governo (TSE (propostas de governo registradas), plano de governo de 2022 (item 1))
- p02-mesmo-ponto — No mesmo ponto do mandato (jan. do 1º ano a ago. do 4º) (IBGE, IPCA, via Folha de S.Paulo)
- p02-ipca-2022 — IPCA em 2022 (IBGE, IPCA anual)
- p02-ipca-2023 — IPCA em 2023 (IBGE, IPCA anual)
- p02-ipca-2024 — IPCA em 2024 (IBGE, IPCA anual)
- p02-mandato-fhc1 — FHC 1 (1995–1998) (IBGE, série histórica do IPCA)
- p02-mandato-fhc2 — FHC 2 (1999–2002) (IBGE, série histórica do IPCA)
- p02-mandato-lula1 — Lula 1 (2003–2006) (IBGE, série histórica do IPCA)
- p02-mandato-lula2 — Lula 2 (2007–2010) (IBGE, série histórica do IPCA)
- p02-mandato-dilma1 — Dilma 1 (2011–2014) (IBGE, série histórica do IPCA)
- p02-mandato-bolsonaro — Bolsonaro (2019–2022) (IBGE, série histórica do IPCA)
- p02-mandato-lula3 — Lula 3 (2023–2026) (IBGE, série histórica do IPCA)
- p03-minimo-real — Poder de compra do salário mínimo (IBGE, INPC (inflação usada na conta))
- p03-des-2020 — Desemprego no 4º tri/2020 (IBGE, PNAD Contínua)
- p03-des-2021 — Desemprego no 4º tri/2021 (IBGE, PNAD Contínua)
- p03-des-2022 — Desemprego no 4º tri/2022 (IBGE, PNAD Contínua)
- p03-des-2023 — Desemprego no 4º tri/2023 (IBGE, PNAD Contínua)
- p04-corte — Linha de corte do Mapa da Fome (FAO (SOFI), relatório SOFI (metodologia))
- p04-2020-2022 — Subalimentação em 2020–2022 (FAO (SOFI), relatório SOFI)
- p05-pico — Pico de desalentados (IBGE, PNAD Contínua)
- p06-item60 — Item 60 do plano de governo (TSE (propostas de governo registradas), plano de governo de 2022 (item 60))
- p06-2016 — Negativados em 2016 (Serasa Experian, Mapa da Inadimplência)
- p07-plano — Itens 62 e 64 do plano de governo (TSE (propostas de governo registradas), plano de governo de 2022 (itens 62 e 64))
- p08-1x79 — IPOs: Lula 3 × mandato anterior (B3, ofertas públicas iniciais (IPOs))
- p08-ipo-2022 — IPOs em 2022 (B3, ofertas públicas iniciais (IPOs))
- p08-ipo-2023 — IPOs em 2023 (B3, ofertas públicas iniciais (IPOs))
- p10-carga — Carga tributária bruta (Tesouro Nacional, estimativa da carga tributária bruta)
- p11-focus — Focus de setembro/2026: PIB do Brasil em 2026 (Banco Central, boletim Focus)
- p11-superavit — Superávit comercial acumulado (MDIC) (MDIC, balança comercial)
- p11-dolar — Dólar (Banco Central, cotações do dólar (PTAX))
- p11-ch-ormuz — Petróleo e Estreito de Ormuz (FMI) (FMI (World Economic Outlook), World Economic Outlook, abril de 2026)
- p13-aliquota — Alíquota de referência estimada (Ministério da Fazenda (reforma tributária), estimativas da alíquota de referência)
- p13-comercio-servicos — Peso de comércio e serviços (MDIC, 2023) (MDIC, comércio e serviços)

## 3. Números pendentes

A lista atual está em `CHECAGEM.md`.

## 4. Estilização (prompt 2): decisões que fugiram do pedido

1. **Selos.** Os dados só usam `verificado` e `pendente` (decisão anterior: selo único). O CSS tem as quatro formas da opção A (cheio, vazado, tracejado, cinza); o "Verificado" usa a forma cheia do "Confere" (fundo tinta, ícone de check). Pendentes não mostram selo.
2. **Tokens a mais.** Além da lista do prompt: `--borda-controle` (botões, opções, campos), `--grafico` e `--grafico-ativo` (barras e linhas), `--grade`, `--superficie-2` (painéis dentro de cartões), `--selo-cinza-fundo` / `--selo-cinza-texto`, `--foco`, `--veu`, sombras e tempos.
3. **Ajustes de contraste.** `--texto-suave` do tema claro foi de #6B665C para **#645F55**: sobre o vidro com uma curva de nível atrás, o original dava 4,44:1. `--borda` (#D8D2C6 / #34373B) ficou como borda **decorativa** (cerca de 1,4:1, só separa cartões); toda borda que identifica um controle usa `--borda-controle` (3,4:1 ou mais). Curvas e grade também são decorativas e aparecem como "info" no `scripts/contraste.mjs`.
4. **Ícones.** Desenhados numa grade de 24 e escalados 2× dentro do `viewBox="0 0 48 48"`, com `vector-effect: non-scaling-stroke`: o traço fica em 1,5 px em qualquer tamanho.
5. **Ilustrações grandes.** Seguem o estilo B na mesma escala dos ícones; não foram redesenhadas com mais detalhe.
6. **SaibaMais** anima opacidade e deslocamento, não altura (a regra da seção 8 só permite transform, opacity e stroke-dashoffset).
7. **Moedas do MapaTarifa** percorrem o caminho duas vezes e param (WCAG 2.2.2: nada se move indefinidamente).
8. **Fonte dos números.** Mantida a Bricolage Grotesque 500: nos números grandes (Selic, dívida, desemprego) ficou legível nos dois temas, então não foi trocada pela Atkinson 700. Só o peso 500 da Bricolage é carregado.
9. **Títulos sobre o fundo** ganharam uma sombra de texto na cor do fundo, para as curvas de nível não cruzarem as letras.
10. **Painel de paradas** usa vidro mais denso (88% de superfície): a lista é texto corrido e não pode depender do que está atrás.
11. **Desfoque num `::before`.** O `backdrop-filter` fica num pseudo-elemento e não na própria moldura. No elemento, ele cria um bloco de contenção para filhos `position: fixed`, e o painel de paradas (que mora dentro da barra) ficava preso nos 60 px da barra.
12. **theme-color.** As duas metas seguem `prefers-color-scheme`; a troca manual de tema não atualiza a cor da barra do navegador.
13. **Rótulo de valor negativo** nas barras (ex.: −R$ 228,5 bi) fica acima da linha do zero, e não abaixo da barra, para não encostar nos anos.
14. **Links das trilhas** na barra ganharam `aria-label`: no celular o nome da trilha fica oculto e o link ficava sem nome acessível.
15. **Abrir com #parada:** a rolagem inicial se repete quando as fontes terminam de carregar (`document.fonts.ready`); antes, a troca de fonte empurrava a parada ~110 px para cima da barra.

## 5. Verificações do prompt 2 (07/10/2026)

- **Contraste** (`node scripts/contraste.mjs`): todos os pares passam em AA nos dois temas. Menores razões: texto suave sobre vidro com curva atrás, 4,94:1 (claro); borda de controle sobre o fundo, 3,38:1 (claro). Uma varredura no navegador de todo texto visível (com os "Saiba mais" abertos) também não achou nada abaixo de AA em nenhum tema.
- **Daltonismo:** simulação de deuteranopia e protanopia (matrizes de Machado et al., fora do site) dos cartões de debate e da legenda. Vermelho e verde viram tons parecidos, como esperado; a leitura continua pelo rótulo ("Defesa"/"Crítica") e pelo ícone (escudo/lupa). Os selos não usam cor.
- **Teclado:** todo controle HTML recebe anel de foco de 2 px; elementos dos gráficos e ilustrações mostram um anel desenhado no SVG. A ordem segue a leitura. Esc fecha o painel e devolve o foco ao botão "Paradas". O botão de tema funciona com Enter e atualiza `aria-pressed`.
- **Celular (375 px):** nenhuma rolagem horizontal nas 14 paradas, nos dois temas, com e sem desfoque. "Reduzir transparência" (emulado) deixa as molduras opacas.
- **Lighthouse (celular, `npm run preview`):** Desempenho 95, Acessibilidade 100, Boas práticas 100, SEO 100 (FCP 1,8–1,9 s; LCP 2,0 s; TBT cerca de 200 ms; CLS 0,034).
- **Reduzir movimento:** nenhuma animação rodando e nenhuma seção escondida.
- **Requisições externas:** nenhuma durante a navegação.
