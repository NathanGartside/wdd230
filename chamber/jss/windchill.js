function setwindchill(temp, windspeed) {
    document.getElementById("chill").value = "N/A";
    if (temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16)));

        document.getElementById("chill").textContent = chill;
    }

    document.getElementById("temp").innerHTML = `${temp}&#8457;`;
    document.getElementById("speed").textContent = `${windspeed} mph`;
}




setwindchill(49, 10);