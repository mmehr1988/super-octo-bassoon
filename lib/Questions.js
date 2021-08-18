// To connect the functions in Validate.js
const { emailCheck, emptyCheck, numberCheck, idCheck, gitCheck } = require('./Validate.js');
const chalk = require('chalk');
// MASTER QUESTIONS PROMPTS ---------------------------------------------------
const masterQuestions = {
  manager: [
    {
      type: 'input',
      name: 'managerName',
      message: chalk.yellow('Enter') + chalk.red(` manager's `) + chalk.green('name?'),
      validate: emptyCheck,
    },
    {
      type: 'input',
      name: 'managerId',
      message: chalk.yellow('Enter') + chalk.red(` manager's `) + chalk.green('id?'),
      validate: idCheck,
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: chalk.yellow('Enter') + chalk.red(` manager's `) + chalk.green('email?'),
      validate: emailCheck,
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: chalk.yellow('Enter') + chalk.red(` manager's `) + chalk.green('office number?'),
      validate: numberCheck,
    },
  ],
  engineer: [
    {
      type: 'input',
      name: 'engineerName',
      message: chalk.yellow('Enter') + chalk.red(` engineer's `) + chalk.green('name?'),
      validate: emptyCheck,
    },
    {
      type: 'input',
      name: 'engineerId',
      message: chalk.yellow('Enter') + chalk.red(` engineer's `) + chalk.green('id?'),
      validate: idCheck,
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: chalk.yellow('Enter') + chalk.red(` engineer's `) + chalk.green('email?'),
      validate: emailCheck,
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: chalk.yellow('Enter') + chalk.red(` engineer's `) + chalk.green('Github username?'),
      validate: gitCheck,
    },
  ],
  intern: [
    {
      type: 'input',
      name: 'internName',
      message: chalk.yellow('Enter') + chalk.red(` intern's `) + chalk.green('name?'),
      validate: emptyCheck,
    },
    {
      type: 'input',
      name: 'internId',
      message: chalk.yellow('Enter') + chalk.red(` intern's `) + chalk.green('id?'),
      validate: idCheck,
    },
    {
      type: 'input',
      name: 'internEmail',
      message: chalk.yellow('Enter') + chalk.red(` intern's `) + chalk.green('email?'),
      validate: emailCheck,
    },
    {
      type: 'input',
      name: 'internSchool',
      message: chalk.yellow('Enter') + chalk.red(` intern's `) + chalk.green('school?'),
      validate: emptyCheck,
    },
  ],
};

exports.masterQuestions = masterQuestions;
