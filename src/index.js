document.addEventListener("DOMContentLoaded", () => {
  location.replace('/Users/CassSam/Development/Random%20code/Movable_Ink_Code_Challenge/index.html#geo?zip_code=11226&date=05/25/2018')
})

window.addEventListener("hashchange", () => {
  console.log('hash change');
  let container = document.querySelector('#container')
  container.innerHTML = ""
  getLocation()
  getWeather()
}, false)

getLocation = () => {
  let info = locationHashChanged();
  const header = document.getElementById("header");
  fetch(info.place)
    .then(resp => resp.json())
    .then(json => {
      console.log("working", json.city)
      header.innerHTML = 'WEATHER FORECAST FOR ' + json.city.toUpperCase()
    })
}

getWeather = () => {
  let info = locationHashChanged();
  fetch(info.endpoint)
    .then(resp => resp.json())
    .then(json => {
      displayWeather(json.daily.data.slice(0,3))
    })
}

displayWeather = (weatherData) => {
  weatherData.forEach(day => {
    let container = document.getElementById('container')
    let box = document.createElement('div')
    box.className = 'box'

    let content = document.body.textContent || document.body.innerText;
    let hasText = content.indexOf("Today: ")!==-1;
    let hasText2 = content.indexOf("Thursday: ")!==-1;
    let weatherHeader = document.createElement('h3')
    weatherHeader.className = 'day'
    if (hasText2) {
      weatherHeader.innerText = 'Friday: ';
    } else if(hasText) {
      weatherHeader.innerText = 'Thursday: ';
    } else {
      weatherHeader.innerText = 'Today: ';
    }

    let detailDiv = document.createElement('div')

    let weatherIcon = document.createElement('img')
    weatherIcon.alt = 'weather-icon'
    weatherIcon.className = 'weather-icon'
    if(day.icon === 'cloudy') {
      weatherIcon.src = './public/images/weather/cloudy.png'
    } else if(day.icon === 'sunny') {
      weatherIcon.src = './public/images/weather/sunny.png'
    } else if(day.icon === 'rain') {
      weatherIcon.src = './public/images/weather/rain.png'
    }

    let detailDiv2 = document.createElement('div')
    detailDiv2.id = 'detail-div-2'
    
    let iconDiv = document.createElement('div')
    iconDiv.id = 'icon-div'

    let detailInfo = document.createElement('div')
    detailInfo.className = 'detail-info'
    detailInfo.innerText = day.icon.replace(/\b\w/g, l => l.toUpperCase())

    let highLow = document.createElement('div')
    highLow.className = 'highLow-div'
    highLow.innerHTML = `<strong>${Math.round(day.temperatureHigh)}\xB0</strong> / ${Math.round(day.temperatureLow)}\xB0 F`

    container.append(box)
    box.append(weatherHeader, detailDiv)
    detailDiv.append(iconDiv, detailDiv2)
    iconDiv.append(weatherIcon)
    detailDiv2.append(detailInfo, highLow)
  })
}
