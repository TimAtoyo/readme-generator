const {writeFile, appendFile } = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = './README.md';



// function to write README file
function writeToFile(fileName, data) {
  appendFile(fileName, generateMarkdown(data), (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log("Commit logged!"), console.log(generateMarkdown(data))
);

}

// function to initialize program
function init() {
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
const data = {
   motivation: `${answers["motivation input"]}`,
   build: `${answers["build input"]}`,
   problem: `${answers["problem input"]}`,
   learning: `${answers["learning input"]}`,
   instalSteps: `${answers["instalSteps input"]}`,
   instructions: `${answers["instructions input"]}`,
   licenses: `${answers["licenses input"]}`,
   languages: `${answers["languages input"]}`,
   testing: `${answers["test input"]}`,
}
  
writeToFile(fileName, data)

})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});
}

// function call to initialize program
init();
