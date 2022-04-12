let scoreBoard = document.querySelector(".scoreboard");
let outcome = document.querySelector(".outcome");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let pScore = document.querySelector(".p-score");
pScore.textContent = 0;
let cScore = document.querySelector(".c-score");
cScore.textContent = 0;

//Random number between 0-2 for computer. Changes from number to r, p, s
function computerSelection() {
  let computerPick = ["r", "p", "s"];
  let random = Math.floor(Math.random() * 3);
  return computerPick[random];
}

// function win() {
//   outcome.textContent = `You picked ${userChoice} and Computer picked: ${computerSelection} `;
//   playerScore++;
// }

function game(userChoice) {
  let computerChoice = computerSelection();
  //ROCK
  if (userChoice == "rock" && computerChoice == "s") {
    outcome.textContent = `You picked Rock and Computer picked Scissors..You Win!`;
    pScore.innerHTML++;
  } else if (userChoice == "rock" && computerChoice == "p") {
    outcome.textContent = `You picked Rock and Computer picked Paper..You Lose! :(`;
    cScore.innerHTML++;

    //PAPER
  } else if (userChoice == "paper" && computerChoice == "r") {
    outcome.textContent = `You picked Paper and Computer picked Rock..You Win!`;
    pScore.innerHTML++;
  } else if (userChoice == "paper" && computerChoice == "s") {
    outcome.textContent = `You picked Paper and Computer picked Scissors..You Lose! :(`;
    cScore.innerHTML++;

    //SCISSORS
  } else if (userChoice == "scissors" && computerChoice == "r") {
    outcome.textContent = `You picked Scissors and Computer picked Rock..You Lose! :(`;
    cScore.innerHTML++;
  } else if (userChoice == "scissors" && computerChoice == "p") {
    outcome.textContent = `You picked Scissors and Computer picked Paper..You Win!`;
    pScore.innerHTML++;
  } else {
    outcome.textContent = `You picked ${userChoice} and computer picked ${computerChoice}... Tie`;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });

  paper.addEventListener("click", function () {
    game("paper");
  });

  scissors.addEventListener("click", function () {
    game("scissors");
  });
}

main();

console.log();
