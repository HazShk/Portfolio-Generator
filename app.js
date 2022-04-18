// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// console.log(process);

/*
const printProfileData = (profileDataArr) => {
    //Using for loop
    for (let i = 0; i < profileDataArr.length; i++) {
      console.log("Inside", profileDataArr[i]);
    }
    //using for each
    profileDataArr.forEach((profileitem) => {
      console.log("foreach", profileitem);
    });
  
    //using foreach without parentheses
    profileDataArr.forEach((profileitem) => console.log("foreach2", profileitem));
  };
*/
// printProfileData(profileDataArgs);

//regular way of returning strings
// const generatePage = () => "Name: Jane, Github: janehub";

//this will remove the first two process of node and give an empty array starting at third index
const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

// //one way of declaring variables to obtain indexes
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

//Other way of declaraing it using DeStructuring Assignment
const [name, github] = profileDataArgs;

//using template literal
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     Github: ${githubName}
// `;
// };

const generatePage = (name, github) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

console.log(name, github);
console.log(generatePage(name, github));
