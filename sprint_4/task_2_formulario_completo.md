# Task 2 — Padrão de Formulário Completo

## Descrição

Implementar o **padrão de formulário completo** do Datta System — uma composição real de todos os componentes de formulário da Sprint 2 (Input, Textarea, Select, Checkbox, Radio) com o Button, organizados em seções lógicas, com validação inline, feedback de submissão e fluxo de navegação claro. Este padrão serve como referência para qualquer formulário construído no sistema.

---

## Objetivo

Criar um padrão de formulário reutilizável e documentado que demonstre a composição correta dos componentes base, com validação, acessibilidade e usabilidade otimizadas para o contexto governamental em 1366×768.

---

## Requisitos

### 1. Estrutura HTML (BEM)

```html
<form class="ds-form" novalidate>
  <!-- Seção do Formulário -->
  <fieldset class="ds-form__section">
    <legend class="ds-form__section-title">Dados Pessoais</legend>
    <p class="ds-form__section-description">Informações básicas do cidadão.</p>

    <!-- Grid de Campos -->
    <div class="ds-form__grid">
      <!-- Campo de largura total -->
      <div class="ds-form__field ds-form__field--full">
        <label class="ds-input__label" for="nome">
          Nome completo <span class="ds-input__required" aria-hidden="true">*</span>
        </label>
        <input class="ds-input" type="text" id="nome" name="nome"
               required aria-required="true"
               aria-describedby="nome-helper" />
        <span class="ds-input__helper" id="nome-helper">
          Informe o nome completo conforme documento de identidade.
        </span>
      </div>

      <!-- Campos lado a lado (half) -->
      <div class="ds-form__field ds-form__field--half">
        <label class="ds-input__label" for="cpf">
          CPF <span class="ds-input__required" aria-hidden="true">*</span>
        </label>
        <input class="ds-input" type="text" id="cpf" name="cpf"
               required aria-required="true"
               inputmode="numeric" maxlength="14"
               placeholder="000.000.000-00"
               aria-describedby="cpf-error" />
        <span class="ds-input__error" id="cpf-error" role="alert" hidden>
          O CPF informado não parece estar correto. Verifique se possui 11 dígitos.
        </span>
      </div>

      <div class="ds-form__field ds-form__field--half">
        <label class="ds-input__label" for="nascimento">
          Data de nascimento <span class="ds-input__required" aria-hidden="true">*</span>
        </label>
        <input class="ds-input" type="date" id="nascimento" name="nascimento"
               required aria-required="true" />
      </div>

      <!-- Select -->
      <div class="ds-form__field ds-form__field--half">
        <label class="ds-input__label" for="estado">Estado</label>
        <select class="ds-select" id="estado" name="estado">
          <option value="" disabled selected>Selecione o estado</option>
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="MG">Minas Gerais</option>
          <!-- ... demais estados ... -->
        </select>
      </div>

      <div class="ds-form__field ds-form__field--half">
        <label class="ds-input__label" for="cidade">Cidade</label>
        <input class="ds-input" type="text" id="cidade" name="cidade" />
      </div>

      <!-- Textarea -->
      <div class="ds-form__field ds-form__field--full">
        <label class="ds-input__label" for="observacoes">Observações</label>
        <textarea class="ds-textarea" id="observacoes" name="observacoes"
                  rows="4" maxlength="500"
                  aria-describedby="obs-counter"></textarea>
        <span class="ds-textarea__counter" id="obs-counter">0 / 500 caracteres</span>
      </div>
    </div>
  </fieldset>

  <!-- Segunda Seção -->
  <fieldset class="ds-form__section">
    <legend class="ds-form__section-title">Preferências</legend>

    <div class="ds-form__grid">
      <!-- Radio Group -->
      <div class="ds-form__field ds-form__field--full">
        <fieldset class="ds-radio-group">
          <legend class="ds-radio-group__label">Tipo de atendimento</legend>
          <div class="ds-radio-group__options">
            <label class="ds-radio">
              <input type="radio" name="atendimento" value="presencial" class="ds-radio__input" />
              <span class="ds-radio__mark"></span>
              <span class="ds-radio__text">Presencial</span>
            </label>
            <label class="ds-radio">
              <input type="radio" name="atendimento" value="online" class="ds-radio__input" />
              <span class="ds-radio__mark"></span>
              <span class="ds-radio__text">Online</span>
            </label>
          </div>
        </fieldset>
      </div>

      <!-- Checkbox Group -->
      <div class="ds-form__field ds-form__field--full">
        <fieldset class="ds-checkbox-group">
          <legend class="ds-checkbox-group__label">Documentos apresentados</legend>
          <div class="ds-checkbox-group__options">
            <label class="ds-checkbox">
              <input type="checkbox" name="documentos" value="rg" class="ds-checkbox__input" />
              <span class="ds-checkbox__mark"></span>
              <span class="ds-checkbox__text">RG</span>
            </label>
            <label class="ds-checkbox">
              <input type="checkbox" name="documentos" value="cpf" class="ds-checkbox__input" />
              <span class="ds-checkbox__mark"></span>
              <span class="ds-checkbox__text">CPF</span>
            </label>
            <label class="ds-checkbox">
              <input type="checkbox" name="documentos" value="comprovante" class="ds-checkbox__input" />
              <span class="ds-checkbox__mark"></span>
              <span class="ds-checkbox__text">Comprovante de residência</span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  </fieldset>

  <!-- Termos de Aceite -->
  <div class="ds-form__terms">
    <label class="ds-checkbox">
      <input type="checkbox" name="termos" class="ds-checkbox__input"
             required aria-required="true" />
      <span class="ds-checkbox__mark"></span>
      <span class="ds-checkbox__text">
        Li e aceito os <a href="#" class="ds-link">termos de uso</a> e a
        <a href="#" class="ds-link">política de privacidade</a>.
      </span>
    </label>
  </div>

  <!-- Barra de Ações -->
  <div class="ds-form__actions">
    <button type="submit" class="ds-btn ds-btn--primary">Salvar cadastro</button>
    <button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>
  </div>

  <!-- Feedback de Submissão (oculto por padrão) -->
  <div class="ds-form__feedback ds-form__feedback--success" role="alert" hidden>
    <span class="ds-form__feedback-icon" aria-hidden="true">✓</span>
    <div class="ds-form__feedback-content">
      <strong>Cadastro salvo com sucesso.</strong>
      <p>Protocolo: 2026.0213.001. Agora você pode emitir o comprovante.</p>
    </div>
  </div>
</form>
```

