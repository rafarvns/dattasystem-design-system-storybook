import { createAlert, showAlert } from '../components/Alert/Alert';
import { createButton } from '../components/Button/Button';

export default {
  title: '🏛️ Componentes Compostos (Sprint 3) / Alert',
  render: (args) => {
    if (args.isStacked) {
      const container = document.createElement('div');
      const btn = createButton({
        label: 'Disparar Alerta',
        variant: 'primary',
        onClick: () => {
          showAlert({
            ...args,
            title: 'Notificação',
            message: `Alerta disparado às ${new Date().toLocaleTimeString()}`,
          });
        }
      });
      container.appendChild(btn);
      return container;
    }
    return createAlert(args);
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    dismissible: { control: 'boolean' },
    isBanner: { control: 'boolean' },
    autoDismiss: { control: 'number' },
  },
  args: {
    variant: 'info',
    title: 'Informação Importante',
    message: 'Este é um alerta informativo para o usuário.',
    dismissible: true,
    isBanner: false,
    autoDismiss: 0,
  },
};

export const Info = {
  args: {
    variant: 'info',
    title: 'Informação',
    message: 'O sistema passará por manutenção programada no próximo domingo.',
  },
};

export const Success = {
  args: {
    variant: 'success',
    title: 'Sucesso',
    message: 'Seu formulário foi enviado com sucesso para análise.',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    title: 'Atenção',
    message: 'Sua sessão expirará em 5 minutos devido à inatividade.',
  },
};

export const Error = {
  args: {
    variant: 'error',
    title: 'Erro de Validação',
    message: 'Não foi possível processar sua solicitação. Verifique os campos e tente novamente.',
  },
};

export const Compact = {
  args: {
    variant: 'info',
    title: '',
    message: 'Alterações salvas automaticamente.',
  },
};

export const Banner = {
  args: {
    variant: 'warning',
    title: 'Aviso de Manutenção',
    message: 'O sistema estará indisponível das 22h às 06h para atualização de banco de dados.',
    isBanner: true,
    dismissible: false,
  },
};

export const WithAction = {
  render: (args) => {
    const actionBtn = createButton({
      label: 'Renovar Sessão',
      variant: 'ghost',
      size: 'sm',
      onClick: () => alert('Sessão renovada!')
    });
    // Custom style for the ghost button in alert
    actionBtn.style.color = 'inherit';
    actionBtn.style.textDecoration = 'underline';
    actionBtn.style.padding = '0';
    actionBtn.style.minHeight = 'auto';

    return createAlert({
      ...args,
      actions: actionBtn
    });
  },
  args: {
    variant: 'warning',
    title: 'Sessão Expirando',
    message: 'Sua sessão vai expirar em breve.',
  }
};

export const Stacked = {
  args: {
    isStacked: true,
    variant: 'success',
    message: 'Operação realizada com sucesso!',
    autoDismiss: 5000,
  }
};
