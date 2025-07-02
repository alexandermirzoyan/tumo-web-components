class InputComponent extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('id') || Date.now();
    const label = this.getAttribute('label');
    const placeholder = this.getAttribute('placeholder');
    const defaultValue = this.getAttribute('default-value') || null;
    const type = this.getAttribute('type') || '';

    this.innerHTML = `
      <div class="t-input-group">
        ${label ? `<label for="t-${id}">${label}</label>` : ''}
        <input
          id="t-${id}"
          type="${type}"
          class="t-input"
          placeholder="${placeholder}"
          ${defaultValue ? `value=${defaultValue}` : ''}
        >
      </div>
    `;
  }
}

customElements.define('t-input', InputComponent);
