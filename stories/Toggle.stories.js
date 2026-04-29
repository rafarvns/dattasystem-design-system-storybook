import { createToggle } from '../components/Toggle/Toggle.js';

export default {
  title: 'Componentes Base/Toggle',
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '2rem';
    container.style.flexWrap = 'wrap';

    container.appendChild(createToggle({ label: 'Off', checked: false, variant: 'primary' }));
    container.appendChild(createToggle({ label: 'On', checked: true, variant: 'primary' }));
    container.appendChild(createToggle({ label: 'Disabled', checked: false, disabled: true, variant: 'primary' }));

    return container;
  },
};

export const Accent = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '2rem';
    container.style.flexWrap = 'wrap';

    container.appendChild(createToggle({ label: 'Off', checked: false, variant: 'accent' }));
    container.appendChild(createToggle({ label: 'On', checked: true, variant: 'accent' }));
    container.appendChild(createToggle({ label: 'Disabled', checked: false, disabled: true, variant: 'accent' }));

    return container;
  },
};

export const Interactive = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '2rem';
    container.style.flexWrap = 'wrap';

    const toggle1 = createToggle({
      label: 'Notificações',
      checked: false,
      variant: 'primary',
      onChange: (checked) => {
        console.log('Notificações:', checked ? 'ativadas' : 'desativadas');
      },
    });

    const toggle2 = createToggle({
      label: 'Dark Mode',
      checked: true,
      variant: 'accent',
      onChange: (checked) => {
        console.log('Dark Mode:', checked ? 'on' : 'off');
      },
    });

    container.appendChild(toggle1);
    container.appendChild(toggle2);

    return container;
  },
};
