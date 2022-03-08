export function questionCard() {
    let answers = document.querySelectorAll('div.answers');
    let questionsButton = document.querySelector('.first__questions');
    let questionsForm = document.querySelector('.first__questions-form');
    let firstInfoCard = document.querySelector('.first__info');
    questionsButton.addEventListener('click', () => {
        questionsForm.classList.remove('first__questions-form');
        firstInfoCard.classList.add('none');
    })
    answers.forEach( el => {
        let label = el.querySelectorAll('label')
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