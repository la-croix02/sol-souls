const menu = document.querySelector('.header__burger'),
      list = document.querySelector('.header__list'),
      body = document.querySelector('body');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  list.classList.toggle('active');
  body.classList.toggle('active')
});


const tabs = document.querySelectorAll('.questions__btn'),
      content = document.querySelectorAll('.questions__item-content'),
      icons = document.querySelectorAll('.questions__btn-icon');



tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    
    if (icons[index].classList.contains('questions__btn-icon--active')) {
      icons[index].classList.remove('questions__btn-icon--active');
      content[index].classList.remove('questions__item-content--active');
    } else {
      tabs.forEach((tab, index) => {
        icons[index].classList.remove('questions__btn-icon--active');
        content[index].classList.remove('questions__item-content--active');
      });

      content[index].classList.add('questions__item-content--active');
      icons[index].classList.add('questions__btn-icon--active');
    }
  });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 4,

    spaceBetween: 30,

    centeredSlides: true,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      },
      1400: {
        slidesPerView: 5
      }
    }
  });




