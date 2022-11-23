const ul = document.querySelector('#list')
const list = document.querySelectorAll('li')
const searchBar = document.querySelector('#search')
const defaultItems = []
list.forEach(item => defaultItems.push(item.innerHTML))
console.log(defaultItems)

searchBar.addEventListener('input', (e) => {
     searchValue = e.target.value
     
     newList = defaultItems.filter(item => item.toUpperCase().includes(searchValue.toUpperCase()))
     ul.innerHTML = ''
     
     newList.forEach(item => {
          const li = document.createElement('li')
          li.innerHTML = item
          ul.append(li)
     })
})