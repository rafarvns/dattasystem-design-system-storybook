export default {
  title: 'Fundação/Fichas Visuais',
  parameters: {
    layout: 'fullscreen',
  },
};

const previewFiles = [
  { name: 'Cores - Marca', file: 'colors-brand.html' },
  { name: 'Cores - Accent', file: 'colors-accent.html' },
  { name: 'Cores - Neutrals', file: 'colors-neutrals.html' },
  { name: 'Cores - Semânticas', file: 'colors-semantic.html' },
  { name: 'Tipografia - Famílias', file: 'type-families.html' },
  { name: 'Tipografia - Headings', file: 'type-headings.html' },
  { name: 'Tipografia - Body', file: 'type-body.html' },
  { name: 'Espaçamento - Scale', file: 'spacing-scale.html' },
  { name: 'Espaçamento - Radius', file: 'spacing-radius.html' },
  { name: 'Espaçamento - Shadows', file: 'spacing-shadows.html' },
  { name: 'Marca - Logo', file: 'brand-logo.html' },
  { name: 'Componentes - Buttons', file: 'comp-buttons.html' },
  { name: 'Componentes - Inputs', file: 'comp-inputs.html' },
  { name: 'Componentes - Alerts', file: 'comp-alerts.html' },
  { name: 'Componentes - Cards', file: 'comp-cards.html' },
  { name: 'Componentes - Nav', file: 'comp-nav.html' },
  { name: 'Componentes - Selection', file: 'comp-selection.html' },
  { name: 'Componentes - Table', file: 'comp-table.html' },
];

previewFiles.forEach((preview) => {
  const safeName = preview.name.replace(/[- ]/g, '_');
  exports[safeName] = {
    render: () => {
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.height = '100vh';
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'center';
      container.style.backgroundColor = '#f5f7fa';

      const iframe = document.createElement('iframe');
      iframe.src = `../../new_design/preview/${preview.file}`;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '8px';

      container.appendChild(iframe);
      return container;
    },
  };
});
