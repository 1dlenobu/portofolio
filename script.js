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

// 3D parallax mouse effect on hero section
const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const heroCard = hero.querySelector('.hero-card');
    if (heroCard) {
      heroCard.style.transform = `
        perspective(1000px)
        rotateY(${x * 12}deg)
        rotateX(${-y * 8}deg)
        translateZ(20px)
        translateY(-5px)
      `;
    }
  });

  hero.addEventListener('mouseleave', () => {
    const heroCard = hero.querySelector('.hero-card');
    if (heroCard) {
      heroCard.style.transform = '';
      heroCard.style.transition = 'transform 0.8s ease';
      setTimeout(() => { heroCard.style.transition = ''; }, 800);
    }
  });
}
