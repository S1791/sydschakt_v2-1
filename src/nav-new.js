class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="pages">
        <a id="logo" href="index.html"><img src="img/sydschakt-logo.png" width="100px" alt="sydschakt logo"></a>
        <a class="logo-small" href="index.html"><img class="logo-small" src="favicons/apple-touch-icon.png" alt="sydschakt logo"></a>
        <a href="about.html">Om</a>
        <a href="gallery.html">Galleri</a>
        <a href="contact.html">Kontakt</a>
        <a href="#">Mer</a>
      </div>
    `
  }
}

customElements.define("nav-component", Nav);