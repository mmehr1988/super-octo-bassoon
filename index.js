const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const generate = require('./src/generate-template');

// Folder Directory To Save
const filename = 'myTeam.html';
const folderPath = path.resolve(__dirname, 'dist');
const filePath = path.join(folderPath, filename);

const teamArray = [];

function teamGen() {
  // VALIDATE EMAIL -------------------------------------------------------------
  const emailCheck = (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return true;
    }

    return 'Please enter valid email';
  };
  // VALIDATE NAME --------------------------------------------------------------
  const nameCheck = (value) => {
    if (value === '') {
      return 'Name cannot be left empty';
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

  // EXTRA SPACE CORRECTION -----------------------------------------------------
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

  const createManager = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "Enter manager's name?",
          validate: nameCheck,
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
      ])
      .then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
        teamArray.push(manager);
        nextTeamMember();
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log('Something else went wrong');
        }
      });
  };

  // FUNCTION FOR ENGINEER PROMPTS ------------------------------------------------
  const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "Enter engineer's name?",
          validate: nameCheck,
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
        },
      ])
      .then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
        teamArray.push(engineer);
        nextTeamMember();
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log('Something else went wrong');
        }
      });
  };

  // FUNCTION FOR INTERN PROMPTS ------------------------------------------------
  const createIntern = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "Enter intern's name?",
          validate: nameCheck,
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
        },
      ])
      .then((response) => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
        teamArray.push(intern);
        nextTeamMember();
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log('Something else went wrong');
        }
      });
  };

  // TO CHOOSE THE NEXT TEAM MEMBER OR BUILD TEAM ---------------------------------
  const nextTeamMember = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberChoose',
          message: 'Choose team member to add?',
          choices: ['Engineer', 'Intern', 'Team Complete'],
        },
      ])
      .then((response) => {
        switch (response.memberChoose) {
          case 'Engineer':
            createEngineer();
            break;
          case 'Intern':
            createIntern();
            break;
          default:
            buildTeam();
        }
      });
  };

  // TO SEND RESPONSE TO THE TEMPLATE FILE TO GENERATE HTML ---------------------------
  const buildTeam = () => {
    fs.writeFileSync(filePath, generate(teamArray));
  };

  createManager();
}

teamGen();
