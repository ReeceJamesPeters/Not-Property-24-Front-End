
const displayProperties = (properties, element) => {
    let propCards = properties.map((p) => {
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
    })
    let htmlThing = `<div class="Properties">`;
    for (let c = 0; c < 3; c++) {
      htmlThing += propCards[c ];
    }
    htmlThing += "</div>";

    element.innerHTML = htmlThing;
    
};

const displayPropertiesFiltered = (properties, element) => {
    let propCards = properties.map((p) => {
      const {
        PropertyID,
        Price,
        PropertyName,
        Street,
        NoOfBedrooms,
        NoOfBathrooms,
        ImageURL,
      } = p;
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
          </div>`;
    });
    let divCount = Math.floor(propCards.length / 3);
    let htmlThing = "";
    for (let i = 0; i < divCount; i++) {
      htmlThing += `<div class="Properties">`;
      let offset = i * 3;
      for (let c = 0; c < 3; c++) {
        //   count = c+offset;
        //   if(count<propCards.length){
             htmlThing += propCards[c + offset];
        //   }
      }
      htmlThing += "</div>";
    }
    element.innerHTML = htmlThing;
  };

export {displayProperties, displayPropertiesFiltered};

