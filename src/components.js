// class Nav extends HTMLElement {
//   // The browser calls this method when the element is
//   // added to the DOM.

//   connectedCallback() {
//     this.innerHTML = `
    
//   <nav class="hamburger">
//     <div>
//       <input id="toggle1" type="checkbox" />
//       <label class="hamburgerToggle" for="toggle1">
//         <div class="top"></div>
//         <div class="meat"></div>
//         <div class="bottom"></div>
//       </label>
//     </div>
//     <div class="navmenu">
//       <a class="navlink" href="index.html">Home</a>
//       <a class="navlink" href="legal.html">Legal</a>
//       <a class="navlink" href="research.html">Research</a>
//       <a class="navlink" href="contact.html">Contact</a>
//     </div>
//   </nav>
// `
//   };
// };

// customElements.define("nav-component", Nav);

class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="nav-bar">
      <div id="nav-logo">
        <a href="index.html"><img id="logotype" src="img/sydschakt-logo.png" alt="sydschakt logotype"></a>
      </div>
    <div class="nav-links">
        <ul id="nav-links">
          <li><a href="index.html">Hem</a></li>
          <li><a href="about.html">Om oss</a></li>
          <li><a href="gallery.html">Galleri</a></li>
          <li><a href="contact.html">Kontakt</a></li>
        </ul>
    </div>
    <div class="three col">
      <div class="hamburger" id="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="nav-menu" id="nav-menu">
        <ul>
          <li><a href="/index.html">Hem</a></li>
          <li><a href="/about.html">Om Sydschakt</a></li>
          <li><a href="/contact.html">Kontakt</a></li>
        </ul>
      </div>
    </div>
    </div>



  `
  }


}

customElements.define("nav-component", Nav);

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
