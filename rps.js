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



function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase();
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
        return "Tied! Try again :|";
    }
  }


function game() {
    let playerScore = 0;
    let compScore = 0;
    let winner = "Player";
    let playerSelection = "";
    let match;
    
    //dom vars here
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const para = document.createElement('p');
    const outcomePara = document.createElement('p');
    const winnerWinner = document.createElement('p');

    body.appendChild(div);

    //scoreboard
    div.appendChild(para);
    para.textContent = "Computer: " + compScore + " Player: " + playerScore;

    //match outcome
    div.appendChild(outcomePara);
    outcomePara.textContent = "";

    //final score
    div.appendChild(winnerWinner);
    winnerWinner.textContent = "";

    //find player's choice through buttons
    const btnPlayer = document.querySelectorAll('button');
    btnPlayer.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
          match = playRound(playerSelection = button.textContent, computerSelection = getComputerChoice());
          if (match.search("Win") > 0) {
                playerScore++;
                para.textContent = "Computer: " + compScore + " Player: " + playerScore;
                outcomePara.textContent = "Computer's choice is " + computerSelection + " and the player chose: " + playerSelection;
            } else if (match.search("Lose") > 0){
                compScore++;
                para.textContent = "Computer: " + compScore + " Player: " + playerScore;
                outcomePara.textContent = "Computer's choice is " + computerSelection + " and the player chose: " + playerSelection;
            } else {
                outcomePara.textContent = "Computer's choice is " + computerSelection + " and the player chose: " + playerSelection + ". A tie!";
            }
            //outcome
            if (playerScore == 5) {
                winnerWinner.textContent = "And the winner of the match goes to: " + winner + "!";
            } else if (compScore == 5) {
                winner = "Computer";
                winnerWinner.textContent += "And the winner of the match goes to: " + winner + "!";
            }
        });
      });

    
}

game();