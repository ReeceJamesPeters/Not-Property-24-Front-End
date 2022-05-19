const getElement = (target) => {
  const element = document.querySelector(target);
  if (element)
      return element;
  throw new Error(
      `Please check ${target}`
  );
}

const slideShowContainer = getElement('.slideshow-container');
const price = getElement('.price');
const summary = getElement('.summary');
const propertyAddress = getElement('address');
const noOfBedrooms = getElement('.feature-1');
const noOfBedrooms2 = getElement('.feature-11');
const noOfBathrooms = getElement('.feature-2');
const noOfBathrooms2 = getElement('.feature-12');
const noOfParking = getElement('.feature-13');
const agent = getElement('.agent-name');
const agentNumber = getElement('.agent-number1');
const agentEmail = getElement('.agent-number2');

const fetchAllImages = async (id) => {
  const response = await fetch(`https://notproperty24.herokuapp.com/api/images/${id}`).catch((err) => console.log(err));
  if (response){
      const img = await response.json();
      return img;
  }
  return response;
}



const populateImages = (imgs, element) => {
  element.innerHTML = imgs.map((image) => {
      const {PropertyImageID,Description,PropertyID,ImageURL} = image;
         return `<figure class="mySlides fade" style="display:block;">
         <img src="${ImageURL}" style="width:100%;height:500px">
     </figure>` 
  })
  
};


let slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //slides= 4
  let dots = document.getElementsByClassName("dot"); //dots= 4
  if (n > slides.length) {slideIndex = 1}    //if we trying to access the slide that is after the last slide, set slideIndex =1 (take user to the first slide);
  if (n < 1) {slideIndex = slides.length}   //if we trying to access the slide that is before the first slide, set slideIndex =slides.length (take user to the last slide);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
}


window.addEventListener('DOMContentLoaded', async function () {
  const string = window.location.search;
  const urlParams = new URLSearchParams(string);
  const id = urlParams.get('id');
  const propertyImages = await fetchAllImages(id);
  console.log(propertyImages);

  populateImages(propertyImages, slideShowContainer);
  showSlides(slideIndex);

  
  slideShowContainer.innerHTML += ` <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>`

  const response = await fetch(`https://notproperty24.herokuapp.com/api/property/${id}`);
  if(response.ok){
    const res = await response.json();
    const [x,y] = res;
    const {
        PropertyID,PropertyName,Description,Price,Size,NoOfBedrooms,NoOfBathrooms,NoOfParkingSpaces,Furnished,ListingDate,OccupationDate,FirstName,LastName,EmailAddress,
        ImageURL,PhoneNumber,Street,Province,City
    } = x;
    
    document.title = JSON.stringify(PropertyName);
    price.textContent = `R${Price}`;
    summary.textContent = PropertyName;
    propertyAddress.textContent = `${Street} ${City} ${Province}`;
    noOfBedrooms.textContent = NoOfBedrooms;
    noOfBedrooms2.textContent = NoOfBedrooms;
    noOfBathrooms2.textContent = NoOfBathrooms;
    noOfParking.textContent = NoOfParkingSpaces;
    noOfBathrooms.textContent = NoOfBathrooms;
    agent.textContent = FirstName;
    agentNumber.textContent = PhoneNumber;
    agentEmail.textContent = EmailAddress;
  }
    
  });
