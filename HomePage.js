import { fetchProperties } from "./src/fetchProperties.js";
import { setStorageItem, getElement } from "./src/utils.js";
import {
  displayProperties,
  displayPropertiesFiltered,
} from "./src/displayProperties.js";
import { setupprops, props } from "./src/properties.js";

const init = async () => {
  const properties = await fetchProperties();
  if (properties) {
    await setupprops(properties);
    console.log(properties);
    displayProperties(props, getElement(".props"));
  }
};

document
  .getElementById("filter-box")
  .shadowRoot.querySelector(".SubmitSearch")
  .addEventListener("click", () => {
    const bedrooms = document
      .getElementById("filter-box")
      .shadowRoot.getElementById("Bedrooms");

    const bathrooms = document
      .getElementById("filter-box")
      .shadowRoot.getElementById("Bathrooms");

    // const propertyType = document
    //   .getElementById("filter-box")
    //   .shadowRoot.getElementById("PropertyType");

    // const minprice = document
    //   .getElementById("filter-box")
    //   .shadowRoot.getElementById("MinPrice");

    // const maxprice = document
    //   .getElementById("filter-box")
    //   .shadowRoot.getElementById("MaxPrice");

    // const city = document.getElementById("filter-box").shadowRoot.getElementById("city");

    let filteredProps = props;

    if (bedrooms.value) {
      filteredProps = filteredProps.filter((p) => {
        if (p.NoOfBedrooms >= bedrooms.value) return p;
      });
    }

    if (bathrooms.value) {
      filteredProps = filteredProps.filter((p) => {
        if (p.NoOfBathrooms >= bathrooms.value) return p;
      });
    }

    console.log(filteredProps);

    displayPropertiesFiltered(filteredProps, getElement(".props"));
  });
window.addEventListener("DOMContentLoaded", init);
