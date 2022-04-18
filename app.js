const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template");

//const pageHtml = generatePage(name, github);

// fs.writeFile("./index.html", pageHtml, (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

//profile questions
//adding portfolio as an argument/variable to store project data
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your Github Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

//project questions
const promptProject = (portfolioData) => {
  //initalizing an empty array to store projectdata in projects property array
  //if there is no projects array then create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
    =================
    Add a New Project
    =================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: (projectName) => {
          if (projectName) {
            return true;
          } else {
            console.log("Please enter your Project Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (projectDescription) => {
          if (projectDescription) {
            return true;
          } else {
            console.log("Please enter your Project Description!");
            return false;
          }
        },
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
        validate: (githubLink) => {
          if (githubLink) {
            return true;
          } else {
            console.log("Please enter your Github Link!");
            return false;
          }
        },
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
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });
