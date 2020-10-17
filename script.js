var start = document.getElementById("start");
var questionDiv = document.getElementById("question");
var choiceA = document.getElementById("1");
var choiceB = document.getElementById("2");
var choiceC = document.getElementById("3");
var choiceD = document.getElementById("4");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timer");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("score");
var choiceDiv = document.getElementById("choices");
var intials = document.getElementById("intials")


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
let count = questions.length * 15;
let TIMER;
let rightAnswers = 0;
let wrongAnswers = 0;


function renderQuestion(){
    let q = questions[runningQuestion];

    questionDiv.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.answer1;
    choiceB.innerHTML = q.answer2;
    choiceC.innerHTML = q.answer3;
    choiceD.innerHTML = q.answer4;
    
}

start.addEventListener("click", startQuiz);

function startQuiz(){
   
    renderQuestion();
   
    renderProgress();
    renderCounter();
    questionDiv.classList.remove("hide")
    choiceDiv.classList.remove("hide")
    
    timeGauge.classList.remove("hide")
    start.classList.add("hide")
    TIMER = setInterval(renderCounter, 1000)
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div";
    }
}


 function renderCounter(){
     if(count > 0) {
         counter.innerHTML = count;
         count--
     }else{
         
        clearInterval(TIMER);
        reset()
        
     }
 }
 function reset(){
        
        questionDiv.setAttribute("style","display:none");
        choiceA.setAttribute("style","display:none");
        choiceB.setAttribute("style","display:none");
        choiceC.setAttribute("style","display:none");
        choiceD.setAttribute("style","display:none")
 }

function checkAnswer(answer){
    if(answer === questions[runningQuestion].answer){
         
         answerIsRight();
         scoreDiv.setAttribute("style","display:block");
        console.log("good job")
    }else{
        answerIsWrong();
        scoreDiv.setAttribute("style","display:block");
    }
    
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
        console.log(runningQuestion, lastQuestion);

    }else if(runningQuestion===lastQuestion){
        clearInterval(TIMER)
        reset()
    }
}
function answerIsRight(){
    rightAnswers++
    let score = [rightAnswers, wrongAnswers];
    progress.innerHTML = score
}

function answerIsWrong(){
   wrongAnswers++
   let score = [rightAnswers, wrongAnswers];
   progress.innerHTML = score
     count = count -10
}
function save(){
    localStorage.setItem("finaleScore", progress.innerHTML)
    localStorage.setItem("intials", intials.value);
    let saveIntials = localStorage.getItem("intials");
    let saveScore = localStorage.getItem("finaleScore")
    console.log(saveScore, saveIntials)
    progress.innerHTML = saveScore
    scoreDiv.innerHTML = saveIntials
}
