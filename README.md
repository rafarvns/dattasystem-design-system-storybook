# 🏛️ Datta System v1.0
> **"Simplicidade que serve. Tecnologia que respeita."**

[![Versão](https://img.shields.io/badge/versão-1.0.0--stable-blue)](./CHANGELOG.md)
[![Acessibilidade](https://img.shields.io/badge/acessibilidade-WCAG%20AA-success)](./stories/Accessibility.mdx)
[![Resolução](https://img.shields.io/badge/resolução-1366%C3%97768-orange)](#)
[![Licença](https://img.shields.io/badge/licença-Governamental-lightgrey)](./GOVERNANCE.md)

O **Datta System** é o Design System oficial para a construção de interfaces governamentais de alta performance. Desenvolvido para ser robusto, acessível e soberbamente consistente, ele fornece a base necessária para sistemas complexos de gestão, auditoria e serviços ao cidadão.

---

## 💎 Pilares do Sistema

Nossas decisões de design e código são fundamentadas em cinco pilares críticos:

1.  **Clareza Absoluta:** O conteúdo é o protagonista. Eliminamos o ruído visual para focar na tarefa.
2.  **Eficiência Respeitosa:** Fluxos ágeis que respeitam o tempo do servidor e do cidadão.
3.  **Coesão Visual:** Uma linguagem única, independente do módulo ou órgão.
4.  **Acessibilidade Nativa:** WCAG 2.1 AA não é um diferencial, é o nosso ponto de partida.
5.  **Performance Consciente:** Código leve (Vanilla JS/CSS) que escala em qualquer infraestrutura.

---

## 🎨 Tematização (White-label)

O Datta System foi projetado para ser **multiorgânico**. Através de uma poderosa camada de variáveis CSS, é possível adaptar toda a identidade visual em segundos:

*   🟦 **Datta Core:** Identidade institucional padrão.
*   🟩 **Secretaria de Saúde:** Tons esmeralda e ícones específicos.
*   🟪 **Tribunal de Justiça:** Paleta solene e tipografia refinada.

---

## 🧱 Biblioteca de Componentes

Nossa biblioteca é dividida hierarquicamente para facilitar a escalabilidade:

### 🎨 Fundação
Tokens de design para **Cores**, **Tipografia**, **Espaçamento**, **Formas** e **Estilos Globais**.

### 🧱 Componentes Base
Os átomos do sistema: **Buttons**, **Inputs**, **Selects**, **Checkboxes**, **Radios** e **Cards**.

### 🏛️ Componentes Compostos
Moléculas complexas: **Navbar**, **Sidebar colapsável**, **Modais**, **Tables**, **Alertas**, **Breadcrumbs** e **Tabs**.

### 📐 Padrões de Página
Templates prontos para uso: **Layout Shell**, **Formulários Densos**, **Listagens com Filtros** e **Estados de Erro/Loading**.

---

## 🚀 Começando

### Instalação
```bash
npm install @datta-system/core
```

### Uso Rápido
```javascript
import { createButton } from '@datta-system/core';
import '@datta-system/core/dist/index.css';

const btn = createButton({
  label: 'Iniciar Processo',
  variant: 'primary'
});

document.body.appendChild(btn);
```

> **Nota:** O sistema é otimizado para a resolução base de **1366x768**, garantindo legibilidade e ergonomia em monitores padrão de repartições públicas.

---

## 📖 Documentação e Guias

Toda a inteligência do projeto está documentada em nossos guias especializados:

*   📘 **[Início Rápido](./GETTING_STARTED.md)**: Instalação detalhada e exemplos de uso.
*   🤝 **[Como Contribuir](./CONTRIBUTING.md)**: Padrões de código (BEM), gitflow e submissão de componentes.
*   ⚖️ **[Governança](./GOVERNANCE.md)**: Como as decisões são tomadas e política de releases.
*   📜 **[Changelog](./CHANGELOG.md)**: Histórico de todas as versões e melhorias.
*   🗣️ **[Tom de Voz](./stories/ToneOfVoice.mdx)**: Diretrizes de escrita técnica e UX Writing.

---

## ♿ Acessibilidade

O Datta System implementa:
- Navegação completa via teclado.
- Gerenciamento inteligente de foco (Focus Rings).
- Atributos ARIA em todos os componentes interativos.
- Contraste de cor validado (mínimo 4.5:1).

---

## 📞 Contato e Suporte

*   **Issues:** Relate bugs ou sugira melhorias no repositório.
*   **E-mail:** [designsystem@datta.gov.br](mailto:designsystem@datta.gov.br)
*   **Storybook:** [https://storybook.datta-system.gov.br](https://storybook.datta-system.gov.br)

---
<p align="center">
  Desenvolvido com ❤️ pela equipe de Design e Tecnologia • 2026
</p>

test