'use strict';

const Engineer = require('../lib/Engineer');

//////////////////////////////////////////////////////////////////////
// TEST: ENGINEER
//////////////////////////////////////////////////////////////////////

// getName() ----------------------------------------------------------
describe('getName', () => {
  it('When name is provided, getName() returns the value entered', () => {
    const name = 'Yara';
    const engineer = new Engineer(name, 4, 'yara@fakeemails.com', 'yaraFake');
    expect(engineer.getName()).toBe(name);
  });

  it('When first letter of name is entered, make it upper case', () => {
    const name = 'yara';
    const engineer = new Engineer(name, 4, 'yara@fakeemails.com', 'yaraFake');
    expect(engineer.getName()).toBe('Yara');
  });
});

// getId() ----------------------------------------------------------
describe('getId', () => {
  it('When id is provided, getId() returns the value entered', () => {
    const id = 5;
    const engineer = new Engineer('Yara', id, 'yara@fakeemails.com', 'yaraFake');
    expect(engineer.getId()).toBe(id);
  });
});

// getEmail() ----------------------------------------------------------
describe('getEmail', () => {
  it('When email is provided, getEmail() returns the value entered', () => {
    const email = 'yara@fakeemails.com';
    const engineer = new Engineer('Yara', 4, email, 'yaraFake');
    expect(engineer.getEmail()).toBe(email);
  });
  it('When email is provided with some upper case letters, getEmail() returns the value in all lowercase', () => {
    const email = 'yArA@fAkeEmails.com';
    const engineer = new Engineer('Yara', 4, email, 'yaraFake');
    expect(engineer.getEmail()).toBe('yara@fakeemails.com');
  });
});

// getRole() ----------------------------------------------------------
describe('getRole', () => {
  it('Method getRole() returns Engineer', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Yara', 4, 'yara@fakeemails.com', 'yaraFake');
    expect(engineer.getRole()).toBe(role);
  });
});

// getGithub() ----------------------------------------------------------
describe('getGithub', () => {
  it('When github username is provided, getGithub() returns the value entered', () => {
    const gitId = 'yarafake';
    const engineer = new Engineer('Yara', 4, 'yara@fakeemails.com', gitId);
    expect(engineer.getGithub()).toBe(gitId);
  });
  it('When github username is provided, getGithub() returns the value entered', () => {
    const gitId = 'YaraFake';
    const engineer = new Engineer('Yara', 4, 'yara@fakeemails.com', gitId);
    expect(engineer.getGithub()).toBe('yarafake');
  });
});
