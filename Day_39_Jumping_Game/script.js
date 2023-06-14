const hero = document.querySelector('.hero')
const vilan = document.querySelector('.vilan')

// Helper Functions
const vilanRuns = () => (vilan.style.animation = 'move 1s infinite linear')
const vilanStops = () => (vilan.style.animation = null)

const heroJump = () => hero.classList.add('animate')
const heroJumped = () => hero.classList.remove('animate')

const detectCollision = () => {
   const heroRect = hero.getBoundingClientRect()
   const vilanRect = vilan.getBoundingClientRect()

   if (
      heroRect.top + heroRect.height >= vilanRect.top &&
      heroRect.top <= vilanRect.top + vilanRect.height &&
      heroRect.left + heroRect.width >= vilanRect.left &&
      heroRect.left <= vilanRect.left + vilanRect.width
   ) {
      gameEnds()
   }
}

// Helper Function for game state
const isGameRunning = () => vilan.style.animation

const gameStart = () => {
   vilanRuns()
   setInterval(detectCollision, 100)
}

const gameEnds = () => {
   alert('GAME OVER')
   vilanStops()
}

// Main Function
const animate = (e) => {
   if (e.code === 'Space') {
      if (!isGameRunning()) gameStart()
      else heroJump()
   }
}

// Add Event Listeners
document.addEventListener('keydown', animate)
hero.addEventListener('animationend', heroJumped)
