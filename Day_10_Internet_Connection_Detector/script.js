const body = document.querySelector('#main')
const img = document.querySelector('#image')
const statusMgs = document.querySelector('.status')
const connection = window.navigator.onLine

window.addEventListener('online', () => {
     statusMgs.innerHTML = 'You are connectioned!'
     body.classList.add('online')
     img.src = './images/online.png'
})
window.addEventListener('offline', () => {
     statusMgs.innerHTML = 'You have no connections! DANGER'
     body.classList.remove('online')
     img.src = './images/offline.png'
})
