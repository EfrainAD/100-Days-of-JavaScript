const modal = document.querySelector('.modal')

const showModal = () => {
     modal.style.display = 'block'
}
const closeModal = () => {
     modal.classList.add('slide-up')
     setTimeout(() => {
          modal.style.display = 'none'
          modal.classList.remove('slide-up')
     }, 800)
}

document.querySelector('.btn').addEventListener('click', (e) => {
     e.preventDefault()
     showModal()
})

document.querySelector('.close').addEventListener('click', closeModal)

window.onclick = (e) => {
     if (e.target == modal)
          closeModal()
}
