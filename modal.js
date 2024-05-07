// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "flex"; // Use flex to center the modal
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  openModal(); // Automatically open the modal when the page loads
});

// Event listener for closing the modal when clicking on the close button
document.querySelector('.close').addEventListener('click', closeModal);

// Adding event listeners to next/previous buttons
document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});

document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}

// Slide controls
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
