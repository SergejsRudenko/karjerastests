export function getMobileSlides(){
    let questions = document.querySelectorAll('.swiper-slide > .questions');
    let firstForm = document.querySelector('.first__questions-form');
    let swiper = document.querySelector('.swiper');

    questions.forEach(el => {
        firstForm.insertAdjacentElement('beforeend', el);
    })
    // document.querySelector('.left').classList.remove('none');
    swiper.remove();
    console.log(firstForm);
}