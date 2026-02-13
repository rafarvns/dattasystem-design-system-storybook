# Task 1 — Layout Shell: Template de Página

## Descrição

Implementar o **Layout Shell** do Datta System — o template estrutural que envolve todas as páginas da aplicação. É a composição de Navbar (Sprint 3), Sidebar de navegação secundária, Breadcrumb (Sprint 3), área de conteúdo principal e footer. Este padrão garante que todas as páginas compartilhem a mesma estrutura, proporcionando consistência e familiaridade ao usuário.

---

## Objetivo

Criar um layout de página reutilizável, acessível e otimizado para 1366×768, que sirva como template-base para todas as telas de aplicações construídas com o Datta System.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<div class="ds-app">
  <!-- Skip Link -->
  <a href="#main-content" class="ds-skip-link">Pular para o conteúdo principal</a>

  <!-- Navbar (Sprint 3) -->
  <nav class="ds-navbar" role="navigation" aria-label="Navegação principal">
    <!-- ... conteúdo da Navbar ... -->
  </nav>

  <!-- Container principal -->
  <div class="ds-app__body">

    <!-- Sidebar -->
    <aside class="ds-sidebar" role="navigation" aria-label="Menu lateral">
      <div class="ds-sidebar__header">
        <span class="ds-sidebar__title">Menu</span>
        <button class="ds-sidebar__toggle" aria-label="Recolher menu" aria-expanded="true">
          <span class="ds-sidebar__toggle-icon" aria-hidden="true">◀</span>
        </button>
      </div>

      <nav class="ds-sidebar__nav">
        <ul class="ds-sidebar__menu">
          <li class="ds-sidebar__item">
            <a href="#" class="ds-sidebar__link ds-sidebar__link--active" aria-current="page">
              <span class="ds-sidebar__icon" aria-hidden="true">📋</span>
              <span class="ds-sidebar__text">Dashboard</span>
            </a>
          </li>
          <li class="ds-sidebar__item ds-sidebar__item--has-children">
            <button class="ds-sidebar__link" aria-expanded="false">
              <span class="ds-sidebar__icon" aria-hidden="true">📁</span>
              <span class="ds-sidebar__text">Cadastros</span>
              <span class="ds-sidebar__chevron" aria-hidden="true">▸</span>
            </button>
            <ul class="ds-sidebar__submenu">
              <li class="ds-sidebar__subitem">
                <a href="#" class="ds-sidebar__sublink">Pessoas</a>
              </li>
              <li class="ds-sidebar__subitem">
                <a href="#" class="ds-sidebar__sublink">Órgãos</a>
              </li>
            </ul>
          </li>
          <li class="ds-sidebar__item">
            <a href="#" class="ds-sidebar__link">
              <span class="ds-sidebar__icon" aria-hidden="true">📄</span>
              <span class="ds-sidebar__text">Processos</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="ds-sidebar__footer">
        <span class="ds-sidebar__version">Datta System v1.0</span>
      </div>
    </aside>

    <!-- Área de conteúdo -->
    <main class="ds-main" id="main-content">
      <!-- Header da página -->
      <header class="ds-page-header">
        <div class="ds-page-header__breadcrumb">
          <!-- Breadcrumb (Sprint 3) -->
          <nav class="ds-breadcrumb" aria-label="Localização">
            <ol class="ds-breadcrumb__list">
              <li class="ds-breadcrumb__item"><a href="#" class="ds-breadcrumb__link">Início</a></li>
              <li class="ds-breadcrumb__item"><a href="#" class="ds-breadcrumb__link">Cadastros</a></li>
              <li class="ds-breadcrumb__item" aria-current="page">Pessoas</li>
            </ol>
          </nav>
        </div>
        <div class="ds-page-header__content">
          <h1 class="ds-page-header__title">Cadastro de Pessoas</h1>
          <p class="ds-page-header__description">Gerencie os cadastros de pessoas do sistema.</p>
        </div>
        <div class="ds-page-header__actions">
          <!-- Botões de ação da página -->
          <button class="ds-btn ds-btn--primary">Novo Cadastro</button>
        </div>
      </header>

      <!-- Conteúdo da página -->
      <section class="ds-content">
        <!-- Aqui entra o conteúdo específico de cada página -->
      </section>
    </main>
  </div>

  <!-- Footer (opcional) -->
  <footer class="ds-footer" role="contentinfo">
    <div class="ds-footer__container">
      <span class="ds-footer__text">© 2026 Datta System — Todos os direitos reservados</span>
      <span class="ds-footer__version">Versão 1.0.0</span>
    </div>
  </footer>
