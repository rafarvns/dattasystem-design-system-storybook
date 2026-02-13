import { createNavbar } from '../components/Navbar/Navbar';
import { createBreadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { createTable } from '../components/Table/Table';
import { createPagination } from '../components/Pagination/Pagination';
import { createButton } from '../components/Button/Button';
import { createInput } from '../components/Input/Input';
import { createSelect } from '../components/Select/Select';

export default {
  title: 'Padrões de Página/Página de Listagem',
};

const createListContainer = () => {
  const container = document.createElement('div');
  container.style.minHeight = '100vh';
  container.style.paddingTop = '56px';
  container.style.backgroundColor = 'var(--color-bg-secondary)';

  const navbar = createNavbar({
    menuItems: [
      { label: 'Início', href: '#' },
      { label: 'Processos', href: '#', active: true },
      { label: 'Relatórios', href: '#' },
    ]
  });
  container.appendChild(navbar);

  const main = document.createElement('main');
  main.style.maxWidth = 'var(--grid-max-width)';
  main.style.margin = '0 auto';
  main.style.padding = 'var(--spacing-6) var(--spacing-4)';

  const breadcrumb = createBreadcrumb({
    items: [
      { label: 'Início', href: '#' },
      { label: 'Processos', current: true },
    ]
  });
  main.appendChild(breadcrumb);

  return { container, main };
};

const createFilterCard = () => {
  const card = document.createElement('div');
  card.className = 'ds-card';
  card.style.marginBottom = 'var(--spacing-6)';
  card.style.padding = 'var(--spacing-6)';

  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
  grid.style.gap = 'var(--spacing-4)';
  grid.style.alignItems = 'end';

  grid.appendChild(createInput({ label: 'Nº do Processo', placeholder: '0000.0000' }));
  grid.appendChild(createSelect({
    label: 'Status',
    options: [
      { label: 'Todos', value: 'all' },
      { label: 'Aprovado', value: 'aprovado' },
      { label: 'Pendente', value: 'pendente' },
    ]
  }));

  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = 'var(--spacing-2)';

  actions.appendChild(createButton({ label: 'Filtrar', variant: 'primary' }));
  actions.appendChild(createButton({ label: 'Limpar', variant: 'secondary' }));

  grid.appendChild(actions);
  card.appendChild(grid);
  return card;
};

export const ProcessosListagem = {
  render: () => {
    const { container, main } = createListContainer();

    const title = document.createElement('h1');
    title.innerText = 'Gerenciamento de Processos';
    title.style.marginBottom = 'var(--spacing-6)';
    main.appendChild(title);

    main.appendChild(createFilterCard());

    const table = createTable({
      caption: 'Lista de processos administrativos',
      columns: [
        { label: 'Nº Processo', key: 'id' },
        { label: 'Requerente', key: 'user' },
        { label: 'Data', key: 'date' },
        { label: 'Status', key: 'status' },
      ],
      data: [
        { id: '2026.0001', user: 'Maria Silva', date: '10/02/2026', status: 'Aprovado' },
        { id: '2026.0002', user: 'João Souza', date: '11/02/2026', status: 'Pendente' },
        { id: '2026.0003', user: 'Ana Costa', date: '12/02/2026', status: 'Em análise' },
      ],
      selectable: true
    });
    main.appendChild(table);

    const pagination = createPagination({
      totalItems: 42,
      itemsPerPage: 10,
      currentPage: 1
    });
    const pagContainer = document.createElement('div');
    pagContainer.style.marginTop = 'var(--spacing-6)';
    pagContainer.appendChild(pagination);
    main.appendChild(pagContainer);

    container.appendChild(main);
    return container;
  }
};

export const ComSelecao = {
  render: () => {
    const { container, main } = createListContainer();

    const title = document.createElement('h1');
    title.innerText = 'Gerenciamento de Processos';
    title.style.marginBottom = 'var(--spacing-6)';
    main.appendChild(title);

    // Batch Action Bar
    const batchBar = document.createElement('div');
    batchBar.style.backgroundColor = 'var(--color-blue-50)';
    batchBar.style.padding = 'var(--spacing-3) var(--spacing-4)';
    batchBar.style.borderRadius = 'var(--radius-md)';
    batchBar.style.marginBottom = 'var(--spacing-4)';
    batchBar.style.display = 'flex';
    batchBar.style.justifyContent = 'space-between';
    batchBar.style.alignItems = 'center';
    batchBar.style.border = '1px solid var(--color-blue-200)';

    const selectionInfo = document.createElement('span');
    selectionInfo.innerText = '2 itens selecionados';
    selectionInfo.style.fontWeight = '600';
    selectionInfo.style.color = 'var(--color-blue-700)';
    batchBar.appendChild(selectionInfo);

    const batchActions = document.createElement('div');
    batchActions.style.display = 'flex';
    batchActions.style.gap = 'var(--spacing-2)';
    batchActions.appendChild(createButton({ label: 'Excluir', variant: 'destructive', size: 'sm' }));
    batchActions.appendChild(createButton({ label: 'Exportar', variant: 'secondary', size: 'sm' }));
    batchBar.appendChild(batchActions);

    main.appendChild(batchBar);

    const table = createTable({
      columns: [
        { label: 'Nº Processo', key: 'id' },
        { label: 'Requerente', key: 'user' },
        { label: 'Status', key: 'status' },
      ],
      data: [
        { id: '2026.0001', user: 'Maria Silva', status: 'Aprovado', selected: true },
        { id: '2026.0002', user: 'João Souza', status: 'Pendente', selected: true },
        { id: '2026.0003', user: 'Ana Costa', status: 'Em análise', selected: false },
      ],
      selectable: true
    });
    main.appendChild(table);

    container.appendChild(main);
    return container;
  }
};
