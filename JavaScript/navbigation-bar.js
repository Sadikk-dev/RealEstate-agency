let navbarButton = document.getElementById('navbar-btn'),
    navBar = document.querySelector('.header .navbar');

navbarButton.addEventListener('click', () => {
    navBar.classList.toggle('toggle');
    navbarButton.classList.toggle('fa-times');
});