///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// INQUIRER
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// FILE PATH: QUESTIONS
const { masterQuestions } = require('./lib/Questions.js');

// FILE PATH: VALIDATE
const { idArray } = require('./lib/Validate.js');

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

// To hold all the object classes
const teamArray = [];

// MANAGER --------------------------------------------------------------
async function createManager() {
  const rManager = await inquirer.prompt(masterQuestions.manager);
  const manager = new Manager(rManager.managerName, rManager.managerId, rManager.managerEmail, rManager.managerOfficeNumber);

  teamArray.push(manager);
  idArray.push(manager.getId());
  console.log(`Successfully added manager: ${manager.getName()}`);
}

// NEXT TO DO -----------------------------------------------------------
// Function to prompt user of whether they would like to add team members to finalize the team build profile
async function confirmTeam() {
  const confirmNext = await inquirer.prompt(masterQuestions.employeeConfirm);

  switch (confirmNext.memberChoose) {
    case 'Engineer':
      await createEngineer();
      break;
    case 'Intern':
      await createIntern();
      break;
    default:
      setTimeout(function finalMessage() {
        console.log('Team Profile Build Complete');
      }, 1000);
  }
}

// ENGINEER -------------------------------------------------------------
// function to prompt user the questions related to building an engineer profile
async function createEngineer() {
  const rEngineer = await inquirer.prompt(masterQuestions.engineer);
  const engineer = new Engineer(rEngineer.engineerName, rEngineer.engineerId, rEngineer.engineerEmail, rEngineer.engineerGithub);

  teamArray.push(engineer);
  idArray.push(engineer.getId());
  console.log(`Successfully added engineer: ${engineer.getName()}`);
  await confirmTeam();
}

// INTERN ---------------------------------------------------------------
// function to prompt user the questions related to building an intern profile
async function createIntern() {
  const rIntern = await inquirer.prompt(masterQuestions.intern);
  const intern = new Intern(rIntern.internName, rIntern.internId, rIntern.internEmail, rIntern.internSchool);
  teamArray.push(intern);
  idArray.push(intern.getId());
  console.log(`Successfully added intern: ${intern.getName()}`);
  await confirmTeam();
}

// GENERATE TEAM ---------------------------------------------------------------
// This function will wait until user confirms to build team
// then it will gather the object classes in the team array
// push the data to the generate-template folder
// which then formats the data for html output.
async function teamGen() {
  try {
    await createManager();
    await confirmTeam();
  } catch (error) {
    console.log(error);
  }

  try {
    fs.writeFileSync(filePath, generate(teamArray));
  } catch (error) {
    console.log(error);
  }
}
teamGen();
