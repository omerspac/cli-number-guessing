#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number first. - Done
// 2) Take user input for guessing number. - Done
// 3) Compare user input with computer generated number and show result. - Done
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("WELCOME TO NUMBER GUESSING GAME! \n\n");
const userAnswer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
if (userAnswer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the correct number");
}
else {
    console.log("Failed! You guessed the wrong number");
}
