import { createErrorPage } from '../components/ErrorPage/ErrorPage';

export default {
    title: '📐 Padrões de Página (Sprint 4) / Estados de Página / Páginas de Erro',
    parameters: {
        layout: 'fullscreen',
    },
};

export const Erro404 = {
    render: () => createErrorPage({
        code: '404',
        title: 'Página não encontrada',
        description: 'A página que você procura não existe ou foi movida. Verifique o endereço ou volte para a página inicial.'
    })
};

export const Erro403 = {
    render: () => createErrorPage({
        code: '403',
        title: 'Acesso não autorizado',
        description: 'Você não tem permissão para acessar esta página. Se acredita que deveria ter acesso, entre em contato com o administrador do sistema.'
    })
};

export const Erro500 = {
    render: () => createErrorPage({
        code: '500',
        title: 'Algo deu errado',
        description: 'Tivemos um problema ao processar sua solicitação. Nossa equipe já foi notificada. Tente novamente em alguns instantes.'
    })
};

export const ServidorEmManutencao = {
    render: () => createErrorPage({
        code: '503',
        title: 'Sistema em manutenção',
        description: 'Estamos realizando melhorias no sistema. A previsão de retorno é às 20h. Pedimos desculpas pelo inconveniente.',
        actions: [
            { label: 'Tentar novamente', variant: 'primary', onClick: () => window.location.reload() }
        ]
    })
};
