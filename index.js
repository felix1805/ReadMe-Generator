// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Type the title of your Project',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Enter a Project description',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Enter your Table of Contents',
        name: 'Contents',
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your Project',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Enter the usage information for your Project',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidlines for your Project',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Enter the testing information for your Project',
        name: 'Tests',
    },
    {
        type: 'list',
        message: 'Which license are your using?',
        choices: [
        { name: 'Apache', value: 'apache' },
        { name: 'GNU', value: 'GNU' },
        { name: 'MIT', value: 'MIT' },
    ],
        name: 'License',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then(data => {
            const readMeTemplate =
            generateMarkdown(data);
            fs.writeFile(fileName, readMeTemplate, (err) => {
                err ? console.error(err) : console.log('success!')
            });
        
        })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('./dist/README.md', questions);
}

// Function call to initialize app
init();
 