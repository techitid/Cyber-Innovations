
  const $ = s => document.querySelectorAll(s),
        id = i => document.getElementById(i),
        norm = h => (a = document.createElement('a'), a.href = h, a.pathname + a.hash);

  // Toggle mobile menu
  id('menu-toggle')?.addEventListener('click', () => {
    id('menu-toggle').classList.toggle('open');
    id('mobile-menu')?.classList.toggle('show');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const links = $('nav.header-center a');
    let active = localStorage.getItem('activeLink');

    if (!active) {
      let home = [...links].find(l => ['#home', '/', 'index.html'].some(h => l.getAttribute('href')?.includes(h)));
      if (home) {
        active = norm(home.href);
        localStorage.setItem('activeLink', active);
      }
    }

    if (!active || active === '#' || active.startsWith('javascript')) {
      localStorage.removeItem('activeLink');
      return;
    }

    links.forEach(l => {
      const h = l.getAttribute('href');
      l.classList.toggle('active', norm(l.href) === active && h !== '#' && !h.startsWith('javascript'));
    });
  });

  $('nav a, footer a').forEach(l => {
    l.addEventListener('click', e => {
      const h = l.getAttribute('href');
      if (!h || h === '#' || h.startsWith('javascript')) return e.preventDefault();
      localStorage.setItem('activeLink', norm(l.href));
    });
  });