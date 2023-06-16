const accordion = document.querySelectorAll('.accordion')
const desc = document.querySelectorAll('.desc')

// Helper Functions
const delay = (del) => new Promise((resolve) => setTimeout(resolve, del))
const changeMaxHeight = async (index, height) => {
   desc[index].style.maxHeight = `${height}px`
   // console.log('hi')
   // setTimeout(() => {
   // let nH = 0
   // while (nH < 100) {
   //    desc[index].style.height = nH + '%'
   //    nH += 10
   //    console.log(nH)
   //    console.log(
   //       window.getComputedStyle(desc[index]).getPropertyValue('height')
   //    )
   //    await delay(1000)
   // }
   // }, 10)
}

const toggleDropdown = (index) => {
   const height = globalThis
      .getComputedStyle(desc[index])
      .getPropertyValue('max-height')

   if (height === '0px') changeMaxHeight(index, 200)
   else changeMaxHeight(index, 0)
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
