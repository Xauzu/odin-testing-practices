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

module.exports = { capitalize, reverseString, calculator };