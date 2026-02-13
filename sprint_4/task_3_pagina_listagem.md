# Task 3 — Padrão de Página de Listagem

## Descrição

Implementar o **padrão de página de listagem** do Datta System — a composição de página mais frequente em aplicações governamentais. Combina filtros de busca, tabela de dados (Sprint 3), paginação (Sprint 3), ações por linha e ações em lote, simulando um fluxo real de trabalho como "Listagem de Processos" ou "Cadastros de Pessoas".

---

## Objetivo

Criar um padrão de listagem reutilizável e documentado que demonstre a composição correta de componentes compostos (Table, Pagination, Alert) com componentes base (Input, Select, Button), otimizado para o volume de dados e a resolução 1366×768.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<!-- Dentro do Layout Shell (Task 1) -->
<section class="ds-listing">

  <!-- Barra de Filtros -->
  <div class="ds-listing__filters">
    <form class="ds-filter-bar" role="search" aria-label="Filtrar resultados">
      <div class="ds-filter-bar__fields">
        <div class="ds-filter-bar__field">
          <label class="ds-input__label" for="filtro-nome">Nome</label>
          <input class="ds-input ds-input--sm" type="text" id="filtro-nome"
                 placeholder="Buscar por nome..." />
        </div>

        <div class="ds-filter-bar__field">
          <label class="ds-input__label" for="filtro-status">Status</label>
          <select class="ds-select ds-select--sm" id="filtro-status">
            <option value="">Todos</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="pendente">Pendente</option>
          </select>
        </div>

        <div class="ds-filter-bar__field">
          <label class="ds-input__label" for="filtro-data">Período</label>
          <input class="ds-input ds-input--sm" type="date" id="filtro-data" />
        </div>
      </div>

      <div class="ds-filter-bar__actions">
        <button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Buscar</button>
        <button type="reset" class="ds-btn ds-btn--ghost ds-btn--sm">Limpar filtros</button>
      </div>
    </form>
  </div>

  <!-- Barra de Resultados e Ações -->
  <div class="ds-listing__toolbar">
    <div class="ds-listing__results-info">
      <span class="ds-listing__count">Exibindo <strong>1–10</strong> de <strong>247</strong> resultados</span>
    </div>

    <div class="ds-listing__toolbar-actions">
      <!-- Ações em lote (aparecem quando há seleção) -->
      <div class="ds-listing__bulk-actions" hidden>
        <span class="ds-listing__selected-count">3 selecionados</span>
        <button class="ds-btn ds-btn--secondary ds-btn--sm">Exportar selecionados</button>
        <button class="ds-btn ds-btn--destructive ds-btn--sm">Excluir selecionados</button>
      </div>

      <!-- Ações padrão -->
      <button class="ds-btn ds-btn--primary ds-btn--sm">
        <span class="ds-btn__icon" aria-hidden="true">+</span>
        Novo cadastro
      </button>
      <button class="ds-btn ds-btn--secondary ds-btn--sm" aria-label="Exportar lista">
        <span class="ds-btn__icon" aria-hidden="true">↓</span>
        Exportar
      </button>
    </div>
  </div>

  <!-- Tabela de Dados -->
  <div class="ds-listing__table-wrapper">
    <table class="ds-table ds-table--hoverable ds-table--striped">
      <thead class="ds-table__head">
        <tr>
          <th class="ds-table__th ds-table__th--checkbox" scope="col">
            <label class="ds-checkbox ds-checkbox--table">
              <input type="checkbox" class="ds-checkbox__input"
                     aria-label="Selecionar todos" />
              <span class="ds-checkbox__mark"></span>
            </label>
          </th>
          <th class="ds-table__th ds-table__th--sortable" scope="col"
              aria-sort="ascending">
            <button class="ds-table__sort-btn">
              Nome
              <span class="ds-table__sort-icon" aria-hidden="true">▲</span>
            </button>
          </th>
          <th class="ds-table__th" scope="col">CPF</th>
          <th class="ds-table__th ds-table__th--sortable" scope="col"
              aria-sort="none">
            <button class="ds-table__sort-btn">
              Data de cadastro
              <span class="ds-table__sort-icon" aria-hidden="true">⇕</span>
            </button>
          </th>
          <th class="ds-table__th" scope="col">Status</th>
          <th class="ds-table__th ds-table__th--actions" scope="col">
            <span class="ds-sr-only">Ações</span>
          </th>
        </tr>
      </thead>
      <tbody class="ds-table__body">
        <tr class="ds-table__row">
          <td class="ds-table__td ds-table__td--checkbox">
            <label class="ds-checkbox ds-checkbox--table">
              <input type="checkbox" class="ds-checkbox__input"
                     aria-label="Selecionar João Silva" />
              <span class="ds-checkbox__mark"></span>
            </label>
          </td>
          <td class="ds-table__td">
            <a href="#" class="ds-link">João Silva</a>
          </td>
          <td class="ds-table__td">123.456.789-00</td>
          <td class="ds-table__td">13/02/2026</td>
          <td class="ds-table__td">
            <span class="ds-badge ds-badge--success">Ativo</span>
          </td>
          <td class="ds-table__td ds-table__td--actions">
            <div class="ds-action-group">
              <button class="ds-btn ds-btn--ghost ds-btn--sm" aria-label="Visualizar João Silva">
                👁
              </button>
              <button class="ds-btn ds-btn--ghost ds-btn--sm" aria-label="Editar João Silva">
                ✏️
              </button>
              <button class="ds-btn ds-btn--ghost ds-btn--sm ds-btn--danger" aria-label="Excluir João Silva">
                🗑
              </button>
            </div>
          </td>
        </tr>
        <!-- ... mais linhas ... -->
      </tbody>
    </table>
  </div>

  <!-- Barra de Paginação -->
  <div class="ds-listing__pagination">
    <div class="ds-listing__per-page">
      <label class="ds-input__label" for="per-page">Itens por página:</label>
      <select class="ds-select ds-select--sm" id="per-page">
        <option value="10" selected>10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>

    <!-- Paginação (Sprint 3) -->
    <nav class="ds-pagination" aria-label="Paginação de resultados">
      <button class="ds-pagination__btn ds-pagination__btn--prev" aria-label="Página anterior" disabled>
        ← Anterior
      </button>
      <ol class="ds-pagination__list">
        <li><button class="ds-pagination__page ds-pagination__page--active" aria-current="page">1</button></li>
        <li><button class="ds-pagination__page">2</button></li>
        <li><button class="ds-pagination__page">3</button></li>
        <li><span class="ds-pagination__ellipsis">...</span></li>
        <li><button class="ds-pagination__page">25</button></li>
      </ol>
      <button class="ds-pagination__btn ds-pagination__btn--next" aria-label="Próxima página">
        Próximo →
      </button>
    </nav>
  </div>

  <!-- Estado Vazio (quando não há resultados) -->
  <div class="ds-listing__empty" hidden>
    <div class="ds-empty-state">
      <span class="ds-empty-state__icon" aria-hidden="true">🔍</span>
      <h2 class="ds-empty-state__title">Nenhum resultado encontrado</h2>
      <p class="ds-empty-state__description">
        Tente ajustar os filtros ou iniciar uma nova busca.
      </p>
      <button class="ds-btn ds-btn--secondary">Limpar filtros</button>
    </div>
  </div>
