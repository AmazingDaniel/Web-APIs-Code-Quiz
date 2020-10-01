var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("1");
var choiceB = document.getElementById("2");
var choiceC = document.getElementById("3");
var choiceD = document.getElementById("4");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var csoreDiv = document.getElementById("score");

let questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answer: "3",
        answer1: "1. strings",
        answer2: "2. booleans",
        answer3: "3. alerts",
        answer4: "4. numbers"
        
    },
    {
        question: "The condition in an if / else statement is enclosed within _________.",
        answer: "3",
        answer1: "1. quotes",
        answer2: "2. curly brackets",
        answer3: "3. parentheses",
        answer4: "4. square brackets",
        
    },
    {
        question: "Arrays in Javascript can be used to store _________.",
        answer: "4",
        answer1: "1. numbers and strings",
        answer2: "2. other arrays",
        answer3: "3. booleans",
        answer4: "4. all of the above",
    
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answer: "3",
        answer1: "1. commas",
        answer2: "2. curly brackets",
        answer3: "3. quotes",
        answer4: "4. parentheses",
        
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answer: "1",
        answer1: "1. JavaScript",
        answer2: "2. terminal / bash",
        answer3: "3. for loops",
        answer4: "4. console.log",
        
    }
];


var lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];

    questions.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000)
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div";
    }
}


 function renderCounter(){
     if(count <= questionTime){
         counter.innerHTML = count;
         timeGauge.style.width = count * gaugeUnit + "px";
         count++
     }else{
         count = 0;
         answerIsWrong();
         if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER)
            scoreRender();
        }
     }
 }

function checkAnswer(){
    if(answer == questions[runningQuestion].correct){
        score++
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER)
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreRender(){
    scoreDiv.style.display = "block";

    var scorePerCent = Math.round(100 * score/questions.length);

    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}











