
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

