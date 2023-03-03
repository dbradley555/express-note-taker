// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');

const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your application?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is a good description for your application?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are your instructions for installation of the application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What instructions do you have for usage of the application?',
  },
  {
    type: 'input',
    name: 'credits',
    message:
      'Do you have anyone you want to credit with contributing to the application?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What guidelines do you have for contribution?',
  },
  {
    type: 'input',
    name: 'testing',
    message: 'What instructions do you have for testing?',
  },
  {
    type: 'list',
    message: 'Does your application have a license?',
    name: 'license',
    choices: [
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1',
      'Mozilla Public License 2.0',
      'The Unlicense',
    ],
  },
  {
    type: 'input',
    name: 'repository',
    message: 'What is the title of your repository?',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(
  fileName,
  license,
  username,
  repository,
  email,
  title,
  description,
  installation,
  usage,
  credits,
  contribution,
  testing
) {
  fs.writeFile(
    fileName,
    generateMarkdown(
      license,
      username,
      repository,
      email,
      title,
      description,
      installation,
      usage,
      credits,
      contribution,
      testing
    ),
    (err) => (err ? console.log(err) : console.log('Success!'))
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const fileName = 'README.md';
    license = data.license;
    username = data.username;
    repository = data.repository;
    email = data.email;
    title = data.title;
    description = data.description;
    installation = data.installation;
    usage = data.usage;
    credits = data.credits;
    contribution = data.contribution;
    testing = data.testing;
    writeToFile(
      fileName,
      license,
      username,
      repository,
      email,
      title,
      description,
      installation,
      usage,
      credits,
      contribution,
      testing
    );
  });
}

// Function call to initialize app
init();
