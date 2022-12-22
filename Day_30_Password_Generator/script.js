const length = document.querySelector('#p-length')
const uppercase = document.querySelector('#p-uppercase')
const lowercase = document.querySelector('#p-lowercase')
const number = document.querySelector('#p-number')
const symbol = document.querySelector('#p-symbol')
const password = document.querySelector('#password')
const copy = document.querySelector('#copy')

const randomUppercase = () => {
     // A = 65 and z = 90
     const randomNumber = Math.floor(Math.random() * 26)
     const letter = String.fromCharCode(randomNumber + 65)
     return letter
}
const randomLowercase = () => {
     // a = 97 and z = 122
     const randomNumber = Math.floor(Math.random() * 26)
     const letter = String.fromCharCode(randomNumber + 97)
     return letter
}
const randomSymbol = () => {
     // a = 97 and z = 122
     const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*']
     const randomNumber = Math.floor(Math.random() * 8)
     const symbol = specialChar[randomNumber]
     return symbol
}
const randomNumber = () => {
     const randomNumber = Math.floor(Math.random() * 10)
     return randomNumber
}

const setParameters = () => {
     const parameters = []
     if (uppercase.checked) parameters.push(randomUppercase)
     if (lowercase.checked) parameters.push(randomLowercase)
     if (symbol.checked) parameters.push(randomSymbol)
     if (number.checked) parameters.push(randomNumber)
     return parameters
}

function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
     }
}

// copy button
const toggleBtnText = () => {
     copy.innerHTML = 'Copied!!!'
     setTimeout(() => {copy.innerHTML= 'Copy'}, 1700)
}
const highlightCopyText = () => {
     password.select()
     password.setSelectionRange(0,9999)
}

copy.addEventListener('click', (e) => {
     const text = password.value
     
     if (text) {
          navigator.clipboard.writeText(text)
          .then(()=> {
               highlightCopyText()
               toggleBtnText()
          })
     }
})
document.querySelector('#submit').addEventListener('click', (e) => {
     e.preventDefault()

     const passwordLength = parseInt(length.value)
     const parameters = setParameters()
     const newPassword =  parameters.map(func => func())

     if (passwordLength < 8) {
          password.value = 'Password length needs to be greater then 8!'
          return
     } else if (passwordLength > 30) {
          password.value = 'Password length needs to be less then 30!'
          return
     } else if (isNaN(passwordLength)) {
          password.value = 'Password length needs to be a number!'
          return
     }

     while (newPassword.length < passwordLength) {
          const randomNum = Math.floor(Math.random() * parameters.length)
          
          newPassword.push(parameters[randomNum]())
     }
     shuffleArray(newPassword)

     password.value = newPassword.join('')
})