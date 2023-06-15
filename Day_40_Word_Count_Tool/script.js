const WORD_LIMIT = 500

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
const getReadingTime = (wordCount) => wordCount / 50

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
