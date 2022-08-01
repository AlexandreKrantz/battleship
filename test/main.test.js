"use strict";

var _main = require("./main.js");

test('first letter of word is capital', () => {
  expect((0, _main.capitalize)('yeet')).toMatch('Yeet');
});
test('one letter', () => {
  expect((0, _main.reverse)('a')).toMatch('a');
});
test('two letters', () => {
  expect((0, _main.reverse)('be')).toMatch('eb');
});
test('three letters', () => {
  expect((0, _main.reverse)('bed')).toMatch('deb');
});
test('four letters', () => {
  expect((0, _main.reverse)('yeet')).toMatch('teey');
});
test('test basic +1', () => {
  expect((0, _main.caesarCipher)('abcdef', 1)).toMatch('bcdefg');
});
test('test basic -1', () => {
  expect((0, _main.caesarCipher)('bcdefg', -1)).toMatch('abcdef');
});
test('test basic +6', () => {
  expect((0, _main.caesarCipher)('bcdefg', 6)).toMatch('hijklm');
});
test('test spaces', () => {
  expect(
    (0, _main.caesarCipher)('hi the name is bum', 7)
  ).toMatch('op aol uhtl pz ibt');
});
test('test z wrap', () => {
  expect((0, _main.caesarCipher)('zebra', 3)).toMatch('cheud');
});
test('test case preservation', () => {
  expect((0, _main.caesarCipher)('Hello There', 9)).toMatch('Qnuux Cqnan');
});
test('test punctuation', () => {
  expect((0, _main.caesarCipher)('yes; sir!', 7)).toMatch('flz; zpy!');
});