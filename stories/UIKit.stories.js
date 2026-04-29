export default {
  title: 'Padrões de Página/Protótipos 2026',
  parameters: {
    layout: 'fullscreen',
  },
};

const createIframeStory = (file, title) => ({
  render: () => {
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100vh';
    container.style.display = 'flex';

    const iframe = document.createElement('iframe');
    iframe.src = `../../new_design/ui_kits/web/${file}`;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    container.appendChild(iframe);
    return container;
  },
});

export const Login = createIframeStory('login.html', 'Login');
export const AppShell = createIframeStory('index.html', 'App Shell');
