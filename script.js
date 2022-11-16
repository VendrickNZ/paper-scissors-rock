function shuffle() {
    array = ['Paper', 'Scissors', 'Rock']

    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array[0];
}

let getComputerChoice = () => shuffle()

function playRound(playerSelection, computerSelection) {
    
}