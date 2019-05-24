document.addEventListener("DOMContentLoaded", () => {
  console.log("hi");
  getLocation()
  getWeather()
})

getLocation = () => {
  fetch(endpoint.LOCATION_URL)
    .then(resp => resp.json())
    .then(json => {
      let header = document.getElementById('header').innerText = 'WEATHER FORECAST FOR ' + json.city.toUpperCase()
    })
}

getWeather = () => {
  fetch(endpoint.FULL_API_URL)
    .then(resp => resp.json())
    .then(json => {
      console.log(json);
      displayWeather(json.daily.data.slice(0,3))
    })
}

displayWeather = (weatherData) => {
  console.log(weatherData);
  weatherData.forEach(day => {
    console.log(day);
    let container = document.getElementById('container')
    let box = document.createElement('div')
    box.className = 'box'

    let weatherHeader = document.createElement('h3')
    weatherHeader.className = 'day'
    let content = document.body.textContent || document.body.innerText;
    let hasText = content.indexOf("Today: ")!==-1;
    let hasText2 = content.indexOf("Thursday: ")!==-1;
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
