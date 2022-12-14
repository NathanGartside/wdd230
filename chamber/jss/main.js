function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let today = new Date();

let dayOfWeek = new Map([['0', 'Sunday'], ['1', 'Monday'], ['2', 'Tuesday'], ['3', 'Wednesday'], ['4', 'Thursday'], ['5', 'Friday'], ['6', 'Saturday']]);

let month = new Map([['0', 'January'], ['1', 'February'], ['2', 'March'], ['3', 'April'], ['4', 'May'], ['5', 'June'], ['6', 'July'],
['7', 'August'], ['8', 'September'], ['9', 'October'], ['10', 'November'], ['11', 'December']]);

let day = `${dayOfWeek.get(today.getDay().toString())}, ${today.getDate()} ${month.get(today.getMonth().toString())} ${today.getFullYear()}`;

document.getElementById("date").textContent = day;


document.querySelector("footer p span").textContent = today.getFullYear();
document.getElementsByClassName('lastTimeUpdate')[0].textContent = document.lastModified;

if (today.getDay() == 1 || today.getDay() == 2) {
    document.getElementById("message").style.display = 'block';
}

let oldDate = Date.parse(window.localStorage.getItem("lastDate"));

let numOfDays = 0;

if (oldDate !== null) {
    numOfDays = Math.floor((today.getTime() - oldDate) / (1000 * 3600 * 24));
}

localStorage.setItem("lastDate", today);

document.getElementsByClassName("daysVisited")[0].textContent = numOfDays;
