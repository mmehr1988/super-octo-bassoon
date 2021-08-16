const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
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
          message: "Enter Manager's name?",
          validate: nameCheck,
          filter: nameProper,
        },
        {
          type: 'input',
          name: 'managerId',
          message: "Enter Manager's id?",
          validate: numberCheck,
          filter: trimProper,
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "Enter Manager's email?",
          validate: emailCheck,
          filter: emailProper,
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "Enter Manager's office number?",
          validate: numberCheck,
          filter: trimProper,
        },
      ])
      .then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
        teamArray.push(manager);
        nextTeamMember();
      });
  };

  // FUNCTION FOR ENGINEER PROMPTS ------------------------------------------------
  const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "Enter Engineer's name?",
          validate: nameCheck,
          filter: nameProper,
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "Enter Engineer's id?",
          validate: numberCheck,
          filter: trimProper,
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "Enter Engineer's email?",
          validate: emailCheck,
          filter: emailProper,
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "Enter Engineer's Github Username?",
        },
      ])
      .then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
        teamArray.push(engineer);
        nextTeamMember();
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
