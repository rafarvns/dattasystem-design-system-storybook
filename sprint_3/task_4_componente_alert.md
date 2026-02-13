# Task 4 — Componente Alert (Alertas e Feedback)

## Descrição

Implementar o componente **Alert** do Datta System — mensagens de feedback visual para informar, alertar, confirmar ou sinalizar erros ao usuário. Alertas são fundamentais em sistemas governamentais para comunicar o resultado de ações, avisos importantes e estados do sistema de forma clara e acessível.

---

## Objetivo

Criar um componente Alert reutilizável com 4 variantes semânticas (info, success, warning, error), suporte a dismissão, ícones contextuais, e anúncio automático para leitores de tela via ARIA live regions.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<div class="ds-alert ds-alert--info" role="alert" aria-live="polite">
  <div class="ds-alert__icon" aria-hidden="true">
    <!-- Ícone contextual -->
    ℹ️
  </div>
  <div class="ds-alert__content">
    <strong class="ds-alert__title">Informação importante</strong>
    <p class="ds-alert__message">O sistema estará em manutenção no dia 15/02/2026 das 22h às 06h. Salve seu trabalho antes desse horário.</p>
  </div>
  <button class="ds-alert__dismiss" aria-label="Fechar alerta">
    <span aria-hidden="true">✕</span>
  </button>
