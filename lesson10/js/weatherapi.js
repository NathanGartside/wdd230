const LAT = "64.8378";
const LON = "-147.7164";
const APIKEY = "3a007a9843996a9751c37389730d7ab6";

function showWeather(obj) {
    let temp = document.getElementById("current-temp");
    let iconpath = document.getElementById("icon-src");
    let weathericon = document.getElementById("weathericon");
    let figurecaption = document.querySelector("figcaption");
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

    temp.textContent = obj.main.temp;
    iconpath.textContent = iconURL;
    weathericon.setAttribute("src", iconURL);
    weathericon.setAttribute("alt", obj.weather[0].description);
    figurecaption.textContent = obj.weather[0].main;
}

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        showWeather(jsObject);
    });