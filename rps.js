const playerSelection = prompt("Please enter Rock, Paper, or Scissors");
const computerSelection = getComputerChoice();



function getComputerChoice() {
    //randomly return Rock, Paper, or Scissors
    let randomNum = Math.floor(Math.random() * 100);

    if (randomNum <= 33) {
        return "Rock";
    } else if (randomNum > 33 && randomNum <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}



//player enters choice DONE
// computer enters random choice DONE
// player choice is ranked against computer's

// Winner variable to determine if player won or not or if comp won or not- variable
// if player wins You win! x beats y
// if they lose You lose! y beats x
// else if both player and comp match: Tied! Try again
//          player puts in (case),
//                      switch! case rock { 
//                       if (comps choice is paper) return compWins and !playerWins;   
//                      else if (comps choice is scissors) return !compWins and playerWins;
//                             else return falsy for both
// }
//                              case paper { run same to determine }
//                              case scissors {stuff}
//                              all return truthy values to playRound()
// determine who wins
// output the winner
//
//
//
//
//
//
//
//
//
//
//
//
//



function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase();
    console.log("Computer's choice is " + computerSelection + " and the player chose: " + playerSelection);
    let playerWins = false;
    let compWins = false;

    //Switch case here to determine the winner and loser, or neither
    switch(playerChoice) {
        case 'rock': {
            if(computerSelection == "Paper") {
               compWins = true;
            } else if (computerSelection == "Scissors") {
                playerWins = true;
            } else {}
        }
        break;
        case 'scissors': {
            if(computerSelection == "Paper") {
                playerWins = true;
             } else if (computerSelection == "Rock") {
                 compWins = true;
             } else {}
        }
        break;
        case 'paper': {
            if(computerSelection == "Rock") {
                playerWins = true;
             } else if (computerSelection == "Scissors") {
                 compWins = true;
             } else {}
        }
        break;
    }



    // Output the winner and why
    if (playerWins && !compWins) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (!playerWins && compWins) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "Tied! Try again :|"
    }
  }
   

console.log(playRound(playerSelection, computerSelection));

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// write the function
// ask the player for the choice
// throw the choice into playRound()
// determine a score for both the player and the comp
// if player wins add a point and vice versa for comp
// once done determine who is overall winner