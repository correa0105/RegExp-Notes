const { html } = require('./base');

console.log(html.match(/<.+>.+<\/.+>/g)); //Greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //Non-Greedy