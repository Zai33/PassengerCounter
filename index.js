//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0

function increment () {
    count = count + 1;
    countEl.textContent = count;
    //console.log(count)
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = 0;
}
