"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = exports.capitalize = exports.caesarCipher = void 0;

const capitalize = str => {
  if (typeof str == 'string') {
    const s0 = str.charAt(0).toUpperCase();
    const s1 = str.slice(1);
    return s0 + s1;
  } else {
    throw new Error('not a string');
  }
};

exports.capitalize = capitalize;

const reverse = str => {
  if (typeof str == 'string') {
    return str.split('').reverse().join('');
  } else {
    throw new Error('not a string');
  }
};

exports.reverse = reverse;

const caesarCipher = (str, key) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // captial letter
      let newCharCode = charCode + key;

      if (newCharCode < 65) {
        newCharCode = 91 + (newCharCode-65);
      } else if (newCharCode > 90) {
        newCharCode = 64 + (newCharCode - 90);
      }

      result += String.fromCharCode(newCharCode);
    } else if (charCode >= 97 && charCode <= 122) {
      // lowercase letter 
      let newCharCode = charCode + key;

      if (newCharCode < 97) {
        newCharCode = 123 + (newCharCode-97);
      } else if (newCharCode > 122) {
        newCharCode = 96 + (newCharCode - 122);
      }

      result += String.fromCharCode(newCharCode);
    } else {
      // other
      result += str.charAt(i);
    }
  }

  return result;
};

exports.caesarCipher = caesarCipher;