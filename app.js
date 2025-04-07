const hamburgerMenu = document.querySelector('.nav-menu');
const hamburgerBtn = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.nav-main-items');

const accodrianItem = document.querySelectorAll(".accordian-item");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const plusIcon = document.querySelectorAll(".plus-icon");

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('menu-active');
    menuLinks.forEach(itm => {itm.classList.toggle('hamburger-links-active')});
});

question.forEach((FAQ, idx) => {
    FAQ.addEventListener("click", () => {
        answer[idx].classList.toggle("active");
        plusIcon[idx].classList.toggle("active");
        accodrianItem[idx].classList.toggle("active");
    })
})