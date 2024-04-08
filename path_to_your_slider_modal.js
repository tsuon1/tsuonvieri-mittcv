// Open the modal
function openSliderModal() {
  document.getElementById('sliderModal').style.display = 'block';
}

// Close the modal
function closeSliderModal() {
  document.getElementById('sliderModal').style.display = 'none';
}

// Get the modal element
var modal = document.getElementById('sliderModal');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
document.getElementById('playBtn').onclick = function() {
  openSliderModal();
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  closeSliderModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeSliderModal();
  }
}

// TODO: Add the slider functionality (plusSlides and currentSlide functions)
