const URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = 'd3f97334f51c39525a87c91cb8215c97'
const units = '&units=imperial'
const searchField = document.querySelector('.search')
const submitBtn = document.querySelector('.btn')

const getDate = () => {
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     const date = new Date();
     
     //Thursday, Dec 26 2020
     return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}
const parseData = (data) => {
     return {
          city: `${data.name}, ${data.sys.country}`,
          date: getDate(), //Thursday, Dec 26 2020
          temp: `Temp: ${data.main.temp} <span>°F</span>`,
          weather: `Weather: ${data.weather[0].main}`,
          tempRange: `Range: ${data.main.temp_min}°F / ${data.main.temp_max}°F`,
          weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
     }
}
const dipsalyData = (parsedData) => {
     // Get all display fields
     city = document.querySelector('.city')
     date = document.querySelector('.date')
     temp = document.querySelector('.temp')
     weather = document.querySelector('.weather')
     tempRange = document.querySelector('.temp-range')
     weatherIcon = document.querySelector('.weather-icon')
     error = document.querySelector('.error')
     // Change all there values
     city.innerHTML = parsedData.city
     date.innerHTML = parsedData.date
     temp.innerHTML = parsedData.temp
     weather.innerHTML = parsedData.weather
     tempRange.innerHTML = parsedData.tempRange
     weatherIcon.src = parsedData.weatherIcon
     error.innerHTML = ''
}
const checkError = (json) => {
     if (json.cod !== 200) {
          throw json
     }
     else return json
}
const displayError = (err) => {
     console.log('Object retreaved: ', err)
     document.querySelector('.error').innerHTML = `Error Message: ${err.message}<br>Check your spelling.`
}
const getData = () => {
     const search = searchField.value
     const url = `${URL}${search}&appid=${apiKey}${units}`
     
     fetch(url)
          .then((response) => response.json())
          .then(json => {console.log(json); return json})
          .then(json => checkError(json))
          .then((data) => parseData(data))
          .then((parsedData)=> dipsalyData(parsedData))
          .catch(err => displayError(err))
}
submitBtn.addEventListener('click', getData)