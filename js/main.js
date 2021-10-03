let burgerMenu = document.querySelector('.header__burger');
let navMenu = document.querySelector('.header__nav');

burgerMenu.addEventListener('click' , function() {
    navMenu.classList.toggle('header__nav_active');
    burgerMenu.classList.toggle('header__burger_active');

});


$(document).ready(function(){
    $('.customer__slider').slick();
});