let dropdown = document.querySelector("#userInput");

for (let i = 0; i <= 100; i++) {
    dropdown.innerHTML += `<option value="${i}">${i}</option>`;
}

function compare() {
    let answer = Number(document.querySelector("#userInput").value);
    let response = document.querySelector("#response");

    if (answer === 24) {
        response.innerHTML = "Correct!";
    } else if (answer < 10) {
        response.innerHTML = answer + " is way too low.";
    } else if (answer < 24) {
        response.innerHTML = answer + " is too low but close.";
    } else if (answer > 40) {
        response.innerHTML = answer + " is way too high.";
    } else {
        response.innerHTML = answer + " is too high but close.";
    }
}