let swiperCards = new Swiper(".products", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints:{
    1400: {
      slidesPerView: 5, 
    },
    1120: {
      slidesPerView: 4,
    },
    801: {
      slidesPerView: 3,
    },
    426: {
      slidesPerView: 2, 
    }
  },
});


