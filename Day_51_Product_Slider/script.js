const slideWindow = document.querySelector('#slider')
const rightBtn = document.querySelector('#slide-right')
const leftBtn = document.querySelector('#slide-left')
const storeProduct = document.querySelectorAll('.thumbnail')

let slideDirection = 'right'
const SCROLL_SPEED = 10

// Helper Function
const hasSlideMoved = (pastScrollLeft) =>
   pastScrollLeft === slideWindow.scrollLeft

// Main Function
const setScrollProducts = () =>
   setInterval(() => {
      switch (slideDirection) {
         case 'right':
            const scrollLeft = slideWindow.scrollLeft

            slideWindow.scrollBy(SCROLL_SPEED, 0)

            if (hasSlideMoved(scrollLeft)) slideWindow.scroll({ left: 0 })
            break
         case 'left':
            slideWindow.scrollBy(-SCROLL_SPEED, 0)

            if (slideWindow.scrollLeft === 0)
               slideWindow.scroll({ left: 100000 })
            break
      }
   }, 100)

// triggers Main Function
let scrollProducts = setScrollProducts()

// Add Event Listeners
rightBtn.addEventListener('click', () => (slideDirection = 'right'))
leftBtn.addEventListener('click', () => (slideDirection = 'left'))

storeProduct.forEach((product) => {
   product.addEventListener('mouseover', () => clearInterval(scrollProducts))

   product.addEventListener(
      'mouseout',
      () => (scrollProducts = setScrollProducts())
   )
})
