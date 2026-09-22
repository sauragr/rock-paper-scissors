console.log("Hello World")

function getComputerChoice(){
    probabiltiy = Math.random()
    if (probabiltiy < 0.33){
        return "rock"
    }
    if (probabiltiy < 0.66){
        return "paper"
    }
    if (probabiltiy < 1){
        return "scissors"
    }
 }

//  console.log(getComputerChoice())

function getHumanChoice(){
    choice = prompt("What's your Move")
    return choice
}

// console.log(getHumanChoice())

let HumanScore = 0 
let ComputerScore = 0

function PlayGround(humanChoice, ComputerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && ComputerChoice === "scissors"){
        HumanScore += 1;
        console.log("You Win! rock beats scissors");
    }
    else if (humanChoice === "paper" && ComputerChoice === "rock"){
        HumanScore += 1;
        console.log("You win! Paper beats Rock");
    }
    else if (humanChoice === "scissors" && ComputerChoice === "paper"){
        HumanScore += 1;
        console.log("You Win! scissors beats paper");
    }
    else {
        ComputerScore += 1;
        console.log(`You lose! ${ComputerChoice} beats ${humanChoice}`);
    }
}

PlayGround("rock", "paper")
