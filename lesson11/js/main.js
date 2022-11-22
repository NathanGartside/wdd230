let orignal = [1, 2, 3, 4, 5];

document.getElementById("mapOrignal").innerText = orignal;
document.getElementById("filterOrignal").innerText = orignal;
document.getElementById("reduceOrignal").innerText = orignal;

function timesTwo(num) {
    return num * 2;
}

function mapButton() {
    let orignal = [1, 2, 3, 4, 5];
    let mapExample = orignal.map(timesTwo);
    document.getElementById("mapResult").innerText = mapExample;
}

function aboveThree(num) {
    return num > 3;
}

function filterButton() {
    let orignal = [1, 2, 3, 4, 5];
    let filterExample = orignal.filter(aboveThree);
    document.getElementById("filterResult").innerText = filterExample;
}

function sum(total, num) {
    return total + num;
}

function reduceButton() {
    let orignal = [1, 2, 3, 4, 5];
    let reduceExample = orignal.reduce(sum);
    document.getElementById("reduceResult").innerText = reduceExample;
}