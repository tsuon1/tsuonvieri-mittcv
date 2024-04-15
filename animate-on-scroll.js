// animate-on-scroll.js content
document.addEventListener('DOMContentLoaded', function() {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                let container = change.target;
                let animation = bodymovin.loadAnimation({
                    container: container,
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: container.getAttribute('data-path')
                });
                observer.unobserve(container);
            }
        });
    }

    let options = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    let observer = new IntersectionObserver(onEntry, options);

    var lotties = document.querySelectorAll('.lottie');
    lotties.forEach(lottie => {
        observer.observe(lottie);
    });
});
