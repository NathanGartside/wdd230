function setwindchill(temp, windspeed) {
    document.getElementById("windchill").textContent = "N/A";
    if (temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16)));

        document.getElementById("windchill").textContent = chill;
    }
    document.querySelector(".temp").innerHTML = `${Math.round(temp)}&#8457;`;
    document.getElementById("windspeed").textContent = `${windspeed} mph`;
}

function showWeather(obj) {

    let temp = parseFloat(obj.main.temp);
    let windspeed = parseFloat(obj.wind.speed);
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

    document.getElementById("description").textContent = obj.weather[0].main;
    document.getElementById("weatherIcon").setAttribute("src", iconURL);
    setwindchill(temp, windspeed);
}

const LAT = "39.1493";
const LON = "-76.7753";
const APIKEY = "3a007a9843996a9751c37389730d7ab6";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        showWeather(jsObject);
    });