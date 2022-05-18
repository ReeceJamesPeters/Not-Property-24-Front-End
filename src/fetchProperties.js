//import {allPropertiesEndPoint} from './utils';

const fetchProperties = async () => {
    const response = await fetch('http://localhost:5001/api/property').catch((err) => console.log(err));
    if (response){
        return response.json();
    }
    return response;
};

export { fetchProperties};