# Task 5 — Sistema de Tematização por Órgão

## Descrição

Implementar o **sistema de tematização** do Datta System — a capacidade de customizar a aparência visual (cores primárias, logo, nome do órgão) para diferentes órgãos governamentais **sem alterar nenhum componente individual**. O sistema deve permitir que o mesmo Design System seja adotado por múltiplos órgãos, cada um com sua identidade visual preservada dentro da coesão do Datta System.

---

## Objetivo

Criar uma arquitetura de temas baseada em CSS Custom Properties (variáveis CSS) que permita trocar a identidade visual de um órgão com uma única classe ou arquivo de configuração, mantendo acessibilidade e consistência.

---

## Requisitos

### 1. Arquitetura de Temas

#### 1.1 Estrutura de Variáveis (Camadas)

```
┌─────────────────────────────────────────────┐
│         CAMADA 3: Variáveis de Tema         │
│  (Identidade visual do órgão específico)    │
│  --ds-theme-primary, --ds-theme-logo, etc.  │
├─────────────────────────────────────────────┤
│         CAMADA 2: Variáveis Semânticas      │
│  (Função/significado no Design System)      │
│  --ds-color-primary, --ds-color-danger, etc.│
├─────────────────────────────────────────────┤
│         CAMADA 1: Tokens Primitivos         │
│  (Valores brutos definidos na Sprint 1)     │
│  --ds-blue-500, --ds-red-500, etc.          │
└─────────────────────────────────────────────┘
```

#### 1.2 Arquivo de Tema Base (Padrão Datta System)

```css
/* themes/_default.css */
:root,
[data-theme="default"] {
  /* === Cores do Tema === */
  --ds-theme-primary-50:  #EBF5FF;
  --ds-theme-primary-100: #CCE5FF;
  --ds-theme-primary-200: #99CBFF;
  --ds-theme-primary-300: #66B0FF;
  --ds-theme-primary-400: #3396FF;
  --ds-theme-primary-500: #0066CC;  /* Azul Datta — cor principal */
  --ds-theme-primary-600: #0052A3;
  --ds-theme-primary-700: #003D7A;
  --ds-theme-primary-800: #002952;
  --ds-theme-primary-900: #001429;

  /* === Cor de Acento === */
  --ds-theme-accent-50:   #FFF0F0;
  --ds-theme-accent-500:  #CC0000;  /* Vermelho Datta */
  --ds-theme-accent-700:  #990000;

  /* === Mapeamento Semântico === */
  --ds-color-primary:     var(--ds-theme-primary-500);
  --ds-color-primary-dark: var(--ds-theme-primary-700);
  --ds-color-primary-light: var(--ds-theme-primary-100);

  /* === Identidade === */
  --ds-theme-logo-url:    url('/assets/logos/datta-system.svg');
  --ds-theme-name:        'Datta System';
  --ds-theme-navbar-bg:   var(--ds-theme-primary-800);
  --ds-theme-sidebar-active: var(--ds-theme-primary-50);
  --ds-theme-link-color:  var(--ds-theme-primary-500);
  --ds-theme-link-hover:  var(--ds-theme-primary-600);
  --ds-theme-btn-primary-bg: var(--ds-theme-primary-500);
  --ds-theme-btn-primary-hover: var(--ds-theme-primary-600);
  --ds-theme-focus-ring:  var(--ds-theme-primary-500);
}
```

#### 1.3 Exemplo de Tema Customizado (Órgão)

```css
/* themes/secretaria-saude.css */
[data-theme="secretaria-saude"] {
  /* === Cores do Tema — Verde Saúde === */
  --ds-theme-primary-50:  #E8F5E9;
  --ds-theme-primary-100: #C8E6C9;
  --ds-theme-primary-200: #A5D6A7;
  --ds-theme-primary-300: #81C784;
  --ds-theme-primary-400: #66BB6A;
  --ds-theme-primary-500: #2E7D32;  /* Verde — cor principal */
  --ds-theme-primary-600: #256427;
  --ds-theme-primary-700: #1B5E20;
  --ds-theme-primary-800: #124116;
  --ds-theme-primary-900: #0A250D;

  /* === Cor de Acento === */
  --ds-theme-accent-500:  #D32F2F;

  /* === Identidade === */
  --ds-theme-logo-url:    url('/assets/logos/secretaria-saude.svg');
  --ds-theme-name:        'Secretaria de Saúde';
}

/* themes/tribunal-justica.css */
[data-theme="tribunal-justica"] {
  /* === Cores do Tema — Púrpura Jurídico === */
  --ds-theme-primary-50:  #F3E5F5;
  --ds-theme-primary-100: #E1BEE7;
  --ds-theme-primary-200: #CE93D8;
  --ds-theme-primary-300: #BA68C8;
  --ds-theme-primary-400: #AB47BC;
  --ds-theme-primary-500: #6A1B9A;  /* Púrpura — cor principal */
  --ds-theme-primary-600: #551580;
  --ds-theme-primary-700: #4A148C;
  --ds-theme-primary-800: #310D5E;
  --ds-theme-primary-900: #1A0733;

  /* === Identidade === */
  --ds-theme-logo-url:    url('/assets/logos/tribunal-justica.svg');
  --ds-theme-name:        'Tribunal de Justiça';
}
```

