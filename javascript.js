let playerScore = 0;
let computerScore = 0;
let playerWin = "You win!";
let computerWin = "Computer Won!";
let win = "You win this round!";
let lose = "You Lost!";
// function playerSelection() {
//   let input = prompt("Rock, Paper, or Scissors?");
//   return input.toUpperCase();
// }

function computerPlay() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  let random = options[Math.floor(Math.random() * options.length)];
  return random;
}

// let win = `You Win! ${playerSelection} beats ${computerSelection}`;
// let win = `You Win! ${playerSelection} beats ${computerSelection}`;
// let lose = `You Lose! ${computerSelection} beats ${playerSelection}`;
function playRound(playerSelection, computerSelection) {
  //rock selection
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    return win;
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return win;
  } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
    return "It's a Draw!";
    //paper selection
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return win;
  } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
    return "It's a Draw!";
  }
  //SCISSORS SELECTION
  if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return win;
  } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    return "It's a draw";
  } else {
    return lose;
  }
}

for (let i = 0; i < 6; i++) {
  let playerChoice = prompt("Rock, Paper, or Scissors?").toUpperCase();
  const computerSelection = computerPlay();
  let roundResult = playRound(playerChoice, computerSelection);
  console.log(roundResult);
  gameScore(roundResult);
  console.log(`Your score is ${playerScore}`);
  console.log(`Computer score is ${computerScore}`);
  if (playerScore === 5 || computerScore === 5) {
    break;
  }
}

function gameScore(result) {
  if (result === win) {
    playerScore++;
  } else computerScore++;
}
if (playerScore === 5) {
  console.log(playerWin);
}

if (computerScore === 5) {
  console.log(computerWin);
}
