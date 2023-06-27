const inquirer = require('inquirer');
const { Circle, Triangle, Square} = require('./shapes');
const {writeFile} = require('fs/promises');


function promptQuestions(){
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'text',
        message:'Enter text for the logo (It must not be more than three characters.)',
        validate: (text) =>
        text.length <= 3 ||
        "The logo must not be more than three characters",
    },
    {
        type: 'input',
        name: 'textColor',
        message:'Enter a color for the text',
    },
    {
        type: 'input',
        name: 'shapeType',
        message: 'Select a color of the shape',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?'
    }

])
.then(({text, textColor, shapeType, shapeColor}) => {
    let shape =
    switch(shapeType) {
        case 'Square':
            let newShape = new Square();
            break;
        case 'Circle':
            let newCircle = new Circle()
            break;
        case 'Triangle':
            let newTriangle = new Triangle();
            break;
    }

    let newSvg = new SVG();
    newSvg.set
})  
}

    



promptQuestions();