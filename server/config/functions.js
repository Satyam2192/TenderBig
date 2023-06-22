/* This all of are helper function */
const { v4: uuidv4 } = require('uuid');

exports.toTitleCase = function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

exports.toUpperCase = function (str) {
  return str.toUpperCase();
};


exports.generateUUID = function () {
  const pattern = /[a-zA-Z0-9]/;
  let uuid = '';

  while (uuid.length < 6) {
    const char = uuidv4().charAt(0);
    if (pattern.test(char)) {
      uuid += char;
    }
  }
  return uuid;
}

exports.validateEmail = function (mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    return false;
  }
};
