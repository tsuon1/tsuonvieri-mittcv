function openVimeoPopup(videoId) {
    var popup = document.createElement('div');
    popup.className = 'popup-video';
    popup.innerHTML = `
        <div class="popup-inner">
            <iframe 
                src="https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&autopause=0"
                width="640" height="360" frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                playsinline webkit-playsinline
                ></iframe>
            <span class="popup-close">&times;</span>
        </div>
    `;

    document.body.appendChild(popup);

    // Stäng popup när man klickar på stängningsknappen
    var closeBtn = popup.querySelector('.popup-close');
    closeBtn.onclick = function() {
        popup.remove();
    };

    // Stäng popup när man klickar utanför iframe
    popup.onclick = function(event) {
        if (event.target.className === 'popup-video') {
            popup.remove();
        }
    };
}
