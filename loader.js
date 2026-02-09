document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const video = document.getElementById('minVideo');

  const waitForVideo = (vid, timeoutMs = 3500) =>
    new Promise((resolve) => {
      if (!vid) return resolve();

      const done = () => resolve();

      // Om den redan har data nog för att visa första frame
      if (vid.readyState >= 2) return done();

      vid.addEventListener('loadeddata', done, { once: true });
      vid.addEventListener('error', done, { once: true });

      // Fail-safe så du inte fastnar om video tar evigheter/strular
      setTimeout(done, timeoutMs);
    });

  const waitForImages = () =>
    new Promise((resolve) => {
      const imgs = Array.from(document.images || []);
      if (imgs.length === 0) return resolve();

      let remaining = imgs.filter(img => !img.complete).length;
      if (remaining === 0) return resolve();

      const onDone = () => {
        remaining--;
        if (remaining <= 0) resolve();
      };

      imgs.forEach((img) => {
        if (img.complete) return;
        img.addEventListener('load', onDone, { once: true });
        img.addEventListener('error', onDone, { once: true });
      });
    });

  const preloadLotties = async () => {
    const nodes = Array.from(document.querySelectorAll('.lottie[data-path]'));
    const urls = Array.from(new Set(nodes.map(n => n.dataset.path).filter(Boolean)));
    if (urls.length === 0) return;

    await Promise.all(
      urls.map(url => fetch(url, { cache: 'force-cache' }).catch(() => null))
    );
  };

  const showPage = () => {
    document.body.classList.add('is-ready');

    if (loadingScreen) {
      loadingScreen.style.transition = 'opacity .2s ease';
      loadingScreen.style.opacity = '0';
      setTimeout(() => (loadingScreen.style.display = 'none'), 200);
    }
  };

  (async () => {
    // Vänta på video + lottie + bilder
    await Promise.all([
      waitForVideo(video),
      preloadLotties(),
      waitForImages()
    ]);

    showPage();
  })();
});
