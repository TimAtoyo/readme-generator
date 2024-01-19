const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const readmeString = `

# <Your-Project-Title>

## Description

${motivation}
${build}
${problem}
${learning}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${instalSteps}


## Usage

${instructions}


To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${licenses}


---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Languages 

${languages}
![image]({BadgeURLHere})
https://img.shields.io/badge/JSS-F7DF1E?style=for-the-badge&logo=JSS&logoColor=white

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
${testing}

`



// array of questions for user
const questions = [
    // Description
    {
        type: "input",
        name: "motivation input",
        message: "Why was your motivation?",
        default: "Na",
      },
      {
        type: "input",
        name: "build input",
        message: "Why did you build this project?",
        default: "Na",
      },
      {
        type: "input",
        name: "problem input",
        message: "What problem does it solve?",
        default: "Na",
      },
      {
        type: "input",
        name: "learning input",
        message: "What did you learn?",
        default: "Na",
      },
    //   Instalation
      {
        type: "input",
        name: "instalSteps input",
        message: "What are the steps required to install your project? /n Provide a step-by-step description of how to get the development environment running.",
        default: "Na",
      },
      {
        type: "input",
        name: "instructions input",
        message: "Provide instructions and examples for use.",
        default: "Na",
      },
      {
        type: "list",
        name: "licenses input",
        message: "Whats your go to language?",
        default: "MIT License",
        choices: ["Apache License 2.0", "GNU GPLv3 License", "MIT License", "ISC License"],
      },
      {
        type: "checkbox",
        name: "languages input",
        message: "Whats languages are used on your project?",
        default: "JavaScript",
        choices: ["HTML", "JavaScript", "C", "Python", "Other"],
      },
      {
        type: "input",
        name: "test input",
        message: "Instructions for testing",
        default: "npm test",
      },
];


inquirer
  .prompt(questions)
  .then((answers) => {
    // Variables of vales from user feedback!
    const motivation = answers["motivation input"]
    const build = answers["build input"];
    const problem = answers["problem input"];
    const learning = answers["learning input"];
    const instalSteps = answers["instalSteps input"];
    const instructions = answers["instructions input"];
    const licenses = answers["licenses input"];
    const languages = answers["languages input"];
    const testing = answers["test input"];



    writeFile("readme.md", result, (err) =>
      // TODO: Describe how this ternary operator works
      err ? console.error(err) : console.log("Commit logged!")
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
