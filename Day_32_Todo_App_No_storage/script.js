const input = document.querySelector('input')
const submit = document.querySelector('form button')
const todoList = document.querySelector('.todo-list')
const clear = document.querySelector('.clear')

const deleteTask = (task) => {
     const reply = confirm('Are you sure about this?')
     if (reply) 
          task.remove()
}

const addTask = (e) => {
     const task = input.value
     const li = document.createElement('li')
     const btn = document.createElement('button')
     
     if (task.trim() !== '') {
               // Create list with a remove button
               btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
               btn.addEventListener('click', () => deleteTask(li))
               li.innerHTML = task

               li.appendChild(btn)
               todoList.appendChild(li)
               input.value = ''
          } else {
               alert('You are missing a task!')
          }
}

const clearList = () => todoList.innerHTML = ''

clear.addEventListener('click', clearList)
submit.addEventListener('click', addTask)