// alert("connected");

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
    changeColor(clickedColor);
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
return "rgb(" + r + "," + g + "," + b + ")";
}