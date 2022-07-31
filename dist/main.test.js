const capitalize = require('../dist/main.js');

test('first letter of word is capital', () => {
    expect(capitalize('yeet')).toMatch('Yeet');
});