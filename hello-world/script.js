class HelloWorldComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Hello TUMOian</h1>
    `;
  }
}

customElements.define('t-hello', HelloWorldComponent);
