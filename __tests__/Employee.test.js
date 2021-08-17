'use strict';

const Employee = require('../lib/Employee');

//////////////////////////////////////////////////////////////////////
// TEST: EMPLOYEE
//////////////////////////////////////////////////////////////////////

// getName() ----------------------------------------------------------
describe('getName', () => {
  it('When name is provided, getName() returns the value entered', () => {
    const name = 'Test';
    const employee = new Employee(name, 123, 'employee@fakeemails.com', 'Employee');
    expect(employee.getName()).toBe(name);
  });

  it('When first letter of name is entered, make it upper case', () => {
    const name = 'test';
    const employee = new Employee(name, 123, 'employee@fakeemails.com', 'Employee');
    expect(employee.getName()).toBe('Test');
  });
});

// getId() ----------------------------------------------------------
describe('getId', () => {
  it('When id is provided, getId() returns the value entered', () => {
    const id = 123;
    const employee = new Employee('test', id, 'employee@fakeemails.com', 'Employee');
    expect(employee.getId()).toBe(id);
  });
});

// getEmail() ----------------------------------------------------------
describe('getEmail', () => {
  it('When email is provided, getEmail() returns the value entered', () => {
    const email = 'employee@fakeemails.com';
    const employee = new Employee('test', 123, email, 'Employee');
    expect(employee.getEmail()).toBe(email);
  });
  it('When email is provided with some upper case letters, getEmail() returns the value in all lowercase', () => {
    const email = 'eMploYeE@fakeEmails.com';
    const employee = new Employee('test', 123, email, 'Employee');
    expect(employee.getEmail()).toBe('employee@fakeemails.com');
  });
});

// getRole() ----------------------------------------------------------
describe('getRole', () => {
  it('Method getRole() returns Intern', () => {
    const role = 'Employee';
    const employee = new Employee('test', 123, 'employee@fakeemails.com', 'Employee');
    expect(employee.getRole()).toBe(role);
  });
});
