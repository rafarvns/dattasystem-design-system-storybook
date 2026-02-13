# Contribuindo com o Datta System

Obrigado por seu interesse em contribuir com o Datta System! Seguir estas diretrizes ajuda a manter o sistema consistente, acessível e de alta qualidade para todos os órgãos do governo.

## Processo de Contribuição

### 1. Propor um Novo Componente ou Melhoria
- **Issue:** Comece abrindo uma Issue descrevendo o componente/melhoria, seu propósito e cenários de uso.
- **Aprovação:** A equipe de design avalia se a proposta cabe no escopo do Design System.
- **Especificação:** Se aprovado, criamos uma task com os requisitos visuais, de comportamento e acessibilidade.

### 2. Desenvolver o Componente
- **Branch:** Crie uma branch a partir da `main` (ex: `feature/novo-botao`).
- **Nomenclatura BEM:** Use rigorosamente o padrão BEM: `ds-[componente]__[elemento]--[modificador]` (ex: `ds-navbar__item--active`).
- **Tokens:** Nunca use valores "hardcoded" (ex: `color: #005EB8`). Use exclusivamente Design Tokens (`color: var(--color-primary)`).
- **Acessibilidade:** Garanta conformidade com WCAG AA (teclado, ARIA, contraste).
- **Resolução:** Otimize e valide o layout sempre na base de **1366×768**.

### 3. Documentar no Storybook
- **Stories:** Crie histórias que demonstrem todas as variantes, estados (hover, focus, disabled) e tamanhos.
- **MDX:** Escreva a documentação técnica no arquivo `.mdx` correspondente, incluindo guias de "Uso Correto / Uso Incorreto".

### 4. Submeter Pull Request
Seu PR deve conter:
1. Código do componente (JS e CSS).
2. Arquivos de Stories e Documentação (MDX).
3. Atualização do `CHANGELOG.md`.

## Checklist de Pull Request
- [ ] Componente utiliza prefixo `ds-` ou classes conforme definido na task.
- [ ] Usa exclusivamente Design Tokens.
- [ ] Possui navegação funcional por teclado.
- [ ] Atributos ARIA estão presentes e corretos.
- [ ] Contraste validado (mínimo 4.5:1 para texto).
- [ ] Documentação completa no Storybook incluída.

## Padrões de Código

### CSS
- **BEM:** Facilita a manutenção e evita conflitos de estilo.
- **Custom Properties:** Use variáveis CSS para suportar a tematização dinâmica.

### HTML
- **Semântica:** Use elementos HTML5 apropriados (`<button>` para ações, `<a>` para links).
- **Labels:** Todos os componentes de input DEVEM ter labels associadas.

### JavaScript
- **Vanilla JS:** O core do sistema é agnóstico a frameworks.
- **Limpeza:** Remova event listeners e referências se o componente for destruído (se aplicável).

## Versionamento
Seguimos o **Semantic Versioning (SemVer)**:
- `MAJOR` (3.x.x): Alterações que quebram a compatibilidade (Ex: mudança radical no HTML/CSS de um componente central).
- `MINOR` (x.4.x): Novos componentes ou funcionalidades retrocompatíveis.
- `PATCH` (x.x.5): Correções de bugs ou pequenos ajustes visuais.

## Contato
- **Issues:** Use o repositório do projeto.
- **E-mail:** designsystem@datta.gov.br
- **Governança:** Consulte o [Guia de Governança](./GOVERNANCE.md).
