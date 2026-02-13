import { createNavbar } from '../components/Navbar/Navbar';
import { createBreadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { createTabs } from '../components/Tabs/Tabs';
import { createTable } from '../components/Table/Table';

export default {
  title: 'Padrões de Página/Exemplos Completos',
};

export const NavegacaoCompleta = {
  render: () => {
    const container = document.createElement('div');
    container.style.minHeight = '100vh';
    container.style.paddingTop = '56px';
    container.style.backgroundColor = 'var(--color-bg-secondary)';

    const navbar = createNavbar({
      menuItems: [
        { label: 'Início', href: '#' },
        { label: 'Processos', href: '#', active: true },
        { label: 'Configurações', href: '#' },
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
        { label: 'Processos', href: '#' },
        { label: 'Detalhes do Processo', current: true },
      ]
    });
    main.appendChild(breadcrumb);

    const title = document.createElement('h1');
    title.style.marginTop = 'var(--spacing-4)';
    title.style.marginBottom = 'var(--spacing-6)';
    title.innerText = 'Processo 2026.0001.0042';
    main.appendChild(title);

    const tableContent = createTable({
      columns: [
        { label: 'Data/Hora', key: 'timestamp' },
        { label: 'Ação', key: 'action' },
        { label: 'Usuário', key: 'user' },
      ],
      data: [
        { timestamp: '13/02/2026 10:00', action: 'Abertura de Processo', user: 'Maria Silva' },
        { timestamp: '13/02/2026 11:30', action: 'Anexação de Documentos', user: 'João Souza' },
        { timestamp: '13/02/2026 14:15', action: 'Encaminhamento para Análise', user: 'Ana Costa' },
      ]
    });

    const tabs = createTabs({
      tabs: [
        { id: 'info', label: 'Informações Gerais', content: '<p class="text-body">Este processo refere-se à solicitação de alvará de funcionamento para estabelecimento comercial de baixo impacto.</p>' },
        { id: 'docs', label: 'Documentos', content: '<p class="text-body">Lista de documentos anexados: RG, CPF, Comprovante de Endereço e Planta do Imóvel.</p>', badge: '4' },
        { id: 'history', label: 'Histórico', content: tableContent },
      ]
    });
    main.appendChild(tabs);

    container.appendChild(main);
    return container;
  }
};
