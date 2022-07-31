var capitalize = function capitalize(str) {
    if (typeof str == 'string') {
        const s0 = str.charAt(0).toUpperCase();
        const s1 = str.slice(1);
        return s0 + s1;
    } else {
        throw new Error('not a string');
    }
};

module.exports = capitalize;