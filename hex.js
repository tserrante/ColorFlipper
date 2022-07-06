// List of hex values to build the colors
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomNumber(max){
   return Math.floor(Math.random() * max);
}

function buildColor(){
   // hex values for colors are 6 characters/digits long, 
   // prepended by a '#' symbol.
   let colorString = "#"
   for (let i = 0; i < 6; i++){
      colorString += hexValues[randomNumber(hexValues.length)];
   }
   
   colorName.textContent = colorString;
   container.style.background = colorString;
}

const hexBtn = document.getElementById("btn");
const colorName = document.querySelector(".color");
const container = document.querySelector("main");

hexBtn.addEventListener("click", buildColor);

