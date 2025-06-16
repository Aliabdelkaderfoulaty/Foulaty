// ===== MENU MOBILE =====
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// ===== FERMER LE MENU APRÈS SÉLECTION =====
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

// ===== ANIMATION DE CHARGEMENT =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }
});

// ===== SCROLLREVEAL (VERSION LOCALE) =====
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false,
  });

  sr.reveal('.section-title');
  sr.reveal('.home__subtitle', { delay: 300 });
  sr.reveal('.home__text', { delay: 400 });
  sr.reveal('.home__img', { delay: 500 });
  sr.reveal('.about__img');
  sr.reveal('.about__subtitle', { delay: 200 });
  sr.reveal('.about__text', { delay: 300 });
  sr.reveal('.skills__subtitle');
  sr.reveal('.skills__data', { interval: 100 });
  sr.reveal('.skills__img', { delay: 500 });
  sr.reveal('.work__img', { interval: 200 });
  sr.reveal('.contact__form', { delay: 200 });
}

// ===== LIEN ACTIF DANS LE MENU AU SCROLL =====
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  document.querySelectorAll('section[id]').forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const link = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

    if (link) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});