### 2. Anatomia do Formulário

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Form** | Container `<form>` com `novalidate` (validação via JS) | Sim |
| **Section (fieldset)** | Agrupamento lógico de campos com `<legend>` | Sim (mín. 1) |
| **Section Title** | Título da seção (`<legend>`) | Sim |
| **Section Description** | Texto explicativo da seção | Não |
| **Grid** | Container CSS Grid para organizar campos | Sim |
| **Field** | Wrapper individual de cada campo | Sim |
| **Label** | Rótulo acessível do campo | Sim |
| **Input/Select/Textarea** | Componente de entrada (Sprint 2) | Sim |
| **Helper Text** | Dica ou instrução contextual | Não |
| **Error Message** | Mensagem de erro inline | Não (mas obrig. em validação) |
| **Radio/Checkbox Group** | Agrupamento de opções com `<fieldset>` | Conforme necessidade |
| **Terms** | Checkbox de aceite de termos | Não |
| **Actions** | Barra com botões de submissão e cancelamento | Sim |
| **Feedback** | Mensagem de sucesso/erro pós-submissão | Sim |

### 3. Design Tokens Utilizados

| Propriedade | Token | Valor |
|-------------|-------|-------|
| Fundo do form | `--ds-color-neutral-white` | Branco |
| Borda da seção | `--ds-color-neutral-200` | Cinza claro |
| Título da seção | `--ds-font-size-lg` | `18px` |
| Peso do título | `--ds-font-weight-semibold` | `600` |
| Cor do título | `--ds-color-neutral-800` | Cinza muito escuro |
| Descrição da seção | `--ds-font-size-sm` | `14px` |
| Cor da descrição | `--ds-color-neutral-500` | Cinza médio |
| Gap entre seções | `--ds-spacing-32` | `32px` |
| Gap entre campos | `--ds-spacing-16` | `16px` |
| Gap no grid | `--ds-spacing-16` (vertical) / `--ds-spacing-24` (horizontal) | 16px / 24px |
| Padding da seção | `--ds-spacing-24` | `24px` |
| Asterisco obrigatório | `--ds-color-danger-500` | Vermelho |
| Error text | `--ds-color-danger-500` | Vermelho |
| Error icon | `--ds-color-danger-500` | Vermelho |
| Success feedback fundo | `--ds-color-success-50` | Verde muito claro |
| Success feedback borda | `--ds-color-success-500` | Verde |
| Success feedback texto | `--ds-color-success-700` | Verde escuro |
| Error feedback fundo | `--ds-color-danger-50` | Vermelho muito claro |
| Error feedback borda | `--ds-color-danger-500` | Vermelho |
| Botão primário | `--ds-color-primary-500` | Azul |
| Botão secundário | Outline `--ds-color-primary-500` | Azul contornado |
| Transição | `--ds-transition-fast` | `150ms ease` |

