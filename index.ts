#! /usr/bin/env node

import inquirer from "inquirer"

//generate random number from computer 

//user input for guessing number

//compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-10"
    
    },
]);

if(answers.userGuessNumber === randomNumber){
    console.log("congragulations! you guess right number.");
}
else{
    console.log("you guess wrong number.");

}




