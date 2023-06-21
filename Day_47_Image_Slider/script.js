const prevBtn = document.querySelector('.buttons .prev')
const nextBtn = document.querySelector('.buttons .next')
const slides = document.querySelectorAll('.slide')
const numberOfSlides = slides.length

// Helper Functions
const getCurrentIndex = (slides) =>
   Array.from(slides).findIndex((slide) => slide.classList.contains('current'))

// Main Functions
const slidePicBack = () => {
   const currentIndex = getCurrentIndex(slides)
   const prevIndex = currentIndex === 0 ? numberOfSlides - 1 : currentIndex - 1

   slides[currentIndex].classList.remove('current')
   slides[prevIndex].classList.add('current')
}
const slidePicForword = () => {
   const currentIndex = getCurrentIndex(slides)
   const nextIndex = (currentIndex + 1) % numberOfSlides

   slides[currentIndex].classList.remove('current')
   slides[nextIndex].classList.add('current')
}

// Add Event Listeners
prevBtn.addEventListener('click', slidePicBack)
nextBtn.addEventListener('click', slidePicForword)
