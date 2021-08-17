// VALIDATE EMAIL -------------------------------------------------------------
const emailCheck = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }

  return 'Please enter valid email';
};
// VALIDATE EMPTY --------------------------------------------------------------
const emptyCheck = (value) => {
  if (value === '') {
    return 'Answer cannot be empty';
  }
  return true;
};

// VALIDATE NUMBER ------------------------------------------------------------
const numberCheck = (value) => {
  if (/\d/.test(value)) {
    return true;
  }

  return 'Please enter a number';
};

// FILTER EMPTY SPACE ---------------------------------------------------------
const trimProper = (value) => {
  return value.replace(/\s+/g, '');
};

// NAME CORRECTION ------------------------------------------------------------
const nameProper = (value) => {
  return value
    .split(' ')
    .map((name) => {
      return name.substring(0, 1).toUpperCase() + name.substring(1);
    })
    .join(' ');
};

// EMAIL CORRECTION -----------------------------------------------------------
const emailProper = (value) => {
  return value.toLowerCase();
};

// FUNCTION FOR MANAGER PROMPTS ------------------------------------------------

const masterQuestions = {
  manager: [
    {
      type: 'input',
      name: 'managerName',
      message: "Enter manager's name?",
      validate: emptyCheck,
      filter: nameProper,
    },
    {
      type: 'input',
      name: 'managerId',
      message: "Enter manager's id?",
      validate: numberCheck,
      filter: trimProper,
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "Enter manager's email?",
      validate: emailCheck,
      filter: emailProper,
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "Enter manager's office number?",
      validate: numberCheck,
      filter: trimProper,
    },
  ],
  engineer: [
    {
      type: 'input',
      name: 'engineerName',
      message: "Enter engineer's name?",
      validate: emptyCheck,
      filter: nameProper,
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "Enter engineer's id?",
      validate: numberCheck,
      filter: trimProper,
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "Enter engineer's email?",
      validate: emailCheck,
      filter: emailProper,
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
      filter: nameProper,
    },
    {
      type: 'input',
      name: 'internId',
      message: "Enter intern's id?",
      validate: numberCheck,
      filter: trimProper,
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "Enter intern's email?",
      validate: emailCheck,
      filter: emailProper,
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "Enter intern's school?",
      validate: emptyCheck,
    },
  ],
};

module.exports = masterQuestions;
