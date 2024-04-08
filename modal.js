// Öppna modalfönstret
function openModal() {
  document.getElementById("myModal").style.display = "flex"; // Använd flex för att centrera
}

document.addEventListener('DOMContentLoaded', function() {
  closeModal();
});



// Stäng modalfönstret
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Nästa/föregående kontroller
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Miniatyrbildskontroller
function currentSlide(n) {
  showSlides(slideIndex = n);
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

// När användaren klickar på <span> (x), stäng modalfönstret
document.querySelector('.close').addEventListener('click', closeModal);

// Lägg till händelselyssnare till nästa/föregående knappar
document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});

document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

// Stäng modalen när användaren klickar utanför innehållet
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}


// var slideIndex = 0;
// showSlides(); // Starta bildspelet automatiskt vid laddning

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 8000); // Byt bild var 8:e sekund
// }

