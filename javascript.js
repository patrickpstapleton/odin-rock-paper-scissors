const ROCK = "Rock"
const PAPER = "Paper"
const SCISSORS = "Scissors"

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3)
  switch (x) {
    case 0 : 
      return ROCK
    case 1 : 
      return PAPER
    case 2 :
      return SCISSORS
    default :
      throw console.error("Error: Computer has made an invalid choice");
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelectionHead = playerSelection.substring(0,1).toUpperCase()
  playerSelectionTail = playerSelection.substring(1).toLowerCase()
  playerPick = playerSelectionHead + playerSelectionTail

  if (playerPick == computerSelection) {
    return `It's a tie! Both picked ${playerPick}`
  }
  else if (playerPick == ROCK) {
    if (computerSelection == SCISSORS) {
      return `Player wins! Rock beats scissors`
    }
    else {
      return `Computer wins! Paper beats rock`
    }
  }
  else if (playerPick == PAPER) {
    if (computerSelection == SCISSORS) {
      return `Computer wins! Scissors beats paper`
    }
    else {
      return `Player wins! Paper beats rock`
    }
  }
  else {
    if (computerSelection == PAPER) {
      return `Player wins! Scissors beats paper`
    }
    else {
      return `Computer wins! Rock beats scissors`
    }
  }
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));