// Fonction pour afficher ou masquer le menu mobile
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

// Appel de la fonction pour activer le menu mobile
showMenu('nav-toggle', 'nav-menu');

// Sélection de tous les liens de navigation
const navLinks = document.querySelectorAll('.nav__link');

// Fonction qui gère le clic sur un lien
const linkAction = function () {
  // Supprime 'active' de tous les liens
  navLinks.forEach(link => link.classList.remove('active'));

  // Ajoute 'active' au lien cliqué
  this.classList.add('active');

  // Masquer le menu après le clic (sur mobile)
  const navMenu = document.getElementById('nav-menu');
  if (navMenu.classList.contains('show')) {
    navMenu.classList.remove('show');
  }
};

// Ajout d’un écouteur sur chaque lien de navigation
navLinks.forEach(link => link.addEventListener('click', linkAction));

// === ScrollReveal Animations ===
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

// Révélations pour la section home
sr.reveal('.home__title');
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__subtitle', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

// Révélations pour la section about
sr.reveal('.about__img');
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 400 });

// Révélations pour la section skills
sr.reveal('.skills__subtitle');
sr.reveal('.skills__text', { delay: 200 });
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 400 });

// Révélations pour la section work
sr.reveal('.work__img', { interval: 200 });

// Révélations pour la section contact
sr.reveal('.contact__input', { interval: 200 });
