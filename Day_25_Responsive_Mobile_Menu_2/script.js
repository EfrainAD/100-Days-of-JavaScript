const menu = document.querySelector('.nav-list')
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const transparentBack = document.querySelector('.nav-wrapper')

const openMenu = () => {
     hamburger.style.display = 'none'
     close.style.transform = 'translateY(0)'
     
     menu.style.transform = 'translateX(0)'
     transparentBack.style.transform = 'translateX(0)'
}
const closeMenu = () => {
     hamburger.style.display = 'block'
     close.style.transform = 'translateY(-20rem)'
     
     menu.style.transform = 'translateX(200%)'
     transparentBack.style.transform = 'translateX(-200%)'
}

hamburger.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
transparentBack.addEventListener('click', closeMenu)

const links = document.querySelectorAll('.nav-list li a')
links.forEach(link => link.addEventListener('click', closeMenu))