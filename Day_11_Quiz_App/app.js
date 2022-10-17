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
          console.log('RIGHT')
     } else console.log('wrong')
     progressStat++
     startQuestion()
     // progressMsg.innerHTML = `Question ${progressStat} of ${progressTotal}`
}

const startQuiz = () => {
     questions.map(value => ({ value, sort: Math.random() }))
     .sort((a, b) => a.sort - b.sort)
     .map(({ value }) => value)
     
     console.log(questions)
}
const gameEnd = () => {
     console.log('Correct is ' + correctAnswerCount)
}
const startQuestion = () => {
     if (progressStat+1 === progressTotal) {
          gameEnd()
     }
     question.innerHTML = questions[progressStat].question
     progressMsg.innerHTML = `Question ${progressStat + 1} of ${progressTotal}`

     console.table(questions)
     answer = questions[progressStat].answer
     
     choice0.innerHTML = questions[progressStat].options[0]
     choice1.innerHTML = questions[progressStat].options[1]
     choice2.innerHTML = questions[progressStat].options[2]
     choice3.innerHTML = questions[progressStat].options[3]
}
startQuiz()
startQuestion()

answerButtons.addEventListener('click', submitAnswer)