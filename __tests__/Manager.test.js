'use strict';

const Manager = require('../lib/Manager');

//////////////////////////////////////////////////////////////////////
// TEST: MANAGER
//////////////////////////////////////////////////////////////////////

// getName() ----------------------------------------------------------
describe('getName', () => {
  it('When name is provided, getName() returns the value entered', () => {
    const name = 'Mehdi';
    const manager = new Manager(name, 1, 'tatash.my@gmail.com', 1);
    expect(manager.getName()).toBe(name);
  });

  it('When first letter of name is entered, make it upper case', () => {
    const name = 'mehdi';
    const manager = new Manager(name, 1, 'tatash.my@gmail.com', 1);
    expect(manager.getName()).toBe('Mehdi');
  });
});

// getId() ----------------------------------------------------------
describe('getId', () => {
  it('When id is provided, getId() returns the value entered', () => {
    const id = 25;
    const manager = new Manager('Mehdi', id, 'tatash.my@gmail.com', 1);
    expect(manager.getId()).toBe(id);
  });
});

// getEmail() ----------------------------------------------------------
describe('getEmail', () => {
  it('When email is provided, getEmail() returns the value entered', () => {
    const email = 'tatash.my@gmail.com';
    const manager = new Manager('Mehdi', 1, email, 1);
    expect(manager.getEmail()).toBe(email);
  });
  it('When email is provided with some upper case letters, getEmail() returns the value in all lowercase', () => {
    const email = 'tAtAsH.my@Gmail.com';
    const manager = new Manager('Mehdi', 1, email, 1);
    expect(manager.getEmail()).toBe('tatash.my@gmail.com');
  });
});

// getRole() ----------------------------------------------------------
describe('getRole', () => {
  it('Method getRole() returns Manager', () => {
    const role = 'Manager';
    const manager = new Manager('Mehdi', 1, 'tatash.my@gmail.com', 1);
    expect(manager.getRole()).toBe(role);
  });
});

// getOfficeNumber() ----------------------------------------------------------
describe('getOfficeNumber', () => {
  it('When office number is provided, getOfficeNumber() returns the value entered', () => {
    const officeNumber = 1;
    const manager = new Manager('Mehdi', 1, 'tatash.my@gmail.com', 1);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });
});
