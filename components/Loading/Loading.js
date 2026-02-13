import './Loading.css';

/**
 * Creates a Skeleton element.
 */
export const createSkeleton = ({ type = 'line', width, height } = {}) => {
    const el = document.createElement('div');
    el.className = `ds-skeleton ds-skeleton--${type}`;
    if (width) el.style.width = width;
    if (height) el.style.height = height;
    el.setAttribute('aria-hidden', 'true');
    return el;
};

/**
 * Creates a Skeleton Card.
 */
export const createCardSkeleton = () => {
    const card = document.createElement('div');
    card.className = 'ds-skeleton-card';
    card.appendChild(createSkeleton({ type: 'title' }));
    card.appendChild(createSkeleton({ type: 'line' }));
    card.appendChild(createSkeleton({ type: 'line', width: '80%' }));
    return card;
};

/**
 * Creates a Skeleton Table.
 */
export const createTableSkeleton = ({ rows = 5 } = {}) => {
    const table = document.createElement('div');
    table.className = 'ds-skeleton-table';

    const header = document.createElement('div');
    header.className = 'ds-skeleton-table__header';
    for (let i = 0; i < 4; i++) header.appendChild(createSkeleton({ type: 'cell' }));
    table.appendChild(header);

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'ds-skeleton-table__row';
        for (let j = 0; j < 4; j++) row.appendChild(createSkeleton({ type: 'cell' }));
        table.appendChild(row);
    }

    return table;
};

/**
 * Creates a Skeleton Form.
 */
export const createFormSkeleton = () => {
    const form = document.createElement('div');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = 'var(--ds-spacing-16)';

    for (let i = 0; i < 3; i++) {
        form.appendChild(createSkeleton({ type: 'label' }));
        form.appendChild(createSkeleton({ type: 'input' }));
    }
    return form;
};

/**
 * Creates a Spinner.
 */
export const createSpinner = ({ size = 'md', text = '' } = {}) => {
    const container = document.createElement('div');
    container.className = `ds-spinner ds-spinner--${size}`;
    container.setAttribute('role', 'status');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'ds-spinner__icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');

    const track = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    track.setAttribute('class', 'ds-spinner__track');
    track.setAttribute('cx', '12');
    track.setAttribute('cy', '12');
    track.setAttribute('r', '10');
    svg.appendChild(track);

    const indicator = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    indicator.setAttribute('class', 'ds-spinner__indicator');
    indicator.setAttribute('cx', '12');
    indicator.setAttribute('cy', '12');
    indicator.setAttribute('r', '10');
    svg.appendChild(indicator);

    container.appendChild(svg);

    if (text) {
        const textEl = document.createElement('span');
        textEl.className = 'ds-spinner__text';
        textEl.innerText = text;
        container.appendChild(textEl);
    } else {
        const srText = document.createElement('span');
        srText.className = 'ds-sr-only';
        srText.innerText = 'Carregando...';
        container.appendChild(srText);
    }

    return container;
};

/**
 * Creates a Loading Overlay.
 */
export const createLoadingOverlay = ({ text = 'Processando...' } = {}) => {
    const overlay = document.createElement('div');
    overlay.className = 'ds-loading-overlay';
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-live', 'polite');

    const content = document.createElement('div');
    content.className = 'ds-loading-overlay__content';

    content.appendChild(createSpinner({ size: 'lg' }));

    const textEl = document.createElement('span');
    textEl.className = 'ds-spinner__text';
    textEl.style.color = 'var(--ds-color-neutral-700)';
    textEl.innerText = text;
    content.appendChild(textEl);

    overlay.appendChild(content);
    return overlay;
};

/**
 * Creates a Progress Bar.
 */
export const createProgressBar = ({ progress = 0, label = '' } = {}) => {
    const container = document.createElement('div');
    container.className = 'ds-progress';
    container.setAttribute('role', 'progressbar');
    container.setAttribute('aria-valuenow', progress);
    container.setAttribute('aria-valuemin', '0');
    container.setAttribute('aria-valuemax', '100');
    if (label) container.setAttribute('aria-label', label);

    const track = document.createElement('div');
    track.className = 'ds-progress__track';

    const fill = document.createElement('div');
    fill.className = 'ds-progress__fill';
    fill.style.width = `${progress}%`;

    track.appendChild(fill);
    container.appendChild(track);

    const progressLabel = document.createElement('span');
    progressLabel.className = 'ds-progress__label';
    progressLabel.innerText = `${progress}%`;
    container.appendChild(progressLabel);

    return container;
};
