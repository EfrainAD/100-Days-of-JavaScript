const displayScreen = document.querySelector('.result p')
const clearScreen = document.querySelector('.clear')
const keys = document.querySelectorAll('.keys li')

const isOperatorBtn = (btn) => /[+\-\÷\x]/.test(btn.textContent)
const isEquelBtn = (btn) => btn.textContent === '='
const addToDisplay = (str) => (displayScreen.textContent += `${str}`)

const keyPressed = (e) => {
   const btnName = e.target.textContent

   addToDisplay(btnName)
}

const operatorPressed = (e) => {
   const btnName = e.target.textContent

   addToDisplay(` ${btnName} `)
}

const calculate = (e) => {
   const display = displayScreen.textContent
   const strToEva = display.replace('x', '*').replace('÷', '/')

   displayScreen.textContent = eval(strToEva)
}

// Add Event Listener
keys.forEach((key) => {
   if (isEquelBtn(key)) key.addEventListener('click', calculate)
   else if (isOperatorBtn(key)) key.addEventListener('click', operatorPressed)
   else key.addEventListener('click', keyPressed)
})
clearScreen.addEventListener('click', () => (displayScreen.textContent = ''))
