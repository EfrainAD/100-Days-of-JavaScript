const nextYear = new Date().getFullYear() + 1
const newYears = new Date('01-01-' + nextYear)
const dayInMS = 1000 * 60 * 60 * 24
const hoursInMS = 1000 * 60 * 60
const minutesInMS = 1000 * 60
const secondsInMS = 1000
let currentMS = null

setInterval(() => {
     currentMS = newYears - new Date()
     const dayToNewYears = ~~(currentMS / dayInMS)
     currentMS %= dayInMS
     const hoursToNewYears = ~~(currentMS / hoursInMS)
     currentMS %= hoursInMS
     const minutesToNewYears = ~~(currentMS / minutesInMS)
     currentMS %= minutesInMS
     const secondsToNewYears = ~~(currentMS / secondsInMS)
     
     document.querySelector('#countdown').innerHTML = `Countdown: ${dayToNewYears} Days! ${hoursToNewYears} hours, ${minutesToNewYears} minutes, and ${secondsToNewYears} seconds`
}, 1000)