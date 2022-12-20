const links = document.querySelectorAll('.link')

const changeActiveLink =(e) => {
     links.forEach(link => link.classList.remove('active'))
     e.target.parentNode.classList.add('active')
}

links.forEach(link => link.addEventListener('click', changeActiveLink)) 