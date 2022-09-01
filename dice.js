function rollDice(){
/*
.   dice.js
.   dicee.html
*/
// Scripts Starts Here
// Random variable for player one 1-6
let playerOneScore = Math.floor(Math.random() * 6) + 1;
// Random variable for player two 1-6
let playerTwoScore = Math.floor(Math.random() * 6) + 1;
// ------------------------------------------------------
// ------------------------------------------------------
console.log(playerOneScore + " : " + playerTwoScore);
// names of dice images Array
let diceImages = [
  "Not Index",
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];
// to load desired image into the object image
let playerOneImage = document.getElementsByClassName("img1");
let playerTwoImage = document.getElementsByClassName("img2");
// loading images
playerOneImage[0].setAttribute("src", `images/${diceImages[playerOneScore]}`);
playerTwoImage[0].setAttribute("src", `images/${diceImages[playerTwoScore]}`);
//------------------
// comparing score who won?
let playerOne = false;
let playerTwo = false;
let draw = false;
// logic
if (playerOneScore > playerTwoScore) {
  playerOne = true; // player one won
} else if (playerTwoScore > playerOneScore) {
  playerTwo = true; // player two won
} else if (playerOneScore === playerTwoScore) {
  draw = true; // match draw
}
//----------------
// getting the h1 element of class container
let h1 = document.querySelector(".container");
// logic display winner
if (playerOne) {
  // show player one won
  h1.firstElementChild.innerText = "🚩Player 1 Wins!";
} else if (playerTwo) {
  // show player two won
  h1.firstElementChild.innerText = "Player 2 Wins!🚩";
} else if (draw) {
  // show the match is draw
  h1.firstElementChild.innerText = "Draw!";
  setTimeout(()=>{
    h1.firstElementChild.innerText = "Refresh Me!";
  }, 2000);
}
}
// function end here.