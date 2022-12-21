const menu = document.querySelector('.nav-list')
const subMenu = document.querySelector('.submenu-three')
const back = document.querySelector('.back')
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const transparentBack = document.querySelector('.nav-wrapper')

const openMenu = () => {
     hamburger.style.display = 'none'
     close.style.transform = 'translateY(0)'
     
     menu.style.transform = 'translateX(0)'
     transparentBack.style.transform = 'translateX(0)'
}
const openSubMenu = () => {
     menu.style.transform = 'translateX(-100%)'
     subMenu.style.transform = 'translateX(0)'
}
const closeSubMenu = () => {
     menu.style.transform = 'translateX(0)'
     subMenu.style.transform = 'translateX(-100%)'
}
const closeMenu = () => {
     console.log('closeMenu')
     hamburger.style.display = 'block'
     close.style.transform = 'translateY(-20rem)'
     
     menu.style.transform = 'translateX(200%)'
     subMenu.style.transform = 'translateX(-100%)'
     transparentBack.style.transform = 'translateX(-200%)'
}

hamburger.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
back.addEventListener('click', closeSubMenu)
transparentBack.addEventListener('click', closeMenu)

const links = document.querySelectorAll('.nav-list li a')
links.forEach(link =>{
     if (!link.classList.contains('third-link') )
          link.addEventListener('click', closeMenu)
     else
          link.addEventListener('click', openSubMenu)
})