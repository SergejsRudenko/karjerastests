export function quiz() {
    let form = document.querySelector("form");
    var log = document.querySelector("#log");
    let idCounter = 0;
    let mainQuestions = 
        {
            questionOne: {
                "questionOne": "Man patīk pētniecisks darbs",
                "QOID": `Q1Q1`,
                "questionOneAnswer": false,
                "questionTwo": "Man piemīt pacietība un neatlaidība ilgstoši strādāt pie vienas problēmas risinājuma",
                "QTID": `Q1Q2`,
                "questionTwoAnswer": false,
                "fallbackQuestions": ['BF(All)','ĶF(All)','MF(All)','ĢZZF(All)','HZF(KS)','PPMF(STS)','SZF(S)'],
                "ID": 1
            },
            // questionTwo: {
            //     "questionOne": "Question",
            //     "QOID": "Q2Q1",
            //     "questionOneAnswer": false,
            //     "questionTwo": "Question 2",
            //     "QTID": "Q2Q2",
            //     "questionTwoAnswer": false,
            //     "fallbackQuestions": ['ES','RTU'],
            //     "ID": 3
            // },
            // questionThree: {
            //     "questionOne": "Question",
            //     "QOID": "Q3Q1",
            //     "questionOneAnswer": false,
            //     "questionTwo": "Question 2",
            //     "QTID": "Q3Q2",
            //     "questionTwoAnswer": false,
            //     "fallbackQuestions": ['MRI','OST'],
            //     "ID": 5
            // }
        };
    let fallbackAnswers = [];
    let fallBackQuestions = {};
    function addElement () {
        for (const item of Object.values(mainQuestions)) {
            console.log(item);
            let questionOne = item.questionOne;
                let questionTwo = item.questionTwo;
                let questionOneAnswer = item.questionOneAnswer;
                let questionTwoAnswer = item.questionTwoAnswer;
                let ID = item.ID;
                let ID1 = item.QOID;
                let ID2 = item.QTID;
                let newDiv = document.createElement("div");
                newDiv.innerHTML = `<p class="question">${questionOne}</p>
                <div class="answers">
                    <input type="radio" value="yes" id="answerYes${ID}" name="question${ID}">
                    <label for="answerYes${ID}">YES</label>
                    <input type="radio" value="no" id="answerNo${ID}" name="question${ID}">
                    <label for="answerNo${ID}">NO</label>
                </div>
                <p class="question">${questionTwo}</p>
                <div class="answers">
                    <input type="radio" value="yes" id="answerYes${ID}" name="question${ID+1}">
                    <label for="answerYes${ID}">YES</label>
                    <input type="radio" value="no" id="answerNo${ID}" name="question${ID+1}">
                    <label for="answerNo${ID}">NO</label>
                </div>`;
                newDiv.classList.add('questions');
                let currentDiv = document.querySelector(".questions__form");
                currentDiv.insertAdjacentElement('afterbegin', newDiv);
          }
        
    }
    function writeAnswers() {
        for (const item of Object.values(mainQuestions)) {
            item.questionOneAnswer = true;
            item.questionTwoAnswer = true;
          }
    }
    function createFallBackAnswers() {
        
        for (const item of Object.entries(mainQuestions)) {
            for (let i = 0; i < item.length; i++) {
                const optionOne = item[i].questionOneAnswer;
                const optionTwo = item[i].questionTwoAnswer;
                if(optionOne && optionTwo) {
                    fallbackAnswers.push(...item[i].fallbackQuestions);
                }
            }
          }
          return fallbackAnswers;
    }
    
    form.addEventListener("submit", function(event) {
        var data = new FormData(form);
        var output = "";
        for (const entry of data) {
          output = output + entry[0] + "=" + entry[1] + "\r";
        };
        log.innerText = output;
        event.preventDefault();
      }, false);

    addElement();
    writeAnswers();
    createFallBackAnswers();
    console.log(fallbackAnswers);
}