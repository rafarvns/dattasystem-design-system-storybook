import './Badge.css';

export const createBadge = ({
  label,
  variant = 'info',
  size = 'md',
  icon,
}) => {
  const badge = document.createElement('span');
  badge.className = `badge badge--${variant} badge--${size}`;

  if (icon) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'badge__icon';
    iconSpan.innerHTML = icon;
    badge.appendChild(iconSpan);
  }

  const labelSpan = document.createElement('span');
  labelSpan.className = 'badge__label';
  labelSpan.textContent = label;
  badge.appendChild(labelSpan);

  return badge;
};
