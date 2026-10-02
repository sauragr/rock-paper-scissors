// // console.log("Hello World")

// function getComputerChoice(){
//     probabiltiy = Math.random()
//     if (probabiltiy < 0.33){
//         return "rock"
//     }
//     if (probabiltiy < 0.66){
//         return "paper"
//     }
//     if (probabiltiy < 1){
//         return "scissors"
//     }
//  }

// //  console.log(getComputerChoice())

// // const paper_choice = document.querySelector(".paper")
// // const rock_choice = document.querySelector(".rock") 
// // const scissors_choice = document.querySelector(".scissors") 
// const span = document.querySelector("#menu")

// function getHumanChoice(span){
//     // choice = prompt("What's your Move")
//     // event.preventDefault()
//     span.addEventListener('click', (event) => {
//         let target = event.target

//         switch(target.id) {
//             case 'rock':
//                 console.log("Choice is Rock")
//                 return 'rock'
//             case 'paper':
//                 console.log("Choice is Paper")
//                 return 'paper'
//             case 'scissors':
//                 console.log("Choice is scissors")
//                 return 'scissors'
//         }
//     })
//     // return choice
// }

// let humanscore = 0
// let computerscore = 0
// const score_tracker = document.createElement("div")
// const body = document.querySelector("body")

// while (humanscore != 5 && computerscore != 5) {
//     let humanchoice = getHumanChoice(span)
//     let computerchoice = getComputerChoice()

//     if (humanchoice === "rock" && computerchoice === "scissors"){
//         humanscore += 1
//     } else if (humanchoice === "paper" && computerchoice === "rock") {
//         humanscore += 1
//     } else if (humanchoice === "scissors" && computerchoice === "paper") {
//         humanscore += 1
//     } else {
//         computerscore += 1
//     }

//     score_tracker.textContent = `Your Score is ${humanscore} and Computer Score is ${computerscore}`
//     body.appendChild(score_tracker)

    

    
// }


// State variables to track game progress
let humanScore = 0;
let computerScore = 0;
const targetScore = 5;

// DOM Elements
const menu = document.querySelector("#menu");
const scoreTracker = document.querySelector("#score");
const resultsContainer = document.querySelector("#results");

// Function to generate computer choice
function getComputerChoice() {
    const probability = Math.random();
    if (probability < 0.33) {
        return "rock";
    } else if (probability < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to evaluate a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}.`;
    }

    const isHumanWinner = 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    if (isHumanWinner) {
        humanScore += 1;
        return `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore += 1;
        return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
}

// Event listener driving the game flow
menu.addEventListener("click", (event) => {
    // Stop responding to clicks once a winner has been crowned
    if (humanScore >= targetScore || computerScore >= targetScore) {
        return;
    }

    // Identify which button was clicked
    const humanChoice = event.target.id;

    // Guard against clicks on the span container background
    if (!["rock", "paper", "scissors"].includes(humanChoice)) {
        return;
    }

    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    // Update the UI
    resultsContainer.textContent = roundResult;
    scoreTracker.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

    // Check for game completion
    if (humanScore === targetScore) {
        resultsContainer.textContent = "🎉 Congratulations! You won the game!";
    } else if (computerScore === targetScore) {
        resultsContainer.textContent = "💻 Game over! The computer won.";
    }
});