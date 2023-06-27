const tabs = document.querySelectorAll('.tab-link')

// Helper Functions
const setActiveTab = (newActive) => {
   const currentActive = document.querySelector('.tab-link.active')
   currentActive.classList.remove('active')

   newActive.classList.add('active')
}
const hideAllTabConent = () =>
   document
      .querySelectorAll('.tab-contents .tab-content')
      .forEach((tabContent) => (tabContent.style.display = 'none'))

const displayTabContent = (displayClass) => {
   hideAllTabConent()

   const content = document.querySelector(`.tab-content.${displayClass}`)
   content.style.display = 'block'
}

// Main Function
const handleTabClick = (e) => {
   const tab = e.target

   setActiveTab(tab)
   displayTabContent(tab.dataset.filter)
}

// Add Event Linstenr
tabs.forEach((tab) => tab.addEventListener('click', handleTabClick))
