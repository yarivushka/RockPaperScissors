
function gameRound () {
    
    if (playerSelection === computerSelection) {
        result  = `Round winner:TIE\n(${playerSelection} vs ${computerSelection})`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        result  = `Round winner: ${userName}\n(Scissors beats Paper)`;
        plyrScore += 1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        result  = 'Round winner: Comp\n(Rock beats Scissors)';
        compScore += 1;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        result  = 'Round winner: Comp\n(Paper beats Rock)';
        compScore += 1;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        result  = `Round winner: ${userName}\n(Rock beats Scissors)`;
        plyrScore += 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        result  = `Round winner: ${userName}\n(Paper beats Rock)`;
        plyrScore += 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        result  = 'Round winner: Comp\n(Scissors beats Paper)';
        compScore += 1;
    }
    msg.style.color = 'rgb(16, 13, 14)';
    msg.textContent = `${result}`;
    score.textContent = `comp: ${compScore} : ${userName}: ${plyrScore}`;
    if (compScore == 5 || plyrScore == 5) {
        if (compScore > plyrScore) {
            endGame('comp')
        } else {
            endGame(userName)
        }
    }
}

function endGame(winner) {
    endMsg.setAttribute('style', 'color: yellow; background: black; border: 4px solid red; width: 25%; height: 10%; font-weight: bold; text-align: center; font-size: 24px; padding-top: 25px; margin-top: 15px; border-radius: 8px;')
    endMsg.textContent = ('NEW GAME?')
    body.appendChild(endMsg);
    msg.style.color = 'yellow'
    msg.textContent = (`GAME OVER: ${winner} WINS (:`);
    compScore = 0; plyrScore = 0;
}

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return 'Scissors'
    } else if (random == 1) {
        return 'Rock'
    } else if (random == 2) {
        return 'Paper'
    }
}


const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    //audio.play();
    playerSelection = 'Scissors';
    computerSelection = computerPlay();
    gameRound();
})
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    //audio.play();
    playerSelection = 'Rock';
    computerSelection = computerPlay();
    gameRound();
})
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    //audio.play();
    gameRound();
})
const body = document.querySelector('.body');
const endMsg = document.createElement('div');
endMsg.addEventListener('click', () => {
    body.removeChild(endMsg);
    msg.textContent = ('NEW GAME!');
    score.textContent = `comp: 0 : ${userName}: 0`;
});
const buttons = document.querySelectorAll('.btn');
const msg = document.querySelector('.msg');
const score = document.querySelector('.score');
//const audio = document.querySelector('audio');
let compScore = 0;
let plyrScore = 0;
let result;
let playerSelection = '';
let computerSelection = '';
const userName = prompt('Please enter your name', 'Player')
