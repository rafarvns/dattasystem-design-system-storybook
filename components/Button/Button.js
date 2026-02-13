import './Button.css';

/**
 * Funçăo para criar o componente Button do Datta System.
 * 
 * @param {Object} props - Propriedades do botăo.
 * @param {string} props.label - Texto do botăo.
 * @param {string} props.variant - Variante: 'primary', 'secondary', 'destructive', 'ghost'.
 * @param {string} props.size - Tamanho: 'sm', 'md', 'lg'.
 * @param {boolean} props.disabled - Estado desabilitado.
 * @param {boolean} props.loading - Estado de carregamento.
 * @param {string} props.iconLeft - HTML do ícone ŕ esquerda.
 * @param {string} props.iconRight - HTML do ícone ŕ direita.
 * @param {boolean} props.iconOnly - Se o botăo contém apenas ícone.
 * @param {string} props.ariaLabel - Label acessível para botőes icon-only ou loading.
 * @param {Function} props.onClick - Funçăo de clique.
 * @param {boolean} props.block - Se o botăo deve ocupar 100% da largura.
 * @returns {HTMLButtonElement}
 */
export const createButton = ({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  iconOnly = false,
  ariaLabel,
  onClick,
  block = false,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  
  // Classes base e modificadores
  const classes = ['btn', `btn--${variant}`, `btn--${size}`];
  if (loading) classes.push('btn--loading');
  if (iconOnly) classes.push('btn--icon-only');
  if (block) classes.push('btn--block');
  
  btn.className = classes.join(' ');

  // Acessibilidade
  if (disabled) {
    btn.disabled = true;
  }
  
  if (loading) {
    btn.setAttribute('aria-busy', 'true');
  }

  if (ariaLabel || iconOnly) {
    btn.setAttribute('aria-label', ariaLabel || label);
  }

  // Conteúdo do Botăo
  if (!iconOnly) {
    // Ícone ŕ esquerda
    if (iconLeft) {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'btn__icon btn__icon--left';
      iconSpan.innerHTML = iconLeft;
      btn.appendChild(iconSpan);
    }

    // Texto
    const labelSpan = document.createElement('span');
    labelSpan.className = 'btn__label';
    labelSpan.innerText = label;
    btn.appendChild(labelSpan);

    // Ícone ŕ direita
    if (iconRight) {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'btn__icon btn__icon--right';
      iconSpan.innerHTML = iconRight;
      btn.appendChild(iconSpan);
    }
  } else if (iconLeft || iconRight) {
    // Apenas ícone
    const iconSpan = document.createElement('span');
    iconSpan.className = 'btn__icon';
    iconSpan.innerHTML = iconLeft || iconRight;
    btn.appendChild(iconSpan);
  }

  // Evento de clique
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  return btn;
};
