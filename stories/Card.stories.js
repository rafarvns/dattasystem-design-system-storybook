import { createCard, createCardDataPair } from '../components/Card/Card';
import { createButton } from '../components/Button/Button';

export default {
  title: 'componentes base/Card',
  render: (args) => {
    // If body is an array of pairs, create them
    if (Array.isArray(args.body)) {
      const container = document.createElement('div');
      args.body.forEach(pair => {
        container.appendChild(createCardDataPair(pair.label, pair.value));
      });
      return createCard({ ...args, body: container });
    }
    return createCard(args);
  },
  argTypes: {
    title: { control: 'text', description: 'Título do card' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'featured-info', 'featured-danger'],
      description: 'Variante visual',
    },
    compact: { control: 'boolean', description: 'Modo compacto' },
    headerDivider: { control: 'boolean', description: 'Linha divisória no header' },
    footerDivider: { control: 'boolean', description: 'Linha divisória no footer' },
  },
  args: {
    title: 'Informaçőes do Processo',
    variant: 'default',
    compact: false,
    headerDivider: false,
    footerDivider: false,
  },
};

const fileIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;

export const Default = {
  args: {
    icon: fileIcon,
    body: [
      { label: 'Número', value: '2026.0213.001' },
      { label: 'Requerente', value: 'Fulano de Tal' },
      { label: 'Status', value: 'Em análise' },
    ],
  },
};

export const WithFooter = {
  args: {
    ...Default.args,
    footerDivider: true,
    footer: (() => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';
      container.appendChild(createButton({ label: 'Ver Detalhes', variant: 'secondary', size: 'sm' }));
      container.appendChild(createButton({ label: 'Aprovar', variant: 'primary', size: 'sm' }));
      return container;
    })(),
  },
};

export const FeaturedInfo = {
  args: {
    ...Default.args,
    variant: 'featured-info',
    title: 'Aviso Importante',
  },
};

export const FeaturedDanger = {
  args: {
    ...Default.args,
    variant: 'featured-danger',
    title: 'Açăo Necessária',
  },
};

export const Compact = {
  args: {
    ...Default.args,
    compact: true,
    title: 'Card Compacto',
  },
};

export const Clickable = {
  args: {
    ...Default.args,
    title: 'Card Clicável',
    href: '#',
    ariaLabel: 'Clique para ver detalhes do processo 2026.0213.001',
  },
};

export const FullComposition = {
  args: {
    title: 'Dados do Protocolo',
    icon: fileIcon,
    headerDivider: true,
    footerDivider: true,
    badge: (() => {
      const span = document.createElement('span');
      span.innerText = 'URGENTE';
      span.style.fontSize = '10px';
      span.style.padding = '2px 6px';
      span.style.backgroundColor = 'var(--color-red-100)';
      span.style.color = 'var(--color-red-700)';
      span.style.borderRadius = '4px';
      span.style.fontWeight = '700';
      return span;
    })(),
    body: [
      { label: 'ID', value: '987654321' },
      { label: 'Data de Entrada', value: '13/02/2026' },
      { label: 'Órgăo Destino', value: 'Secretaria de Fazenda' },
    ],
    footer: createButton({ label: 'Imprimir Protocolo', variant: 'ghost', size: 'sm' }),
  },
};
