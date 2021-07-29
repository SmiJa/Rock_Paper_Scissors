const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const computerSelection = document.getElementById("computer-selection-output");
const playerSelection = document.getElementById("player-choice-output");
const outcome = document.getElementById("outcome");
const playerWins = "Player Wins";
const computerWins = "Computer Wins";

function compChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let num = randNum();
    return choices[num];
}

function randNum() {
    return Math.floor((Math.random() * 3));
}

function play(playerChoice) {
    let player = playerChoice.id;
    let comp = compChoice().toLowerCase();

    computerSelection.innerHTML = comp;
    playerSelection.innerHTML = player;

    if (player === comp) {
        outcome.innerHTML = "Draw";
        console.log("draw");
    } else if (player === "rock") {
        if (comp === "paper") {
            outcome.innerHTML = computerWins;
            console.log("Computer Wins");
        } else {
            outcome.innerHTML = playerWins;
            console.log("Player Wins");
        }
    } else if (player === "paper") {
        if (comp === "scissors") {
            outcome.innerHTML = computerWins;
            console.log("Computer Wins");
        } else {
            outcome.innerHTML = playerWins;
            console.log("Player Wins");
        }
    } else if (player === "scissors") {
        if (comp === "rock") {
            outcome.innerHTML = computerWins;
            console.log("Computer Wins");
        } else {
            outcome.innerHTML = playerWins;
            console.log("Player Wins");
        }
    }
}