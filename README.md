# Política

Site didático sobre o balanço econômico do 3º governo Lula (2023–2026), organizado por tema. A pesquisa de base veio do vídeo ["O que Lula prometeu no plano de governo?"](https://youtu.be/j_jRpvDfIUU).

Em cada uma das 14 **paradas**: uma pergunta, o melhor argumento da Defesa e da Crítica e os números com selo **Verificado** e **link da fonte**. O site **não dá veredito**.

> A pesquisa partiu do vídeo citado acima; cada número foi conferido na fonte original, com link.

## Rodar localmente

Requer Node.js 20.19 ou mais novo.

```bash
npm install
npm run dev        # abre em http://localhost:5173/politica/
```

## Gerar o build

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve o build em http://localhost:4173/politica/
```

## Publicar no GitHub Pages

1. Crie um repositório chamado `politica` no GitHub e envie o código para a branch `main`.
2. No repositório, vá em **Settings → Pages → Build and deployment** e escolha **Source: GitHub Actions**.
3. Cada push na `main` roda `.github/workflows/deploy.yml`: instala, gera o build e publica `dist/`.
4. O site fica em `https://vinical-bit.github.io/politica/`.

Se o repositório tiver outro nome, troque `base: '/politica/'` em `vite.config.js`. O endereço do repositório exibido no rodapé fica em `REPOSITORIO_URL`, no arquivo `src/data/fontes.js`.

## Como atualizar um número

Todo número vive em **um único arquivo**: `src/data/paradas/pNN-nome.js`. Nenhum componente tem número digitado.

Cada dado segue este formato:

```js
{
  id: 'p02-ipca-2025',
  rotulo: 'IPCA em 2025',
  valor: '4,26%',
  selo: 'verificado',         // 'verificado' | 'pendente' (pendente não aparece e não pode ser publicado)
  ressalva: null,             // não usar: contexto vai em saibaMais
  saibaMais: null,            // texto, ou { paragrafos: [...], tabela: { cabecalho, linhas } }
  fonte: esp('IBGE, IPCA de dezembro de 2025', URLS.ipca2025),
}
```

- Em gráficos, o dado também tem `numero` (o valor numérico usado para desenhar) e `curto` (rótulo do eixo).
- As fontes são montadas com os atalhos de `src/data/fontes.js`:
  - `esp(nome, url)`: página específica do dado;
  - `inst('ibge', 'o que é')`: página geral da instituição (aparece como "Fonte (página geral)");
  - `video(segundos)`: o trecho do vídeo (aparece como "Ver no vídeo (mm:ss)").

Depois de editar, rode a conferência automática:

```bash
node scripts/validar-dados.mjs           # erro se algum dado ficar sem selo, ressalva ou fonte
node scripts/validar-dados.mjs --listas  # lista os links institucionais e os vídeos sem minuto
node scripts/contraste.mjs               # contraste WCAG AA dos dois temas
```

## Como funcionam os selos

Há um único selo público: **✓ Verificado**, para número conferido na fonte original, com link. Contexto e explicações ficam no "Saiba mais".

Números ainda não conferidos usam `selo: 'pendente'` nos arquivos de dados: não mostram selo e entram na lista do `node scripts/validar-dados.mjs --listas`. O site não deve ser publicado com pendentes; veja `CHECAGEM.md`.

Os selos se distinguem por forma e ícone; Defesa e Crítica, por cor, ícone e rótulo. A cor indica o argumento (Defesa do governo em vermelho, Crítica ao governo em verde), não o partido de quem fala, e nunca é o único indicador: Defesa tem escudo e rótulo, Crítica tem lupa e rótulo.

## Visual

- **Temas:** pedra quente (claro, padrão) e escuro. Na primeira visita o site segue o sistema; a escolha pelo botão de sol/lua na barra fica no `localStorage` (`politica:tema`). Um script curto no `<head>` aplica o tema antes do primeiro desenho.
- **Tokens:** toda cor, fonte, raio, sombra e tempo está em `src/styles/tokens.css`. Nenhum componente tem valor visual digitado.
- **Vidro** só nas molduras (barra, painel de paradas, abertura). Dados ficam sempre em superfície opaca. Sem suporte a `backdrop-filter`, ou com "reduzir transparência" ligado, as molduras ficam opacas.
- **Fundo:** curvas de nível estáticas em `src/assets/curvas.svg`, geradas uma vez por `node scripts/gerar-curvas.mjs [semente]`.
- **Movimento:** 150–250 ms nas transições; só as séries no tempo se desenham (cerca de 800 ms, uma vez). Nada se move com "reduzir movimento" ligado, e nenhum número é animado.
- **Contraste:** `node scripts/contraste.mjs` mede os pares de cor dos dois temas e falha se algum ficar abaixo de WCAG AA.

## Estrutura

```
src/
├─ data/          # todo o conteúdo: trilhas, paradas, selos e fontes
├─ components/
│  ├─ layout/     # Navbar, MenuParadas, BarraProgresso, Abertura, Rodape
│  ├─ parada/     # Parada, CartoesDebate, QuadroMede, Quiz, Pergunta
│  ├─ dados/      # Selo, DadoComFonte, LinkFonte, SaibaMais
│  ├─ graficos/   # BarrasClicaveis, LinhaPontosChave, CurtoLongoPrazo, MapaTarifa, ReguaAB
│  └─ ilustracoes/# ícones e ilustração clicável (SVG à mão)
├─ assets/        # curvas.svg (fundo, gerado por scripts/gerar-curvas.mjs)
├─ hooks/         # useProgresso, useSecaoAtiva, useLocalStorage, usePrefersReducedMotion, useTema
└─ styles/        # tokens.css (todas as cores, raios, fontes e tempos), base, layout, componentes
```

- Dependências: React, Vite e as fontes Bricolage Grotesque e Atkinson Hyperlegible via `@fontsource` (empacotadas no build, sem Google Fonts). Sem bibliotecas de UI, animação ou ícones; gráficos e ilustrações são SVG escritos à mão.
- O progresso (paradas visitadas, partes exploradas, respostas) fica no `localStorage` do navegador. O site funciona sem ele.
- Sem requisições externas em tempo de execução: nada de CDN, fontes remotas ou analytics.

## Material de referência

A pasta `referencia/` (transcrição e prints do vídeo) **não vai para o GitHub**: está no `.gitignore`. São materiais de terceiros e mostram pessoas reais. Os prints serviram só de referência; todos os gráficos foram recriados em SVG.

## Como contribuir

1. Achou um número errado ou uma fonte melhor? Abra uma *issue* com o dado, a fonte e o link.
2. Para corrigir, edite só o arquivo da parada em `src/data/paradas/`, rode `node scripts/validar-dados.mjs` e abra um *pull request*.
3. Mantenha a neutralidade: Defesa e Crítica com o mesmo peso, sem adjetivo de torcida, sem cores partidárias.
4. Divergências que ainda não foram resolvidas ficam em [`OBSERVACOES.md`](OBSERVACOES.md).

## Prévia do link (redes sociais)

`public/og.png` (1200×630) é a imagem que aparece quando o link é colado no WhatsApp, Instagram ou X. As tags `og:*` e `twitter:*` ficam em `index.html` e apontam para `https://vinical-bit.github.io/politica/`. Se o endereço mudar (domínio próprio, por exemplo), atualize essas URLs.
