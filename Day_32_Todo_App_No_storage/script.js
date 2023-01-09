const input = document.querySelector('input')
const submit = document.querySelector('form button')
const todoList = document.querySelector('.todo-list')
const clear = document.querySelector('.clear')


const addTask = (e) => {
     const task = input.value
     const li = document.createElement('li')
     const btn = document.createElement('button')
     
     // Create list with a remove button
     btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
     btn.addEventListener('click', () => li.remove())
     li.innerHTML = task

     li.appendChild(btn)
     todoList.appendChild(li)
     input.value = ''
}

const clearList = () => todoList.innerHTML = ''

clear.addEventListener('click', clearList)
submit.addEventListener('click', addTask)