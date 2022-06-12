
function gameRound () {

    if (playerSelection === computerSelection) {
        result  = `TIE (${playerSelection} vs ${computerSelection})`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        result  = 'YOU WON (Scissors beats Paper)';
        plyrScore += 1;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        result  = 'YOU LOSE (Rock beats Scissors)';
        compScore += 1;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        result  = 'YOU LOSE (Paper beats Rock)';
        compScore += 1;
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        result  = 'YOU WON (Rock beats Scissors)';
        plyrScore += 1;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        result  = 'YOU WON (Paper beats Rock)';
        plyrScore += 1;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        result  = 'YOU LOSE (Scissors beats Paper)';
        compScore += 1;
    }
    msg.textContent = `${result}`;
    score.textContent = `comp: ${compScore} : ${userName}: ${plyrScore}`;
    if (compScore == 5 || plyrScore == 5) {
        if (compScore > plyrScore) {
            
            msg.textContent = ('GAME OVER: YOU LOSE ):');
        compScore = 0; plyrScore = 0;
        } else {
            msg.textContent = ('GAME OVER: YOU WIN (:');
        compScore = 0; plyrScore = 0;
        
        }
    }
}

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return 'SCISSORS'
    } else if (random == 1) {
        return 'ROCK'
    } else if (random == 2) {
        return 'PAPER'
    }
}


const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    //audio.play();
    playerSelection = 'SCISSORS';
    computerSelection = computerPlay();
    gameRound();
})
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    //audio.play();
    playerSelection = 'ROCK';
    computerSelection = computerPlay();
    gameRound();
})
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection = 'PAPER';
    computerSelection = computerPlay();
    //audio.play();
    gameRound();
})

const msg = document.querySelector('.msg');
const score = document.querySelector('.score');
//const audio = document.querySelector('audio');
let compScore = 0;
let plyrScore = 0;
let result;
let playerSelection = '';
let computerSelection = '';
const userName = prompt('Please enter your name', name)
