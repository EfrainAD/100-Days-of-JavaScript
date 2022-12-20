const links = document.querySelectorAll('.link')

const changeActiveLink =(e) => {
     // links.forEach(link => link.classList.remove('active'))
     // if (e.target =)
     if (e.target.parentNode.classList.contains('link')) {
          document.querySelector('.link.active').classList.remove('active')
          e.target.parentNode.classList.add('active')
     }
}

// links.forEach(link => link.addEventListener('click', changeActiveLink)) 
document.querySelector('.nav-list').addEventListener('click', changeActiveLink)