# Task 3 — Design Tokens: Tipografia

## Descrição

Definir a escala tipográfica completa do Datta System: tamanhos de fonte, pesos, alturas de linha, espaçamento entre letras e as famílias tipográficas oficiais. Todos os valores devem ser traduzidos em Design Tokens (variáveis CSS) e otimizados para a resolução-alvo de **1366×768**.

---

## Objetivo

Ter uma escala tipográfica coerente, acessível e funcional, pronta para ser consumida por qualquer componente do Design System.

---

## Requisitos

### 1. Famílias Tipográficas Oficiais

Definir as fontes conforme o documento conceitual:

| Token | Família | Uso |
|-------|---------|-----|
| `--font-family-primary` | `'Inter', 'Source Sans Pro', sans-serif` | Corpo de texto, labels, botões, inputs — uso geral da UI |
| `--font-family-secondary` | `'Manrope', 'IBM Plex Sans', sans-serif` | Títulos de página, headings de destaque, painéis |
| `--font-family-mono` | `'IBM Plex Mono', 'Courier New', monospace` | Código, dados técnicos, protocolo/números |

> **Nota:** Inter é a fonte primária. Source Sans Pro é o fallback. Para títulos, Manrope é a preferencial com IBM Plex Sans como alternativa.

### 2. Escala de Tamanhos

Definir uma escala baseada em **rem** (com referência `1rem = 16px`), otimizada para legibilidade em 1366×768:

| Token | Tamanho (rem) | Tamanho (px) | Uso |
|-------|---------------|--------------|-----|
| `--font-size-xs` | 0.75rem | 12px | Textos auxiliares, legendas, timestamps |
| `--font-size-sm` | 0.875rem | 14px | Labels de formulário, textos secundários, tabelas |
| `--font-size-base` | 1rem | 16px | Corpo de texto padrão |
| `--font-size-md` | 1.125rem | 18px | Subtítulos, texto de destaque |
| `--font-size-lg` | 1.25rem | 20px | Títulos de seção, headings h3 |
| `--font-size-xl` | 1.5rem | 24px | Títulos de página, headings h2 |
| `--font-size-2xl` | 1.875rem | 30px | Títulos principais, headings h1 |
| `--font-size-3xl` | 2.25rem | 36px | Destaque especial (uso raro) |

> **Atenção:** Em 1366×768, tamanhos acima de 30px devem ser usados com moderação para não consumir espaço vertical excessivo.

### 3. Pesos Tipográficos

| Token | Peso | Uso |
|-------|------|-----|
| `--font-weight-regular` | 400 | Texto do corpo, descrições |
| `--font-weight-medium` | 500 | Labels, texto com leve destaque |
| `--font-weight-semibold` | 600 | Títulos de cards, subtítulos, botões |
| `--font-weight-bold` | 700 | Títulos de página, headings principais |

### 4. Alturas de Linha (Line Height)

| Token | Valor | Uso |
|-------|-------|-----|
| `--line-height-tight` | 1.25 | Títulos, headings |
| `--line-height-normal` | 1.5 | Corpo de texto padrão |
| `--line-height-relaxed` | 1.75 | Textos longos, parágrafos explicativos |

### 5. Espaçamento entre Letras (Letter Spacing)

| Token | Valor | Uso |
|-------|-------|-----|
| `--letter-spacing-tight` | -0.025em | Títulos grandes |
| `--letter-spacing-normal` | 0 | Texto padrão |
| `--letter-spacing-wide` | 0.025em | Labels em caixa alta (se usado), textos pequenos |

### 6. Composições Tipográficas (Presets)

Criar classes ou mixins que combinem família + tamanho + peso + altura de linha para uso direto:

| Preset | Composição |
|--------|------------|
| `.text-heading-1` | Manrope, 30px, bold, line-height 1.25 |
| `.text-heading-2` | Manrope, 24px, bold, line-height 1.25 |
| `.text-heading-3` | Manrope, 20px, semibold, line-height 1.25 |
| `.text-subtitle` | Inter, 18px, semibold, line-height 1.5 |
| `.text-body` | Inter, 16px, regular, line-height 1.5 |
| `.text-body-sm` | Inter, 14px, regular, line-height 1.5 |
| `.text-caption` | Inter, 12px, regular, line-height 1.5 |
| `.text-label` | Inter, 14px, medium, line-height 1.25 |
| `.text-button` | Inter, 14px, semibold, line-height 1.25 |

### 7. Arquivo de Tokens

Criar o arquivo `tokens/typography.css` (e/ou `tokens/typography.scss`) contendo:

- Todas as variáveis no `:root`.
- Classes de composição tipográfica.
- Comentários organizando por categoria.

---

## Critérios de Aceite

- [ ] Famílias tipográficas definidas em variáveis com fallbacks adequados.
- [ ] Escala de tamanhos com mínimo de 8 níveis definida em rem.
- [ ] Pesos tipográficos definidos (regular, medium, semibold, bold).
- [ ] Alturas de linha definidas (tight, normal, relaxed).
- [ ] Letter-spacing definido (tight, normal, wide).
- [ ] Composições/presets tipográficos criados (mínimo 9 presets).
- [ ] Arquivo `tokens/typography.css` criado e importável.
- [ ] Todos os presets testados visualmente (renderizando a fonte correta com o peso correto).
- [ ] Legibilidade verificada em viewport 1366×768.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 4 (Direção Tipográfica)
- Fontes disponíveis em `assets/fonts/`

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta**

## Dependências

- Task 1 (Setup do Projeto) — estrutura de pastas e fontes carregadas.
