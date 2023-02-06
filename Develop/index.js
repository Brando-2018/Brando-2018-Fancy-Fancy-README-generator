const inquirer = require("inquirer");
const fs = require("fs");
const path= require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// add more questions 
const questions = [	
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'Title',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'Email',
        },
        {
            type: 'input',
            message: 'What is your github name?',
            name: 'Github',
        },
        {
            type: 'input',
            message: 'What is the description of your README?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'Anything to install?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'What is the usage of your application?',
            name: 'Usage',
        },
        {
            type: 'list',
            message: 'Any licenses?',
            name: 'License',
            choices:["artistic-2.0", "cc-by-4.0", "MIT", "agpl-3.0"],
        },
        {
            type: 'input',
            message: 'Any contributing participants?',
            name: 'Contributions',
        },
        {
            type: 'input',
            message: 'Are there tests for your application?',
            name: 'Test',
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,fileName),data)
    
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((data) =>{
        console.log(typeof data)
        writeToFile("./utils/README.md",generateMarkdown({...data}))
    })
}
    

// Function call to initialize app
init();
