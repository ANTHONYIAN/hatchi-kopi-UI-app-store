const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const text = document.querySelector("#text");
const owner = document.querySelector("ownerStat");
const health = document.querySelector("healthStat");

//initialize buttons
button1.onclick = gotoStore;
button2.onclick = gotoCart;
button3.onclick = gotoTry;

function goStore() { 
    button1.innerText = "Buy Order Soda Series (39 pesos)";
    button2.innerText = "add cart";
    button3.innerText = "Go to try!";
    text.innerText = "Welcome to the Milk and Soda Store!";
}
function goCart() { 
    console.log("Going to cart.")
}
function goTry() { 
    console.log("Going to try.")
}

function buySodaSeries() { 
    console.log("Buying Soda Series.")
}
function buyMilkSeries() { 
    console.log("Buying Milk Series.")
}