const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type:'input',
            message:'What is your name?',
            name:'name',
        },
        {
            type:'input',
            message:'What is your location? Ex: City, State/Province',
            name:'location',
        },
        {
            type:'input',
            message:'What is your bio?',
            name:'bio',
        },
        {
            type:'input',
            message:'What is your LinkedIn URL?',
            name:'linkedin',
        },
        {
            type:'input',
            message:'What is your GitHub username?',
            name:'github',
        }
    ])
    .then( (data) => 
    {
        const filename = `index.html`;

        fs.writeFile(
            filename,
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
              <title>Document</title>
            </head>
            <body>
              <header class="p-5 mb-4 header bg-light">
                <div class="container">
                  <h1 class="display-4">Hi! My name is ${data.name}</h1>
                  <p class="lead">I am from ${data.location}</p>
                  <h2 class="display-4">Bio</h2>
                  <p class="lead">${data.bio}</p>
                  <h3><span class="badge bg-secondary">Contact Me</span></h3>
                  <ul class="list-group">
                    <li class="list-group-item">Take a peak at my projects here: https://github.com/${data.github.trim()}</li>
                    <li class="list-group-item">LinkedIn: <a href="${data.linkedin}">${data.linkedin}</a></li>
                  </ul>
                </div>
              </header>
            </body>
            </html>`,
            (error) => error ? console.log(error) : console.log('Success!')
        ); 
    }
);