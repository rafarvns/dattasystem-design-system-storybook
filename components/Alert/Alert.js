import './Alert.css';

/**
 * Icons for the different alert variants
 */
const icons = {
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
};

/**
 * Creates an Alert component
 */
export const createAlert = ({
  variant = 'info', // info, success, warning, error
  title = '',
  message = 'Mensagem do alerta.',
  dismissible = true,
  onDismiss = () => {},
  actions = null, // HTMLElement or HTML string
  isBanner = false,
  autoDismiss = 0, // time in ms, 0 means no auto-dismiss
}) => {
  const alert = document.createElement('div');
  alert.className = `ds-alert ds-alert--${variant}`;
  if (isBanner) alert.classList.add('ds-alert--banner');
  
  // ARIA
  alert.setAttribute('role', variant === 'error' || variant === 'warning' ? 'alert' : 'status');
  alert.setAttribute('aria-live', variant === 'error' ? 'assertive' : 'polite');

  // Icon
  const iconContainer = document.createElement('div');
  iconContainer.className = 'ds-alert__icon';
  iconContainer.setAttribute('aria-hidden', 'true');
  iconContainer.innerHTML = icons[variant] || icons.info;
  alert.appendChild(iconContainer);

  // Content
  const content = document.createElement('div');
  content.className = 'ds-alert__content';

  if (title) {
    const titleEl = document.createElement('strong');
    titleEl.className = 'ds-alert__title';
    titleEl.innerText = title;
    content.appendChild(titleEl);
  }

  const messageEl = document.createElement('p');
  messageEl.className = 'ds-alert__message';
  messageEl.innerText = message;
  content.appendChild(messageEl);

  if (actions) {
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'ds-alert__actions';
    if (typeof actions === 'string') {
      actionsContainer.innerHTML = actions;
    } else {
      actionsContainer.appendChild(actions);
    }
    content.appendChild(actionsContainer);
  }

  alert.appendChild(content);

  // Dismiss Button
  if (dismissible) {
    const dismissBtn = document.createElement('button');
    dismissBtn.className = 'ds-alert__dismiss';
    dismissBtn.setAttribute('aria-label', 'Fechar alerta');
    dismissBtn.innerHTML = '<span aria-hidden="true">✕</span>';
    
    const dismiss = () => {
      alert.classList.add('ds-alert--dismissing');
      setTimeout(() => {
        if (alert.parentNode) {
          alert.parentNode.removeChild(alert);
        }
        onDismiss();
      }, 200);
    };

    dismissBtn.addEventListener('click', dismiss);
    alert.appendChild(dismissBtn);

    // ESC key support
    alert.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') dismiss();
    });
  }

  // Auto-dismiss logic
  if (autoDismiss > 0) {
    let timeoutId = setTimeout(() => {
      alert.querySelector('.ds-alert__dismiss')?.click();
    }, autoDismiss);

    // Pause on hover
    alert.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    alert.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => {
        alert.querySelector('.ds-alert__dismiss')?.click();
      }, 2000); // 2 seconds after leaving
    });
  }

  return alert;
};

/**
 * Singleton container for stacked alerts
 */
let alertContainer = null;

const ensureAlertContainer = () => {
  if (!alertContainer) {
    alertContainer = document.createElement('div');
    alertContainer.className = 'ds-alert-container';
    document.body.appendChild(alertContainer);
  }
  return alertContainer;
};

/**
 * Utility to show a stacked alert
 */
export const showAlert = (props) => {
  const container = ensureAlertContainer();
  const alert = createAlert(props);
  
  // New alerts on top
  if (container.firstChild) {
    container.insertBefore(alert, container.firstChild);
  } else {
    container.appendChild(alert);
  }

  // Entrance animation trigger
  alert.style.opacity = '0';
  alert.style.transform = 'translateY(-8px)';
  
  requestAnimationFrame(() => {
    alert.style.transition = 'opacity 200ms ease, transform 200ms ease';
    alert.style.opacity = '1';
    alert.style.transform = 'translateY(0)';
  });

  return alert;
};
