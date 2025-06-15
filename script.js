// ===== Chargement de la page : Loader =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 1500); // Durée d’affichage du loader
});

// ===== Menu mobile (toggle) =====
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

// ===== Changement d’état des liens dans le menu =====
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link =>
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Fermer le menu mobile après clic (utile en responsive)
    document.getElementById('nav-menu').classList.remove('show');
  })
);

// ===== Thème sombre / clair =====
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙';
themeToggle.className = 'theme-toggle';
document.body.appendChild(themeToggle);

// Appliquer thème sauvegardé
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.textContent = '☀️';
}

// Toggle au clic
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
});

// ===== Animation au scroll (sans ScrollReveal) =====
const reveals = document.querySelectorAll('.reveal');

function scrollReveal() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);
