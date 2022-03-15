import { reset } from 'browser-sync';
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
      // let swiper = document.querySelector('.swiper').swiper;
      // let slides = document.querySelectorAll('.swiper-slide > .questions');
      // let inputs = slides[0].querySelectorAll('.question__input');
      // let inputsArr = Array.from(inputs);
      // inputsArr.reduce(function(result, value, index, array) {
      //   if (index % 2 === 0)
      //     result.push(array.slice(index, index + 2));
      //   return result;
      // }, []);
}