### 2. Aplicação do Tema

#### 2.1 Via Atributo HTML

```html
<!-- Tema padrão (automático) -->
<html lang="pt-BR">

<!-- Tema customizado -->
<html lang="pt-BR" data-theme="secretaria-saude">

<!-- Tema em seção específica (raro, mas possível) -->
<section data-theme="tribunal-justica">
  <!-- Componentes dentro desta seção usam o tema do tribunal -->
</section>
```

#### 2.2 Via JavaScript (Troca Dinâmica)

```javascript
// Trocar tema
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('ds-theme', themeName);
}

// Carregar tema salvo
function loadSavedTheme() {
  const saved = localStorage.getItem('ds-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }
}

// Inicializar
loadSavedTheme();
```

### 3. O Que é Tematizável vs. Fixo

| Elemento | Tematizável? | Observação |
|----------|-------------|------------|
| Cor primária (todas as escalas) | ✅ Sim | Principal eixo de customização |
| Cor de acento | ✅ Sim | Destaques e CTAs especiais |
| Logo do sistema | ✅ Sim | Navbar e login |
| Nome do sistema | ✅ Sim | Navbar e footer |
| Fundo da navbar | ✅ Sim | Derivado da cor primária |
| Cores de feedback (success, warning, danger) | ❌ Não | Semânticas e universais — verde=ok, vermelho=erro |
| Cores neutras (cinzas, branco) | ❌ Não | Base estrutural do Design System |
| Tipografia (família, escala) | ❌ Não | Consistência tipográfica garantida |
| Espaçamentos | ❌ Não | Grid e layout são fixos |
| Border-radius e sombras | ❌ Não | Personalidade visual do DS é fixa |
| Ícones (estilo) | ❌ Não | Outline consistente em todos os temas |

### 4. Design Tokens Impactados

| Token Semântico | Valor Padrão | Tematizável |
|-----------------|-------------|-------------|
| `--ds-color-primary` | `--ds-theme-primary-500` | ✅ |
| `--ds-color-primary-dark` | `--ds-theme-primary-700` | ✅ |
| `--ds-color-primary-light` | `--ds-theme-primary-100` | ✅ |
| `--ds-color-primary-50` | `--ds-theme-primary-50` | ✅ |
| `--ds-navbar-bg` | `--ds-theme-navbar-bg` | ✅ |
| `--ds-btn-primary-bg` | `--ds-theme-btn-primary-bg` | ✅ |
| `--ds-btn-primary-hover` | `--ds-theme-btn-primary-hover` | ✅ |
| `--ds-link-color` | `--ds-theme-link-color` | ✅ |
| `--ds-focus-ring-color` | `--ds-theme-focus-ring` | ✅ |
| `--ds-color-success` | `#2E7D32` (fixo) | ❌ |
| `--ds-color-warning` | `#ED6C02` (fixo) | ❌ |
| `--ds-color-danger` | `#D32F2F` (fixo) | ❌ |

### 5. Validação de Acessibilidade por Tema

#### 5.1 Requisitos de Contraste

Cada tema customizado **deve** passar por validação de contraste antes de ser aprovado:

| Combinação | Contraste Mínimo | Ferramenta |
|------------|-----------------|------------|
| Texto branco sobre `primary-500` | ≥ 4.5:1 | WebAIM Contrast Checker |
| Texto branco sobre `primary-700` (navbar) | ≥ 4.5:1 | WebAIM Contrast Checker |
| `primary-500` sobre branco (links, botões) | ≥ 4.5:1 | WebAIM Contrast Checker |
| `primary-500` como borda (focus ring) | ≥ 3:1 | WCAG 2.1 non-text contrast |
| `primary-50` como fundo com texto escuro | ≥ 4.5:1 | WebAIM Contrast Checker |

#### 5.2 Checklist de Validação de Tema

```markdown
## Checklist — Novo Tema: [Nome do Órgão]

- [ ] Escala completa de cores primárias definida (50–900)
- [ ] Contraste de texto branco sobre primary-500 ≥ 4.5:1
- [ ] Contraste de texto branco sobre primary-700 ≥ 4.5:1
- [ ] Contraste de primary-500 sobre branco ≥ 4.5:1
- [ ] Focus ring (primary-500) com contraste ≥ 3:1 sobre fundo
- [ ] Logo fornecido em SVG (formato recomendado)
- [ ] Logo testado em navbar (sobre fundo escuro) e login (sobre fundo claro)
- [ ] Nome do órgão definido e testado na navbar
- [ ] Todos os componentes visuais verificados com o novo tema
- [ ] Testado em 1366×768
- [ ] Aprovado pelo responsável do órgão
```

### 6. Estrutura de Arquivos

