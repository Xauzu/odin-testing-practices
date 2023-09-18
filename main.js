function capitalize(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return [...string].reverse().join('');
}

class calculator {
    constructor() {
    }
    
    add = (a, b) => a + b;
    subtract = (a, b) => a - b;
    multiply = (a, b) => a * b;
    divide = (a, b) => {
        if (b === 0) throw new Error('Division by 0');
        return a / b;
    }
}

function caesarCipher(string, shift) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (letters.includes(char.toLowerCase())) {
            const upper = char === char.toUpperCase() ? true : false; 

            const newChar = letters[(letters.indexOf(char.toLowerCase()) + shift) % 26];
            result += (upper ? newChar.toUpperCase() : newChar);
        }
        else
            // Punctuations, spaces, etc
            result += string[i];
    }

    return result;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };