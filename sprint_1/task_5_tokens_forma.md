# Task 5 — Design Tokens: Bordas, Sombras e Cantos

## Descrição

Definir os tokens de forma visual do Datta System: border-radius, sombras (box-shadow) e bordas. Esses tokens controlam a "personalidade tátil" dos componentes — a suavidade dos cantos, a profundidade visual e a definição dos limites entre elementos.

---

## Objetivo

Ter todos os tokens de forma definidos, garantindo que qualquer componente futuro use valores consistentes de arredondamento, elevação e borda.

---

## Requisitos

### 1. Border Radius

Conforme o conceito: *"Cantos levemente arredondados (border-radius sutil, entre 4px e 8px) — modernidade sem infantilidade."*

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-none` | 0px | Elementos sem arredondamento (tabelas, divisores) |
| `--radius-sm` | 4px | Badges, tags, elementos compactos |
| `--radius-md` | 6px | **Padrão** — botões, inputs, cards, selects |
| `--radius-lg` | 8px | Cards de destaque, modais, containers maiores |
| `--radius-xl` | 12px | Tooltips, popovers (uso pontual) |
| `--radius-full` | 9999px | Avatares circulares, pills, badges arredondados |

> **Valor padrão para a maioria dos componentes:** `--radius-md` (6px), conforme descrito na seção "Botão" do conceito.

### 2. Sombras (Box Shadow)

Conforme o conceito: *"Cards com sombras suaves e discretas (elevação mínima), criando profundidade sem drama."*

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-none` | none | Sem sombra |
| `--shadow-xs` | `0 1px 2px rgba(0, 0, 0, 0.05)` | Elevação mínima — botões em repouso |
| `--shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)` | **Cards padrão** — elevação sutil |
| `--shadow-md` | `0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.04)` | Dropdowns, popovers |
| `--shadow-lg` | `0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.04)` | Modais, painéis flutuantes |
| `--shadow-focus` | `0 0 0 3px rgba([azul-primário], 0.25)` | Ring de foco para acessibilidade |
| `--shadow-error` | `0 0 0 3px rgba([vermelho], 0.25)` | Ring de foco em estado de erro |

> **Importante:** As sombras devem ser **muito sutis**. O Datta System prioriza interfaces limpas e planas. Sombras servem apenas para indicar elevação funcional (algo está acima do conteúdo).

### 3. Bordas

| Token | Valor | Uso |
|-------|-------|-----|
| `--border-width-thin` | 1px | **Padrão** — cards, inputs, separadores |
| `--border-width-medium` | 2px | Borda de foco em inputs, tabs ativas |
| `--border-width-thick` | 3px | Indicadores de seleção, barras laterais de destaque |
| `--border-style-default` | solid | Estilo padrão |

> **Cores de borda:** Usar os tokens de cor semânticos definidos na Task 2 (`--color-border-default`, `--color-border-focus`, `--color-border-error`).

### 4. Transições e Animações Base

Conforme o conceito: *"Animações sutis e funcionais, nunca decorativas."*

| Token | Valor | Uso |
|-------|-------|-----|
| `--transition-fast` | 150ms ease | Hovers, mudanças de cor, foco |
| `--transition-normal` | 250ms ease | Abertura de dropdowns, expansão de elementos |
| `--transition-slow` | 350ms ease | Entrada/saída de modais, transições de página |

### 5. Opacidade

| Token | Valor | Uso |
|-------|-------|-----|
| `--opacity-disabled` | 0.5 | Elementos desabilitados |
| `--opacity-hover` | 0.8 | Overlay leve em hover (se necessário) |
| `--opacity-overlay` | 0.5 | Backdrop de modais |

### 6. Arquivo de Tokens

Criar o arquivo `tokens/shape.css` (e/ou `tokens/shape.scss`) contendo:

- Todos os tokens acima no `:root`.
- Comentários organizando por categoria (Radius, Shadows, Borders, Transitions, Opacity).

---

## Critérios de Aceite

- [ ] Border-radius definido com mínimo de 6 níveis.
- [ ] Sombras definidas com mínimo de 6 variações (incluindo focus e error).
- [ ] Bordas definidas (widths e estilo padrão).
- [ ] Tokens de transição definidos (fast, normal, slow).
- [ ] Tokens de opacidade definidos.
- [ ] Arquivo `tokens/shape.css` criado e importável.
- [ ] Sombras testadas visualmente — devem ser **sutis e discretas**, não dramáticas.
- [ ] Documentação dos tokens acessível.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 5 (Mood Board: Formas e Geometria) e 6 (Botão, Card)
- Princípio 5: Performance Consciente — animações sutis e funcionais

---

## Estimativa

**1 dia**

## Prioridade

**Média**

## Dependências

- Task 1 (Setup do Projeto) — estrutura de pastas.
- Task 2 (Tokens de Cores) — cores usadas em `--shadow-focus` e `--shadow-error`.
