document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('minVideo');
    video.addEventListener('loadeddata', function() {
        // Kontrollerar om videon har tillräckligt data för att spela upp
        if (video.readyState >= 2) {
            document.querySelector('.container').style.display = 'grid'; // Eller 'block' beroende på din layout
            document.getElementById('loadingScreen').style.display = 'none'; // Döljer laddningsskärmen
        }
    }, { once: true });
});
