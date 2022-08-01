const capitalize = (str) => {
    if (typeof str == 'string') {
        const s0 = str.charAt(0).toUpperCase();
        const s1 = str.slice(1);
        return s0 + s1;
    } else {
        throw new Error('not a string');
    }
}

const reverse = (str) => {
    if (typeof str == 'string') {
        return str.split('').reverse().join('');
    } else {
        throw new Error('not a string');
    }
}

const caesarCipher = (str, key) => {

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // captial letter
            let newCharCode = charCode + key;
            if (newCharCode < 65) {
                newCharCode = 91 + key;
            } else if (newCharCode > 90) {
                newCharCode = 64 + key;
            }
            result += String.fromCharCode(newCharCode);
        } else if (charCode >= 97 && charCode <= 122) { // lowercase letter 
            let newCharCode = charCode + key;
            if (newCharCode < 97) {
                newCharCode = 123 + key;
            } else if (newCharCode > 122) {
                newCharCode = 96 + key;
            }
            result += String.fromCharCode(newCharCode);
        } else { // other
            result += str.charAt(i)
        }
    }
    return result;
}

export { capitalize, reverse, caesarCipher};
