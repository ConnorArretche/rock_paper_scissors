let scoreBoard = document.querySelector(".scoreboard");
let decision = document.querySelector(".decision");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

//Random number between 0-2 for computer. Changes from number to r, p, s
function computerSelection() {
  let computerPick = ["r", "p", "s"];
  let random = Math.floor(Math.random() * 3);
  return computerPick[random];
}

// function game(userChoice) {
//   let computerChoice = computerSelection();
//   console.log(`User choice is ${userChoice}`);
//   console.log(`computer choice is ${computerChoice}`);
// }

function game(userChoice) {
  let computerChoice = computerSelection();
  //ROCK
  if (userChoice == "rock" && computerChoice == "s") {
    console.log(`You picked Rock and computer picked ${computerChoice}..Win`);
  } else if (userChoice == "rock" && computerChoice == "p") {
    console.log(`You picked Rock and computer picked ${computerChoice}...LOSE`);

    //PAPER
  } else if (userChoice == "paper" && computerChoice == "r") {
    console.log(`You picked Paper and computer picked ${computerChoice}.WIN!`);
  } else if (userChoice == "paper" && computerChoice == "s") {
    console.log(`You picked Paper and computer picked ${computerChoice}.Lose!`);

    //SCISSORS
  } else if (userChoice == "scissors" && computerChoice == "r") {
    console.log(
      `You picked scissors and computer picked ${computerChoice}.Losee!`
    );
  } else if (userChoice == "scissors" && computerChoice == "p") {
    console.log(
      `You picked scissors and computer picked ${computerChoice}.Winnerr!`
    );
  } else {
    console.log(
      `You picked ${userChoice} and computer picked ${computerChoice}... Tie`
    );
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
