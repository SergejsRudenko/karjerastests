export function quiz() {
    let form = document.querySelector("form");
    var log = document.querySelector("#log");
    let idCounter = 0;
    let mainQuestions = 
        {
            questionOne: {
                "questionOne": "Man patīk pētniecisks darbs",
                "QOID": `Q1Q1`,
                "questionOneAnswer": '',
                "questionTwo": "Man piemīt pacietība un neatlaidība ilgstoši strādāt pie vienas problēmas risinājuma",
                "QTID": `Q1Q2`,
                "questionTwoAnswer": '',
                "fallbackQuestions": ['A'],
                "ID": 1
                // ['BF(All)','ĶF(All)','MF(All)','ĢZZF(All)','HZF(KS)','PPMF(STS)','SZF(S)']
            },
            questionTwo: {
                "questionOne": "Question",
                "QOID": "Q2Q1",
                "questionOneAnswer": '',
                "questionTwo": "Question 2",
                "QTID": "Q2Q2",
                "questionTwoAnswer": '',
                "fallbackQuestions": ['B'],
                "ID": 3
            },
            questionThree: {
                "questionOne": "Question",
                "QOID": "Q3Q1",
                "questionOneAnswer": '',
                "questionTwo": "Question 2",
                "QTID": "Q3Q2",
                "questionTwoAnswer": '',
                "fallbackQuestions": ['C'],
                "ID": 5
            },
            questionFour: {
                "questionOne": "Question",
                "QOID": "Q4Q1",
                "questionOneAnswer": '',
                "questionTwo": "Question 2",
                "QTID": "Q5Q2",
                "questionTwoAnswer": '',
                "fallbackQuestions": ['D'],
                "ID": 7
            }
        };
    let fallbackAnswers = ['D'];
    let followQuestions = {
        "BF(ALL)": {
            "questionOne" : "1",
            "questionTwo" : "2",
            "questionThree" : "3",
            "questionFour" : "4",
            "questionFive" : "5",
            "questionSix" : "6",
            "ID": 1
        },
        "LU": {
            "questionOne" : "1",
            "questionTwo" : "2",
            "questionThree" : "3",
            "questionFour" : "4",
            "questionFive" : "5",
            "questionSix" : "6",
            "ID": 3
        }
    };
    function createPartOne () {
        let currentDiv = document.querySelector(".questions__form");
        for (const item of Object.values(mainQuestions)) {
            // console.log(item);
            let questionOne = item.questionOne;
                let questionTwo = item.questionTwo;
                let ID = item.ID;
                let ID1 = item.QOID;
                let ID2 = item.QTID;
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
        let currentDiv = document.querySelector(".questions__formTwo");
        //Removes questions that are not in fallbackQuestions
        console.log(Object.keys(followQuestions));
        // for (let item of Object.keys(followQuestions)){
        //     console.log(item);
        //     if (!fallbackAnswers.includes(item)) {
        //         delete followQuestions[item];
        //     }
        // }
        console.log(followQuestions);
        for (const item of Object.values(followQuestions)) {
                let questionOne = item.questionOne;
                let questionTwo = item.questionTwo;
                let ID = item.ID;
                let ID1 = item.QOID;
                let ID2 = item.QTID;
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
  
    function createFallBackAnswers() {
            // Check if both questions are true
        for (const item of Object.values(mainQuestions)) {
            if (item.questionOneAnswer === 'true' && item.questionTwoAnswer === 'true') {
                fallbackAnswers.push(...item.fallbackQuestions);
            }
          }
    }
    
    form.addEventListener("submit", function(event) {
        var data = new FormData(form);
        var output = "";
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
            counter +=2;
            // console.log(counter);
        }
        createFallBackAnswers();
        // console.log(fallbackAnswers);
        // console.log(mainQuestions.questionThree);

        event.preventDefault();
      }, false);

    createPartOne();
    createPartTwo();
    // writeAnswers();
}