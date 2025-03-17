class Nav extends HTMLElement {
    // The browser calls this method when the element is
    // added to the DOM.
  
    connectedCallback() {
      this.innerHTML = `
      
      <div id="nav-bar" class="cream">
        <a href="index.html"><img class="nav-logo" src="img/GG-logo-symbol-141px-black.png" height="30px" alt=""/></a>
      
        <div id="nav-items">
          <a class="nav-item" href="index.html">Hem</a>
          <a class="nav-item" href="ledarskap.html">Ledarskap</a>
          <a class="nav-item" href="kommunikation.html">Kommunikation</a>
          <a class="nav-item" href="kreativitet.html">Kreativitet</a>
          <a class="nav-item" href="contact.html">Kontakt</a>
        
          <div id="hamburger">
            <div id="ham-nav" class="navigation" role="navigation">
              <input id="toggleHam" type="checkbox" />
              <label class="hamburger" for="toggleHam">
                <div class="top"></div>
                <div class="meat"></div>
                <div class="bottom"></div>
              </label>
            
            <div id="hamburger-links">
              <a class="ham-link" href="ledarskap.html">Ledarskap</a>
              <a class="ham-link" href="kommunikation.html">Kommunikation</a>
              <a class="ham-link" href="kreativitet.html">Kreativitet</a>
              <a class="ham-link" href="contact.html">Kontakt</a>
            </div>
  
          </div>
        </div>
      </div>
    </div>
    `
    }
  }
  
  customElements.define('nav-component', Nav);
  