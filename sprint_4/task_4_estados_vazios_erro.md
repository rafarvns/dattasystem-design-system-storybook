# Task 4 — Estados de Página: Empty States, Erro e Loading

## Descrição

Implementar os **estados de página** do Datta System — os padrões visuais para quando a interface não exibe conteúdo principal: estados vazios (empty states), páginas de erro (404, 500, 403), e estados de carregamento (loading/skeleton screens). Esses estados são cruciais para a experiência do usuário, pois transformam momentos de frustração ou espera em comunicação clara e orientação.

---

## Objetivo

Criar componentes e padrões reutilizáveis para todos os estados não-padrão da interface, seguindo o Tom de Voz do Datta System (acolhedor, orientador, nunca punitivo), com acessibilidade completa e otimização para 1366×768.

---

## Requisitos

### 1. Empty States (Estados Vazios)

#### 1.1 Estrutura HTML (BEM)

```html
<div class="ds-empty-state" role="status" aria-live="polite">
  <div class="ds-empty-state__illustration" aria-hidden="true">
    <!-- Ilustração SVG simples ou ícone grande -->
    <svg class="ds-empty-state__icon" ...>...</svg>
  </div>
  <h2 class="ds-empty-state__title">Nenhum processo encontrado</h2>
  <p class="ds-empty-state__description">
    Tente ajustar os filtros ou iniciar uma nova busca.
  </p>
  <div class="ds-empty-state__actions">
    <button class="ds-btn ds-btn--primary">Novo processo</button>
    <button class="ds-btn ds-btn--secondary">Limpar filtros</button>
  </div>
</div>
```

#### 1.2 Variantes de Empty State

| Variante | Contexto | Título | Descrição | Ação |
|----------|----------|--------|-----------|------|
| **Sem dados (inicial)** | Primeiro acesso a uma seção | "Nenhum cadastro ainda" | "Comece adicionando o primeiro cadastro ao sistema." | [Novo cadastro] |
| **Busca sem resultados** | Filtros aplicados sem match | "Nenhum resultado encontrado" | "Tente ajustar os filtros ou iniciar uma nova busca." | [Limpar filtros] |
| **Lista vazia** | Todos os itens foram removidos | "Esta lista está vazia" | "Os itens removidos não podem ser recuperados." | [Voltar] |
| **Sem notificações** | Central de notificações vazia | "Nenhuma notificação" | "Quando houver novidades, elas aparecerão aqui." | — |
| **Sem permissão** | Usuário sem acesso ao conteúdo | "Acesso não disponível" | "Você não tem permissão para visualizar este conteúdo. Solicite acesso ao administrador." | [Solicitar acesso] |

#### 1.3 Design Tokens — Empty State

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Ícone/ilustração tamanho | `120px` × `120px` | — |
| Cor do ícone | `--ds-color-neutral-300` | Cinza claro |
| Título | `--ds-font-size-lg` (`18px`) | — |
| Peso do título | `--ds-font-weight-semibold` | `600` |
| Cor do título | `--ds-color-neutral-700` | Cinza escuro |
| Descrição | `--ds-font-size-base` (`16px`) | — |
| Cor da descrição | `--ds-color-neutral-500` | Cinza médio |
| Max-width do texto | `480px` | Centralizado |
| Gap entre elementos | `--ds-spacing-16` | `16px` |
| Gap entre ações | `--ds-spacing-12` | `12px` |
| Padding vertical | `--ds-spacing-48` | `48px` |
| Alinhamento | Centro (horizontal e vertical) | — |

---

### 2. Páginas de Erro

#### 2.1 Estrutura HTML — Página de Erro

```html
<div class="ds-error-page">
  <div class="ds-error-page__container">
    <div class="ds-error-page__illustration" aria-hidden="true">
      <span class="ds-error-page__code">404</span>
    </div>
    <h1 class="ds-error-page__title">Página não encontrada</h1>
    <p class="ds-error-page__description">
      A página que você procura não existe ou foi movida.
      Verifique o endereço ou volte para a página inicial.
    </p>
    <div class="ds-error-page__actions">
      <a href="/" class="ds-btn ds-btn--primary">Voltar para o início</a>
      <button class="ds-btn ds-btn--secondary" onclick="history.back()">Voltar à página anterior</button>
    </div>
    <div class="ds-error-page__help">
      <p>Se o problema persistir, entre em contato com o suporte:
        <a href="mailto:suporte@sistema.gov.br" class="ds-link">suporte@sistema.gov.br</a>
      </p>
    </div>
  </div>
</div>
```

