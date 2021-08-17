'use strict';

const { lowerCase } = require('./Validate.js');
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return lowerCase(this.github);
  }
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
