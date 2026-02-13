# Task 3 — Componente Table (Tabela de Dados)

## Descrição

Implementar o componente **Table** do Datta System — tabela de dados para exibição, organização e navegação de informações tabulares. Em sistemas governamentais, tabelas são o principal meio de visualizar listas de processos, cadastros, relatórios e registros. O componente deve ser funcional, acessível e otimizado para a resolução 1366×768.

---

## Objetivo

Criar um componente Table reutilizável com cabeçalho fixo, ordenação por coluna, zebra striping, estados de linha, scroll horizontal para muitas colunas, e acessibilidade completa para leitores de tela.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<div class="ds-table-wrapper">
  <table class="ds-table" role="grid" aria-label="Lista de processos">
    <caption class="ds-table__caption">Processos em andamento — 247 registros</caption>

    <thead class="ds-table__head">
      <tr class="ds-table__row">
        <th class="ds-table__th ds-table__th--sortable" scope="col" aria-sort="ascending">
          <button class="ds-table__sort-btn">
            Nº Processo
            <span class="ds-table__sort-icon" aria-hidden="true">▲</span>
          </button>
        </th>
        <th class="ds-table__th" scope="col">Requerente</th>
        <th class="ds-table__th ds-table__th--sortable" scope="col" aria-sort="none">
          <button class="ds-table__sort-btn">
            Data
            <span class="ds-table__sort-icon" aria-hidden="true">⇅</span>
          </button>
        </th>
        <th class="ds-table__th" scope="col">Status</th>
        <th class="ds-table__th ds-table__th--actions" scope="col">Ações</th>
      </tr>
    </thead>

    <tbody class="ds-table__body">
      <tr class="ds-table__row">
        <td class="ds-table__td">2026.0001.0042</td>
        <td class="ds-table__td">Maria Silva Santos</td>
        <td class="ds-table__td">13/02/2026</td>
        <td class="ds-table__td">
          <span class="ds-badge ds-badge--success">Aprovado</span>
        </td>
        <td class="ds-table__td ds-table__td--actions">
          <button class="ds-btn ds-btn--ghost ds-btn--sm">Ver</button>
          <button class="ds-btn ds-btn--ghost ds-btn--sm">Editar</button>
        </td>
      </tr>
      <!-- Mais linhas -->
    </tbody>
  </table>