</div>
```

### 2. Anatomia do Componente

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Ícone** | Ícone contextual à esquerda (info, check, warning, error) | Sim |
| **Título** | Texto curto em destaque (bold) | Não |
| **Mensagem** | Texto descritivo do alerta | Sim |
| **Botão de fechar** | Botão X para dispensar o alerta | Não |

### 3. Variantes Semânticas

| Variante | Classe | Ícone | Cor de fundo | Cor da borda | Cor do ícone/título | Uso |
|----------|--------|-------|-------------|-------------|---------------------|-----|
| **Info** | `ds-alert--info` | ℹ️ (info circle) | `--ds-color-blue-50` | `--ds-color-blue-300` | `--ds-color-blue-600` | Informações gerais, avisos neutros |
| **Success** | `ds-alert--success` | ✅ (check circle) | `--ds-color-green-50` | `--ds-color-green-300` | `--ds-color-green-600` | Ações concluídas com sucesso |
| **Warning** | `ds-alert--warning` | ⚠️ (triangle) | `--ds-color-yellow-50` | `--ds-color-yellow-400` | `--ds-color-yellow-700` | Avisos que requerem atenção |
| **Error** | `ds-alert--error` | ❌ (x circle) | `--ds-color-red-50` | `--ds-color-red-300` | `--ds-color-red-600` | Erros, falhas, ações bloqueadas |

### 4. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Border-radius | `--ds-radius-md` | `6px` |
| Borda esquerda | — | `4px solid` (cor da variante) |
| Borda geral | — | `1px solid` (cor da borda da variante) |
| Padding | `--ds-spacing-12` `--ds-spacing-16` | `12px` vertical / `16px` horizontal |
| Gap ícone-conteúdo | `--ds-spacing-12` | `12px` |
| Título (fonte) | `--ds-font-size-sm` | `14px` |
| Título (peso) | `--ds-font-weight-semibold` | `600` |
| Mensagem (fonte) | `--ds-font-size-sm` | `14px` |
| Mensagem (peso) | `--ds-font-weight-regular` | `400` |
| Mensagem (cor) | `--ds-color-neutral-700` | Cinza médio |
| Ícone tamanho | — | `20px` |
| Botão dismiss | — | `20px`, cinza, hover com fundo sutil |
| Transição dismiss | `--ds-transition-fast` | `150ms ease` |

### 5. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Default** | Alerta visível com fundo colorido, borda esquerda de destaque, ícone e texto |
| **Hover (dismiss)** | Botão X com fundo sutil circular ao hover |
| **Focus (dismiss)** | Outline de foco padrão no botão X |
| **Dismissing** | Animação de saída: `opacity 1→0` + `height auto→0` + `margin/padding colapsa`. Duração: `200ms` |
| **Dismissed** | Elemento removido do DOM ou `display: none` |

### 6. Comportamento

#### Exibição
- Alertas podem ser **estáticos** (sempre visíveis na página) ou **dinâmicos** (aparecem após uma ação).
- Alertas dinâmicos devem ter animação de entrada: `opacity 0→1` + `translateY(-8px)→translateY(0)`.

#### Dismissão
- Se o botão de fechar estiver presente, clicar nele remove/oculta o alerta.
- Animação de saída suave antes da remoção.
- Alertas críticos (erros de sistema) podem **não ter** botão de fechar.

#### Auto-dismiss (Opcional)
- Alertas de sucesso podem desaparecer automaticamente após um tempo configurável (ex: 5 segundos).
- Incluir barra de progresso visual indicando o tempo restante.
- Hover sobre o alerta pausa o timer de auto-dismiss.

#### Empilhamento
- Múltiplos alertas são empilhados verticalmente com gap de `--ds-spacing-8`.
- Novos alertas aparecem no topo da pilha.

### 7. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Role | `role="alert"` para alertas importantes (error, warning) |
| Live region | `aria-live="polite"` para info e success; `aria-live="assertive"` para error |
| Ícone | `aria-hidden="true"` no ícone (informação transmitida pelo texto) |
| Dismiss | `aria-label="Fechar alerta"` no botão de fechar |
| Contraste | Texto sobre fundo colorido com contraste ≥ 4.5:1 |
| Não depender apenas de cor | O ícone + texto contextual comunicam o tipo sem depender da cor |
| Auto-dismiss | Alertas com auto-dismiss devem ser anunciados antes de desaparecer |

### 8. Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Move foco para o botão de fechar (se existir) |
| `Enter` / `Space` | Ativa o botão de fechar |
| `Esc` | (Opcional) Fecha o alerta focado |

---

## Variantes de Layout

### 1. Alert Padrão (com título)
Ícone + título bold + mensagem descritiva + botão dismiss. Layout completo.

### 2. Alert Compacto (sem título)
Ícone + mensagem apenas. Para feedbacks rápidos e curtos.

### 3. Alert com Ação
Ícone + conteúdo + botão de ação (link ou botão inline). Ex: "Sua sessão vai expirar em 5 minutos. [Renovar sessão]".

### 4. Alert Banner (Full Width)
Ocupa 100% da largura do container, sem border-radius, posicionado no topo da página. Para avisos de sistema globais (manutenção, versão nova).

---

## Critérios de Aceite

- [ ] Componente Alert implementado com estrutura BEM conforme especificação.
- [ ] 4 variantes semânticas funcionais: info, success, warning, error.
- [ ] Cada variante com cores, ícone e significado visual distinto.
- [ ] Borda esquerda de 4px com cor da variante.
- [ ] Título opcional em bold.
- [ ] Botão de fechar (dismiss) funcional com animação de saída.
- [ ] `role="alert"` e `aria-live` implementados corretamente.
- [ ] Ícones com `aria-hidden="true"`.
- [ ] Tipo do alerta comunicado por texto/ícone, não apenas por cor.
- [ ] Animação de entrada e saída suaves.
- [ ] Empilhamento de múltiplos alertas com espaçamento correto.
- [ ] Navegação por teclado: Tab para dismiss, Enter/Space para fechar.
- [ ] Contraste WCAG AA em todas as variantes.
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] 4 variantes de layout documentadas (padrão, compacto, com ação, banner).
- [ ] Story criada no Storybook com todas as variantes e estados.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 3 (Cores com significado), 7 (Tom de Voz — mensagens de erro e sucesso)
- [WAI-ARIA Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)

---

## Estimativa

**1 dia**

## Prioridade

**Alta** — Componente essencial para feedback de ações e comunicação de estados ao usuário.

## Dependências

- Sprint 1 (tokens de cor, tipografia, espaçamento)
- (Nenhuma dependência direta de componentes da Sprint 2)
