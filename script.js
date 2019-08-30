var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("#button");

function randomColor(){
    return(
        "#" +
    Math.random()
      .toString(16)
      .slice(2, 8));
}

function setRandomColor(){
    color1.value = randomColor();
    color2.value = randomColor();

    changeColor();
}

function printcode(){
    css.textContent = body.style.background + ";";
}

function changeColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
    
    printcode();
}

changeColor();

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
button.addEventListener("click",setRandomColor);