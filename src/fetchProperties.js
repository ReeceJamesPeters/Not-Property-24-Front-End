//import {allPropertiesEndPoint} from './utils';

const fetchProperties = async () => {
    const response = await fetch('https://notproperty24.herokuapp.com/api/property').catch((err) => console.log(err));
    if (response){
        return response.json();
    }
    return response;
};

export { fetchProperties};