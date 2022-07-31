"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = exports.capitalize = void 0;

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
}; // module.exports = {capitalize, reverse};


exports.reverse = reverse;