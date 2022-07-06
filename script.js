const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#f1f5f8"];

/*
   Returns an integer between 0 and max
*/
function randomNumber(max){
   return Math.floor(Math.random() * max);
}

function switchColor()
{
   const color = colors[randomNumber(colors.length)];
   console.log(color);
   colorName.textContent = color;
   container.style.background = color;
   
}

const simpleBtn = document.getElementById("btn");
const colorName = document.querySelector(".color");
const container = document.querySelector("main");

simpleBtn.addEventListener("click", switchColor);

