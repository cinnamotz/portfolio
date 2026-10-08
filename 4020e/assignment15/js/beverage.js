let drinkDisplayMap = {
    "Latte": "Latte",
    "IcedMatchaLatte": "Iced Matcha Latte",
    "ChaiTea": "Chai Tea",
    "BubbleTea": "Bubble Tea",
    "ThaiIcedTea": "Thai Iced Tea"
};

let drinkMenu = {
    "Latte": "A latte is a coffee drink made with espresso and steamed milk.",
    "IcedMatchaLatte": "An iced matcha latte is made with matcha, milk, and ice.",
    "ChaiTea": "Chai tea is a spiced tea made with black tea, milk, and spices.",
    "BubbleTea": "Bubble tea is a Taiwanese drink made with tea, milk, and chewy tapioca pearls.",
    "ThaiIcedTea": "Thai iced tea is a sweet tea drink made with black tea, milk, and ice."
};

let drinkArray = [
    "Latte",
    "IcedMatchaLatte",
    "ChaiTea",
    "BubbleTea",
    "ThaiIcedTea"
];

let drinkPrice = {
    "Latte": "$4.00",
    "IcedMatchaLatte": "$5.00",
    "ChaiTea": "$4.50",
    "BubbleTea": "$5.50",
    "ThaiIcedTea": "$4.50"
};

let drinkList = document.querySelector("#adrink");

for (let key in drinkDisplayMap) {
    drinkList.innerHTML += `<option value="${key}">${drinkDisplayMap[key]}</option>`;
}

function serveDrink() {
    let sName = document.querySelector("#adrink").value;

    if (drinkMenu.hasOwnProperty(sName)) {

        document.querySelector("#aboutme").innerHTML = drinkMenu[sName];

        document.querySelector("#price").innerHTML =
            "Price: " + drinkPrice[sName];

        document.querySelector("#image").innerHTML =
            "<img src='beveragepics/" + sName + ".png' alt='" +
            drinkDisplayMap[sName] +
            "' style='max-width: 300px;'>";

    } else {

        document.querySelector("#aboutme").innerHTML =
            sName + " isn't a valid drink.";

        document.querySelector("#price").innerHTML = "";

        document.querySelector("#image").innerHTML = "";
    }
}

function clearDrink() {
    document.querySelector("#adrink").selectedIndex = -1;

    document.querySelector("#aboutme").innerHTML =
        "Your drink description will appear here.";

    document.querySelector("#price").innerHTML = "";

    document.querySelector("#image").innerHTML = "";
}

function randomDrink() {
    let randomNumber = Math.floor(Math.random() * drinkArray.length);

    document.querySelector("#adrink").value =
        drinkArray[randomNumber];

    serveDrink();
}