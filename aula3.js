// * (Opcionais) 0 ou N
// + (Obrigatório) 1 ou N
// ? (Opcionais) 0 ou 1
// \ - Caracter de Escape (Seleciona Literalmente)
// {n, m} - Minimo de vezes / Maximo de vezes

const { textDefault, files } = require('./base');

/* const regExp1 = /Alé+m+/gi;

console.log(textDefault.match(regExp1)) */

const regExp2 = /\.jpe{0,1}g/gi

for(const file of files) {
    const valid = file.match(regExp2);

    if(!valid) continue;

    console.log(file ,file.match(regExp2))
}