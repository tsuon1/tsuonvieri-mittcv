document.addEventListener('DOMContentLoaded', (event) => {
    // Lägg till event listener på varje 'Se Mer'-knapp
    document.querySelectorAll('.expand-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            // Hitta den associerade expanderbara innehållet
            var expandableContent = this.nextElementSibling;

            // Kontrollera om innehållet redan visas
            var isExpanded = expandableContent.style.display === 'block';

            // Visa eller dölj innehållet baserat på nuvarande tillstånd
            expandableContent.style.display = isExpanded ? 'none' : 'block';
        });
    });
});
