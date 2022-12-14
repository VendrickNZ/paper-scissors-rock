let totalWins = 0, nPlayerWins = 0, GAME_WON = false;

let capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

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
    if (GAME_WON) {
        return;
    }
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

let playerRoundWinner = (playerSelection, computerSelection) => document.getElementById('results').innerHTML = (`You win! ${capitalizeWord(playerSelection)} beats ${capitalizeWord(computerSelection)}`);
let computerRoundWinner = (playerSelection, computerSelection) => document.getElementById('results').innerHTML = (`You lose! ${capitalizeWord(computerSelection)} beats ${capitalizeWord(playerSelection)}`);
let draw = () => document.getElementById('results').innerHTML = "Draw!";


//for command line interface/console
function game() {
    let totalWins = 0, nPlayerWins = 0;
    computerSelection = getComputerChoice();
    let playerSelection = prompt("Please enter rock, paper, or scissors");
    winner = playRound(playerSelection, computerSelection);
    
    if (winner != "draw") {
        if (winner === "player") {
            nPlayerWins++;
        }
        totalWins++;
    }
    (nPlayerWins > totalWins / 2) ? console.log("You won the game!") : nPlayerWins == totalWins ? (console.log("The game is a draw!")) : console.log("You lost the gamecd!");
}

const paper = document.getElementById("paper");
paper.addEventListener('click', () => {
    winner = playRound("paper", getComputerChoice())
    scoreTally()
});

const scissors = document.getElementById("scissors");
scissors.addEventListener('click', () => {
    winner = playRound("scissors", getComputerChoice())
    scoreTally()
});

const rock = document.getElementById("rock");
rock.addEventListener('click', () => {
    winner = playRound("rock", getComputerChoice())
    scoreTally()
});

const playAgainButton = document.getElementById("play-again");
playAgainButton.addEventListener('click', () => playAgain())

let scoreTally = () => {
    if (winner != "draw") {
        if (winner === "player") {
            nPlayerWins++;
        }
        totalWins++;
    }

    if (nPlayerWins >= 5) {
        let button = document.getElementById("play-again");
        button.style.display = "block";
        GAME_WON = true;
        document.getElementById('score').innerHTML = "You won the game!"
        document.getElementById('result').innerHTML = ""

    }

    if (totalWins - nPlayerWins >= 5) { 
        let button = document.getElementById("play-again");
        button.style.display = "block";
        GAME_WON = true;
        document.getElementById('score').innerHTML = "You lost the game!"
        document.getElementById('result').innerHTML = ""

    }

    document.getElementById('score').innerHTML = (`${nPlayerWins} - ${totalWins - nPlayerWins}`)
}

function playAgain() {
    GAME_WON = false;
    totalWins = 0; 
    nPlayerWins = 0;

    let button = document.getElementById("play-again");
    button.style.display = "none";
    
    document.getElementById('score').innerHTML = "0 - 0"
    document.getElementById('result').innerHTML = ""

    console.log(GAME_WON, totalWins, nPlayerWins);

}

let button = document.getElementById("play-again");
button.style.display = "none";