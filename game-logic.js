
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);

    if (randomNum <= 33) {
        return "rock";
    } else if (randomNum > 33 && randomNum <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Write your choice: ");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("Rock beats scissors, you win!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("Paper beats rock, you win!"); 
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("Scissors beats paper, you win!");
    } else {
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice + ", you lose!");
    }
}

let humanScore = 0;
let computerScore = 0;