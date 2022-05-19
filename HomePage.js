import { fetchProperties } from "./src/fetchProperties.js";
import { setStorageItem, getElement } from "./src/utils.js";
import { displayProperties } from "./src/displayProperties.js";
import { setupprops, props } from "./src/properties.js";
import { displayPropertiesFilters } from "./Listings.js";

const init = async () => {
    const properties = await fetchProperties();
    if (properties){
        await setupprops(properties);
        console.log(properties);
        displayProperties(props, getElement('.Properties'))
    }
};

document.querySelector(".SubmitSearch").addEventListener("click", () => {
    const bedrooms = document.getElementById('Bedrooms');
    const bathrooms = document.getElementById('Bathrooms');
    const propertyType = document.getElementById('PropertyType');
    const minprice = document.getElementById('MinPrice');
    const maxprice = document.getElementById('MaxPrice');
    const city = document.getElementById('city');
    let filteredProps = props;
    if (bedrooms.value){
    filteredProps = filteredProps.filter((p) => {
        if (p.NoOfBedrooms >= bedrooms.value)
            return p;
    });
}
    if (bathrooms.value){
    filteredProps = filteredProps.filter((p) => {
        if (p.NoOfBathrooms >= bathrooms.value)
            return p;
    });
}
    
    console.log(filteredProps);
    displayPropertiesFilters(filteredProps, getElement('.Properties'));
});

window.addEventListener('DOMContentLoaded', init);