# Task 8 — Componente Pagination (Paginação)

## Descrição

Implementar o componente **Pagination** do Datta System — controle de navegação para dividir grandes conjuntos de dados em páginas. Essencial para tabelas e listagens em sistemas governamentais, onde é comum ter centenas ou milhares de registros (processos, cadastros, documentos). O componente permite ao usuário navegar entre páginas de forma clara e eficiente.

---

## Objetivo

Criar um componente Pagination reutilizável e acessível, com navegação por números de página, botões anterior/próximo, truncamento inteligente para muitas páginas, e integração semântica com tabelas e listas.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<nav class="ds-pagination" aria-label="Paginação de resultados">
  <div class="ds-pagination__info">
    Mostrando <strong>1–20</strong> de <strong>247</strong> resultados
  </div>

  <ul class="ds-pagination__list">
    <!-- Anterior -->
    <li class="ds-pagination__item">
      <button class="ds-pagination__btn ds-pagination__btn--prev" aria-label="Página anterior" disabled>
        <span aria-hidden="true">←</span>
        Anterior
      </button>
    </li>

    <!-- Páginas -->
    <li class="ds-pagination__item">
      <button class="ds-pagination__btn ds-pagination__btn--active" aria-label="Página 1" aria-current="page">1</button>
    </li>
    <li class="ds-pagination__item">
      <button class="ds-pagination__btn" aria-label="Página 2">2</button>
    </li>
    <li class="ds-pagination__item">
      <button class="ds-pagination__btn" aria-label="Página 3">3</button>
    </li>
    <li class="ds-pagination__item ds-pagination__item--ellipsis" aria-hidden="true">
      <span class="ds-pagination__ellipsis">...</span>
    </li>
    <li class="ds-pagination__item">
      <button class="ds-pagination__btn" aria-label="Página 13">13</button>
    </li>

    <!-- Próximo -->
    <li class="ds-pagination__item">
      <button class="ds-pagination__btn ds-pagination__btn--next" aria-label="Próxima página">
        Próximo
        <span aria-hidden="true">→</span>
      </button>
    </li>
  </ul>
</nav>
```

### 2. Anatomia do Componente

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Nav container** | `<nav>` com `aria-label` | Sim |
| **Info de resultados** | Texto "Mostrando X–Y de Z resultados" | Não |
| **Botão Anterior** | Navega para a página anterior | Sim |
| **Botão Próximo** | Navega para a próxima página | Sim |
| **Números de página** | Botões numéricos para acesso direto | Sim |
| **Página ativa** | Número com destaque visual e `aria-current="page"` | Sim |
| **Ellipsis** | "..." indicando páginas ocultas | Sim (quando aplicável) |

### 3. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo botão (default) | `--ds-color-neutral-white` | Branco |
| Fundo botão (hover) | `--ds-color-neutral-50` | Cinza muito sutil |
| Fundo botão (ativo) | `--ds-color-primary-500` | Azul médio |
| Texto botão (default) | `--ds-color-neutral-700` | Cinza médio |
| Texto botão (hover) | `--ds-color-neutral-900` | Cinza escuro |
| Texto botão (ativo) | `--ds-color-neutral-white` | Branco |
| Texto botão (disabled) | `--ds-color-neutral-300` | Cinza claro |
| Borda botão | `--ds-color-neutral-200` | `1px solid` cinza claro |
| Border-radius | `--ds-radius-md` | `6px` |
| Fonte | `--ds-font-size-sm` | `14px` |
| Peso | `--ds-font-weight-medium` | `500` |
| Tamanho botão | — | `36px` × `36px` (quadrado para números) |
| Gap entre botões | `--ds-spacing-4` | `4px` |
| Padding prev/next | `--ds-spacing-8` `--ds-spacing-12` | `8px` / `12px` |
| Transição | `--ds-transition-fast` | `150ms ease` |
| Info texto (cor) | `--ds-color-neutral-500` | Cinza médio |
| Info texto (fonte) | `--ds-font-size-sm` | `14px` |

### 4. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Default** | Botão com fundo branco, borda cinza, texto cinza |
| **Hover** | Fundo cinza sutil, texto escuro |
| **Focus** | Outline de foco padrão (azul, 2px) |
| **Active/Current** | Fundo azul médio, texto branco, sem borda |
| **Disabled** | Texto cinza claro, cursor not-allowed, sem hover effect |
| **Ellipsis** | "..." em cinza, não-clicável, sem fundo |

### 5. Comportamento

#### Lógica de Truncamento
O componente exibe no máximo **7 botões numéricos** para manter o tamanho compacto em 1366×768:

| Cenário | Exibição |
|---------|----------|
| ≤ 7 páginas | Todas as páginas visíveis: `1 2 3 4 5 6 7` |
| Página atual próxima ao início | `1 2 3 4 5 ... 13` |
| Página atual no meio | `1 ... 5 6 7 ... 13` |
| Página atual próxima ao fim | `1 ... 9 10 11 12 13` |

- A primeira e a última página são **sempre visíveis**.
- O ellipsis "..." aparece quando há páginas ocultas entre os extremos e o grupo central.

#### Navegação
- **Botão Anterior:** Desabilitado na primeira página.
- **Botão Próximo:** Desabilitado na última página.
- Clicar em um número navega diretamente para aquela página.
- A lógica de busca/paginação é responsabilidade da aplicação.

#### Integração com Tabela
- A paginação normalmente aparece abaixo da tabela (Task 3).
- O texto de informações ("Mostrando 1–20 de 247") alinha à esquerda; os controles alinham à direita.
- Layout flexbox com `justify-content: space-between`.

#### Itens por Página (Opcional)
- Seletor de quantidade por página (10, 20, 50, 100) usando componente Select da Sprint 2.
- Posicionado ao lado das informações de resultados.

```html
<div class="ds-pagination__per-page">
  <label class="ds-pagination__per-page-label" for="per-page">Itens por página:</label>
  <select class="ds-pagination__per-page-select" id="per-page">
    <option value="10">10</option>
    <option value="20" selected>20</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</div>
