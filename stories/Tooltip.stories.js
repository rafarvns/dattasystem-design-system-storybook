import { createTooltip } from '../components/Tooltip/Tooltip';
import { createButton } from '../components/Button/Button';

export default {
  title: 'Componentes Compostos/Tooltip',
  render: (args) => {
    // Create a button as trigger
    const btn = createButton({
      label: args.triggerLabel || 'Hover me',
      variant: 'secondary'
    });

    return createTooltip({
      ...args,
      trigger: btn
    });
  },
  argTypes: {
    text: { control: 'text' },
    shortcut: { control: 'text' },
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    enterDelay: { control: 'number' },
    exitDelay: { control: 'number' },
  },
  args: {
    text: 'Este é um tooltip informativo',
    shortcut: '',
    position: 'top',
    enterDelay: 300,
    exitDelay: 100,
  },
};

export const Default = {
  args: {
    text: 'Imprimir documento',
  },
};

export const WithShortcut = {
  args: {
    text: 'Salvar alterações',
    shortcut: 'Ctrl+S',
  },
};

export const Positions = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '100px';
    container.style.padding = '100px';
    container.style.flexWrap = 'wrap';

    ['top', 'right', 'bottom', 'left'].forEach(pos => {
      const btn = createButton({ label: pos.charAt(0).toUpperCase() + pos.slice(1), variant: 'secondary' });
      const tooltip = createTooltip({
        text: `Tooltip no ${pos}`,
        position: pos,
        trigger: btn
      });
      container.appendChild(tooltip);
    });

    return container;
  }
};

export const Collision = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.height = '200px';
    container.style.display = 'flex';
    container.style.alignItems = 'flex-start';
    container.style.justifyContent = 'center';
    container.style.paddingTop = '10px';

    const btn = createButton({ label: 'Top (but limited space)', variant: 'secondary' });
    const tooltip = createTooltip({
      text: 'Eu deveria estar no topo, mas fiz flip para baixo!',
      position: 'top',
      trigger: btn
    });

    container.appendChild(tooltip);
    return container;
  }
};
