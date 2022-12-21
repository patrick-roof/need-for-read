// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const questions = []

// TODO: Create a function to write README file
const promptUser = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please write the steps required to install your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are some examples of its usage?',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What type of license did you use for this project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are some guidelines for how others can contribute?',
      choices: ['MIT', 'GNU GPLv3', 'Mozilla Public', 'Boost Software']
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are some tests that can be run with your project?',
    },
    {
      type: 'input',
      name: 'gitHubLink',
      message: 'Enter the link for your GitHub profile:',
    },
  ]);
};

const generateREADME = ({title, description, installation, usage, license, badges, contributing, tests, gitHubLink, email}) =>
    `# ${title}     ${badges}

    ## Description

    ${description}

    ## Installation
    
    ${installation}

    ## Usage

    ${usage}

    ## License

    ${license}
    
    ## How to Contribute:
    
    ${contributing}
    
    ## Tests
    ${tests}
    
    ### Questions
    
    How to reach me with additional questions:
        -${gitHubLink}
        -${email}`;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully created README'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