</div>
```

### 2. Anatomia do Componente

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Wrapper** | Container com overflow para scroll horizontal | Sim |
| **Caption** | Descrição da tabela + contagem de registros | Sim (acessibilidade) |
| **Thead** | Cabeçalho com títulos das colunas | Sim |
| **Sort button** | Botão dentro do `<th>` para ordenação | Não |
| **Tbody** | Corpo com linhas de dados | Sim |
| **Ações** | Coluna com botões de ação por linha | Não |

### 3. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo cabeçalho | `--ds-color-neutral-100` | Cinza muito claro |
| Texto cabeçalho | `--ds-color-neutral-800` | Cinza escuro |
| Peso cabeçalho | `--ds-font-weight-semibold` | `600` |
| Fonte cabeçalho | `--ds-font-size-sm` | `14px` |
| Fundo corpo (par) | `--ds-color-neutral-white` | Branco |
| Fundo corpo (ímpar) | `--ds-color-neutral-50` | Cinza muito sutil |
| Texto corpo | `--ds-color-neutral-700` | Cinza médio |
| Fonte corpo | `--ds-font-size-sm` | `14px` |
| Borda entre linhas | `--ds-color-neutral-200` | `1px solid` cinza claro |
| Borda externa tabela | `--ds-color-neutral-200` | `1px solid` cinza claro |
| Hover linha | `--ds-color-primary-50` | Azul muito claro |
| Linha selecionada | `--ds-color-primary-100` | Azul claro suave |
| Border-radius wrapper | `--ds-radius-md` | `6px` |
| Sombra wrapper | `--ds-shadow-sm` | Sombra sutil |
| Padding células | `--ds-spacing-12` `--ds-spacing-16` | `12px` vertical / `16px` horizontal |
| Transição hover | `--ds-transition-fast` | `150ms ease` |

### 4. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Default** | Zebra striping (branco/cinza alternado), bordas cinza claro |
| **Hover (linha)** | Fundo azul muito claro na linha inteira |
| **Selecionada** | Fundo azul claro com borda esquerda azul de 3px |
| **Ordenação ativa** | Ícone de seta preenchido (▲ ou ▼) + texto do cabeçalho em azul |
| **Ordenação inativa** | Ícone de seta dupla (⇅) em cinza claro |
| **Empty state** | Linha única ocupando toda a largura com mensagem centralizada |
| **Loading** | Skeleton/placeholder animado nas células ou indicador de carregamento |

### 5. Funcionalidades

#### Ordenação
- Colunas marcadas como `sortable` possuem botão de ordenação no cabeçalho.
- Ciclo de ordenação: nenhuma → ascendente (▲) → descendente (▼) → nenhuma.
- Atributo `aria-sort` atualizado dinamicamente (`ascending`, `descending`, `none`).
- A ordenação é **visual/CSS apenas** — a lógica de ordenação real é responsabilidade da aplicação.

#### Cabeçalho Fixo (Sticky Header)
- Em tabelas com muitas linhas, o cabeçalho pode ser fixo com `position: sticky; top: 0`.
- O wrapper recebe uma altura máxima (ex: `calc(100vh - 200px)`) com `overflow-y: auto`.

#### Scroll Horizontal
- Para tabelas com muitas colunas em 1366×768, o wrapper permite scroll horizontal.
- Indicador visual de que há mais conteúdo à direita (sombra/gradiente nas bordas).
- A primeira coluna pode ser fixa (`sticky`) para manter contexto durante o scroll.

#### Estado Vazio
- Quando não há dados, exibir mensagem centralizada: "Nenhum registro encontrado. Tente ajustar os filtros ou realizar uma nova busca."
- Usar tom de voz conforme DESIGN_SYSTEM_CONCEPT.md (seção 7).

#### Densidade
| Densidade | Padding vertical | Uso |
|-----------|-----------------|-----|
| **compact** | `--ds-spacing-4` (`4px`) | Muitos dados, usuários experientes |
| **default** | `--ds-spacing-12` (`12px`) | Uso geral (padrão) |
| **comfortable** | `--ds-spacing-16` (`16px`) | Poucos dados, leitura facilitada |

### 6. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Semântica | Usar elementos `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` nativos |
| Caption | `<caption>` descritivo obrigatório (pode ser visualmente oculto com classe `sr-only`) |
| Scope | `scope="col"` em todos os `<th>` |
| Ordenação | `aria-sort` em colunas ordenáveis (`ascending`, `descending`, `none`) |
| Ações | Botões de ação nas linhas com `aria-label` descritivo (ex: `aria-label="Ver processo 2026.0001"`) |
| Grid role | `role="grid"` na tabela para navegação avançada por teclado (opcional) |
| Contraste | Texto sobre fundos alternados mantém contraste ≥ 4.5:1 |
| Responsividade | Em scroll horizontal, garantir que o leitor de tela anuncie a estrutura corretamente |

### 7. Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Move foco entre elementos interativos (botões de sort, botões de ação) |
| `Enter` / `Space` | Ativa ordenação ou botão de ação |
| `Arrow Up/Down` | (Se `role="grid"`) Navega entre linhas |
| `Arrow Left/Right` | (Se `role="grid"`) Navega entre células |

---

## Variantes

### 1. Tabela Simples
Sem ordenação, sem ações, apenas exibição de dados. Uso: resumos, relatórios estáticos.

### 2. Tabela com Ordenação
Cabeçalhos clicáveis para ordenar. Uso: listas de processos, cadastros.

### 3. Tabela com Seleção
Checkbox na primeira coluna para selecionar linhas. Header com checkbox para selecionar/deselecionar todos. Uso: ações em lote (excluir múltiplos, exportar selecionados).

### 4. Tabela com Ações
Coluna de ações com botões (Ver, Editar, Excluir) por linha. Uso: CRUD completo.

---

## Critérios de Aceite

- [ ] Componente Table implementado com estrutura semântica HTML nativa (`<table>`, `<thead>`, etc.).
- [ ] Wrapper com `overflow-x: auto` para scroll horizontal em 1366×768.
- [ ] `<caption>` presente com descrição da tabela.
- [ ] Zebra striping (linhas alternadas) implementado.
- [ ] Hover na linha com feedback visual (fundo azul claro).
- [ ] Ordenação por coluna com ciclo ascendente/descendente/nenhuma.
- [ ] `aria-sort` atualizado dinamicamente nas colunas ordenáveis.
- [ ] Cabeçalho fixo (sticky) funcional em scroll vertical.
- [ ] 3 níveis de densidade disponíveis (compact, default, comfortable).
- [ ] Estado vazio com mensagem humanizada e centralizada.
- [ ] Coluna de ações com botões da Sprint 2 (Button ghost/sm).
- [ ] Indicador visual de scroll horizontal (sombra/gradiente nas bordas).
- [ ] Navegação por teclado funcional (Tab entre interativos, Enter para ativar).
- [ ] `scope="col"` em todos os `<th>`.
- [ ] Contraste WCAG AA em todos os estados (texto sobre zebra striping).
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768 com dados reais (nomes longos, muitas colunas).
- [ ] 4 variantes documentadas (simples, ordenação, seleção, ações).
- [ ] Story criada no Storybook com todos os estados e variantes.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 6 (Cartão de Informação) e 7 (Tom de Voz para estados vazios)
- [Sprint 2 — Componente Button](../sprint_2/task_1_componente_botao.md) — Botões de ação nas linhas
- [Sprint 2 — Componente Checkbox](../sprint_2/task_5_componente_checkbox.md) — Seleção de linhas
- [WAI-ARIA Table Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
- [WAI-ARIA Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)

---

## Estimativa

**2.5 dias**

## Prioridade

**Alta** — Componente mais utilizado em sistemas governamentais para listagem de dados e processos.

## Dependências

- Sprint 1 (tokens de cor, tipografia, espaçamento, sombras)
- Sprint 2 — Task 1 (Button) para botões de ação
- Sprint 2 — Task 5 (Checkbox) para seleção de linhas
