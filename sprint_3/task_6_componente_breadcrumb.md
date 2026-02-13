# Task 6 — Componente Breadcrumb

## Descrição

Implementar o componente **Breadcrumb** do Datta System — trilha de navegação hierárquica que indica ao usuário sua localização atual dentro da estrutura do sistema. Em aplicações governamentais com múltiplos níveis de navegação (ex: Início > Cadastros > Pessoas > Editar), o breadcrumb é essencial para orientação e navegação rápida entre níveis.

---

## Objetivo

Criar um componente Breadcrumb acessível, semântico e visualmente claro, com separadores, truncamento para caminhos longos, e item atual não-clicável.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<nav class="ds-breadcrumb" aria-label="Navegação estrutural">
  <ol class="ds-breadcrumb__list">
    <li class="ds-breadcrumb__item">
      <a href="/" class="ds-breadcrumb__link">
        <span class="ds-breadcrumb__icon" aria-hidden="true">🏠</span>
        Início
      </a>
      <span class="ds-breadcrumb__separator" aria-hidden="true">/</span>
    </li>
    <li class="ds-breadcrumb__item">
      <a href="/cadastros" class="ds-breadcrumb__link">Cadastros</a>
      <span class="ds-breadcrumb__separator" aria-hidden="true">/</span>
    </li>
    <li class="ds-breadcrumb__item">
      <a href="/cadastros/pessoas" class="ds-breadcrumb__link">Pessoas</a>
      <span class="ds-breadcrumb__separator" aria-hidden="true">/</span>
    </li>
    <li class="ds-breadcrumb__item ds-breadcrumb__item--current" aria-current="page">
      <span class="ds-breadcrumb__text">Editar — Maria Silva</span>
    </li>
  </ol>
</nav>
```

### 2. Anatomia do Componente

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Nav** | Container semântico `<nav>` com `aria-label` | Sim |
| **Lista ordenada** | `<ol>` representando a hierarquia | Sim |
| **Item** | `<li>` para cada nível da navegação | Sim |
| **Link** | `<a>` clicável para níveis anteriores | Sim (exceto item atual) |
| **Separador** | Caractere ou ícone entre itens (ex: `/`, `>`, `›`) | Sim |
| **Ícone Home** | Ícone de casa no primeiro item (opcional) | Não |
| **Item atual** | Último item, não-clicável, com `aria-current="page"` | Sim |

### 3. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fonte | `--ds-font-size-sm` | `14px` |
| Peso (links) | `--ds-font-weight-regular` | `400` |
| Peso (item atual) | `--ds-font-weight-medium` | `500` |
| Cor links | `--ds-color-primary-500` | Azul médio |
| Cor links hover | `--ds-color-primary-700` | Azul escuro |
| Cor item atual | `--ds-color-neutral-700` | Cinza médio |
| Cor separador | `--ds-color-neutral-400` | Cinza claro |
| Gap entre itens | `--ds-spacing-4` | `4px` |
| Gap separador | `--ds-spacing-8` | `8px` (padding lateral do separador) |
| Ícone home | — | `16px`, mesma cor do link |
| Transição hover | `--ds-transition-fast` | `150ms ease` |

### 4. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Default** | Links em azul, separadores em cinza, item atual em cinza escuro sem link |
| **Hover (link)** | Texto azul escuro + underline |
| **Focus (link)** | Outline de foco padrão do sistema (azul, 2px) |
| **Active (link)** | Tom de azul mais escuro momentâneo |
| **Current** | Texto em cinza escuro, peso medium, sem underline, sem cursor pointer |
| **Truncado** | Itens intermediários substituídos por "..." clicável |

### 5. Comportamento

#### Navegação
- Cada item (exceto o atual) é um link clicável que leva ao respectivo nível da hierarquia.
- O item atual (último) **não é clicável** — é renderizado como `<span>`, não como `<a>`.
- Clicar em qualquer nível anterior navega para aquela página.

#### Truncamento
- Se o breadcrumb tiver mais de **4 níveis**, os itens intermediários são colapsados.
- O primeiro item (Home/Início) e os 2 últimos itens são sempre visíveis.
- Itens colapsados são substituídos por um botão "..." (ellipsis).
- Clicar no "..." expande todos os itens ocultos (ou abre um dropdown com os itens).

```html
<!-- Breadcrumb truncado -->
<li class="ds-breadcrumb__item">
  <a href="/" class="ds-breadcrumb__link">Início</a>
  <span class="ds-breadcrumb__separator" aria-hidden="true">/</span>
