module.exports = (templateData) => {
  console.log(templateData);
  //destructure projects and about data from templatedata based on there property key names
  // this will create three variables based on data in templatedata , this is object destructuring
  const { projects, about, ...header } = templateData;
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
    <h1>${templateData.name}</h1>
    <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
  </body>
  </html>
  `;
};
