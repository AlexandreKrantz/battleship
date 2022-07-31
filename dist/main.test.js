"use strict";

var _main = require("./main.js");

// const {capitalize, reverse} = require('./main.js');
test('first letter of word is capital', () => {
  expect((0, _main.capitalize)('yeet')).toMatch('Yeet');
});