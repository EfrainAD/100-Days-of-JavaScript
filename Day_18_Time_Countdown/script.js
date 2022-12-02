const timerInMin = 0.2
let timer = timerInMin * 60
const countdown = document.querySelector('#countdown')
const interval = setInterval(() => {
     timer--
     if (timer === 0)  {
          clearInterval(interval)
          countdown.innerHTML = 'Over'
     }
     else {
          const days = Math.floor(timer / 60 / 60 / 24)
          const hours = Math.floor(timer / 60 / 60) % 24
          const min = Math.floor(timer / 60) % 60
          const seconds = Math.floor(timer % 60);

          countdown.innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${min}, Seconds: ${seconds}`
     }
}, 1000)