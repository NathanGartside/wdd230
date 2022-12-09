function showWeather(obj) {

    let temp = parseFloat(obj.main.temp);
    let hum = parseFloat(obj.main.humidity)
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    document.getElementById("description").textContent = obj.weather[0].main;
    document.getElementById("weatherIcon").setAttribute("src", iconURL);
    document.querySelector("#temp").innerHTML = `${Math.round(temp)}&#8457;`;
    document.getElementById("humidity").innerHTML = `${Math.round(hum)}%`;
}

const LAT = "38.9847";
const LON = "-77.0947";
const APIKEY = "3a007a9843996a9751c37389730d7ab6";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        showWeather(jsObject);
    });