// TODO: Include packages needed for this application
const inquierer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
inquierer.prompt([
    {
        type: 'input',
        message: 'Type the title of your Project ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a project description',
        name: 'Description',
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
        message: 'Enter the contribution information for your Project',
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
        choices: ['apache', 'GNU', 'MIT', 'BSD2', 'BSD3'],
        name: 'License',    
    }
])
.then(answers => {
    fs.writeFile('readme.md', JSON.stringify(answers, null, 2), (err) => {
        err ? console.error(err) : console.log('success!')
    });
});