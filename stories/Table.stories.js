import { createTable } from '../components/Table/Table';

export default {
  title: 'componentes compostos/Table',
  render: (args) => {
    return createTable(args);
  },
  argTypes: {
    density: {
      control: { type: 'select' },
      options: ['compact', 'default', 'comfortable'],
    },
    stickyHeader: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
  args: {
    caption: 'Processos em andamento — 247 registros',
    density: 'default',
    stickyHeader: false,
    selectable: false,
    columns: [
      { label: 'Nº Processo', key: 'id', sortable: true, sortOrder: 'ascending' },
      { label: 'Requerente', key: 'requerente' },
      { label: 'Data', key: 'data', sortable: true },
      { label: 'Status', key: 'status', render: (val) => `<span style="padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; background: ${val === 'Aprovado' ? '#C8E6C9' : '#FFE0B2'}; color: ${val === 'Aprovado' ? '#1B5E20' : '#E65100'}">${val}</span>` },
    ],
    data: [
      { id: '2026.0001.0042', requerente: 'Maria Silva Santos', data: '13/02/2026', status: 'Aprovado' },
      { id: '2026.0001.0043', requerente: 'José Oliveira', data: '12/02/2026', status: 'Pendente' },
      { id: '2026.0001.0044', requerente: 'Ana Costa', data: '11/02/2026', status: 'Aprovado' },
      { id: '2026.0001.0045', requerente: 'Carlos Souza', data: '10/02/2026', status: 'Pendente' },
    ],
  },
};

export const Default = {};

export const Sortable = {
  args: {
    columns: [
      { label: 'Nº Processo', key: 'id', sortable: true, sortOrder: 'ascending' },
      { label: 'Requerente', key: 'requerente', sortable: true },
      { label: 'Data', key: 'data', sortable: true },
      { label: 'Status', key: 'status' },
    ],
  }
};

export const Selectable = {
  args: {
    selectable: true,
    data: [
      { id: '2026.0001.0042', requerente: 'Maria Silva Santos', data: '13/02/2026', status: 'Aprovado', selected: true },
      { id: '2026.0001.0043', requerente: 'José Oliveira', data: '12/02/2026', status: 'Pendente', selected: false },
      { id: '2026.0001.0044', requerente: 'Ana Costa', data: '11/02/2026', status: 'Aprovado', selected: false },
    ],
  }
};

export const WithActions = {
  args: {
    actions: [
      { label: 'Ver', onClick: (row) => alert(`Ver ${row.id}`), variant: 'ghost' },
      { label: 'Editar', onClick: (row) => alert(`Editar ${row.id}`), variant: 'ghost' },
    ]
  }
};

export const Compact = {
  args: {
    density: 'compact',
  }
};

export const Comfortable = {
  args: {
    density: 'comfortable',
  }
};

export const StickyHeader = {
  decorators: [
    (Story) => {
      const wrapper = document.createElement('div');
      wrapper.style.height = '300px';
      wrapper.style.overflow = 'hidden';
      const story = Story();
      wrapper.appendChild(story);
      return wrapper;
    }
  ],
  args: {
    stickyHeader: true,
    data: Array.from({ length: 20 }).map((_, i) => ({
      id: `2026.0001.${100 + i}`,
      requerente: `Usuário Teste ${i + 1}`,
      data: '13/02/2026',
      status: i % 2 === 0 ? 'Aprovado' : 'Pendente'
    }))
  }
};

export const Empty = {
  args: {
    data: [],
  }
};

export const HorizontalScroll = {
  args: {
    columns: [
      { label: 'ID do Processo', key: 'id', sortable: true },
      { label: 'Nome do Requerente Completo', key: 'requerente' },
      { label: 'Data de Abertura', key: 'data' },
      { label: 'Status Atual do Pedido', key: 'status' },
      { label: 'Departamento Responsável', key: 'depto' },
      { label: 'Última Atualização', key: 'updated' },
      { label: 'Prioridade', key: 'priority' },
      { label: 'Observações do Técnico', key: 'obs' },
    ],
    data: [
      { 
        id: '2026.0001.0042', 
        requerente: 'Maria Silva Santos de Oliveira Ferreira', 
        data: '13/02/2026', 
        status: 'Aprovado',
        depto: 'Secretaria de Fazenda e Planejamento',
        updated: '13/02/2026 14:30',
        priority: 'Alta',
        obs: 'Documentação validada conforme o decreto municipal.'
      }
    ]
  }
};
