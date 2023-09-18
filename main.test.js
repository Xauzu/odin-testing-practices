const { reverse } = require('dns');
const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./main.js');

test('capitalize', () => {
    expect(capitalize('apple')).toMatch(/^[A-Z].*/);
    expect(capitalize('A bottle of water.')).toMatch(/^[A-Z].*/);
});

test('reverseString', () => {
    expect(reverseString('apple')).toBe('elppa');
});

test('calculator', () => {
    const calc = new calculator();
    expect(calc.add(4, 2)).toBe(6);
    expect(calc.subtract(4, 2)).toBe(2);
    expect(calc.multiply(4, 2)).toBe(8);
    expect(calc.divide(4, 2)).toBe(2);
    expect(calc.divide(4, 0)).toThrow();
});

test('caesarCipher', () => {
    expect(caesarCipher('A zombie is walking down the hallway. It is very slow!', 2)).toBe('C bqodkg ku ycnmkpi fqyp vjg jcnnyca. Kv ku xgta unqy!');
    expect(caesarCipher('A zombie is walking down the hallway. It is very slow!', 3)).toBe('D crpelh lv zdonlqj grzq wkh kdoozdb. Lw lv yhub vorz!');
});

test('analyzeArray', () => {
    const object = analyzeArray([1,8,3,4,2,6]);

    const expected = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };

    expect(analyzeArray(object)).toStrictEqual(expected);
})