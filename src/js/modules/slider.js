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
          821: {
            direction: 'horizontal'
          }
        }
      });
      if(window.matchMedia( "(min-width: 821px)").matches) {
      function splitArrayIntoChunksOfLen(arr, len) {
        var chunks = [], i = 0, n = arr.length;
        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }
        return chunks;
      }
      
      let nexSlideButton = document.querySelector('.swiper-button-next');
      let button = document.querySelector('.button__link');
      let form = document.querySelector(".questions__form");

    

      let swiper = document.querySelector('.swiper').swiper;
      let slides = document.querySelectorAll('.swiper-slide > .questions');
      let backButton = document.querySelector('.back__button');
      for (let i = 0; i < slides.length; i++) {
        let inputs = slides[i].querySelectorAll('.question__input');
        let inputsArr = Array.from(inputs);
        inputsArr.forEach(el => {
          el.addEventListener('click', () => {
            if((inputsArr[0].checked || inputsArr[1].checked) & (inputsArr[2].checked || inputsArr[3].checked)) {
              swiper.slideNext();
              if(nexSlideButton.classList.contains('swiper-button-disabled') & slides.length-1 === i) {
                button.click();
            }
            }
          })
        })
      }
      backButton.addEventListener('click', () => {
        let prevSlide = document.querySelector('.swiper-slide-prev');
        swiper.slidePrev();
        let inputs = prevSlide.querySelectorAll('.question__input');
        let labels = prevSlide.querySelectorAll('label');
        inputs.forEach(el => {
          el.checked = false;
        })
        labels.forEach(el => {
          el.classList.remove('active');
          el.removeAttribute('hidden');
          el.style.pointerEvents = 'all';
        })
      })
    }
    if(window.matchMedia( "(max-width: 821px)").matches) { 
      
      let counter = 1;
      let button = document.querySelector('.firstButtonWrapper .button__link');
      let slides = document.querySelectorAll('.swiper-slide > .questions');
      for (let i = 0; i < slides.length; i++) {
        let inputs = slides[i].querySelectorAll('.question__input');
        let inputsArr = Array.from(inputs);
        inputsArr.forEach(el => {
          el.addEventListener('click', () => {
            if(counter === slides.length*2) {
                button.click();
            }
            counter++;
          })
        })
      }
      //Refresh button part for question cards mobile
      let refresh = document.querySelectorAll('.refresh__button');
      refresh.forEach (e => {
          e.addEventListener('click', () => {
              let lables = e.closest('.answers').querySelectorAll('label');
              let inputs = e.closest('.answers').querySelectorAll('input');
              if(lables[0].classList.contains('active') || lables[1].classList.contains('active')){
                counter--;
              }
              inputs.forEach(el => {
                  el.checked = false;
                })
              lables.forEach(elem => {
                  elem.classList.remove('active');
                  elem.removeAttribute('hidden');
                  elem.style.pointerEvents = 'all';
              })
          })
      })
     }

}