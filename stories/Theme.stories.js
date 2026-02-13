import { createNavbar } from '../components/Navbar/Navbar';
import { createButton } from '../components/Button/Button';
import { createLayoutShell } from '../components/Padroes/LayoutShell/LayoutShell';

export default {
  title: 'Padrões de Página/Tematização',
  parameters: {
    layout: 'fullscreen',
  },
};

export const SeletorDeTemas = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '24px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '32px';

    const controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.gap = '16px';
    controls.style.padding = '16px';
    controls.style.backgroundColor = 'var(--ds-color-neutral-100)';
    controls.style.borderRadius = '8px';
    controls.innerHTML = '<strong style="display:block; margin-bottom:8px; width:100%">Selecione o tema do órgão:</strong>';

    const themes = [
      { id: 'default', label: 'Datta System (Padrão)', color: '#005EB8' },
      { id: 'secretaria-saude', label: 'Secretaria de Saúde', color: '#2E7D32' },
      { id: 'tribunal-justica', label: 'Tribunal de Justiça', color: '#6A1B9A' }
    ];

    themes.forEach(theme => {
      const btn = createButton({
        label: theme.label,
        variant: 'secondary',
        onClick: () => {
          document.documentElement.setAttribute('data-theme', theme.id);
          localStorage.setItem('ds-theme', theme.id);
          // window.location.reload() removido para troca instantânea
        }
      });
      btn.style.borderLeft = `4px solid ${theme.color}`;
      controls.appendChild(btn);
    });

    container.appendChild(controls);

    // Mock Content to show theming
    const mockContent = document.createElement('div');
    mockContent.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px;">
        <div class="ds-card" style="padding: 24px;">
          <h3 style="color: var(--color-primary); margin-bottom: 16px;">Cores e Identidade</h3>
          <p>Este card demonstra como a cor primária (<span style="color: var(--color-primary); font-weight: bold">--color-primary</span>) muda conforme o tema selecionado.</p>
          <div style="height: 4px; background: var(--color-primary); margin: 16px 0;"></div>
          <button class="btn btn--primary">Botão do Tema</button>
        </div>
        <div class="ds-skeleton-card" style="padding: 24px;">
          <h3 style="color: var(--color-primary); margin-bottom: 16px;">Feedbacks Fixos</h3>
          <p>Cores de feedback não mudam para garantir acessibilidade:</p>
          <div style="display: flex; gap: 8px; margin-top: 16px;">
            <span style="background: var(--color-success); color: white; padding: 4px 8px; border-radius: 4px;">Sucesso</span>
            <span style="background: var(--color-warning); color: white; padding: 4px 8px; border-radius: 4px;">Aviso</span>
            <span style="background: var(--color-danger); color: white; padding: 4px 8px; border-radius: 4px;">Erro</span>
          </div>
        </div>
      </div>
    `;

    const shell = createLayoutShell({
      title: 'Configurações de Identidade',
      description: 'Visualize como o sistema se adapta a diferentes órgãos do governo.',
      content: mockContent
    });

    // Constraint wrapper for Storybook preview
    const wrapper = document.createElement('div');
    wrapper.style.height = '700px';
    wrapper.style.width = '100%';
    wrapper.style.position = 'relative';
    wrapper.style.overflow = 'hidden';

    shell.style.position = 'absolute';
    shell.style.height = '100%';
    shell.style.width = '100%';

    wrapper.appendChild(controls);
    wrapper.appendChild(shell);
    return wrapper;
  }
};
