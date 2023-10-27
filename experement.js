const fs = require("fs");
const { EOL } = require("os");



function read()
 {const fullArr = fs.readFileSync(`${__dirname}/puzzles.txt`, "utf-8").split(EOL);
// console.log(fullArr);
const res = fullArr.map((el) => el.match(/.{9}/g));
return console.log(res.map(el => el.split('')));
}

read()

// const newArr = fullArr.map((el)=>el.split(''))

const arr = res[0][0].match(/\d/g).map((el) => el * 1);

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const needNumbers = [...arrNumbers, ...arr].filter(el => arrNumbers.includes(el)!== arr.includes(el))





console.log(res[0][0]);
console.log(needNumbers);

console.table(res[0].split(''));


// const strArr = []
// for (let i = 0; i < 9; i++) {
//     if(res[0][0][i]!=='-') {strArr.push(res[0][0][i])}
//     strArr.push('*')
// }
// console.log(strArr);
