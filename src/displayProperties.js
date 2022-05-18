const displayProperties = (properties, element) => {
    element.innerHTML = properties.map((p) => {
        const {PropertyID,ImageURL,Price,PropertyName,Street,NoOfBedrooms,NoOfBathrooms} = p;
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
    })
    
};

export {displayProperties};