#### 2.2 Variantes de Página de Erro

| Código | Título | Descrição (Tom de Voz) | Ações |
|--------|--------|------------------------|-------|
| **404** | "Página não encontrada" | "A página que você procura não existe ou foi movida. Verifique o endereço ou volte para a página inicial." | [Voltar ao início] [Página anterior] |
| **403** | "Acesso não autorizado" | "Você não tem permissão para acessar esta página. Se acredita que deveria ter acesso, entre em contato com o administrador do sistema." | [Voltar ao início] [Solicitar acesso] |
| **500** | "Algo deu errado" | "Tivemos um problema ao processar sua solicitação. Nossa equipe já foi notificada. Tente novamente em alguns instantes." | [Tentar novamente] [Voltar ao início] |
| **503** | "Sistema em manutenção" | "Estamos realizando melhorias no sistema. A previsão de retorno é às [horário]. Pedimos desculpas pelo inconveniente." | [Tentar novamente] |
| **Timeout** | "O sistema demorou para responder" | "A operação demorou mais do que o esperado. Isso pode acontecer em momentos de alta demanda. Tente novamente em alguns instantes." | [Tentar novamente] [Voltar ao início] |

#### 2.3 Design Tokens — Páginas de Erro

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo da página | `--ds-color-neutral-50` | Cinza muito claro |
| Código do erro | `--ds-font-size-display` (`72px`) | — |
| Peso do código | `--ds-font-weight-bold` | `700` |
| Cor do código | `--ds-color-primary-200` | Azul claro (sutil, não alarmante) |
| Título | `--ds-font-size-2xl` (`30px`) | — |
| Peso do título | `--ds-font-weight-semibold` | `600` |
| Cor do título | `--ds-color-neutral-800` | Cinza muito escuro |
| Descrição | `--ds-font-size-base` (`16px`) | — |
| Cor da descrição | `--ds-color-neutral-600` | Cinza médio escuro |
| Max-width container | `560px` | Centralizado |
| Gap entre elementos | `--ds-spacing-24` | `24px` |
| Padding vertical | `--ds-spacing-64` | `64px` |
| Help text | `--ds-font-size-sm` (`14px`) | — |
| Help text cor | `--ds-color-neutral-400` | Cinza |
| Alinhamento | Centro (horizontal e vertical na viewport) | — |

#### 2.4 Layout da Página de Erro

```
┌─────────────────────────────────────────────────────┐
│                     NAVBAR                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│                                                     │
│                      404                            │
│                                                     │
│            Página não encontrada                    │
│                                                     │
│     A página que você procura não existe ou         │
│     foi movida. Verifique o endereço ou             │
│     volte para a página inicial.                    │
│                                                     │
│     [Voltar para o início]  [Página anterior]       │
│                                                     │
│     Se o problema persistir, entre em contato       │
│     com o suporte: suporte@sistema.gov.br           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 3. Loading States (Estados de Carregamento)

#### 3.1 Skeleton Screen

```html
<!-- Skeleton para Card -->
<div class="ds-skeleton ds-skeleton--card" aria-hidden="true">
  <div class="ds-skeleton__line ds-skeleton__line--title"></div>
  <div class="ds-skeleton__line ds-skeleton__line--text"></div>
  <div class="ds-skeleton__line ds-skeleton__line--text ds-skeleton__line--short"></div>
</div>

<!-- Skeleton para Tabela -->
<div class="ds-skeleton ds-skeleton--table" aria-hidden="true">
  <div class="ds-skeleton__row ds-skeleton__row--header">
    <div class="ds-skeleton__cell"></div>
    <div class="ds-skeleton__cell"></div>
    <div class="ds-skeleton__cell"></div>
    <div class="ds-skeleton__cell"></div>
  </div>
  <div class="ds-skeleton__row">
    <div class="ds-skeleton__cell"></div>
    <div class="ds-skeleton__cell"></div>
    <div class="ds-skeleton__cell"></div>
    <div class="ds-skeleton__cell"></div>
  </div>
  <!-- Repetir 5-10 linhas -->
</div>

<!-- Skeleton para Formulário -->
<div class="ds-skeleton ds-skeleton--form" aria-hidden="true">
  <div class="ds-skeleton__line ds-skeleton__line--label"></div>
  <div class="ds-skeleton__line ds-skeleton__line--input"></div>
  <div class="ds-skeleton__line ds-skeleton__line--label"></div>
  <div class="ds-skeleton__line ds-skeleton__line--input"></div>
