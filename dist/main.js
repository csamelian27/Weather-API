/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apiKeys.js":
/*!************************!*\
  !*** ./src/apiKeys.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    \"goodreadsKey\": \"your developer key\",\n    \"goodreadsSecret\": \"secrete\",\n    \"goodreadsUserID\": 12345\n}\n\n\n//# sourceURL=webpack:///./src/apiKeys.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const keys = __webpack_require__(/*! ./apiKeys */ \"./src/apiKeys.js\")\n\n// const mykey = config.MY_KEY;\n// const secretkey = config.SECRET_KEY;\n\n// Be sure to replace every instance of the API keys with these new variables.\n// E.g. if you had:\n// url: 'https//www.whatever.com/?query&sig=12345'\n// Now you will have:\n// url: 'https://www.whatever.com/?query&sig=' + mykey\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"hi\");\n  getLocation()\n  getWeather()\n})\n\ngetLocation = () => {\n  fetch('https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=10018')\n    .then(resp => resp.json())\n    .then(json => {\n      let header = document.getElementById('header').innerText = 'WEATHER FORECAST FOR ' + json.city.toUpperCase()\n    })\n}\n\ngetWeather = () => {\n  fetch('https://se-weather-api.herokuapp.com/api/v1/forecast?date=05/24/2019&geo?zip_code=10018')\n    .then(resp => resp.json())\n    .then(json => {\n      console.log(json);\n      displayWeather(json.daily.data.slice(0,3))\n    })\n}\n\ndisplayWeather = (weatherData) => {\n  console.log(weatherData);\n  weatherData.forEach(day => {\n    console.log(day);\n    let container = document.getElementById('container')\n    let box = document.createElement('div')\n    box.className = 'box'\n\n    let weatherHeader = document.createElement('h3')\n    weatherHeader.className = 'day'\n    let content = document.body.textContent || document.body.innerText;\n    let hasText = content.indexOf(\"Today: \")!==-1;\n    let hasText2 = content.indexOf(\"Thursday: \")!==-1;\n    if (hasText2) {\n      weatherHeader.innerText = 'Friday: ';\n    } else if(hasText) {\n      weatherHeader.innerText = 'Thursday: ';\n    } else {\n      weatherHeader.innerText = 'Today: ';\n    }\n\n    let detailDiv = document.createElement('div')\n\n    let weatherIcon = document.createElement('img')\n    weatherIcon.alt = 'weather-icon'\n    weatherIcon.className = 'weather-icon'\n    if(day.icon === 'cloudy') {\n      weatherIcon.src = './images/weather/cloudy.png'\n    } else if(day.icon === 'sunny') {\n      weatherIcon.src = './images/weather/sunny.png'\n    } else if(day.icon === 'rain') {\n      weatherIcon.src = './images/weather/rain.png'\n    }\n\n    let detailDiv2 = document.createElement('div')\n    detailDiv2.id = 'detail-div-2'\n    let iconDiv = document.createElement('div')\n    iconDiv.id = 'icon-div'\n\n    let detailInfo = document.createElement('div')\n    detailInfo.className = 'detail-info'\n    detailInfo.innerText = day.icon.replace(/\\b\\w/g, l => l.toUpperCase())\n\n    let highLow = document.createElement('div')\n    highLow.className = 'highLow-div'\n    highLow.innerHTML = `<strong>${Math.round(day.temperatureHigh)}\\xB0</strong> / ${Math.round(day.temperatureLow)}\\xB0 F`\n\n    container.append(box)\n    box.append(weatherHeader, detailDiv)\n    detailDiv.append(iconDiv, detailDiv2)\n    iconDiv.append(weatherIcon)\n    detailDiv2.append(detailInfo, highLow)\n  })\n}\n\n\n\n\n\n\n\n\n//\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });