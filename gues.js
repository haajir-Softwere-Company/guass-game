"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").Value = 20;
// console.log((document.querySelector(".guess").Value = 20));

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // this is when gues == 0
  if (!guess) {
    document.querySelector(".message").textContent = "nonumber";
  }
  // player win
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correctNumber";
    highScore++;
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector("body").style.backgroundColor = "#8ac926";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("h1").textContent = "wooow your win ";
  }

  // when player too high score
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOO HIGHSCORE";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "your loos the game";
      document.querySelector(".score").textContent = 0;
    }
  }

  // when player too low score
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "TOO LOWSCORE";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  }
});
