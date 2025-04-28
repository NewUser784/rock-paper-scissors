
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

function updateScore() {
    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
}

function checkForWinner() {
    if(humanScore === 5 && computerScore === 5) {
        alert("The game is over! IT'S A DRAW!");
        restartGame();
    } else if(humanScore === 5 && computerScore < 5) {
        alert("The game is over! YOU WIN!");
        restartGame();
    } else if (computerScore === 5 && humanScore < 5) {
        alert("The game is over! YOU LOSE!");
        restartGame();
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    resultsDiv.textContent = "";
}

function playRound(clickedButton, computerChoice) {
    let humanChoice;

    switch(clickedButton) {
        case "but_one":
            humanChoice = "rock";
        break;

        case "but_two":
            humanChoice = "paper";
        break;

        case "but_three":
            humanChoice = "scissors";
        break;
    }

    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        updateScore();
        resultsDiv.textContent = "It's a draw!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        updateScore();
        resultsDiv.textContent = "Rock beats scissors, you win!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        updateScore();
        resultsDiv.textContent = "Paper beats rock, you win!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        updateScore();
        resultsDiv.textContent = "Scissors beats paper, you win!";
    } else {
        computerScore++;
        updateScore();
        resultsDiv.textContent = computerChoice + " beats " + humanChoice + ", you lose!";
    }
    if (humanScore === 5 || computerScore === 5) {
        setTimeout(() => {
            checkForWinner();
        }, 10)
    } else {
        checkForWinner();
    }
        
}

let humanScore = 0;
let computerScore = 0;

let resultsDiv = document.querySelector(".results");
let buttons = document.querySelectorAll("button");

let humanScoreDiv = document.querySelector(".player-score .score");
let computerScoreDiv = document.querySelector(".pc-score .score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
})