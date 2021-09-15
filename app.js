// const startGameBtn = document.getElementById('start-game-btn');
// const ROCK = 'ROCK';
// const PAPER = 'PAPER';
// const SCISSORS = 'SCISSORS';
// const DEFAULT_USER_CHOICE = 'ROCK'; 
// const RESULT_DRAW = 'DRAW'; 
// const RESULT_PLAYER_WINS = 'PLAYER WINS';
// const RESULT_COMPUTER_WINS = 'COMPUTER WINS'; 

// let gameIsRunning = false; 

// const getPlayerChoice = () => {
//     const selection = prompt(`${ROCK} ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();

//     if(selection !== ROCK && selection !==PAPER && selection !== SCISSORS) {
//         alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you`); 
//         return;
//     }
//     return selection;   
// };

// const getComputerChoice = () => {
//     const randomValue = Math.random(); 
//     if(randomValue < 0.34) {
//         return ROCK; 
//     } else if(randomValue < 0.67) {
//         return PAPER; 
//     } else {
//         return SCISSORS;
//     }
// };

// const printNumber = num => console.log(num);
// bad practise (playerSelection = DEFAULT_USER_CHOICE, computerSelection) 
// const getWinner = (computerSelection, playerSelection = DEFAULT_USER_CHOICE) => 
//         playerSelection === computerSelection ? RESULT_DRAW : 
//         playerSelection === ROCK && computerSelection === SCISSORS || 
//         playerSelection === PAPER && computerSelection === ROCK || 
//         playerSelection === SCISSORS && computerSelection === PAPER ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS
  
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

// startGameBtn.addEventListener('click', () => {
//     console.log(this);
//     if(gameIsRunning) {
//         return;
//     }
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice(); 
//     let message = `You have picked ${playerSelection || DEFAULT_USER_CHOICE}, Computer has picked ${computerSelection}. Therefore,`;
//     let result;

//     if(playerSelection) {
//         result = getWinner(computerSelection, playerSelection); 
//     } else {
//         result = getWinner(computerSelection); 
//     }

//     if(result === RESULT_DRAW) {
//         message += 'you have a draw';
//     } else if(result === RESULT_PLAYER_WINS) {
//         message += 'the Player wins'; 
//     } else {
//         message += 'the Computer wins';
//     }
//     alert(message); 
// }); 

// REST operators
// const sumUp = (...values) => {
//     const validateNumber = (number) => isNaN(number) ? 0 : number; 
//     return values.reduce((acc, next) => {
//         next = validateNumber(next); 
//         return acc + next; 
//     });   
// }

// const sums = (cb, ...values) => {
//     const newValue = [...values].map(value => value * 2);
//     cb(newValue); 
// };

// const printSums = (values) => {
//     console.log(values); 
// };

// sums(printSums, 1,2,3,4,5);

// const sumUp = (callback, ...args) => {
//     const total = args.reduce((prev,current) => prev + current);
//     callback(total, 'adding'); 
// };

// const subtractUp = (callback, ...args) => {
//     const total = args.reduce((prev, current) => prev - current); 
//     callback(total, 'subtracting'); 
// }

const operation = (callback, operation, ...args) => {
    let result; 
    if(operation === 'ADD') {
        result = args.reduce((prev,current) => prev + current, 0);

    } else if(operation === 'SUBTRACT') {
        result = args.reduce((prev, current) => prev - current); 
    }
    callback(result); 
}
const showResult = (phrase, result) => {
    alert(`The result after ${phrase} all numbers is: ${result}`); 
};

operation(showResult.bind(this,'adding'), 'ADD', 1,2,3,4,5); 
operation(showResult.bind(this,'subtracting'), 'SUBTRACT', 1, 10, 15, 20);