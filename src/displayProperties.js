const displayProperties = (properties, element) => {
  let x = properties.map((p) => {
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
  let htmlThing = "";
  for (var c = 0; c < 3; c++) {
    htmlThing += x[c];
  }

  element.innerHTML = htmlThing;
};

export { displayProperties };
