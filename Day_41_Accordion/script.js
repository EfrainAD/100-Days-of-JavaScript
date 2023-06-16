const accordion = document.querySelectorAll('.accordion')
const desc = document.querySelectorAll('.desc')

// Helper Functions
const openAccordion = (index) => {
   desc[index].style.maxHeight = `${desc[index].scrollHeight}px`
   accordion[index].classList.add('active')
}

const closeAccordion = (index) => {
   desc[index].style.maxHeight = null
   accordion[index].classList.remove('active')
}

const isAccordionOpen = (index) => accordion[index].classList.contains('active')

const toggleAccordion = (index) => {
   if (isAccordionOpen(index)) closeAccordion(index)
   else openAccordion(index)
}
// Main Function
const handleAccordionClick = (index) => {
   toggleAccordion(index)

   accordion.forEach((_, i) => {
      if (i !== index && isAccordionOpen(i)) {
         closeAccordion(i)
      }
   })
}

// Add Event Listener
accordion.forEach((element, index) => {
   element.addEventListener('click', () => handleAccordionClick(index))
})
