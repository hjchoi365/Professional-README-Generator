const fs = require('fs');
const inquirer = require("inquirer");
const dir = './dist';
const filepath = './dist/readme.md';
const generatePage = require('./utils/generateMD');

const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username (Required) : ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'eaddress',
        message: 'What is your email address (Required) : ',
        validate: addressInput => {
            if (addressInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pname',
        message: 'What is your project name (Required) : ',
        validate: projectInput => {
            if (projectInput) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pdescription',
        message: 'Please provide decription of your project (Required) : ',
        validate: descInput => {
            if (descInput) {
              return true;
            } else {
              console.log('Please provide project description!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pdependency',
        message: 'Please provide command to install your project dependencies: '
    },
    {
        type: 'input',
        name: 'pusage',
        message: 'Please provide usage information for your project: '
    },
    {
        type: 'input',
        name: 'pcontributor',
        message: 'Please provide name of project Contributors: '
    },
    {
        type: 'input',
        name: 'ptest',
        message: 'Please provide command to execute tests for this project as part of testing: '
    },
    {
        type: 'list',
        name: 'plicense',
        message: 'Please choose license from below list: ',
        choices:['MIT',
                'Apache',
                'GPLv3',
                'Unlicense'],
    },
];

const writeToFile = (fileName, data) =>
{
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          if (err) {
            reject(err);
            return;
          }
    

          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
};

const init = ()=> {
  if (!fs.existsSync(dir))
  {
    fs.mkdirSync(dir);
  }
    return inquirer.prompt(questions);
};

init()
.then(projectdata =>{
    return generatePage(projectdata);
})
.then(pageReadme => {
    return writeToFile(filepath,pageReadme);
})
.then(writemsg =>{
    console.log('');
    console.log("------------------------------------------------------------------------------");
    console.log('Readme generated at location '+filepath+' at root of the project directory');
    console.log("------------------------------------------------------------------------------");
})
.catch(err => {
    console.log(err);
});