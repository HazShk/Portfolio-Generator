const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template");

//const pageHtml = generatePage(name, github);

// fs.writeFile("./index.html", pageHtml, (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name?",
    },
  ])
  .then((answers) => console.log(answers));
