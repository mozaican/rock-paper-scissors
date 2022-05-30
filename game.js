function computerPlay() {
    const weapons = ["rock", "paper", "scissors"];
    return weapons[Math.floor(Math.random() * weapons.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        alert("You win! Rock crushes Scissors");
        return 1;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        alert("You win! Paper covers Rock");
        return 1;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors cuts Paper");
        return 1;
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        alert("You lose! Paper covers Rock");
        return 0;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors cuts Paper");
        return 0;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock crushes Scissors");
        return 0;
    }
    else {
        alert("It's a tie!");
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Hello! Enter your weapon for Rock-Paper-Scissors: ");
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        
        if (round === 1) {
            playerWins += 1;
        } else {
            computerWins += 1;
        }
    }

    if (playerWins > computerWins) {
        alert("You win the tournament! Hooray!");
    } else if (playerWins < computerWins) {
        alert("You lose the tournament. Try again!");
    } else {
        alert("It's a tie. Try again!");
    }
}