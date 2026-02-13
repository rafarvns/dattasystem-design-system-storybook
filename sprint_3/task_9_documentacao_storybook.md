# Task 9 — Documentação e Validação no Storybook (Sprint 3)

## Descrição

Documentar todos os **8 componentes compostos da Sprint 3** no Storybook, criando stories completas com variantes, estados interativos, exemplos de composição e diretrizes de uso. Além disso, validar visualmente todos os componentes na resolução-alvo 1366×768 e garantir consistência entre eles.

---

## Objetivo

Garantir que cada componente da Sprint 3 esteja documentado de forma acessível, navegável e demonstrativa no Storybook — servindo como referência viva para desenvolvedores e designers que consumirão o Design System.

---

## Requisitos

### 1. Stories por Componente

Cada componente deve ter as seguintes stories no mínimo:

| Componente | Stories obrigatórias |
|------------|---------------------|
| **Navbar** | Padrão (completa), Simples, Institucional, com submenu aberto, com busca expandida |
| **Modal** | Confirmação, Confirmação destrutiva, Formulário, Informativo, tamanhos sm/md/lg/fullscreen |
| **Table** | Simples, com ordenação, com seleção, com ações, empty state, loading, compact/default/comfortable |
| **Alert** | Info, Success, Warning, Error, com título, sem título, com ação, banner, dismissível, empilhamento |
| **Tooltip** | Top, Right, Bottom, Left, com atalho, texto longo (quebra), flip automático |
| **Breadcrumb** | Padrão (3 níveis), com ícone home, com chevron, truncado (6+ níveis) |
| **Tabs** | Padrão (underline), com ícone, com badge, contained, com tab disabled, muitas tabs (overflow) |
| **Pagination** | Completa, simples, compacta, com itens por página, primeira página, última página, muitas páginas |

### 2. Estrutura de Documentação

Para cada componente, a página no Storybook deve conter:

#### a) Visão Geral
- Descrição do componente e seu propósito.
- Quando usar / quando NÃO usar.
- Exemplo principal (story default).

#### b) Playground (Controls)
- Args/props configuráveis via Storybook Controls (knobs).
- Permitir que o usuário altere variantes, tamanhos, estados e conteúdo em tempo real.

#### c) Variantes
- Cada variante documentada com story individual.
- Descrição textual de quando usar cada variante.

#### d) Estados
- Demonstração de todos os estados (default, hover, focus, active, disabled, error, etc.).
- Para estados interativos (hover, focus), incluir instrução para o usuário interagir.

#### e) Composição
- Exemplos de como o componente é usado em conjunto com outros:
  - Navbar + Breadcrumb + conteúdo.
  - Table + Pagination.
  - Modal com formulário (inputs, selects do Sprint 2).
  - Alert empilhado após ação em formulário.

#### f) Acessibilidade
- Checklist de acessibilidade do componente.
- Demonstração de navegação por teclado.
- Atributos ARIA visíveis na inspeção.

#### g) Tokens Utilizados
- Lista dos Design Tokens consumidos pelo componente.
- Referência cruzada com a documentação de tokens da Sprint 1.

### 3. Composições/Padrões de Página

Além das stories individuais, criar **stories de composição** demonstrando componentes trabalhando juntos:

| Composição | Componentes envolvidos |
|------------|----------------------|
| **Layout de Listagem** | Navbar + Breadcrumb + Table + Pagination |
| **Modal de Cadastro** | Modal + Input + Select + Textarea + Button (Sprint 2) |
| **Feedback de Ação** | Alert (success) aparecendo após submissão de formulário |
| **Navegação Completa** | Navbar + Breadcrumb + Tabs (conteúdo com tabela em uma aba) |

### 4. Validação em 1366×768

Para cada componente e composição, validar:

| Critério | Verificação |
|----------|-------------|
| **Largura** | Nenhum overflow horizontal em 1366px |
| **Altura** | Componentes não consomem espaço vertical excessivo em 768px |
| **Navbar** | Altura máxima de 56px, todos os itens visíveis |
| **Table** | Scroll horizontal funcional se necessário, cabeçalho legível |
| **Modal** | Todos os tamanhos cabem na viewport, scroll interno funciona |
| **Pagination** | Truncamento funcional, botões de tamanho adequado |
| **Tabs** | Overflow de tabs tratado corretamente |
| **Breadcrumb** | Truncamento com "..." quando necessário |
| **Tipografia** | Textos legíveis, sem cortes ou sobreposição |
| **Interatividade** | Áreas de clique de tamanho adequado (mínimo 44×44px para touch) |

### 5. Organização no Storybook

Estrutura de navegação recomendada:

```
📂 Datta System
├── 📂 Fundação (Sprint 1)
│   └── Tokens (Cores, Tipografia, Espaçamento, Forma)
├── 📂 Componentes Base (Sprint 2)
│   └── Button, Input, Textarea, Select, Checkbox, Radio, Card
├── 📂 Componentes Compostos (Sprint 3)    ← FOCO DESTA TASK
│   ├── Navbar
│   ├── Modal
│   ├── Table
│   ├── Alert
│   ├── Tooltip
│   ├── Breadcrumb
│   ├── Tabs
│   └── Pagination
└── 📂 Padrões / Composições
    ├── Layout de Listagem
    ├── Modal de Cadastro
    ├── Feedback de Ação
    └── Navegação Completa
```

---

## Critérios de Aceite

- [ ] Todos os 8 componentes da Sprint 3 possuem stories no Storybook.
- [ ] Cada componente possui stories para todas as variantes documentadas em sua task.
- [ ] Cada componente possui page de documentação com: visão geral, quando usar, playground, variantes, estados, acessibilidade e tokens.
- [ ] Controls/Args funcionais para propriedades configuráveis de cada componente.
- [ ] 4 composições/padrões de página criados demonstrando componentes em conjunto.
- [ ] Todos os componentes e composições validados visualmente em viewport 1366×768.
- [ ] Nenhum overflow horizontal em 1366px.
- [ ] Navbar com altura ≤ 56px confirmada visualmente.
- [ ] Modal com scroll interno funcional em 768px de altura.
- [ ] Table com scroll horizontal funcional quando necessário.
- [ ] Pagination com truncamento correto.
- [ ] Navegação do Storybook organizada na estrutura definida (Fundação → Base → Compostos → Padrões).
- [ ] Todas as stories carregam sem erros no console.
- [ ] Documentação de acessibilidade presente em cada componente.

---

## Referências

- Tasks 1–8 desta Sprint — Especificações de cada componente
- [Sprint 1 — Task 1 (Setup)](../sprint_1/task_1_setup_projeto.md) — Configuração do Storybook
- [Sprint 2 — Task 8 (Documentação)](../sprint_2/task_8_documentacao_storybook.md) — Padrão de documentação estabelecido
- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Princípios e diretrizes visuais

---

## Estimativa

**1.5 dias**

## Prioridade

**Média** — Essencial para a utilidade do Design System, mas depende de todos os componentes estarem implementados.

## Dependências

- Tasks 1–8 da Sprint 3 concluídas (todos os 8 componentes implementados).
- Sprint 2 — Task 8 (padrão de documentação no Storybook já estabelecido).
