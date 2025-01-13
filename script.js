let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    hand = Math.floor(Math.random() * 3 );

    if (hand === 0) {
        hand = "Rock";
    } else  if (hand === 1) {
        hand = "Paper";
    } else {
        hand = "Scissors";
    }
    return computerChoice = hand;
}

function getHumanChoice() {
return humanChoice = prompt("Rock Paper Scissors?");

}

getHumanChoice();
getComputerChoice() 

console.log("Human: " + humanChoice);
console.log("Computer: " + computerChoice);
