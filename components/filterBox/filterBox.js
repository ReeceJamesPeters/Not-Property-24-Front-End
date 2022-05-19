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
                    <button type="button" class="SubmitSearch"></button>
                </section>
                
                <section class="form-footer">
                    <select id="PropertyType" class="filter-item">
                        <option value="" disabled selected> Property Type </option>
                        <option value="2"> House </option>
                        <option value="1">  Apartment </option>
                        <option value="3"> Townhouse </option>
                    </select>

                    <section class="col-holder">
                        <select id="MinPrice" class="filter-item col" >
                            <option value="" disabled selected> Min Price </option>
                            <option value="100000"> 100 000</option>
                            <option value="500000"> 500 000</option>
                            <option value="1000000"> 1 000 000</option>
                            <option value="1500000"> 1 500 000</option>
                            <option value="2000000"> 2 000 000</option>
                        </select>
                        <select id="MaxPrice" class="filter-item col">
                            <option value="" disabled selected> Max Price </option>
                            <option value="1000000"> 1 000 000</option>
                            <option value="2000000"> 1 000 000</option>
                            <option value="3000000"> 3 000 000</option>
                            <option value="4000000"> 4 000 000</option>
                            <option value="5000000"> 5 000 000</option>
                        </select>
                    </section>

                    <section class="col-holder">
                        <select id="Bedrooms" class="filter-item col">
                            <option value="" disabled selected> Bedrooms </option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                        </select>
                        <select id="Bathrooms" class="filter-item col">
                            <option value="" disabled selected> Bathrooms </option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                        </select>
                    
                    </section>
                    
                </section>
                
            </form>
            
        </aside>
        
    </section>
`;

const filterBox = document.getElementById("filter-box");
filterBox.attachShadow({ mode: "open" });
filterBox.shadowRoot.appendChild(template.content.cloneNode(true));

// console.log(filterBox.shadowRoot);

// class FilterBox extends HTMLElement {
//   constructor() {
//     super();

//     // Shadow DOM
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(template.content.cloneNode(true));

//     const showHeader = this.getAttribute("showHeader");
//     const header = this.shadowRoot.querySelector("header");
//     const mainBox = this.shadowRoot.querySelector(".main-box");
//     if (showHeader && showHeader === "true") {
//       header.style.display = "block";
//       mainBox.style.alignItems = "start";
//     } else {
//       header.style.display = "none";
//       mainBox.style.alignItems = "center";
//     }
//   }
// }

// window.customElements.define("filter-box", FilterBox);
