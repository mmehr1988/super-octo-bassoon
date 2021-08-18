// VALIDATE EMPTY --------------------------------------------------------------
const emptyCheck = (value) => {
  if (value === '') {
    return 'Answer cannot be empty';
  }
  return true;
};

// VALIDATE EMAIL -------------------------------------------------------------
const emailCheck = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }

  return 'Please enter valid email';
};

// VALIDATE ID ----------------------------------------------------------------
const idArray = [];
const idCheck = (value) => {
  if (idArray.includes(value)) {
    return 'Id already taken, please choose another.';
  } else if (value === '') {
    return 'Answer cannot be empty.';
  } else if (value === '0') {
    return 'Please enter number greater than 0.';
  } else if (value.indexOf(' ') >= 0) {
    return 'Please delete the empty space in your answer';
  } else if (Number(value) < 0 || Number(value) > 1000) {
    return 'Please enter a number between 1 & 1000.';
  } else if (!Number(value)) {
    return 'Id needs to be a number.';
  } else if (value.length > 10) {
    return 'Are you sure your id is ?';
  } else {
    return true;
  }
};

// VALIDATE NUMBER ------------------------------------------------------------
const numberCheck = (value) => {
  if (value === '') {
    return 'Answer cannot be empty.';
  } else if (value === '0') {
    return 'Please enter number greater than 0.';
  } else if (value.indexOf(' ') >= 0) {
    return 'Please delete the empty space in your answer';
  } else if (Number(value) < 0 || Number(value) > 1000) {
    return 'Please enter a number between 1 & 1000.';
  } else if (!Number(value)) {
    return 'Id needs to be a number.';
  } else {
    return true;
  }
};

// VALIDATE GITHUB ID ------------------------------------------------------------
// https://github.com/isiahmeadows/github-limits
const gitCheck = (value) => {
  if (value === '') {
    return 'Answer cannot be empty.';
  } else if (value.indexOf(' ') >= 0) {
    return 'Please delete the empty space in your answer';
  } else if (value.indexOf('--') >= 0) {
    return 'Cannot use consecutive hyphens in username';
  } else if (value.substring(0, 1) === '-') {
    return 'Cannot start with a hyphen';
  } else if (value.length > 39) {
    return 'Username cannot be longer than 39 characters.';
  } else {
    return true;
  }
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

// TEXT TO LOWERCASE -----------------------------------------------------------
const lowerCase = (value) => {
  return value.toLowerCase();
};

exports.emptyCheck = emptyCheck;
exports.emailCheck = emailCheck;

exports.idArray = idArray;
exports.idCheck = idCheck;

exports.numberCheck = numberCheck;
exports.gitCheck = gitCheck;

exports.nameProper = nameProper;
exports.lowerCase = lowerCase;
exports.lowerCase = lowerCase;
