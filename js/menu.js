window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('header-scrolled', window.scrollY > 0);
});


const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');
const menuLinks = mainMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

// Cierra el menú al hacer clic en un enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainMenu.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});