### 4. Layout Grid

```
┌───────────────────────────────────────────────────┐
│ ● Dados Pessoais                                  │
│   Informações básicas do cidadão.                 │
│ ┌───────────────────────────────────────────────┐ │
│ │ Nome completo                          [full] │ │
│ ├──────────────────────┬────────────────────────┤ │
│ │ CPF             [half] │ Data nasc.    [half] │ │
│ ├──────────────────────┬────────────────────────┤ │
│ │ Estado          [half] │ Cidade        [half] │ │
│ ├───────────────────────────────────────────────┤ │
│ │ Observações                            [full] │ │
│ └───────────────────────────────────────────────┘ │
│                                                   │
│ ● Preferências                                    │
│ ┌───────────────────────────────────────────────┐ │
│ │ Tipo de atendimento: ○ Presencial  ○ Online   │ │
│ │ Documentos: ☐ RG  ☐ CPF  ☐ Comprovante       │ │
│ └───────────────────────────────────────────────┘ │
│                                                   │
│ ☐ Li e aceito os termos de uso...                 │
│                                                   │
│ [Salvar cadastro]  [Cancelar]                     │
└───────────────────────────────────────────────────┘
```

**CSS Grid para campos:**
```css
.ds-form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ds-spacing-16) var(--ds-spacing-24);
}

.ds-form__field--full {
  grid-column: 1 / -1;
}

.ds-form__field--half {
  grid-column: span 1;
}

.ds-form__field--third {
  /* Para 3 campos em linha, se necessário */
}
```

### 5. Validação

#### Estratégia de Validação
- **Validação inline** — ao sair do campo (`blur`) + ao submeter.
- **Não usar `required` nativo do navegador** — usar `novalidate` no form e validar via JavaScript para controle total das mensagens.
- **Mensagens educativas** (conforme Tom de Voz do DESIGN_SYSTEM_CONCEPT.md).

#### Fluxo de Validação

```
1. Usuário preenche campo e sai (blur)
   → Se inválido: exibir erro inline imediatamente
   → Se válido: remover erro (se existia)

2. Usuário clica "Salvar cadastro"
   → Validar TODOS os campos
   → Se há erros:
     a) Scroll até o primeiro campo com erro
     b) Foco no primeiro campo com erro
     c) Exibir resumo de erros no topo do formulário (opcional, recomendado)
     d) Anunciar erros para leitor de tela via aria-live
   → Se tudo válido:
     a) Exibir loading no botão (desabilitar botões)
     b) Submeter dados
     c) Exibir feedback de sucesso ou erro

3. Usuário corrige campo com erro (input/change)
   → Revalidar em tempo real
   → Remover erro assim que o campo ficar válido
```

