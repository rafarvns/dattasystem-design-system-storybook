import './Tooltip.css';

/**
 * Creates a Tooltip component
 */
export const createTooltip = ({
  trigger,
  text = 'Tooltip text',
  shortcut = '',
  position = 'top', // top, right, bottom, left
  id = `tooltip-${Math.floor(Math.random() * 1000)}`,
  enterDelay = 300,
  exitDelay = 100,
}) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'ds-tooltip-wrapper';

  // Trigger
  let triggerElement;
  if (typeof trigger === 'string') {
    const span = document.createElement('span');
    span.innerHTML = trigger;
    triggerElement = span;
  } else {
    triggerElement = trigger;
  }
  
  triggerElement.setAttribute('aria-describedby', id);
  wrapper.appendChild(triggerElement);

  // Tooltip
  const tooltip = document.createElement('div');
  tooltip.className = `ds-tooltip ds-tooltip--${position}`;
  tooltip.id = id;
  tooltip.setAttribute('role', 'tooltip');

  const textSpan = document.createElement('span');
  textSpan.className = 'ds-tooltip__text';
  textSpan.innerText = text;
  tooltip.appendChild(textSpan);

  if (shortcut) {
    const shortcutSpan = document.createElement('span');
    shortcutSpan.className = 'ds-tooltip__shortcut';
    shortcutSpan.innerHTML = `<kbd>${shortcut}</kbd>`;
    tooltip.appendChild(shortcutSpan);
  }

  const arrow = document.createElement('span');
  arrow.className = 'ds-tooltip__arrow';
  arrow.setAttribute('aria-hidden', 'true');
  tooltip.appendChild(arrow);

  wrapper.appendChild(tooltip);

  // Logic
  let showTimeout;
  let hideTimeout;

  const show = () => {
    clearTimeout(hideTimeout);
    showTimeout = setTimeout(() => {
      tooltip.classList.add('ds-tooltip--visible');
      repositionIfCollision();
    }, enterDelay);
  };

  const hide = () => {
    clearTimeout(showTimeout);
    hideTimeout = setTimeout(() => {
      tooltip.classList.remove('ds-tooltip--visible');
    }, exitDelay);
  };

  const repositionIfCollision = () => {
    const rect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newPosition = position;

    if (position === 'top' && rect.top < 0) newPosition = 'bottom';
    else if (position === 'bottom' && rect.bottom > viewportHeight) newPosition = 'top';
    else if (position === 'left' && rect.left < 0) newPosition = 'right';
    else if (position === 'right' && rect.right > viewportWidth) newPosition = 'left';

    if (newPosition !== position) {
      tooltip.className = `ds-tooltip ds-tooltip--${newPosition} ds-tooltip--visible`;
    }
  };

  triggerElement.addEventListener('mouseenter', show);
  triggerElement.addEventListener('mouseleave', hide);
  triggerElement.addEventListener('focus', show);
  triggerElement.addEventListener('blur', hide);

  // Maintain visible if mouse is over tooltip
  tooltip.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
  tooltip.addEventListener('mouseleave', hide);

  // Keyboard
  triggerElement.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      tooltip.classList.remove('ds-tooltip--visible');
      clearTimeout(showTimeout);
    }
  });

  return wrapper;
};
