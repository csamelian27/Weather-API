The assignment is a javascript integration with a Weather API to render the forecast for a particular location. Please do not expose the APIs on any public facing service.


Overview
The assignment is a javascript integration with a Weather API to render the forecast for a particular location. Please do not expose the APIs on any public facing service.


Endpoints
1. Weather
https://se-weather-api.herokuapp.com/
https://se-weather-api.herokuapp.com/api/v1/forecast?date=05/24/2019&geo?zip_code=10018

Request parameters:
zip_code - 5 digit US zip code
date - format MM/DD/YYYY


Geolocation
http://postcode.movableink.com/
http://postcode.movableink.com/?postal=10018

Request parameters:
postal - 5 digit US zip code


Assignment

Create an HTML file matching the attached image that is reactive to the query string at the end of the URL. The query strings are 'zip_code' and 'date’. For example, if the file is index.html, it should be reactive to the parameters on, index.html?zip_code=10011&date=06/12/2019.


- Use the API data to create a page with the attached creative spec


- The 'zip_code' param on the index.html URI should be used as part of the API request


- The 'date' param on the index.html URI should be used to extract the corresponding forecasts from the API response. The API only returns a 5 day forecast so you can assume the merged in "date" will be within the next 5 days.


- Use Helvetica for all fonts instead of what is in the image


- The link to the icons: https://developer.accuweather.com/weather-icons.


- If the page must error out, it should appear as a blank page (completely blank)


- You may use jQuery
