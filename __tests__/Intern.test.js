'use strict';

const Intern = require('../lib/Intern');

//////////////////////////////////////////////////////////////////////
// TEST: INTERN
//////////////////////////////////////////////////////////////////////

// getName() ----------------------------------------------------------
describe('getName', () => {
  it('When name is provided, getName() returns the value entered', () => {
    const name = 'Tom';
    const intern = new Intern(name, 5, 'tom@fakeemails.com', 'CoolSchool');
    expect(intern.getName()).toBe(name);
  });

  it('When first letter of name is entered as lowercase, make it upper case', () => {
    const name = 'tom';
    const intern = new Intern(name, 5, 'tom@fakeemails.com', 'CoolSchool');
    expect(intern.getName()).toBe('Tom');
  });
});

// getId() ----------------------------------------------------------
describe('getId', () => {
  it('When id is provided, getId() returns the value entered', () => {
    const id = 5;
    const intern = new Intern('Tom', id, 'tom@fakeemails.com', 'CoolSchool');
    expect(intern.getId()).toBe(id);
  });
});

// getEmail() ----------------------------------------------------------
describe('getEmail', () => {
  it('When email is provided, getEmail() returns the value entered', () => {
    const email = 'tom@fakeemails.com';
    const intern = new Intern('Tom', 5, email, 'CoolSchool');
    expect(intern.getEmail()).toBe(email);
  });
  it('When email is provided with some upper case letters, getEmail() returns the value in all lowercase', () => {
    const email = 'ToM@FakeEmails.com';
    const intern = new Intern('Tom', 5, email, 'CoolSchool');
    expect(intern.getEmail()).toBe('tom@fakeemails.com');
  });
});

// getRole() ----------------------------------------------------------
describe('getRole', () => {
  it('Method getRole() returns Intern', () => {
    const role = 'Intern';
    const intern = new Intern('Tom', 5, 'tom@fakeemails.com', 'CoolSchool');
    expect(intern.getRole()).toBe(role);
  });
});

// getSchool() ----------------------------------------------------------
describe('getSchool', () => {
  it('When school is provided, getSchool() returns the value entered', () => {
    const getSchool = 'CoolSchool';
    const intern = new Intern('Tom', 5, 'tom@fakeemails.com', getSchool);
    expect(intern.getSchool()).toBe(getSchool);
  });
});
