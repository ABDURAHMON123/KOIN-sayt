document.querySelector('.fa-align-justify').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.header__mobile__menu');
    mobilemenu.style.transform = 'translateY(-10px)'
})
document.querySelector('.fa-close').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.header__mobile__menu');
    mobilemenu.style.transform = 'translateY(-200%)'
})
document.querySelector('.theproduct__blocks').addEventListener('scroll', function() {
    let theproduct = document.querySelector('.theproduct__blocks'); -
    console.log('scrolllll');
})