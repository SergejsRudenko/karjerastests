import * as Functions from "./modules/functions.js";
import * as Quiz from "./modules/quiz.js";
import * as QuizMobile from "./modules/quizMobile.js";
import * as QuestionCard from "./modules/question-card.js";
import * as Slider from "./modules/slider.js";
import * as SlidesGetter from "./modules/getMobileSlides.js";
import * as Contact from "./modules/contact.js";
Slider.slider();
Functions.isWebp();
Contact.contact();
if(window.matchMedia( "(min-width: 769px)").matches) {
    Quiz.quiz();
}
if(window.matchMedia( "(max-width: 768px)").matches) {
    SlidesGetter.getMobileSlides();
    QuizMobile.quizMobile();
}
QuestionCard.questionCard();

