import Swiper from 'swiper/bundle';
import * as QuestionCard from "./question-card.js";
import * as Slider from "./slider.js";
import * as SecondSlides from "./secondSlidesLogic.js";
export function quiz() {
    let form = document.querySelector(".questions__form");
    // var log = document.querySelector("#log");
    let idCounter = 1;
    let DOMMainQuestions = document.querySelectorAll('[data-follow]');
    let DOMFollowQuestions = document.querySelectorAll('[data-question]');
    let mainQuestionsTest = [];
    let followQuestionsTest = [];
    let mainDisplay = document.querySelector('.first__inner');

    for (let i=0; i < DOMFollowQuestions.length; i++) {
        let title = DOMFollowQuestions[i].dataset.title;
        let questions = DOMFollowQuestions[i].dataset.question.split('?');
        followQuestionsTest[i] = {
            followQuestions: questions,
            ID: idCounter,
            title: title,
    };
    idCounter++;
    }
    console.log(followQuestionsTest);


    let fallbackAnswers = [];
    function createPartTwo () {
        let currentDiv = document.querySelector("main");
        //Removes questions that are not in fallbackQuestions
        for (let item of Object.values(followQuestionsTest) ){
            if (!fallbackAnswers.includes(item.title)) {
                delete item.title;
                followQuestionsTest = followQuestionsTest.filter(obj => Object.keys(obj).includes("title"));
            }

        }
        let formCounter = 0;
        let counter = 0;

        //Creates forms and questions in them
        followQuestionsTest.forEach( element => {
        

            // console.log(Object.values(element));
            let container = document.createElement("div");
            container.classList.add('wrapper');
                container.innerHTML = `
                <form action="" class="questions__${formCounter} questions__form">
		            <div class="swiper swiper__second swiper${formCounter}">
                        <div class="swiper-wrapper">
                            
                        </div>

                        <div class="swiper-button-prev second-slider-prev">Atpakaļ</div>
                        <div class="swiper-button-next second-slider-next">Tālāk</div>
                    </div>
                </form>
                `
                currentDiv.insertAdjacentElement('beforeend', container);
                let formContainer = document.querySelector(`.questions__${formCounter} > .swiper > .swiper-wrapper`);
                
                // while(Object.keys(element)[counter] !='ID'){
                    for (let i = 0; i < element.followQuestions.length; i++) {
                        let ID = element.ID;
                         let newDiv = document.createElement("div");
                    newDiv.innerHTML = `<p class="question">${element.followQuestions[i]}</p>
                    <div class="answers">
                        <input type="radio" value="1" id="secondAnswerYes${ID}${i}" name="question${ID}${i}" hidden>
                        <label for="secondAnswerYes${ID}${i}">JĀ</label>
                        <input type="radio" value="0" id="secondAnswerNo${ID}${i}" name="question${ID}${i}" hidden>
                        <label for="secondAnswerNo${ID}${i}">NĒ</label>
                    </div>`;
                    newDiv.classList.add('questions','swiper-slide');
                    formContainer.insertAdjacentElement('beforeend', newDiv);
                    }

                const secondButton = document.createElement("button");
                secondButton.classList.add('swiper-slide', 'featured__link' ,'secondButton');
                secondButton.setAttribute('type', 'submit');
                secondButton.innerText = 'Turpināt';
                formContainer.insertAdjacentElement('beforeend', secondButton);
                const formTwo = document.querySelector(`.questions__${formCounter}`);

                let wrapCount = 0;

                formTwo.addEventListener("submit", function(event) {
                    let wrapper = document.querySelectorAll('.wrapper');
                
                    let data = new FormData(formTwo);
                    let output = 0;                
                    for (const entry of data) {
                        output += parseInt(entry[1]);
                    };
                    // log.innerText = output;
                    element.questionsScore = output;
                    element.percentScore = element.questionsScore*100 / element.followQuestions.length;
                    output = 0;
                    // for (let i = 0; i < wrapper.length; i++) {
                        
                    // }
                    //Trying to iterate and show sliders
                    wrapper[wrapCount].classList.add('none');
                    wrapper[wrapCount+1].classList.remove('none');
                    console.log(wrapper.length);
                    console.log(wrapper);
                    if(wrapper.length-1 === wrapCount){
                        console.log('hey')
                    }
                    wrapCount++;
                    event.preventDefault();
                    }, false);
                

                mainDisplay.insertAdjacentElement('beforeend', container);

                counter++;
                formCounter++;

        })
        let swiper = document.querySelectorAll('.swiper');
        for( let i=0; i< swiper.length; i++ ) {
  
            var slider = new Swiper('.swiper' + i, {
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
            });
          
          }
          let submitButton = document.createElement('a');
          submitButton.classList.add('resultsButton');
          submitButton.setAttribute('href','#');
          submitButton.innerText = 'Submit Results';
          currentDiv.insertAdjacentElement('beforeend', submitButton);
          const submitResults = document.querySelector(".resultsButton");
          //Submit results 
        submitResults.addEventListener('click', () => {
            for(let item of followQuestionsTest ) {
                console.log(item.percentScore);
                console.log(followQuestionsTest);
            }
            createResultCard();
            
            });
            Slider.slider();

          
    }
  
  
    function createFallBackAnswers() {
        // Check if both questions are true
        mainQuestionsTest.forEach( el => {
            if (el.questionOneAnswer === 'true' && el.questionTwoAnswer === 'true'){
                fallbackAnswers = fallbackAnswers.concat(el.fallBackQuestions);
                console.log(fallbackAnswers);
            }
        });
    }
    form.addEventListener("submit", function(event) {
        let data = new FormData(form);
        let output = "";
        let counter = 0;
        let questionsForm = document.querySelector('.first__questions-form');


        for (const entry of data) {
            output = output + entry[0] + "=" + entry[1] + "\r";
          };
        //   log.innerText = output;

          for (let i=0; i < DOMMainQuestions.length; i++) {
            let array = DOMMainQuestions[i].dataset.follow.split(',');
            mainQuestionsTest[i] = {
                fallBackQuestions: array,
            };
            }
            for (const item of mainQuestionsTest) {
                item.questionOneAnswer = data.get(`question${counter}`);
                // console.log(item.questionOneAnswer);
                item.questionTwoAnswer = data.get(`question${counter+1}`);
                // console.log(item.questionTwoAnswer);
                counter +=2;

            }
        
        createFallBackAnswers();
        createPartTwo();
        QuestionCard.questionCard();
        questionsForm.classList.remove('block');
        console.log(fallbackAnswers);
        SecondSlides.secondSlides();
        event.preventDefault();
      }, false);
      //Create result card depending on result
      function createResultCard() {
          let hero = document.querySelector('.first');
          hero.classList.add('none');
          let main = document.querySelector('.results');
          main.classList.remove('none');
          let resultsContainer = document.createElement('div');
          resultsContainer.classList.add('container');
          resultsContainer.innerHTML = `
          <h6 class="results__heading">Testa rezultāts:</h6>
			<h1 class="results__title">
				Bioloģijas fakultāte
			</h1>
			<div class="results__subtitle">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</div>
          `
          main.insertAdjacentElement('beforeend', resultsContainer);

          let container = document.createElement('div');
          let cards = document.createElement('div');
          container.classList.add('container');
          cards.classList.add('cards');
          container.insertAdjacentElement('afterbegin', cards);
          main.insertAdjacentElement('afterend', container);
          for (let i = 0; i < followQuestionsTest.length; i++) {
              let card = document.createElement('div');
              let percentScore = followQuestionsTest[i].percentScore;
              let title = followQuestionsTest[i].title;
              console.log(followQuestionsTest);
              card.classList.add('cards__item');
              card.innerHTML = `
              <div class="cards__item-result">${percentScore}%<div class="ring"></div></div>
              <h3 class="cards__item-title">${title}</h3>
              <p class="cards__item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <a href="" class="cards__item-button">uzzināt vairāk</a>
              `
              cards.insertAdjacentElement('beforeend', card);
          }
      }

    // });
        

    // writeAnswers();
}