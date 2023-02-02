// make variables with value of the html classes
// just to speed up in adding animations and functions to them
const paperbutton = document.querySelector(".paper");
const rockbutton = document.querySelector(".rock");
const scissorsbutton = document.querySelector(".scissors");
const user = document.querySelector("#player1");
const computer = document.querySelector("#player2");
let outcome;
let userchoice;
let computerchoice;
var choices = ["rock", "paper", "scissors"];

// let choice = ["rock", "paper", "scissors"];
// what happens initially when the window loads
window.addEventListener("load", start);
// when the game starts, both the user and the computer choose a move
function start() {
  console.log("start");
  getDraws();
  hideOutcome();
}

// make the buttons clickable, add the animation and recognize the choice
function getDraws() {
  // console.log(computerChoice, userChoice);
  rockbutton.addEventListener("click", userDraw);
  paperbutton.addEventListener("click", userDraw);
  scissorsbutton.addEventListener("click", userDraw);
}
// animate both hands when user chooses a move
function userDraw() {
  user.classList.add("shake");
  computer.classList.add("shake");

  // I want the computer to make a random choice out of the 3!
  // I'll start with generating 3 random numbers from 1 to 3.
  // Math random will give me a random number but starting from 0

  // let computerchoice = Math.floor(Math.random() * 3) + 1;

  // So +1 at the end will make it start from 1
  // But I want a round number and that's what Math.floor does

  // But what if this also works, after I've created an array above
  computerchoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer draws ${computerchoice}`);
}

// I want a few more thing to happen when user clicks on a move
rockbutton.onclick = function () {
  // recognize the user's choice of move
  userchoice = "rock";
  // show choice in console
  console.log(`User draws ${userchoice}`);
  // reveal the player's draw
  user.addEventListener("animationend", showUserHand);
};
paperbutton.onclick = function () {
  userchoice = "paper";
  console.log(`User draws ${userchoice}`);
  user.addEventListener("animationend", showUserHand);
};
scissorsbutton.onclick = function () {
  userchoice = "scissors";
  console.log(`User draws ${userchoice}`);
  user.addEventListener("animationend", showUserHand);
};

// show the correct hand img depending on the user choice
function showUserHand() {
  // console.log(`User chose ${choice}`);
  // start with removing the initial hand gesture
  user.classList.remove("shake");
  // and depending on the choice reveal the new hand draw
  if (userchoice == "rock") {
    user.classList.add("rockimg");
  } else if (userchoice == "paper") {
    user.classList.add("paperimg");
  } else {
    user.classList.add("scissorsimg");
  }
  showComputerHand();
}

// do the same for the computer hand
function showComputerHand() {
  computer.classList.remove("shake");
  if (computerchoice == "rock") {
    computer.classList.add("rockimg");
  } else if (computerchoice == "paper") {
    computer.classList.add("paperimg");
  } else {
    computer.classList.add("scissorsimg");
  }
  // at this point all animations are over
  // and all the imgs are replaced
  // time to show the outcome
  showOutcome();
}

function showOutcome() {
  // it's a draw
  if (userchoice === computerchoice) {
    outcome = "It's a draw!";
    document.querySelector("#draw").classList.remove("hidden");
    // the win combos:
  } else if (
    (userchoice === "rock" && computerchoice === "scissors") ||
    (userchoice === "paper" && computerchoice === "rock") ||
    (userchoice === "scissors" && computerchoice === "paper")
    // the "||" after the condition in this "else if" represents "or"
  ) {
    outcome = "You win!";
    document.querySelector("#win").classList.remove("hidden");
    // any other combo is a no win
  } else {
    outcome = "You lose!";
    document.querySelector("#lose").classList.remove("hidden");
  }
  console.log(outcome);
}

function hideOutcome() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
}
