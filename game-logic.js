
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

function playRound(humanChoice = " ", computerChoice) {
    humanChoice = humanChoice.toLowerCase();

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

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) {
        console.log("The game ends in a draw!");
    } else if (humanScore > computerScore) {
        console.log("The game is over! You win!");
    } else {
        console.log("The game is over! You lose!");
    }
    console.log("Your score: " + humanScore);
    console.log("The computer's score: " + computerScore);

    humanScore = 0;
    computerScore = 0;
}

let humanScore = 0;
let computerScore = 0;

playGame();