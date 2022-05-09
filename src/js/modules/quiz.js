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
    let contacts = document.querySelector('.contact');

    for (let i=0; i < DOMFollowQuestions.length; i++) {
        let title = DOMFollowQuestions[i].dataset.title;
        let questions = DOMFollowQuestions[i].dataset.question.split('?');
        let facultyName = DOMFollowQuestions[i].dataset.name;
        let description = DOMFollowQuestions[i].dataset.description;
        let page = DOMFollowQuestions[i].dataset.page;
        let fullDescription = DOMFollowQuestions[i].dataset.full;
        let color = DOMFollowQuestions[i].dataset.color;
        let image = DOMFollowQuestions[i].dataset.image;
        followQuestionsTest[i] = {
            followQuestions: questions,
            ID: idCounter,
            title: title,
            name: facultyName,
            description: description,
            page: page,
            fullDescription: fullDescription,
            color: color,
            image: image,
    };
    idCounter++;
    }
    // console.log(followQuestionsTest);


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
                <form action="" class="questions__${formCounter} questions__form partTwoForm">
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
                let paginationCounter = 1;
                // while(Object.keys(element)[counter] !='ID'){
                    for (let i = 0; i < element.followQuestions.length; i++) {
                        let ID = element.ID;
                         let newDiv = document.createElement("div");
                    newDiv.innerHTML = `
                    <div class="pagination"><span>${paginationCounter}</span>/${element.followQuestions.length}</div>
                    <p class="question">${element.followQuestions[i]}</p>
                    <div class="answers">
                        <input type="radio" class="question__input" value="1" id="secondAnswerYes${ID}${i}" name="question${ID}${i}" hidden>
                        <label class="testLabel" for="secondAnswerYes${ID}${i}">JĀ</label>
                        <input type="radio" class="question__input" value="0" id="secondAnswerNo${ID}${i}" name="question${ID}${i}" hidden>
                        <label class="testLabel" for="secondAnswerNo${ID}${i}">NĒ</label>
                    </div>`;
                    newDiv.classList.add('questions','swiper-slide', 'swiper-no-swiping','swiper-slide-two');
                    formContainer.insertAdjacentElement('beforeend', newDiv);
                    paginationCounter++;
                    }
                const div = document.createElement('div');
                div.classList.add('lastButton');
                const secondButton = document.createElement("button");
                secondButton.classList.add('featured__link' ,'secondButton');
                secondButton.setAttribute('type', 'submit');
                secondButton.innerText = 'Turpināt';
                div.insertAdjacentElement('beforeend', secondButton);
                formContainer.insertAdjacentElement('beforeend', div);
                const formTwo = document.querySelector(`.questions__${formCounter}`);

                

                formTwo.addEventListener("submit", function(event) {
                    // let wrapper = document.querySelectorAll('.wrapper');
                
                    let data = new FormData(formTwo);
                    let output = 0;                
                    for (const entry of data) {
                        output += parseInt(entry[1]);
                    };
                    // log.innerText = output;
                    element.questionsScore = output;
                    element.percentScore = Math.floor(element.questionsScore*100 / element.followQuestions.length , 2);
                    output = 0;
                    event.preventDefault();
                    }, false);
                

                mainDisplay.insertAdjacentElement('beforeend', container);

                counter++;
                formCounter++;

        })
        let swiper = document.querySelectorAll('.swiper__second');
        for( let i=0; i< swiper.length; i++ ) {
  
            var slider = new Swiper('.swiper' + i, {
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
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
            // let inputs = slides[0].querySelectorAll('.question__input');
            // let inputsArr = Array.from(inputs);
            swiper.forEach(el => {
                let slides = el.querySelectorAll('.swiper-slide-two');
                let nexSlideButton = el.querySelector('.swiper-button-next');
                let button = el.querySelector('.secondButton');
                for (let i = 0; i < slides.length; i++) {
                    let inputs = slides[i].querySelectorAll('input');
                    let inputsArr = Array.from(inputs);
                    for (let j = 0; j < inputsArr.length; j++) {
                        inputsArr[j].addEventListener('click', () => {
                            if(inputsArr[0].checked || inputsArr[1].checked) {
                            el.swiper.slideNext();
                            if(nexSlideButton.classList.contains('swiper-button-disabled') & slides.length-1 === i) {
                                button.click();
                            }
                            }
                        })
                    }
                    
                }
            })
            Slider.slider();
            iterateSecondQuestions();

            let swiperForBack = document.querySelectorAll('.swiper__second');
            console.log(swiperForBack);
            // let swiperCounter = 0;
            // swiperForBack.forEach(el => {
            //     let swiper = document.querySelector(`.swiper${swiperCounter}`).swiper;
            //     let prevSlide = document.querySelectorAll('.swiper-slide-prev')[swiperCounter];
            //     let backButton = document.querySelector('.back__button');
            //     backButton.addEventListener('click', () => {
            //         swiper.slidePrev();
            //         console.log(prevSlide);
            //         let inputs = prevSlide.querySelectorAll('.question__input');
            //         let labels = prevSlide.querySelectorAll('label');
            //         inputs.forEach(el => {
            //           el.checked = false;
            //         })
            //         labels.forEach(el => {
            //           el.classList.remove('active');
            //           el.removeAttribute('hidden');
            //           el.style.pointerEvents = 'all';
            //         })
            //       })
            //       swiperCounter++;
            // });

            for (let i = 0; i < swiperForBack.length; i++) {
                let swiper = document.querySelector(`.swiper${i}`).swiper;
                let backButton = document.querySelector('.back__button');
                backButton.addEventListener('click', () => {
                    let prevSlide = swiperForBack[i].querySelector(`.swiper-slide-prev`);
                    swiper.slidePrev();
                    let inputs = prevSlide.querySelectorAll('.question__input');
                    let labels = prevSlide.querySelectorAll('label');
                    // inputs.checked = false;
                    inputs.forEach(el => {
                        el.checked = false;
                      })
                    labels.forEach(el => {
                      el.classList.remove('active');
                      el.removeAttribute('hidden');
                      el.style.pointerEvents = 'all';
                    });
                  })
            }
    }
  
    function iterateSecondQuestions() {
        let secondForms = document.querySelectorAll('.partTwoForm');
        let wrapper = document.querySelectorAll('.wrapper');
        let firstTitle = document.querySelector('.first__title');
        let counter = 0;
        let questionCounter = 2;
        let swiper = document.querySelectorAll('.swiper__second');

        firstTitle.innerText = `Otrā jautājumu sadaļa 1/${followQuestionsTest.length}`;
    
        secondForms.forEach(el => {
            
            el.addEventListener('submit', (event) => {
                     firstTitle.innerText = `Otrā jautājumu sadaļa ${questionCounter}/${followQuestionsTest.length}`;
                     if(!(wrapper.length-1 === counter)){
                        swiper[counter+1].swiper.slideTo(0,1,false);
                     }
                    if(wrapper.length-1 === counter){
                        let submitButton = document.createElement('a');
                        document.querySelector('.left').remove();
                        document.querySelector('.right').remove();
                        document.querySelector('.first__inner').style.justifyContent = 'center';
                        submitButton.classList.add('resultsButton', 'featured__link');
                        submitButton.setAttribute('href','#');
                        submitButton.innerText = 'Apskatīt rezultātu';
                        mainDisplay.insertAdjacentElement('beforeend', submitButton);
                        const submitResults = document.querySelector(".resultsButton");
                        //Submit results 
                         submitResults.addEventListener('click', () => {
                        //   for(let item of followQuestionsTest ) {
                        //       console.log(item.percentScore);
                        //       console.log(followQuestionsTest);
                        //   }
                          sendGAEvent('Apskatījas rezultātus', {
                            'event_category' : 'Apskatījas rezultātus',
                            'event_label' : 'Apskatījas rezultātus'
                          });
                          createResultCard();


                          });
                    }
                    wrapper[counter].classList.add('none');
                    wrapper[counter+1].classList.remove('none');
                    // console.log(wrapper.length);
                    // console.log(counter);
                    counter++;
                    questionCounter++;
                event.preventDefault();
            },false);
            
        })
    }
    function createFallBackAnswers() {
        // Check if both questions are true
        mainQuestionsTest.forEach( el => {
            if (el.questionOneAnswer === 'true' && el.questionTwoAnswer === 'true'){
                fallbackAnswers = fallbackAnswers.concat(el.fallBackQuestions);
                // console.log(fallbackAnswers);
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
        if(fallbackAnswers.length === 0) {
            console.log('fajaaa');
            document.querySelector('.first').remove();
            // contacts.querySelector('.contact__info-title').innerText = 'Nenoteikts';
            contacts.querySelector('.contact__info-title').remove();
            contacts.querySelector('.contact__info-mail').innerHTML = `Izskatās, ka ar testa jautājumiem neizdevās izgaismot Tavas stiprās puses un intereses. Bet nebēdā! Tas nozīmē, ka ir vērts savas karjeras iespējas pārrunāt individuāli ar karjeras konsultantu. Tāpēc aicinām jau šodien pieteikties konsultācijai pie karjeras konsultanta, rakstot e-pastu <a href="mailto:karjera@lu.lv">karjera@lu.lv</a>! Tev viss izdosies!
            `;
            contacts.classList.remove('none');
            event.preventDefault();
            // throw new Error();
        }
        document.querySelector('.firstPart').classList.add('none');
        createPartTwo();
        QuestionCard.questionCard();
        questionsForm.classList.remove('block');
        // console.log(fallbackAnswers);
        SecondSlides.secondSlides();
        createPrePartTwo();
        document.querySelector('.second__questions').addEventListener('click', () => {
        document.querySelector('.firstPart').classList.remove('none');
        document.querySelector('.part__two').remove();
        document.querySelector('.right').classList.add('none');
        sendGAEvent('Sāka testa otro daļu', {
            'event_category' : 'Sāka testa otro daļu',
            'event_label' : 'Sāka testa otro daļu'
          });
        });
        event.preventDefault();
      }, false);

      //Create result card depending on result
      function createResultCard() {
          window.history.replaceState({}, '','/rezultats');
          window.history.pushState("", document.title, window.location.pathname + window.location.search);

          //sort by percent value
          followQuestionsTest.sort((a, b) => b.percentScore - a.percentScore);
          let hero = document.querySelector('.first');
          hero.classList.add('none');
          let main = document.querySelector('.results');
          main.classList.add(`${followQuestionsTest[0].color}`);
          let contacts = document.querySelector('.contact');
          contacts.classList.remove('none');
          main.classList.remove('none');
          let resultsContainer = document.createElement('div');
          let resultsThis = ['šīs','šī'];
          let resultsCount = ['fakultāte', 'fakultātes'];
          let resultsThisFinal = followQuestionsTest.length > 0 ? resultsThis[0] : resultsThis[1];
          let resultsCountFinal = followQuestionsTest.length > 0 ? resultsCount[0] : resultsCount[1];
          resultsContainer.classList.add('container');
          if(followQuestionsTest[0].image != '') {
            main.style.backgroundImage = `url('${followQuestionsTest[0].image}')`;
          }
          resultsContainer.innerHTML = `
          <h6 class="results__heading">Testa rezultāts:</h6>
			<h1 class="results__title">
				${followQuestionsTest[0].name}
			</h1>
			<div class="results__subtitle">
                Apsveicam! Spriežot pēc Tavām atzīmētajām interesēm, iesakām tev izvēlēties ${resultsThisFinal} ${resultsCountFinal}. Procentu daudzums atbilst tam, cik ļoti piemērota Tev varētu būt attiecīgā fakultāte – jo vairāk procentu, jo lielāka iespējamība, ka fakultātē atradīsi kādu programmu, kas Tev būs īpaši piemērota un saistoša. Ar visām programmām aicinām iepazīties <a href="https://www.lu.lv/gribustudet/studiju-programmas/bakalaura-limena-studijas/" target="_blank">Latvijas Universitātes tīmekļvietnē.</a> Ņemot vērā to, ka šis ir tikai ieskats Tavu interešu apzināšanā, tad pārliecināties par attiecīgajām fakultātēm un precīzāku virzienu vari, piesakoties uz individuālu konsultāciju ar karjeras konsultantu. Piesakies e-pastā: <a href="mailto:karjera@lu.lv">karjera@lu.lv</a>
			</div>
          `;
          main.insertAdjacentElement('beforeend', resultsContainer);
        
          let container = document.createElement('div');
          let cards = document.createElement('div');
          container.classList.add('container');
          cards.classList.add('cards');
          container.insertAdjacentElement('afterbegin', cards);
          main.insertAdjacentElement('afterend', container);
          for (let i = 0; i < 3; i++) {
              let card = document.createElement('div');
              let percentScore = followQuestionsTest[i].percentScore;
              let title = followQuestionsTest[i].name;
              let description = followQuestionsTest[i].fullDescription;
              let color = followQuestionsTest[i].color;
            //   console.log(followQuestionsTest);
              card.classList.add('cards__item');
              card.innerHTML = `
              <div class="cards__item-result">${percentScore}%
              <svg
              class="ring"
              width="120"
              height="120">
             <circle
               class="progress-ring__circle"
               stroke=""
               stroke-width="8"
               fill="transparent"
               r="52"
               cx="60"
               cy="60"/>
           </svg>
           </div></div>
              <h3 class="cards__item-title">${title}</h3>
              <div class="cards__item-text">${description}</div>
              <a href="${followQuestionsTest[i].page}" class="cards__item-button" target="_blank" >uzzināt vairāk</a>
              `

              cards.insertAdjacentElement('beforeend', card);

              let circle = document.querySelectorAll('.progress-ring__circle');
              circle[i].classList.add(`${color}`);

              let radius = circle[i].r.baseVal.value;
              let circumference = radius * 2 * Math.PI;

            
              circle[i].style.strokeDasharray = `${circumference} ${circumference}`;
              circle[i].style.strokeDashoffset = `${circumference}`;

              const offset = circumference - percentScore / 100 * circumference;
              circle[i].style.strokeDashoffset = offset;
          }

      }
      function createPrePartTwo() {
          document.querySelector('.first__questions').remove();
          let container = document.createElement('div');
          container.classList.add('container', 'part__two');
          container.innerHTML = `
          <div class="first__inner">
				<div class="left">
					<h1 class="first__title">Otrā jautājumu sadaļa</h1>
				</div>
				<div class="right">
					<div class="first__info">
						<div class="first__info-title">Tev labi izdodas! Tālāk turpini ar šiem apgalvojumiem – rūpīgi izlasi katru no tiem un atbildi uz tiem ar “jā” vai “nē”'</div>
						<ul class="first__info-list">
							<li>~50 jautājumi</li>
							<li>Aptuvenais izpildes laiks: 5-15 minūtes </li>
						</ul>
						<div class="button__wrapper">
							<a href="#" class="featured__link second__questions">Turpināt Testu</a>
						</div>
					</div>
            `;
            document.querySelector('.first').insertAdjacentElement('afterbegin', container);
            
      }
      function sendGAEvent(event, data){
        console.log(event, data);
        gtag('event', event, data);
    }

    // });
    // writeAnswers();
}