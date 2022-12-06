const bill = document.querySelector('.bill')
const rate = document.querySelector('.rate')
const tip = document.querySelector('.tip')
const total = document.querySelector('.total')

document.querySelector('.btn').addEventListener('click', () => {
     const billAmount = bill.value === '' ? 0 : parseFloat(bill.value)
     const rateAmount = parseFloat(rate.value)
     const tipAmount =(billAmount * rateAmount)
     const totalAmount = tipAmount + billAmount
     tip.innerHTML = 'Tip Amount: $' + tipAmount.toFixed(2)
     total.innerHTML = 'Total Amount: $' + totalAmount.toFixed(2)
})

