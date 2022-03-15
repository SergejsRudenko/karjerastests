
export function questionCard() {
    let answers = document.querySelectorAll('div.answers');
    let questionsButton = document.querySelector('.first__questions');
    let questionsForm = document.querySelector('.first__questions-form');
    let firstInfoCard = document.querySelector('.first__info');
    let title = document.querySelector('.left');
    let firsTitle = document.querySelector('.first__title');
    let pagination = document.querySelector('.swiper-pagination');
    let nexSlideButton = document.querySelector('.swiper-button-next');
    let button = document.querySelector('.button__link');

    function sendGAEvent(event, data){
        console.log(event, data);
        gtag('event', event, data);
    }

    if(window.matchMedia( "(min-width: 769px)").matches) {
        nexSlideButton.addEventListener('click', () => {
            if(nexSlideButton.classList.contains('swiper-button-disabled')) {
                button.classList.remove('none');
            }
        })
    }

    questionsButton.addEventListener('click', () => {
        if(window.matchMedia( "(min-width: 769px)").matches) {
         firsTitle.insertAdjacentElement('beforeend', pagination);
         $(".first__questions").on("click", function(e){
            sendGAEvent('Sāka testu', {
              'event_category' : 'Sāka testu',
              'event_label' : 'Sāka testu'
            });
        });
        }
        questionsForm.classList.add('block');
        firstInfoCard.classList.toggle('none');
        $(".first__questions").on("click", function(e){
            sendGAEvent('Sāka testu', {
              'event_category' : 'Sāka testu',
              'event_label' : 'Sāka testu'
            });
        });
        if(window.matchMedia( "(min-width: 769px)").matches) {
            // title.classList.toggle('none');
        }
        
    })
    answers.forEach( el => {
        let label = el.querySelectorAll('label');
        for (let i = 0; i < label.length; i++) {
            label[i].addEventListener('click', () => {
                label[i].classList.add('active');
                if(label[0].classList.contains('active')) {
                    label[1].remove();
                } else if(label[1].classList.contains('active')) {
                    label[0].remove();
                }
            })        
        }
    })
}