document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('minVideo');
    // Väntar på att metadata eller en del av videon laddas
    video.addEventListener('loadeddata', function() {
        // Kontrollerar om videon har tillräckligt data för att spela upp
        if (video.readyState >= 2) {
            document.querySelector('.container').style.display = 'grid'; // Anpassa efter din specifika layout
        }
    }, { once: true });
});
