// Global Variables
var score = 0;
var secondsLeft = 120;
var wrongAnswer = -10;
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
     "<option 1>", 
     "<option 2>",
     "<option 3>",
     "B"],
     
];

//Creating answer option buttons
function addChoiceA(){
    var button1 = document.createElement("button");
    button1.setAttribute(name="choices", value="A");
    button1.innerText = choiceA;
    optionsList.appendChild(button1);
    button1.addEventListener("click", checkAnswer);
    
    
}

function addChoiceB(){
    var button2 = document.createElement("button");
    button2.setAttribute(name="choices", value="B");
    button2.innerText = choiceB;
    optionsList.appendChild(button2);
    button2.addEventListener("click", checkAnswer);
    
    
}

function addChoiceC(){
    var button3 = document.createElement("button");
    button3.setAttribute(name="choices", value="C");
    button3.innerText = choiceC;
    optionsList.appendChild(button3);
    button3.addEventListener("click", checkAnswer);
    
}

//Generate questions 
function RenderQuestions() {
    document.getElementById("quiz");
    
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
    //addChoiceA();
    //addChoiceB();
    //addChoiceC();
    optionsList.innerHTML += "<input type='radio' name='choices' value='A'>" + choiceA + "<br>";
    optionsList.innerHTML += "<input type='radio' name='choices' value='B'>" + choiceB + "<br>";
    optionsList.innerHTML += "<input type='radio' name='choices' value='C'>" + choiceC + "<br><br>";
    optionsList.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    optionsList = "";
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

    else {
        (secondsLeft - wrongAnswer);
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
