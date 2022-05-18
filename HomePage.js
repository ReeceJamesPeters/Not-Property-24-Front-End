import { fetchProperties } from "./src/fetchProperties.js";
import { setStorageItem, getElement } from "./src/utils.js";
import { displayProperties } from "./src/displayProperties.js";
import { setupprops, props } from "./src/properties.js";

const init = async () => {
    const properties = await fetchProperties();
    if (properties){
        setupprops(properties);
        displayProperties(props, getElement('.Properties'))
    }
};

window.addEventListener('DOMContentLoaded', init);