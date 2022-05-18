import { setStorageItem,getStorageItem } from "./utils.js";

let props = getStorageItem('properties');
const setupprops = (properties) => {
  props = properties.map((property) => {
    const {
        PropertyID,PropertyName,Description,Price,Size,NoOfBedrooms,NoOfBathrooms,NoOfParkingSpaces,Furnished,ListingDate,OccupationDate,FirstName,LastName,EmailAddress,
        ImageURL,PhoneNumber,Street,Province,City
    } = property;
    return {PropertyID,ImageURL,PropertyName,Description,Price,Size,NoOfBedrooms,NoOfBathrooms,NoOfParkingSpaces,Furnished,ListingDate,OccupationDate,FirstName,LastName,EmailAddress
      ,PhoneNumber,Street,Province,City}
  });
  setStorageItem('properties', props);
};
console.log(props);
export { props, setupprops };