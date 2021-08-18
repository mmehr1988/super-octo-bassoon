const { emailCheck, emptyCheck, numberCheck, idCheck, gitCheck } = require('./Validate.js');

// FUNCTION FOR MANAGER PROMPTS ------------------------------------------------

const masterQuestions = {
  manager: [
    {
      type: 'input',
      name: 'managerName',
      message: "Enter manager's name?",
      validate: emptyCheck,
    },
    {
      type: 'input',
      name: 'managerId',
      message: "Enter manager's id?",
      validate: idCheck,
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "Enter manager's email?",
      validate: emailCheck,
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "Enter manager's office number?",
      validate: numberCheck,
    },
  ],
  engineer: [
    {
      type: 'input',
      name: 'engineerName',
      message: "Enter engineer's name?",
      validate: emptyCheck,
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "Enter engineer's id?",
      validate: idCheck,
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "Enter engineer's email?",
      validate: emailCheck,
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "Enter engineer's Github username?",
      validate: gitCheck,
    },
  ],
  intern: [
    {
      type: 'input',
      name: 'internName',
      message: "Enter intern's name?",
      validate: emptyCheck,
    },
    {
      type: 'input',
      name: 'internId',
      message: "Enter intern's id?",
      validate: idCheck,
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "Enter intern's email?",
      validate: emailCheck,
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "Enter intern's school?",
      validate: emptyCheck,
    },
  ],
};

exports.masterQuestions = masterQuestions;
