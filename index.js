///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// INQUIRER
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// FILE PATH: QUESTIONS
const questions = require('./lib/Questions.js');

// FILE PATH: EMPLOYEE CLASSES
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// FILE PATH: GENERATE TEMPLATE
const generate = require('./src/generate-template');

// FILE PATH TO SAVE HTML
const filename = 'myTeam.html';
const folderPath = path.resolve(__dirname, 'dist');
const filePath = path.join(folderPath, filename);

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const teamArray = [];

function teamGen() {
  // FUNCTION FOR MANAGER PROMPTS -------------------------------------------------
  const createManager = () => {
    inquirer
      .prompt(questions.manager)
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
      .prompt(questions.engineer)
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
  // FUNCTION FOR INTERN PROMPTS --------------------------------------------------
  const createIntern = () => {
    inquirer
      .prompt(questions.intern)
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
  // TO SEND RESPONSE TO THE TEMPLATE FILE TO GENERATE HTML -----------------------
  const buildTeam = () => {
    fs.writeFileSync(filePath, generate(teamArray));
  };

  createManager();
}

teamGen();
