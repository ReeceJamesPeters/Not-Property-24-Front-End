const template = document.createElement("template");
template.innerHTML = `
    <style>
    @import "/components/header/header.css";
    </style>
    <header>
        <nav class="navbar">
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <a href="#default" class="nav-branding" >
                <img src="../../assets/Logo.svg"/>
            </a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Buy</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Rent</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Sell</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link login">Login</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link sign-up">Sign Up</a>
                </li>
            </ul>
            
        </nav>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    // Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector(".hamburger").addEventListener("click", ()=>{
        this.shadowRoot.querySelector(".hamburger").classList.toggle('active');
        this.shadowRoot.querySelector(".nav-menu").classList.toggle('active');
    })

    this.shadowRoot.querySelectorAll(".nav-link").forEach( n =>{
        n.addEventListener("click", () =>{
            this.shadowRoot.querySelector(".hamburger").classList.remove(active);
            this.shadowRoot.querySelector(".nav-menu").classList.remove(active);
        })
    })

  }
}

window.customElements.define("custom-header", Header);