</div>

<!-- Texto acessível para loading -->
<div class="ds-sr-only" role="status" aria-live="polite">
  Carregando conteúdo, por favor aguarde...
</div>
```

#### 3.2 Spinner (Loading Inline)

```html
<!-- Spinner standalone -->
<div class="ds-spinner" role="status">
  <svg class="ds-spinner__icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle class="ds-spinner__track" cx="12" cy="12" r="10" />
    <circle class="ds-spinner__indicator" cx="12" cy="12" r="10" />
  </svg>
  <span class="ds-spinner__text">Carregando...</span>
</div>

<!-- Spinner em página inteira (overlay) -->
<div class="ds-loading-overlay" role="status" aria-live="polite">
  <div class="ds-loading-overlay__content">
    <div class="ds-spinner ds-spinner--lg">
      <svg class="ds-spinner__icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle class="ds-spinner__track" cx="12" cy="12" r="10" />
        <circle class="ds-spinner__indicator" cx="12" cy="12" r="10" />
      </svg>
    </div>
    <span class="ds-loading-overlay__text">Processando sua solicitação...</span>
  </div>
</div>
```

#### 3.3 Progress Bar (Barra de Progresso)

```html
<div class="ds-progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
     aria-label="Progresso do upload">
  <div class="ds-progress__track">
    <div class="ds-progress__fill" style="width: 65%"></div>
  </div>
  <span class="ds-progress__label">65% concluído</span>
</div>
```

#### 3.4 Design Tokens — Loading

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Skeleton fundo | `--ds-color-neutral-200` | Cinza claro |
| Skeleton animação | `--ds-color-neutral-100` → `--ds-color-neutral-300` | Shimmer |
| Skeleton border-radius | `--ds-radius-sm` | `4px` |
| Skeleton line height (title) | `24px` | — |
| Skeleton line height (text) | `16px` | — |
| Skeleton line height (input) | `40px` | — |
| Skeleton gap | `--ds-spacing-12` | `12px` |
| Spinner cor track | `--ds-color-neutral-200` | Cinza claro |
| Spinner cor indicator | `--ds-color-primary-500` | Azul |
| Spinner tamanho sm | `16px` | — |
| Spinner tamanho md | `24px` | — |
| Spinner tamanho lg | `48px` | — |
| Spinner animação | `rotate 360deg` / `1s linear infinite` | — |
| Progress track | `--ds-color-neutral-200` | Cinza claro |
| Progress fill | `--ds-color-primary-500` | Azul |
| Progress height | `8px` | — |
| Progress border-radius | `--ds-radius-full` | Pill |
| Overlay fundo | `rgba(255, 255, 255, 0.8)` | Semi-transparente |
| Overlay z-index | `30` | Acima de sidebar e navbar |
| Animação duração | `1.5s` | Shimmer / `1s` spinner |

#### 3.5 Skeleton — Variantes

| Variante | Uso |
|----------|-----|
| **Card skeleton** | Placeholder para Card (Sprint 2) durante carregamento |
| **Table skeleton** | Placeholder para Table (Sprint 3) — header + N linhas |
| **Form skeleton** | Placeholder para formulários — labels + inputs |
| **Text skeleton** | Blocos de texto genéricos (parágrafos) |
| **Avatar skeleton** | Círculo para avatar/foto de perfil |
| **Dashboard skeleton** | Composição de cards + gráficos placeholder |

---

### 4. Comportamento Geral

#### Quando Usar Cada Estado

| Situação | Estado | Componente |
|----------|--------|------------|
| Dados sendo carregados | **Skeleton** | `ds-skeleton--[tipo]` |
| Ação sendo processada | **Spinner** ou **Loading no botão** | `ds-spinner` / `ds-btn--loading` |
| Upload/download em progresso | **Progress bar** | `ds-progress` |
| Operação bloqueante | **Loading overlay** | `ds-loading-overlay` |
| Nenhum dado existe ainda | **Empty state (inicial)** | `ds-empty-state` |
| Busca sem resultados | **Empty state (busca)** | `ds-empty-state` |
| Página não existe | **Erro 404** | `ds-error-page` |
| Sem permissão | **Erro 403** | `ds-error-page` |
| Erro no servidor | **Erro 500** | `ds-error-page` |
| Sistema indisponível | **Erro 503** | `ds-error-page` |

#### Diretrizes de Loading
- **Ações rápidas (<300ms):** Nenhum indicador — o resultado aparece diretamente.
- **Ações curtas (300ms–1s):** Spinner inline ou loading no botão.
- **Ações médias (1s–5s):** Skeleton screen ou overlay com mensagem.
- **Ações longas (>5s):** Progress bar com percentual, ou mensagem estimativa.
- **Nunca deixar o usuário sem feedback** por mais de 300ms.

#### Transições
- Skeleton → conteúdo: fade-in de 200ms (`opacity 0→1`).
- Spinner → conteúdo: spinner desaparece, conteúdo aparece com fade-in.
- Nunca exibir skeleton por menos de 500ms (evita flash).

### 5. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Empty state anúncio | `role="status"` + `aria-live="polite"` |
| Skeleton oculto | `aria-hidden="true"` (conteúdo visual sem valor semântico) |
| Loading anúncio | `role="status"` + `aria-live="polite"` com texto "Carregando..." |
| Spinner texto | `<span class="ds-sr-only">` ou texto visível |
| Progress bar | `role="progressbar"` + `aria-valuenow/min/max` + `aria-label` |
| Erro página | `<h1>` com título do erro, estrutura semântica |
| Erro ações | Links/botões focáveis e com label claro |
| Contraste | Texto de erro/empty com contraste ≥ 4.5:1 |
| Keyboard | Todos os CTAs e links navegáveis por teclado |

### 6. Navegação por Teclado

| Tecla | Contexto | Ação |
|-------|----------|------|
| `Tab` | Empty state | Navega entre os botões de ação |
| `Tab` | Página de erro | Navega entre links e botões |
| `Enter` | Qualquer CTA | Ativa o botão/link |
| `Esc` | Loading overlay | Cancela operação (se cancelável) |

---

## Critérios de Aceite

### Empty States
- [ ] 5 variantes de empty state implementadas (sem dados, busca vazia, lista vazia, sem notificações, sem permissão).
- [ ] Cada empty state tem ilustração/ícone, título, descrição e CTA quando aplicável.
- [ ] Textos seguem o Tom de Voz do Design System (acolhedor, orientador).
- [ ] `role="status"` e `aria-live="polite"` implementados.
- [ ] Centralizado vertical e horizontalmente na área de conteúdo.

### Páginas de Erro
- [ ] 5 páginas de erro implementadas (404, 403, 500, 503, timeout).
- [ ] Cada página tem código visual, título, descrição, ações e link de suporte.
- [ ] Mensagens nunca culpam o usuário (Tom de Voz).
- [ ] Erro 500/503 assume responsabilidade ("Tivemos um problema...").
- [ ] Estrutura HTML semântica com `<h1>` e landmark roles.
- [ ] Renderizam corretamente em 1366×768 (centralizadas).

### Loading States
- [ ] Skeleton screen implementado para card, tabela, formulário, texto, avatar e dashboard.
- [ ] Animação shimmer suave (não distrativa).
- [ ] Spinner implementado em 3 tamanhos (sm, md, lg).
- [ ] Loading overlay implementado com fundo semi-transparente.
- [ ] Progress bar implementada com `role="progressbar"` e `aria-valuenow`.
- [ ] Skeleton com `aria-hidden="true"` e texto acessível alternativo via `role="status"`.
- [ ] Transição suave (fade-in 200ms) de skeleton/loading para conteúdo.
- [ ] Skeleton nunca exibido por menos de 500ms.

### Geral
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Todos os estados renderizam corretamente em 1366×768.
- [ ] Navegação por teclado funcional em todos os CTAs.
- [ ] Stories no Storybook para cada tipo de estado (empty, erro, loading).

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 7 (Tom de Voz: Mensagens de Erro, Estados Vazios)
- [Sprint 3 — Alert](../sprint_3/task_4_componente_alert.md) — Para alertas inline de erro
- [Sprint 4 — Task 1 (Layout)](task_1_layout_pagina.md) — Template de página
- [Sprint 4 — Task 3 (Listagem)](task_3_pagina_listagem.md) — Contexto de uso de empty states

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta** — Estados de feedback são essenciais para a experiência do usuário.

## Dependências

- Sprint 1 concluída (tokens, tipografia, cores).
- Sprint 2 concluída (Button para CTAs).
- Sprint 3 — Task 1 (Navbar) para páginas de erro com navbar.
- Sprint 4 — Task 1 (Layout Shell) para contexto de página.
