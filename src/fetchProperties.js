//import {allPropertiesEndPoint} from './utils';

const fetchProperties = async () => {
    const response = await fetch('https://tilnwqzb47.execute-api.af-south-1.amazonaws.com/dev/api/listingType').catch((err) => console.log(err));
    if (response.ok){
        return response.json();   
    }
    return response;
};

export { fetchProperties};