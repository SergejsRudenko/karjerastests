import * as Functions from "./modules/functions.js";
import * as Quiz from "./modules/quiz.js";
import * as QuizMobile from "./modules/quizMobile.js";
import * as QuestionCard from "./modules/question-card.js";
import * as Slider from "./modules/slider.js";
import * as SlidesGetter from "./modules/getMobileSlides.js";
import * as GA from "./modules/ga.js";
import * as Footer from "./modules/footer.js";
Slider.slider();
Functions.isWebp();
GA.ga();
window.addEventListener('load', () => {
    let backButton = document.querySelector('.left .back__button');

    if(window.matchMedia( "(min-width: 835px)").matches) {
        if(backButton != undefined && window.innerHeight <= 630) {
            backButton.style.bottom = "5%";
          }
        Quiz.quiz();
    }
    if(window.matchMedia( "(max-width: 834px)").matches) {
        SlidesGetter.getMobileSlides();
        setTimeout(() => {
            QuizMobile.quizMobile();            
        }, 200);
    }
    QuestionCard.questionCard();
    window.onload = function() {
        let button = document.querySelector('.contact__button');
        button.disabled = false;
      };
    Footer.footer();
    
})