</section>
```

### 2. Anatomia da Página de Listagem

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Filter Bar** | Formulário de filtros com campos de busca e botões | Sim |
| **Toolbar** | Barra com contagem de resultados e ações (novo, exportar) | Sim |
| **Bulk Actions** | Ações em lote que aparecem ao selecionar itens | Não |
| **Table** | Tabela de dados com checkbox, ordenação e ações por linha (Sprint 3) | Sim |
| **Pagination** | Navegação entre páginas + itens por página (Sprint 3) | Sim |
| **Empty State** | Estado quando não há resultados para a busca | Sim |
| **Badges** | Indicadores de status (ativo, inativo, pendente) | Não |
| **Action Group** | Botões de ação por linha (visualizar, editar, excluir) | Sim |

### 3. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo filter bar | `--ds-color-neutral-white` | Branco |
| Borda filter bar | `--ds-color-neutral-200` | Cinza claro |
| Border-radius filter bar | `--ds-radius-md` | `6px` |
| Padding filter bar | `--ds-spacing-16` | `16px` |
| Gap entre filtros | `--ds-spacing-12` | `12px` |
| Fundo toolbar | Transparente | — |
| Cor contagem | `--ds-color-neutral-600` | Cinza médio escuro |
| Fundo tabela | `--ds-color-neutral-white` | Branco |
| Zebra striping | `--ds-color-neutral-50` | Cinza muito claro |
| Hover row | `--ds-color-primary-50` | Azul muito claro |
| Badge success | `--ds-color-success-100` fundo / `--ds-color-success-700` texto | Verde |
| Badge warning | `--ds-color-warning-100` fundo / `--ds-color-warning-700` texto | Amarelo |
| Badge danger | `--ds-color-danger-100` fundo / `--ds-color-danger-700` texto | Vermelho |
| Badge neutral | `--ds-color-neutral-200` fundo / `--ds-color-neutral-600` texto | Cinza |
| Gap geral | `--ds-spacing-16` | `16px` |
| Sombra card | `--ds-shadow-sm` | Sombra sutil |

### 4. Layout em 1366×768

```
┌─────────────────────────────────────────────────────┐
│ FILTER BAR                                          │
│ [Nome: ___________] [Status: ▼ Todos] [Data: ____] │
│ [Buscar]  Limpar filtros                            │
├─────────────────────────────────────────────────────┤
│ Exibindo 1–10 de 247           [+ Novo] [↓ Exportar]│
├─────────────────────────────────────────────────────┤
│ ☐ │ Nome ▲        │ CPF           │ Data  │ Status │ Ações │
│───┼───────────────┼───────────────┼───────┼────────┼───────│
│ ☐ │ João Silva    │ 123.456.789-00│ 13/02 │ ● Ativo│ 👁✏🗑│
│ ☐ │ Maria Santos  │ 987.654.321-00│ 12/02 │ ● Pend.│ 👁✏🗑│
│ ☐ │ Pedro Oliveira│ 456.789.123-00│ 11/02 │ ● Inat.│ 👁✏🗑│
│   │ ...           │               │       │        │       │
├─────────────────────────────────────────────────────┤
│ Itens/pág: [10▼]    ← Anterior  1 2 3 ... 25  Próximo → │
└─────────────────────────────────────────────────────┘
```

**Dimensões em 1366×768 (com sidebar de 240px):**
- Largura disponível para listagem: ~1078px (1126px - padding 24px × 2).
- A tabela deve usar **scroll horizontal** se as colunas excederem a largura.
- Filtros devem se organizar em **uma única linha** quando possível, quebrando para duas linhas se necessário.
- O tamanho `sm` dos inputs e botões é essencial para manter a filter bar compacta.

### 5. Comportamento

#### Filtros
- Filtros são um `<form>` com `role="search"`.
- "Buscar" aplica os filtros e recarrega a tabela (página 1).
- "Limpar filtros" reseta todos os campos e recarrega sem filtros.
- **URL params:** Os filtros devem ser refletidos na URL (query string) para permitir compartilhamento de busca e botão voltar do navegador.
- Ao limpar filtros, a URL volta ao estado padrão.

#### Tabela
- Reutiliza o componente **Table da Sprint 3** com todas as suas funcionalidades (ordenação, sticky header, zebra striping).
- **Ordenação:** Clicar no cabeçalho ordena a coluna (ascending → descending → none). Ícone indica direção.
- **Seleção:** Checkbox na primeira coluna. Checkbox no header seleciona/deseleciona todos da página atual.
- **Ações por linha:** Botões ghost (ícone) para visualizar, editar e excluir.
- **Excluir:** Abre **Modal de confirmação** (Sprint 3): *"Tem certeza que deseja excluir o cadastro de João Silva? Esta ação não pode ser desfeita."*

#### Ações em Lote
- Aparecem na toolbar quando ≥1 item está selecionado.
- Contador de selecionados: "3 selecionados".
- Ações disponíveis: exportar selecionados, excluir selecionados.
- "Excluir selecionados" abre Modal de confirmação com contagem.
- As ações padrão (Novo, Exportar) são ocultadas quando ações em lote estão visíveis.

#### Paginação
- Reutiliza o componente **Pagination da Sprint 3**.
- Seletor "Itens por página" à esquerda (10, 25, 50, 100).
- Alterar itens por página volta para a página 1.
- Navegação de páginas à direita.

#### Estados
- **Loading:** Skeleton/shimmer na tabela enquanto dados carregam.
- **Vazio (sem dados):** Empty state com ícone, texto e CTA (detalhado na Task 4).
- **Vazio (filtro sem resultados):** Empty state com sugestão de ajustar filtros.
- **Erro:** Alert de erro acima da tabela (Sprint 3).

### 6. Badges de Status

```html
<span class="ds-badge ds-badge--success">Ativo</span>
<span class="ds-badge ds-badge--warning">Pendente</span>
<span class="ds-badge ds-badge--danger">Inativo</span>
<span class="ds-badge ds-badge--neutral">Rascunho</span>
```

**Especificações:**
- Padding: `--ds-spacing-1` vertical / `--ds-spacing-2` horizontal.
- Border-radius: `--ds-radius-full` (pill shape).
- Font-size: `--ds-font-size-xs` (12px).
- Font-weight: `--ds-font-weight-medium` (500).
- Ícone circular opcional (●) antes do texto.

### 7. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Filter bar | `role="search"` e `aria-label="Filtrar resultados"` |
| Tabela | `scope="col"` nos `<th>`, `aria-sort` nas colunas ordenáveis |
| Checkbox "todos" | `aria-label="Selecionar todos"` |
| Checkbox por linha | `aria-label="Selecionar [Nome]"` dinâmico |
| Ações por linha | `aria-label` descritivo (ex: "Editar João Silva") |
| Paginação | `aria-label="Paginação de resultados"`, `aria-current="page"` |
| Status badges | Texto legível (não depende apenas da cor para informar status) |
| Empty state | Anunciado via `aria-live="polite"` ao ser exibido |
| Loading | `aria-busy="true"` na tabela durante carregamento |
| Resultados | Contagem de resultados anunciada via `aria-live="polite"` ao mudar |

### 8. Navegação por Teclado

| Tecla | Contexto | Ação |
|-------|----------|------|
| `Tab` | Página | Navega entre filtros → botões → tabela → paginação |
| `Enter` | Filtros | Submete a busca |
| `Space` | Checkbox | Marca/desmarca seleção |
| `Enter` | Link na tabela | Abre o detalhe do registro |
| `Arrow Up/Down` | Tabela | Navega entre linhas (opcional) |
| `Enter` | Botão de ação | Executa a ação (visualizar, editar, excluir) |

---

## Variantes de Listagem

### 1. Listagem Completa (Padrão)
Filtros + toolbar + tabela + paginação + ações. **Uso:** listagem de processos, cadastros, documentos.

### 2. Listagem Simples
Sem filtros, apenas tabela + paginação. **Uso:** listas menores, sub-listagens dentro de detalhes.

### 3. Listagem com Cards
Em vez de tabela, exibe resultados como cards em grid. **Uso:** catálogos, galeria de documentos, itens visuais.

### 4. Listagem Compacta
Tabela com densidade alta (menos padding), sem ações visuais por linha (ações no hover ou menu contextual). **Uso:** relatórios, logs de auditoria.

---

## Critérios de Aceite

- [ ] Página de listagem implementada com filter bar, toolbar, tabela, paginação e empty state.
- [ ] Filter bar funcional com campos de busca, seleção e botões (buscar, limpar).
- [ ] Filtros refletidos na URL (query params).
- [ ] Toolbar exibe contagem de resultados e botões de ação (novo, exportar).
- [ ] Ações em lote aparecem ao selecionar itens (contador, exportar, excluir).
- [ ] Tabela reutiliza componente Table da Sprint 3 (ordenação, zebra, sticky header).
- [ ] Checkbox de seleção por linha e "selecionar todos" funcional.
- [ ] Ações por linha (visualizar, editar, excluir) com aria-labels descritivos.
- [ ] Excluir abre Modal de confirmação (Sprint 3).
- [ ] Paginação reutiliza componente Pagination da Sprint 3.
- [ ] Seletor "itens por página" funcional (10, 25, 50, 100).
- [ ] Badges de status implementados (success, warning, danger, neutral).
- [ ] Empty state exibido quando não há resultados.
- [ ] Estado de loading/skeleton na tabela.
- [ ] Atributos ARIA corretos: `role="search"`, `aria-sort`, `aria-label`, `aria-current`, `aria-busy`.
- [ ] Navegação completa por teclado.
- [ ] 4 variantes documentadas (completa, simples, cards, compacta).
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Tudo cabe em 1366×768 sem scroll horizontal (exceto tabela com muitas colunas).
- [ ] Story no Storybook com exemplo completo funcional.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 2 (Princípios), 6 (Card de Informação), 7 (Tom de Voz)
- [Sprint 3 — Table](../sprint_3/task_3_componente_tabela.md) — Componente reutilizado
- [Sprint 3 — Pagination](../sprint_3/task_8_componente_paginacao.md) — Componente reutilizado
- [Sprint 3 — Modal](../sprint_3/task_2_componente_modal.md) — Para confirmação de exclusão
- [Sprint 3 — Alert](../sprint_3/task_4_componente_alert.md) — Para feedback de erros
- [Sprint 2 — Input](../sprint_2/task_2_componente_input.md) — Para filtros
- [Sprint 2 — Select](../sprint_2/task_4_componente_select.md) — Para filtros
- [Sprint 2 — Button](../sprint_2/task_1_componente_botao.md) — Para ações
- [Sprint 4 — Task 1 (Layout)](task_1_layout_pagina.md) — Template de página

---

## Estimativa

**2 dias**

## Prioridade

**Alta** — Padrão de página mais frequente em aplicações governamentais.

## Dependências

- Sprint 1 concluída (tokens).
- Sprint 2 concluída (Input, Select, Button, Checkbox).
- Sprint 3 concluída (Table, Pagination, Modal, Alert).
- Sprint 4 — Task 1 (Layout Shell) para contexto de página.
