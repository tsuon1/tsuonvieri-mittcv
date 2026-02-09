document.addEventListener('DOMContentLoaded', () => {
  const loading = document.getElementById('loadingScreen');
  const video = document.getElementById('minVideo');

  const finish = () => {
    document.body.classList.add('is-ready');

    if (loading) {
      loading.classList.add('is-hidden');
      // ta bort helt efter fade
      setTimeout(() => loading.style.display = 'none', 250);
    }

    // Viktigt: trigga om layout/scroll-baserade effekter när sidan faktiskt är "på"
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
    });
  };

  // Om ingen video finns → kör direkt
  if (!video) return finish();

  // Om videon redan är redo (cache etc)
  if (video.readyState >= 2) return finish();

  // Vänta på video, men ha fallback så du aldrig fastnar
  const fallback = setTimeout(finish, 4000);

  video.addEventListener('loadeddata', () => {
    clearTimeout(fallback);
    finish();
  }, { once: true });

  video.addEventListener('error', () => {
    clearTimeout(fallback);
    finish();
  }, { once: true });
});
