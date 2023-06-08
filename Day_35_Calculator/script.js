const displayScreen = document.querySelector('.result p')
const clearScreen = document.querySelector('.clear')
const keys = document.querySelectorAll('.keys li')

const isCalculateBtn = (btn) => btn === '='
const isOperatorBtn = (btn) => /[+\-\÷\x]/.test(btn)

const keyPressed = (e) => {
   const btnName = e.target.textContent
   const display = displayScreen.textContent

   if (isCalculateBtn(btnName)) {
      const strToEva = display.replace('x', '*').replace('÷', '/')
      displayScreen.textContent = eval(strToEva)
   } else {
      if (isOperatorBtn(btnName)) displayScreen.textContent += ` ${btnName} `
      else displayScreen.textContent += `${btnName}`
   }
}

// Add Event Listener
keys.forEach((key) => key.addEventListener('click', keyPressed))
clearScreen.addEventListener('click', () => (displayScreen.textContent = ''))
