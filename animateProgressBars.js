document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('div');
                // Extract the final width from the style attribute
                const finalWidth = progressBar.style.width; // Assuming the width is directly set in the style attribute
                // Set the width to trigger the animation
                progressBar.style.width = '0%'; // Reset to 0% to ensure the animation is visible
                // Trigger a reflow in between the reset and the animation to ensure it plays
                void progressBar.offsetWidth;
                // Set the width back to its final value to start the animation
                progressBar.style.width = finalWidth;
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    // Start observing all .percent1 elements
    document.querySelectorAll('.skills1 .box1 .percent1').forEach(bar => {
        observer.observe(bar);
    });
});
