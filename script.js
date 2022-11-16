function shuffle() {
    array = ['Paper', 'Scissors', 'Rock'];

    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array[0];
}

let getComputerChoice = () => shuffle();

function playRound(playerSelection, computerSelection) {
    let winner = 'player';
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        draw();
        winner = 'draw'
    } else {
    (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ? playerRoundWinner(playerSelection, computerSelection) :
    (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") ? playerRoundWinner(playerSelection, computerSelection) :
    (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") ? playerRoundWinner(playerSelection, computerSelection) : 
    computerRoundWinner(playerSelection, computerSelection, winner = 'computer');
    }
    return winner;
}

let playerRoundWinner = (playerSelection, computerSelection) => console.log(`You win! ${playerSelection} beats ${computerSelection}`);
let computerRoundWinner = (playerSelection, computerSelection) => console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
let draw = () => console.log('Draw!');

function game() {
    let totalWins = 0, nPlayerWins = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        let playerSelection = prompt("Please enter rock, paper, or scissors");
        winner = playRound(playerSelection, computerSelection);
        
        if (winner != "draw") {
            if (winner === "player") {
                nPlayerWins++;
            }
            totalWins++;
        }
    }
    (nPlayerWins > totalWins / 2) ? console.log("You won the game!") : nPlayerWins == totalWins ? (console.log("The game is a draw!")) : console.log("You lost the game!");
}