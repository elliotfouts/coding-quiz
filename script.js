// to change to quiz display 
var quizContainer = document.querySelector(".quiz-container");
var quizQuestion = document.querySelector("#title");
var quizAnswerContainer = document.querySelector(".quiz-answers")
var quizAnswers = document.querySelectorAll(".answer");
var quizButton = document.querySelector('#quiz-button');

function toQuizDisplay () {
    quizContainer.classList.add("active");
    quizQuestion.classList.add("active");   
    quizAnswerContainer.classList.add("active")
    setTimeout(function(){
        for(var i = 0; i < quizAnswers.length; i++) {
            quizAnswers[i].classList.add("active");
        }
    }, 25);
    quizButton.removeEventListener("click", toQuizDisplay);
    nextQuestion();
    quizButton.addEventListener("click", nextQuestion);
}

quizButton.addEventListener("click", toQuizDisplay)


//to begin quiz & to move to next question
var quizAnswer1 = quizAnswers[0];
var quizAnswer2 = quizAnswers[1];
var quizAnswer3 = quizAnswers[2];
var quizAnswer4 = quizAnswers[3];
var quizContent = [
    [
        {question: "Question 1"},
        {correct: "Answer 1"},
        {incorrect: "Answer 2"},
        {incorrect: "Answer 3"},
        {incorrect: "Answer 4"}
    ], [
        {question: "Question 2"},
        {correct: "Answer 1"},
        {incorrect: "Answer 2"},
        {incorrect: "Answer 3"},
        {incorrect: "Answer 4"}
    ], [
        {question: "Question 3"},
        {correct: "Answer 1"},
        {incorrect: "Answer 2"},
        {incorrect: "Answer 3"},
        {incorrect: "Answer 4"}
    ]
]
var questionCounter = 0;
var currentQuestion;


function nextQuestion() {
    if (questionCounter < quizContent.length) {
        currentQuestion = quizContent[questionCounter];
        quizQuestion.textContent = Object.values(currentQuestion[0])[0];
        quizAnswer1.textContent = Object.values(currentQuestion[1])[0];
        quizAnswer2.textContent = Object.values(currentQuestion[2])[0];
        quizAnswer3.textContent = Object.values(currentQuestion[3])[0];
        quizAnswer4.textContent = Object.values(currentQuestion[4])[0];
        questionCounter++;

        for (var k = 0; k < quizAnswers.length; k++) {
            quizAnswers[k].classList.remove("incorrect");
            quizAnswers[k].classList.remove("correct");
        }
    } else {
        questionCounter = 0;
        console.log("end of quiz")
    }

}

// To check answer
var answerSelected;
var hasAnswered = false;
var correctAnswer;
var correctAnswerIndex;
var score = 0;


function checkAnswer (event) {
    
    for (j = 0; j < currentQuestion.length; j++) {
        if (currentQuestion[j].hasOwnProperty("correct")){
            correctAnswerIndex = j;
        }
    }
    
    correctAnswer = currentQuestion[correctAnswerIndex].correct;
    answerSelected = event.target.textContent

    if (answerSelected === correctAnswer) {
        event.target.classList.add("correct");
        score++;
    } else {
        event.target.classList.add("incorrect")
    }


}

quizAnswerContainer.addEventListener("click", checkAnswer)
