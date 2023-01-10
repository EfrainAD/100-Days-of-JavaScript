const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const calculateBtn = document.querySelector('.btn')
const result = document.querySelector('.result')
const resetBtn = document.querySelector('.reset')

const roundTenth = (num) => {
     return Math.round(10 * num)/10
}
const displayResults = (categorie, BMI, color) => {
     result.innerHTML = `${categorie}: ${BMI}`
     result.style.backgroundColor = color
}
const getResults = (e) => {
     e.preventDefault()
     const h = height.value
     const w = weight.value

     // Validation
     if (h.trim() === '' || w.trim() === '')
          return alert('Values are missing.')
     if (isNaN(h) || isNaN(w))
          return alert('Values must be a number.')

     // calculate
     const results = roundTenth((w / h**2) * 703)
     
     if (results < 18.5)
          displayResults(`Underweight`, results, 'yellow')
     else if (results < 24.9)
          displayResults(`Normal`, results, 'green')
     else if (results < 29.9)
          displayResults(`Overweight`, results, 'red')
     else 
          displayResults(`Obesity`, results, 'black')

     resetBtn.style.display = 'block'
}
const reset = () => {
     document.querySelector('form').reset()
     result.innerHTML = ''
     result.style.backgroundColor = ''
     resetBtn.style.display = 'none'
}

calculateBtn.addEventListener('click', getResults)
resetBtn.addEventListener('click', reset)

// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater