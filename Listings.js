const displayPropertiesFilters = (properties, element) => {
    console.log('In filter' + properties)
    element.innerHTML = properties.map((p) => {
        const {PropertyID,Price,PropertyName,Street,NoOfBedrooms,NoOfBathrooms,ImageURL} = p;
           return `<div class="Propertycard">
                <a href="PropertyDetailsPage.html?id=${PropertyID}">
                    <img src="${ImageURL}" alt="House-Image" style="width:100%">
                </a>
                <div class="PropertyInfo">
                    <h3><b>R ${Price}</b></h3>
                    <p><b>${PropertyName}</b></p>
                    <p>${Street}</p>
                    <row class="icons">
                        <i class="fa fa-home" aria-hidden="true">${NoOfBedrooms}</i>
                        <i class="fa fa-bath" aria-hidden="true">${NoOfBathrooms}</i>
                    </row>
                </div>
        </div>` 
    }).join('')
    
};

export {displayPropertiesFilters};