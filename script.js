// ======= MENU MOBILE =======
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

// ======= CACHER LE MENU MOBILE LORS DU CLIC SUR UN LIEN =======
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// ======= SCROLLREVEAL ANIMATIONS =======
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false // Ne réinitialise pas l’animation après scroll
});

// Accueil
sr.reveal('.ahome .section-title', {});
sr.reveal('.home__subtitle', { delay: 300 });
sr.reveal('.home__text', { delay: 400 });
sr.reveal('.ahome__img', { delay: 500 });

// À propos
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 300 });

// Compétences
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__data', { interval: 100 });
sr.reveal('.skills__img', { delay: 500 });

// Réalisations
sr.reveal('.work__img', { interval: 200 });

// Contact
sr.reveal('.contact__form', { delay: 200 });

// ======= ACTIVE LINK NAVIGATION (facultatif) =======
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
});
