import { createNavbar } from '../components/Navbar/Navbar';
import { createBreadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { createTable } from '../components/Table/Table';
import { createPagination } from '../components/Pagination/Pagination';
import { createModal } from '../components/Modal/Modal';
import { createInput } from '../components/Input/Input';
import { createSelect } from '../components/Select/Select';
import { createTextarea } from '../components/Textarea/Textarea';
import { createButton } from '../components/Button/Button';
import { showAlert } from '../components/Alert/Alert';

export default {
  title: 'Padrões de Página/Composições',
  decorators: [
    (Story) => {
      const container = document.createElement('div');
      container.style.maxWidth = '1200px';
      container.style.margin = '0 auto';
      const storyResult = Story();
      if (storyResult instanceof HTMLElement) {
        container.appendChild(storyResult);
      } else {
        container.innerHTML = storyResult;
      }
      return container;
    },
  ],
};

export const LayoutListagem = {
  render: () => {
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
    main.id = 'main-content';
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

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = 'var(--spacing-6)';
    header.style.marginTop = 'var(--spacing-4)';

    const title = document.createElement('h1');
    title.innerText = 'Gerenciamento de Processos';
    header.appendChild(title);

    const newBtn = createButton({
      label: 'Novo Processo',
      variant: 'primary',
      iconLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`
    });
    header.appendChild(newBtn);
    main.appendChild(header);

    const table = createTable({
      caption: 'Lista de processos administrativos recentes',
      columns: [
        { label: 'Nº Processo', key: 'id', sortable: true },
        { label: 'Requerente', key: 'user' },
        { label: 'Data', key: 'date', sortable: true },
        { label: 'Status', key: 'status' },
      ],
      data: [
        { id: '2026.0001', user: 'Maria Silva', date: '10/02/2026', status: '<span style="color: var(--color-green-500)">Aprovado</span>' },
        { id: '2026.0002', user: 'João Souza', date: '11/02/2026', status: '<span style="color: var(--color-orange-500)">Pendente</span>' },
        { id: '2026.0003', user: 'Ana Costa', date: '12/02/2026', status: '<span style="color: var(--color-blue-500)">Em análise</span>' },
        { id: '2026.0004', user: 'Pedro Rocha', date: '13/02/2026', status: '<span style="color: var(--color-green-500)">Aprovado</span>' },
        { id: '2026.0005', user: 'Lucia Ferraz', date: '13/02/2026', status: '<span style="color: var(--color-red-500)">Cancelado</span>' },
      ]
    });
    main.appendChild(table);

    const paginationContainer = document.createElement('div');
    paginationContainer.style.marginTop = 'var(--spacing-6)';
    const pagination = createPagination({
      totalItems: 247,
      itemsPerPage: 10,
      currentPage: 1
    });
    paginationContainer.appendChild(pagination);
    main.appendChild(paginationContainer);

    container.appendChild(main);
    return container;
  }
};

export const ModalCadastro = {
  render: () => {
    const container = document.createElement('div');
    const triggerBtn = createButton({
      label: 'Abrir Cadastro de Usuário',
      variant: 'primary',
      onClick: () => {
        const form = document.createElement('div');
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.gap = 'var(--spacing-4)';

        form.appendChild(createInput({ label: 'Nome Completo', placeholder: 'Ex: João da Silva', required: true }));
        form.appendChild(createInput({ label: 'E-mail', type: 'email', placeholder: 'joao@exemplo.com' }));
        form.appendChild(createSelect({
          label: 'Órgão Responsável',
          options: [
            { label: 'Secretaria de Saúde', value: 'saude' },
            { label: 'Secretaria de Educação', value: 'educacao' },
            { label: 'Secretaria de Fazenda', value: 'fazenda' },
          ]
        }));
        form.appendChild(createTextarea({ label: 'Observações Adicionais', placeholder: 'Descreva detalhes relevantes...' }));

        const modal = createModal({
          title: 'Novo Cadastro de Usuário',
          content: form,
          size: 'md',
          footerActions: [
            createButton({ label: 'Cancelar', variant: 'secondary', onClick: () => modal.close() }),
            createButton({
              label: 'Salvar Cadastro', variant: 'primary', onClick: () => {
                modal.close();
                showAlert({ title: 'Sucesso!', message: 'O cadastro foi realizado com êxito.', type: 'success' });
              }
            })
          ]
        });
        modal.open();
      }
    });
    container.appendChild(triggerBtn);
    return container;
  }
};

export const FeedbackAcao = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = 'var(--spacing-4)';

    const successBtn = createButton({
      label: 'Simular Sucesso',
      variant: 'primary',
      onClick: () => showAlert({ title: 'Ação Realizada', message: 'Os dados foram salvos no banco de dados.', type: 'success', autoDismiss: true })
    });

    const errorBtn = createButton({
      label: 'Simular Erro',
      variant: 'destructive',
      onClick: () => showAlert({ title: 'Erro de Sistema', message: 'Não foi possível conectar ao servidor. Tente novamente.', type: 'error' })
    });

    container.appendChild(successBtn);
    container.appendChild(errorBtn);
    return container;
  }
};
