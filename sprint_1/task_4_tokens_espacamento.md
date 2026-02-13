# Task 4 — Design Tokens: Espaçamento e Grid

## Descrição

Definir a escala de espaçamentos do Datta System e o sistema de grid, garantindo consistência entre margens, paddings e gaps em toda a interface. A base é um sistema de **múltiplos de 4px**, otimizado para a resolução-alvo de **1366×768**.

---

## Objetivo

Ter uma escala de espaçamento padronizada e um grid system documentado, eliminando decisões arbitrárias de layout e garantindo harmonia visual entre todos os componentes.

---

## Requisitos

### 1. Escala de Espaçamento (Base 4px)

| Token | Valor | Uso |
|-------|-------|-----|
| `--spacing-0` | 0px | Sem espaçamento |
| `--spacing-1` | 4px | Espaçamentos mínimos (gap entre ícone e texto) |
| `--spacing-2` | 8px | Padding interno de badges, espaço entre elementos inline |
| `--spacing-3` | 12px | Padding interno de botões (vertical), gap em listas compactas |
| `--spacing-4` | 16px | Padding padrão de componentes, gap entre campos de formulário |
| `--spacing-5` | 20px | Margem entre seções menores |
| `--spacing-6` | 24px | Padding de cards, gap entre grupos de conteúdo |
| `--spacing-8` | 32px | Margem entre seções maiores |
| `--spacing-10` | 40px | Espaçamento de áreas amplas |
| `--spacing-12` | 48px | Padding de containers principais |
| `--spacing-16` | 64px | Margens externas de página, separação entre blocos grandes |

### 2. Sistema de Grid

Considerando a resolução-alvo de **1366×768**:

| Token / Variável | Valor | Descrição |
|-------------------|-------|-----------|
| `--grid-columns` | 12 | Número de colunas do grid |
| `--grid-gutter` | 24px | Espaço entre colunas (gutter) |
| `--grid-margin` | 32px | Margem lateral da página |
| `--grid-max-width` | 1302px | Largura máxima do conteúdo (1366 - 2×32) |

**Cálculo para 1366px:**
- Largura útil: 1366 - 64 (margens) = 1302px
- 12 colunas com 11 gutters de 24px = 264px de gutters
- Largura de cada coluna: (1302 - 264) / 12 = **86.5px**

> **Nota:** O grid deve ser fluido (porcentual), não fixo em pixels. Os valores acima são referência para 1366px.

### 3. Breakpoints

Embora a resolução-alvo seja 1366×768, definir breakpoints para suportar variações:

| Token | Valor | Descrição |
|-------|-------|-----------|
| `--breakpoint-sm` | 640px | Dispositivos pequenos (uso raro no contexto gov) |
| `--breakpoint-md` | 768px | Tablets |
| `--breakpoint-lg` | 1024px | Telas intermediárias |
| `--breakpoint-xl` | 1366px | **Resolução-alvo** — monitores da maioria dos funcionários |
| `--breakpoint-2xl` | 1536px | Telas grandes |

### 4. Tokens de Layout

| Token | Valor | Uso |
|-------|-------|-----|
| `--sidebar-width` | 256px | Largura da barra lateral de navegação (se houver) |
| `--header-height` | 56px | Altura do header principal |
| `--content-max-width` | 1302px | Largura máxima da área de conteúdo |
| `--form-max-width` | 640px | Largura máxima de formulários (legibilidade) |

### 5. Arquivo de Tokens

Criar o arquivo `tokens/spacing.css` (e/ou `tokens/spacing.scss`) contendo:

- Escala de espaçamentos no `:root`.
- Variáveis de grid e breakpoints.
- Tokens de layout.
- Comentários organizando por categoria.

---

## Critérios de Aceite

- [ ] Escala de espaçamento definida com mínimo de 11 níveis (base 4px).
- [ ] Grid de 12 colunas configurado com gutter e margens para 1366px.
- [ ] Breakpoints definidos (mínimo 5 níveis).
- [ ] Tokens de layout definidos (sidebar, header, max-widths).
- [ ] Arquivo `tokens/spacing.css` criado e importável.
- [ ] Grid testado visualmente — 12 colunas visíveis e proporcionais em 1366px.
- [ ] Documentação da escala de espaçamento acessível (visual ou Markdown).

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 2 (Princípio 5: Performance Consciente) e 6 (Conceito em Ação)
- Restrição de resolução: 1366×768

---

## Estimativa

**1 dia**

## Prioridade

**Alta**

## Dependências

- Task 1 (Setup do Projeto) — estrutura de pastas.
