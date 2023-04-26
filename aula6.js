const { cpfs, cpfs1 } = require('./base');

// ^ - Começa com
// $ - Termina com
// m - Multiline

const cpf = ' 254.224.877-45';

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs1);
console.log(cpfs1.match(cpfRegExp));