//Function ro randomly return computers' cohice beteen rock/paper/scissors.
function computerPlay() {
    let random = Math.random();
    if (random <= 0.333 && random > 0) {
        return 'ROCK';
    } else if (random > 0.333 && random <= 0.666) {
        return 'PAPER';
    } else if (random > 0.666) {
        return 'SCISSORS';
    }    
}

//Main function to generate game.
function game() {
    
    let result;
    let plyrScore = 0;
    let compScore = 0;
    for(let i = 0; i < 7; i++) {
    
    //Individual game-round to evaluate comp's/player's choices and output result.
    function Round(playerSelection, computerSelection) {
        
        if (computerSelection === playerSelection){
        result = 'Tie';
        } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        compScore += 1;
        result = 'You lose! ROCK beats SCISSORS!';
        } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        compScore += 1;
        result = 'You lose! SCISSORS beats PAPER!';
        } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        compScore += 1;
        result = 'You lose! PAPER beats ROCK!';
        } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        plyrScore += 1;
        result = 'You WIN! SCISSORS beats PAPER!';
        } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        plyrScore += 1;
        result = 'You WIN! ROCK beats SCISSORS!';
        } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        plyrScore += 1;
        result = 'You WIN! PAPER beats ROCK!';
        }
        console.log(`You Chose: ${playerSelection}; compChoice is ${computerSelection}`);
        console.log(result);
        console.log(`player score is ${plyrScore}`); console.log(`computer score is ${compScore}`);
    }

    const playerSelection = prompt("Please choose: Rock, scissors,paper?").toUpperCase();
    const computerSelection = computerPlay();
    Round(playerSelection, computerSelection);
    } if (plyrScore > compScore) {
        console.log ('END GAME: YOU WIN!!!!!(:');
    } else if ( compScore > plyrScore) {
        console.log ('END GAME:YOU LOSE!):');
    } else {
        console.log('END GAME: Tie');
    }
}
game();