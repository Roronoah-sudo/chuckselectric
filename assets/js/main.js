(function () {
  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile]');
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }

  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav] a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const header = document.querySelector('.header');
      const offset = header ? header.offsetHeight + 10 : 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
