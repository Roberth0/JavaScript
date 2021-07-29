"use strict";
const searchPlacesBtn = document.getElementById("searchPlacesBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const placeSearchBtn = document.getElementById("searchBtn");
const placeSearch = document.getElementById("placeSearch");
const cities = document.querySelector('.cities');
const temperature = document.getElementById("temperature");
const currentLocation = document.getElementById("currentLocation");
const weatherDesc = document.querySelector('.weather-desc');
const gps = document.getElementById("gps");
const temperatureC = document.querySelector('.temperatureC');
const temperatureF = document.querySelector('.temperatureF');

const windSpeed = document.getElementById("wind-speed");
const windDirectionCompass = document.getElementById("wind-direction-compass");
const humidity = document.getElementById("humidity");
const visibility = document.getElementById("visibility");
const airPressure = document.getElementById("air-pressure");

// Events
searchPlacesBtn.addEventListener('click', e => {
    modal.classList.toggle("d-none");
    console.log('works');
});

placeSearchBtn.addEventListener('click', e => {
    e.preventDefault();
    findLocation(placeSearch.value);
    placeSearch.value = "";
})

closeModal.onclick = () => { modal.classList.toggle("d-none") };

document.addEventListener('DOMContentLoaded', () => {
    getCurrentLocation()
        .then(res => getGpsWeather(res.latitude, res.longitude))
        .then(cityInfo => getCityInfo(cityInfo.woeid, cityInfo.title))
        .then(res => {
            console.log(res);
            updateGeneralContainer(res)
        });
});

temperatureF.addEventListener('click',() => { 
    if(temperatureF.classList.contains("selected")){
        return
    }
    temperatureC.classList.toggle("selected");
    temperatureF.classList.toggle('selected');
    let tempValues = document.querySelectorAll(".tempValue");
    tempValues = Array.from(tempValues);
    tempValues.map(tempValue => {
        tempValue.textContent = `${cenToFar(tempValue.textContent.slice(0, 2))}°F`;
    });
})









// Functions
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function () {
        printResult(
            // options.method + ' ' + options.url + '\n' +
            // x.status + ' ' + x.statusText + '\n\n' +
            (x.responseText || '')
        );
    };
    if (/^POST/i.test(options.method)) {
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
}

(function () {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

function showAvailableCities(res) {
    cities.innerHTML = "";
    res.forEach(location => {
        const citie = document.createElement("p");
        citie.classList.add("citie");
        citie.classList.add(location.woeid);
        citie.innerText = location.title;
        citie.addEventListener('click', (e) => {
            getCityInfo(e.target.classList[1]);
        });
        cities.appendChild(citie);
    });
}
async function findLocation(city) {
    const data = await new Promise((resolve, reject) => { doCORSRequest({ method: "GET", url: `https://www.metaweather.com/api/location/search/?query=${city}` }, res => resolve(JSON.parse(res))) });
    showAvailableCities(data);
}

function updateGeneralContainer(data) {
    temperature.innerText = Math.round(data.the_temp) + "°C";
    weatherDesc.innerText = data.weather_state_name;
    currentLocation.innerText = data.name;
    windSpeed.innerText = Math.round(data.wind_speed);
    windDirectionCompass.innerText = data.wind_direction_compass;
    humidity.innerText = Math.round(data.humidity);
    document.querySelector(".fillBar").style.width = `${data.humidity}%`;
    visibility.innerText = Math.round((data.visibility + Number.EPSILON) * 100) / 100;
    airPressure.innerText = data.air_pressure;
}

async function getCityInfo(woeid, title) {
    const data = await new Promise((resolve, reject) => { doCORSRequest({ method: "GET", url: `https://www.metaweather.com/api/location/${woeid}` }, res => resolve(JSON.parse(res))) });
    const info = data.consolidated_weather[0];
    const name = title
    return {...info, name};
}

async function getCurrentLocation() {
    if (!navigator.geolocation) {
        console.log("Update your browser");
        return
    }
    const currentLocation = await new Promise( (resolve, reject) => {navigator.geolocation.getCurrentPosition(res => resolve(res.coords), null, { maximumAge: 0, enableHighAccuracy: true })});
    const {latitude, longitude} = currentLocation;
    return {latitude, longitude};
}

async function getGpsWeather(lat, long){
    const data = await new Promise((resolve, reject) => { doCORSRequest({ method: "GET", url: `https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}` }, res => resolve(JSON.parse(res))) });
    console.log("weather", data[0]);
    return {title: data[0].title, woeid: data[0].woeid} 

}
function cenToFar(temp){
    return Math.round((temp * 9/5) + 32);
}