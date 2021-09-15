const startGameBtn = document.getElementById('start-game-btn');

const gameStart = function () {
    console.log('game is starting...'); 
};

function start() {
    console.log('Game is starting', age);
}
// const person = {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// person.greet();

startGameBtn.addEventListener('click', function() {
    console.log('Game is starting ...', age);
}); 