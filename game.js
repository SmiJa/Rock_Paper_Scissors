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

    if (player === comp) {
        console.log("draw");
    } else if (player === "rock") {
        if (comp === "paper") {
            console.log("Computer Wins");
        } else {
            console.log("Player Wins");
        }
    } else if (player === "paper") {
        if (comp === "scissors") {
            console.log("Computer Wins");
        } else {
            console.log("Player Wins");
        }
    } else if (player === "scissors") {
        if (comp === "rock") {
            console.log("Computer Wins");
        } else {
            console.log("Player Wins");
        }
    }
}