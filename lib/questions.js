
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./shapes');
const {writeFile} = require('fs/promises');
const SVG = require('./svg');




class Questions {
    run(){
        
        return inquirer.prompt([
                {
                type: 'input',
                name: 'logo',
                message:'Enter text for the logo (It must not be more than three characters.)',
                validate: (text) =>
                text.length <= 3 ||
                "The logo must not be more than three characters",
            },
            {
                type: 'input',
                name: 'logoColor',
                message:'Enter a color for the text',
            },
            {
                type: 'list',
                name: 'shapeType',
                message: 'Select shape',
                choices: ['Square', 'Circle', 'Triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like the shape to be?'
            },
        ])
            .then(({logo, logoColor, shapeType, shapeColor}) => {
                let shape;
                switch (shapeType) {
                    case 'Square':
                         shape = new Square();
                        break;
                    case 'Circle':
                         shape = new Circle()
                        break;
                    case 'Triangle':
                         shape = new Triangle();
                        break;
                    default:
                        process.exit(1)
                }
               shape.setBackground(shapeColor)
                shape.setColor(logoColor)
                shape.setLogo(logo)
               const svg = shape.render();
               console.log(shape,svg);
                
                writeFile('shape.svg', svg)
        
            })     
    

        }
    }

module.exports = Questions;
