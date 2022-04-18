// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// console.log(process);

//this will remove the first two process of node and give an empty array starting at third index
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

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
printProfileData(profileDataArgs);
//
