// Add a Note Form
const noteTitle = document.querySelector('#note-title')
const noteText = document.querySelector('#note-text')
const addNoteBtn = document.querySelector('#add-btn')
// Display
const clearAllBtn = document.querySelector('.clear')
const notesContaner = document.querySelector('#notes')

const getNotes = () => {
     const notes = window.localStorage.getItem('notes')
     if (notes === null) 
          return []
     else 
          return JSON.parse(notes)
}
const getNote = (index) => {
     const notes = getNotes()
     return notes[index]
}
const clearForm = () => {
     noteTitle.value = ''
     noteText.value = ''
}
const displayNotes = () => {
     const notes = getNotes()
     
     if (notes.length === 0) 
          return notesContaner.innerHTML = '<p>There are no notes to display.</p>'
     
     notesContaner.innerHTML = ''
     
     notes.forEach((note, index) => {
          const {title, text} = note
          const div = document.createElement('div')
          
          notesContaner.appendChild(div)
          div.classList.add('note')
          
          div.innerHTML = `
               <div class="note-cta">
                    <p class="note-counter">Note ${index + 1}</p>
                    <div class="note-cta-btn">
                         <button class="note-btn" onclick="deleteNote(${index})">
                              <i class="fas fa-trash"></i> Delete
                         </button>
                         <button class="note-btn edit-btn" onclick="updateNote(${index})">
                              <i class="fas fa-edit"></i> Edit
                         </button>
                    </div>
               </div>
               <hr />
               <h3 class="note-title">Title: ${title}</h3>
               <p class="note-text">${text}</p>`
          });
}
const addNoteToLS = (note) => {
     const notes = getNotes()
     
     notes.push(note)
     window.localStorage.setItem('notes', JSON.stringify(notes))
}
const deleteNoteFromLS = (index) => {
     const notes = getNotes()
     notes.splice(index, 1)
     window.localStorage.setItem('notes', JSON.stringify(notes))
}
const deleteNote = (index) => {
     deleteNoteFromLS(index)
     displayNotes()
}
const addNote = (e) => {
     e.preventDefault()
     const title = noteTitle.value
     const text = noteText.value
     const note = {title, text}

     // Validations
     if (title.trim() === '' || text.trim() === '')
          return alert('All fields are required.')

     // Update Notes
     addNoteToLS(note)
     displayNotes()
     clearForm()
}
const updateNote = (index) => {
     const {title, text} = getNote(index) 
     deleteNoteFromLS(index)
     displayNotes()
     noteTitle.value = title
     noteText.value = text
}
const deleteAllNotes = () => {
     const reply = confirm('Are you sure you want to delete everything?')
     if (!reply) return 
     window.localStorage.clear()
     displayNotes()
}

addNoteBtn.addEventListener('click', addNote)
clearAllBtn.addEventListener('click', deleteAllNotes)

displayNotes()