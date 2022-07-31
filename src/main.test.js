// const {capitalize, reverse} = require('./main.js');
import {capitalize, reverse} from './main.js'

test('first letter of word is capital', () => {
    expect(capitalize('yeet')).toMatch('Yeet');
});

