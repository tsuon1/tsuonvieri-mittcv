// Function to open the modal
function openModal() {
  // Check if the modal has already been shown in this session
  if (!sessionStorage.getItem('modalShown')) {
    document.getElementById("myModal").style.display = "flex";
    sessionStorage.setItem('modalShown', 'true'); // Set a flag in sessionStorage
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Function to initialize the slideshow
function initSlides() {
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
  }

  // Adding event listeners to next/previous buttons
  document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
  });

  document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
  });
}

// Listening for the full load of the page
window.onload = function() {
  if (document.readyState === 'complete') {
    // Initialize the slides
    initSlides();

    let observer = new MutationObserver((mutations) => {
      let isContentAdded = mutations.some(mutation => mutation.addedNodes.length > 0);

      if (isContentAdded) {
        console.log('New content added!');
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Attempt to open the modal shortly after load
    setTimeout(openModal, 500);
  }
};

// Close the modal when clicking on the close button
document.querySelector('.close').addEventListener('click', closeModal);

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
};