</li>
<li class="ds-breadcrumb__item ds-breadcrumb__item--ellipsis">
  <button class="ds-breadcrumb__ellipsis" aria-label="Mostrar níveis ocultos">...</button>
  <span class="ds-breadcrumb__separator" aria-hidden="true">/</span>
</li>
<li class="ds-breadcrumb__item">
  <a href="/cadastros/pessoas" class="ds-breadcrumb__link">Pessoas</a>
  <span class="ds-breadcrumb__separator" aria-hidden="true">/</span>
</li>
<li class="ds-breadcrumb__item ds-breadcrumb__item--current" aria-current="page">
  <span class="ds-breadcrumb__text">Editar — Maria Silva</span>
</li>
```

#### Overflow em 1366×768
- Se o breadcrumb completo não cabe na largura disponível, o último item (atual) pode truncar o texto com `text-overflow: ellipsis`.
- Tooltip com o texto completo ao hover no item truncado.

### 6. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Semântica | `<nav>` com `aria-label="Navegação estrutural"` ou `"Breadcrumb"` |
| Lista | `<ol>` para indicar sequência hierárquica |
| Item atual | `aria-current="page"` no último item |
| Separadores | `aria-hidden="true"` — não devem ser lidos pelo leitor de tela |
| Ellipsis | `aria-label="Mostrar níveis ocultos"` no botão de truncamento |
| Contraste | Links azuis sobre fundo claro ≥ 4.5:1 |
| Navegação | Todos os links focáveis via `Tab` |

### 7. Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Move foco entre os links do breadcrumb (inclui botão "...") |
| `Enter` | Ativa o link focado ou expande itens ocultos |
| `Space` | Ativa o botão de ellipsis |

---

## Variantes

### 1. Breadcrumb Padrão
Com separador `/`. Todos os níveis visíveis até 4 itens.

### 2. Breadcrumb com Ícone Home
Primeiro item com ícone de casa ao invés de (ou junto com) texto "Início".

### 3. Breadcrumb com Separador Chevron
Separador usando `›` (chevron right) ao invés de `/`. Visual mais moderno.

### 4. Breadcrumb Truncado
Mais de 4 níveis, com itens intermediários colapsados em "...".

---

## Critérios de Aceite

- [ ] Componente Breadcrumb implementado com estrutura semântica (`<nav>`, `<ol>`, `<li>`).
- [ ] Links clicáveis para todos os níveis, exceto o item atual.
- [ ] Item atual renderizado como `<span>` com `aria-current="page"`.
- [ ] Separadores visíveis entre itens com `aria-hidden="true"`.
- [ ] Truncamento funcional para breadcrumbs com mais de 4 níveis.
- [ ] Botão "..." expande itens ocultos.
- [ ] Hover nos links mostra underline + cor escura.
- [ ] Focus visível em todos os links e no botão de ellipsis.
- [ ] `aria-label="Navegação estrutural"` no `<nav>`.
- [ ] Navegação completa por teclado (Tab + Enter).
- [ ] Contraste WCAG AA em links e texto.
- [ ] Texto longo no item atual trunca com ellipsis + tooltip.
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768 sem overflow horizontal.
- [ ] 4 variantes documentadas (padrão, ícone home, chevron, truncado).
- [ ] Story criada no Storybook com todas as variantes.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 2 (Princípio de Clareza Absoluta)
- [Sprint 3 — Task 1 (Navbar)](./task_1_componente_navbar.md) — Integração com navegação principal
- [WAI-ARIA Breadcrumb Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

---

## Estimativa

**0.5 dia**

## Prioridade

**Média** — Componente de orientação importante para aplicações com múltiplos níveis de navegação.

## Dependências

- Sprint 1 (tokens de cor, tipografia, espaçamento)
- Sprint 3 — Task 5 (Tooltip) para texto truncado com tooltip