</div>
```

### 2. Anatomia do Layout

| Área | Conteúdo | Obrigatoriedade |
|------|----------|-----------------|
| **Skip Link** | Link oculto "Pular para conteúdo principal" | Obrigatório |
| **Navbar** | Barra superior com logo, menu principal, busca e usuário (Sprint 3) | Obrigatório |
| **Sidebar** | Menu lateral com navegação secundária, colapsável | Opcional (mas recomendado) |
| **Page Header** | Breadcrumb + título da página + descrição + ações | Obrigatório |
| **Content** | Área principal onde entra o conteúdo específico | Obrigatório |
| **Footer** | Informações institucionais e versão | Opcional |

### 3. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo da aplicação | `--ds-color-neutral-100` | Cinza muito claro (#F5F5F5) |
| Fundo da sidebar | `--ds-color-neutral-white` | Branco |
| Borda da sidebar | `--ds-color-neutral-200` | Cinza claro |
| Largura sidebar expandida | `--ds-sidebar-width` | `240px` |
| Largura sidebar colapsada | `--ds-sidebar-width-collapsed` | `64px` |
| Altura da navbar | `--ds-navbar-height` | `56px` |
| Fundo do conteúdo | `--ds-color-neutral-white` | Branco (cards internos) |
| Link ativo sidebar | `--ds-color-primary-500` | Azul médio |
| Link ativo fundo | `--ds-color-primary-50` | Azul muito claro |
| Texto sidebar | `--ds-color-neutral-700` | Cinza escuro |
| Texto sidebar hover | `--ds-color-primary-600` | Azul médio escuro |
| Título da página | `--ds-font-size-xl` | `24px` |
| Peso título | `--ds-font-weight-semibold` | `600` |
| Descrição da página | `--ds-font-size-base` | `16px` |
| Cor descrição | `--ds-color-neutral-500` | Cinza médio |
| Padding conteúdo | `--ds-spacing-24` | `24px` |
| Gap entre seções | `--ds-spacing-16` | `16px` |
| Sombra sidebar | `--ds-shadow-sm` | Sombra sutil |
| Transição sidebar | `--ds-transition-normal` | `250ms ease` |
| Z-index sidebar | `10` | Abaixo da navbar |
| Z-index navbar | `20` | Acima de tudo |

### 4. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Sidebar expandida** | Largura 240px, ícone + texto visíveis, toggle aponta para esquerda |
| **Sidebar colapsada** | Largura 64px, apenas ícones visíveis, tooltip com nome ao hover, toggle aponta para direita |
| **Link ativo** | Fundo azul claro, texto azul, borda esquerda de 3px azul |
| **Link hover** | Fundo cinza muito claro, texto escurece |
| **Link focus** | Outline azul de 2px com offset |
| **Submenu expandido** | Links filhos aparecem indentados abaixo do pai |
| **Submenu colapsado** | Links filhos ocultos, chevron rotaciona |
| **Page header com ações** | Título à esquerda, botões de ação alinhados à direita |

### 5. Comportamento

#### Grid e Dimensões (1366×768)

```
┌─────────────────────────────────────────────────────────────┐
│                     NAVBAR (56px altura)                     │
├───────────┬─────────────────────────────────────────────────┤
│           │  Breadcrumb: Início > Cadastros > Pessoas       │
│  SIDEBAR  │─────────────────────────────────────────────────│
│  (240px)  │  Título da Página                    [Ações]    │
│           │  Descrição da página                            │
│  Dashboard│─────────────────────────────────────────────────│
│  Cadastros│                                                 │
│    Pessoas│               ÁREA DE CONTEÚDO                  │
│    Órgãos │              (padding: 24px)                    │
│  Processos│                                                 │
│           │         Altura disponível: 712px                │
│           │         Largura: 1366 - 240 = 1126px            │
│           │                                                 │
├───────────┴─────────────────────────────────────────────────┤
│                     FOOTER (opcional)                        │
└─────────────────────────────────────────────────────────────┘
```

**Cálculos para 1366×768:**
- Área vertical útil: `768 - 56 (navbar) = 712px` para sidebar + conteúdo.
- Área horizontal com sidebar expandida: `1366 - 240 = 1126px` para conteúdo.
- Área horizontal com sidebar colapsada: `1366 - 64 = 1302px` para conteúdo.
- Padding do conteúdo: `24px` em todos os lados → área útil de conteúdo: `1078px × 664px` (sidebar expandida).

#### Sidebar Colapsável
- Botão de toggle no topo da sidebar (ícone chevron).
- Ao colapsar: sidebar reduz de 240px para 64px com animação de 250ms.
- Textos dos links desaparecem com `opacity 0` e `width 0`; ícones permanecem centralizados.
- Ao passar o mouse sobre um ícone na sidebar colapsada, exibir **tooltip** com o nome do item (usando Tooltip da Sprint 3).
- O estado colapsado/expandido deve ser **persistido** (localStorage) entre sessões.
- A transição da área de conteúdo acompanha o redimensionamento da sidebar suavemente.

#### Submenus da Sidebar
- Itens com filhos exibem chevron à direita.
- Clicar expande/colapsa o submenu com animação de altura.
- Na sidebar colapsada, submenus aparecem como **flyout** (popup lateral) ao lado do ícone.
- Múltiplos submenus podem estar abertos simultaneamente (accordion opcional).

#### Page Header
- Breadcrumb posicionado acima do título.
- Título (`h1`) e descrição à esquerda; botões de ação à direita.
- Em páginas sem ações, o header ocupa largura total.
- Separador visual (borda inferior sutil) entre header e conteúdo.

#### Scroll
- O scroll é **exclusivo da área de conteúdo** — navbar e sidebar permanecem fixas.
- Sidebar tem seu próprio scroll independente se o menu for maior que a altura disponível.

### 6. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Skip link | `<a href="#main-content">` oculto, visível ao focar via Tab |
| Landmark roles | `<nav>` para navbar e sidebar, `<main>` para conteúdo, `<footer>` para rodapé |
| Sidebar label | `aria-label="Menu lateral"` na sidebar |
| Toggle label | `aria-label="Recolher menu"` / `"Expandir menu"` dinâmico |
| Toggle state | `aria-expanded="true/false"` no botão de toggle |
| Item ativo | `aria-current="page"` no link da página atual |
| Submenus | `aria-expanded="true/false"` nos itens com filhos |
| Navegação por teclado | Tab entre áreas; Arrow keys dentro da sidebar |
| Foco gerenciado | Foco visível em todos os links e botões |
| Contraste | Links e ícones com contraste ≥ 4.5:1 sobre fundo branco |

### 7. Navegação por Teclado

| Tecla | Contexto | Ação |
|-------|----------|------|
| `Tab` | Global | Navega entre skip link → navbar → sidebar → conteúdo |
| `Arrow Down` | Sidebar | Move foco para próximo item do menu |
| `Arrow Up` | Sidebar | Move foco para item anterior do menu |
| `Arrow Right` | Sidebar | Expande submenu (se item tem filhos) |
| `Arrow Left` | Sidebar | Colapsa submenu e retorna foco ao pai |
| `Enter` / `Space` | Sidebar | Ativa link ou expande/colapsa submenu |
| `Home` | Sidebar | Move foco para primeiro item |
| `End` | Sidebar | Move foco para último item |

---

## Variantes de Layout

### 1. Layout Completo (Sidebar + Navbar)
Navbar fixa + sidebar colapsável + page header + conteúdo + footer. **Uso:** aplicações completas com muitas seções.

### 2. Layout Sem Sidebar
Navbar fixa + page header + conteúdo centralizado (max-width: 1200px) + footer. **Uso:** páginas simples, formulários, dashboards compactos.

### 3. Layout Fullscreen
Apenas navbar mínima + conteúdo ocupando 100% da tela. **Uso:** visualizações de dados, mapas, relatórios impressos.

---

## Templates de Página Incluídos

Os seguintes templates devem ser criados como stories no Storybook para demonstrar o Layout Shell em ação:

| Template | Descrição |
|----------|-----------|
| **Dashboard** | Cards de resumo + gráficos placeholder + atividade recente |
| **Listagem** | Filtros + tabela + paginação (detalhado na Task 3) |
| **Formulário** | Page header + formulário (detalhado na Task 2) |
| **Detalhe** | Page header + card com informações detalhadas de um registro |

---

## Critérios de Aceite

- [ ] Layout Shell implementado com Navbar, Sidebar, Page Header, Content e Footer.
- [ ] Skip link "Pular para conteúdo principal" presente e funcional (visível ao focar).
- [ ] Sidebar exibe ícones + texto em estado expandido (240px).
- [ ] Sidebar colapsa para 64px (apenas ícones) ao clicar no toggle.
- [ ] Tooltips exibidos ao hover nos ícones da sidebar colapsada.
- [ ] Estado colapsado/expandido persistido via localStorage.
- [ ] Transição suave (250ms) ao expandir/colapsar sidebar.
- [ ] Submenus expandem/colapsam com animação ao clicar.
- [ ] Flyout funcional para submenus na sidebar colapsada.
- [ ] Page Header exibe breadcrumb, título, descrição e ações.
- [ ] Scroll exclusivo da área de conteúdo (navbar e sidebar fixas).
- [ ] Sidebar com scroll independente quando menu excede a altura.
- [ ] Todas as landmark roles corretas (`<nav>`, `<main>`, `<footer>`).
- [ ] `aria-expanded`, `aria-current`, `aria-label` implementados corretamente.
- [ ] Navegação completa por teclado (Tab, Arrows, Enter, Esc).
- [ ] Todos os tokens de cor, tipografia e espaçamento da Sprint 1 utilizados.
- [ ] 3 variantes de layout documentadas (completo, sem sidebar, fullscreen).
- [ ] 4 templates de página como stories no Storybook (dashboard, listagem, formulário, detalhe).
- [ ] Layout cabe perfeitamente em 1366×768 sem scroll horizontal.
- [ ] Área útil de conteúdo calculada e documentada para cada variante.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 2 (Princípios), 5 (Mood Board), 6 (Conceito em Ação)
- [Sprint 3 — Navbar](../sprint_3/task_1_componente_navbar.md) — Componente reutilizado
- [Sprint 3 — Breadcrumb](../sprint_3/task_6_componente_breadcrumb.md) — Componente reutilizado
- [Sprint 3 — Tooltip](../sprint_3/task_5_componente_tooltip.md) — Para tooltips na sidebar colapsada
- [WAI-ARIA Landmarks](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/)
- [WAI-ARIA Treeview Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/) — Para sidebar com submenus

---

## Estimativa

**2.5 dias**

## Prioridade

**Alta** — Template estrutural base para todas as páginas do sistema.

## Dependências

- Sprint 1 concluída (tokens).
- Sprint 2 concluída (Button para ações do page header).
- Sprint 3 — Task 1 (Navbar), Task 5 (Tooltip), Task 6 (Breadcrumb) concluídas.
