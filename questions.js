const question = document.getElementById('questionBox');
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('question-counter-text');
const scoreText = document.getElementById('hud-score');
const progressBar = document.getElementById('hud-progress-bar');


let currentQuestion = {} ;
let acceptingAnwers = false ;
let score = 0 ;
let questionCounter = 0 ;
let availableQuestions = [];

let questions = [
  {
  question : 'Which animal does not appear in the Chinese zodiac?',
  choice1 : 'Dragon',
  choice2 : 'Rabbit',
  choice3 : 'Dog',
  choice4 : 'Hummingbird',
  answer : 4
  },
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },

  {
    question: "Which song by Olly Murs featured Flo Rida?",
    choice1: "Gold",
    choice2: "Troublemaker",
    choice3: "party rock",
    choice4: "blow",
    answer: 2
  },

    {
    question: " What is the stage name of the American rapper with the birth name Marshall Bruce Mathers III ?",
    choice1: "MGK",
    choice2: "6ix9ine",
    choice3: "lil baby",
    choice4: "Eminem",
    answer: 4
  },

    {
    question: "What was Twitter’s original name?",
    choice1: "twttr",
    choice2: "twtr",
    choice3: "twit",
    choice4: "twiter",
    answer: 1
  },

  {
    question: "What animals are pearls found in?",
    choice1: "Dogs",
    choice2: "Sword fish",
    choice3: "Oysters",
    choice4: "Diamond fish",
    answer: 3
  },

  // {
  //   question: "",
  //   choice1: "",
  //   choice2: "",
  //   choice3: "",
  //   choice4: "",
  //   answer: 3
  // },

    {
    question: " What animal is associated with ancient Egypt?",
    choice1: " cat",
    choice2: "lion",
    choice3: " hummingbird",
    choice4: "rabbit",
    answer: 1
  },
  

    {
    question: "Which actor performs music under the stage name Childish Gambino?",
    choice1: "Donald Glover",
    choice2: "Will Smith",
    choice3: " Frank Ocean",
    choice4: "Tyler, The Creator",
    answer: 1
  },

  {
    question: "Which country held the 2016 Summer Olympics?",
    choice1: "China",
    choice2: "Ireland",
    choice3: "Brazil",
    choice4: "Italy",
    answer: 3
  },

  {
    question: " What is the name of the song that Queen Elsa sings as she builds her ice castle in the movie Frozen?",
    choice1: "Frozen",
    choice2: "Let us go",
    choice3: "Elsa",
    choice4: "Let it go",
    answer: 4
  },
  {
    question: "What is your body’s largest organ?",
    choice1: "The skin",
    choice2: "Kidney",
    choice3: "Heart",
    choice4: "Lungs",
    answer: 1
  },
  {
    question: "Where is Abubakar Tafawa Balewa University?",
    choice1: "Bauchi",
    choice2: "Kaduna",
    choice3: "Kogi",
    choice4: "Kastina",
    answer: 1
  },
   {
    question: "What language is the most spoken worldwide?",
    choice1: "Chinese",
    choice2: "English",
    choice3: "Yoruba",
    choice4: "Arabic",
    answer: 2
  },

  {
    question: "How many hearts does an octopus have?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 3
  },

  {
    question: "Fe is the chemical symbol for…",
    choice1: "Zinc",
    choice2: "Hydrogen",
    choice3: "Fluorine",
    choice4: "Iron",
    answer: 4
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  }
];

//constants

const Correct_bonus = 2 ;
const Max_questions = 5;

startGame = () => {
  questionCounter = 0 ;
  score = 0 ;
  availableQuestions =[...questions];
  getNewQuestion();
};

getNewQuestion = () =>{
  if(questionCounter >= Max_questions){
    localStorage.setItem('user_score' , score);
    return window.location.assign("questions.html");
 
  }
  questionCounter++;
  questionCounterText.innerText = questionCounter + "/" + Max_questions ;

//updateprogressbar

  progressBar.style.width = `${(questionCounter/Max_questions)*100}%`;
  
  const questionindex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionindex];
  question.innerText =  currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionindex , 1);
  console.log(availableQuestions);

  acceptingAnwers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e =>{
    if(!acceptingAnwers) return;

    acceptingAnwers = false;
    selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorect';

    if(classToApply === "correct"){
      incrementScore(Correct_bonus);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
    getNewQuestion();
    }, 500);
  })
});
incrementScore = num =>{
  score += num;
  scoreText.innerText = score;
};


startGame();
