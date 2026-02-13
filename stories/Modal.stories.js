import { createModal } from '../components/Modal/Modal';
import { createButton } from '../components/Button/Button';
import { createInput } from '../components/Input/Input';

export default {
  title: 'componentes compostos/Modal',
  render: (args) => {
    // Para o Storybook, criamos um botão que dispara o modal
    const container = document.createElement('div');
    const triggerBtn = createButton({
      label: 'Abrir Modal',
      variant: 'primary',
      onClick: () => {
        let modalContent = args.content;

        // Se for a story de formulário, construímos o conteúdo programaticamente
        if (args.isForm) {
          const formContainer = document.createElement('div');
          formContainer.style.display = 'flex';
          formContainer.style.flexDirection = 'column';
          formContainer.style.gap = '16px';

          const nomeInput = createInput({
            label: 'Nome Completo',
            value: 'João Silva',
            placeholder: 'Digite seu nome completo'
          });

          const emailInput = createInput({
            label: 'E-mail',
            type: 'email',
            value: 'joao.silva@exemplo.gov.br',
            placeholder: 'exemplo@gov.br'
          });

          formContainer.appendChild(nomeInput);
          formContainer.appendChild(emailInput);
          modalContent = formContainer;
        }

        const modal = createModal({
          ...args,
          content: modalContent,
          footerActions: args.footerActionsData.map(btnData => createButton(btnData))
        });
        modal.open();
      }
    });
    container.appendChild(triggerBtn);
    return container;
  },
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'fullscreen'],
    },
    closeOnOverlayClick: { control: 'boolean' },
  },
  args: {
    title: 'Título do Modal',
    content: '<p>Este é o conteúdo do modal do Datta System. Você pode incluir qualquer estrutura HTML aqui dentro.</p>',
    size: 'md',
    closeOnOverlayClick: true,
    footerActionsData: [
      { label: 'Cancelar', variant: 'secondary', onClick: () => {} },
      { label: 'Confirmar', variant: 'primary', onClick: () => {} }
    ]
  },
};

export const Default = {
  args: {
    title: 'Informação',
    content: '<p>Seu requerimento foi processado e está aguardando análise técnica. Você será notificado por e-mail.</p>',
    footerActionsData: [
      { label: 'Fechar', variant: 'primary' }
    ]
  }
};

export const Confirmation = {
  args: {
    title: 'Confirmar Ação',
    content: '<p>Você tem certeza que deseja enviar este formulário? Esta ação não poderá ser desfeita.</p>',
    footerActionsData: [
      { label: 'Cancelar', variant: 'secondary' },
      { label: 'Confirmar', variant: 'primary' }
    ]
  }
};

export const Destructive = {
  args: {
    title: 'Excluir Item',
    content: '<p>Atenção! Você está prestes a excluir permanentemente este registro. Deseja continuar?</p>',
    footerActionsData: [
      { label: 'Cancelar', variant: 'secondary' },
      { label: 'Excluir', variant: 'destructive' }
    ]
  }
};

export const LargeContent = {
  args: {
    title: 'Termos de Uso',
    size: 'lg',
    content: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
    `,
    footerActionsData: [
      { label: 'Fechar', variant: 'primary' }
    ]
  }
};

export const Form = {
  args: {
    title: 'Editar Cadastro',
    isForm: true,
    footerActionsData: [
      { label: 'Cancelar', variant: 'secondary' },
      { label: 'Salvar Alterações', variant: 'primary' }
    ]
  }
};
