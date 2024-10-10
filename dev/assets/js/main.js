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

const text = document.querySelector('.paralax__title');
const container = document.querySelector('.paralax__bg');
const section = document.querySelector('.paralax__bg');

window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top; 
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.min(1, Math.max(0, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        const maxMoveDistance = container.offsetHeight - text.offsetHeight;
        const translateY = scrollProgress * maxMoveDistance;

        text.style.transform = `translateY(${translateY}px)`;
    }
});

////////////////////wow.js////////////////////

// new WOW().init();


////////////////////swiper////////////////////

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 65,
    pagination: {
      el: ".participants__pagination",
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


////////////////////acordeon////////////////////



const acordeonItems = document.querySelectorAll('.acordeon__item');
const acordeonTitles = document.querySelectorAll('.acordeon__item-title');
const acordeonTexts = document.querySelectorAll('.acordeon__item-text');

const acordeonChange = function(item, event) {
    const width = document.documentElement.clientWidth;
    const title = item.querySelector('.acordeon__item-title');
    const text = item.querySelector('.acordeon__item-text');

    if (event.type === 'mouseenter' && width < 1514) {
        return;
    } else if (event.type === 'click' && width >= 1514) {
        return;
    }
    
    acordeonTitles.forEach(i => i.classList.remove('acordeon__item-title-active'));
    acordeonTexts.forEach(i => i.classList.remove('acordeon__item-text-active'));
    acordeonItems.forEach(i => i.classList.remove('acordeon__item-active'));
    title.classList.toggle('acordeon__item-title-active');
    text.classList.toggle('acordeon__item-text-active');
    item.classList.toggle('acordeon__item-active');
};

acordeonItems.forEach(item => {
    item.addEventListener('mouseenter', (event) => acordeonChange(item, event));
    item.addEventListener('click', (event) => acordeonChange(item, event));
});


////////////////////blog-marketing////////////////////

const hoverText = document.querySelector('.blog-marketing__btn-span');
const hoverButton = document.querySelector('.blog-marketing__btn');

hoverButton.addEventListener('mouseover', function() {
    hoverText.classList.add('blog-marketing__btn-span-fadeout')
    hoverText.classList.remove('blog-marketing__btn-span-fadein')
});

hoverButton.addEventListener('mouseout', function() {
    hoverText.classList.add('blog-marketing__btn-span-fadein')
    hoverText.classList.remove('blog-marketing__btn-span-fadeout')
});


////////////////////poster////////////////////

const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('poster__box--visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);


  const posterItem = document.querySelector('.poster__box');
  observer.observe(posterItem);



////////////////////testimonialsSwiper////////////////////

  var swiper = new Swiper(".testimonialsSwiper", {
    slidesPerView: 3,
    spaceBetween: 21,
    loop: false,
    pagination: {
      el: ".testimonials__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials__button-prev",
      prevEl: ".testimonials__button-next",
    },
    breakpoints: {
      0: {
        allowTouchMove: false,
        mousewheel: false,
        simulateTouch: false,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        grid: {
          rows: 3,
        },
      },
      1024: {
      },
    }
  });

const testimonialsBoxs = document.querySelectorAll('.testimonials__box')
const testimonialsTexts = document.querySelectorAll('.testimonials__slide-text')
const testimonialsButtonNext = document.querySelector('.testimonials__button-next')
const testimonialsButtonPrev = document.querySelector('.testimonials__button-prev')

testimonialsButtonNext.addEventListener('click', ()=> {
  testimonialsTexts.forEach(i => i.classList.remove('testimonials__slide-text-active'));
})

testimonialsButtonPrev.addEventListener('click', ()=> {
  testimonialsTexts.forEach(i => i.classList.remove('testimonials__slide-text-active'));
})

testimonialsBoxs.forEach((box) => {
  box.addEventListener('click', ()=> {
    const testimonialsText = box.querySelector('.testimonials__slide-text')
    testimonialsTexts.forEach(i => i.classList.remove('testimonials__slide-text-active'));
    testimonialsText.classList.add('testimonials__slide-text-active')
    })
})
