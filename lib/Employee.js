'use strict';

const { nameProper, lowerCase } = require('./Validate.js');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return nameProper(this.name);
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return lowerCase(this.email);
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
