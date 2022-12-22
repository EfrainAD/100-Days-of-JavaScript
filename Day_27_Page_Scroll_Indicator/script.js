const progress = document.querySelector('.progress')
const docEl = document.documentElement
const scrollHeight = docEl.scrollHeight

window.addEventListener('scroll', () => {
     const persent = (docEl.scrollTop / (scrollHeight - docEl.clientHeight)) * 100
     // I just set it in the css I don't know why it want to be done this way.
     // if (persent > 0)
     //      progress.style.visibility = 'visible'
     // else 
     //      progress.style.visibility = 'hidden'
     progress.style.width = `${persent}%`
})