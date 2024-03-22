#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generete a random number 
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("Welcome to number guessing game ");
const answers = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please guess a number"
    }
]);
if (answers.userGuessednumber === randomNumber) {
    console.log("Congratulation! You guessed right number");
}
else
    ;
{
    console.log("You guessed wrong number");
}
