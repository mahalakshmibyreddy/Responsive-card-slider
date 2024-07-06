
const swiper = new Swiper('.slider-wrapper', {
    slidesPerView: 1,
    grabcursor:true,
    spaceBetween:30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
        dynamicBullets:true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesperView:1
        },
        620:{
            slidesperView:2
        },
        1024:{
            slidesperView:3
        }
        
    },
  });
