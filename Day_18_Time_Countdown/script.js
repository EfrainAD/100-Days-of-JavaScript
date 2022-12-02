const timerInMin = 0.2
let timer = timerInMin * 60
const countdown = document.querySelector('#countdown')

const format = (num) => {
     return num >= 10 ? num : '0' + num
}

const interval = setInterval(() => {
     timer--
     if (timer === 0)  {
          clearInterval(interval)
          countdown.innerHTML = 'Over'
     }
     else {
          const days = format(Math.floor(timer / 60 / 60 / 24))
          const hours = format(Math.floor(timer / 60 / 60) % 24)
          const min = format(Math.floor(timer / 60) % 60)
          const seconds = format(Math.floor(timer % 60))

          countdown.innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${min}, Seconds: ${seconds}`
     }
}, 1000)