// Function to get a random choice for the computer
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

// Function to handle user choice
function handleUserChoice(choice) {
    let computerChoice = getComputerChoice();
    let result = determineOutcome(computerChoice, choice);

    // Update the UI with the results
    document.getElementById('user-choice-value').textContent = choice;
    document.getElementById('computer-choice-value').textContent = computerChoice;
    document.getElementById('outcome-value').textContent = result;
}

// Function to determine the outcome of the game
function determineOutcome(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        return "Draw";
    } else if (
        (computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "rock")
    ) {
        return "Win";
    } else {
        return "Lose";
    }
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', () => handleUserChoice('rock'));
document.getElementById('paper').addEventListener('click', () => handleUserChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => handleUserChoice('scissors'));
