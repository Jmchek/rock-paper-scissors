console.log("Hello there");

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

console.log(getComputerChoice());

// random number
// if the random number is 1-33 return rock
// if 34 - 66 return Paper
// if 66-99 return scissors