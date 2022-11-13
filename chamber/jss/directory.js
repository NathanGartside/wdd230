//.addEventListener('click', ()=>{});
//Have one for list and grid
//.style.opacity = "1/.5"; change so the view that isn't being used is half opacity
const requestURL = './data/data.json';

let grid = document.getElementById("grid");
let list = document.getElementById("list");

grid.addEventListener("click", () => {
    let grid = document.getElementById("cardview");
    let list = document.getElementById("listview")
    grid.classList.add("cardShow");
    grid.classList.remove("noShow");
    grid.classList.remove("cardDefault");
    list.classList.add("noShow");
    list.classList.remove("show");
    list.classList.remove("listDefault");
    document.getElementById("grid").style.opacity = "1";
    document.getElementById("list").style.opacity = ".5";
});

list.addEventListener("click", () => {
    let grid = document.getElementById("cardview");
    let list = document.getElementById("listview")
    grid.classList.add("noShow");
    grid.classList.remove("cardShow");
    grid.classList.remove("cardDefault");
    list.classList.add("show");
    list.classList.remove("noShow");
    list.classList.remove("listDefault");
    document.getElementById("list").style.opacity = "1";
    document.getElementById("grid").style.opacity = ".5";
});

function displayCard(card) {
    let cardview = document.getElementById("cardview");
    let cardel = document.createElement("div");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    img.setAttribute('src', card.img);
    p1.textContent = card.address;
    p2.textContent = card.phoneNumber;
    p3.textContent = card.webAddress;

    cardel.appendChild(img);
    cardel.appendChild(p1);
    cardel.appendChild(p2);
    cardel.appendChild(p3);

    cardview.appendChild(cardel);
}

function displayList(list) {
    let listview = document.getElementById("table");
    let tr = listview.insertRow(-1);
    let th1 = tr.insertCell(-1)
    let th2 = tr.insertCell(-1)
    let th3 = tr.insertCell(-1)
    let th4 = tr.insertCell(-1)

    th1.textContent = list.name;
    th2.textContent = list.address;
    th3.textContent = list.phoneNumber;
    th4.textContent = list.webAddress;

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);

    listview.appendChild(tr);
}

fetch(requestURL) //Request info
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        let buisnesses = jsonObject['businesses'];
        buisnesses.forEach(displayCard);
        buisnesses.forEach(displayList);
    });

