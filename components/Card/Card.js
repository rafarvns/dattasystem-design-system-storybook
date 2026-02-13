import './Card.css';

/**
 * Creates a Card component
 */
export const createCard = ({
  title = '',
  icon = '',
  badge = null,
  headerAction = null,
  body = '',
  footer = null,
  variant = 'default',
  compact = false,
  headerDivider = false,
  footerDivider = false,
  onClick = null,
  href = null,
  ariaLabel = '',
}) => {
  const cardElement = (onClick || href) ? document.createElement('a') : document.createElement('article');
  
  cardElement.className = 'card';
  if (variant === 'featured-info') cardElement.classList.add('card--featured-info');
  if (variant === 'featured-danger') cardElement.classList.add('card--featured-danger');
  if (compact) cardElement.classList.add('card--compact');
  
  if (onClick || href) {
    cardElement.classList.add('card--clickable');
    if (href) cardElement.setAttribute('href', href);
    if (onClick) cardElement.addEventListener('click', onClick);
    if (ariaLabel) cardElement.setAttribute('aria-label', ariaLabel);
  }

  // Header
  if (title || icon || badge || headerAction) {
    const header = document.createElement('header');
    header.className = 'card__header';
    if (headerDivider) header.classList.add('card__header--with-divider');

    if (icon) {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'card__icon';
      iconSpan.innerHTML = icon;
      header.appendChild(iconSpan);
    }

    if (title) {
      const titleElement = document.createElement('h3');
      titleElement.className = 'card__title';
      titleElement.innerText = title;
      header.appendChild(titleElement);
    }

    if (badge) {
      const badgeContainer = document.createElement('span');
      badgeContainer.className = 'card__badge';
      if (typeof badge === 'string') {
        badgeContainer.innerText = badge;
      } else {
        badgeContainer.appendChild(badge);
      }
      header.appendChild(badgeContainer);
    }

    if (headerAction) {
      const actionContainer = document.createElement('span');
      actionContainer.className = 'card__header-action';
      if (typeof headerAction === 'string') {
        actionContainer.innerHTML = headerAction;
      } else {
        actionContainer.appendChild(headerAction);
      }
      header.appendChild(actionContainer);
    }

    cardElement.appendChild(header);
  }

  // Body
  const bodyContainer = document.createElement('div');
  bodyContainer.className = 'card__body';
  if (typeof body === 'string') {
    bodyContainer.innerHTML = body;
  } else {
    bodyContainer.appendChild(body);
  }
  cardElement.appendChild(bodyContainer);

  // Footer
  if (footer) {
    const footerElement = document.createElement('footer');
    footerElement.className = 'card__footer';
    if (footerDivider) footerElement.classList.add('card__footer--with-divider');
    
    if (typeof footer === 'string') {
      footerElement.innerHTML = footer;
    } else {
      footerElement.appendChild(footer);
    }
    cardElement.appendChild(footerElement);
  }

  return cardElement;
};

/**
 * Helper to create a Label-Value pair for the card body
 */
export const createCardDataPair = (label, value) => {
  const container = document.createElement('div');
  container.className = 'card__data-pair';

  const labelElement = document.createElement('span');
  labelElement.className = 'card__data-label';
  labelElement.innerText = label;

  const valueElement = document.createElement('span');
  valueElement.className = 'card__data-value';
  valueElement.innerText = value;

  container.appendChild(labelElement);
  container.appendChild(valueElement);

  return container;
};
