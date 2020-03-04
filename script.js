// Global Variables
var score = 0;
var secondsLeft = 120;

// DOM elements
var scoreSpan= document.getElementById("currentScore");
var timerSpan = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var quiz = document.getElementById("quiz");
var quizBody = document.getElementById("quiz-body")
var optionsList = document.getElementById("options-list")

// Score functionality
function setScoreText() {
    scoreSpan.textContent = score;
  }

//Timer functionality
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;

        timerSpan.textContent = secondsLeft;

        if (secondsLeft <= 0 || quizOver) {

        }

        timerSpan.textContent = "";
        clearInterval(timerInterval);
    
    }, 1000);
}
// Quiz questions
var quizQuestions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
        "<scripting>",
        "<javascript>",
        "<script>",
        "<js>"
    ],
    answer: "<scipt>"
    },
];

//Creating answer option buttons
function addButton1(){
    var button1 = document.createElement("button");
    button1.innerText = quizQuestions[0].options[0];
    optionsList.appendChild(button1);
    return;
}

function addButton2(){
    var button2 = document.createElement("button");
    button2.innerText = quizQuestions[0].options[1];
    optionsList.appendChild(button2);
    return;
}

function addButton3(){
    var button3 = document.createElement("button");
    button3.innerText = quizQuestions[0].options[2];
    optionsList.appendChild(button3);
    return;
}

function addButton4(){
    var button4 = document.createElement("button");
    button4.innerText = quizQuestions[0].options[3];
    optionsList.appendChild(button4);
    return;
}

//Populating questions after clicking start
function startQuiz() {
    quizBody.innerHTML = "";
    

    quizBody.textContent = quizQuestions[0].question;

    //Cycle through quiz questions
    for (var i = 0; i < quizQuestions.length; i++) {
        quizCurrentQuestion = quizQuestions[i];

        var nextQuestion = document.createElement("text");
        nextQuestion.textContent = quizCurrentQuestion;
        quizBody.appendChild(nextQuestion);

        
        startTimer();
        addButton1();   
        addButton2();
        addButton3();
        addButton4();
        document.getElementById("start-button").remove();
    }
}
startButton.addEventListener("click", startQuiz);