////////////////////hamburger////////////////////

const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.header__navigation')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('is-active')
    menu.classList.toggle('header__navigation--active')
    document.body.classList.toggle('body--fixed');
})


////////////////////description////////////////////

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


////////////////////video////////////////////


const videos = document.querySelectorAll('#myVideo');

videos.forEach((video) => {
    video.addEventListener('mouseenter', () => {
        video.play();
        video.style.filter = 'blur(0px)';
    });
    
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.style.filter = 'blur(2px)';
    });
} )


////////////////////paralax////////////////////

function updateTitleHeight() {
    const titleElement = document.querySelector('.paralax__title');
    const titleHeight = titleElement.offsetHeight;

    const paralaxElement = document.querySelector('.paralax');
    paralaxElement.style.setProperty('--title-height', `${titleHeight}px`);
}

function checkIfScrolledToBottom() {
    const paralaxBg = document.querySelector('.paralax__bg');
    const rect = paralaxBg.getBoundingClientRect();

    if (rect.bottom <= window.innerHeight) {
        const titleElement = document.querySelector('.paralax__title');
        titleElement.classList.add('move-to-bottom'); 
    }
}

window.addEventListener('load', updateTitleHeight);
window.addEventListener('resize', updateTitleHeight);
window.addEventListener('scroll', checkIfScrolledToBottom);

////////////////////wow.js////////////////////

new WOW().init();


////////////////////swiper////////////////////

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 65,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".participants__button-prev",
      prevEl: ".participants__button-next",
    },
    breakpoints: {
        0: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
          },
        600: {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
          },
        840: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
          },
        1000: {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 65,
        },
        1320: {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1550: {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 65,
        },
    }
  });

  ////////////////////participants////////////////////
const descriptions = document.querySelectorAll('.participants__description')
const professions = document.querySelectorAll('.participants__profession')

professions.forEach((profession) => {
    profession.addEventListener('click', ()=> {
        profession.classList.toggle('participants__profession-active')
        const parentProfession = profession.parentNode;
        const description = parentProfession.querySelector('.participants__description');
        description.classList.toggle('participants__description-active')
    })
})
