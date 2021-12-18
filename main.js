document.querySelector('.fa-align-justify').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.header__mobile__menu');
    mobilemenu.style.transform = 'translateY(-10px)'
})
document.querySelector('.fa-close').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.header__mobile__menu');
    mobilemenu.style.transform = 'translateY(-200%)'
})