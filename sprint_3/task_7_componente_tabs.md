# Task 7 — Componente Tabs (Abas)

## Descrição

Implementar o componente **Tabs** do Datta System — sistema de abas para organizar conteúdo em seções alternáveis dentro de uma mesma página. Tabs permitem agrupar informações relacionadas sem navegar para outra URL, reduzindo a complexidade visual e otimizando o espaço em 1366×768.

---

## Objetivo

Criar um componente Tabs reutilizável e acessível, com navegação por setas, ativação manual, associação correta entre tab e painel, e suporte a ícones opcionais.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<div class="ds-tabs">
  <!-- Tab List -->
  <div class="ds-tabs__list" role="tablist" aria-label="Detalhes do processo">
    <button class="ds-tabs__tab ds-tabs__tab--active" role="tab"
            id="tab-dados" aria-selected="true" aria-controls="panel-dados" tabindex="0">
      Dados Gerais
    </button>
    <button class="ds-tabs__tab" role="tab"
            id="tab-documentos" aria-selected="false" aria-controls="panel-documentos" tabindex="-1">
      Documentos
    </button>
    <button class="ds-tabs__tab" role="tab"
            id="tab-historico" aria-selected="false" aria-controls="panel-historico" tabindex="-1">
      Histórico
    </button>
    <button class="ds-tabs__tab" role="tab"
            id="tab-disabled" aria-selected="false" aria-controls="panel-disabled" tabindex="-1" disabled aria-disabled="true">
      Parecer
    </button>
  </div>

  <!-- Tab Panels -->
  <div class="ds-tabs__panel ds-tabs__panel--active" role="tabpanel"
       id="panel-dados" aria-labelledby="tab-dados" tabindex="0">
    <p>Conteúdo da aba Dados Gerais...</p>
  </div>
  <div class="ds-tabs__panel" role="tabpanel"
       id="panel-documentos" aria-labelledby="tab-documentos" tabindex="0" hidden>
    <p>Conteúdo da aba Documentos...</p>
  </div>
  <div class="ds-tabs__panel" role="tabpanel"
       id="panel-historico" aria-labelledby="tab-historico" tabindex="0" hidden>
    <p>Conteúdo da aba Histórico...</p>
  </div>
  <div class="ds-tabs__panel" role="tabpanel"
       id="panel-disabled" aria-labelledby="tab-disabled" tabindex="0" hidden>
    <p>Conteúdo da aba Parecer...</p>
  </div>
