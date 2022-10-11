const input = document.querySelector('.input-text')
const results = document.querySelector('.result')

const isPalindrome = () => {
     const palindrome = input.value.toLowerCase()
     
     if (!palindrome.length) {
          return false
     }
     
     for (let i = 0; i < palindrome.length/2; i++) {
          if (palindrome[i] !== palindrome[palindrome.length - 1 - i])
               return false
     }
     return true
}

document.querySelector('.btn').addEventListener('click', () => {
     if (isPalindrome())
          results.innerHTML = 'This is a Palindrome!'
     else
          results.innerHTML = `Don't be silly, this is NOT a Palindrome!`
})