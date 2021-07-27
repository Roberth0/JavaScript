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
        .then(cityInfo => getCityInfo(cityInfo.woeid))
        .then(res => console.log(res));
    const tempFar = cenToFar(28);
    console.log(tempFar);
});

temperatureF.addEventListener('click',() => { 
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

function updateGeneralContainer() {
    temperature.innerText = temp;
    weatherDesc.innerText = state;
    currentLocation.innerText = location;
}

async function getCityInfo(woeid) {
    const data = await new Promise((resolve, reject) => { doCORSRequest({ method: "GET", url: `https://www.metaweather.com/api/location/${woeid}` }, res => resolve(JSON.parse(res))) });
    console.log(data.consolidated_weather[0]);
    return {min_temp, max_temp, the_temp,air_pressure, wind_speed, wind_direction, humidity, visibility} = data.consolidated_weather[0];
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
    const data = await new Promise((resolve, reject) => { doCORSRequest({ method: "GET", url: `https://www.metaweather.com/api/location/search/?lattlong=0.34,-78.12` }, res => resolve(JSON.parse(res))) });
    console.log("weather", data[0]);
    return {title: data[0].title, woeid: data[0].woeid} 

}
function cenToFar(temp){
    return Math.round((temp * 9/5) + 32);
}