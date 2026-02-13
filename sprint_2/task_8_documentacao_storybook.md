# Task 8 — Documentação e Validação no Storybook

## Descrição

Consolidar a documentação de **todos os 7 componentes da Sprint 2** no Storybook, garantindo que cada um possua stories completas, guia de uso, tabela de props e validação visual na resolução-alvo 1366×768. Esta task é o **quality gate** da Sprint 2.

---

## Objetivo

Assegurar que todos os componentes base estão documentados, demonstrados e validados em um ambiente centralizado (Storybook), permitindo que designers e desenvolvedores consultem e reutilizem os componentes com confiança.

---

## Requisitos

### 1. Organização no Storybook

Estrutura de navegação lateral recomendada:

```
📁 Fundação (Sprint 1)
  └── Tokens de Cores
  └── Tipografia
  └── Espaçamento
  └── Forma (Bordas, Sombras)

📁 Componentes Base (Sprint 2)
  └── Button
  └── Input
  └── Textarea
  └── Select
  └── Checkbox
  └── Radio
  └── Card
```

- Usar a hierarquia de pastas do Storybook (`title: "Componentes Base/Button"`).
- Manter ordem alfabética dentro da seção ou ordem lógica de uso (Button → campos de formulário → Card).

### 2. Stories por Componente

Cada componente deve ter as seguintes stories **no mínimo**:

#### Button
| Story | Descrição |
|-------|-----------|
| Default | Botão primary, tamanho md |
| Variantes | Primary, Secondary, Destructive, Ghost lado a lado |
| Tamanhos | sm, md, lg lado a lado |
| Com Ícone | Ícone à esquerda, à direita, icon-only |
| Estados | Default, hover, focus, active, disabled, loading |
| Playground | Story interativa com controles (knobs) para variante, tamanho, texto, ícone, disabled, loading |

#### Input
| Story | Descrição |
|-------|-----------|
| Default | Input com label e placeholder |
| Com Helper Text | Input com texto auxiliar abaixo |
| Estado de Erro | Input com mensagem de erro e borda vermelha |
| Com Ícone | Ícone à esquerda, à direita |
| Disabled e Read-only | Ambos os estados |
| Tipos | text, email, password (com toggle), search |
| Tamanhos | sm, md, lg |
| Playground | Controles interativos |

#### Textarea
| Story | Descrição |
|-------|-----------|
| Default | Textarea com label |
| Com Contador | Textarea com maxlength e contador de caracteres |
| Estado de Erro | Com mensagem de erro |
| Disabled e Read-only | Ambos os estados |
| Playground | Controles para rows, maxlength, resize |

#### Select
| Story | Descrição |
|-------|-----------|
| Default | Select com opções |
| Com Placeholder | Estado inicial sem seleção |
| Com Agrupamento | Usando optgroup |
| Estado de Erro | Com mensagem de erro |
| Disabled | Estado desabilitado |
| Playground | Controles interativos |

#### Checkbox
| Story | Descrição |
|-------|-----------|
| Default | Checkbox individual |
| Grupo Vertical | Múltiplos checkboxes empilhados |
| Grupo Horizontal | Checkboxes lado a lado |
| Estados | Checked, indeterminate, disabled |
| Erro no Grupo | Grupo com mensagem de erro |
| Playground | Controles interativos |

#### Radio
| Story | Descrição |
|-------|-----------|
| Default | Grupo de radios vertical |
| Grupo Horizontal | Radios lado a lado |
| Estados | Checked, disabled |
| Erro no Grupo | Grupo com mensagem de erro |
| Playground | Controles interativos |

#### Card
| Story | Descrição |
|-------|-----------|
| Default | Card com header e body |
| Com Footer | Card com ações no footer |
| Compacto | Padding reduzido |
| Destaque | Borda esquerda azul e vermelha |
| Clicável | Card com hover e interatividade |
| Com Rótulo-Valor | Body com pares de dados |
| Grid de Cards | Dois cards lado a lado (demonstra layout em 1366px) |
| Playground | Controles interativos |

