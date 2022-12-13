const links = document.querySelectorAll('.nav-list li a')

const smothScrolling = (e) => {
     e.preventDefault()

     const href = e.target.getAttribute('href')
     document.querySelector(href).scrollIntoView({behavior: 'smooth'})
}

links.forEach(link => link.addEventListener('click', smothScrolling))