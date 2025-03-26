class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
      <a href="tel:042162053">Bokning Norr: 042-162053</a>
      <a href="tel:040-6802350">Bokning Syd: 040-6802350</a>
      <a href="mailto:bokning@sydschakt.se">Maila Bokningen</a>
    </div>
    `
  }
}

customElements.define("footer-component", Footer);