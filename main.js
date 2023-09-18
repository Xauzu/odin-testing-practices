function capitalize(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return [...string].reverse().join('');
}

module.exports = { capitalize, reverseString };