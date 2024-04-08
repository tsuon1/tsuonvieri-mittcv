// animate.js content
document.addEventListener('DOMContentLoaded', function() {
    var lotties = document.querySelectorAll('.lottie');
    lotties.forEach(function(lottie) {
        var animation = bodymovin.loadAnimation({
            container: lottie, // the dom element
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: lottie.getAttribute('data-path') // the animation data
        });
    });
});
