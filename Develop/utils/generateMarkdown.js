// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "* [License](#license)"
  
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return  `This project has ${license} license `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  
  ${renderLicenseBadge(data.License)}

  ## Table of Contents

  * [Description](#description)

  * [Installations](#installation)

  * [Usage](#usage)

  ${renderLicenseLink()} 
  
  * [Contributions](#contributions)

  * [Test](#test)

  * [Questions](#questions)

  ## Description
    ${data.Description}
  ## Installation
    ${data.Installation}
  ## Usage
    ${data.Usage}
  ## License
    ${renderLicenseSection(data.License)}
  ## Contributions
    ${data.Contributions}
  ## Tests
    ${data.Test}
  ## Questions
    ${data.Email}
    <https://github.com${data.Github}
`;
}

module.exports = generateMarkdown;
