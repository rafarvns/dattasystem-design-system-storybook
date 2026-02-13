# Datta System — Guia de Início Rápido

## O que é o Datta System?
O **Datta System** é o Design System oficial para aplicações governamentais de alta performance. Ele foi construído para garantir consistência visual, acessibilidade WCAG AA e agilidade no desenvolvimento de sistemas complexos, como gestão de processos, auditorias e dashboards.

Inspirado nos princípios de transparência, eficiência e sobriedade, o Datta System fornece uma fundação sólida de tokens de design e uma biblioteca de componentes robustos prontos para uso em ambiente de produção em resoluções a partir de 1366×768.

## Instalação

### Via npm
Para projetos modernos que utilizam empacotadores (Webpack, Vite, etc.):
```bash
npm install @datta-system/core
```

### Via CDN
Para prototipagem rápida ou sistemas legados sem build step:
```html
<link rel="stylesheet" href="https://cdn.datta-system.gov.br/v1.0.0/datta.min.css">
```

### Download manual
Você pode baixar o pacote completo contendo CSS, fontes e assets clicando [aqui](https://github.com/datta-system/core/releases/latest/download/datta-system-v1.0.0.zip).

## Uso Básico

### 1. Incluir o CSS principal
Certifique-se de importar o arquivo de estilos no ponto de entrada da sua aplicação:
```javascript
import '@datta-system/core/dist/index.css';
```

### 2. Incluir as fontes
O Datta System utiliza as fontes **Inter** (para interface e leitura) e **Manrope** (para títulos). Se não estiver usando o bundle completo, adicione via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
```

### 3. Usar os componentes
Exemplo de como renderizar um botão primário:
```javascript
import { createButton } from '@datta-system/core';

const btn = createButton({
  label: 'Confirmar Cadastro',
  variant: 'primary',
  onClick: () => console.log('Clicou!')
});

document.body.appendChild(btn);
```

## Exemplo Mínimo
Abaixo, um exemplo de uma página HTML completa simulando um cabeçalho e um botão:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Datta System</title>
    <!-- CSS do Design System -->
    <link rel="stylesheet" href="node_modules/@datta-system/core/dist/index.css">
</head>
<body class="ds-bg-secondary">
    <div id="app"></div>

    <script type="module">
        import { createNavbar, createButton, createCard } from './node_modules/@datta-system/core/index.js';

        const app = document.getElementById('app');

        // Navbar
        const nav = createNavbar({ systemName: 'Sistema de Exemplo' });
        app.appendChild(nav);

        // Conteúdo
        const container = document.createElement('div');
        container.style.padding = '40px';
        
        const card = createCard({
            title: 'Bem-vindo ao Datta System',
            body: 'Este é um exemplo mínimo de uso dos componentes em uma página isolada.'
        });

        const btn = createButton({ label: 'Iniciar Processo', variant: 'primary' });
        card.querySelector('.card__footer').appendChild(btn);

        container.appendChild(card);
        app.appendChild(container);
    </script>
</body>
</html>
```

## Próximos Passos
- Explore a documentação viva no [Storybook](https://storybook.datta-system.gov.br).
- Leia o [Guia de Contribuição](./CONTRIBUTING.md) para ajudar a evoluir o sistema.
- Consulte o [Changelog](./CHANGELOG.md) para ver as novidades da versão 1.0.0.
