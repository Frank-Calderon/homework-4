// Global Variables
var score = 0;
var secondsLeft = 120;
var currentQuestion = 0;
var question;
var choiceA;
var choiceB;
var choiceC;
var choice;
var choices;


// DOM elements
var scoreSpan= document.getElementById("currentScore");
var timerSpan = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var quiz = document.getElementById("quiz");
var quizBody = document.getElementById("quiz-body");
var optionsList = document.getElementById("options-list");

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
var quizQuestions = [
    ["Inside which HTML element do we put the JavaScript?",
     "<scripting>", 
     "<javascript>",
     "<script>", 
     "C"],
   
     ["test",
     "<scripting>", 
     "<javascript>",
     "<script>",
     "B"],
     
];

//Creating answer option buttons
function addChoiceA(){
    var button1 = document.createElement("button");
    button1.setAttribute("name","choices",)
    button1.setAttribute("value","A"); 
    button1.innerText = quizQuestions[currentQuestion][1];
    optionsList.appendChild(button1);
    button1.addEventListener("click", checkAnswer);
    
    
}

function addChoiceB(){
    var button2 = document.createElement("button");
    button2.setAttribute("name","choices",)
    button2.setAttribute("value","B"); 
    button2.innerText = quizQuestions[currentQuestion][2];
    optionsList.appendChild(button2);
    button2.addEventListener("click", checkAnswer);
    
    
}

function addChoiceC(){
    var button3 = document.createElement("button");
    button3.setAttribute("name","choices",)
    button3.setAttribute("value","C"); 
    button3.innerText = quizQuestions[currentQuestion][3];
    optionsList.appendChild(button3);
    button3.addEventListener("click", checkAnswer);
    
}


function RenderQuestions() {
    quiz;
    if (currentQuestion >= quizQuestions.length) {
        currentQuestion = 0;
        score = 0;
        return false;
    }
    question = quizQuestions[currentQuestion][0];
    choiceA = quizQuestions[currentQuestion][1];
    choiceB = quizQuestions[currentQuestion][2];
    choiceC = quizQuestions[currentQuestion][3];
    quizBody.innerHTML = question;
    optionsList.innerHTML += "<input type='radio' name='choices' value='A'>" + choiceA + "<br>";
    optionsList.innerHTML += "<input type='radio' name='choices' value='B'>" + choiceB + "<br>";
    optionsList.innerHTML += "<input type='radio' name='choices' value='C'>" + choiceC + "<br><br>";
    optionsList.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    
}

//Check for correct answer and render next question
function checkAnswer() {
    var choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    
    if (choice == quizQuestions[currentQuestion][4]) {
        score++;
        setScoreText();
    }
    currentQuestion++;
    RenderQuestions();
}

//Populating questions after clicking start
function startQuiz() {
    
    startTimer();
    document.getElementById("start-button").remove();
    RenderQuestions();
    return;
          
}

startButton.addEventListener("click", startQuiz);
