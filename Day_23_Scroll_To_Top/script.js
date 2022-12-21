topBtn = document.querySelector('.top')

this.document.addEventListener('scroll', () => {
     // const pageHeight = this.document.documentElement.scrollHeight
     const viewHeight = this.document.documentElement.clientHeight
     const topOfPage = this.document.documentElement.scrollTop
     
      const percent = (viewHeight / 100) * 30
     
     if(topOfPage > percent)
          topBtn.classList.add('show-btn')
     else 
          topBtn.classList.remove('show-btn')
})

topBtn.addEventListener('click', () => {
     // this.document.documentElement.scrollIntoView(true)
     this.document.documentElement.scrollIntoView({behavior: 'smooth', block: 'start'})
})