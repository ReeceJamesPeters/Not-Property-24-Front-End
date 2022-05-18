const displayProperties = (properties, element) => {
    element.innerHTML = properties.map((p) => {
        const {PropertyID,ImageURL} = p;
           return `<div class="Propertycard">
            <img src="${ImageURL}" alt="House" style="width:100%">
                <div class="PropertyInfo">
                    <h3><b>${PropertyID}</b></h3>
                    <p><b> 4 Bedroom House in Clifton</b></p>
                    <p>82 Sutherland Road, Clifton</p>
                    <row class="icons">
                        <i class="fa fa-home" aria-hidden="true"> 4 </i>
                        <i class="fa fa-bath" aria-hidden="true"> 3 </i>
        
                    </row>
                </div>
        </div>` 
    })
    
};

export {displayProperties};

