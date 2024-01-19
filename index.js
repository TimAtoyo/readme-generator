const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const readmeString = `

# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Languages 
![image]({BadgeURLHere})
https://img.shields.io/badge/JSS-F7DF1E?style=for-the-badge&logo=JSS&logoColor=white

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
`



// array of questions for user
const questions = [
    // Description
    {
        type: "input",
        name: "why input",
        message: "Why was your motivation?",
        default: "Na",
      },
      {
        type: "input",
        name: "why input",
        message: "Why did you build this project??",
        default: "Na",
      },
      {
        type: "input",
        name: "what input",
        message: "What problem does it solve?",
        default: "Na",
      },
      {
        type: "input",
        name: "What input",
        message: "What did you learn?",
        default: "Na",
      },
    //   Instalation
      {
        type: "input",
        name: "What input",
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
        name: "Coding language input",
        message: "Whats your go to language?",
        default: "MIT License",
        choices: ["Apache License 2.0", "GNU GPLv3 License", "MIT License", "ISC License"],
      },
      {
        type: "list",
        name: "Coding language input",
        message: "Whats languages are used on your project?",
        default: "I like to code!",
        choices: ["HTML", "JavaScript", "C", "Python", "Other"],
      },
     
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
