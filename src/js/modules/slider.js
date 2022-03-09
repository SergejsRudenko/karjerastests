import Swiper from 'swiper/bundle';

export function slider(){
    const swiperMy = new Swiper('.swiper', {
        // Optional parameters
        allowTouchMove: false,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          769: {
            direction: 'horizontal'
          }
        }
      });
}