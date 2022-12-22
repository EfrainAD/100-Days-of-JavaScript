const progress = document.querySelector('.progress')
const newsletterForm = document.querySelector('.newsletter')
const newsletterClose = document.querySelector('.fa-times')
let newsletterBeenClosed = false
const docEl = document.documentElement
const scrollHeight = docEl.scrollHeight

window.addEventListener('scroll', () => {
     const persent = (docEl.scrollTop / (scrollHeight - docEl.clientHeight)) * 100
     
     if (persent > 0)
          progress.style.visibility = 'visible'
     else 
          progress.style.visibility = 'hidden'
     progress.style.width = `${persent}%`

     if (!newsletterBeenClosed && persent > 75)
          newsletterForm.style.transform = 'translateX(0)'
     else 
          newsletterForm.style.transform = 'translateX(-100%)'
})
newsletterClose.addEventListener('click', () => {
     newsletterBeenClosed = true
     newsletterForm.style.transform = 'translateX(-100%)'
})