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
    console.log(playerSelection, computerSelection)
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        draw()
    } else {
    (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ? playerRoundWinner(playerSelection, computerSelection) :
    (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") ? playerRoundWinner(playerSelection, computerSelection) :
    (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") ? playerRoundWinner(playerSelection, computerSelection) : 
    computerRoundWinner(playerSelection, computerSelection);
    }
}

let playerRoundWinner = (playerSelection, computerSelection) => console.log(`You win! ${playerSelection} beats ${computerSelection}`);
let computerRoundWinner = (playerSelection, computerSelection) => console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
let draw = () => console.log('Draw!')