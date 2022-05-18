
let slideIndex = 1;
showSlides(slideIndex);

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
  dots[slideIndex-1].className += " active";
}