const modal = document.querySelector('.modal')

const showModal = () => {
     console.log('showModal here')
     modal.style.display = 'block'
}
const closeModal = () => {
     modal.style.display = 'none'
}

document.querySelector('.close').addEventListener('click', closeModal)
document.querySelector('.btn').addEventListener('click', (e) => {
     e.preventDefault()
     showModal()
})
