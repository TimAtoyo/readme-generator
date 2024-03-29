// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Your-Project-Title
      
  ## Description
      
  ${data.motivation}
  ${data.build}
  ${data.problem}
  ${data.learning}
      
  ## Table of Contents
      
  If your README is long, add a table of contents to make it easy for users to find what they need.
      
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
      
  ## Installation
      
  ${data.instalSteps}
      
      
  ## Usage
      
  ${data.instructions}
      
      
  To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
      
          md![alt text](assets/images/screenshot.png)
          
      
  ## Credits
      
  List your collaborators, if any, with links to their GitHub profiles.
      
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
      
  If you followed tutorials, include links to those here as well.
      
  ## License
      
  ${data.licenses}
      
      
  ---
      
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
      
  ## Badges
      
      ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
      
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
      
  ## Languages 
      
      ${data.languages}
  ![image]({BadgeURLHere})
      https://img.shields.io/badge/JSS-F7DF1E?style=for-the-badge&logo=JSS&logoColor=white
      
  ## Features
      
  If your project has a lot of features, list them here.
      
      ## How to Contribute
      
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
      
  ## Tests
      ${data.testing}

`;
}

module.exports = generateMarkdown;
