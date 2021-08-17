// VALIDATE EMAIL -------------------------------------------------------------
const emailCheck = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }

  return 'Please enter valid email';
};
// VALIDATE EMPTY --------------------------------------------------------------
const emptyCheck = (value) => {
  if (value === '') {
    return 'Answer cannot be empty';
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

// FILTER EMPTY SPACE ---------------------------------------------------------
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

// TEXT TO LOWERCASE -----------------------------------------------------------
const lowerCase = (value) => {
  return value.toLowerCase();
};

exports.emailCheck = emailCheck;
exports.emptyCheck = emptyCheck;
exports.numberCheck = numberCheck;
exports.trimProper = trimProper;
exports.nameProper = nameProper;
exports.lowerCase = lowerCase;
