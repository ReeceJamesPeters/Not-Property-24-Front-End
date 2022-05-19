//import {allPropertiesEndPoint} from './utils';

const fetchProperties = async () => {
    const response = await fetch('https://tilnwqzb47.execute-api.af-south-1.amazonaws.com/dev/api/property').catch((err) => console.log(err));
    if (response){
        return response.json();
    }
    return response;
};

export { fetchProperties};