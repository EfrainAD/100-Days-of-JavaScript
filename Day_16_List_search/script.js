const list = document.querySelectorAll('li')
const searchBar = document.querySelector('#search')

searchBar.addEventListener('input', (e) => {
     searchValue = e.target.value
     list.forEach((item) => {
          if (item.innerHTML.toUpperCase().includes(searchValue.toUpperCase()))
               item.style.display = 'block'
          else 
               item.style.display = 'none'
     })
})