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