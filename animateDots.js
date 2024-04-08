document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const dots = entry.target.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    setTimeout(() => {
                        dot.style.transform = 'scale(1)';
                        // Only set the opacity for dots without the 'active' class
                        // and for those with the 'transparent' class set it to 0.55
                        if (dot.classList.contains('transparent')) {
                            dot.style.opacity = '0.55';
                        } else {
                            dot.style.opacity = '1';
                        }
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Start observing all the .percent1 elements and other dot containers if necessary
    document.querySelectorAll('.percent1, .profileText .dots').forEach(element => {
        observer.observe(element);
    });
});
