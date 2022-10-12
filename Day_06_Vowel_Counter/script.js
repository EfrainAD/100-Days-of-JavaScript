const userInput = document.querySelector('.input-text')
const submit = document.querySelector('.btn')
const results = document.querySelector('.result')

const getVowelCount = (str) => {
     str = str.toLowerCase()
     let count = 0
     
     for (let i = 0; i < str.length; i++) {
          if (str[i] === 'a' 
          || str[i] === 'u' 
          || str[i] === 'i' 
          || str[i] === 'o' 
          || str[i] === 'e') 
               count++
     }
     return count
}

submit.addEventListener('click', () => {
     value = userInput.value
     results.innerHTML = `There're ${ getVowelCount(value) } values in "${value}". <br><b>But</b> I am sure you knew that. :)`
})