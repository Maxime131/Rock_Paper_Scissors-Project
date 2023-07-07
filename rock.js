function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
  }



  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
      return "You lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      return "You win! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      return "You win! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      return "You lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      return "You lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
      return "You win! Scissors beats Paper";
    } else if (playerSelection == computerSelection) {
      return "You are tie!!!";
    }
  }


  function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Enter Rock, Paper or Scissors - CaseSensetive").toLowerCase();
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  game();