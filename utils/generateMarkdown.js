// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `
  # Title
  ${answers['Title']}
  ## Description
  ${answers['Description']}
  ## Table of Contents
  ${answers['Contents']}
  ## Installation
  ${answers['Installation']}
  ## Usage
  ${answers['Usage']}
  ## License
  ${answers['License']}
  `;
  fs.writeFile(fileName, readMeTemplate, (err) => {
    err ? console.error(err) : console.log('success!')})}

    
module.exports = generateMarkdown;
