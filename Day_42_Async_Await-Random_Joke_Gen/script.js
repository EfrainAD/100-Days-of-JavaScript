const jokeElement = document.querySelector('.joke')
const generateJokeBtn = document.querySelector('.btn')
const url = 'https://api.chucknorris.io/jokes/random'
// no longer works, had find new api.
// const url = 'http://api.icndb.com/jokes/random'

// Main Function
const displayJoke = async () => {
   try {
      const response = await fetch(url)
      const data = await response.json()
      const joke = data.value

      if (!response.ok) throw new Error(response.status)

      jokeElement.textContent = joke
   } catch (error) {
      jokeElement.textContent = error
      console.log(error)
   }
}

// Add Event Listener
generateJokeBtn.addEventListener('click', displayJoke)
