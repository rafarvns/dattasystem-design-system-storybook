# Task 7 — Validação em Resolução 1366×768

## Descrição

Criar uma página de demonstração que exiba todos os Design Tokens definidos nas tasks anteriores (cores, tipografia, espaçamentos, formas) e validá-la visualmente na resolução-alvo de **1366×768**. Esta tarefa é o "quality gate" da Sprint 1 — garante que a fundação está sólida antes de avançar para componentes.

---

## Objetivo

Confirmar que todos os tokens e estilos globais funcionam corretamente, são visualmente harmônicos e estão otimizados para a resolução principal dos usuários do Datta System.

---

## Requisitos

### 1. Página de Demonstração de Tokens

Criar uma página HTML (ou Story no Storybook) que contenha as seguintes seções:

#### 1.1 Paleta de Cores
- Exibir cada cor como um retângulo com:
  - O nome do token (ex: `--color-blue-500`)
  - O valor hex
  - O uso pretendido
- Organizar por grupo: Azul, Vermelho, Neutros, Semânticos

#### 1.2 Tipografia
- Exibir cada preset tipográfico (heading-1 a caption) com:
  - O texto de exemplo: "O serviço público é para todos"
  - O nome do preset / classe
  - Família, tamanho, peso e line-height
- Demonstrar que as fontes estão carregando corretamente (Inter, Manrope)

#### 1.3 Espaçamentos
- Exibir a escala de espaçamento como barras visuais de largura proporcional ao valor
- Mostrar o nome do token e o valor em pixels

#### 1.4 Formas
- Exibir retângulos demonstrando cada nível de border-radius
- Exibir cards com cada nível de sombra
- Demonstrar o ring de foco (shadow-focus)

#### 1.5 Grid (12 colunas)
- Exibir o grid de 12 colunas com cores alternadas
- Verificar que se encaixa perfeitamente em 1366px

### 2. Checklist de Validação em 1366×768

Usar o DevTools do navegador para simular a resolução 1366×768 e verificar:

| Item | Verificação | Status |
|------|-------------|--------|
| **Tipografia** | Textos legíveis sem zoom? Font-size base (16px) confortável? | |
| **Grid** | 12 colunas visíveis e proporcionais? Margens laterais adequadas? | |
| **Cards** | Dois cards lado a lado cabem com margem? (conforme conceito) | |
| **Espaçamentos** | Paddings e margins não desperdiçam espaço vertical? | |
| **Cores** | Contrastes legíveis? Azul e vermelho distinguíveis? | |
| **Sombras** | Sutis e visíveis? Não estão "sumindo" na tela? | |
| **Foco** | Ring de foco visível ao navegar com Tab? | |
| **Scroll** | A página de tokens não exige scroll horizontal? | |
| **Fontes** | Fontes carregando sem FOUT/FOIT perceptível? | |

### 3. Teste de Contraste (Acessibilidade)

Verificar e documentar os contrastes das combinações mais usadas:

| Combinação | Contraste | WCAG AA |
|------------|-----------|---------|
| `gray-800` sobre `white` | ?:1 | ✅/❌ |
| `white` sobre `blue-500` | ?:1 | ✅/❌ |
| `white` sobre `red-500` | ?:1 | ✅/❌ |
| `gray-600` sobre `gray-50` | ?:1 | ✅/❌ |
| `blue-500` sobre `white` | ?:1 | ✅/❌ |
| `gray-400` (placeholder) sobre `white` | ?:1 | ✅/❌ |

> Se alguma combinação **falhar**, reportar e ajustar o token na task correspondente.

### 4. Documentação de Resultados

Criar o arquivo `docs/sprint_1_validation.md` com:

- Screenshots da página de tokens em 1366×768
- Tabela de contrastes preenchida
- Lista de ajustes realizados (se houver)
- Assinatura de aprovação (nome do revisor e data)

---

## Critérios de Aceite

- [ ] Página de demonstração de tokens criada e acessível (Storybook ou HTML).
- [ ] Todas as cores exibidas com hex e nome do token.
- [ ] Todos os presets tipográficos exibidos com fontes corretas.
- [ ] Escala de espaçamento visualizada.
- [ ] Grid de 12 colunas renderizando corretamente.
- [ ] Todos os itens do checklist de 1366×768 verificados e aprovados.
- [ ] Contrastes das combinações principais atendem WCAG AA (4.5:1 para texto normal).
- [ ] Nenhum scroll horizontal em 1366×768.
- [ ] Documento `docs/sprint_1_validation.md` criado com resultados.
- [ ] Todos os ajustes necessários foram aplicados nos tokens.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 2 (Princípio 4: Acessibilidade, Princípio 5: Performance)
- Tasks 2–6 da Sprint 1
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Estimativa

**1.5 dias**

## Prioridade

**Alta** — Quality gate da Sprint 1.

## Dependências

- Todas as tasks anteriores (1–6) devem estar concluídas.
