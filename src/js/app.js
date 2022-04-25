import * as Functions from "./modules/functions.js";
import * as Quiz from "./modules/quiz.js";
import * as QuizMobile from "./modules/quizMobile.js";
import * as QuestionCard from "./modules/question-card.js";
import * as Slider from "./modules/slider.js";
import * as SlidesGetter from "./modules/getMobileSlides.js";
import * as GA from "./modules/ga.js";
Slider.slider();
Functions.isWebp();
GA.ga();
window.addEventListener('load', () => {
    if(window.matchMedia( "(min-width: 821px)").matches) {
        Quiz.quiz();
    }
    if(window.matchMedia( "(max-width: 820px)").matches) {
        SlidesGetter.getMobileSlides();
        QuizMobile.quizMobile();
    }
    QuestionCard.questionCard();
    window.onload = function() {
        let button = document.querySelector('.contact__button');
        button.disabled = false;
      };
    
})





