const menu = document.querySelector('.nav-list')
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const links = document.querySelectorAll('.link')

const closeMenu = () => {
     close.style.transform = 'translateY(-20rem)'
     menu.style.transform = 'translateY(-200rem)'
     hamburger.style.display = 'block'
}

links.forEach(link => link.addEventListener('click', closeMenu))

hamburger.addEventListener('click', () => {
     hamburger.style.display = 'none'

     close.style.transform = 'translateY(0)'
     menu.style.transform = 'translateY(0)'
})
close.addEventListener('click', closeMenu)