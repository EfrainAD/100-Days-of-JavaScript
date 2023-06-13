const form = document.querySelector('.convertion-form')
const inputFields = document.querySelectorAll('.convertion-form input')

const conversions = {
   celsius: {
      fahrenheit: (C) => C * 1.8 + 32,
      kelvin: (C) => C + 273.15,
   },
   fahrenheit: {
      celsius: (F) => (F - 32) / 1.8,
      kelvin: (F) => (F - 32) / 1.8 + 273.15,
   },
   kelvin: {
      celsius: (K) => K - 273.15,
      fahrenheit: (K) => (K - 273.15) * 1.8 + 32,
   },
}

// helper function
const clearField = ({ target }) => (target.value = '')

// main function
const convert = (e) => {
   const temp = parseFloat(e.target.value)
   const convertFrom = e.target.placeholder.toLowerCase()

   inputFields.forEach((inputField) => {
      const convertTo = inputField.placeholder.toLowerCase()

      if (conversions[convertFrom] && conversions[convertFrom][convertTo]) {
         inputField.value = conversions[convertFrom][convertTo](temp).toFixed(3)
      }
   })
}

// Add Event Listeners
form.addEventListener('input', convert)
inputFields.forEach((input) => input.addEventListener('focus', clearField))
