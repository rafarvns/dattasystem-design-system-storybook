# Task 1 — Componente Navbar (Navegação Principal)

## Descrição

Implementar a barra de navegação principal do Datta System. A Navbar é o componente estrutural mais importante da interface — está presente em todas as páginas e é o ponto de partida para a orientação do usuário. Deve ser fixa no topo, compacta para otimizar o espaço vertical em 1366×768, e transmitir a identidade institucional do sistema.

---

## Objetivo

Criar um componente Navbar reutilizável, acessível e responsivo à resolução-alvo, que sirva como barra de navegação principal para todas as aplicações do Datta System.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<nav class="ds-navbar" role="navigation" aria-label="Navegação principal">
  <div class="ds-navbar__container">
    <!-- Logo / Identidade -->
    <div class="ds-navbar__brand">
      <a href="/" class="ds-navbar__logo" aria-label="Página inicial">
        <img src="..." alt="Datta System" class="ds-navbar__logo-img" />
        <span class="ds-navbar__logo-text">Datta System</span>
      </a>
    </div>

    <!-- Menu Principal -->
    <ul class="ds-navbar__menu" role="menubar">
      <li class="ds-navbar__item" role="none">
        <a href="#" class="ds-navbar__link ds-navbar__link--active" role="menuitem" aria-current="page">
          Início
        </a>
      </li>
      <li class="ds-navbar__item" role="none">
        <a href="#" class="ds-navbar__link" role="menuitem">Processos</a>
      </li>
      <li class="ds-navbar__item ds-navbar__item--has-submenu" role="none">
        <button class="ds-navbar__link" role="menuitem" aria-expanded="false" aria-haspopup="true">
          Cadastros
          <span class="ds-navbar__chevron" aria-hidden="true"></span>
        </button>
        <ul class="ds-navbar__submenu" role="menu">
          <li role="none"><a href="#" class="ds-navbar__submenu-link" role="menuitem">Pessoas</a></li>
          <li role="none"><a href="#" class="ds-navbar__submenu-link" role="menuitem">Órgãos</a></li>
        </ul>
      </li>
    </ul>

    <!-- Ações à Direita -->
    <div class="ds-navbar__actions">
      <!-- Campo de Busca (opcional) -->
      <div class="ds-navbar__search">
        <input type="search" class="ds-input ds-navbar__search-input" placeholder="Buscar..." aria-label="Buscar no sistema" />
      </div>

      <!-- Notificações (opcional) -->
      <button class="ds-navbar__action-btn" aria-label="Notificações">
        <span class="ds-navbar__icon">🔔</span>
        <span class="ds-navbar__badge">3</span>
      </button>

      <!-- Menu do Usuário -->
      <div class="ds-navbar__user">
        <button class="ds-navbar__user-btn" aria-expanded="false" aria-haspopup="true">
          <span class="ds-navbar__avatar">JS</span>
          <span class="ds-navbar__user-name">João Silva</span>
          <span class="ds-navbar__chevron" aria-hidden="true"></span>
        </button>
        <ul class="ds-navbar__user-menu" role="menu">
          <li role="none"><a href="#" class="ds-navbar__user-menu-link" role="menuitem">Meu Perfil</a></li>
          <li role="none"><a href="#" class="ds-navbar__user-menu-link" role="menuitem">Configurações</a></li>
          <li class="ds-navbar__user-menu-divider" role="separator"></li>
          <li role="none"><a href="#" class="ds-navbar__user-menu-link ds-navbar__user-menu-link--danger" role="menuitem">Sair</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
```

### 2. Anatomia do Componente

| Área | Conteúdo | Obrigatoriedade |
|------|----------|-----------------|
| **Brand** | Logo (imagem ou texto) + nome do sistema | Obrigatório |
| **Menu** | Links de navegação principal (até 6 itens visíveis) | Obrigatório |
| **Submenu** | Dropdown para itens com filhos | Opcional |
| **Search** | Campo de busca compacto | Opcional |
| **Actions** | Ícones de ação (notificações, etc.) | Opcional |
| **User** | Avatar + nome + dropdown com opções | Obrigatório |

### 3. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Altura da navbar | `--ds-navbar-height` | `56px` |
| Fundo | `--ds-color-primary-dark` | Azul escuro |
| Texto | `--ds-color-neutral-white` | Branco |
| Link hover | `--ds-color-primary-light` | Azul claro (fundo sutil) |
| Link ativo | `--ds-color-neutral-white` com borda inferior | Branco + borda `--ds-color-accent-red` ou branco |
| Submenu fundo | `--ds-color-neutral-white` | Branco |
| Submenu texto | `--ds-color-neutral-900` | Cinza escuro |
| Submenu hover | `--ds-color-primary-50` | Azul muito claro |
| Badge | `--ds-color-danger` | Vermelho |
| Sombra | `--ds-shadow-md` | Sombra média (navbar e submenus) |
| Espaçamento interno | `--ds-spacing-16` | `16px` |
| Espaçamento entre itens | `--ds-spacing-8` | `8px` |
| Border-radius submenu | `--ds-radius-md` | `6px` |
| Fonte menu | `--ds-font-family-primary` | Inter |
| Tamanho fonte menu | `--ds-font-size-sm` | `14px` |
| Peso fonte link | `--ds-font-weight-medium` | `500` |
| Peso fonte link ativo | `--ds-font-weight-semibold` | `600` |
| Transição | `--ds-transition-fast` | `150ms ease` |

### 4. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Default** | Fundo azul escuro, links brancos, peso medium |
| **Hover (link)** | Fundo sutil semi-transparente branco (`rgba(255,255,255,0.1)`), transição suave |
| **Active/Current** | Link com peso semibold + indicador visual (borda inferior de 2px branca ou acento) |
| **Focus** | Outline branco de 2px com offset de 2px (visível sobre fundo escuro) |
| **Submenu aberto** | Dropdown branco com sombra, links em cinza escuro |
| **Submenu hover** | Fundo azul muito claro no item |
| **User menu aberto** | Similar ao submenu, com divisor antes de "Sair" |
| **Badge** | Círculo vermelho com número branco, posicionado sobre o ícone |

### 5. Comportamento

#### Layout
- Navbar **fixa no topo** (`position: fixed` ou `sticky`) com `z-index` elevado.
- Altura fixa de **56px** — otimizada para não consumir espaço excessivo em 1366×768.
- Container interno com largura máxima de **1366px** centralizado, ou `100%` com padding lateral.
- Brand à esquerda, menu ao centro ou à esquerda após brand, ações à direita.

#### Submenus
- Abrem ao **clicar** no item pai (não apenas hover, para melhor acessibilidade).
- Fecham ao clicar fora, clicar no item pai novamente, ou pressionar `Esc`.
- Posicionados diretamente abaixo do item pai, alinhados à esquerda.
- Animação sutil de entrada: `opacity 0→1` + `translateY(-4px → 0)` em 150ms.

#### Campo de Busca
- Em 1366×768, o campo pode começar colapsado (apenas ícone) e expandir ao clicar.
- Ao expandir, recebe foco automaticamente.
- `Enter` submete a busca; `Esc` colapsa o campo.

#### Responsividade (1366×768)
- Todos os elementos devem caber em 1366px de largura sem overflow.
- Se o menu tiver muitos itens, considerar um botão "Mais" com dropdown para itens excedentes.
- Testar com nomes de menu longos (ex: "Gerenciamento de Documentos").

### 6. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Role semântico | `<nav>` com `role="navigation"` e `aria-label="Navegação principal"` |
| Menu role | `role="menubar"` no `<ul>` principal; `role="menuitem"` nos links |
| Submenu anúncio | `aria-expanded="true/false"` e `aria-haspopup="true"` no trigger |
| Item atual | `aria-current="page"` no link da página ativa |
| Navegação por teclado | `Tab` para entrar/sair da navbar; `Arrow Left/Right` entre itens do menu; `Arrow Down` para abrir submenu; `Esc` para fechar |
| Contraste | Texto branco sobre azul escuro ≥ 4.5:1 |
| Skip link | Incluir link oculto "Pular para conteúdo" antes da navbar |
| Focus visible | Outline claro visível sobre o fundo escuro |

### 7. Navegação por Teclado (Detalhado)

| Tecla | Ação |
|-------|------|
| `Tab` | Entra na navbar (primeiro item focável); próximo Tab sai para conteúdo |
| `Arrow Right` | Move foco para o próximo item do menu (circular) |
| `Arrow Left` | Move foco para o item anterior do menu (circular) |
| `Arrow Down` | Abre submenu (se houver) e move foco para primeiro item |
| `Arrow Up` | Move foco para item anterior no submenu; no primeiro item, fecha submenu |
| `Enter` / `Space` | Ativa o link ou abre/fecha submenu |
| `Esc` | Fecha submenu aberto e retorna foco ao item pai |
| `Home` | Move foco para primeiro item do menu |
| `End` | Move foco para último item do menu |

---

## Variantes

### 1. Navbar Padrão (Completa)
Logo + menu + busca + notificações + usuário. Uso em aplicações completas.

### 2. Navbar Simples
Logo + menu + usuário. Sem busca e notificações. Uso em aplicações menores.

### 3. Navbar Institucional
Logo + nome do órgão + menu mínimo + usuário. Para portais governamentais com identidade visual do órgão.

---

## Critérios de Aceite

- [ ] Componente Navbar implementado com estrutura BEM conforme especificação.
- [ ] Brand (logo + nome) visível à esquerda.
- [ ] Menu de navegação funcional com links clicáveis.
- [ ] Submenu abre/fecha ao clicar com animação suave.
- [ ] Campo de busca funcional (expandir/colapsar em telas compactas).
- [ ] Menu do usuário com dropdown funcional (perfil, configurações, sair).
- [ ] Badge de notificações renderiza corretamente.
- [ ] Todos os tokens de cor, tipografia e espaçamento da Sprint 1 são utilizados.
- [ ] Navbar fixa no topo com z-index adequado.
- [ ] Navegação completa por teclado (Arrow keys, Enter, Esc, Tab).
- [ ] `aria-expanded`, `aria-haspopup`, `aria-current` implementados corretamente.
- [ ] Skip link "Pular para conteúdo" presente e funcional.
- [ ] Contraste texto/fundo ≥ 4.5:1 em todos os elementos.
- [ ] Focus visible com outline claro sobre fundo escuro.
- [ ] Todos os elementos cabem em 1366×768 sem overflow horizontal.
- [ ] Altura da navbar não excede 56px.
- [ ] 3 variantes documentadas (padrão, simples, institucional).

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 2 (Princípios), 3 (Paleta de Cores) e 5 (Mood Board)
- [Sprint 2 — Componente Button](../sprint_2/task_1_componente_botao.md) — Para reutilização em ações da navbar
- [Sprint 2 — Componente Input](../sprint_2/task_2_componente_input.md) — Para o campo de busca
- [WAI-ARIA Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)

---

## Estimativa

**2 dias**

## Prioridade

**Alta** — Componente estrutural presente em todas as páginas.

## Dependências

- Sprint 1 (tokens de cor, tipografia, espaçamento, sombras)
- Sprint 2 — Task 1 (Button) e Task 2 (Input) para reutilização
