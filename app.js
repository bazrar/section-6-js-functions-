const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK'; 
const RESULT_DRAW = 'DRAW'; 
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS'; 

let gameIsRunning = false; 

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK} ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();

    if(selection !== ROCK && selection !==PAPER && selection !== SCISSORS) {
        alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you`); 
        return DEFAULT_USER_CHOICE;
    }
    return selection;   
};

const getComputerChoice = () => {
    const randomValue = Math.random(); 
    if(randomValue < 0.34) {
        return ROCK; 
    } else if(randomValue < 0.67) {
        return PAPER; 
    } else {
        return SCISSORS;
    }
};

// const printNumber = num => console.log(num);

const getWinner = (playerSelection, computerSelection) => 
        playerSelection === computerSelection ? RESULT_DRAW : 
        playerSelection === ROCK && computerSelection === SCISSORS || 
        playerSelection === PAPER && computerSelection === ROCK || 
        playerSelection === SCISSORS && computerSelection === PAPER ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS
  
    // if(playerSelection === computerSelection) {
    //     return RESULT_DRAW; 
    // } else if(
    //     playerSelection === ROCK && computerSelection === SCISSORS || 
    //     playerSelection === PAPER && computerSelection === ROCK || 
    //     playerSelection === SCISSORS && computerSelection === PAPER
    //     ) {
    //         return RESULT_PLAYER_WINS;
    //     } else {
    //         return RESULT_COMPUTER_WINS; 
    //     }

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning) {
        return;
    }
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice(); 
    const result = getWinner(playerSelection, computerSelection); 
    let message = `You have picked ${playerSelection}, Computer has picked ${computerSelection}. Therefore,`;
    if(result === RESULT_DRAW) {
        message += 'you have a draw';
    } else if(result === RESULT_PLAYER_WINS) {
        message += 'the Player wins'; 
    } else {
        message += 'the computer wins';
    }
    alert(message); 
}); 
