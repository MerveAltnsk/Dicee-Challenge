//generate a random number between 1 and 6 for the first dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6    

var dice  = "images/dice" + randomNumber1 + ".png"; //     images/dice1.png - images/dice6.png

document.querySelector(".img1").src = dice; //change dice image on first div

  


//generate a random number between 1 and 6 for the second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var dice2 = "images/dice" + randomNumber2 + ".png"; //     images/dice1.png - images/dice6.png

document.querySelector(".img2").src = dice2; //change dice image on second div



//check if the two dices match

if(randomNumber1 === randomNumber2){

  document.querySelector("h1").textContent = "Draw!";

}else if(randomNumber1 > randomNumber2){

  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";

}else

  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";



// button

document.querySelector(".btn").addEventListener("click", function(){

  location.reload(); //reload the page

});