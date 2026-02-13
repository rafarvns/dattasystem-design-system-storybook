# Task 3 — Componente Textarea

## Descrição

Implementar o componente **Textarea** — campo de texto multilinha para entradas longas como observações, justificativas e descrições. Segue os mesmos padrões visuais e de acessibilidade do Input (Task 2), com adições específicas para texto multilinha.

---

## Objetivo

Criar um componente Textarea reutilizável, visualmente consistente com o Input, com suporte a redimensionamento controlado, contagem de caracteres e todos os estados padrão do Design System.

---

## Requisitos

### Estrutura Visual

```
<div class="textarea-field">
  <label class="textarea-field__label" for="campo-id">
    Label do Campo <span class="textarea-field__required">*</span>
  </label>
  <textarea class="textarea-field__textarea" id="campo-id" placeholder="..." rows="4"></textarea>
  <div class="textarea-field__footer">
    <span class="textarea-field__helper">Texto auxiliar ou mensagem de erro</span>
    <span class="textarea-field__counter">0/500</span>
  </div>
</div>
```

### Anatomia

| Elemento | Descrição | Obrigatório |
|----------|-----------|-------------|
| **Label** | Texto descritivo acima do campo | Sim |
| **Textarea** | Campo nativo `<textarea>` | Sim |
| **Placeholder** | Texto de exemplo em cinza médio | Não |
| **Helper Text** | Dica ou instrução abaixo do campo | Não |
| **Error Message** | Substitui helper text em caso de erro | Não |
| **Contador de caracteres** | Exibe caracteres usados / limite máximo | Não |
| **Indicador de obrigatório** | Asterisco (*) ao lado da label | Não |

### Configurações

| Propriedade | Descrição | Valor Padrão |
|-------------|-----------|--------------|
| `rows` | Número de linhas visíveis iniciais | 4 |
| `maxlength` | Limite máximo de caracteres (ativa o contador) | — |
| `resize` | Controle de redimensionamento: `vertical`, `none`, `auto` | `vertical` |
| `showCounter` | Exibir contador de caracteres | `false` (ativo se `maxlength` definido) |

### Tamanhos

O Textarea utiliza o mesmo sistema de tamanhos do Input para manter consistência:

| Tamanho | Font Size | Padding Interno |
|---------|-----------|-----------------|
| **sm** | `--font-size-sm` | `--spacing-2` / `--spacing-3` |
| **md** | `--font-size-base` | `--spacing-2` / `--spacing-3` |
| **lg** | `--font-size-md` | `--spacing-3` / `--spacing-4` |

### Estados Visuais

Idênticos ao componente Input:

| Estado | Borda | Fundo |
|--------|-------|-------|
| **Default** | `--color-gray-300` | `--color-white` |
| **Hover** | `--color-gray-400` | `--color-white` |
| **Focus** | `--color-blue-500` (2px) | `--color-white` |
| **Error** | `--color-red-500` | `--color-white` |
| **Disabled** | `--color-gray-200` | `--color-gray-100` |
| **Read-only** | `--color-gray-200` | `--color-gray-50` |

### Especificações de Estilo

- **Label, helper text, error text e asterisco:** Mesmos estilos do componente Input.
- **Textarea:** `--font-family-primary`, `--font-size-base`, `--font-weight-regular`, border-radius `--radius-md`.
- **Contador:** `--font-size-xs`, `--color-gray-400`, alinhado à direita. Muda para `--color-red-500` quando próximo do limite (≥90%).
- **Redimensionamento:** `resize: vertical` por padrão. O handle de resize deve ser visível em cinza claro.
- **Altura mínima:** Calculada com base em `rows` × `line-height` + padding.

---

## Comportamento

### Redimensionamento
- **Vertical only** por padrão — evita quebra de layout horizontal.
- Opção `resize: none` para contextos onde a altura é fixa.
- Opção `auto` para crescimento automático conforme o conteúdo (sem scrollbar interna até um limite).

### Contador de Caracteres
- Aparece quando `maxlength` é definido.
- Formato: `{atual}/{máximo}` (ex: "142/500").
- Cor padrão: `--color-gray-400`.
- Cor de alerta (≥90% preenchido): `--color-red-500`.
- Ao atingir o limite, o navegador bloqueia input adicional nativamente.

### Navegação por Teclado
- Focável via `Tab`.
- `Enter` cria nova linha (não submete formulário).
- `Tab` sai do campo para o próximo elemento focável.

### Acessibilidade
- `<label>` conectado via `for`/`id`. **Obrigatório.**
- `aria-invalid="true"` em estado de erro.
- `aria-describedby` apontando para helper/error text.
- `aria-required="true"` para campos obrigatórios.
- Contador é `aria-live="polite"` para anunciar mudanças a leitores de tela.

---

## Tokens Utilizados

| Categoria | Tokens |
|-----------|--------|
| Cores | `--color-blue-500`, `--color-red-500`, `--color-white`, `--color-gray-100`, `--color-gray-200`, `--color-gray-300`, `--color-gray-400`, `--color-gray-500`, `--color-gray-700` |
| Tipografia | `--font-family-primary`, `--font-size-xs`, `--font-size-sm`, `--font-size-base`, `--font-weight-regular`, `--font-weight-medium` |
| Espaçamento | `--spacing-1`, `--spacing-2`, `--spacing-3`, `--spacing-4` |
| Forma | `--radius-md`, `--transition-fast` |

---

## Critérios de Aceite

- [ ] Componente Textarea implementado com label, placeholder, helper text e error message.
- [ ] Label sempre visível acima do campo.
- [ ] 3 tamanhos disponíveis (sm, md, lg).
- [ ] Todos os estados visuais funcionam: default, hover, focus, error, disabled, read-only.
- [ ] Borda muda para azul no foco.
- [ ] Redimensionamento vertical funcional por padrão.
- [ ] Contador de caracteres funcional quando `maxlength` é definido.
- [ ] Contador muda de cor ao atingir ≥90% do limite.
- [ ] Mensagens de erro em vermelho substituindo helper text.
- [ ] Atributos ARIA corretos.
- [ ] Navegação por teclado funcional (`Tab` sai, `Enter` cria linha).
- [ ] Nenhum valor hardcoded — todos via Design Tokens.
- [ ] Renderiza corretamente em 1366×768.
- [ ] Story criada no Storybook com todos os estados e variantes.

---

## Referências

- `DESIGN_SYSTEM_CONCEPT.md` — Seção 6 (Formulário)
- `sprint_2/task_2_componente_input.md` — Padrões visuais e de acessibilidade do Input

---

## Estimativa

**1 dia**

## Prioridade

**Alta** — Componente essencial para formulários com campos descritivos.

## Dependências

- Sprint 1 concluída.
- Task 2 (Input) concluída — o Textarea reutiliza os mesmos padrões visuais.
