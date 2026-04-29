import { createBadge } from '../components/Badge/Badge.js';

export default {
  title: 'Componentes Base/Badge',
  parameters: {
    layout: 'centered',
  },
};

export const AllVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';

    const variants = ['info', 'success', 'warning', 'danger', 'accent', 'neutral'];
    variants.forEach((variant) => {
      const label = variant.charAt(0).toUpperCase() + variant.slice(1);
      container.appendChild(createBadge({ label, variant, size: 'md' }));
    });

    return container;
  },
};

export const Sizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';

    container.appendChild(createBadge({ label: 'Small', variant: 'info', size: 'sm' }));
    container.appendChild(createBadge({ label: 'Medium', variant: 'success', size: 'md' }));

    return container;
  },
};

export const WithIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';

    container.appendChild(
      createBadge({
        label: 'Aprovado',
        variant: 'success',
        size: 'md',
        icon: '✓',
      })
    );

    container.appendChild(
      createBadge({
        label: 'Pendente',
        variant: 'warning',
        size: 'md',
        icon: '⚠',
      })
    );

    container.appendChild(
      createBadge({
        label: 'Erro',
        variant: 'danger',
        size: 'md',
        icon: '✕',
      })
    );

    return container;
  },
};
