const accordion = document.querySelectorAll('.accordion')
const desc = document.querySelectorAll('.desc')

// Helper Functions
const changeMaxHeight = async (index, height) => {
   const value = height === 'null' ? null : `${height}px`
   desc[index].style.maxHeight = value
}

const toggleDropdown = (index) => {
   const maxHeight = desc[index].style.maxHeight
   const scrollHeight = desc[index].scrollHeight

   if (maxHeight) changeMaxHeight(index, 'null')
   else changeMaxHeight(index, scrollHeight)
}

const toggleAccordionHeader = (index) =>
   accordion[index].classList.toggle('active')

// Main Function
const toggleAccordion = (index) => {
   toggleDropdown(index)
   toggleAccordionHeader(index)
}

accordion.forEach((element, index) => {
   element.addEventListener('click', () => toggleAccordion(index))
})
