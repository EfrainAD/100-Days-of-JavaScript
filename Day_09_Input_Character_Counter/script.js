const count = document.querySelector('.count') 
const userInput = document.querySelector('.form-control')

userInput.addEventListener('input', () => {
     count.innerHTML = userInput.value.length
})