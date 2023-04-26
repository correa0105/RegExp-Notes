const { textDefault } = require('./base')

const regExp1 = /João/gi;
const found = textDefault.match(regExp1);

/* console.log(found)
console.log(textDefault.replace(/João/ig, 'Vitor')) */
console.log(textDefault.replace(/João|Deus/ig, function(input) {
    return "_" + input.toLocaleUpperCase() + "_"
}))