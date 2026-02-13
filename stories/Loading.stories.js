import {
    createSkeleton,
    createCardSkeleton,
    createTableSkeleton,
    createFormSkeleton,
    createSpinner,
    createLoadingOverlay,
    createProgressBar
} from '../components/Loading/Loading';
import { createLayoutShell } from '../components/Padroes/LayoutShell/LayoutShell';

export default {
    title: 'Padrões de Página/Estados de Página/Loading e Skeletons',
    parameters: {
        layout: 'fullscreen',
    },
};

export const Skeletons = {
    render: () => {
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        grid.style.gap = '24px';
        grid.style.padding = '24px';

        const cardCol = document.createElement('div');
        cardCol.innerHTML = '<h3 style="margin-bottom: 16px;">Card & Text</h3>';
        cardCol.appendChild(createCardSkeleton());
        const textGroup = document.createElement('div');
        textGroup.style.marginTop = '24px';
        textGroup.appendChild(createSkeleton({ type: 'line', width: '100%' }));
        textGroup.appendChild(createSkeleton({ type: 'line', width: '90%' }));
        textGroup.appendChild(createSkeleton({ type: 'line', width: '40%' }));
        cardCol.appendChild(textGroup);
        grid.appendChild(cardCol);

        const tableCol = document.createElement('div');
        tableCol.innerHTML = '<h3 style="margin-bottom: 16px;">Table Skeleton</h3>';
        tableCol.appendChild(createTableSkeleton({ rows: 6 }));
        grid.appendChild(tableCol);

        const formCol = document.createElement('div');
        formCol.innerHTML = '<h3 style="margin-bottom: 16px;">Form Skeleton</h3>';
        formCol.appendChild(createFormSkeleton());
        grid.appendChild(formCol);

        const shell = createLayoutShell({
            title: 'Carregando dados...',
            description: 'Aguarde enquanto as informações são recuperadas do servidor.',
            content: grid,
            breadcrumbProps: {
                items: [
                    { label: 'Início', href: '#' },
                    { label: 'Processos', href: '#' },
                    { label: 'Listagem' }
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
    }
};

export const Spinners = {
    render: () => {
        const container = document.createElement('div');
        container.style.padding = '40px';
        container.style.display = 'flex';
        container.style.gap = '32px';
        container.style.alignItems = 'flex-end';
        container.style.maxWidth = '1200px';
        container.style.margin = '0 auto';

        container.appendChild(createSpinner({ size: 'sm', text: 'Pequeno' }));
        container.appendChild(createSpinner({ size: 'md', text: 'Médio' }));
        container.appendChild(createSpinner({ size: 'lg', text: 'Grande' }));

        return container;
    }
};

export const Progresso = {
    render: () => {
        const container = document.createElement('div');
        container.style.padding = '40px';
        container.style.maxWidth = '600px';
        container.style.margin = '0 auto';
        container.appendChild(createProgressBar({ progress: 65, label: 'Upload de arquivo' }));
        return container;
    }
};

export const Overlay = {
    render: () => {
        const container = document.createElement('div');
        container.style.padding = '40px';
        container.style.textAlign = 'center';

        const btn = document.createElement('button');
        btn.className = 'ds-btn ds-btn--primary';
        btn.innerText = 'Simular Processamento';
        btn.onclick = () => {
            const overlay = createLoadingOverlay({ text: 'Salvando no banco de dados...' });
            document.body.appendChild(overlay);
            setTimeout(() => {
                overlay.remove();
            }, 3000);
        };
        container.appendChild(btn);
        return container;
    }
};
