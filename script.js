var colors=[];
var pickedColor;
// Query selectors
var squares=document.querySelectorAll(".squares");
var colorDisplay=document.querySelector("span");
var headingDisplay=document.querySelector("h1");
var resultDisplay=document.querySelector("#resultDisplay");
var newColors=document.querySelector("#playAgain");
var hard=document.querySelector("#hard");
var easy=document.querySelector("#easy");
var mainContainer=document.querySelector("#main-container");
// start game
    coloringSquares(6);
    mainGame();
// For easy level
easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    coloringSquares(3);
    for(var i=3;i<6;i++){
        squares[i].style.display="none";
    }
    mainGame();
});
//for hard level
hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    coloringSquares(6);

});

//for REFRESH
newColors.addEventListener("click" , function(){
    coloringSquares(colors.length);

});

//   COLOR GENERATOR
function colorGenerator(limit){
    var arr=[];
    for(var i=0; i<limit;i++){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        arr[i] = "rgb(" + r + ", "  + g + ", " + b + ")" ;
    }
    return arr;

}

// MAKING SQUARES
function coloringSquares(num){
    colors=colorGenerator(num);
    pickedColor=colors[Math.floor(Math.random()*num)];
    colorDisplay.textContent=pickedColor;
    resultDisplay.textContent="";
    newColors.textContent="New Colors";
    headingDisplay.style.backgroundColor="rgb(70,130,180)";
    for(var i=0; i<num;i++){
        squares[i].style.display="block";
        squares[i].style.backgroundColor=colors[i];
        
    }

}
// findinf correct ans 
function mainGame(){
for(var i=0;i<colors.length;i++){
    // squares[i].style.backgroundColor=colors[i];
squares[i].addEventListener("click" , function(){
    if(this.style.backgroundColor===pickedColor){
        resultDisplay.textContent="Correct";
        headingDisplay.style.backgroundColor=pickedColor;
        newColors.textContent="Play Again?";
        for(var j=0; j<colors.length;j++){
        squares[j].style.backgroundColor=pickedColor;
        }
    }
    else{
       this.style.backgroundColor= "#232323";
       resultDisplay.textContent="Try again";
    }
});
}
}


