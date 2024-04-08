document.addEventListener('DOMContentLoaded', function() {
    var expandableItems = document.querySelectorAll('.expandable-listview');

    expandableItems.forEach(function(item) {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});
