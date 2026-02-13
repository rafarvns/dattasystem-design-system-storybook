import { createPagination } from '../components/Pagination/Pagination';

export default {
  title: 'componentes compostos/Pagination',
  render: (args) => {
    return createPagination(args);
  },
  argTypes: {
    totalItems: { control: 'number', description: 'Total de itens' },
    itemsPerPage: { control: 'number', description: 'Itens por página' },
    currentPage: { control: 'number', description: 'Página atual' },
    showInfo: { control: 'boolean', description: 'Exibir texto informativo' },
    showPerPage: { control: 'boolean', description: 'Exibir seletor de itens por página' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'simple', 'compact'],
      description: 'Variante visual',
    },
    onPageChange: { action: 'onPageChange' },
    onItemsPerPageChange: { action: 'onItemsPerPageChange' },
  },
  args: {
    totalItems: 247,
    itemsPerPage: 20,
    currentPage: 1,
    showInfo: true,
    showPerPage: false,
    variant: 'default',
  },
};

export const Default = {
  args: {
    currentPage: 1,
  },
};

export const NearBeginning = {
  args: {
    currentPage: 3,
    totalItems: 500,
  },
};

export const Middle = {
  args: {
    currentPage: 13,
    totalItems: 500,
  },
};

export const NearEnd = {
  args: {
    currentPage: 25,
    totalItems: 500,
  },
};

export const Simple = {
  args: {
    variant: 'simple',
    showInfo: false,
  },
};

export const Compact = {
  args: {
    variant: 'compact',
  },
};

export const WithItemsPerPage = {
  args: {
    showPerPage: true,
  },
};

export const Empty = {
  args: {
    totalItems: 0,
    currentPage: 1,
  },
};
