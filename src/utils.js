//const allPropertiesEndPoint = 'http://localhost:5001/api/property';

const setStorageItem = (name,item) => {
    localStorage.setItem(name, JSON.stringify(item));
}

const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);
    if (setStorageItem){
      storageItem = JSON.parse(localStorage.getItem(item));
    } else{
      storageItem = [];
    }
    return storageItem;
  };

const getElement = (target) => {
    const element = document.querySelector(target);
    if (element)
        return element;
    throw new Error(
        `Please check ${target}`
    );
}

export { setStorageItem, getElement, getStorageItem};