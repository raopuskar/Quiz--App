const question = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {Text: "Shark",correct: false},
            {Text: "blue wale",correct: true},
            {Text: "lion",correct: false},
            {Text: "elephant",correct: false},
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            {Text: "Shark",correct: false},
            {Text: "blue wale",correct: true},
            {Text: "lion",correct: false},
            {Text: "elephant",correct: false},
        ]

    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            {Text: "Shark",correct: false},
            {Text: "blue wale",correct: true},
            {Text: "lion",correct: false},
            {Text: "elephant",correct: false},
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            {Text: "Shark",correct: false},
            {Text: "blue wale",correct: true},
            {Text: "lion",correct: false},
            {Text: "elephant",correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answersBtn = document.getElementById("options");
const nextBtn = document.getElementById("next");

let currentQnIdx = 0;
let score = 0;

function startQuiz(){
    currentQnIdx=0;
    score=0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQnIdx];
    let questionNo = currentQnIdx + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");      //here we are adding class name of btn in this button
        answersBtn.appendChild(button);
        if(answer.correct){               //add true or false dataset from above questions
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAns);
    });
}

function resetState(){              //for removing the options from html
    nextBtn.style.display = 'none'; 
    while(answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild);
    }
}

function selectAns(e){
    const selectBtn = e.target;   //add the selected variable in this button
    const isCorrect = selectBtn.dataset.correct === "true";  //check if it is true
    if(isCorrect){
        selectBtn.classList.add("correct");   //if true it will add class name true
        score++;                              //score upgrade
    }else{                                    //we will add baground color of this class name in css
        selectBtn.classList.add("incorrect");
    }
    Array.from(answersBtn.children).forEach(button => {         //this is for displaying write answer and coloring selected wrong                                     
        if(button.dataset.correct === "true"){                  //answer and displaying next button
            button.classList.add("correct");                    //forEach = it will check each buttton
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}
function handelNextBtn(){
    currentQnIdx++;
    if(currentQnIdx < question.length){
        showQuestion();                  //show question with upgraded idx till last second
    }else{
        showScore();                    
    }
}
nextBtn.addEventListener("click",()=>{         //fn for next btn
    if(currentQnIdx < question.length){
        handelNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();