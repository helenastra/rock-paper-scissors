const playerSelection = prompt("What is your selection?").toUpperCase();
const computerSelection = computerPlay();

function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!";
    }

    else if (playerSelection == "ROCK") {
        if (computerSelection == "SCISSORS") {
            return "You win! Rock beats scissors!";
        }
        return "You lose! Paper beats rock!";
    }

    else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            return "You lose! Scissors beats paper!";
        }
        return "You win! Paper beats rock!";
    }

    else {
        if (computerSelection == "ROCK") {
            return "You lose! Rock beat scissors!";
        }
        return "You win! Scissors beats paper!";
    }
}

function game() {
    score = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your selection?").toUpperCase();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("win")) {
            score++;
        }
    }
    return score 
}
