function getComputerChoice (){
    let computerChoice = Math.floor(Math.random()*3)
    if (computerChoice===0){
        return "rock"
    }else if (computerChoice===1){
        return "paper"
    }else{
        return "scissors"
    }
}
function getHumanChoice (){
    let humanChoice = prompt("Play: Rock, Paper, Scissors");
    return humanChoice
}
function playGame (){

    let humanScore = 0
    let computerScore = 0

   /*simplificar funcion*/
    function playRound (human,computer){
        human=human.toLowerCase()
        if (human === "paper"&& computer==="rock"){
            humanScore++
            console.log ("You win! Paper beats rock")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        } else if (human==="paper" && computer=="scissors"){
            computerScore++
            console.log ("You lose! Scissors beats paper")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        }else if (human==="paper" && computer==="paper"){
            console.log("Tie! Play again!")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        } else if (human==="rock" && computer=="paper"){
            computerScore++
            console.log ("You lose! Paper beats rock")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        }else if (human==="rock" && computer==="scissors"){
            humanScore++
            console.log("You win!Rock beats scissors")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        }else if (human==="rock" && computer==="rock"){
            console.log("Tie! Play again!")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        } else if (human==="scissors" && computer=="paper"){
            humanScore++
            console.log ("You win! Scissors beats paper")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        }else if (human==="scissors" && computer==="rock"){
            computerScore++
            console.log("You lose!Rock beats scissors")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        }else {
            console.log("Tie! Play again!")
            console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
        }
    }
    
    for (let i=0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
    
    console.log ("THE END")
    console.log ("Final Score -> Human: "+humanScore+ "-Computer: "+computerScore)
    if (humanScore>computerScore){
        console.log("You are the WINNER!")
    }else if (humanScore<computerScore){
        console.log("Better luck next time LOOSER")
    }
    else{
        console.log("It's a TIE! do you want to try again?")
    }
}

playGame()


const btnRock=document.createElement("button")
const btnPaper=document.createElement("button")
const btnScissors=document.createElement("button")

btnRock.textContent="Rock"
btnPaper.textContent="Paper"
btnScissors.textContent="Scissors"

const body = document.querySelector("body")
body.appendChild(btnRock)
body.appendChild(btnPaper)
body.appendChild(btnScissors)

