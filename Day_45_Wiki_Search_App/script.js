const form = document.querySelector('form')
const results = document.querySelector('.results')
const API_URL =
   'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch='

// Helper Function
const createNewLink = (id) => `https://en.wikipedia.org/?curid=${id}`
const errorMsg = (msg) => {
   results.innerHTML = `<p class="alert alert-danger">${msg}</p>`
}

// Main Function
const handleSearchRequest = async (e) => {
   e.preventDefault()

   const formData = new FormData(form)
   const searchWord = formData.get('search')
   form.reset()
   console.log(searchWord)

   if (!searchWord) return errorMsg('Search Word is required')

   try {
      const res = await fetch(API_URL + searchWord)
      const searchResults = (await res.json()).query.search
      const HTML = searchResults.map((query) => {
         return `
            <div class="result p-2">
               <a href="${createNewLink(query.pageid)}" 
                  target="_blank" 
                  rel="noopener" 
                  class="h3 fw-bold"
               >
                  ${query.title}
               </a>
               <br />
               <a
                  href="${createNewLink(query.pageid)}"
                  target="_blank"
                  rel="noopener"
                  class="fs-5 text-success"
               >
                  https://en.wikipedia.org/?curid=${query.pageid}
               </a>
               <p class="fs-5">
                  ${query.snippet}
               </p>
            </div>`
      })
      results.innerHTML = HTML.join('')
   } catch (error) {
      errorMsg(error.message)
   }
}

// Add Event Listener
form.addEventListener('submit', handleSearchRequest)
