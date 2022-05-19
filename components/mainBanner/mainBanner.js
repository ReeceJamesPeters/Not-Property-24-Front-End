const template = document.createElement("template");
template.innerHTML = `
    <style>
    @import "/components/mainBanner/mainBanner.css";
    </style>
    <section class="background">
    </section>
    <section class="banner-content">
        <p class="heading">Buy, Rent or Sell Your Property</p>
        <p class="sub-heading">Find your best property at the best price</p>
        <slot name="filter-box"/>
    </section>
    <slot class="slot" name="filter-box"/>
    
`;

class MainBanner extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    // Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }
}

window.customElements.define("main-banner", MainBanner);