# Task 2 — Componente Modal / Dialog

## Descrição

Implementar o componente **Modal (Dialog)** do Datta System — janela sobreposta que exige atenção e ação do usuário antes de retornar ao conteúdo principal. O Modal é essencial para confirmações, formulários rápidos, alertas críticos e visualização de detalhes sem sair da página atual.

---

## Objetivo

Criar um componente Modal acessível e reutilizável, com gerenciamento correto de foco (focus trap), fechamento por teclado, overlay e variantes de tamanho adequadas para a resolução-alvo 1366×768.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<!-- Overlay + Modal -->
<div class="ds-modal-overlay" aria-hidden="true"></div>

<div class="ds-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
  <div class="ds-modal__container ds-modal__container--md">

    <!-- Header -->
    <header class="ds-modal__header">
      <h2 class="ds-modal__title" id="modal-title">Título do Modal</h2>
      <button class="ds-modal__close" aria-label="Fechar modal">
        <span aria-hidden="true">✕</span>
      </button>
    </header>

    <!-- Body -->
    <div class="ds-modal__body" id="modal-desc">
      <p>Conteúdo do modal. Pode conter texto, formulários ou qualquer estrutura HTML.</p>
    </div>

    <!-- Footer -->
    <footer class="ds-modal__footer">
      <button class="ds-btn ds-btn--secondary">Cancelar</button>
      <button class="ds-btn ds-btn--primary">Confirmar</button>
    </footer>

  </div>
