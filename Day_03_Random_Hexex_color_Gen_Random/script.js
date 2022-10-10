const body = document.querySelector('body')
const hexFuild = document.querySelector('.hex')

document.querySelector('.generate').addEventListener('click', () => {
     const color = generateRandomColor()
     
     body.style.backgroundColor = color
     hexFuild.innerHTML = color
})

const generateRandomColor = () => {
     const red = getRandomHex()
     const green = getRandomHex()
     const blue = getRandomHex()

     return '#' + red + green + blue
}

const getRandomHex = () => {
     let color = Math.floor(Math.random() * 155 + 1)
     
     return color.toString('16')
}