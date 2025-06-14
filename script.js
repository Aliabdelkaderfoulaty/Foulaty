// === FONCTION POUR AFFICHER / MASQUER LE MENU MOBILE ===
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

// Initialisation du menu mobile
showMenu('nav-toggle', 'nav-menu');

// === LIENS DE NAVIGATION ===
const navLinks = document.querySelectorAll('.nav__link');

// Fonction qui gère l'action lors du clic sur un lien
const linkAction = function () {
  // Supprime la classe 'active' de tous les liens
  navLinks.forEach(link => link.classList.remove('active'));

  // Ajoute la classe 'active' au lien cliqué
  this.classList.add('active');

  // Ferme le menu sur mobile après clic
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
};

// Ajoute l’événement clic à chaque lien
navLinks.forEach(link => link.addEventListener('click', linkAction));

// === ANIMATIONS AVEC SCROLLREVEAL ===
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

// Animations pour la section Home
sr.reveal('.home__title');
sr.reveal('.home__text', { delay: 200 });
sr.reveal('.home__subtitle', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.section-title', { interval: 200 });

// Section About
sr.reveal('.about__img');
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 400 });

// Section Skills
sr.reveal('.skills__subtitle');
sr.reveal('.skills__text', { delay: 200 });
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 400 });

// Section Work
sr.reveal('.work__img', { interval: 200 });

// Section Contact
sr.reveal('.contact__input', { interval: 200 });
