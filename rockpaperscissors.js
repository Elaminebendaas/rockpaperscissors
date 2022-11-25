function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    if(player === computerSelection){
        return "Draw!"
    }else if(player == "rock"){
        if(computerSelection == "paper"){
            return "AI selected Paper. AI WINS!"
        }else{
            return `You win! AI Selected ${computerSelection}`
        }
    }else if(player == "paper"){
        if(computerSelection == "scissors"){
            return "AI selected Scissors. AI WINS!"
        }else{
            return `You win! AI Selected ${computerSelection}`
        }
    }else if(player == "scissors"){
        if(computerSelection == "rock"){
            return "AI selected rock. AI WINS!"
        }else{
            return `You win! AI Selected ${computerSelection}`
        }
    }
//rock paper scissors
}
function getComputerChoice(){
    let num
    let choice
    num = Math.floor(Math.random()*3)
    if(num == 0){
        choice = "rock"
    }else if (num == 1){
        choice = "paper"
    }else if (num = 2){
        choice = "scissors"
    }
    console.log(num)
    return choice
}

const rounds = prompt("How many rounds would you like to play")
for(i = 0; i<rounds; i++){
    const playerSelection = prompt("Rock, paper, or scissors! (Pick one)")
    let computerSelection = getComputerChoice()
    alert(playRound(playerSelection, computerSelection))
}