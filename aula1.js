// g - Global (Encontra todas as ocorrencias)
// i - Insensitive (Não checka letras maisculas)
// () - Grupos
// | - Ou

const { textDefault } = require('./base')

const regExp1 = /(Maria|incluem '|João)(Deus é gracioso)/i;
const found = regExp1.exec(textDefault)

console.log(found)