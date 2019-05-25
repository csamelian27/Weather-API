document.addEventListener("DOMContentLoaded", () => {
  getLocation();
  getWeather();
})

window.addEventListener("hashchange", async () => {
  console.log('hash change');
  let container = document.querySelector('#container')
  let header = document.querySelector('#header')
  container.innerHTML = ""
  header.innerText = ""
  await getLocation()
  await getWeather()
}, false)

getLocation = async () => {
  let info = await locationHashChanged();
  console.log(locationHashChanged())
  fetch(info.place)
    .then(resp => resp.json())
    .then(json => {
      console.log("working")
      console.log(json.city);
      displayLocation(json.city.toUpperCase())
    })
}

displayLocation = (location) => {
  const header = document.getElementById("header");
  header.innerHTML = 'WEATHER FORECAST FOR ' + location
}

getWeather = async () => {
  let info = await locationHashChanged();
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
