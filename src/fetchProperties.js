//import {allPropertiesEndPoint} from './utils';

const fetchProperties = async () => {
    const response = await fetch('http://ec2-13-245-85-93.af-south-1.compute.amazonaws.com:5001/api/property').catch((err) => console.log(err));
    if (response){
        return response.json();
    }
    return response;
};

export { fetchProperties};