#### Mensagens de Erro (Tom de Voz)

| Campo | Mensagem |
|-------|----------|
| Nome completo | "Informe o nome completo conforme documento de identidade." |
| CPF | "O CPF informado não parece estar correto. Verifique se possui 11 dígitos." |
| Data de nascimento | "Informe uma data de nascimento válida." |
| Select vazio | "Selecione uma opção para continuar." |
| Termos não aceitos | "É necessário aceitar os termos de uso para prosseguir." |
| Campo genérico vazio | "Este campo é obrigatório." |

#### Resumo de Erros (Opcional, Recomendado)

```html
<div class="ds-form__error-summary" role="alert" aria-live="polite">
  <h2 class="ds-form__error-summary-title">Corrija os seguintes erros para continuar:</h2>
  <ul class="ds-form__error-summary-list">
    <li><a href="#cpf">CPF — O CPF informado não parece estar correto.</a></li>
    <li><a href="#termos">Termos — É necessário aceitar os termos de uso.</a></li>
  </ul>
</div>
```

### 6. Estados do Formulário

| Estado | Descrição | Comportamento |
|--------|-----------|---------------|
| **Pristine** | Formulário recém-carregado | Nenhum erro visível, campos em estado default |
| **Dirty** | Usuário já interagiu com algum campo | Erros aparecem em campos tocados após blur |
| **Submitting** | Formulário sendo enviado | Botão com loading, campos desabilitados |
| **Success** | Submissão bem-sucedida | Alert de sucesso, opção de próximo passo |
| **Error (server)** | Erro na submissão | Alert de erro genérico + erros inline se retornados pela API |
| **Error (validation)** | Erros de validação | Erros inline + resumo + foco no primeiro erro |

### 7. Barra de Ações

```
┌───────────────────────────────────────────────────┐
│ [Salvar cadastro]  [Cancelar]                     │
└───────────────────────────────────────────────────┘
```

- Botão primário (submit) **sempre à esquerda** — segue o fluxo natural de leitura (F-pattern).
- Botão secundário (cancelar) à direita do primário.
- Gap entre botões: `--ds-spacing-12`.
- Alinhamento: à esquerda (nunca centralizado ou à direita).
- O botão "Cancelar" deve confirmar via **Modal** (Sprint 3) se o formulário tem alterações não salvas: *"Tem certeza que deseja sair? As alterações não salvas serão perdidas."*

#### Estado de Loading no Botão

```html
<button type="submit" class="ds-btn ds-btn--primary ds-btn--loading" disabled>
  <span class="ds-btn__spinner" aria-hidden="true"></span>
  Salvando...
</button>
```

### 8. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Labels obrigatórios | Todo campo tem `<label>` com `for`/`id` |
| Campos obrigatórios | `aria-required="true"` + asterisco visual com `aria-hidden="true"` |
| Erros inline | `aria-invalid="true"` no campo + `aria-describedby` apontando para erro |
| Erros anunciados | `role="alert"` nas mensagens de erro para anúncio imediato |
| Resumo de erros | `aria-live="polite"` no container de resumo |
| Agrupamento | `<fieldset>` + `<legend>` para rádios, checkboxes e seções |
| Navegação | Tab entre campos; Space/Enter para checkboxes/radios; Enter submete |
| Foco gerenciado | Ao submeter com erros, foco vai para resumo de erros ou primeiro campo inválido |
| Contraste | Mensagens de erro com contraste ≥ 4.5:1 |
| Instruções | Helper texts conectados via `aria-describedby` |

