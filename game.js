const playerRock = document.getElementById("item-1");
const playerPaper = document.getElementById("item-2");
const playerScissors = document.getElementById("item-3");
const computerSelection = document.getElementById("computer-selection");
const outcome = document.getElementById("outcome");

function compChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let num = randNum();
    return choices[num];
}

function randNum() {
    return Math.floor((Math.random() * 3));
}

function play(playerChoice) {
    let player = playerChoice.trim().toLowerCase();
    let comp = compChoice().toLowerCase();

        computerSelection.innerHTML = comp;

    if (player === comp) {
        console.log("draw");
    } else if (player === "rock") {
        if (comp === "paper") {
            outcome.innerHTML = "Computer Wins";
            console.log("Computer Wins");
        } else {
            outcome.innerHTML = "Computer Wins";
            console.log("Player Wins");
        }
    } else if (player === "paper") {
        if (comp === "scissors") {
            outcome.innerHTML = "Player Wins";
            console.log("Computer Wins");
        } else {
            outcome.innerHTML = "Player Wins";
            console.log("Player Wins");
        }
    } else if (player === "scissors") {
        if (comp === "rock") {
            outcome.innerHTML = "Computer Wins";
            console.log("Computer Wins");
        } else {
            outcome.innerHTML = "Player Wins";
            console.log("Player Wins");
        }
    }
}