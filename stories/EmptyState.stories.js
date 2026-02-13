import { createEmptyState } from '../components/EmptyState/EmptyState';
import { createLayoutShell } from '../components/Padroes/LayoutShell/LayoutShell';

export default {
    title: '📐 Padrões de Página (Sprint 4) / Estados de Página / Empty States',
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => {
    const emptyState = createEmptyState(args);

    const shell = createLayoutShell({
        title: args.pageTitle || 'Gestão de Processos',
        description: args.pageDescription || 'Visualize e gerencie os processos administrativos.',
        content: emptyState,
        breadcrumbProps: {
            items: [
                { label: 'Início', href: '#' },
                { label: 'Processos' }
            ]
        }
    });

    // Constraint wrapper for Storybook preview
    const wrapper = document.createElement('div');
    wrapper.style.height = '600px';
    wrapper.style.width = '100%';
    wrapper.style.position = 'relative';
    wrapper.style.overflow = 'hidden';
    wrapper.style.border = '1px solid var(--ds-color-neutral-200)';

    shell.style.position = 'absolute';
    shell.style.height = '100%';
    shell.style.width = '100%';

    wrapper.appendChild(shell);
    return wrapper;
};

export const SemDados = Template.bind({});
SemDados.args = {
    title: 'Nenhum cadastro ainda',
    description: 'Comece adicionando o primeiro cadastro ao sistema.',
    actions: [{ label: 'Novo cadastro', variant: 'primary' }]
};

export const BuscaSemResultados = Template.bind({});
BuscaSemResultados.args = {
    title: 'Nenhum resultado encontrado',
    description: 'Tente ajustar os filtros ou iniciar uma nova busca.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ds-empty-state__icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`,
    actions: [{ label: 'Limpar filtros', variant: 'secondary' }]
};

export const SemNotificacoes = Template.bind({});
SemNotificacoes.args = {
    title: 'Nenhuma notificação',
    description: 'Quando houver novidades, elas aparecerão aqui.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ds-empty-state__icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
};

export const SemPermissao = Template.bind({});
SemPermissao.args = {
    title: 'Acesso não disponível',
    description: 'Você não tem permissão para visualizar este conteúdo. Solicite acesso ao administrador.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ds-empty-state__icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    actions: [{ label: 'Solicitar acesso', variant: 'primary' }]
};
