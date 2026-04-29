import './Toggle.css';

export const createToggle = ({
  checked = false,
  disabled = false,
  variant = 'primary',
  label,
  onChange,
  ariaLabel,
}) => {
  const container = document.createElement('label');
  container.className = `toggle toggle--${variant} ${checked ? 'toggle--on' : 'toggle--off'} ${disabled ? 'toggle--disabled' : ''}`;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'toggle__input';
  input.checked = checked;
  input.disabled = disabled;
  if (ariaLabel) input.setAttribute('aria-label', ariaLabel);

  const track = document.createElement('span');
  track.className = 'toggle__track';

  const thumb = document.createElement('span');
  thumb.className = 'toggle__thumb';

  track.appendChild(thumb);
  container.appendChild(input);
  container.appendChild(track);

  if (label) {
    const labelText = document.createElement('span');
    labelText.className = 'toggle__label-text';
    labelText.textContent = label;
    container.appendChild(labelText);
  }

  input.addEventListener('change', (e) => {
    container.classList.toggle('toggle--on', e.target.checked);
    container.classList.toggle('toggle--off', !e.target.checked);
    if (onChange) onChange(e.target.checked);
  });

  return container;
};
