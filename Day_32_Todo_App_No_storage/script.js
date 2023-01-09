const input = document.querySelector('input')
const submit = document.querySelector('form button')
const todoList = document.querySelector('.todo-list')
const clear = document.querySelector('.clear')

const deleteTask = (index) => {
     const reply = confirm('Are you sure about this?')
     if (reply) {
          const tasks = getTasks()
          tasks.splice(index, 1)
          window.localStorage.setItem('tasks', JSON.stringify(tasks))
          displayTasksList()
     }
}
// Gets all tasks from Local server and turns it as an array
const getTasks = () => {
     const localStorage = window.localStorage.getItem('tasks')
     
     if (localStorage === null)
         return []
     else
         return JSON.parse(localStorage)
}
// Update the list with tasks from the local storage
const displayTasksList = () => {
     const tasks = getTasks()
     
     todoList.innerHTML = ''

     // Create list with a remove button
     tasks.forEach((task, index) => {
          const li = document.createElement('li')
          const btn = document.createElement('button')

          // Add delete button
          btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
          btn.addEventListener('click', () => deleteTask(index))
          li.innerHTML = task
          li.appendChild(btn)
          todoList.appendChild(li)
     });
}
const addTask = () => {
     newTask = input.value
     let tasks = getTasks()
     
     // Validate
     if (newTask.trim() === '') 
          return alert('You are missing a task!')

     // add task
     tasks.push(newTask)
     window.localStorage.setItem('tasks', JSON.stringify(tasks))
     displayTasksList()
     input.value = ''
}

const clearList = () => {
     const reply = confirm('You sure you want to delete everything?')
     if (!reply) return
     
     window.localStorage.clear()
     displayTasksList()
}

clear.addEventListener('click', clearList)
submit.addEventListener('click', addTask)

displayTasksList()