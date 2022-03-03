export function quiz() {
    let form = document.querySelector(".questions__form");
    var log = document.querySelector("#log");
    let idCounter = 0;
    let mainQuestions = 
        {
            questionOne: {
                "questionOne": "Man patīk pētniecisks darbs",
                "questionOneAnswer": '',
                "questionTwo": "Man piemīt pacietība un neatlaidība ilgstoši strādāt pie vienas problēmas risinājuma",
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
    let fallbackAnswers = ['D'];
    let followQuestions = {
        "BF(ALL)": {
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
        "LU": {
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
    function createPartOne () {
        let currentDiv = document.querySelector(".questions__form");
        for (const item of Object.values(mainQuestions)) {
            // console.log(item);
            let questionOne = item.questionOne;
                let questionTwo = item.questionTwo;
                let ID = item.ID;
                let newDiv = document.createElement("div");
                newDiv.innerHTML = `<p class="question">${questionOne}</p>
                <div class="answers">
                    <input type="radio" value="true" id="answerYes${ID}" name="question${ID}">
                    <label for="answerYes${ID}">YES</label>
                    <input type="radio" value="false" id="answerNo${ID}" name="question${ID}">
                    <label for="answerNo${ID}">NO</label>
                </div>
                <p class="question">${questionTwo}</p>
                <div class="answers">
                    <input type="radio" value="true" id="answerYes${ID}" name="question${ID+1}">
                    <label for="answerYes${ID}">YES</label>
                    <input type="radio" value="false" id="answerNo${ID}" name="question${ID+1}">
                    <label for="answerNo${ID}">NO</label>
                </div>`;
                newDiv.classList.add('questions');
                currentDiv.insertAdjacentElement('beforeend', newDiv);
          }
          let newButton = document.createElement("button");
          newButton.classList.add('submit');
          newButton.setAttribute('type', 'submit');
          newButton.innerText = 'Submit';
          currentDiv.insertAdjacentElement('beforeend', newButton);
    }
    function createPartTwo () {
        let currentDiv = document.querySelector("main");
        //Removes questions that are not in fallbackQuestions
        console.log(Object.keys(followQuestions));
        for (let item of Object.keys(followQuestions)){
            console.log(item);
            if (!fallbackAnswers.includes(item)) {
                delete followQuestions[item];
            }
        }
        console.log(followQuestions);
        let formCounter = 0;
        //Creates forms and questions in them
        for (const item of Object.values(followQuestions)) {
                let counter = 0;
                let ID = item.ID;
                let container = document.createElement("div");
                container.classList.add('container');
                container.innerHTML = `
                <form action="" class="questions__${formCounter}">
                </form>
                `
                console.log(formCounter);
                currentDiv.insertAdjacentElement('beforeend', container);
                let formContainer = document.querySelector(`.questions__${formCounter}`);
                    for(const deep of Object.values(item)){

                    while(Object.keys(item)[counter] !='ID'){
                    let newDiv = document.createElement("div");
                    newDiv.innerHTML = `<p class="question">${Object.values(item)[counter]}</p>
                    <div class="answers">
                        <input type="radio" value="1" id="secondAnswerYes${ID}${counter}" name="question${ID}${counter}">
                        <label for="secondAnswerYes${ID}${counter}">YES</label>
                        <input type="radio" value="0" id="secondAnswerNo${ID}${counter}" name="question${ID}${counter}">
                        <label for="secondAnswerNo${ID}${counter}">NO</label>
                    </div>`;
                    newDiv.classList.add('questions');
                    formContainer.insertAdjacentElement('beforeend', newDiv);
                    counter++;
                    
                }
                    

                      
                }
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
                        console.log(item);
                        log.innerText = output;
                        item.questionsScore = output;
                        // console.log(item.questionsScore);
                        output = 0;
                          //Writes down the annswer values
                            // for (const item of Object.values(followQuestions)) {
                            //     for (const entry of data) {
                            //         output += parseInt(entry[1]);
                            //     };
                            //     console.log(item);
                            //     log.innerText = output;
                            //     item.questionsScore = output;
                            //     // console.log(item.questionsScore);
                            //     output = 0;
                            // }
                            // console.log(fallbackAnswers);
                            // console.log(mainQuestions.questionThree);
                            console.log(followQuestions);
                            event.preventDefault();
                      }, false);
                formCounter++;
          }
          let submitButton = document.createElement('a');
          submitButton.classList.add('results');
          submitButton.setAttribute('href','#');
          submitButton.innerText = 'Submit Results';
          currentDiv.insertAdjacentElement('beforeend', submitButton);
          const submitResults = document.querySelector(".results");

          submitResults.addEventListener('click', () => {
            for(let item of Object.values(followQuestions) ) {
                item.percentScore = item.questionsScore*100/2;
                console.log(item.percentScore);
            }
            createResultCard();
    
            });
          
    }
  
    function createFallBackAnswers() {
            // Check if both questions are true
        for (const item of Object.values(mainQuestions)) {
            if (item.questionOneAnswer === 'true' && item.questionTwoAnswer === 'true') {
                fallbackAnswers.push(...item.fallbackQuestions);
            }
          }
    }
    
    form.addEventListener("submit", function(event) {
        let data = new FormData(form);
        let output = "";
        let counter = 1;

        for (const entry of data) {
            output = output + entry[0] + "=" + entry[1] + "\r";
          };
          log.innerText = output;
          //Writes down the annswer values
        for (const item of Object.values(mainQuestions)) {
            item.questionOneAnswer = data.get(`question${counter}`);
            // console.log(item.questionOneAnswer);
            item.questionTwoAnswer = data.get(`question${counter+1}`);
            // console.log(item.questionTwoAnswer);
            counter +=1;
            // console.log(counter);
        }
        createFallBackAnswers();
        console.log(fallbackAnswers);
        // console.log(mainQuestions.questionThree);
        createPartTwo();

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
          for (let i = 0; i < Object.values(followQuestions).length; i++) {
              let card = document.createElement('div');
              let percentScore = Object.values(followQuestions)[i].percentScore;
              let title = Object.values(followQuestions)[i].title;
              console.log(Object.values(followQuestions));
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
      //Submit results 
    //   submitResults.addEventListener('click', () => {
    //     for(let item of Object.values(followQuestions) ) {
    //         item.percentScore = item.questionsScore*100/2;
    //         console.log(item.percentScore);
    //     }
    //     createResultCard();

    // });


    createPartOne();
    // createPartTwo();
    // createResultCard();
    // writeAnswers();
}