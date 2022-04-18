const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template");

//const pageHtml = generatePage(name, github);

// fs.writeFile("./index.html", pageHtml, (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

//profile questions
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

//project questions
const promptProject = () => {
  console.log(`
    =================
    Add a New Project
    =================
    `);
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "what did you build this project with? (Check all that apply)",
      choices: [
        "javascript",
        "HTML",
        "CSS",
        "ES6",
        "JQUERY",
        "BootStrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
    },
    {
      type: "confirm",
      name: "feature",
      message: "Would you like to feature this project?",
      default: false,
    },
    {
      type: "confirm",
      name: "confirmAddProject",
      message: "Would you like to enter another project?",
      default: false,
    },
  ]);
};

promptUser()
  .then((answers) => console.log(answers))
  .then(promptProject)
  .then((projectAnswers) => console.log(projectAnswers));
