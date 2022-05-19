import { setStorageItem,getStorageItem } from "./utils.js";

let props = getStorageItem('properties');

const fetchFrontImage = async (propID) => {
    const response = await fetch(`https://notproperty24.herokuapp.com/api/images/${propID}`).catch((err) => console.log(err));
    if (response){
        const img = await response.json();
        return img[0].ImageURL;
    }
    return response;
};

const setupprops = async (properties) => {
  
  // props = properties.map((property) => {
  //   const {
  //       PropertyID,PropertyName,Description,Price,Size,NoOfBedrooms,NoOfBathrooms,NoOfParkingSpaces,Furnished,ListingDate,OccupationDate,FirstName,LastName,EmailAddress,
  //       PhoneNumber,Street,Province,City
  //   } = property;
  //   const ImageURL = fetchFrontImage(PropertyID).then((x => {
  //     return x
  //   }))
  //   console.log(ImageURL);
  //   return {PropertyID,Price,PropertyName,Street,NoOfBedrooms,NoOfBathrooms,ImageURL}
  // });

  let props =[];

  for(var i =0; i<properties.length; i++){
      const {
          PropertyID,PropertyName,Description,Price,Size,NoOfBedrooms,NoOfBathrooms,NoOfParkingSpaces,Furnished,ListingDate,OccupationDate,FirstName,LastName,EmailAddress,
          PhoneNumber,Street,Province,City
      } = properties[i];
      const ImageURL = await fetchFrontImage(PropertyID);
      console.log(ImageURL);
      props[i]={PropertyID,Price,PropertyName,Street,NoOfBedrooms,NoOfBathrooms,ImageURL};
  }

  setStorageItem('properties', props);
};

console.log(props);
export { props, setupprops };