### 9. Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Avança para próximo campo/elemento focável |
| `Shift + Tab` | Retorna para campo/elemento anterior |
| `Enter` | Submete o formulário (quando foco em botão ou input) |
| `Space` | Marca/desmarca checkbox; seleciona radio |
| `Arrow Up/Down` | Navega entre opções de radio group |
| `Esc` | Fecha modal de confirmação (cancelar) |

---

## Variantes de Formulário

### 1. Formulário de Cadastro (Padrão)
Múltiplas seções, validação completa, termos de aceite. **Exemplo:** cadastro de cidadão.

### 2. Formulário de Edição
Similar ao cadastro, mas com campos pré-preenchidos e botão "Salvar alterações". Indicação visual de campos alterados (opcional).

### 3. Formulário de Busca/Filtro
Horizontal ou em card, com menos campos e botão "Buscar". Sem seções, sem termos. Usado acima de tabelas de listagem.

### 4. Formulário de Login
Minimal — apenas e-mail/CPF + senha + botão "Entrar". Link "Esqueci minha senha". Centralizado na tela.

### 5. Formulário Wizard (Multi-step)
Formulário dividido em etapas com indicador de progresso (stepper). Navegação "Anterior"/"Próximo". Validação por etapa.

---

## Critérios de Aceite

- [ ] Formulário implementado com `<form novalidate>` e validação via JavaScript.
- [ ] Seções organizadas com `<fieldset>` e `<legend>`.
- [ ] Grid CSS funcional com campos full, half e third.
- [ ] Todos os componentes da Sprint 2 usados: Input, Textarea, Select, Checkbox, Radio, Button.
- [ ] Labels sempre visíveis acima dos campos (nunca placeholder-only).
- [ ] Campos obrigatórios marcados com asterisco e `aria-required="true"`.
- [ ] Validação inline no `blur` e na submissão.
- [ ] Mensagens de erro em tom educativo conforme Tom de Voz do Design System.
- [ ] Ao submeter com erros: scroll e foco no primeiro campo inválido.
- [ ] Resumo de erros exibido com `role="alert"` e links para os campos.
- [ ] `aria-invalid`, `aria-describedby`, `aria-required` implementados corretamente.
- [ ] Estado de loading no botão durante submissão.
- [ ] Feedback de sucesso exibido com `role="alert"` após submissão bem-sucedida.
- [ ] Modal de confirmação ao clicar "Cancelar" com alterações não salvas.
- [ ] Botão primário alinhado à esquerda, antes do secundário.
- [ ] 5 variantes de formulário documentadas (cadastro, edição, busca, login, wizard).
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Formulário renderiza corretamente em 1366×768 sem scroll horizontal.
- [ ] Navegação completa por teclado (Tab, Enter, Space, Arrows).
- [ ] Story no Storybook com exemplo completo funcional.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 6 (Formulário) e Seção 7 (Tom de Voz)
- [Sprint 2 — Input](../sprint_2/task_2_componente_input.md)
- [Sprint 2 — Textarea](../sprint_2/task_3_componente_textarea.md)
- [Sprint 2 — Select](../sprint_2/task_4_componente_select.md)
- [Sprint 2 — Checkbox](../sprint_2/task_5_componente_checkbox.md)
- [Sprint 2 — Radio](../sprint_2/task_6_componente_radio.md)
- [Sprint 2 — Button](../sprint_2/task_1_componente_botao.md)
- [Sprint 3 — Modal](../sprint_3/task_2_componente_modal.md) — Para confirmação de cancelamento
- [Sprint 4 — Task 1 (Layout)](task_1_layout_pagina.md) — Template de página onde o formulário vive

---

## Estimativa

**2 dias**

## Prioridade

**Alta** — Formulários são o coração de aplicações governamentais.

## Dependências

- Sprint 1 concluída (tokens).
- Sprint 2 concluída (todos os componentes de formulário).
- Sprint 3 — Task 2 (Modal) para confirmação de cancelamento.
- Sprint 4 — Task 1 (Layout Shell) para contexto de página.