```

### 6. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Semântica | `<nav>` com `aria-label="Paginação de resultados"` |
| Lista | `<ul>` para agrupar os botões |
| Página atual | `aria-current="page"` no botão da página ativa |
| Labels | `aria-label="Página X"` em cada botão numérico |
| Anterior/Próximo | `aria-label="Página anterior"` e `aria-label="Próxima página"` |
| Disabled | `disabled` + `aria-disabled="true"` nos botões inativos |
| Ellipsis | `aria-hidden="true"` nos "..." (decorativos) |
| Live region | (Opcional) Anunciar mudança de página com `aria-live="polite"` na info de resultados |
| Contraste | Texto branco sobre fundo azul (ativo) ≥ 4.5:1 |

### 7. Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Move foco entre os botões da paginação |
| `Enter` / `Space` | Ativa o botão focado (navega para a página) |
| `Arrow Left/Right` | (Opcional) Move foco entre botões adjacentes |

---

## Variantes

### 1. Paginação Completa
Info de resultados + números de página + anterior/próximo. Uso principal em tabelas.

### 2. Paginação Simples
Apenas botões Anterior e Próximo, sem números de página. Para navegação sequencial (ex: wizard, steps).

### 3. Paginação Compacta
Apenas números de página, sem texto de info e sem labels "Anterior"/"Próximo" (apenas setas ← →). Para espaços reduzidos.

### 4. Paginação com Itens por Página
Paginação completa + seletor de quantidade por página. Para tabelas com dados variáveis.

---

## Critérios de Aceite

- [ ] Componente Pagination implementado com estrutura semântica (`<nav>`, `<ul>`, `<li>`).
- [ ] Botões Anterior e Próximo funcionais.
- [ ] Anterior desabilitado na primeira página; Próximo desabilitado na última.
- [ ] Botões numéricos com acesso direto à página.
- [ ] Página ativa com destaque visual (fundo azul, texto branco).
- [ ] `aria-current="page"` na página ativa.
- [ ] Truncamento inteligente com "..." para muitas páginas.
- [ ] Primeira e última página sempre visíveis.
- [ ] Máximo de 7 botões numéricos exibidos simultaneamente.
- [ ] Texto informativo "Mostrando X–Y de Z" funcional.
- [ ] Todos os estados visuais: default, hover, focus, active, disabled.
- [ ] Navegação por teclado (Tab + Enter/Space).
- [ ] `aria-label` descritivo em todos os botões.
- [ ] Contraste WCAG AA em todos os estados.
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] 4 variantes documentadas (completa, simples, compacta, com itens por página).
- [ ] Story criada no Storybook com todas as variantes e estados.

---

## Referências

- [Sprint 3 — Task 3 (Table)](./task_3_componente_tabela.md) — Integração com tabela de dados
- [Sprint 2 — Task 4 (Select)](../sprint_2/task_4_componente_select.md) — Seletor de itens por página
- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 2 (Eficiência Respeitosa)

---

## Estimativa

**1 dia**

## Prioridade

**Alta** — Componente essencial para navegação em listas e tabelas com muitos registros.

## Dependências

- Sprint 1 (tokens de cor, tipografia, espaçamento)
- Sprint 2 — Task 4 (Select) para seletor de itens por página (variante opcional)
- Sprint 3 — Task 3 (Table) para integração visual
