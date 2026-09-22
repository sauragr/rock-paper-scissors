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

let HumanScore, ComputerScore = 0, 0