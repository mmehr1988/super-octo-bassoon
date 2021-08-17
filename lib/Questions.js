const { emailCheck, emptyCheck, numberCheck, trimProper } = require('./Validate.js');

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
      validate: numberCheck,
      // TODO: dont assume, create a check prompt with user if whether they realized empty spacing or if they want it to be corrected
      filter: trimProper,
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
      // TODO: dont assume, create a check prompt with user if whether they realized empty spacing or if they want it to be corrected
      filter: trimProper,
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
      validate: numberCheck,
      // TODO: dont assume, create a check prompt with user if whether they realized empty spacing or if they want it to be corrected
      filter: trimProper,
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
      validate: emptyCheck,
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
      validate: numberCheck,
      // TODO: dont assume, create a check prompt with user if whether they realized empty spacing or if they want it to be corrected
      filter: trimProper,
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
