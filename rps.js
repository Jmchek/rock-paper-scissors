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
        return "Tied! Try again :|";
    }
  }


function game() {
    let playerScore = 0;
    let compScore = 0;
    let winner = "Player";
    //const computerSelection = getComputerChoice();
    let playerSelection = "";
    let match;
    
    //dom vars here
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const para = document.createElement('p');
    const outcomePara = document.createElement('p');
    

    body.appendChild(div);

    div.appendChild(para);
    para.textContent = "Computer: " + compScore + " Player: " + playerScore;

    div.appendChild(outcomePara);

    //find player's choice through buttons
    const btnPlayer = document.querySelectorAll('button');
    btnPlayer.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
          match = playRound(button.textContent, getComputerChoice());
        //   console.log(button.textContent);
        //   console.log(typeof match);
          console.log(match.search("Win"));
          console.log(match.search("Lose"));
        //   console.log(playRound(button.textContent, getComputerChoice()));
          if (match.search("Win") > 0) {
                playerScore++;
                para.textContent = "Computer: " + compScore + " Player: " + playerScore;
            } else if (match.search("Lose") > 0){
                compScore++;
                para.textContent = "Computer: " + compScore + " Player: " + playerScore;
            } 
        });
      });

    //loop game 5 times and ask each time and determine winner
    // beginning portion refactored for UI
    // for (let i = 0; i < 5; i++) {
        //const playerSelection = prompt("Please enter Rock, Paper, or Scissors");
        //const computerSelection = getComputerChoice();

        // let match = playRound(playerSelection, computerSelection);
        // console.log(match);

        // if (match.match("Win")) {
        //     playerScore++;
        // } else if (match.match("Lose")) {
        //     compScore++;
        // } else {}

    // }
    
    
    
    


    // console.log("Computer: " + compScore + " Player: " + playerScore);

    // if (playerScore > compScore) {
    //     outcomePara.textContent = "And the winner of the match goes to: " + winner;
    // } else if (compScore > playerScore) {
    //     winner = "Computer";
    //     outcomePara.textContent = "And the winner of the match goes to: " + winner;
    // } else {
    //     outcomePara.textContent = "Looks like a tie, boo";
    // }

    
}

game();