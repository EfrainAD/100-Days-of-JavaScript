const btn = document.querySelector('.btn')
const locate = document.querySelector('.location')

const succ = (gLocation) => {
     coord = gLocation.coords
     locate.innerHTML = 
     `Your current position is:<br/>
     Latitude : ${Math.ceil(coord.latitude * 100) / 100}<br/>
     Longitude: ${Math.ceil(coord.longitude * 100) / 100}<br/>
     More or less ${coord.accuracy} meters.`
}

btn.addEventListener('click', ()=>{
     navigator.geolocation.getCurrentPosition(succ)
})