const coupon = document.querySelector('.coupon')
const copy = document.querySelector('.btn')

const toggleBtnText = () => {
     copy.innerHTML = 'Copied!!!'
     setTimeout(() => {copy.innerHTML= 'Copy'}, 1700)
}
const highlightCopyText = () => {
     coupon.select()
     coupon.setSelectionRange(0,9999)
}
copy.addEventListener('click', (e) => {
     e.preventDefault()
     const text = coupon.value

     if (text) {
          navigator.clipboard.writeText(text)
          .then(()=> {
               highlightCopyText()
               toggleBtnText()
          })
     }
})