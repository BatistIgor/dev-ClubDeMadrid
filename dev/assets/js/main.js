const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.header__navigation')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('is-active')
    menu.classList.toggle('header__navigation--active')
})