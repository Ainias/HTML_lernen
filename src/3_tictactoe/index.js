function quadrate(n) {
    return n * n;
}

function quadrate500(n) {
    if (n <= 500) {
        n = n * n;
        return quadrate500(n)
    } else {
        return n
    }
}

console.log(quadrate500(4))
console.log(quadrate500(501))


console.log(quadrate(2));
console.log(quadrate(4));
let x = 3;
console.log(quadrate(x));
let y = quadrate(x);
console.log(y);
console.log(quadrate(x + y));
console.log(quadrate(quadrate(x)));

let number = [1, 2, 3, 4, 5, 6];
let colors = ["red", "green", "blue"];

console.log(colors[3])
let index = 1
console.log(colors[index])


function click(event) {
    console.log("I was clicked", event)
    event.target.innerText = "I was clicked"
}

let button = document.getElementById("click");
button.addEventListener("click", click)

function checkWon(fields, player) {
    console.log(fields[0].innerText)
    let div = document.getElementById("winner");
    if (
        (fields[0].innerText === player && fields[1].innerText === player && fields[2].innerText === player)
        || (fields[3].innerText === player && fields[4].innerText === player && fields[5].innerText === player)
        || (fields[6].innerText === player && fields[7].innerText === player && fields[8].innerText === player)
        || (fields[0].innerText === player && fields[3].innerText === player && fields[6].innerText === player)
        || (fields[1].innerText === player && fields[4].innerText === player && fields[7].innerText === player)
        || (fields[2].innerText === player && fields[5].innerText === player && fields[8].innerText === player)
        || (fields[0].innerText === player && fields[4].innerText === player && fields[8].innerText === player)
        || (fields[2].innerText === player && fields[4].innerText === player && fields[6].innerText === player)
    ) {
        div.innerText = "The Winner is " + player
    } else if (checkAllFieldsPlayed(fields)) {
        div.innerText = "undecided"
    }
}

function checkAllFieldsPlayed(fields) {
    let result = fields[0].innerText.trim() !== "" && fields[1].innerText.trim() !== "" && fields[2].innerText.trim() !== ""
        && fields[3].innerText.trim() !== "" && fields[4].innerText.trim() !== "" && fields[5].innerText.trim() !== ""
        && fields[6].innerText.trim() !== "" && fields[7].innerText.trim() !== "" && fields[8].innerText.trim() !== "";
    return result;
}

let state = "X"
let fields = document.querySelectorAll(".field");

function play(event) {
    event.target.innerText = state
    checkWon(fields, state)
    if (state === "X") {
        state = "O"
    } else {
        state = "X"
    }
    event.target.removeEventListener("click", play)
}


function addClickEvent(field) {
    field.addEventListener("click", play)
}

fields.forEach(addClickEvent)
