// ===== MENU MOBILE =====
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// ===== CACHER LE MENU APRÈS SÉLECTION =====
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('show');
  });
});

// ===== SCROLLREVEAL (LOCAL) =====
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false
});

// Animations déclenchées au scroll
sr.reveal('.section-title', {});
sr.reveal('.home__subtitle', { delay: 300 });
sr.reveal('.home__text', { delay: 400 });
sr.reveal('.ahome__img', { delay: 500 });

sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 300 });

sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__data', { interval: 100 });
sr.reveal('.skills__img', { delay: 500 });

sr.reveal('.work__img', { interval: 200 });

sr.reveal('.contact__form', { delay: 200 });

// ===== LINK ACTIF EN SCROLL =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const top = sec.offsetTop - 50;
    const bottom = top + sec.offsetHeight;
    const link = document.querySelector('.nav__menu a[href*=' + sec.id + ']');

    if (!link) return;
    if (scrollY > top && scrollY <= bottom) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
