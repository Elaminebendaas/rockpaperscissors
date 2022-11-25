function playRound(playerSelection, computerSelection){
    let player = playerSelection
    let game = document.getElementById('status')

    if(player === computerSelection){
        return "Draw!"
    }else if(player == "rock"){
        if(computerSelection == "paper"){
            computerWins ++
            return game.innerHTML = "AI selected Paper. AI WINS!"
        }else{
            playerWins++
            return game.innerHTML = `You win! AI Selected ${computerSelection}`
        }
    }else if(player == "paper"){
        if(computerSelection == "scissors"){
            computerWins ++
            return game.innerHTML = "AI selected Scissors. AI WINS!"
        }else{
            playerWins++
            return game.innerHTML = `You win! AI Selected ${computerSelection}`
        }
    }else if(player == "scissors"){
        if(computerSelection == "rock"){
            computerWins ++
            return game.innerHTML = "AI selected rock. AI WINS!" 
        }else{
            playerWins++
            return game.innerHTML = `You win! AI Selected ${computerSelection}`
        }
    }
}
//rock paper scissors
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



let playerSelection
document.getElementById('rock').addEventListener("click", function(){
    playerSelection = "rock"
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    document.getElementById('computer-wins').innerHTML = `Computer Wins: ${computerWins}`
    document.getElementById('player-wins').innerHTML = `Your Wins: ${playerWins}`
})
document.getElementById('paper').addEventListener("click", function(){
    playerSelection = "scissors"
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    document.getElementById('computer-wins').innerHTML = `Computer Wins: ${computerWins}`
    document.getElementById('player-wins').innerHTML = `Your Wins: ${playerWins}`
})
document.getElementById('scissors').addEventListener("click", function(){
    playerSelection = "scissors"
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    document.getElementById('comp-wins').innerHTML = `Computer Wins: ${computerWins}`
    document.getElementById('player-wins').innerHTML = `Your Wins: ${playerWins}`
})

var computerWins = 0
var playerWins = 0





