import './Checkbox.css';

/**
 * Create a Checkbox component
 */
export const createCheckbox = ({
  label = '',
  id = `checkbox-${Math.random().toString(36).substr(2, 9)}`,
  checked = false,
  indeterminate = false,
  disabled = false,
  helperText = '',
  required = false,
  onChange = () => {},
}) => {
  const container = document.createElement('div');
  container.className = 'checkbox';
  if (indeterminate) {
    container.classList.add('checkbox--indeterminate');
  }

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'checkbox__input';
  input.id = id;
  input.checked = checked;
  input.indeterminate = indeterminate;
  input.disabled = disabled;
  if (required) {
    input.setAttribute('aria-required', 'true');
  }

  input.addEventListener('change', (e) => {
    // When manually changed, indeterminate state is usually cleared
    container.classList.remove('checkbox--indeterminate');
    onChange(e);
  });

  const labelElement = document.createElement('label');
  labelElement.className = 'checkbox__label';
  labelElement.setAttribute('for', id);

  const box = document.createElement('span');
  box.className = 'checkbox__box';

  const text = document.createElement('span');
  text.className = 'checkbox__text';
  text.innerText = label;

  labelElement.appendChild(box);
  labelElement.appendChild(text);

  container.appendChild(input);
  container.appendChild(labelElement);

  if (helperText) {
    const helper = document.createElement('span');
    helper.className = 'checkbox__helper';
    helper.innerText = helperText;
    container.appendChild(helper);
    
    const helperId = `${id}-helper`;
    helper.id = helperId;
    input.setAttribute('aria-describedby', helperId);
  }

  return container;
};

/**
 * Create a Checkbox Group component
 */
export const createCheckboxGroup = ({
  legend = '',
  options = [], // Array of checkbox configs
  helperText = '',
  error = false,
  required = false,
  orientation = 'vertical', // 'vertical' | 'horizontal'
}) => {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'checkbox-group';
  if (orientation === 'horizontal') {
    fieldset.classList.add('checkbox-group--horizontal');
  }
  if (error) {
    fieldset.classList.add('checkbox-group--error');
  }

  if (legend) {
    const legendElement = document.createElement('legend');
    legendElement.className = 'checkbox-group__legend';
    legendElement.innerText = legend;

    if (required) {
      const requiredIndicator = document.createElement('span');
      requiredIndicator.className = 'checkbox-group__required';
      requiredIndicator.innerText = '*';
      legendElement.appendChild(requiredIndicator);
      fieldset.setAttribute('aria-required', 'true');
    }

    fieldset.appendChild(legendElement);
  }

  if (error) {
    fieldset.setAttribute('aria-invalid', 'true');
  }

  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'checkbox-group__options';

  options.forEach((opt) => {
    const checkbox = createCheckbox(opt);
    optionsContainer.appendChild(checkbox);
  });

  fieldset.appendChild(optionsContainer);

  if (helperText) {
    const helper = document.createElement('span');
    helper.className = 'checkbox-group__helper';
    helper.innerText = helperText;
    fieldset.appendChild(helper);
    
    const groupId = `group-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = `${groupId}-helper`;
    helper.id = helperId;
    fieldset.setAttribute('aria-describedby', helperId);
  }

  return fieldset;
};
