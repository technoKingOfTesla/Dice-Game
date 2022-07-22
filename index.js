
//  Random Number generator for left side
var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
  console.log(randomNumber1);

//  Random Number generator for right side
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
  console.log(randomNumber2);



//  Random Number image selector for left side dice
if (randomNumber1 === 1) {
  document.getElementById('dice1').src = "images/dice1.png"
} else if(randomNumber1 === 2) {
  document.getElementById('dice1').src = "images/dice2.png"
} else if(randomNumber1 === 3) {
  document.getElementById('dice1').src = "images/dice3.png"
} else if(randomNumber1 === 4) {
  document.getElementById('dice1').src = "images/dice4.png"
} else if(randomNumber1 === 5) {
  document.getElementById('dice1').src = "images/dice5.png"
} else if(randomNumber1 === 2) {
  document.getElementById('dice6').src = "images/dice6.png"
}

//  Random Number image selector for right side dice
if (randomNumber2 === 1) {
  document.getElementById('dice2').src = "images/dice1.png"
} else if(randomNumber2 === 2) {
  document.getElementById('dice2').src = "images/dice2.png"
} else if(randomNumber2 === 3) {
  document.getElementById('dice2').src = "images/dice3.png"
} else if(randomNumber2 === 4) {
  document.getElementById('dice2').src = "images/dice4.png"
} else if(randomNumber2 === 5) {
  document.getElementById('dice2').src = "images/dice5.png"
} else if(randomNumber2 === 2) {
  document.getElementById('dice2').src = "images/dice6.png"
}

// Player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<img src='images/flag.png' class='flag'>Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "<img src='images/flag.png' class='flag2'>Player 2 Wins";
} else if (randomNumber2 = randomNumber1) {
  document.querySelector("h1").innerHTML = "Draw!";
}
