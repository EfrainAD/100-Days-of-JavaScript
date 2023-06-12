const pounds = document.querySelector('.pounds')
const kilograms = document.querySelector('.kilograms')
const grams = document.querySelector('.grams')
const ounces = document.querySelector('.ounces')

const allFields = [
   { field: pounds, units: 'pounds' },
   { field: kilograms, units: 'kilograms' },
   { field: grams, units: 'grams' },
   { field: ounces, units: 'ounces' },
]

// Helper functions
const convert = (value, typeFrom, typeTo) => {
   const conversionRates = {
      pounds: {
         kilograms: 0.453592,
         grams: 453.592,
         ounces: 16,
      },
      kilograms: {
         pounds: 2.20462,
         grams: 1000,
         ounces: 35.274,
      },
      grams: {
         pounds: 0.00220462,
         kilograms: 0.001,
         ounces: 0.035274,
      },
      ounces: {
         pounds: 0.0625,
         kilograms: 0.0283495,
         grams: 28.3495,
      },
   }

   if (conversionRates[typeFrom] && conversionRates[typeFrom][typeTo])
      return (value * conversionRates[typeFrom][typeTo]).toFixed(3)
   else return value
}

// main function
const convertAllFields = (e) => {
   const value = e.target.value
   const currentUnit = e.target.placeholder.toLowerCase()

   allFields.forEach(({ field, units }) => {
      field.value = convert(value, currentUnit, units)
   })
}

// addEventListener
allFields.forEach(({ field }) =>
   field.addEventListener('input', convertAllFields)
)
// Another way I learned
// document.querySelector('form').addEventListener('input', convertAllFields)