</div>
```

### 2. Anatomia do Componente

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Tabs container** | Wrapper geral do componente | Sim |
| **Tab list** | Container dos botões de aba com `role="tablist"` | Sim |
| **Tab** | Botão individual de cada aba com `role="tab"` | Sim |
| **Indicador ativo** | Borda inferior ou highlight visual na tab ativa | Sim |
| **Tab panel** | Container do conteúdo associado à aba com `role="tabpanel"` | Sim |
| **Ícone** | Ícone opcional ao lado do texto da aba | Não |
| **Badge/Contador** | Número ou badge ao lado do texto (ex: "Documentos (3)") | Não |

### 3. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo tab list | `--ds-color-neutral-white` | Branco |
| Borda inferior tab list | `--ds-color-neutral-200` | `1px solid` cinza claro |
| Texto tab (inativo) | `--ds-color-neutral-500` | Cinza médio |
| Texto tab (ativo) | `--ds-color-primary-600` | Azul escuro |
| Texto tab (hover) | `--ds-color-neutral-700` | Cinza escuro |
| Texto tab (disabled) | `--ds-color-neutral-300` | Cinza claro |
| Indicador ativo | `--ds-color-primary-500` | Azul médio, `2px` de espessura |
| Fundo tab hover | `--ds-color-neutral-50` | Cinza muito sutil |
| Fonte | `--ds-font-size-sm` | `14px` |
| Peso (inativo) | `--ds-font-weight-medium` | `500` |
| Peso (ativo) | `--ds-font-weight-semibold` | `600` |
| Padding tab | `--ds-spacing-12` `--ds-spacing-16` | `12px` vertical / `16px` horizontal |
| Gap entre tabs | `--ds-spacing-0` | `0px` (tabs adjacentes) |
| Padding panel | `--ds-spacing-24` | `24px` |
| Transição | `--ds-transition-fast` | `150ms ease` |

### 4. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Inactive** | Texto cinza médio, peso medium, sem indicador |
| **Hover** | Fundo cinza muito sutil, texto cinza escuro |
| **Focus** | Outline de foco padrão (azul, 2px) ao redor do botão tab |
| **Active/Selected** | Texto azul escuro, peso semibold, borda inferior azul de 2px |
| **Disabled** | Texto cinza claro, cursor not-allowed, não focável |

### 5. Comportamento

#### Ativação
- **Ativação manual:** Navegar com setas muda o foco, mas não ativa a tab. `Enter` ou `Space` ativa a tab focada e exibe o painel correspondente.
- Ao ativar uma tab, o painel anterior é ocultado (`hidden`) e o novo painel é exibido.
- O indicador visual (borda inferior) move-se para a tab ativa com transição suave.

#### Painéis
- Apenas um painel é visível por vez.
- Painéis inativos recebem atributo `hidden`.
- O conteúdo do painel pode ser qualquer HTML (texto, formulários, tabelas, etc.).

#### Overflow de Tabs
- Se houver muitas tabs para a largura disponível em 1366×768:
  - Exibir botões de scroll lateral (← →) para navegar entre tabs.
  - Ou permitir scroll horizontal com indicador visual de overflow.
- Tabs não devem quebrar para múltiplas linhas.

#### Animação
- Transição do indicador ativo: deslocamento horizontal suave (`transform: translateX`) em `150ms`.
- Painel: transição de `opacity 0→1` em `150ms` ao ativar (sem alterar layout).

### 6. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Tab list | `role="tablist"` com `aria-label` descritivo |
| Tab | `role="tab"` com `aria-selected`, `aria-controls`, `id` |
| Panel | `role="tabpanel"` com `aria-labelledby`, `id`, `tabindex="0"` |
| Seleção | `aria-selected="true"` na tab ativa, `"false"` nas demais |
| Hidden | Painéis inativos com atributo `hidden` |
| Focus management | Apenas a tab ativa tem `tabindex="0"`; demais têm `tabindex="-1"` |
| Disabled | `disabled` + `aria-disabled="true"` em tabs desabilitadas |
| Contraste | Texto ativo sobre fundo branco ≥ 4.5:1 |

### 7. Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Entra no tablist (foca na tab ativa); próximo Tab vai para o painel |
| `Arrow Right` | Move foco para a próxima tab (circular; pula disabled) |
| `Arrow Left` | Move foco para a tab anterior (circular; pula disabled) |
| `Enter` / `Space` | Ativa a tab focada e exibe o painel correspondente |
| `Home` | Move foco para a primeira tab (não disabled) |
| `End` | Move foco para a última tab (não disabled) |
| `Tab` (no painel) | Navega entre elementos focáveis dentro do painel |

---

## Variantes

### 1. Tabs Padrão (Underline)
Borda inferior como indicador ativo. Estilo mais comum e limpo.

### 2. Tabs com Ícone
Cada tab possui um ícone à esquerda do texto. Ícones de 16px em linha com o texto.

### 3. Tabs com Badge
Cada tab pode ter um badge/contador ao lado do texto (ex: "Documentos (3)"). Badge usa estilo do componente de badge.

### 4. Tabs Contained (Boxed)
Tabs com fundo em card (bordas visíveis), a tab ativa tem fundo branco conectando-se visualmente ao painel. Útil para seções mais destacadas.

---

## Critérios de Aceite

- [ ] Componente Tabs implementado com `role="tablist"`, `role="tab"`, `role="tabpanel"`.
- [ ] Associação correta entre tab e painel via `aria-controls` / `aria-labelledby`.
- [ ] `aria-selected` atualizado dinamicamente.
- [ ] Apenas um painel visível por vez (demais com `hidden`).
- [ ] Focus management: tab ativa com `tabindex="0"`, demais com `tabindex="-1"`.
- [ ] Navegação por setas (Arrow Left/Right) entre tabs com loop circular.
- [ ] Ativação manual: setas movem foco, Enter/Space ativa a tab.
- [ ] Tabs disabled puladas na navegação por setas.
- [ ] Home/End movem para primeira/última tab.
- [ ] Indicador visual (borda inferior) com transição suave.
- [ ] Todos os estados visuais: inactive, hover, focus, active, disabled.
- [ ] Suporte a overflow com scroll horizontal ou botões de navegação.
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] 4 variantes documentadas (padrão, com ícone, com badge, contained).
- [ ] Story criada no Storybook com todas as variantes e estados.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 2 (Princípios de Clareza e Eficiência)
- [WAI-ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta** — Componente essencial para organizar informações em telas de detalhe e formulários complexos.

## Dependências

- Sprint 1 (tokens de cor, tipografia, espaçamento)
- (Nenhuma dependência direta de componentes da Sprint 2, mas o conteúdo dos painéis pode usar qualquer componente)
