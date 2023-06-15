const WORD_LIMIT = 300
const READING_SPEED_WPM = 250
const READING_SPEED_WPS = READING_SPEED_WPM / 60

const inputText = document.querySelector('.input')
const character = document.querySelector('.character')
const word = document.querySelector('.word')
const wordLimit = document.querySelector('.word-limit')
const readingTime = document.querySelector('.reading-time')

// Helper Function
const getWordCount = (str) => {
   return str
      .trim()
      .split(/\s+/)
      .filter((word) => /[a-zA-Z]/.test(word)).length
}
const getCharacterCount = (str) => str.length
const caluWordsRemaining = (wordCount) => WORD_LIMIT - wordCount

// Helper Function - For Formating
const getFormatedSeconds = (totalSeconds) => {
   const s = totalSeconds % 60

   if (!s) return ''
   if (totalSeconds < 3) {
      const secondsRounded = Math.round(s * 100) / 100
      return `${secondsRounded}s`
   }
   return `${Math.floor(s)}s`
}
const getFormatedMinutes = (totalSeconds) => {
   const m = Math.floor((totalSeconds % 3600) / 60)

   if (!m) return ''
   else return `${m}m `
}
const getFormatedHours = (timeInSeconds) => {
   const h = Math.floor(timeInSeconds / 3600)
   if (!h) return ''
   else return `${h}h `
}

const getReadingTime = (wordCount) => {
   const timeInSeconds = wordCount / READING_SPEED_WPS

   const s = getFormatedSeconds(timeInSeconds)
   const m = getFormatedMinutes(timeInSeconds)
   const h = getFormatedHours(timeInSeconds)

   return `${h}${m}${s}`
}

// Main Function
const updateCounts = () => {
   const str = inputText.value

   const wordCount = getWordCount(str)

   word.textContent = wordCount
   character.textContent = getCharacterCount(str)
   wordLimit.textContent = caluWordsRemaining(wordCount)
   readingTime.textContent = getReadingTime(wordCount)
}

inputText.addEventListener('input', updateCounts)
