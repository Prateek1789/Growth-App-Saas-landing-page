const hamburgerMenu = document.querySelector('.nav-menu');
const hamburgerBtn = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.nav-main-items');

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('menu-active');
    menuLinks.forEach(itm => {itm.classList.toggle('hamburger-links-active')});
});