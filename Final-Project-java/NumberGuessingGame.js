const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate random number between 1 and 100
const numberToGuess = Math.floor(Math.random() * 100) + 1;
let guesses = [];

console.log("Welcome to the Number Guessing Game!");
console.log("I have selected a number between 1 and 100. Try to guess it!");

const askGuess = () => {
    rl.question('Enter your guess: ', (input) => {
        const guess = parseInt(input);
        guesses.push(guess);

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
        } else if (guess < numberToGuess) {
            console.log("Too low! Try again.");
        } else if (guess > numberToGuess) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You guessed the number in ${guesses.length} attempts.`);
            console.log('Your guesses were: ' + guesses.join(', '));
            rl.close();
            return;
        }

        // Call askGuess again to continue the loop
        askGuess();
    });
};

// Start the game
askGuess();
