import * as QuestionCard from "./question-card.js";

export function quiz() {
    let form = document.querySelector(".questions__form");
    var log = document.querySelector("#log");
    let idCounter = 1;
    let DOMMainQuestions = document.querySelectorAll('[data-follow]');
    let DOMFollowQuestions = document.querySelectorAll('[data-question]');
    let mainQuestionsTest = [];
    let followQuestionsTest = [];
    let domCounter = 0;
    
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

    let mainQuestions = 
        {
            questionOne: {
                "questionOne": "Q1",
                "questionOneAnswer": '',
                "questionTwo": "Q2",
                "questionTwoAnswer": '',
                "fallbackQuestions": ['A'],
                "ID": 1
                // ['BF(All)','ĶF(All)','MF(All)','ĢZZF(All)','HZF(KS)','PPMF(STS)','SZF(S)']
            },
            questionTwo: {
                "questionOne": "Question",
                "questionOneAnswer": '',
                "questionTwo": "Question 2",
                "questionTwoAnswer": '',
                "fallbackQuestions": ['BF(ALL)'],
                "ID": 3
            },
            questionThree: {
                "questionOne": "Question",
                "questionOneAnswer": '',
                "questionTwo": "Question 2",
                "questionTwoAnswer": '',
                "fallbackQuestions": ['C'],
                "ID": 5
            },
            questionFour: {
                "questionOne": "Question",
                "questionOneAnswer": '',
                "questionTwo": "Question 2",
                "questionTwoAnswer": '',
                "fallbackQuestions": ['LU'],
                "ID": 7
            }
        };
    let fallbackAnswers = [];
    let followQuestions = {
        "PI": {
            "question1" : "Jautajums",
            "question2" : "Numur divi",
            // "question3" : "3",
            // "question4" : "4",
            // "question5" : "5",
            // "question6" : "6",
            "ID": 1,
            "percentScore": 95,
            "title": "Bioloģijas fakultāte"
        },
        "ZDE": {
            // "question1" : "Jautajums",
            // "question2" : "Numur Divi",
            // "question3" : "3",
            // "question4" : "4",
            "question5" : "5",
            "question6" : "6",
            "ID": 2,
            "percentScore": 45,
            "title": "Ķīmijas fakultāte"
        }
    };
    // function createPartOne () {
    //     let currentDiv = document.querySelector(".questions__form");
    //     for (const item of Object.values(mainQuestions)) {
    //         // console.log(item);
    //         let questionOne = item.questionOne;
    //             let questionTwo = item.questionTwo;
    //             let ID = item.ID;
    //             let newDiv = document.createElement("div");
    //             newDiv.innerHTML = `<p class="question">${questionOne}</p>
    //             <div class="answers">
    //                 <input type="radio" value="true" id="answerYes${ID}" name="question${ID}">
    //                 <label for="answerYes${ID}">YES</label>
    //                 <input type="radio" value="false" id="answerNo${ID}" name="question${ID}">
    //                 <label for="answerNo${ID}">NO</label>
    //             </div>
    //             <p class="question">${questionTwo}</p>
    //             <div class="answers">
    //                 <input type="radio" value="true" id="answerYes${ID}" name="question${ID+1}">
    //                 <label for="answerYes${ID}">YES</label>
    //                 <input type="radio" value="false" id="answerNo${ID}" name="question${ID+1}">
    //                 <label for="answerNo${ID}">NO</label>
    //             </div>`;
    //             newDiv.classList.add('questions');
    //             currentDiv.insertAdjacentElement('beforeend', newDiv);
    //       }
    //       let newButton = document.createElement("button");
    //       newButton.classList.add('submit');
    //       newButton.setAttribute('type', 'submit');
    //       newButton.innerText = 'Submit';
    //       currentDiv.insertAdjacentElement('beforeend', newButton);
    // }
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
            container.classList.add('container');
                container.innerHTML = `
                <form action="" class="questions__${formCounter} questions__form">
                </form>
                `
                currentDiv.insertAdjacentElement('beforeend', container);
                let formContainer = document.querySelector(`.questions__${formCounter}`);
                
                // while(Object.keys(element)[counter] !='ID'){
                    for (let i = 0; i < element.followQuestions.length; i++) {
                        let ID = element.ID;
                         let newDiv = document.createElement("div");
                    newDiv.innerHTML = `<p class="question">${element.followQuestions[counter]}</p>
                    <div class="answers">
                        <input type="radio" value="1" id="secondAnswerYes${ID}${i}" name="question${ID}${i}" hidden>
                        <label for="secondAnswerYes${ID}${i}">JĀ</label>
                        <input type="radio" value="0" id="secondAnswerNo${ID}${i}" name="question${ID}${i}" hidden>
                        <label for="secondAnswerNo${ID}${i}">NĒ</label>
                    </div>`;
                    newDiv.classList.add('questions');
                    formContainer.insertAdjacentElement('beforeend', newDiv);
                    }
                    counter++;



                const secondButton = document.createElement("button");
                secondButton.classList.add('submit');
                secondButton.setAttribute('type', 'submit');
                secondButton.innerText = 'Submit';
                formContainer.insertAdjacentElement('beforeend', secondButton);
                const formTwo = document.querySelector(`.questions__${formCounter}`);
                formTwo.addEventListener("submit", function(event) {
                    
                    let data = new FormData(formTwo);
                    let output = 0;                
                    for (const entry of data) {
                        output += parseInt(entry[1]);
                    };
                    log.innerText = output;
                    element.questionsScore = output;
                    element.percentScore = element.questionsScore*100 / element.followQuestions.length;
                    output = 0;
                    console.log(followQuestionsTest);
                        event.preventDefault();
                    }, false);


                formCounter++;

        })
          let submitButton = document.createElement('a');
          submitButton.classList.add('results');
          submitButton.setAttribute('href','#');
          submitButton.innerText = 'Submit Results';
          currentDiv.insertAdjacentElement('beforeend', submitButton);
          const submitResults = document.querySelector(".results");
          //Submit results 
        submitResults.addEventListener('click', () => {
            for(let item of followQuestionsTest ) {
                console.log(item.percentScore);
                console.log(followQuestionsTest);
                createResultCard();
            }
    
            });

          
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

        for (const entry of data) {
            output = output + entry[0] + "=" + entry[1] + "\r";
          };
          log.innerText = output;

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
        console.log(fallbackAnswers);

        event.preventDefault();
      }, false);
      //Create result card depending on result
      function createResultCard() {
          let container = document.createElement('div');
          let cards = document.createElement('div');
          let main = document.querySelector('main');
          container.classList.add('container');
          cards.classList.add('cards');
          container.insertAdjacentElement('afterbegin', cards);
          main.insertAdjacentElement('beforeend', container);
          for (let i = 0; i < followQuestionsTest.length; i++) {
              let card = document.createElement('div');
              let percentScore = followQuestionsTest[i].percentScore;
              let title = followQuestionsTest[i].title;
              console.log(followQuestionsTest);
              card.classList.add('cards__item');
              card.innerHTML = `
              <div class="cards__item-result">${percentScore}%</div>
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