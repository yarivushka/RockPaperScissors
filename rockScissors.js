const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    console.log(computerPlay());
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    console.log(computerPlay());
});
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    console.log(computerPlay());
});

function computerPlay() {//Function to randomly return computers' cohice beteen rock/paper/scissors.

    let random = Math.random();
    if (random <= 0.333 && random >= 0) {
        return 'ROCK';
    } else if (random > 0.333 && random <= 0.666) {
        return 'PAPER';
    } else if (random >= 0.666) {
        return 'SCISSORS';
    }




/*let plyrScore = 0;
    let compScore = 0;
    const computerSelection = computerPlay();
    let result;

        

    
    function Round(playerSelection) {    //Individual round to evaluate comp's/player's choices and result winner.
        
        if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
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
        } else if (computerSelection === playerSelection){
            result = 'Tie';
            }
        console.log(`You Chose: ${playerSelection}; compChoice is ${computerSelection}`);
        console.log(result);
        console.log(`player score is ${plyrScore}`); console.log(`computer score is ${compScore}`);


        function computerPlay() {//Function to randomly return computers' cohice beteen rock/paper/scissors.

            let random = Math.random();
            if (random <= 0.333 && random >= 0) {
                return 'ROCK';
            } else if (random > 0.333 && random <= 0.666) {
                return 'PAPER';
            } else if (random >= 0.666) {
                return 'SCISSORS';
            }
        }
    } 
    
    
    if (plyrScore == 5) {
        console.log ('END GAME: YOU WIN!!!!!(:');
    } else if ( compScore == 5) {
        console.log ('END GAME:YOU LOSE!):');
    }

    const rock = document.querySelector('.rock');
    rock.addEventListener('click', () => {
        Round('ROCK');
    })
    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', () => {
        Round('SCISSORS');
    })
    
    const paper = document.querySelector('.paper');
    paper.addEventListener('click', () => {
        Round('PAPER');
    })
*/