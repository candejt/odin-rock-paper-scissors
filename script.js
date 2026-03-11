

let humanScore = 0
let computerScore = 0

const div=document.createElement("div")
div.textContent="Click to Play"
document.body.appendChild(div)

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

function playRound (human,computer){
    human=human.toLowerCase()
    if (human === "paper"&& computer==="rock"){
        humanScore++
        console.log ("You win! Paper beats rock")
        console.log ("Score -> HUMAN: " + humanScore + " -Computer: " + computerScore)
     }else if (human==="paper" && computer=="scissors"){
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

    div.textContent="Score -> HUMAN: " + humanScore + " -Computer: " + computerScore
    if (humanScore===5){
        div.textContent="You are the WINNER!"
        return
       
    }else if(computerScore===5){
        div.textContent="Computer wins human"
        return
}}
    

btnRock.addEventListener("click", ()=>{
    playRound("rock", getComputerChoice())
})
btnPaper.addEventListener("click", ()=>{
    playRound("paper", getComputerChoice())
})
btnScissors.addEventListener("click", ()=>{
    playRound("scissors", getComputerChoice())
})

