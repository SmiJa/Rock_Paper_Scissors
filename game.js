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
    return Math.random(2 - 0) + 0;
}