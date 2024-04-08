document.querySelectorAll('.expand-btn').forEach(function(triangle) {
    triangle.addEventListener('click', function() {
        var content = this.nextElementSibling;
        this.classList.toggle('rotated');
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
