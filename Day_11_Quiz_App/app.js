const progressMsg = document.querySelector('#progress')
const countDown = document.querySelector('#count-down')
const question = document.querySelector('#question')
const answerButtons = document.querySelector('.buttons')
const choice0 = document.querySelector('#choice0') 
const choice1 = document.querySelector('#choice1') 
const choice2 = document.querySelector('#choice2') 
const choice3 = document.querySelector('#choice3') 

let progressTotal = 5
let progressStat = 0
let correctAnswerCount = 0
let answer = null

const questions = [
     {question: 'One?', answer: 'one', options: ['one', 'two', 'three', 'four']},
     {question: 'Two?', answer: 'two', options: ['one', 'two', 'three', 'four']},
     {question: 'Three?', answer: 'three', options: ['one', 'two', 'three', 'four']},
     {question: 'Four?', answer: 'four', options: ['one', 'two', 'three', 'four']},
     {question: 'oneee?', answer: 'one', options: ['one', 'two', 'three', 'four']}
]

const submitAnswer = (e) => {
     if (e.target.innerHTML.match(answer)) {
          correctAnswerCount++
     }
     progressStat++
     startQuestion()
     // progressMsg.innerHTML = `Question ${progressStat} of ${progressTotal}`
}

const startQuiz = () => {
     for (let i = questions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = questions[i];
          questions[i] = questions[j];
          questions[j] = temp;
     }
}
const resetGameVar = () => {
     progressStat = 0
     correctAnswerCount = 0
     answer = null
}
const gameEnd = () => {
     this.alert(`You got ${correctAnswerCount} out of ${progressTotal} correct. Press ok to play gain. :)`)
     resetGameVar()
     startQuiz()
     startQuestion()
}
const startQuestion = () => {
     if (progressStat === progressTotal) {
          gameEnd()
     } else {
          question.innerHTML = questions[progressStat].question
          progressMsg.innerHTML = `Question ${progressStat + 1} of ${progressTotal}`
     
          answer = questions[progressStat].answer
          
          choice0.innerHTML = questions[progressStat].options[0]
          choice1.innerHTML = questions[progressStat].options[1]
          choice2.innerHTML = questions[progressStat].options[2]
          choice3.innerHTML = questions[progressStat].options[3]
     }
}
startQuiz()
startQuestion()

answerButtons.addEventListener('click', submitAnswer)