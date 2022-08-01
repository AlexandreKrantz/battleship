import {capitalize, reverse, caesarCipher} from './main.js'

test('first letter of word is capital', () => {
    expect(capitalize('yeet')).toMatch('Yeet');
});

test('one letter', () => {
    expect(reverse('a')).toMatch('a');
});

test('two letters', () => {
    expect(reverse('be')).toMatch('eb');
});

test('three letters', () => {
    expect(reverse('bed')).toMatch('deb');
});

test('four letters', () => {
    expect(reverse('yeet')).toMatch('teey');
});

test('test basic +1', () => {
    expect(caesarCipher('abcdef',1)).toMatch('bcdefg');
});

test('test basic -1', () => {
    expect(caesarCipher('bcdefg',-1)).toMatch('abcdef');
});

test('test basic +6', () => {
    expect(caesarCipher('bcdefg', 6)).toMatch('hijklm');
});

test('test spaces', () => {
    expect(
        caesarCipher('hi the name is bum', 7)
    ).toMatch('op aol uhtl pz ibt');
});

test('test z wrap', () => {
    expect(caesarCipher('zebra', 3)).toMatch('cheud');
});

test('test case preservation', () => {
    expect(caesarCipher('Hello There', 9)).toMatch('Qnuux Cqnan');
});

test('test punctuation', () => {
    expect(caesarCipher('yes; sir!', 7)).toMatch('flz; zpy!');
});