</div>
```

### 2. Anatomia do Componente

| Área | Conteúdo | Obrigatoriedade |
|------|----------|-----------------|
| **Overlay** | Fundo semi-transparente escuro atrás do modal | Obrigatório |
| **Header** | Título + botão de fechar (X) | Obrigatório |
| **Body** | Conteúdo livre (texto, formulários, listas, etc.) | Obrigatório |
| **Footer** | Botões de ação (confirmar, cancelar, etc.) | Opcional |

### 3. Variantes de Tamanho

| Tamanho | Largura | Uso recomendado |
|---------|---------|-----------------|
| **sm** | `400px` | Confirmações simples, alertas curtos |
| **md** | `560px` | Formulários rápidos, detalhes (padrão) |
| **lg** | `720px` | Conteúdo extenso, tabelas dentro de modal |
| **fullscreen** | `calc(100vw - 64px)` × `calc(100vh - 64px)` | Fluxos complexos, edição completa |

- Altura máxima: `calc(100vh - 64px)`. Se o conteúdo exceder, o **body** recebe `overflow-y: auto`.
- Em 1366×768, o tamanho `lg` não deve causar overflow horizontal.

### 4. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo overlay | `--ds-color-overlay` | `rgba(0, 0, 0, 0.5)` |
| Fundo modal | `--ds-color-neutral-white` | Branco |
| Borda modal | nenhuma | — |
| Sombra | `--ds-shadow-xl` | Sombra elevada |
| Border-radius | `--ds-radius-lg` | `8px` |
| Título (fonte) | `--ds-font-size-lg` | `18px` |
| Título (peso) | `--ds-font-weight-semibold` | `600` |
| Título (cor) | `--ds-color-neutral-900` | Cinza escuro |
| Corpo (fonte) | `--ds-font-size-base` | `16px` |
| Corpo (cor) | `--ds-color-neutral-700` | Cinza médio |
| Padding header/footer | `--ds-spacing-16` `--ds-spacing-24` | `16px` / `24px` |
| Padding body | `--ds-spacing-24` | `24px` |
| Gap footer botões | `--ds-spacing-12` | `12px` |
| Transição | `--ds-transition-normal` | `200ms ease` |
| Z-index overlay | `--ds-z-modal-overlay` | `1000` |
| Z-index modal | `--ds-z-modal` | `1001` |

### 5. Estados Visuais

| Estado | Descrição Visual |
|--------|-----------------|
| **Fechado** | Modal e overlay não renderizados no DOM ou com `display: none` |
| **Abrindo** | Overlay: `opacity 0→0.5`. Modal: `opacity 0→1` + `scale(0.95)→scale(1)` + `translateY(8px)→translateY(0)`. Duração: `200ms` |
| **Aberto** | Overlay visível, modal centralizado vertical e horizontalmente |
| **Fechando** | Animação inversa da abertura. Duração: `150ms` |
| **Scroll interno** | Body com `overflow-y: auto`, header e footer fixos |

### 6. Comportamento

#### Abertura
- Ao abrir, o **foco move automaticamente** para o primeiro elemento focável dentro do modal (botão de fechar ou primeiro input).
- O `body` da página recebe `overflow: hidden` para impedir scroll do conteúdo atrás.
- Adicionar atributo `inert` ou `aria-hidden="true"` no conteúdo atrás do modal.

#### Focus Trap (Obrigatório)
- O foco **não pode escapar** do modal enquanto ele estiver aberto.
- `Tab` cicla entre os elementos focáveis dentro do modal.
- `Shift + Tab` cicla na direção inversa.
- Se houver apenas um elemento focável, `Tab` mantém o foco nele.

#### Fechamento
- **Botão X** no header fecha o modal.
- **Tecla `Esc`** fecha o modal.
- **Clique no overlay** fecha o modal (configurável — pode ser desabilitado para modais críticos).
- Ao fechar, o foco **retorna ao elemento que abriu o modal** (trigger).

#### Scroll
- Se o conteúdo do body exceder a altura disponível, apenas o body faz scroll.
- Header e footer permanecem fixos/visíveis.
- Barra de scroll estilizada de forma discreta.

### 7. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Role | `role="dialog"` com `aria-modal="true"` |
| Label | `aria-labelledby` apontando para o `id` do título |
| Descrição | `aria-describedby` apontando para o `id` do body (quando aplicável) |
| Focus trap | Foco preso dentro do modal via JavaScript |
| Retorno de foco | Foco retorna ao trigger ao fechar |
| Escape | `Esc` sempre fecha o modal |
| Conteúdo atrás | `aria-hidden="true"` ou atributo `inert` no conteúdo principal |
| Anúncio | O modal deve ser anunciado pelo leitor de tela ao abrir |
| Contraste | Todos os textos e botões dentro do modal seguem WCAG AA |

### 8. Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Move foco para o próximo elemento focável dentro do modal (circular) |
| `Shift + Tab` | Move foco para o elemento focável anterior (circular) |
| `Esc` | Fecha o modal e retorna foco ao trigger |
| `Enter` / `Space` | Ativa o botão/link focado |

---

## Variantes Funcionais

### 1. Modal de Confirmação
Header com título de pergunta + body com texto explicativo + footer com botões "Cancelar" e "Confirmar". Uso: exclusões, ações irreversíveis.

### 2. Modal de Confirmação Destrutiva
Similar ao anterior, mas botão de confirmação usa variante `destructive` (vermelho). Título como "Excluir cadastro?" e texto explicando as consequências.

### 3. Modal de Formulário
Body contendo campos de formulário (inputs, selects, etc. da Sprint 2). Footer com "Cancelar" e "Salvar". Uso: cadastro rápido, edição inline.

### 4. Modal Informativo
Apenas header + body com conteúdo informativo. Footer com único botão "Entendi" ou "Fechar". Uso: termos, ajuda contextual.

---

## Critérios de Aceite

- [ ] Componente Modal implementado com estrutura BEM conforme especificação.
- [ ] Header com título e botão de fechar (X) funcional.
- [ ] Body com conteúdo livre e scroll interno quando necessário.
- [ ] Footer com botões utilizando componente Button da Sprint 2.
- [ ] 4 tamanhos disponíveis: sm, md, lg, fullscreen.
- [ ] Overlay semi-transparente renderizado atrás do modal.
- [ ] Animação de abertura e fechamento suave.
- [ ] **Focus trap implementado** — foco não escapa do modal.
- [ ] Foco move para o primeiro elemento focável ao abrir.
- [ ] Foco retorna ao elemento trigger ao fechar.
- [ ] `Esc` fecha o modal.
- [ ] Clique no overlay fecha o modal (configurável).
- [ ] `role="dialog"`, `aria-modal="true"`, `aria-labelledby` implementados.
- [ ] Conteúdo atrás do modal recebe `aria-hidden="true"` ou `inert`.
- [ ] Scroll da página bloqueado enquanto modal está aberto.
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] 4 variantes funcionais documentadas (confirmação, destrutiva, formulário, informativo).
- [ ] Story criada no Storybook com todos os tamanhos e variantes.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seções 2 (Princípios) e 7 (Tom de Voz)
- [Sprint 2 — Componente Button](../sprint_2/task_1_componente_botao.md) — Botões no footer do modal
- [Sprint 2 — Componente Input](../sprint_2/task_2_componente_input.md) — Formulários dentro do modal
- [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

---

## Estimativa

**2 dias**

## Prioridade

**Alta** — Componente essencial para confirmações, formulários e interações que exigem atenção do usuário.

## Dependências

- Sprint 1 (tokens de cor, tipografia, espaçamento, sombras)
- Sprint 2 — Task 1 (Button) para botões de ação no footer
- Sprint 2 — Task 2 (Input), Task 3 (Textarea), Task 4 (Select) para formulários dentro do modal
