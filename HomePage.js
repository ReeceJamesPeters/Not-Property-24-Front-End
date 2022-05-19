import { fetchProperties } from "./src/fetchProperties.js";
import { setStorageItem, getElement } from "./src/utils.js";
import { displayProperties, displayPropertiesFiltered } from "./src/displayProperties.js";
import { setupprops, props } from "./src/properties.js";

const init = async () => {
    const properties = await fetchProperties();
    if (properties){
        await setupprops(properties);
        console.log(properties);
        displayProperties(props, getElement('.props'))
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
    if (maxprice.value){
        filteredProps = filteredProps.filter((p) => {
            if (p.Price <= maxprice.value)
                return p;
        });
    }
    if (minprice.value){
        filteredProps = filteredProps.filter((p) => {
            if (p.Price >= minprice.value)
                return p;
        });
    }
    if (city.value){
        filteredProps = filteredProps.filter((p) => {
            if (p.City = city.value)
                return p;
        });
    }
    
    
    console.log(filteredProps);
    displayPropertiesFiltered(filteredProps, getElement('.props'));
});

window.addEventListener('DOMContentLoaded', init);