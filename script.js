let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    hand = Math.floor(Math.random() * 3);

    if (hand === 0) {
        hand = "Rock";
    } else if (hand === 1) {
        hand = "Paper";
    } else {
        hand = "Scissors";
    }
    return computerChoice = hand.toLowerCase();
}

function getHumanChoice() {
    humanChoice = prompt("Choose: Rock Paper Scissors?");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("Draw! Play again")
    } else if (humanChoice === "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You WIN! Rock beasts Scissors")
    } else if (humanChoice === "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You WIN! Paper beasts Rock")
    } else if (humanChoice === "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You WIN! Scissors beasts Paper")
    } else {
        computerScore++;
        console.log(`You Loose! ${computerChoice} beasts ${humanChoice}`)
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Score is You: ${humanScore} Computer: ${computerScore}`);
        if (i < 4) {
            alert("Next Round?");
        }
    }
    if (humanScore > computerScore) {
        alert("You Win! Play Again?")
    } else if (humanScore < computerScore) {
        alert("You Lose! Play again?")
    } else {
        alert("Final Score: Draw! Play again")
    }
    humanScore = 0;
    computerScore = 0;
    playGame();
}

playGame();


