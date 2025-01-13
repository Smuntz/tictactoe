

function getComputerChoice() {
    hand = Math.floor(Math.random() * 3 );

    if (hand === 0) {
        console.log("Rock");
    } else  if (hand === 1) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }

}

console.log(getComputerChoice());