// [] - Conjunto
// [^] - Nega o Conjunto
// \w - [a-zA-Z0-9]
// \W - [^a-zA-Z0-9]
// \d - [0-9]
// \D - [^0-9]
// \s - Espaços

const { characters } = require('./base');

console.log(characters.match(/[abc123]+/g))
console.log(characters.match(/[0-9]+/g))
console.log(characters.match(/[a-zA-Z0-9]+/g))
console.log(characters.match(/\w+/g))
console.log(characters.match(/[^a-zA-Z0-9]+/g)) //Negação
console.log(characters.match(/[\u0020-\u002F]+/g)) // Unicode