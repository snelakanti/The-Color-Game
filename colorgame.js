// alert("connected");

var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"; 
        }
    }
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
       
            squares[i].style.backgroundColor = colors[i];
      
            squares[i].style.display = "block"; 
  
    }
});


reset.addEventListener("click", function(){
   //generate new colors
   colors = generateRandomColors(numberOfSquares);
   //pick new random color from array
   pickedColor = pickColor();
   //change color display to match picked color
   colorDisplay.textContent = pickedColor;
   //change colors of squares
   for(var i = 0; i < squares.length; i ++){
       squares[i].style.backgroundColor = colors[i];
   }

   h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add colors to squares
squares[i].style.backgroundColor = colors[i];

//add click listensers to squares
squares[i].addEventListener("click",function(){

//grab color of clicked square 
var clickedColor = this.style.backgroundColor;
//compare to pickedColor
if(clickedColor === pickedColor){
    messageDisplay.textContent = "Correct!";
    reset.textContent = "Play Again?"
    changeColor(clickedColor);
    h1.style.backgroundColor = clickedColor;
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
});
}

function changeColor(color){

    //loop through all colors
    for(var i = 0; i < squares.length; i++){
       
    squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
}

function pickColor(){

var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num){
//make array
var arr = [];
//add num random colors to array
for(var i = 0; i < num; i ++){
    arr.push(randomColor());
//get Random color and push into array
}
//return that array
return arr;
}

function randomColor(){

    //pick red,blue,green from 0-255
var r = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}