```
src/
  themes/
    _default.css          ← Tema padrão Datta System
    _theme-template.css   ← Template vazio para novos temas
    secretaria-saude.css  ← Exemplo: Secretaria de Saúde
    tribunal-justica.css  ← Exemplo: Tribunal de Justiça
    README.md             ← Guia para criar novos temas
  assets/
    logos/
      datta-system.svg
      secretaria-saude.svg
      tribunal-justica.svg
```

### 7. Template para Novos Temas

```css
/* themes/_theme-template.css */
/* 
 * Datta System — Template de Tema
 * Copie este arquivo e preencha os valores para criar um novo tema.
 * Consulte o checklist de validação antes de publicar.
 */

[data-theme="NOME_DO_TEMA"] {
  /* === Cores Primárias (OBRIGATÓRIO) === */
  /* Dica: Use uma ferramenta como https://colorbox.io para gerar a escala */
  --ds-theme-primary-50:  ;  /* Tom mais claro (fundos, highlights) */
  --ds-theme-primary-100: ;
  --ds-theme-primary-200: ;
  --ds-theme-primary-300: ;
  --ds-theme-primary-400: ;
  --ds-theme-primary-500: ;  /* Cor principal — DEVE ter contraste ≥ 4.5:1 com branco */
  --ds-theme-primary-600: ;
  --ds-theme-primary-700: ;  /* Navbar — DEVE ter contraste ≥ 4.5:1 com branco */
  --ds-theme-primary-800: ;
  --ds-theme-primary-900: ;  /* Tom mais escuro */

  /* === Cor de Acento (OPCIONAL — padrão: vermelho Datta) === */
  /* --ds-theme-accent-500: ; */

  /* === Identidade (OBRIGATÓRIO) === */
  --ds-theme-logo-url:    url('/assets/logos/SEU_LOGO.svg');
  --ds-theme-name:        'Nome do Órgão';
}
```

---

## Comportamento

### Troca de Tema
- A troca de tema é **instantânea** — sem reload da página.
- Todos os componentes refletem o novo tema automaticamente via CSS Custom Properties.
- O tema é persistido no `localStorage` e carregado no `<head>` antes do primeiro render (evita flash).

### Fallback
- Se nenhum `data-theme` é definido, o tema padrão Datta System é aplicado via `:root`.
- Se um tema referencia uma variável não definida, o fallback cai para o valor do `:root`.

### Performance
- Temas são arquivos CSS leves (~1KB cada) — apenas variáveis, sem regras de componente.
- Apenas o tema ativo é carregado (lazy loading) ou todos são bundled (decisão da aplicação).

---

## Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Contraste validado | Cada tema DEVE passar no checklist de contraste antes de ser publicado |
| Não depender de cor | Status e feedback usam texto + ícone + cor (nunca cor sozinha) |
| Focus ring visível | `--ds-theme-focus-ring` deve ser visível sobre qualquer fundo do tema |
| Preferência de sistema | Respeitar `prefers-color-scheme` se modo escuro for implementado no futuro |
| Temas não alteram comportamento | Apenas aparência muda — funcionalidade, ARIA, semântica permanecem idênticos |

---

## Critérios de Aceite

- [ ] Arquitetura de 3 camadas de variáveis implementada (primitivas → semânticas → tema).
- [ ] Tema padrão Datta System (`_default.css`) definido e funcional.
- [ ] 2 temas de exemplo implementados (Secretaria de Saúde, Tribunal de Justiça).
- [ ] Troca de tema via `data-theme` funciona sem reload.
- [ ] Tema persistido via `localStorage`.
- [ ] Todos os componentes de todas as sprints refletem a cor do tema automaticamente.
- [ ] Cores de feedback (success, warning, danger) permanecem fixas em todos os temas.
- [ ] Tipografia, espaçamentos e border-radius permanecem fixos em todos os temas.
- [ ] Template vazio para novos temas (`_theme-template.css`) disponível.
- [ ] Checklist de validação de tema documentado.
- [ ] Cada tema de exemplo passa no checklist de contraste (WCAG AA).
- [ ] Focus ring visível em todos os temas.
- [ ] README com guia passo-a-passo para criar novos temas.
- [ ] Story no Storybook com seletor de temas para visualizar todos os componentes em cada tema.
- [ ] Nenhum componente tem cor hardcoded — todos usam variáveis semânticas.
- [ ] Funciona corretamente em 1366×768.

---

## Referências

- [DESIGN_SYSTEM_CONCEPT.md](../DESIGN_SYSTEM_CONCEPT.md) — Seção 3 (Paleta de Cores)
- [Sprint 1 — Tokens de Cores](../sprint_1/task_2_tokens_cores.md) — Tokens primitivos
- [Sprint 1 — Estilos Globais](../sprint_1/task_6_estilos_globais.md) — Variáveis CSS base
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Open Props — Theming](https://open-props.style/) — Inspiração de arquitetura

---

## Estimativa

**1.5 dias**

## Prioridade

**Média** — Essencial para adoção multi-órgão, mas funcional sem ela.

## Dependências

- Sprint 1 concluída (tokens de cores e variáveis CSS).
- Sprint 2 e 3 concluídas (componentes que consumirão os temas).
- Sprint 4 — Task 1 (Layout Shell) para navbar e sidebar tematizáveis.
