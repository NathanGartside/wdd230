const requestURL = "./data/temple.json";

const LIKES_KEY = "temple-likes";
let likes_string = localStorage.getItem(LIKES_KEY);
if (likes_string == null) {
    likes_string = "[]";
    localStorage.setItem(LIKES_KEY, likes_string);
}

let likeslist = JSON.parse(likes_string);

function displayTemple(temple) {
    let main = document.querySelector("main");
    let newsection = document.createElement("section");
    let h2 = document.createElement("h2");
    let img = document.createElement("img")
    img.setAttribute("src", temple.img);
    img.setAttribute("class", "card");
    let input = document.createElement("input");
    input.setAttribute("class", "mycheck");
    input.setAttribute("id", `check-${temple.id}`)
    input.setAttribute("type", "checkbox");
    input.setAttribute("onclick", "likeTemple(this);")
    input.setAttribute("name", "checkbox")
    let label = document.createElement("label");
    label.setAttribute("for", "checkbox")
    label.innerText = "Like This Temple!"

    h2.innerText = temple.name;



    newsection.appendChild(h2);
    newsection.appendChild(img);
    newsection.appendChild(document.createElement("br"));

    let div = document.createElement("div");
    const str = temple.history.split(",");
    str.forEach((x) => {
        let h3 = document.createElement("h3")
        h3.innerText = x;
        div.appendChild(h3);
    });
    let p = document.createElement("p");
    p.innerText = `Address: ${temple.address}`;
    div.appendChild(p);

    let p1 = document.createElement("p");
    p1.innerText = `Phone Number: ${temple.phone}`;
    div.appendChild(p1);

    let h4 = document.createElement("h4");
    h4.innerText = "Temple Serivces";
    div.appendChild(h4);

    const str1 = temple.services.split(",");
    str1.forEach((x) => {
        let p = document.createElement("p")
        p.innerText = x;
        div.appendChild(p);
    });

    let h41 = document.createElement("h4");
    h41.innerText = "Ordinance Schedule";
    div.appendChild(h41);

    const str2 = temple.ordinance.split(",");
    str2.forEach((x) => {
        let p = document.createElement("p")
        p.innerText = x;
        div.appendChild(p);
    });

    let h42 = document.createElement("h4");
    h42.innerText = "Endowment Schedule";
    div.appendChild(h42);

    const str3 = temple.session.split(",");
    str3.forEach((x) => {
        let p = document.createElement("p")
        p.innerText = x;
        div.appendChild(p);
    });

    let h43 = document.createElement("h4");
    h43.innerText = "Days the temple is closed";
    div.appendChild(h43);

    const str4 = temple.closures.split(":");
    str4.forEach((x) => {
        let p = document.createElement("p")
        p.innerText = x;
        div.appendChild(p);
    });

    div.setAttribute("class", "info extra");

    newsection.appendChild(div);
    newsection.setAttribute("class", "parent");

    newsection.appendChild(input);
    newsection.appendChild(label);



    main.appendChild(newsection);
    addEvent();
}

function likeTemple(item) {
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked) {
        if (!likeslist.includes(item.id)) {
            likeslist.push(item.id);
        }
    }
    else {
        if (likeslist.includes(item.id)) {
            likeslist.splice(likeslist.indexOf(item.id), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

function displayLike(item) {
    let obj = document.getElementById(item);
    obj.checked = true;
}

fetch(requestURL) //Request info
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        let temple = jsonObject['temple'];
        temple.forEach(displayTemple);
        likeslist.forEach(displayLike);
    });



function addEvent() {
    let card = document.getElementsByClassName("parent");

    if (card.length == 4) {
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener("click", () => {
                let section = document.getElementsByClassName("parent")[i];
                let div = section.children[3];
                div.classList.toggle("extra");
            });
        }
    }
}

