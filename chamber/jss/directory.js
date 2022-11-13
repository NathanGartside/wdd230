//.addEventListener('click', ()=>{});
//Have one for list and grid
//.style.opacity = "1/.5"; change so the view that isn't being used is half opacity




const requestURL = './data/data.json';
function displayCard(card) {
    let cardview = document.querySelector("cardview");
    let cardel = document.createElement("div");
    cardel.innerHTML =
        `<img src="${card.img}" alt="">
        <p>${card.address}</p>
        <p>${card.phoneNumber}</p>
        <p><a href="">${card.websiteAddress}</a></p>`;

    cardview.appendChild(childel);
}

function displayList(list) {

}

fetch(requestURL) //Request info
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        let buisness = jsonObject['businesses'];
        businesses.forEach(displayCard);
        businesses.forEach(displayList);
    });

