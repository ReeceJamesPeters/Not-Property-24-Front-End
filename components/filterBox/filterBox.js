const template = document.createElement("template");
template.innerHTML = `
    <style>
    @import "/components/filterBox/filterBox.css";
    </style>
    <section class="filter-box">
        <header class="header">
            <button class="filter-button active-filter-button">Buy</button>
            <button class="filter-button">Rent</button>
        </header>
        <aside class="main-box">
            <form>
                <section class="form-header">
                    <input type="text" placeholder="Search">
                    <button type="submit"></button>
                </section>
                
                <section class="form-footer">
                    <select class="filter-item">
                        <option value="" disabled selected> Property Type </option>
                        <option> House </option>
                        <option> Apartment </option>
                        <option> Townhouse </option>
                    </select>

                    <section class="col-holder">
                        <select class="filter-item col" >
                            <option value="" disabled selected> Min Price </option>
                            <option> 100 000</option>
                            <option> 200 000</option>
                            <option> 300 000</option>
                            <option> 400 000</option>
                            <option> 500 000</option>
                        </select>
                        <select class="filter-item col">
                            <option value="" disabled selected> Max Price </option>
                            <option> 1000 000 </option>
                            <option> 2000 000 </option>
                            <option> 3000 000 </option>
                            <option> 4000 000 </option>
                            <option> 5000 000 </option>
                        </select>
                    </section>

                    <section class="col-holder">
                        <select class="filter-item col">
                            <option value="" disabled selected> Bedrooms </option>
                            <option> 1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                            <option> 4 </option>
                            <option> 5 </option>
                        </select>
                        <select class="filter-item col">
                            <option value="" disabled selected> Bathrooms </option>
                            <option> 1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                            <option> 4 </option>
                            <option> 5 </option>
                        </select>
                    
                    </section>
                    
                </section>
                
            </form>
            
        </aside>
        
    </section>
`;

class FilterBox extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const showHeader = this.getAttribute("showHeader");
    const header = this.shadowRoot.querySelector("header");
    const mainBox = this.shadowRoot.querySelector(".main-box");
    if (showHeader && showHeader === "true") {
      header.style.display = "block";   
      mainBox.style.alignItems = "start";
      
    } else {
      header.style.display = "none";
      mainBox.style.alignItems = "center";
    }
  }
}

window.customElements.define("filter-box", FilterBox);
