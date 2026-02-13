import './Modal.css';

/**
 * Creates the Modal component
 */
export const createModal = ({
  title = 'Título do Modal',
  content = 'Conteúdo do modal.',
  footerActions = [], // Array de elementos Button
  size = 'md', // sm, md, lg, fullscreen
  id = `modal-${Math.floor(Math.random() * 1000)}`,
  onClose = () => {},
  closeOnOverlayClick = true,
}) => {
  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'ds-modal-overlay';
  overlay.id = `${id}-overlay`;

  // Modal Container
  const modal = document.createElement('div');
  modal.className = `ds-modal ds-modal--${size}`;
  modal.id = id;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', `${id}-title`);
  modal.setAttribute('tabindex', '-1');

  // Header
  const header = document.createElement('header');
  header.className = 'ds-modal__header';

  const titleEl = document.createElement('h2');
  titleEl.className = 'ds-modal__title';
  titleEl.id = `${id}-title`;
  titleEl.innerText = title;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'ds-modal__close';
  closeBtn.setAttribute('aria-label', 'Fechar modal');
  closeBtn.innerHTML = '<span aria-hidden="true">✕</span>';

  header.appendChild(titleEl);
  header.appendChild(closeBtn);
  modal.appendChild(header);

  // Body
  const body = document.createElement('div');
  body.className = 'ds-modal__body';
  body.id = `${id}-body`;
  
  if (typeof content === 'string') {
    body.innerHTML = content;
  } else if (content instanceof HTMLElement) {
    body.appendChild(content);
  }
  
  modal.appendChild(body);
  modal.setAttribute('aria-describedby', `${id}-body`);

  // Footer
  if (footerActions && footerActions.length > 0) {
    const footer = document.createElement('footer');
    footer.className = 'ds-modal__footer';
    footerActions.forEach(action => {
      footer.appendChild(action);
    });
    modal.appendChild(footer);
  }

  overlay.appendChild(modal);

  // Focus Trap and Management
  let previousActiveElement = null;

  const open = () => {
    previousActiveElement = document.activeElement;
    document.body.appendChild(overlay);
    
    // Força reflow para animação
    overlay.offsetHeight;
    
    overlay.classList.add('ds-modal-overlay--open');
    document.body.classList.add('ds-modal-open');
    
    // Focus first element (close button or first focusable in body/footer)
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      modal.focus();
    }

    // Trap focus
    document.addEventListener('keydown', handleKeydown);
  };

  const close = () => {
    overlay.classList.remove('ds-modal-overlay--open');
    document.body.classList.remove('ds-modal-open');
    
    document.removeEventListener('keydown', handleKeydown);

    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      if (previousActiveElement && previousActiveElement.focus) {
        previousActiveElement.focus();
      }
      onClose();
    }, 200); // Deve bater com a duração da transição no CSS
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      close();
      return;
    }

    if (e.key === 'Tab') {
      const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement || document.activeElement === modal) {
          e.preventDefault();
          lastElement.focus();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  closeBtn.addEventListener('click', close);
  
  if (closeOnOverlayClick) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        close();
      }
    });
  }

  // Retornamos as funções de controle e o elemento
  return {
    element: overlay,
    open,
    close
  };
};
