
const fs = require('fs')

const fullArr = fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf-8').match(/.{9}/g)
// console.log(fullArr);

const newArr = fullArr.map((el)=>el.split(''))


console.log(newArr);