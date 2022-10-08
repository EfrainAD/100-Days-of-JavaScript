const btn = document.querySelector('.generate')
const number = document.querySelector('.number')

btn.addEventListener('click', () => {
     number.innerHTML =  Math.floor(Math.random() * 100 + 1)
})