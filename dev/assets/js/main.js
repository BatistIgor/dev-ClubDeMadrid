const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.header__navigation')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('is-active')
    menu.classList.toggle('header__navigation--active')
    document.body.classList.toggle('body--fixed');
})

function toggleText() {
    var text = document.querySelector(".description__text");
    var btn = document.querySelector(".description__btn");

    if (text.classList.contains("description__text--hidden")) {
        text.classList.remove("description__text--hidden");
        text.classList.add("description__text--expanded");
        btn.innerText = "Leer menos ↑";
    } else {
        text.classList.remove("description__text--expanded");
        text.classList.add("description__text--hidden");
        btn.innerText = "Leer más ↓";
    }
}