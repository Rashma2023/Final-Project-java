1. Introduction
Introduce Yourself: "Hello everyone, my name is [Your Name]."
Project Overview: "Today, I will be presenting my project, the Number Guessing Game, which is implemented using Node.js. This project uses arrays and loops to manage the game logic."

2. Objective
Explain the Objective: "The objective of this project is to create an interactive number guessing game where the user has to guess a randomly selected number between 1 and 100."

3. How the Game Works
Random Number Generation: "The game starts by generating a random number between 1 and 100."
User Interaction: "The user is prompted to guess the number."
Validation and Feedback:
"If the input is not a number, the user is asked to enter a valid number."
"If the guess is too low or too high, the user is informed accordingly."
"If the guess is correct, the user is congratulated, and the number of attempts is displayed along with the guesses made."

4. Code Explanation
Import the readline Module:

const readline = require('readline');
"I started by importing the readline module, which allows us to read input from the terminal and write output to it."
Create the Readline Interface:


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
"Next, i created a readline interface to handle input and output in the terminal."
Generate a Random Number and Initialize an Array for Guesses:


const numberToGuess = Math.floor(Math.random() * 100) + 1;
let guesses = [];
"generated a random number between 1 and 100 and initialize an array to keep track of the user's guesses."
Print Welcome Messages:


console.log("Welcome to the Number Guessing Game!");
console.log("I have selected a number between 1 and 100. Try to guess it!");
"print welcome messages and instructions for the user."
Define the askGuess Function:



"The askGuess function handles the main game logic. It prompts the user for a guess, validates the input, and provides feedback."
"The user's guess is stored in the guesses array."
"If the input is not a number, the user is prompted to enter a valid number again."
"If the guess is too low or too high, the user is informed accordingly and prompted for another guess."
"If the guess is correct, the user is congratulated, and the number of attempts and guesses are displayed. The game then ends by closing the readline interface."
Start the Game:


askGuess();
"Finally, start the game by calling the askGuess function for the first time."

5. Running the Game
Save the File: "Save the code in a file named numberGuessingGame.js."
Open Terminal: "Open your terminal or command prompt."
Navigate to the File Location: "Navigate to the directory where numberGuessingGame.js is saved using the cd command."
Run the Program: "Execute the program using Node.js by running the command node numberGuessingGame.js."

6. Example Interaction

Demonstrate a Sample Run:


Welcome to the Number Guessing Game!
I have selected a number between 1 and 100. Try to guess it!
Enter your guess: 50
Too low! Try again.
Enter your guess: 75
Too high! Try again.
Enter your guess: 60
Too low! Try again.
Enter your guess: 70
Congratulations! You guessed the number in 4 attempts.
Your guesses were: 50, 75, 60, 70
"This is a sample interaction where the user guesses the number in 4 attempts. The guesses made by the user are also displayed."

7. Conclusion
Summarize: "In conclusion, the Number Guessing Game is a simple yet interactive project that demonstrates the use of arrays and loops in Node.js. It helps in understanding user input handling, random number generation, and basic game logic."
Questions: "Thank you for your attention. I am happy to answer any questions you may have."

Congratulations! You guessed the number in 4 attempts.
Your guesses were: 35, 65, 85,69
