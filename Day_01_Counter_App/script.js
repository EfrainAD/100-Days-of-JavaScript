const count = document.querySelector('.count')
const subtractBtn = document.querySelector('.subtract')
const resetBtn = document.querySelector('.reset')
const addBtn = document.querySelector('.add')

subtractBtn.addEventListener('click', () => {
  count.innerText = --(count.innerText)
  colorChange()
})
resetBtn .addEventListener('click', () => {
  count.innerText = 0
  colorChange()
})
addBtn.addEventListener('click', () => {
  count.innerText = ++(count.innerText)
  colorChange()
})

const colorChange = () => {
  if (count.innerHTML > 0)
    return count.style.color = 'yellow'
  if (count.innerHTML < 0)
    return count.style.color = 'orangered'
  if (count.innerText === '0')
    return count.style.color = 'white'
}