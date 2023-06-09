const date = document.querySelector('.date')
const time = document.querySelector('.time')

// 'en-GB' give this order >> Thur, 19 Mar
const locales = 'en-GB'
// Thur, 19 Mar
const dateOptions = {
   weekday: 'long',
   day: 'numeric',
   month: 'long',
}
// 12:00AM
const timeOptions = {
   hour: 'numeric',
   minute: '2-digit',
   // second: '2-digit',
   hour12: true,
}

setInterval(() => {
   const now = new Date()

   date.textContent = now.toLocaleDateString(locales, dateOptions)
   time.textContent = now
      .toLocaleTimeString(locales, timeOptions)
      .replace(' ', '')
      .toUpperCase()
}, 1000)
