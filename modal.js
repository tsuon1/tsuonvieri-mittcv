// Function to open the modal
function openModal() {
  if (!sessionStorage.getItem('modalShown')) {
    document.getElementById("myModal").style.display = "flex";
    sessionStorage.setItem('modalShown', 'true'); // Set a flag in sessionStorage
  } else {
    startDotAnimations(); // Start dot animations if the modal is not shown this session
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  startDotAnimations(); // Start animations after modal is closed
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

  document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
  });

  document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
  });
}

// Start observing dot animations with delay
function startDotAnimations() {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const dots = entry.target.querySelectorAll('.dot');
              dots.forEach((dot, index) => {
                  setTimeout(() => {
                      dot.style.transform = 'scale(1)';
                      if (dot.classList.contains('transparent')) {
                          dot.style.opacity = '0.55';
                      } else {
                          dot.style.opacity = '1';
                      }
                  }, 300 + index * 150); // Increased delay for each dot
              });
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  document.querySelectorAll('.percent1, .profileText .dots').forEach(element => {
      observer.observe(element);
  });
}

// Listening for the full load of the page
window.onload = function() {
  if (document.readyState === 'complete') {
    initSlides(); // Initialize the slides
    setTimeout(openModal, 500); // Delay opening modal to ensure page is ready
  }
};

document.querySelector('.close').addEventListener('click', closeModal);
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
};
