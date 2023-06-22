const filterBtns = document.querySelectorAll('.filter-box .btn')
const storeProducts = document.querySelectorAll('.store-product')
const noMoreResult = document.querySelector('.no-result')
const input = document.querySelector('input')

// Helper Functions - Getters
const getActiveFilter = () =>
   document.querySelector('.filter-box .btn.active').getAttribute('data-filter')

const getActiveFilterBtn = () => document.querySelector('.filter-box .active')

const getDisplayedProducts = () =>
   document.querySelectorAll('.store-product[style*="display: block"]')

// Helper Functions - Main
const changeFilterBtn = (newFilterBtn) => {
   getActiveFilterBtn().classList.remove('active')
   newFilterBtn.classList.add('active')
}

const filterByActiveBtn = () => {
   const filterBy = getActiveFilter()
   if (filterBy === 'all') {
      storeProducts.forEach((product) => (product.style.display = 'block'))
      noMoreResult.style.display = 'none'
   } else {
      storeProducts.forEach((product) => {
         if (product.classList.contains(filterBy)) {
            product.style.display = 'block'
         } else {
            product.style.display = 'none'
         }
      })
      noMoreResult.style.display = 'block'
   }
}

const filterBySearchBox = () => {
   // IMPORTENT: for this code to work the filtery by btn needs be runs first, since it change display: block, and if it done by css file, it not be bicked up.

   const search = input.value.toLowerCase().trim()

   if (!search) return

   const products = getDisplayedProducts()

   products.forEach((product) => {
      const h2 = product.querySelector('h2').textContent.toLowerCase()

      if (!h2.includes(search)) {
         product.style.display = 'none'
      }
   })
   noMoreResult.style.display = 'block'
}

// Main Functions
const filterProducts = (e) => {
   if (e.type === 'click') changeFilterBtn(e.target)
   filterByActiveBtn()
   filterBySearchBox()
}

// Add Event Listener
filterBtns.forEach((btn) => btn.addEventListener('click', filterProducts))
input.addEventListener('input', filterProducts)
