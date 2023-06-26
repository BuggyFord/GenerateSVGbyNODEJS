const inquirer = require('inquirer');
const fs = require('fs');
const 








function promptQuestions(){
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'text',
        message:'Enter text for the logo (It must not be more than three characters.)',
    },
    {
        type: 'input',
        name: 'text color',
        message:'Enter a color for the text',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Select a color of the shape',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type: 'input',
        name: 'shape color',
        message: 'What color would you like the shape to be?'
    }

])
    
    

}

promptQuestions();