function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let today = new Date();

let dayOfWeek = new Map([['0', 'Sunday'], ['1', 'Monday'], ['2', 'Tuesday'], ['3', 'Wednesday'], ['4', 'Thursday'], ['5', 'Friday'], ['6', 'Saturday']]);

let month = new Map([['0', 'January'], ['1', 'February'], ['2', 'March'], ['3', 'April'], ['4', 'May'], ['5', 'June'], ['6', 'July'],
['7', 'August'], ['8', 'September'], ['9', 'October'], ['10', 'November'], ['11', 'December']]);

let day = `${dayOfWeek.get(today.getDay().toString())}, ${today.getDate()} ${month.get(today.getMonth().toString())} ${today.getFullYear()}`;

document.getElementById("date").textContent = day;
