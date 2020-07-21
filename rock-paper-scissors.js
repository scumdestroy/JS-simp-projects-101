const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' | userInput === 'Rock' | userInput === 'paper' | userInput === 'Paper' | userInput === 'scissors' | userInput === 'Scissors') {return userInput;
  } else {
    console.log("ERROR!!")
   }

};

function getComputerChoice() {
  randomNumber = Math.floor(Math.random()* 3) ;
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Twas a tie.';
    }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
  } else {
      return 'You won!';
  }
}
   if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';}
      else {
        return 'You won!';
      }
   }
   if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return 'The computer won!';} 
      else {
        return 'You won!';}
    }
    if (userChoice === 'bomb'){
      return 'Win by annihilation'
    }
  }
      
function playGame(userChoice = getUserChoice(), computerChoice = getComputerChoice()){
  console.log(userChoice)
  console.log(computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}



playGame('bomb', 'rock')