### 3. Página de Documentação (Docs) por Componente

Cada componente deve ter uma **aba Docs** no Storybook com:

| Seção | Conteúdo |
|-------|----------|
| **Descrição** | O que é o componente e quando usá-lo (1-2 parágrafos) |
| **Quando usar** | Lista de cenários de uso recomendados |
| **Quando NÃO usar** | Alternativas para cenários inadequados |
| **Anatomia** | Imagem ou descrição das partes do componente |
| **Props / API** | Tabela com todas as props, tipos, valores padrão e descrição |
| **Tokens utilizados** | Lista dos Design Tokens consumidos |
| **Acessibilidade** | Checklist de requisitos ARIA e teclado |
| **Exemplos de uso** | Snippets de código mostrando uso correto |

### 4. Validação em 1366×768

Criar uma **story especial** ou **página de validação** que exibe todos os componentes juntos, simulando um formulário real:

```
📄 "Sprint 2 / Validação 1366×768"
  └── Formulário de Exemplo
      - Input (nome, email, CPF)
      - Textarea (observações)
      - Select (estado, cidade)
      - Checkbox group (opções)
      - Radio group (tipo)
      - Botões (salvar, cancelar)
      - Card com resumo dos dados
```

#### Checklist de Validação

- [ ] Todos os campos cabem na viewport 1366×768 sem scroll horizontal.
- [ ] Labels são legíveis no tamanho definido.
- [ ] Espaçamento entre campos é consistente e confortável.
- [ ] Botões têm área de clique adequada (min 40px de altura).
- [ ] Cards em grid de 2 colunas cabem com margem adequada.
- [ ] Mensagens de erro não quebram o layout.
- [ ] Foco visível em todos os elementos interativos.
- [ ] Contrastes atendem WCAG AA em todos os componentes.

### 5. Revisão de Consistência

Verificar que todos os componentes:

| Verificação | Critério |
|-------------|----------|
| Nomenclatura CSS | Segue BEM (block__element--modifier) |
| Tokens | Nenhum valor hardcoded; tudo via CSS Custom Properties |
| Estados | Todos possuem hover, focus, disabled (onde aplicável) |
| Acessibilidade | Labels, ARIA, navegação por teclado |
| Tipografia | Mesma família, escala consistente |
| Espaçamento | Baseado na escala de 4px |
| Border-radius | Consistente entre componentes similares |

---

## Entregáveis

1. **Stories completas** para todos os 7 componentes no Storybook.
2. **Documentação (Docs)** com guia de uso para cada componente.
3. **Página de validação** com formulário de exemplo em 1366×768.
4. **Relatório de consistência** (pode ser um checklist no próprio Storybook ou um documento markdown).

---

## Critérios de Aceite

- [ ] Todos os 7 componentes possuem stories cobrindo todas as variantes e estados.
- [ ] Cada componente possui story "Playground" com controles interativos.
- [ ] Documentação (Docs) completa com descrição, quando usar, props e acessibilidade.
- [ ] Página de validação com formulário de exemplo renderizando corretamente em 1366×768.
- [ ] Checklist de validação 1366×768 aprovado (sem scroll horizontal, contrastes OK, espaçamentos consistentes).
- [ ] Revisão de consistência aprovada (nomenclatura BEM, tokens, estados, acessibilidade).
- [ ] Navegação do Storybook organizada em "Componentes Base" com todos os 7 itens.
- [ ] Nenhum warning ou erro no console do Storybook.

---

## Referências

- `DESIGN_SYSTEM_CONCEPT.md` — Documento conceitual completo
- `sprint_1/task_7_validacao_resolucao.md` — Padrão de validação 1366×768 da Sprint 1
- Todas as tasks da Sprint 2 (task_1 a task_7)

---

## Estimativa

**1.5 dias**

## Prioridade

**Média** — Depende de todos os componentes estarem implementados. Pode ser feita incrementalmente conforme cada componente é concluído.

## Dependências

- Tasks 1 a 7 da Sprint 2 concluídas.
- Sprint 1 concluída (Storybook configurado, tokens disponíveis).
