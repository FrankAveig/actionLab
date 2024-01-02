window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('header-scrolled', window.scrollY > 0);
});