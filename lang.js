
  (function () {
    const btn = document.getElementById('langToggle');
    if (!btn) return;

    const htmlLang = (document.documentElement.lang || '').toLowerCase();
    const path = (window.location.pathname || '').toLowerCase();

    // Robust check: fungerar även om du råkar glömma lang-attributet
    const isEN = htmlLang.startsWith('en') || path.includes('index-en');

    if (isEN) {
      btn.textContent = 'SV';
      btn.href = 'index.html';
      btn.lang = 'sv';
      btn.setAttribute('aria-label', 'Switch to Swedish');
      btn.title = 'Switch to Swedish';
    } else {
      btn.textContent = 'EN';
      btn.href = 'index-en.html';
      btn.lang = 'en';
      btn.setAttribute('aria-label', 'Switch to English');
      btn.title = 'Switch to English';
    }
  })();