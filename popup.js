function openPopup(videoUrl) {
    var popup = document.createElement('div');
    popup.className = 'popup-video';
    popup.innerHTML = `
        <div class="popup-inner">
            <video width="560" height="315" controls autoplay muted>
                <source src="${videoUrl}" type="video/mp4">
                Din webbläsare stöder inte videouppspelning.
            </video>
            <span class="popup-close">&times;</span>
        </div>
    `;

    document.body.appendChild(popup);

    // Stäng popup när man klickar på stängningsknappen
    var closeBtn = popup.querySelector('.popup-close');
    closeBtn.onclick = function() {
        popup.remove();
    };

    // Stäng popup när man klickar utanför videon
    popup.onclick = function(event) {
        if (event.target.className === 'popup-video') {
            popup.remove();
        }
    };
}
