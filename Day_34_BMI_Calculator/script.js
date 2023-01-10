const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const calculateBtn = document.querySelector('.btn')
const result = document.querySelector('.result')
const resetBtn = document.querySelector('.reset')

const roundTenth = (num) => {
     return Math.round(10 * num)/10
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
     // if ()

     const results = roundTenth((w / h**2) * 703)

     result.innerHTML = results
     if (results < 18.5)
          result.style.backgroundColor = 'yellow'
     else if (results < 24.9)
          result.style.backgroundColor = 'green'
     else if (results < 29.9)
          result.style.backgroundColor = 'red'
     else 
          result.style.backgroundColor = 'black'
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