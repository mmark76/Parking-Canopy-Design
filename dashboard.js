(() => {
  const currentYear = document.getElementById('current-year');
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  const menuButton = document.querySelector('.menu-button');
  const navigation = document.getElementById('primary-navigation');

  const closeNavigation = () => {
    if (!menuButton || !navigation) return;
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navigation.addEventListener('click', (event) => {
      if (!(event.target instanceof HTMLAnchorElement)) return;

      navigation.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.toggle('is-active', link === event.target && link.hash.length > 0);
      });
      closeNavigation();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
        closeNavigation();
        menuButton.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 48.01rem)').matches) closeNavigation();
    });
  }

  const version = document.querySelector('meta[name="build-version"]')?.content.trim();
  const buildDate = document.querySelector('meta[name="build-date"]')?.content.trim();
  const commit = document.querySelector('meta[name="build-commit"]')?.content.trim();
  const buildId = document.getElementById('build-id');

  if (buildId && version) {
    const parts = [`v${version}`];
    if (/^\d{4}-\d{2}-\d{2}$/.test(buildDate ?? '')) {
      parts.push(buildDate.replaceAll('-', ''));
    }
    if (/^[0-9a-f]{7,40}$/i.test(commit ?? '')) {
      parts.push(commit.slice(0, 7));
    }
    buildId.textContent = parts.join('_');
  }
})();
