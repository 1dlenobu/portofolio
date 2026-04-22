const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');

menuToggle?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    siteNav.classList.remove('open');
  }
});
